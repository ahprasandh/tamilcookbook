export default {
  id: "full-boil",
  name_en: "Full Boil Egg",
  name_ta: "ஃபுல் பாயில் முட்டை",
  category: "accompaniments/items",
  veg: false,
  complexity: 1,
  servings: 1,
  prep_time_mins: 0,
  cook_time_mins: 12,
  ingredients: [
    { item: "egg", name_en: "Egg", quantity: 2, unit: "nos", shop_category: "dairy" },
    { item: "black-pepper", name_en: "Black Pepper", quantity: 0.25, unit: "tsp", shop_category: "spices" },
  ],
  steps: [
    { order: 1, text_en: "Place eggs in water. Bring to a boil and cook for 10-12 minutes.", text_ta: "முட்டைகளை தண்ணீரில் போட்டு கொதிக்க வைத்து 10-12 நிமிடம் வேக வைக்கவும்." },
    { order: 2, text_en: "Transfer to cold water. Peel, sprinkle salt and pepper.", text_ta: "குளிர்ந்த நீரில் போட்டு தோல் உரித்து உப்பு, மிளகு தூவி பரிமாறவும்." },
  ],
  tags: ["quick", "protein", "everyday"],
};
