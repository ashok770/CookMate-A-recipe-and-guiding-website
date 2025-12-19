const cookingGuides = [
  {
    id: 1,
    title: "Knife Skills",
    category: "Breakfast",
    image: require("../assets/guides/knife.jpg"),
    shortDescription: "Learn essential knife handling and cutting techniques.",
    longDescription:
      "Mastering knife skills is the foundation of great cooking. This guide teaches you how to safely handle knives, chop vegetables uniformly, slice meats efficiently, and maintain your knives for long-term use.",
    steps: [
      "Understand knife types (chef’s knife, paring knife, serrated knife).",
      "Learn proper grip: pinch grip for control.",
      "Practice basic cuts: chop, slice, dice, julienne, mince.",
      "Learn how to sharpen and hone your knives.",
      "Store knives properly using magnetic strips or blocks.",
    ],
    tips: [
      "Always cut on a stable wooden or plastic board.",
      "Keep your fingers curled (‘claw grip’) for safety.",
      "A sharp knife is safer than a dull one.",
    ],
    tools: ["Chef’s Knife", "Cutting Board", "Honing Steel"],
    difficulty: "Easy",
    time: "20 mins",
  },

  {
    id: 2,
    title: "Meal Planning",
    category: "Lunch",
    image: require("../assets/guides/meal-planning.jpg"),
    shortDescription: "Plan meals efficiently for the week.",
    longDescription:
      "Meal planning helps save time, reduce food waste, and maintain healthy eating habits. This guide explains how to organize your weekly meals, grocery shop effectively, and prepare meals in advance.",
    steps: [
      "Decide your meals for 5–7 days.",
      "Check ingredients you already have.",
      "Create a categorized grocery list.",
      "Prep vegetables, meats, and snacks in advance.",
      "Store meals in airtight containers.",
    ],
    tips: [
      "Plan based on your schedule (busy days = easy meals).",
      "Freeze meals that won’t be eaten within 3 days.",
      "Use apps like Notion or Google Keep for planning.",
    ],
    tools: ["Meal Prep Containers", "Planner / App", "Labels"],
    difficulty: "Easy",
    time: "30 mins",
  },

  {
    id: 3,
    title: "Cooking Techniques",
    category: "Dinner",
    image: require("../assets/guides/techniques.jpg"),
    shortDescription: "Master essential cooking methods.",
    longDescription:
      "Understanding core cooking techniques helps you cook any recipe with confidence. This guide covers sautéing, roasting, steaming, frying, and simmering with proper temperature control.",
    steps: [
      "Learn dry heat methods: roasting, baking, grilling.",
      "Learn wet heat methods: boiling, steaming, poaching.",
      "Practice sautéing with even heat distribution.",
      "Understand oil smoke points for frying.",
      "Use thermometers to check doneness.",
    ],
    tips: [
      "Always preheat pans before cooking.",
      "Do not overcrowd pans — food needs space.",
      "Season in layers for better flavor.",
    ],
    tools: ["Non-stick Pan", "Thermometer", "Oven"],
    difficulty: "Medium",
    time: "40 mins",
  },

  {
    id: 4,
    title: "Essential Cookware",
    category: "Breakfast",
    image: require("../assets/guides/cookware.jpg"),
    shortDescription: "Guide to selecting the right cookware.",
    longDescription:
      "Choosing the best cookware makes cooking easier and improves food quality. This guide explains types of pots, pans, materials, and which cookware you actually need.",
    steps: [
      "Understand materials: stainless steel, cast iron, non-stick.",
      "Choose pots based on your cooking style.",
      "Learn how to maintain each cookware type.",
      "Avoid overheating non-stick pans.",
      "Season cast iron pans regularly.",
    ],
    tips: [
      "Invest in one good stainless-steel pot and pan.",
      "Do not wash hot pans under cold water (warping!).",
      "Use wooden or silicone spoons to protect coatings.",
    ],
    tools: ["Cast Iron Pan", "Stock Pot", "Non-stick Pan"],
    difficulty: "Easy",
    time: "15 mins",
  },

  {
    id: 5,
    title: "Spice Guide",
    category: "Lunch",
    image: require("../assets/guides/spices.jpg"),
    shortDescription: "Explore spices and how to use them.",
    longDescription:
      "Spices add depth, aroma, and complexity to dishes. This guide helps you understand flavor families, pairing rules, and how to toast and store spices.",
    steps: [
      "Learn spice categories: warm, earthy, spicy, aromatic.",
      "Understand global spice blends (garam masala, cajun, za’atar).",
      "Toast whole spices to release oils.",
      "Grind spices fresh for best flavor.",
      "Store spices in airtight jars away from sunlight.",
    ],
    tips: [
      "Replace ground spices every 6–12 months.",
      "Start with small amounts — spices are strong!",
      "Blend spices for custom flavors.",
    ],
    tools: ["Spice Grinder", "Glass Jars", "Cast Iron Pan"],
    difficulty: "Easy",
    time: "25 mins",
  },

  {
    id: 6,
    title: "Slow Cooking",
    category: "Dinner",
    image: require("../assets/guides/slowcook.jpg"),
    shortDescription: "Learn slow cooking for deep flavors.",
    longDescription:
      "Slow cooking brings out rich flavors by cooking food at low temperatures for long hours. Ideal for soups, stews, meats, and curries.",
    steps: [
      "Choose cuts of meat suitable for slow cooking.",
      "Add ingredients in the correct order.",
      "Cook on low for 6–8 hours or high for 3–4 hours.",
      "Avoid opening the lid during cooking.",
      "Add fresh herbs at the end.",
    ],
    tips: [
      "Use broth instead of water for richer flavor.",
      "Always sauté onions & garlic first for depth.",
      "Freeze leftovers in portions.",
    ],
    tools: ["Slow Cooker", "Dutch Oven", "Wooden Spoon"],
    difficulty: "Medium",
    time: "3–8 hours",
  },

  {
    id: 7,
    title: "Baking Basics",
    category: "Dessert",
    image: require("../assets/guides/baking.jpg"),
    shortDescription: "Learn the basics of baking pastries and cakes.",
    longDescription:
      "Baking requires precision and technique. This guide covers measuring methods, mixing rules, oven use, and avoiding common baking mistakes.",
    steps: [
      "Measure ingredients using weight (not cups!).",
      "Use room-temperature butter and eggs.",
      "Preheat the oven fully before baking.",
      "Do not overmix batter — it makes cakes tough.",
      "Let baked goods cool completely.",
    ],
    tips: [
      "Use parchment paper instead of greasing.",
      "Sift dry ingredients for fluffier cakes.",
      "Rotate trays halfway for even baking.",
    ],
    tools: ["Oven", "Mixer", "Baking Trays"],
    difficulty: "Medium",
    time: "45–60 mins",
  },

  {
    id: 8,
    title: "Food Safety",
    category: "Breakfast",
    image: require("../assets/guides/safety.jpg"),
    shortDescription: "Essential hygiene and safe food handling practices.",
    longDescription:
      "Learn how to store, wash, cook, and handle food safely to prevent illnesses. Includes cleaning rules, temperature guides, and avoiding contamination.",
    steps: [
      "Wash hands for 20 seconds before cooking.",
      "Use separate boards for meat and vegetables.",
      "Refrigerate cooked food within 2 hours.",
      "Cook meats to safe temperatures.",
      "Store leftovers in airtight containers.",
    ],
    tips: [
      "Never thaw meat on the counter — use the fridge.",
      "Use gloves when handling spicy foods.",
      "Keep raw and cooked food separated.",
    ],
    tools: ["Thermometer", "Sanitizer", "Separate Cutting Boards"],
    difficulty: "Easy",
    time: "10–20 mins",
  },
];

export default cookingGuides;
