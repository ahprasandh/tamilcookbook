// Food items (menus) — manually-defined combos of main + sides
// Categories: 'tiffin' (used for breakfast/dinner) and 'lunch'
// Data loaded from src/data/foods/tiffin.js and src/data/foods/lunch.js

import tiffinRaw from './foods/tiffin.js';
import lunchRaw from './foods/lunch.js';
import extrasRaw from './foods/extras.js';
import { getRecipeById } from './recipes.js';

// Enrich with category and generated name_en
function enrichFood(item, category) {
  const mainName = getRecipeById(item.main)?.name_en || item.main;
  const sideNames = item.sides.map(s => getRecipeById(s)?.name_en || s);
  return {
    ...item,
    category,
    name_en: [mainName, ...sideNames].join(' + '),
  };
}

const foods = [
  ...tiffinRaw.map(f => enrichFood(f, 'tiffin')),
  ...lunchRaw.map(f => enrichFood(f, 'lunch')),
  ...extrasRaw.map(f => enrichFood(f, 'extras')),
];

export default foods;

export function getFoodById(id) {
  return foods.find((f) => f.id === id);
}

export function getFoodsByCategory(category) {
  return foods.filter((f) => f.category === category);
}

// Get all recipe IDs referenced by a food item
export function getFoodRecipeIds(food) {
  if (!food) return [];
  const ids = [food.main, ...food.sides];
  return ids;
}

// Get unique mains for rotation pool in a category
export function getRotationPool(category) {
  const catFoods = foods.filter((f) => f.category === category);
  return [...new Set(catFoods.map((f) => f.main))];
}

// ---- TIFFIN ROTATION ----
// All combos must be used before any combo repeats.
// Same main is allowed in same rotation if side differs.
export function getTiffinRotationStatus(monthData, excludeDay) {
  const pool = foods.filter(f => f.category === 'tiffin').map(f => f.id);
  if (!pool.length) return { used: [], remaining: [...pool], pool };

  const slots = ['breakfast', 'dinner'];
  const sortedDays = Object.keys(monthData || {}).sort();
  let usedThisRound = [];

  for (const dk of sortedDays) {
    if (dk === excludeDay) continue;
    const dayData = monthData[dk];
    if (!dayData) continue;

    for (const slot of slots) {
      const foodId = dayData[slot];
      if (!foodId || !pool.includes(foodId)) continue;

      if (usedThisRound.includes(foodId)) {
        // Combo repeated = new round
        usedThisRound = [foodId];
      } else {
        usedThisRound.push(foodId);
      }

      if (usedThisRound.length === pool.length) {
        usedThisRound = [];
      }
    }
  }

  const remaining = pool.filter(id => !usedThisRound.includes(id));
  return { used: usedThisRound, remaining, pool };
}

// ---- LUNCH ROTATION ----
// Two-layer rule:
// 1. Within a rotation: main can't repeat (all mains must be used before any repeats)
// 2. Across rotations: exact combo can't repeat until ALL combos are done
export function getLunchRotationStatus(monthData, excludeDay) {
  const allLunch = foods.filter(f => f.category === 'lunch');
  const pool = allLunch.map(f => f.id);
  const mainPool = [...new Set(allLunch.map(f => f.main))];
  if (!pool.length) return { usedCombos: [], usedMains: [], remainingCombos: [...pool], remainingMains: [...mainPool], pool, mainPool };

  const sortedDays = Object.keys(monthData || {}).sort();
  // Track combos used across all rotations (until full cycle)
  let usedCombosGlobal = [];
  // Track mains used in current main-rotation
  let usedMainsThisRound = [];

  for (const dk of sortedDays) {
    if (dk === excludeDay) continue;
    const foodId = monthData[dk]?.lunch;
    if (!foodId || !pool.includes(foodId)) continue;

    const food = getFoodById(foodId);
    if (!food) continue;

    // Track main rotation
    if (usedMainsThisRound.includes(food.main)) {
      usedMainsThisRound = [food.main];
    } else {
      usedMainsThisRound.push(food.main);
    }
    if (usedMainsThisRound.length === mainPool.length) {
      usedMainsThisRound = [];
    }

    // Track combo global cycle
    if (usedCombosGlobal.includes(foodId)) {
      // Shouldn't happen if enforced, but reset
      usedCombosGlobal = [foodId];
    } else {
      usedCombosGlobal.push(foodId);
    }
    if (usedCombosGlobal.length === pool.length) {
      usedCombosGlobal = [];
    }
  }

  const remainingCombos = pool.filter(id => !usedCombosGlobal.includes(id));
  const remainingMains = mainPool.filter(id => !usedMainsThisRound.includes(id));
  return { usedCombos: usedCombosGlobal, usedMains: usedMainsThisRound, remainingCombos, remainingMains, pool, mainPool };
}

export const foodCategories = ['tiffin', 'lunch', 'extras'];
