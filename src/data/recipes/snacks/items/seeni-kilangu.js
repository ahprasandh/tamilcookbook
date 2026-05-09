export default {
  id: "seeni-kilangu",
  name_en: "Seeni Kilangu (Sweet Potato)",
  name_ta: "சீனிக்கிழங்கு",
  category: "snacks/items",
  veg: true,
  complexity: 1,
  servings: 4,
  prep_time_mins: 5,
  cook_time_mins: 20,
  ingredients: [
    { item: "sweet-potato", name_en: "Sweet Potato", quantity: 3, unit: "nos", shop_category: "vegetable" },
    { item: "salt", name_en: "Salt", quantity: 0.5, unit: "tsp", shop_category: "spices" },
  ],
  steps: [
    { order: 1, text_en: "Wash sweet potatoes. Boil in water or steam until fork-tender (15-20 mins).", text_ta: "சீனிக்கிழங்கை கழுவி தண்ணீரில் அல்லது ஆவியில் 15-20 நிமிடம் வேக வைக்கவும்." },
    { order: 2, text_en: "Peel skin, slice or serve whole with a pinch of salt.", text_ta: "தோலை உரித்து துண்டுகளாக்கி சிறிது உப்பு தூவி பரிமாறவும்." },
  ],
  tags: ["evening-snack", "healthy", "simple"],
};
