export default {
  id: "maida-poori",
  name_en: "Maida Poori",
  name_ta: "மைதா பூரி",
  category: "tiffin/mains",
  veg: true,
  complexity: 1,
  servings: 4,
  prep_time_mins: 15,
  cook_time_mins: 15,
  ingredients: [
    { item: "maida", name_en: "All Purpose Flour (Maida)", quantity: 2, unit: "cup", shop_category: "grains" },
    { item: "water", name_en: "Water", quantity: 0.5, unit: "cup", shop_category: "other" },
    { item: "oil", name_en: "Oil (for frying)", quantity: 2, unit: "cup", shop_category: "other" },
    { item: "salt", name_en: "Salt", quantity: 0.5, unit: "tsp", shop_category: "spices" },
  ],
  steps: [
    { order: 1, text_en: "Mix maida and salt. Add water gradually and knead into a stiff smooth dough. Rest for 10 minutes.", text_ta: "மைதா, உப்பு கலந்து நீர் விட்டு இறுக்கமான மிருதுவான மாவாக பிசையவும். 10 நிமிடம் ஓய்வு விடவும்." },
    { order: 2, text_en: "Roll into small thin discs.", text_ta: "சிறு மெல்லிய வட்டங்களாக இடவும்." },
    { order: 3, text_en: "Deep fry in hot oil until puffed and lightly golden.", text_ta: "சூடான எண்ணெயில் உப்பி இலேசான பொன்னிறமாக பொரிக்கவும்." },
  ],
  tags: ["everyday", "kids-friendly"],
};
