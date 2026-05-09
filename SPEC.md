# Tamil Cookbook — Static Monthly Meal Planner

## Overview
A zero-backend static site for planning Tamil South Indian meals monthly, browsing recipes, and generating weekly shopping lists. All data lives in JSON files in the repo. Built on every push, served as plain HTML.

**Repo:** https://github.com/ahprasandh/tamilcookbook  
**URL:** `ahprasandh.github.io/tamilcookbook`

---

## Tech Stack

| Layer | Tool | Cost |
|---|---|---|
| Framework | Astro (SSG) | Free |
| Styling | Tailwind CSS | Free |
| Data | JSON files in repo | Free |
| Images | Committed to repo, optimized at build | Free |
| Build | GitHub Actions | Free (2,000 min/mo) |
| Hosting | GitHub Pages | Free |

---

## Storage

| Data | Location | Why |
|---|---|---|
| Recipes | Repo (`src/data/recipes/{category}/{name}.js`) | Static, versioned, individually cacheable |
| Planner | Pantry Cloud (remote) | Changes frequently, no git push needed |

**Pantry Cloud:**
- **Pantry ID:** `56a0d189-287b-481f-8fb0-2544dc2df01e`
- **Basket:** `planner`
- **Read:** `GET https://getpantry.cloud/apiv1/pantry/56a0d189-287b-481f-8fb0-2544dc2df01e/basket/planner`
- **Write:** `PUT https://getpantry.cloud/apiv1/pantry/56a0d189-287b-481f-8fb0-2544dc2df01e/basket/planner`

> **Security note:** If the repo is public, move the Pantry ID to a GitHub Actions secret (`PANTRY_ID`) and reference it as `${{ secrets.PANTRY_ID }}` in the build workflow. Anyone with this ID can overwrite your planner data.

**Runtime flow (no rebuild needed for planner changes):**
1. User visits the site (static HTML served from GitHub Pages)
2. Calendar/Shopping pages fetch planner data from Pantry API via client-side JS
3. JS renders the calendar grid and shopping list dynamically
4. Recipe pages remain fully static (pre-built HTML)

**Updating the planner:**
- Use `curl` / Postman / a simple admin page to PUT new planner JSON to the basket
- Changes reflect immediately on the site (no git push or rebuild needed)

---

## Data Schema

### Recipe Files — `src/data/recipes/{category}/{name}.js`

Recipes are stored as **individual JS files** organized by category folder. This avoids cache-busting the entire recipe set when one recipe changes.

**Why JS instead of JSON?**
- JS files can export objects and are individually cacheable
- JSON in a single file busts cache for all recipes on any edit
- JS allows comments for maintainability

**File path convention:** `src/data/recipes/{category}/{recipe-id}.js`

Each file exports a recipe object:

```js
// src/data/recipes/kulambu/chicken-kulambu.js
export default {
  id: "chicken-kulambu",
  name_en: "Chicken Kulambu",
  name_ta: "சிக்கன் குழம்பு",
  category: "kulambu",
  veg: false,
  complexity: 2, // 1=simple, 2=medium, 3=complex (weekend only)
  servings: 4,
  prep_time_mins: 15,
  cook_time_mins: 45,
  ingredients: [
    { item: "chicken", quantity: 500, unit: "g", shop_category: "meat" },
    { item: "onion", quantity: 2, unit: "nos", shop_category: "vegetable" },
  ],
  steps: [
    { order: 1, text_en: "Marinate chicken...", text_ta: "சிக்கனை...", photo: "step-1.jpg" },
  ],
  photos: ["final-1.jpg", "final-2.jpg"],
  tags: ["spicy", "weekend"],
};
```

**Recipe fields:**
- `id` — unique string identifier (matches filename)
- `name_en` — English name
- `name_ta` — Tamil name
- `category` — matches parent folder name
- `veg` — boolean
- `servings` — base serving count
- `prep_time_mins` — prep time in minutes
- `cook_time_mins` — cook time in minutes
- `ingredients[]` — item, quantity, unit, shop category
- `steps[]` — order, text (en + ta), optional step photo
- `photos[]` — final dish photos
- `complexity` — 1 (simple), 2 (medium), 3 (complex). Weekdays should only use 1-2. Complex dishes (3) reserved for weekends.
- `tags[]` — e.g., spicy, weekend, quick

### `src/data/planner.json`

Maps dates to meal assignments (recipe IDs). Each day has slots based on these rules:

