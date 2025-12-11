const recipes = [
  {
    id: 1,
    title: "Roasted Chicken",
    image: require("../assets/images/chicken.jpg"),
    description: "A delicious roasted chicken with herbs.",
    ingredients: ["Chicken", "Garlic", "Lemon", "Rosemary"],
    steps: ["Preheat oven to 200°C", "Season chicken", "Roast for 60 minutes"],
  },
  {
    id: 2,
    title: "Vegan Bowl",
    image: require("../assets/images/bowl.png"),
    description: "Healthy vegan bowl with vegetables.",
    ingredients: ["Quinoa", "Avocado", "Corn", "Beans"],
    steps: ["Boil quinoa", "Chop vegetables", "Mix and serve"],
  },
  {
    id: 3,
    title: "Chocolate Cake",
    image: require("../assets/images/cake.jpg"),
    description: "Soft and moist chocolate cake.",
    ingredients: ["Cocoa", "Flour", "Sugar"],
    steps: ["Mix ingredients", "Bake for 30 mins at 180°C"],
  },
];

export default recipes;
