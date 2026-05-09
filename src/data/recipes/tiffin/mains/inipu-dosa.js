export default {
  id: "inipu-dosa",
  name_en: "Inipu Dosa",
  name_ta: "இனிப்பு தோசை",
  category: "tiffin/mains",
  veg: true,
  complexity: 1,
  servings: 4,
  prep_time_mins: 5,
  cook_time_mins: 15,
  ingredients: [
    { item: "dosa-batter", name_en: "Dosa Batter", quantity: 2, unit: "cup", shop_category: "grains" },
    { item: "jaggery", name_en: "Jaggery (grated)", quantity: 0.5, unit: "cup", shop_category: "other" },
    { item: "coconut", name_en: "Grated Coconut", quantity: 0.25, unit: "cup", shop_category: "vegetable" },
    { item: "cardamom", name_en: "Cardamom Powder", quantity: 0.25, unit: "tsp", shop_category: "spices" },
    { item: "ghee", name_en: "Ghee", quantity: 2, unit: "tbsp", shop_category: "other" },
  ],
  steps: [
    { order: 1, text_en: "Dissolve jaggery in little warm water, strain. Mix into dosa batter with cardamom.", text_ta: "வெல்லத்தை சிறிது வெந்நீரில் கரைத்து வடிகட்டி, தோசை மாவில் ஏலக்காய் சேர்த்து கலக்கவும்." },
    { order: 2, text_en: "Heat tawa, pour batter and spread into a thick dosa. Sprinkle coconut on top.", text_ta: "தோசைக்கல்லில் மாவை ஊற்றி கனமான தோசையாக பரப்பி மேலே தேங்காய் தூவவும்." },
    { order: 3, text_en: "Drizzle ghee, cook on low heat until bottom is golden. Fold and serve.", text_ta: "நெய் விட்டு மெல்லிய தீயில் அடிப்பகுதி பொன்னிறமானதும் மடித்து பரிமாறவும்." },
  ],
  tags: ["sweet", "kids", "breakfast"],
};