| Slot | Type | When | Description |
|---|---|---|---|
| breakfast | Combo (array) | Every day | From `breakfast` + accompaniment (e.g., idli + chutney) |
| lunch | Combo (array) | Every day | Array of recipe IDs: rice + kulambu + poriyal + side |
| dinner | Combo (array) | Every day | Can mix categories (e.g., dosa + different chutney, or chapati + kulambu) |
| snacks | Single/array | **Sat & Sun only** | Suggested from `snacks` category |

**Complexity constraint:** Weekdays (Mon-Fri) should only have recipes with complexity 1-2. Complexity 3 dishes are reserved for weekends.

```json
{
  "2026-05": {
    "2026-05-01": {
      "breakfast": ["idli", "coconut-chutney"],
      "lunch": ["plain-rice", "sambar", "beans-poriyal", "appalam"],
      "dinner": ["dosa", "tomato-chutney"]
    },
    "2026-05-03": {
      "breakfast": ["pongal", "coconut-chutney"],
      "lunch": ["plain-rice", "vathal-kulambu", "cabbage-poriyal", "appalam"],
      "dinner": ["chapati", "chicken-kulambu"],
      "snacks": ["murukku"]
    }
  }
}
```

**Rules:**
- Snacks slot only on Saturday/Sunday
- Weekday meals must use recipes with complexity ≤ 2
- Dinner can reuse breakfast items (e.g., dosa) with different accompaniments

### Categories (10)

| # | Key | Examples |
|---|---|---|
| 1 | breakfast | Idli, Dosa, Pongal, Upma |
| 2 | rice | Biriyani, Lemon rice, Tomato rice |
| 3 | kulambu | Sambar, Vathal kulambu, Rasam |
| 4 | poriyal | Beans poriyal, Cabbage stir fry |
| 5 | kootu | Chayote kootu, Spinach kootu |
| 6 | chutney | Coconut chutney, Thogayal |
| 7 | snacks | Bajji, Bonda, Murukku |
| 8 | desserts | Payasam, Halwa, Kesari |
| 9 | nonveg | Chicken curry, Fish fry |
| 10 | sides | Appalam, Pickle, Vadagam |

---

## Image Storage

- Path: `src/images/recipes/{recipe-id}/`
- Multiple photos per recipe: `step-1.jpg`, `step-2.jpg`, `final-1.jpg`, etc.
- Astro optimizes (resize, WebP conversion) at build time
- Recommended max: ~500KB per source image

---

## Pages

| Page | URL | Description |
|---|---|---|
| Calendar | `/` | Monthly grid. Each day shows assigned meals. Click to expand. Month navigation. Current week highlighted. |
| Recipe List | `/recipes/` | Card grid with photo + name (en/ta) + category badge. Filter by category. Search by name. |
| Recipe Detail | `/recipes/{id}/` | Hero photo, name (en/ta), time, servings, serving size scaler, ingredients, step-by-step with photos. |
| Shopping List | `/shopping/` | Select a week → aggregated ingredients grouped by shop category. Combined quantities. Print-friendly. |
| About | `/about/` | Project info. |

---

## Serving Size Scaler

Only client-side JS on the site. Recipe page embeds ingredient data in a `<script>` tag. A dropdown lets users pick 1x/2x/3x/4x, and JS updates quantities in the DOM.

---

## Project Structure

### Sitemap

```
ahprasandh.github.io/tamilcookbook/
│
├── /                              ← Calendar (Home) — monthly planner grid
│
├── /recipes/                      ← Recipe listing — filter & search
│   ├── /recipes/idli/
│   ├── /recipes/dosa/
│   ├── /recipes/sambar/
│   ├── /recipes/chicken-kulambu/
│   └── /recipes/{id}/             ← One page per recipe
│
├── /shopping/                     ← Weekly shopping list
│
├── /admin/                        ← Edit recipes + planner, export/save
│
└── /about/                        ← About the project
```

| Type | Pages | Rendering |
|---|---|---|
| Static (build time) | `/recipes/`, `/recipes/{id}/`, `/about/` | From JS recipe files |
| Dynamic (client-side) | `/`, `/shopping/`, `/admin/` | Fetches planner from Pantry API |

### Folder Structure

