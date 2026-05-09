export default {
  id: "maggi",
  name_en: "Maggi",
  name_ta: "மேகி",
  category: "tiffin/mains",
  veg: true,
  complexity: 1,
  servings: 2,
  prep_time_mins: 2,
  cook_time_mins: 5,
  ingredients: [
    { item: "maggi-noodles", name_en: "Maggi Noodles", quantity: 2, unit: "pack", shop_category: "other" },
    { item: "water", name_en: "Water", quantity: 2, unit: "cup", shop_category: "other" },
    { item: "onion", name_en: "Onion (sliced)", quantity: 0.5, unit: "nos", shop_category: "vegetable" },
    { item: "green-chilli", name_en: "Green Chilli (slit)", quantity: 1, unit: "nos", shop_category: "vegetable" },
    { item: "butter", name_en: "Butter", quantity: 1, unit: "tbsp", shop_category: "other" },
  ],
  steps: [
    { order: 1, text_en: "Boil water in a pan. Add Maggi noodles and tastemaker.", text_ta: "பாத்திரத்தில் தண்ணீர் கொதிக்க வைத்து மேகி நூடுல்ஸ் மற்றும் டேஸ்ட்மேக்கரை சேர்க்கவும்." },
    { order: 2, text_en: "Add sliced onion and green chilli. Cook for 2-3 mins, stirring occasionally.", text_ta: "வெங்காயம், பச்சை மிளகாய் சேர்த்து 2-3 நிமிடம் கிளறி வேக வைக்கவும்." },
    { order: 3, text_en: "Add butter, toss well. Serve hot when water is absorbed.", text_ta: "வெண்ணெய் சேர்த்து நன்கு கலக்கி தண்ணீர் வற்றியதும் சூடாக பரிமாறவும்." },
  ],
  tags: ["quick", "kids", "instant"],
};
