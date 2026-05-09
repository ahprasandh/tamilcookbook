export default {
  id: "grape-juice",
  name_en: "Grape Juice",
  name_ta: "திராட்சை ஜூஸ்",
  category: "desserts/items",
  veg: true,
  complexity: 1,
  servings: 2,
  prep_time_mins: 5,
  cook_time_mins: 0,
  ingredients: [
    { item: "grapes", name_en: "Grapes (black/purple)", quantity: 2, unit: "cup", shop_category: "vegetable" },
    { item: "sugar", name_en: "Sugar", quantity: 1, unit: "tbsp", shop_category: "other" },
    { item: "water", name_en: "Cold Water", quantity: 0.5, unit: "cup", shop_category: "other" },
    { item: "lemon", name_en: "Lemon Juice", quantity: 1, unit: "tsp", shop_category: "vegetable" },
  ],
  steps: [
    { order: 1, text_en: "Blend grapes with cold water and sugar. Strain through a sieve.", text_ta: "திராட்சையை தண்ணீர், சர்க்கரை சேர்த்து அடித்து வடிகட்டவும்." },
    { order: 2, text_en: "Add lemon juice. Serve chilled with ice.", text_ta: "எலுமிச்சை சாறு சேர்த்து ஐஸுடன் பரிமாறவும்." },
  ],
  tags: ["beverage", "quick"],
};
