export default {
  id: "chappathi",
  name_en: "Chappathi",
  name_ta: "சப்பாத்தி",
  category: "tiffin/mains",
  veg: true,
  complexity: 2,
  servings: 4,
  prep_time_mins: 20,
  cook_time_mins: 15,
  ingredients: [
    { item: "wheat-flour", name_en: "Wheat Flour", quantity: 2, unit: "cup", shop_category: "grains" },
    { item: "water", name_en: "Warm Water", quantity: 0.75, unit: "cup", shop_category: "other" },
    { item: "oil", name_en: "Oil", quantity: 1, unit: "tbsp", shop_category: "other" },
    { item: "salt", name_en: "Salt", quantity: 0.5, unit: "tsp", shop_category: "spices" },
  ],
  steps: [
    { order: 1, text_en: "Mix wheat flour, salt, and oil. Gradually add warm water and knead into a soft smooth dough. Rest for 15 minutes.", text_ta: "கோதுமை மாவு, உப்பு, எண்ணெய் சேர்த்து வெதுவெதுப்பான நீர் விட்டு மிருதுவாக பிசையவும். 15 நிமிடம் ஓய்வு விடவும்." },
    { order: 2, text_en: "Divide into small balls. Roll each into a thin round disc.", text_ta: "சிறு உருண்டைகளாக உருட்டி மெல்லிய வட்டமாக இடவும்." },
    { order: 3, text_en: "Cook on a hot tawa. When bubbles form, flip. Press gently with a cloth to puff up.", text_ta: "சூடான தோசைக்கல்லில் போட்டு குமிழ்கள் வரும்போது திருப்பி, துணியால் அழுத்தி உப்ப வைக்கவும்." },
  ],
  tags: ["everyday", "staple"],
};