```
tamilcookbook/
├── .github/workflows/deploy.yml
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── src/
│   ├── data/
│   │   ├── recipes/
│   │   │   ├── breakfast/
│   │   │   │   ├── idli.js
│   │   │   │   ├── dosa.js
│   │   │   │   └── pongal.js
│   │   │   ├── kulambu/
│   │   │   │   ├── sambar.js
│   │   │   │   ├── vathal-kulambu.js
│   │   │   │   └── chicken-kulambu.js
│   │   │   ├── poriyal/
│   │   │   │   └── beans-poriyal.js
│   │   │   ├── kootu/
│   │   │   ├── chutney/
│   │   │   ├── snacks/
│   │   │   ├── desserts/
│   │   │   ├── nonveg/
│   │   │   ├── rice/
│   │   │   └── sides/
│   │   └── planner.json
│   ├── images/
│   │   └── recipes/
│   │       ├── idli/
│   │       │   ├── final-1.jpg
│   │       │   └── step-1.jpg
│   │       └── chicken-kulambu/
│   │           ├── final-1.jpg
│   │           ├── step-1.jpg
│   │           └── step-2.jpg
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── Calendar.astro
│   │   ├── DayCard.astro
│   │   ├── RecipeCard.astro
│   │   ├── ShoppingList.astro
│   │   ├── ServingScaler.astro
│   │   └── CategoryFilter.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── recipes/
│   │   │   ├── index.astro
│   │   │   └── [id].astro
│   │   ├── shopping/
│   │   │   └── index.astro
│   │   └── about.astro
│   └── styles/
│       └── global.css
└── public/
    └── favicon.svg
```

---

## Implementation Phases

### Phase 1 — Scaffold
1. Init Astro + Tailwind, configure for GitHub Pages (`site`, `base`, static output)
2. Create `BaseLayout.astro` with responsive nav
3. Set up GitHub Actions deploy workflow
4. Verify: `npm run build` works, empty shell deploys

### Phase 2 — Recipes
1. Create `recipes.json` with 3–5 seed recipes
2. Add sample images to repo
3. Build `RecipeCard`, category filter, recipe listing page
4. Build recipe detail page with serving scaler
5. Verify: Pages generate, images optimized, scaler works

### Phase 3 — Calendar
1. Create `planner.json` with a sample week
2. Build `Calendar.astro` (monthly grid), `DayCard.astro`
3. Build home page, month navigation
4. Verify: Calendar renders, days link to recipes

### Phase 4 — Shopping List
1. Aggregation logic: planner → recipes → sum ingredients by week
2. Build shopping page with week selector, grouped by shop category
3. Print-friendly CSS
4. Verify: Totals correct, works on mobile

### Phase 5 — Polish
1. Responsive pass (mobile-first for grocery store use)
2. Tamil font (Noto Sans Tamil)
3. SEO meta tags
4. README for adding recipes and updating planner
5. Verify: Lighthouse, mobile, end-to-end flow

---

## Content Workflow

**Quick update (planner only — no git needed):**
1. Go to `/admin/` → Planner Editor tab
2. Assign recipes to days
3. Click "Save All" → planner saved to Pantry → live immediately

**Adding/editing recipes:**
1. Go to `/admin/` → Recipe Editor tab
2. Create or edit recipe
3. Add photos to `src/images/recipes/{id}/` in your local repo
4. Click "Save All" → downloads zip of recipe JS files + saves planner to Pantry
5. Extract zip into repo, commit, push → site rebuilds with new recipe pages

---

## Decisions

- Rasam merged into kulambu category
- **Recipes stored as individual JS files** in `src/data/recipes/{category}/` — avoids cache issues with a single JSON blob
- **Breakfast** = combo (breakfast item + accompaniment, e.g., idli + chutney)
- **Lunch** = combo (rice + kulambu + poriyal + side)
- **Dinner** = combo (can mix categories, e.g., dosa + different chutney, chapati + kulambu)
- **Snacks** = Saturday & Sunday only, from snacks category
- **Complexity rating** on each recipe: 1 (simple), 2 (medium), 3 (complex/weekend only)
- **Weekday constraint** — only complexity 1-2 recipes on Mon-Fri
- Images stored in repo (not external URLs)
- Multiple photos per recipe (varies)
- Bilingual: English + Tamil
- Serving scaler: only client JS on the site
- Weekly shopping list aggregation
- No localStorage, no backend, no database

---

## UI/UX Design

