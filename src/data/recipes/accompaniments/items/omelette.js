export default {
  id: "omelette",
  name_en: "Omelette",
  name_ta: "ஆம்லெட்",
  category: "accompaniments/items",
  veg: false,
  complexity: 1,
  servings: 1,
  prep_time_mins: 2,
  cook_time_mins: 5,
  ingredients: [
    { item: "egg", name_en: "Egg", quantity: 2, unit: "nos", shop_category: "dairy" },
    { item: "onion", name_en: "Onion", quantity: 0.5, unit: "nos", shop_category: "vegetable" },
    { item: "green-chilli", name_en: "Green Chilli", quantity: 1, unit: "nos", shop_category: "vegetable" },
    { item: "coriander-leaves", name_en: "Coriander Leaves", quantity: 1, unit: "tbsp", shop_category: "vegetable" },
    { item: "oil", name_en: "Oil", quantity: 1, unit: "tsp", shop_category: "other" },
  ],
  steps: [
    { order: 1, text_en: "Beat eggs with salt and pepper. Add finely chopped onion, green chilli, and coriander.", text_ta: "முட்டையை உப்பு, மிளகு சேர்த்து அடித்து பொடியாக நறுக்கிய வெங்காயம், பச்சை மிளகாய், கொத்தமல்லி கலக்கவும்." },
    { order: 2, text_en: "Pour onto a hot oiled pan. Cook until set, flip and cook the other side.", text_ta: "சூடான எண்ணெய் தடவிய கடாயில் ஊற்றி வெந்ததும் திருப்பி சுடவும்." },
  ],
  tags: ["quick", "everyday", "protein"],
};
