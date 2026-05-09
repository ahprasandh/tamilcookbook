export default {
  id: "puttu",
  name_en: "Puttu",
  name_ta: "புட்டு",
  category: "tiffin/mains",
  veg: true,
  complexity: 1,
  servings: 4,
  prep_time_mins: 10,
  cook_time_mins: 10,
  ingredients: [
    { item: "rice-flour", name_en: "Rice Flour (Puttu flour)", quantity: 2, unit: "cup", shop_category: "grains" },
    { item: "coconut", name_en: "Grated Coconut", quantity: 0.5, unit: "cup", shop_category: "vegetable" },
    { item: "water", name_en: "Water", quantity: 0.5, unit: "cup", shop_category: "other" },
    { item: "salt", name_en: "Salt", quantity: 0.5, unit: "tsp", shop_category: "spices" },
  ],
  steps: [
    { order: 1, text_en: "Mix rice flour with salt. Sprinkle water gradually and mix until it holds shape when pressed (not wet).", text_ta: "அரிசி மாவில் உப்பு சேர்த்து சிறிது சிறிதாக தண்ணீர் தெளித்து கைப்பிடியாக பிசையவும் (ஈரமாக இருக்கக்கூடாது)." },
    { order: 2, text_en: "Layer puttu maker with coconut and flour alternately. End with coconut on top.", text_ta: "புட்டு குழாயில் தேங்காய், மாவு மாற்றி மாற்றி நிரப்பவும். மேலே தேங்காய் வைக்கவும்." },
    { order: 3, text_en: "Steam for 5-7 minutes until cooked through. Push out gently.", text_ta: "5-7 நிமிடம் ஆவியில் வேக வைத்து மெதுவாக வெளியே தள்ளவும்." },
  ],
  tags: ["everyday", "healthy", "steamed"],
};
