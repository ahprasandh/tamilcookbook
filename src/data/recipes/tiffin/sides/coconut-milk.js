export default {
  id: "coconut-milk",
  name_en: "Coconut Milk",
  name_ta: "தேங்காய் பால்",
  category: "tiffin/sides",
  veg: true,
  complexity: 1,
  servings: 4,
  prep_time_mins: 5,
  cook_time_mins: 10,
  ingredients: [
    { item: "coconut", name_en: "Grated Coconut", quantity: 1, unit: "cup", shop_category: "vegetable" },
    { item: "water", name_en: "Warm Water", quantity: 1, unit: "cup", shop_category: "other" },
    { item: "sugar", name_en: "Sugar / Jaggery", quantity: 2, unit: "tbsp", shop_category: "other" },
    { item: "cardamom", name_en: "Cardamom Powder", quantity: 0.25, unit: "tsp", shop_category: "spices" },
  ],
  steps: [
    { order: 1, text_en: "Blend grated coconut with warm water. Strain through a fine cloth to extract thick milk.", text_ta: "தேங்காய் துருவலை வெந்நீர் சேர்த்து அரைத்து மெல்லிய துணியில் வடிகட்டி பால் எடுக்கவும்." },
    { order: 2, text_en: "Heat coconut milk with sugar/jaggery and cardamom. Stir until dissolved (don't boil vigorously).", text_ta: "தேங்காய் பாலில் சர்க்கரை/வெல்லம், ஏலக்காய் சேர்த்து கரையும் வரை கிளறவும் (அதிகமாக கொதிக்க வேண்டாம்)." },
    { order: 3, text_en: "Serve warm with idiyappam or puttu.", text_ta: "இடியாப்பம் அல்லது புட்டுடன் சூடாக பரிமாறவும்." },
  ],
  tags: ["everyday", "sweet", "simple"],
};
