export default {
  id: "idiyappam",
  name_en: "Idiyappam",
  name_ta: "இடியாப்பம்",
  category: "tiffin/mains",
  veg: true,
  complexity: 2,
  servings: 4,
  prep_time_mins: 20,
  cook_time_mins: 10,
  ingredients: [
    { item: "rice-flour", name_en: "Rice Flour (Idiyappam flour)", quantity: 2, unit: "cup", shop_category: "grains" },
    { item: "water", name_en: "Hot Water", quantity: 1.5, unit: "cup", shop_category: "other" },
    { item: "salt", name_en: "Salt", quantity: 0.5, unit: "tsp", shop_category: "spices" },
    { item: "oil", name_en: "Oil", quantity: 1, unit: "tsp", shop_category: "other" },
  ],
  steps: [
    { order: 1, text_en: "Boil water with salt and oil. Add rice flour and mix into a soft dough without lumps.", text_ta: "உப்பு, எண்ணெய் சேர்த்து தண்ணீர் கொதிக்க வைத்து அரிசி மாவு சேர்த்து கட்டியில்லாமல் பிசையவும்." },
    { order: 2, text_en: "Fill the idiyappam press with dough. Press into circular noodle patterns on greased plates.", text_ta: "இடியாப்ப அச்சில் மாவை நிரப்பி எண்ணெய் தடவிய தட்டில் வட்டமாக பிழியவும்." },
    { order: 3, text_en: "Steam for 5-7 minutes until cooked through.", text_ta: "5-7 நிமிடம் ஆவியில் வேக வைக்கவும்." },
  ],
  tags: ["everyday", "soft", "healthy"],
};
