export default {
  id: "half-boil",
  name_en: "Half Boil Egg",
  name_ta: "ஹாஃப் பாயில் முட்டை",
  category: "accompaniments/items",
  veg: false,
  complexity: 1,
  servings: 1,
  prep_time_mins: 0,
  cook_time_mins: 6,
  ingredients: [
    { item: "egg", name_en: "Egg", quantity: 2, unit: "nos", shop_category: "dairy" },
    { item: "black-pepper", name_en: "Black Pepper", quantity: 0.25, unit: "tsp", shop_category: "spices" },
  ],
  steps: [
    { order: 1, text_en: "Bring water to a boil. Gently lower eggs and boil for 6 minutes.", text_ta: "தண்ணீரை கொதிக்க வைத்து முட்டைகளை மெதுவாக போட்டு 6 நிமிடம் வேக வைக்கவும்." },
    { order: 2, text_en: "Transfer to cold water. Peel, sprinkle salt and pepper.", text_ta: "குளிர்ந்த நீரில் போட்டு தோல் உரித்து உப்பு, மிளகு தூவி பரிமாறவும்." },
  ],
  tags: ["quick", "protein", "everyday"],
};
