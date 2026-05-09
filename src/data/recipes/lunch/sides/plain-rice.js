export default {
  id: "plain-rice",
  name_en: "Plain Rice",
  name_ta: "சாதம்",
  category: "lunch/sides",
  veg: true,
  complexity: 1,
  servings: 4,
  prep_time_mins: 5,
  cook_time_mins: 15,
  ingredients: [
    { item: "rice", name_en: "Rice", quantity: 2, unit: "cup", shop_category: "grains" },
    { item: "water", name_en: "Water", quantity: 4, unit: "cup", shop_category: "other" },
  ],
  steps: [
    { order: 1, text_en: "Wash rice 2-3 times until water runs clear.", text_ta: "அரிசியை 2-3 முறை கழுவவும்." },
    { order: 2, text_en: "Add water and cook in a pot or pressure cooker until done.", text_ta: "தண்ணீர் சேர்த்து குக்கரில் வேக வைக்கவும்." },
  ],
  photos: ["final-1.jpg"],
  tags: ["everyday", "staple"],
};
