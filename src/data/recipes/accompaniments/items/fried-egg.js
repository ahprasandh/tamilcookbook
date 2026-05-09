export default {
  id: "fried-egg",
  name_en: "Fried Egg",
  name_ta: "ஃப்ரைட் எக்",
  category: "accompaniments/items",
  veg: false,
  complexity: 1,
  servings: 1,
  prep_time_mins: 1,
  cook_time_mins: 3,
  ingredients: [
    { item: "egg", name_en: "Egg", quantity: 2, unit: "nos", shop_category: "other" },
    { item: "oil", name_en: "Oil", quantity: 1, unit: "tbsp", shop_category: "other" },
    { item: "salt", name_en: "Salt", quantity: 1, unit: "pinch", shop_category: "spices" },
    { item: "pepper", name_en: "Black Pepper", quantity: 1, unit: "pinch", shop_category: "spices" },
  ],
  steps: [
    { order: 1, text_en: "Heat oil in a pan on medium heat.", text_ta: "ஒரு கடாயில் எண்ணெய் விட்டு நடுத்தர தீயில் சூடாக்கவும்." },
    { order: 2, text_en: "Crack eggs into the pan. Sprinkle salt and pepper.", text_ta: "முட்டைகளை உடைத்து கடாயில் ஊற்றி உப்பு, மிளகு தூவவும்." },
    { order: 3, text_en: "Fry until edges are crispy and yolk is set to your preference.", text_ta: "ஓரங்கள் மொறுமொறுப்பாகவும், மஞ்சள் கரு விருப்பம் போல் வெந்ததும் எடுக்கவும்." },
  ],
  tags: ["everyday", "quick", "protein"],
};
