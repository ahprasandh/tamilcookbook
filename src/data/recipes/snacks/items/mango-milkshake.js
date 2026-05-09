export default {
  id: "mango-milkshake",
  name_en: "Mango Milkshake",
  name_ta: "மாம்பழ மில்க்ஷேக்",
  category: "desserts/items",
  veg: true,
  complexity: 1,
  servings: 2,
  prep_time_mins: 5,
  cook_time_mins: 0,
  ingredients: [
    { item: "mango", name_en: "Ripe Mango (chopped)", quantity: 2, unit: "nos", shop_category: "vegetable" },
    { item: "milk", name_en: "Cold Milk", quantity: 1.5, unit: "cup", shop_category: "other" },
    { item: "sugar", name_en: "Sugar", quantity: 2, unit: "tbsp", shop_category: "other" },
    { item: "ice", name_en: "Ice Cubes", quantity: 4, unit: "nos", shop_category: "other" },
  ],
  steps: [
    { order: 1, text_en: "Blend mango, cold milk, sugar, and ice cubes until thick and frothy.", text_ta: "மாம்பழம், குளிர்ந்த பால், சர்க்கரை, ஐஸ் சேர்த்து கெட்டியாக அடிக்கவும்." },
    { order: 2, text_en: "Pour into glasses. Serve immediately.", text_ta: "கிளாஸில் ஊற்றி உடனே பரிமாறவும்." },
  ],
  tags: ["beverage", "summer", "quick"],
};
