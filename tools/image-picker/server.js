import http from 'node:http';
import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEST = path.resolve(__dirname, '../../public/images/recipes');
const RECIPES_DIR = path.resolve(__dirname, '../../src/data/recipes');

function getAllRecipeIds() {
  const ids = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) walk(path.join(dir, entry.name));
      else if (entry.name.endsWith('.js')) {
        const content = fs.readFileSync(path.join(dir, entry.name), 'utf-8');
        const match = content.match(/id:\s*["']([a-z0-9-]+)["']/);
        if (match) ids.push(match[1]);
      }
    }
  }
  walk(RECIPES_DIR);
  return ids.sort();
}

const server = http.createServer(async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  // Serve the HTML page
  if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(path.join(__dirname, 'index.html')));
    return;
  }

  // List existing images
  if (req.method === 'GET' && req.url === '/existing') {
    const files = fs.readdirSync(DEST).filter(f => f.endsWith('.jpg')).map(f => f.replace('.jpg', ''));
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(files));
    return;
  }

  // List all recipe IDs dynamically from source files
  if (req.method === 'GET' && req.url === '/recipes') {
    const ids = getAllRecipeIds();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(ids));
    return;
  }

  // Serve recipe images
  if (req.method === 'GET' && req.url.startsWith('/images/recipes/')) {
    const filename = path.basename(req.url.split('?')[0]);
    if (!/^[a-z0-9-]+\.jpg$/.test(filename)) { res.writeHead(400); res.end(); return; }
    const filePath = path.join(DEST, filename);
    if (fs.existsSync(filePath)) {
      res.writeHead(200, { 'Content-Type': 'image/jpeg', 'Cache-Control': 'no-cache' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404); res.end();
    }
    return;
  }

  // Download image
  if (req.method === 'POST' && req.url === '/download') {
    let body = '';
    for await (const chunk of req) body += chunk;
    const { id, url } = JSON.parse(body);

    // Validate id: only allow alphanumeric and hyphens
    if (!id || !/^[a-z0-9-]+$/.test(id)) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid recipe id' }));
      return;
    }

    // Basic URL validation
    let parsed;
    try { parsed = new URL(url); } catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid URL' }));
      return;
    }
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Only http/https URLs allowed' }));
      return;
    }

    const dest = path.join(DEST, `${id}.jpg`);
    try {
      await downloadFile(url, dest);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true, path: dest }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }

  // Upload pasted image (binary)
  if (req.method === 'POST' && req.url === '/upload') {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const buf = Buffer.concat(chunks);

    // Parse multipart or raw binary
    const contentType = req.headers['content-type'] || '';
    let id, imageData;

    if (contentType.includes('application/json')) {
      // JSON with base64 data
      const json = JSON.parse(buf.toString());
      id = json.id;
      const base64 = json.data.replace(/^data:image\/\w+;base64,/, '');
      imageData = Buffer.from(base64, 'base64');
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Unsupported content type' }));
      return;
    }

    if (!id || !/^[a-z0-9-]+$/.test(id)) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid recipe id' }));
      return;
    }

    // Limit to 10MB
    if (imageData.length > 10 * 1024 * 1024) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Image too large (max 10MB)' }));
      return;
    }

    const dest = path.join(DEST, `${id}.jpg`);
    try {
      fs.writeFileSync(dest, imageData);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true, path: dest }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

function downloadFile(url, dest, redirects = 5) {
  return new Promise((resolve, reject) => {
    if (redirects <= 0) return reject(new Error('Too many redirects'));
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Accept': 'image/*,*/*',
      }
    }, (response) => {
      if ([301, 302, 303, 307, 308].includes(response.statusCode)) {
        const loc = response.headers.location;
        if (!loc) return reject(new Error('Redirect without location'));
        const next = new URL(loc, url).href;
        return downloadFile(next, dest, redirects - 1).then(resolve, reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`HTTP ${response.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
      file.on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
    }).on('error', reject);
  });
}

const PORT = 3456;
server.listen(PORT, () => {
  console.log(`\n  Image Picker running at: http://localhost:${PORT}\n`);
});
