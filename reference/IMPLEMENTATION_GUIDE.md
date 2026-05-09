# Tamil Cookbook — Implementation Guide for Copilot Agent

> **Reference prototype:** `Tamil Cookbook UI.html` in this project — open it to see all page designs in desktop + mobile.

---

## 1. Project Setup

### Stack
- **Framework:** Astro (SSG mode, `output: 'static'`)
- **Styling:** Tailwind CSS
- **Hosting:** GitHub Pages
- **Data:** JSON/JS files in repo + Pantry Cloud for planner

### Init Commands
```bash
npm create astro@latest tamilcookbook -- --template basics
cd tamilcookbook
npx astro add tailwind
```

### `astro.config.mjs`
```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ahprasandh.github.io',
  base: '/tamilcookbook',
  integrations: [tailwind()],
  output: 'static',
});
```

### Tailwind Config — `tailwind.config.mjs`
```js
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        turmeric:      { DEFAULT: '#E8A317', light: '#FFF3D6', muted: '#F5D88A' },
        leaf:          { DEFAULT: '#2D7A3A', light: '#E8F5EA', dark: '#1B5E26' },
        clay:          { DEFAULT: '#C0392B', light: '#FDECEB' },
        cream:         '#FFFBF5',
        'warm-white':  '#FFF8F0',
        sand:          '#F5F0E8',
        bark:          { DEFAULT: '#3D2B1F', muted: '#6B5744' },
        stone:         '#8C7B6B',
        smoke:         '#B8ADA3',
        mist:          '#E8E2DA',
        dinner:        '#D35400',
      },
      fontFamily: {
        heading: ['"DM Sans"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        tamil:   ['"Noto Sans Tamil"', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px', md: '10px', lg: '16px', xl: '24px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(61,43,31,.06)',
        md: '0 4px 12px rgba(61,43,31,.08)',
        lg: '0 8px 24px rgba(61,43,31,.1)',
      },
    },
  },
};
```

### Fonts — add to `BaseLayout.astro` `<head>`
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;0,9..40,800&family=Noto+Sans+Tamil:wght@400;600;700&display=swap" rel="stylesheet">
```

### GitHub Actions — `.github/workflows/deploy.yml`
Standard Astro GitHub Pages deployment. Trigger on push to `main`. Build with `npm run build`, deploy `dist/` to Pages.

---

## 2. Folder Structure

```
src/
├── data/
│   ├── recipes/
│   │   ├── breakfast/     (idli.js, dosa.js, pongal.js, upma.js)
│   │   ├── kulambu/       (sambar.js, vathal-kulambu.js, rasam.js)
│   │   ├── poriyal/       (beans-poriyal.js, cabbage-poriyal.js)
│   │   ├── rice/          (biriyani.js, lemon-rice.js)
│   │   ├── chutney/       (coconut-chutney.js, tomato-chutney.js)
│   │   ├── kootu/         (chayote-kootu.js)
│   │   ├── snacks/        (murukku.js, bajji.js)
│   │   ├── desserts/      (payasam.js, kesari.js)
│   │   ├── nonveg/        (chicken-curry.js, fish-fry.js)
│   │   └── sides/         (appalam.js, pickle.js)
│   └── planner.json
├── images/recipes/{recipe-id}/   (final-1.jpg, step-1.jpg …)
├── layouts/
│   └── BaseLayout.astro
├── components/
│   ├── NavBar.astro
│   ├── MobileNav.astro
│   ├── Calendar.astro
│   ├── DayCard.astro
│   ├── DayDetail.astro
│   ├── RecipeCard.astro
│   ├── RecipeGrid.astro
│   ├── CategoryFilter.astro
│   ├── ServingScaler.astro      (client-side JS island)
│   ├── ShoppingList.astro       (client-side JS island)
│   ├── VegDot.astro
│   ├── ComplexityDots.astro
│   ├── MealPill.astro
│   ├── CategoryBadge.astro
│   └── Btn.astro
├── pages/
│   ├── index.astro              (Calendar home)
│   ├── recipes/
│   │   ├── index.astro          (Recipe listing)
│   │   └── [id].astro           (Recipe detail)
│   ├── shopping/
│   │   └── index.astro          (Shopping list)
│   ├── admin/
│   │   └── index.astro          (Admin editor)
│   └── about.astro
└── styles/
    └── global.css
