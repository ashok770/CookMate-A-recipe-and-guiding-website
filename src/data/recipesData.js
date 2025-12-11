import chickenImg from "../assets/images/chicken.jpg";
import bowlImg from "../assets/images/bowl.png";
import cakeImg from "../assets/images/cake.jpg";

const recipes = [
  {
    id: 1,
    title: "Roasted Chicken",
    image: chickenImg,
    description: "A delicious roasted chicken with herbs.",
    ingredients: ["Chicken", "Garlic", "Lemon", "Rosemary"],
    steps: ["Preheat oven to 200°C", "Season chicken", "Roast for 60 minutes"],
  },
  {
    id: 2,
    title: "Vegan Bowl",
    image: bowlImg,
    description: "Healthy vegan bowl with vegetables.",
    ingredients: ["Quinoa", "Avocado", "Corn", "Beans"],
    steps: ["Boil quinoa", "Chop vegetables", "Mix and serve"],
  },
  {
    id: 3,
    title: "Chocolate Cake",
    image: cakeImg,
    description: "Soft and moist chocolate cake.",
    ingredients: ["Cocoa", "Flour", "Sugar"],
    steps: ["Mix ingredients", "Bake for 30 mins at 180°C"],
  },
];

export default recipes;
