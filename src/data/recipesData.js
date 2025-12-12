const recipes = [
  {
    id: 1,
    title: "Roasted Chicken",
    image: require("../assets/images/chicken.jpg"),
    description: "A delicious roasted chicken with herbs.",
    ingredients: ["Chicken", "Garlic", "Lemon", "Rosemary"],
    steps: ["Preheat oven to 200°C", "Season chicken", "Roast for 60 minutes"],

    // NEW FIELDS
    category: "Dinner",
    servings: "2-4",
    cookTime: "60 mins",
    tags: ["Easy", "Home Cook"],
  },

  {
    id: 2,
    title: "Vegan Bowl",
    image: require("../assets/images/bowl.png"),
    description: "Healthy vegan bowl with vegetables.",
    ingredients: ["Quinoa", "Avocado", "Corn", "Beans"],
    steps: ["Boil quinoa", "Chop vegetables", "Mix and serve"],

    category: "Lunch",
    servings: "1-2",
    cookTime: "20 mins",
    tags: ["Vegan", "Healthy"],
  },

  {
    id: 3,
    title: "Chocolate Cake",
    image: require("../assets/images/cake.jpg"),
    description: "Soft and moist chocolate cake.",
    ingredients: ["Cocoa", "Flour", "Sugar"],
    steps: ["Mix ingredients", "Bake for 30 mins at 180°C"],

    category: "Dessert",
    servings: "6-8",
    cookTime: "30 mins",
    tags: ["Baking", "Sweet"],
  },
];

export default recipes;