### Design Language
- **Colors:** Turmeric yellow (#F5A623), banana leaf green (#2D7A3A), clay red (#C0392B), cream white (#FFF8F0) background
- **Cultural feel:** Kolam-inspired subtle border patterns, banana leaf texture on meal cards
- **Fonts:** Noto Sans Tamil (Tamil text), Inter or DM Sans (English)
- **Mobile-first** — primary use is in the kitchen or at the store
- **Veg/Non-veg indicator** — green dot / red dot (like Indian food packaging)

### Design Principles

| Principle | Implementation |
|---|---|
| Kitchen-friendly | Large text, high contrast, big tap targets (wet/greasy hands) |
| Store-friendly | Shopping list: scannable, checkable, printable |
| Fast | Recipe pages are static HTML. Calendar/shopping use lightweight fetch. |
| Bilingual | Tamil always visible alongside English — never behind a toggle |
| Low-data | Images optimized at build. No heavy JS frameworks. Minimal network requests. |

### Page Wireframes

#### 1. Calendar Home (`/`)
- Monthly grid (Mon–Sun columns)
- Each day cell shows color-coded pills: 🟡 Breakfast, 🟢 Lunch, 🟠 Dinner, 🔴 Snacks (weekends)
- Tap a day → slides open a day detail panel below with full meal names + thumbnails
- Current day: ring/glow highlight. Current week: subtle background.
- Month navigation: prev/next arrows. Mobile: swipe left/right.

#### 2. Day Detail (expanded panel)
- Shows all meal slots vertically: Breakfast → Lunch → Dinner → Snacks (weekends)
- Each slot lists recipe cards (thumbnail + name) in a horizontal scroll
- Each card tappable → opens recipe detail

#### 3. Recipe List (`/recipes/`)
- Horizontal scroll category tabs at top: [All] [Breakfast] [Kulambu] [Poriyal] ...
- Grid of recipe cards: photo, English name, Tamil name, total time, complexity dots (●○○ / ●●○ / ●●●)
- Search bar filters both name_en and name_ta

#### 4. Recipe Detail (`/recipes/{id}/`)
- Hero image (final photo)
- Name (en + ta), category badge, time, complexity, veg/non-veg dot
- Serving scaler buttons: [1] [2] [3] [4] — updates ingredient quantities instantly
- Ingredients list with quantities and units
- Steps as vertical cards with optional step photo, bilingual text

#### 5. Shopping List (`/shopping/`)
- Week selector with prev/next arrows (defaults to current week)
- Ingredients grouped by shop category (🥬 Vegetables, 🥩 Meat, 🌶 Spices, 🌾 Grains...)
- Checkboxes to strike through items while shopping (client-side only, not persisted)
- Print button → clean print CSS (no nav, no colors, just the list)
- Large tap targets, readable in bright store lighting

#### 6. Admin / Editor (`/admin/`)

All-in-one page to browse recipes, edit them, edit the planner, and save everything in one shot.

**Three tabs:**

**Tab 1: Browse Recipes**
- Same card grid as `/recipes/` but with an [Edit] button on each card
- [+ New Recipe] button at top
- Click a card → opens recipe editor (Tab 2)

**Tab 2: Recipe Editor**
- Form fields: name_en, name_ta, category (dropdown), veg (toggle), complexity (1/2/3), servings, prep_time, cook_time
- Ingredients: dynamic list — add/remove rows (item, quantity, unit, shop_category)
- Steps: dynamic list — add/remove rows (text_en, text_ta, photo filename)
- Photos: list photo filenames (actual upload handled via git)
- Tags: comma-separated input
- [Preview] button — shows how the recipe will look
- Changes held in memory until "Save All"

**Tab 3: Planner Editor**
- Monthly calendar grid (same as home page)
- Click a day → opens meal slot editor:
  - Breakfast: pick recipe(s) from a dropdown filtered to breakfast + chutney categories
  - Lunch: pick combo from dropdowns (rice, kulambu, poriyal, side)
  - Dinner: pick recipe(s) from any category
  - Snacks: only enabled on Sat/Sun, pick from snacks category
- Color-coded to show filled vs empty days
- Warns if weekday has complexity 3 recipe

**Save All (one-shot export):**
- Planner → PUT to Pantry Cloud (immediate, live on site)
- Recipes → downloads a `.zip` file containing all modified/new recipe JS files in their category folders
- User extracts zip into `src/data/recipes/`, commits, pushes → site rebuilds with new recipes

**Why this split?**
- Planner changes often (weekly) → Pantry allows instant updates without git
- Recipes change rarely → git gives version history, image management, code review