```

---

## 3. Data Schema

### Recipe File — `src/data/recipes/{category}/{id}.js`

```js
export default {
  id: "sambar",
  name_en: "Sambar",
  name_ta: "சாம்பார்",
  category: "kulambu",
  veg: true,
  complexity: 2,           // 1=easy, 2=medium, 3=hard (weekend only)
  servings: 4,
  prep_time_mins: 15,
  cook_time_mins: 45,
  ingredients: [
    { item: "toor-dal", name_en: "Toor Dal", quantity: 1, unit: "cup", shop_category: "grains" },
    { item: "onion", name_en: "Onion", quantity: 2, unit: "nos", shop_category: "vegetable" },
  ],
  steps: [
    { order: 1, text_en: "Wash and pressure cook...", text_ta: "துவரம் பருப்பை...", photo: "step-1.jpg" },
  ],
  photos: ["final-1.jpg"],
  tags: ["everyday", "comfort"],
};
```

### Planner — fetched from Pantry Cloud at runtime
```json
{
  "2026-05": {
    "2026-05-08": {
      "breakfast": ["idli", "coconut-chutney"],
      "lunch": ["plain-rice", "sambar", "beans-poriyal", "appalam"],
      "dinner": ["dosa", "tomato-chutney"]
    }
  }
}
```

### Pantry API
- **GET** `https://getpantry.cloud/apiv1/pantry/{PANTRY_ID}/basket/planner`
- **PUT** `https://getpantry.cloud/apiv1/pantry/{PANTRY_ID}/basket/planner` (body = full JSON)

---

## 4. Shared Components — Spec

