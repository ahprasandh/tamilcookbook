// Loads all recipe JS files from src/data/recipes/{category}/*.js at build time
const recipeModules = import.meta.glob('./recipes/**/*.js', { eager: true });

const recipes = Object.values(recipeModules).map((mod) => mod.default);

// Sort alphabetically by English name
recipes.sort((a, b) => a.name_en.localeCompare(b.name_en));

export default recipes;

export function getRecipeById(id) {
  return recipes.find((r) => r.id === id);
}

export function getRecipesByCategory(category) {
  return recipes.filter((r) => r.category === category);
}

export const categories = [
  'tiffin/mains', 'tiffin/sides',
  'lunch/mains', 'lunch/sides',
  'accompaniments/items',
  'snacks/items',
  'desserts/items',
];
