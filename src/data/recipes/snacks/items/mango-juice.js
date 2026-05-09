export default {
  id: "mango-juice",
  name_en: "Mango Juice",
  name_ta: "மாம்பழ ஜூஸ்",
  category: "desserts/items",
  veg: true,
  complexity: 1,
  servings: 2,
  prep_time_mins: 5,
  cook_time_mins: 0,
  ingredients: [
    { item: "mango", name_en: "Ripe Mango (chopped)", quantity: 2, unit: "nos", shop_category: "vegetable" },
    { item: "sugar", name_en: "Sugar", quantity: 2, unit: "tbsp", shop_category: "other" },
    { item: "water", name_en: "Cold Water", quantity: 1, unit: "cup", shop_category: "other" },
  ],
  steps: [
    { order: 1, text_en: "Blend mango, sugar, and cold water until smooth. Strain if desired.", text_ta: "மாம்பழம், சர்க்கரை, தண்ணீர் சேர்த்து மிக்ஸியில் அடிக்கவும். விரும்பினால் வடிகட்டவும்." },
    { order: 2, text_en: "Serve chilled with ice cubes.", text_ta: "ஐஸ் கட்டிகள் சேர்த்து குளிர்ச்சியாக பரிமாறவும்." },
  ],
  tags: ["beverage", "summer", "quick"],
};
