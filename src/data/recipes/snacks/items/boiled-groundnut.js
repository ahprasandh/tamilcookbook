export default {
  id: "boiled-groundnut",
  name_en: "Boiled Groundnut",
  name_ta: "வேகவைத்த கடலை",
  category: "snacks/items",
  veg: true,
  complexity: 1,
  servings: 4,
  prep_time_mins: 5,
  cook_time_mins: 20,
  ingredients: [
    { item: "raw-groundnut", name_en: "Raw Groundnut (with shell)", quantity: 2, unit: "cup", shop_category: "grains" },
    { item: "salt", name_en: "Salt", quantity: 1, unit: "tbsp", shop_category: "spices" },
    { item: "turmeric", name_en: "Turmeric", quantity: 0.25, unit: "tsp", shop_category: "spices" },
  ],
  steps: [
    { order: 1, text_en: "Wash groundnuts. Add to a pot with water, salt, and turmeric.", text_ta: "கடலையை கழுவி பாத்திரத்தில் தண்ணீர், உப்பு, மஞ்சள் சேர்க்கவும்." },
    { order: 2, text_en: "Boil for 15-20 mins until soft. Drain and serve warm.", text_ta: "15-20 நிமிடம் வேகவைத்து வடிகட்டி சூடாக பரிமாறவும்." },
  ],
  tags: ["evening-snack", "healthy", "rainy-day"],
};
