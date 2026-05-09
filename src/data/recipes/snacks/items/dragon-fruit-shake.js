export default {
  id: "dragon-fruit-shake",
  name_en: "Dragon Fruit Shake",
  name_ta: "டிராகன் ஃப்ரூட் ஷேக்",
  category: "desserts/items",
  veg: true,
  complexity: 1,
  servings: 2,
  prep_time_mins: 5,
  cook_time_mins: 0,
  ingredients: [
    { item: "dragon-fruit", name_en: "Dragon Fruit (cubed)", quantity: 1, unit: "nos", shop_category: "vegetable" },
    { item: "milk", name_en: "Cold Milk", quantity: 1.5, unit: "cup", shop_category: "other" },
    { item: "sugar", name_en: "Sugar", quantity: 2, unit: "tbsp", shop_category: "other" },
    { item: "ice", name_en: "Ice Cubes", quantity: 4, unit: "nos", shop_category: "other" },
  ],
  steps: [
    { order: 1, text_en: "Scoop dragon fruit flesh, cube it. Blend with cold milk, sugar, and ice until smooth.", text_ta: "டிராகன் ஃப்ரூட் சதையை குளிர்ந்த பால், சர்க்கரை, ஐஸ் சேர்த்து மிருதுவாக அடிக்கவும்." },
    { order: 2, text_en: "Pour into glasses. Serve immediately.", text_ta: "கிளாஸில் ஊற்றி உடனே பரிமாறவும்." },
  ],
  tags: ["beverage", "quick", "colorful"],
};
