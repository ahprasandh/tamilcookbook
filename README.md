<p align="center">
  <img src="public/logo.svg" alt="தமிழ் சமையல்" width="120" />
</p>

<h1 align="center">தமிழ் சமையல்</h1>
<p align="center"><em>Tamil Cookbook — A family meal planner & recipe collection</em></p>

<p align="center">
  <a href="https://ahprasandh.github.io/tamilcookbook">ahprasandh.github.io/tamilcookbook</a>
</p>

---

## What is this?

A weekly meal planner built around Tamil home cooking. Plan breakfast, lunch, dinner, and snacks for the whole week — then get an auto-generated shopping list for everything you need.

The app comes with **120+ recipes** across categories like tiffin (dosa, idli, appam…), lunch (rice, kulambu, kootu…), snacks, desserts, juices, and accompaniments. Each recipe includes ingredients, step-by-step instructions, and images.

### How it works

1. **Plan** — Drag and drop food combos (main + sides) onto your weekly calendar
2. **Browse** — Explore recipes by category, search by name, view full details
3. **Shop** — Get a consolidated shopping list based on your planned meals
4. **Sync** — Meal plans are saved to the cloud so they stay in sync across devices

## Pages

| Page | What it does |
|------|-------------|
| **Calendar** (`/`) | Monthly view of planned meals with recipe images |
| **Recipes** (`/recipes`) | Browse all recipes with search and category filters |
| **Planner** (`/planner`) | Weekly drag-and-drop meal planner |
| **Shopping** (`/shopping`) | Auto-generated shopping list from planned meals |
| **Menu** (`/menu`) | Build and manage food combos (main + sides) |

## Recipe Categories

- **Tiffin** — Breakfast/dinner items: dosa, idli, appam, parotta, and their side dishes (chutney, sambar, kuruma)
- **Lunch** — Rice varieties, kulambu, kootu, poriyal, rasam, and accompaniments
- **Snacks** — Sundal, vadai, kozhukattai, and other evening bites
- **Desserts** — Payasam, kheer, pongal, and sweet treats
- **Accompaniments** — Kebabs, grilled items, and side dishes
- **Juices & Milkshakes** — Mango, strawberry, grape, dragon fruit, and more

## Tech Stack

- **Astro v5** — Static site generation
- **Tailwind CSS v4** — Styling via `@tailwindcss/vite`
- **Pantry Cloud** — Free JSON cloud storage for planner data
- **GitHub Pages** — Hosting with GitHub Actions deploy

## Project Structure

```
src/
├── data/
│   ├── recipes/            # Recipe definitions by category
│   │   ├── tiffin/         # mains/ and sides/
│   │   ├── lunch/          # mains/ and sides/
│   │   ├── snacks/         # items/
│   │   ├── desserts/       # items/
│   │   └── accompaniments/ # items/
│   ├── foods/              # Food combos (tiffin.js, lunch.js, extras.js)
│   ├── recipes.js          # Recipe loader (auto-discovers via glob)
│   ├── foods.js            # Food combo loader
│   └── planner.json        # Fallback planner data
├── pages/                  # Astro pages
├── components/             # Shared Astro components
├── layouts/                # Base layout
└── styles/                 # Global CSS
public/
└── images/recipes/         # Recipe images (*.jpg)
tools/
└── image-picker/           # Image management tool
```

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |

## Image Picker Tool

A local tool to search and download recipe images.

```bash
cd tools/image-picker
node server.js
# Open http://localhost:3456
```

The tool shows all recipes, highlights missing images, lets you search for images via URL, preview them, and save directly to `public/images/recipes/`. Images are saved as `{recipe-id}.jpg`.
