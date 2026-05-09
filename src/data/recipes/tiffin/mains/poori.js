export default {
  id: "poori",
  name_en: "Poori",
  name_ta: "பூரி",
  category: "tiffin/mains",
  veg: true,
  complexity: 2,
  servings: 4,
  prep_time_mins: 15,
  cook_time_mins: 15,
  ingredients: [
    { item: "wheat-flour", name_en: "Wheat Flour", quantity: 2, unit: "cup", shop_category: "grains" },
    { item: "water", name_en: "Water", quantity: 0.5, unit: "cup", shop_category: "other" },
    { item: "oil", name_en: "Oil (for frying)", quantity: 2, unit: "cup", shop_category: "other" },
    { item: "salt", name_en: "Salt", quantity: 0.5, unit: "tsp", shop_category: "spices" },
  ],
  steps: [
    { order: 1, text_en: "Mix wheat flour and salt. Add water gradually and knead into a stiff dough. Rest for 10 minutes.", text_ta: "கோதுமை மாவு, உப்பு கலந்து நீர் விட்டு இறுக்கமாக பிசையவும். 10 நிமிடம் ஓய்வு விடவும்." },
    { order: 2, text_en: "Divide into small balls. Roll each into a small thick disc (not too thin).", text_ta: "சிறு உருண்டைகளாக உருட்டி சற்று தடிமனான வட்டமாக இடவும்." },
    { order: 3, text_en: "Deep fry in hot oil. Press gently with a slotted spoon to puff up. Flip and fry until golden.", text_ta: "சூடான எண்ணெயில் போட்டு கரண்டியால் அழுத்தி உப்ப வைத்து பொன்னிறமாக வறுக்கவும்." },
  ],
  tags: ["everyday", "comfort"],
};