### 4.1 `NavBar.astro` (Desktop)
- **Height:** 56px
- **Background:** `cream` (#FFFBF5), bottom border 1px `mist`
- **Logo:** Left-aligned. "🍛 Tamil Cookbook" — `font-heading`, 18px, weight 800, color `bark`
- **Nav items:** "Planner", "Recipes", "Shopping", "Admin" — 14px, weight 600
  - **Default:** color `stone`
  - **Active:** color `turmeric`, 2.5px bottom border `turmeric`
  - **Hover:** color `bark`
- **Spacing:** logo right-margin 40px, nav items padding 20px each

### 4.2 `MobileNav.astro` (Bottom Tab Bar)
- **Position:** fixed bottom, full width
- **Height:** 56px + safe-area-inset-bottom
- **Background:** white, top border 1px `mist`
- **Items:** 4 icons + labels centered — "📅 Planner", "📖 Recipes", "🛒 Shopping", "⚙️ Admin"
  - Icon: 20px, label: 10px
  - **Active:** color `turmeric`, weight 700
  - **Inactive:** opacity 50%, color `bark`
- **Important:** all page content needs `pb-16` (64px) on mobile to clear the nav

### 4.3 `VegDot.astro`
- Square outline with rounded corners (2px radius), inner filled circle
- **Veg:** green (`#2D7A3A`), **Non-veg:** red (`#C0392B`)
- Sizes: 12px (cards), 14px (default), 18px (detail page)
- Matches Indian food packaging standard

### 4.4 `ComplexityDots.astro`
- 3 circles in a row, gap 3px
- Filled dots use color based on level: 1=green, 2=yellow, 3=red
- Empty dots: `mist` color
- Sizes: 6px (card), 8px (mobile detail), 10px (desktop detail)

### 4.5 `MealPill.astro`
- Inline-flex, rounded-full, padding 3px 8px
- Left: 6px colored dot, right: label text (11px, weight 600)
- Colors per meal type:
  | Type | Dot/Text | Background |
  |------|----------|------------|
  | breakfast | `#E8A317` | `#FFF3D6` |
  | lunch | `#2D7A3A` | `#E8F5EA` |
  | dinner | `#D35400` | `#FFF0E5` |
  | snacks | `#C0392B` | `#FDECEB` |

### 4.6 `CategoryBadge.astro`
- Rounded-full pill, 11px weight 600, text-transform capitalize
- Color per category with 15% opacity background:
  | Category | Color |
  |----------|-------|
  | breakfast | `#E8A317` |
  | kulambu | `#C0392B` |
  | poriyal | `#2D7A3A` |
  | rice | `#E8A317` |
  | chutney | `#8C7B6B` |
  | snacks | `#D35400` |
  | desserts | `#9B59B6` |
  | nonveg | `#C0392B` |
  | kootu | `#16A085` |
  | sides | `#6B5744` |

### 4.7 `RecipeCard.astro`
- White background, border-radius 16px, shadow-sm, border 1px `mist`
- **Image area:** top, height 110px, placeholder background color, centered 🍽️ icon (36px, 15% opacity) — replace with real `<img>` when images exist
- **Content:** padding 10px 12px
  - Row 1: VegDot (12px) + name (13px, weight 700, `bark`)
  - Row 2: Tamil name (11px, `stone`, font-tamil)
  - Row 3: CategoryBadge (small) + ComplexityDots (6px) + time (10px, `smoke`)
- **Hover:** shadow-md, translateY(-1px), transition 150ms
- **Click:** navigates to `/recipes/{id}/`

### 4.8 `Btn.astro`
Variants:
| Variant | Background | Text |
|---------|-----------|------|
| primary | `turmeric` | white |
| secondary | `sand` | `bark` |
| ghost | transparent | `stone` |
| danger | `clay-light` | `clay` |

Sizes:
| Size | Font | Padding |
|------|------|---------|
| sm | 12px | 6px 12px |
| md | 13px | 8px 16px |
| lg | 15px | 12px 24px |

All: weight 600, border-radius 10px, inline-flex, gap 6px, cursor pointer.
Hover: darken background 5%.

---

## 5. Page Specs

### 5.1 Calendar Home (`/`) — index.astro

**Runtime behavior:** Client-side JS fetches planner from Pantry API on load, renders calendar.

#### Desktop Layout (≥768px)
- Full `NavBar` at top
- Content area: padding 24px 32px

**Month Header:**
- Left: Month name + year (24px, weight 800, `bark`) + prev/next ghost buttons
- Right: "Today" secondary button
- Margin-bottom: 24px

**Day-of-week Headers:**
- 7-column grid, each cell centered
- Text: 11px, weight 700, `smoke`, uppercase, letter-spacing 1px

**Calendar Grid:**
- 7-column CSS grid, gap 1px
- Background `mist` (shows as grid lines), border-radius 16px, overflow hidden
- 5 or 6 rows depending on month

**Day Cell:**
- Background: white (has meals), `sand` (empty/other month)
- Min-height: 95px, padding 8px 6px
- **Today:** background `turmeric-light`, left border 3px solid `turmeric`
- **Date number:** 13px, weight 600, `bark` (today: weight 800, `turmeric`)
- **Meal pills:** stacked vertically, gap 3px — show MealPill for each slot
- **Hover:** background `sand`, cursor pointer
- **Click:** expands day detail panel below the week row (or opens modal on mobile)

**Day Detail Panel (expanded):**
- Slides down below the clicked week row, full grid width
- Shows all meal slots vertically: Breakfast → Lunch → Dinner → Snacks
- Each slot: colored dot + label (14px, weight 700) + horizontal scroll of recipe mini-cards
- Mini-card: 130px wide, image 80px tall, name 12px, Tamil 10px, time 9px
- Close button top-right
- Animation: slideDown 200ms ease-out

#### Mobile Layout (<768px)
- `MobileNav` at bottom
- Top section: white background, border-bottom

**Month + Mini Calendar:**
- Month name (20px, weight 800) + prev/next buttons
- Below: 7×5 mini dot grid showing the full month
  - Each date: 24×24px circle, centered text (11px)
  - Today: `turmeric` background, white text, weight 800
  - Current week: `turmeric-light` background
  - Tapping a date scrolls week view to that week

**Week View:**
- Subheader: "Week of May 5 – 11" (11px, weight 700, `smoke`, uppercase)
- Vertical list of day cards, gap 8px, padding 16px

**Day Card (mobile):**
- White background, border-radius 16px, padding 12px 14px
- Border: 1px `mist` (today: 2px `turmeric`)
- Top row: date number (18px, weight 800) + day name (12px, `stone`) + "TODAY" badge if applicable
- Badge: 9px, `turmeric` background, white, rounded-full, weight 700
- Below: flex-wrap row of MealPills, gap 4px
- **Tap:** navigates to day detail view

**Day Detail View (mobile):**
- Full screen with back button
- Header: "Thursday, May 8" (18px, weight 800) + "Today" subtitle (11px, `turmeric`)
- Meal sections stacked, gap 20px
- Each section: dot + label header, then horizontal scroll of recipe cards
- Recipe cards: 130px wide, image 80px, name 12px weight 700, Tamil 10px

**Swipe:** Left/right swipe changes month (mobile only).

---

### 5.2 Recipe List (`/recipes/`) — recipes/index.astro

**Static page** — built at build time from recipe JS files.

#### Desktop (≥768px)
- `NavBar` active="recipes"
- Header row: "Recipes" (24px, weight 800) + search input right-aligned
- **Search input:** 280px wide, rounded-full, white background, border 1px `mist`, padding 8px 16px, 🔍 icon + placeholder "Search recipes..."
- **Category tabs:** flex-wrap row, gap 6px, margin-bottom 24px
  - Each tab: rounded-full pill, padding 6px 16px, 13px weight 600
  - Active: `bark` background, white text
  - Inactive: white background, `stone` text, border 1px `mist`
  - Hover: background `sand`
- **Recipe grid:** 4-column CSS grid, gap 16px
- Search filters both `name_en` and `name_ta` (client-side JS)

#### Mobile (<768px)
- Header: "Recipes" (20px, weight 800) in white top bar
- Search: full-width, `sand` background, rounded-full, margin-bottom 12px
- Category tabs: horizontal scroll, gap 6px, overflow-x auto, no wrap
  - Padding-bottom 8px for scroll indicator space
  - Each tab: flex-shrink 0, white-space nowrap
- **Recipe grid:** 2-column, gap 12px, padding 16px
- `MobileNav` bottom

---

### 5.3 Recipe Detail (`/recipes/{id}/`) — recipes/[id].astro

**Static page** with client-side serving scaler.

#### Desktop (≥768px)
- Breadcrumb: "Recipes › {name}" — 12px, `smoke`, "Recipes" link in `turmeric`
- **Hero section:** 2-column grid, gap 32px
  - Left: recipe image, border-radius 24px, height 320px, object-fit cover
  - Right column:
    - VegDot (18px) + CategoryBadge — flex row, gap 10px
    - Name: 32px, weight 800, `bark`
    - Tamil name: 18px, `stone`, font-tamil
    - Stats row: PREP / COOK / COMPLEXITY — each with 11px label (`smoke`, uppercase) + value below
    - **Serving scaler:** label "SERVINGS" (12px, `smoke`), then 4 buttons [1× 2× 3× 4×]
      - Each: 40×40px, border-radius 10px, 15px weight 700
      - Active: `turmeric` bg, white text
      - Inactive: `sand` bg, `bark` text
      - Click: updates all ingredient quantities via JS

- **Body:** 2-column grid — left 320px (ingredients), right flex (steps)

**Ingredients Panel:**
- Title: "Ingredients" (16px, weight 800)
- White card, border-radius 16px, border 1px `mist`
- Rows: item name (14px, `bark`) + quantity right-aligned (13px, `stone`, weight 600)
- Divider: 1px `sand` between rows
- Quantities update with scaler (multiply base × scaler)

**Steps:**
- Title: "Steps" (16px, weight 800)
- Vertical list, gap 16px
- Each step: flex row
  - Step number: 32px circle, `turmeric-light` bg, `turmeric` text, 14px weight 800
  - Text: 14px `bark`, line-height 1.6
  - Tamil text below: 12px `stone`, font-tamil, line-height 1.6
  - Step photo (if exists): below text, border-radius 12px, max-height 200px

#### Mobile (<768px)
- **Hero image:** full-width, height 220px, object-fit cover
- **Back button:** absolute top-left, ghost button with white bg 90% opacity, rounded-full
- Content padding: 16px 20px
- VegDot + CategoryBadge row
- Name: 24px weight 800, Tamil: 15px
- Stats: horizontal row, each centered (PREP/COOK/LEVEL)
- **Serving scaler:** 4 equal-width buttons, flex, height 36px, gap 6px
- **Ingredients:** full-width card, same row layout
- **Steps:** vertical, smaller step circles (26px), 13px text
- `MobileNav` bottom

**Serving Scaler JS (client-side island):**
```js
// Embed base ingredients as JSON in a <script> tag
// On button click, multiply quantities and update DOM
const baseIngredients = JSON.parse(document.getElementById('ingredients-data').textContent);
document.querySelectorAll('[data-scaler]').forEach(btn => {
  btn.addEventListener('click', () => {
    const multiplier = parseInt(btn.dataset.scaler);
    // Update active state
    document.querySelectorAll('[data-scaler]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Update quantities
    baseIngredients.forEach((ing, i) => {
      const el = document.querySelector(`[data-ingredient="${i}"] .qty`);
      el.textContent = `${ing.quantity * multiplier} ${ing.unit}`;
    });
  });
});
```

---

### 5.4 Shopping List (`/shopping/`) — shopping/index.astro

**Client-side rendered** — fetches planner from Pantry, resolves recipe IDs to ingredients, aggregates.

#### Logic
1. Fetch planner JSON from Pantry API
2. For the selected week (Mon–Sun), collect all recipe IDs from all meal slots
3. Import recipe data (pre-built as a JSON manifest at build time for client use)
4. Sum ingredients by `item` key, combining quantities with same unit
5. Group by `shop_category`

**Build-time:** Generate `public/recipe-manifest.json` containing all recipes' `id`, `name_en`, `ingredients` arrays. This avoids importing individual JS files at runtime.

#### Desktop (≥768px)
- `NavBar` active="shopping"
- Max-width: 720px, centered
- Header: "Shopping List" (24px, weight 800) + "🖨 Print" secondary button

**Week Selector:**
- White card, border-radius 16px, border 1px `mist`, padding 12px 16px
- Flex row: prev button, center text (week range 15px weight 700 + "Current Week" in turmeric 11px), next button
- Margin-bottom 24px

**Progress Bar:**
- Label: "X of Y items checked" (12px, `stone`) + percentage right-aligned (weight 700)
- Bar: 6px tall, `sand` background, `leaf` fill, rounded-full
- Margin-bottom 24px

**Category Groups:**
Each group:
- Header: category name with emoji (14px, weight 700, `bark`), margin-bottom 8px
- White card, border-radius 16px, border 1px `mist`
- Rows: checkbox + item name + quantity

**Checkbox:**
- 20×20px, border-radius 6px, border 2px
- Unchecked: border `mist`, transparent background
- Checked: border `leaf`, `leaf` background, white "✓" (12px weight 700)

**Row (checked):**
- Opacity 50%, item name has line-through text-decoration

**Shop categories with emoji:**
| Key | Display |
|-----|---------|
| vegetable | 🥬 Vegetables |
| meat | 🥩 Meat & Seafood |
| grains | 🌾 Grains & Lentils |
| spices | 🌶 Spices & Condiments |
| dairy | 🥛 Dairy & Fresh |
| other | 📦 Other |

#### Mobile (<768px)
- Same structure, full-width
- Checkbox size: 22×22px (bigger tap target)
- Row padding: 12px 14px (more spacing for fingers)
- Progress bar: 4px height
- `MobileNav` bottom

**Print CSS (`@media print`):**
- Hide nav, hide checkboxes' colors (use border only)
- Black text, no backgrounds, no shadows
- Each group starts on new line, clear headers
- Font size 12pt minimum

**Checkbox state:** stored in memory only (no persistence). Resets on page reload.

---

### 5.5 Admin (`/admin/`) — admin/index.astro

**Fully client-side page.**

#### Three Tabs
Tab bar: flex, border-bottom 2px `mist`. Active tab: `turmeric` text + 2.5px bottom border.

**Tab 1: Browse Recipes**
- Search input (260px) + "+ New Recipe" primary button
- Table layout with columns: Recipe (2fr), Category (1fr), Type (80px), Actions (100px)
- Table header: `sand` background, 11px uppercase labels
- Rows: 14px name weight 600, CategoryBadge small, VegDot, "Edit" ghost button in `turmeric`
- Row hover: background `sand`

**Tab 2: Recipe Editor**
- Standard form layout, max-width 700px
- Fields with labels (12px, `smoke`, uppercase, weight 700):
  - `name_en` — text input
  - `name_ta` — text input (font-tamil)
  - `category` — dropdown (10 categories)
  - `veg` — toggle switch
  - `complexity` — radio buttons 1/2/3 with labels Easy/Medium/Hard
  - `servings` — number input
  - `prep_time_mins` — number input
  - `cook_time_mins` — number input
- **Ingredients:** dynamic list
  - Each row: item (text), quantity (number), unit (dropdown: g, kg, ml, l, nos, cup, tbsp, tsp), shop_category (dropdown)
  - "+ Add Ingredient" ghost button below
  - "×" remove button per row
- **Steps:** dynamic list
  - Each row: text_en (textarea), text_ta (textarea), photo filename (text)
  - "+ Add Step" ghost button
- **Tags:** comma-separated text input
- **Photos:** list of filenames (text input, informational — actual images via git)
- "Preview" secondary button — renders recipe card + detail inline below

**Tab 3: Planner Editor**
- Same month grid as calendar home, but each day is clickable to edit
- Click day → modal or side panel with meal slot dropdowns:
  - **Breakfast:** multi-select from breakfast + chutney recipes
  - **Lunch:** multi-select from rice + kulambu + poriyal + sides
  - **Dinner:** multi-select from any category
  - **Snacks:** only enabled on Sat/Sun, select from snacks category
- Empty days: dashed border, `sand` background, "+" icon
- Filled days: colored pills (same as calendar)
- **Validation:** if weekday has complexity 3 recipe, show warning (orange border + ⚠️ icon)

**Save All Bar (sticky bottom):**
- White card, border-radius 16px, padding 16px 20px
- Left: status text ("2 recipes modified · Planner unsaved") in `stone` 13px
- Right: "Export Recipes (.zip)" secondary button + "Save Planner to Cloud" primary button
- **Export:** generates zip of modified recipe JS files in their category folder structure, triggers download
- **Save Planner:** PUT to Pantry Cloud API, show success toast

---

## 6. Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| < 640px | 2-col recipe grid, bottom nav, compact calendar |
| 640–767px | 2-col recipe grid, bottom nav, compact calendar |
| ≥ 768px | 4-col recipe grid, top nav bar, full month calendar |
| ≥ 1024px | max-width containers center, more padding |

**Global rule:** All interactive elements (buttons, checkboxes, cards) must have minimum 44×44px tap targets on mobile.

---

## 7. Animations & Transitions

| Element | Trigger | Animation |
|---------|---------|-----------|
| Recipe card | Hover | translateY(-1px), shadow-md, 150ms ease |
| Day detail panel | Open/close | slideDown/slideUp 200ms ease-out |
| Category tab | Active change | background-color 150ms ease |
| Checkbox | Toggle | scale(0.9→1) + background-color 150ms |
| Page transitions | Navigation | None (standard page load — static site) |
| Month change (mobile) | Swipe/button | Fade 150ms or slide 200ms |
| Toast (admin save) | Appear/dismiss | slideUp + fadeIn 200ms, auto-dismiss 3s |

---

## 8. Accessibility

- All images: descriptive `alt` text in English
- Color contrast: all text meets WCAG AA against its background
- VegDot: don't rely on color alone — the square (veg) pattern is distinct from round
- Focus states: 2px `turmeric` outline, 2px offset on all interactive elements
- Keyboard navigation: Tab through nav items, recipe cards, buttons
- `aria-current="page"` on active nav link
- Shopping list checkboxes: `role="checkbox"`, `aria-checked`
- Screen reader: Meal pills should have `aria-label` like "Breakfast: Idli"

---

## 9. Edge Cases

| Case | Behavior |
|------|----------|
| No planner data for a month | Show empty calendar cells, no pills |
| No recipes in a category | Show "No recipes in this category" message |
| Recipe has no photos | Show placeholder (colored bg + 🍽️ icon) |
| Search yields no results | Show "No recipes found" with suggestion to clear filters |
| Pantry API down | Show error banner: "Couldn't load planner. Check connection." + retry button |
| Shopping list for empty week | Show "No meals planned for this week" |
| Very long recipe name | text-overflow ellipsis on cards, full display on detail |
| Complexity 3 on weekday (admin) | Orange warning border + ⚠️ tooltip "Complex recipes are usually for weekends" |
| Step photo missing | Don't render image slot, just show text |

---

## 10. SEO & Meta

```html
<!-- Per recipe page -->
<title>{recipe.name_en} — Tamil Cookbook</title>
<meta name="description" content="Learn to make {recipe.name_en} ({recipe.name_ta}). {recipe.prep_time_mins + recipe.cook_time_mins} minutes, serves {recipe.servings}.">

<!-- Home -->
<title>Tamil Cookbook — Monthly Meal Planner</title>
<meta name="description" content="Plan Tamil South Indian meals monthly. Browse recipes, plan weekly menus, and generate shopping lists.">
```

---

## 11. Implementation Phases

### Phase 1: Scaffold (Day 1)
- [ ] Init Astro + Tailwind
- [ ] Configure for GitHub Pages
- [ ] Create `BaseLayout.astro` with responsive nav (desktop top + mobile bottom)
- [ ] Set up GitHub Actions deploy
- [ ] Add fonts, global CSS
- [ ] Verify: empty shell deploys to Pages

### Phase 2: Recipes (Day 2–3)
- [ ] Create 5 seed recipe JS files (idli, dosa, sambar, beans-poriyal, coconut-chutney)
- [ ] Add placeholder images
- [ ] Build all shared components (VegDot, ComplexityDots, MealPill, etc.)
- [ ] Build RecipeCard, CategoryFilter, RecipeGrid
- [ ] Build recipe listing page with search + category filter
- [ ] Build recipe detail page with serving scaler
- [ ] Verify: pages generate, images optimized, scaler works, responsive

### Phase 3: Calendar (Day 3–4)
- [ ] Create seed `planner.json` with 2 weeks of data
- [ ] Build Calendar grid component (desktop month view)
- [ ] Build mobile week view with mini-calendar
- [ ] Build day detail panel/view
- [ ] Add Pantry API fetch logic
- [ ] Verify: calendar renders, days link to recipes, today highlighted

### Phase 4: Shopping List (Day 4–5)
- [ ] Generate `recipe-manifest.json` at build time
- [ ] Build shopping page with week selector
- [ ] Implement aggregation logic (planner → recipes → sum ingredients)
- [ ] Build grouped checklist with checkboxes
- [ ] Add print CSS
- [ ] Verify: totals correct, checkboxes work, prints cleanly

### Phase 5: Admin (Day 5–6)
- [ ] Build tab layout
- [ ] Build browse recipes table
- [ ] Build recipe editor form with dynamic ingredient/step lists
- [ ] Build planner editor with day click → meal selector
- [ ] Implement save: Pantry PUT + recipe zip export
- [ ] Verify: edit flow works end-to-end

### Phase 6: Polish (Day 6–7)
- [ ] Responsive pass on all pages
- [ ] Add all hover/focus states
- [ ] Accessibility audit (contrast, aria, keyboard)
- [ ] SEO meta tags
- [ ] Add 10+ more seed recipes across all categories
- [ ] README with content workflow
- [ ] Final Lighthouse audit
- [ ] Verify: mobile, desktop, print all work

---

## 12. UX Improvements (Beyond Spec)

These are suggested enhancements. Implement if time permits.

1. **Cooking Mode** — On recipe detail, a "Start Cooking" button enters full-screen step-by-step view. Large text (24px+), one step at a time, prev/next buttons, screen stays awake via Wake Lock API. Timer button for steps that need waiting.

2. **Recipe Suggestions** — On the planner editor, when assigning meals, show a "Suggestions" section with recipes not used in the past 2 weeks, prioritized by variety.

3. **Nutritional Hints** — Optional field per recipe: calories, protein (approximate). Show small badge on cards.

4. **Drag-to-Plan** — In desktop planner editor, drag recipe cards from a sidebar into day cells.

5. **Seasonal Tags** — Tag recipes as seasonal (mango season, festival). Show a "This Month" section on recipe list highlighting seasonal recipes.

6. **Quick Add to Planner** — On recipe detail page, a "Add to Planner" button that lets you pick a day + meal slot.

7. **Dark Mode** — Toggle in nav. Dark backgrounds with warm tones (not pure black). Store preference in localStorage.

---

*Reference the visual prototype in `Tamil Cookbook UI.html` for exact look and feel of each component and page.*
