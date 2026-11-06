export const BRAND_CONFIG = {
  name: "NutriBloom",
  tagline: "Clinical Authority & Mindful Wellness",
  logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy_5oAJNxizI6mknboH1js2y5EXgsfa1A2swQCuOeIyA4gBUBQNd2MfCaPJEeGJpGHrDIBqz1xWfO3ywxYzVqPaDGEoCJXfpwg7ycK516pnc1Ugah6D3lnqwbaFlwjA8hFxx8FSVo6r5MaPuYY1R8RXLzHGoTepEivcdmjNj4lqjqvIPOCowJFQOVHggL1n8irgl8YVEJjBE_iiZ-9ZYRjcQNPeCO6865y49G-P7Q",
  leadDietitianAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT4RS1mTuRrwuinfptanyYURw65KDVtsxT2HfMoT_JLkgS_nhSyMFsOW13hGl4QRGXpaLggX477Go2SukuJ_XMgYxUIJnhzS7lEy4U6MKCB7f_SywwPXp-DlnHSMsMVHxnrgiDbd3b_ktkl0VJ7wZ5Kieod39tTsziltdFTx0R-A8a3Z5B1savXFl4DZuNzy08DxzspFs3UA8lJy9V85EXHrATYEGh6KxpLuF6X8Y",
  contact: {
    email: "contact@nutribloom.health",
    phone: "+1 (555) 382-7491",
    clinicPhone: "(555) 482-9012",
    address: "742 Evergreen Wellness Ave, Suite 300",
    hours: "Mon–Fri: 8:00 AM – 6:00 PM EST"
  }
};

export const CLINICAL_SERVICES = [
  {
    id: "consulting",
    title: "Clinical Diet Consulting",
    tag: "Therapeutic",
    description: "Holistic protocols for gut microbiome restoration, hormonal alignment, and long-term metabolic health supervision.",
    highlight: "Lab Reviews Included",
    icon: "vital_signs",
    iconBg: "bg-secondary-container",
    iconColor: "text-primary"
  },
  {
    id: "architect",
    title: "Custom Meal Architect",
    tag: "Personalized",
    description: "Macro-calculated weekly menus adapted specifically to your palate, food sensitivities, and circadian schedule.",
    highlight: "7-Day Dynamic Roster",
    icon: "set_meal",
    iconBg: "bg-surface-container",
    iconColor: "text-primary"
  },
  {
    id: "audits",
    title: "Bio-Individual Health Audits",
    tag: "Diagnostics",
    description: "Comprehensive blood panel evaluations, continuous glucose monitoring analysis, and personalized nutrient density scores.",
    highlight: "Full Biomarker Map",
    icon: "strikethrough_s",
    iconBg: "bg-secondary-fixed",
    iconColor: "text-primary"
  }
];

export const HOLISTIC_BENEFITS = [
  {
    title: "Sustained Energy",
    description: "Smooth, crash-free daytime vitality without coffee dependencies.",
    icon: "bolt",
    bg: "bg-surface-container"
  },
  {
    title: "Restored Microbiome",
    description: "Optimal nutrient assimilation and gut epithelial repair.",
    icon: "microbiology",
    bg: "bg-secondary-container"
  },
  {
    title: "Endocrine Equilibrium",
    description: "Gentle insulin sensitivity and thyroid receptor re-sensitization.",
    icon: "balance",
    bg: "bg-surface-container"
  },
  {
    title: "Mindful Relationship",
    description: "Cultivate calm intuitive eating devoid of guilt or restriction.",
    icon: "favorite",
    bg: "bg-secondary-container"
  }
];

export const NUTRITION_PLANS = [
  {
    id: "weight-management",
    title: "Weight Management Plan",
    price: 189,
    period: "/mo",
    category: "lifestyle",
    badge: "Most Popular",
    badgeIcon: "star",
    badgeVariant: "primary",
    duration: "12 Weeks • Bi-weekly Reviews",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuEFVutxabf9p-QxmpYiOlhCgbjvuDCsvkahoSCWUB9m6J6fKEPQNz-191UkeoT4k2NzBoYp0oXxYUBYb03YeA_YkTJiyEJcF8Ra7Uba_sjaZKYHpM1PjuIrrCa4t8bXuNneZ7KtGjVE4BfS94QLaUkgN4iYzz4nJTEdgT_yPubGWZGi1N9AvhuKmHuvWnQQu3Ngftqb1k6GSixjXZrGpTULY34mYsUVyMMzE1Sm4",
    imageAlt: "Overhead aesthetic flat-lay of clean wholesome organic diet ingredients, avocado, wild salmon, greens",
    description: "Sustainable, non-restrictive metabolic acceleration designed for safe fat loss and muscle preservation.",
    highlights: [
      "Caloric Deficit Tuning",
      "Metabolic Tracking",
      "Portion Guides",
      "Bi-Weekly 1:1 Call"
    ]
  },
  {
    id: "balanced-diet",
    title: "Balanced Diet Plan",
    price: 139,
    period: "/mo",
    category: "lifestyle",
    badge: "Foundational",
    badgeIcon: "spa",
    badgeVariant: "secondary",
    duration: "Ongoing • Habit Reset",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCvBqm2tUbpHIkR3UoQFJqYOeYDrtsWfdIe-TUAvwOCUqF6ooZn4xjCkOpXedTSFpBDRLstexORejxxZdIboVMLNxin9lyLer6wM4FBBlAQ9S70iCXCssZ02oYbfYb49PHMpWtINNPq1tUIbSmmBJaWYHlLcb3W2i3wzueFsRBw9BOoNa_h-Vj6jlJgkR-tCllhidOTionZ5oqHo7PTeJbVZunlsT1NhKRfQ2KM3M",
    imageAlt: "Vibrant Mediterranean style balanced healthy meal bowl containing quinoa, chickpeas, beets, cucumbers",
    description: "Holistic lifestyle reset for gut health, stable glucose levels, and immune resilience.",
    highlights: [
      "Whole-Food Variety",
      "Micronutrient Tuning",
      "Gut Diversity Index",
      "Family Recipes"
    ]
  },
  {
    id: "pcos-friendly",
    title: "PCOS-Friendly Plan",
    price: 219,
    period: "/mo",
    category: "clinical",
    badge: "Hormonal Wellness",
    badgeIcon: "health_and_safety",
    badgeVariant: "tertiary",
    duration: "16 Weeks • Endocrine Care",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5SFY2_zAhMls6xQcc-x6r_wdJGkqRBFcokK3_aJ2Sj6Vfw2d-oJoDe49MPGQTmDLni22ZP4IRgEYGBcksygpRDWeGx-V6NVHgKHX1g_2hOms3bzbmI5xqUiICBhLo-MI29PMl6Y92FATXGg1CpuQO9wHhjFBIgjYW9iqNlyTlQn0fPLgRsjZKJf5zoehDoYIeMl5JLbOlQGv_mq17fLoARFGCAN4QoxaVVmckRWE",
    imageAlt: "Anti-inflammatory nutrition bowl with organic dark blackberries, blueberries, pumpkin seeds, chia seeds, kale",
    description: "Targeted low-glycemic, anti-inflammatory protocols designed to balance insulin, androgen levels, and regulate cycles.",
    highlights: [
      "Insulin Sensitizers",
      "Seed Cycling System",
      "Cortisol Regulation",
      "Endocrine Blood Panel"
    ]
  },
  {
    id: "sports-nutrition",
    title: "Sports Nutrition Plan",
    price: 199,
    period: "/mo",
    category: "athletic",
    badge: "Performance",
    badgeIcon: "bolt",
    badgeVariant: "secondary",
    duration: "Periodized Training",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUiZYBgVZBiEeuL0iGmdMLZuF7lrElXeXQ71IH_s5SYjvZ_PBmN28ODIt8mw0GURllxSrGJWhWlrAqopmjR5F6VZKG1hej-U2V7GWc7-_JOHDDun3hcajbGT884GK1WKFqsg9APXhAojrUWPvJ679TPIha87uSVP7G45V4SRaF0GziAiBpX0uyhYTtll_yYKFnQ6Fa5TgrFEncbe6P3SDol7VuYPcLQ4GyiY6KnGs",
    imageAlt: "Athletic high-protein nutrient dense culinary dish with seared lean chicken breast slices, edamame, asparagus",
    description: "High-performance fuel strategy focusing on glycogen replenishment, tissue repair, and endurance timing.",
    highlights: [
      "Pre/Post Timing",
      "Electrolyte Mapping",
      "Protein Synthesis",
      "Hydration Protocols"
    ]
  }
];

export const SAMPLE_DAY_MEALS = {
  breakfast: {
    time: "08:00 AM • Energy Prime",
    title: "Golden Chia Turmeric Oatmeal",
    subtitle: "Crushed walnuts & fresh blueberries",
    calories: 340,
    protein: "14g",
    carbs: "48g",
    fats: "11g",
    fiber: "9g",
    insight: "Curcumin extract reduces morning oxidative stress."
  },
  lunch: {
    time: "01:00 PM • Sustained Metabolism",
    title: "Grilled Lemon Herb Protein Bowl",
    subtitle: "Roasted sweet potato & steamed greens",
    calories: 490,
    protein: "38g",
    carbs: "45g",
    fats: "14g",
    fiber: "8g",
    insight: "Complex carbs provide steady afternoon mental focus."
  },
  snacks: {
    time: "04:30 PM • Glucose Anchor",
    title: "Pumpkin Seeds & Crisp Apple",
    subtitle: "Paired with cinnamon almond butter",
    calories: 210,
    protein: "7g",
    carbs: "22g",
    fats: "12g",
    fiber: "5g",
    insight: "Zinc in pumpkin seeds aids thyroid hormone conversion."
  },
  dinner: {
    time: "07:30 PM • Restorative Digest",
    title: "Warm Lentil Vegetable Stew",
    subtitle: "Baby spinach & toasted pumpkin seeds",
    calories: 420,
    protein: "22g",
    carbs: "52g",
    fats: "10g",
    fiber: "14g",
    insight: "High prebiotic fiber encourages nighttime microbiome flora."
  }
};

export const RECIPES = [
  {
    id: "oats-bowl",
    title: "Oats Breakfast Bowl",
    category: "breakfast",
    categoryLabel: "Breakfast",
    time: "10 mins",
    calories: 310,
    protein: "11g",
    carbs: "52g",
    fats: "8g",
    fiber: "9g",
    tags: ["High Fiber • Heart Healthy", "11g Protein"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAycvckG_c8r_QuqwQFDSzX6D74IufNK6GDkVXOuu7M-rSE0fBvJbI_tLlEM-pngv0FmdaRmMuNmpsT4J__ee_8Uz1CDxn34i1k27GsUCcaOtQJ-joY2_itocKnbOdGMgLsLy2cqmdX_9HidpUlifc1V_R1-y8qxU-wlZyGv7dFJBbcvkhZKEIOswJv0QgBZtcrFU1xbcgcOQP0iHSuwWMbzLBjZ0_H3LevCW_A5uo",
    imageAlt: "Creamy oatmeal breakfast bowl with fresh blueberries, dark chia seeds, banana slices, almonds",
    ingredients: [
      "rolled oats",
      "blueberries",
      "chia seeds",
      "bananas",
      "almond slivers",
      "unsweetened almond milk"
    ],
    fullIngredients: [
      "1 cup gluten-free rolled oats",
      "1.5 cups unsweetened almond or oat milk",
      "1/2 cup fresh wild blueberries",
      "1 tbsp chia seeds",
      "1/2 ripe banana, sliced",
      "1 tbsp slivered toasted almonds",
      "1/2 tsp ground Ceylon cinnamon"
    ],
    instructions: [
      "Simmer rolled oats with almond milk over medium heat for 6-8 minutes until creamy.",
      "Remove from heat and fold in chia seeds and ground cinnamon; let sit for 2 minutes to thicken.",
      "Transfer to a warm ceramic bowl and arrange banana slices and fresh blueberries across the surface.",
      "Top with toasted almond slivers and serve warm."
    ]
  },
  {
    id: "paneer-salad",
    title: "Paneer Protein Salad",
    category: "lunch",
    categoryLabel: "Lunch",
    time: "15 mins",
    calories: 385,
    protein: "24g",
    carbs: "18g",
    fats: "14g",
    fiber: "6g",
    isSpotlight: true,
    tags: ["24g Protein • Vegetarian", "Spotlight Pick"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcmDWTMX0QiyZ8OTdiZ6_Kr74wfEKsaL9QjxDbZaiVnjecJl8kN6sSNBbI-vvZC-9nNYJBBY36fXydiLWnKqAbz8fGKIwcrFIWtoCQUGv8vZnUD0k8Cwi-KpcaKTALWe-BhC5XWaW3_x1Ay1yesHi-PLmN2ldOU2lqKnqs_ylP3fjqeUsyPt39U340M66Nx4rdW0xy74hkPchwErK2hQdGrNgbNvA9tj4l1GN_jag",
    imageAlt: "Artisanal culinary plate of diced paneer cottage cheese tossed with cucumber, cherry tomatoes, mint, olive oil",
    ingredients: [
      "cottage cheese",
      "paneer",
      "cucumber",
      "cherry tomatoes",
      "herbs",
      "lemon",
      "olive oil"
    ],
    fullIngredients: [
      "150g Low-fat cottage cheese (Paneer)",
      "1 cup diced English cucumbers & cherry tomatoes",
      "1 tbsp extra virgin olive oil & fresh lemon juice",
      "1 tsp roasted cumin powder & fresh mint leaves"
    ],
    instructions: [
      "Prep the Protein Base: Lightly saute or cube raw cottage cheese into 1/2-inch uniform pieces for optimal dressing absorption.",
      "Crisp Veggie Medley: Toss crisp chopped cucumbers and halved cherry tomatoes together inside a pre-chilled ceramic bowl.",
      "Emulsify Dressing: Whisk freshly squeezed lemon juice, olive oil, and roasted cumin powder until smooth; drizzle gently over bowl.",
      "Garnish & Serve: Garnish generously with torn garden mint leaves and freshly cracked black peppercorns. Savor immediately."
    ]
  },
  {
    id: "vegetable-khichdi",
    title: "Vegetable Khichdi",
    category: "dinner",
    categoryLabel: "Dinner",
    time: "25 mins",
    calories: 340,
    protein: "14g",
    carbs: "54g",
    fats: "7g",
    fiber: "10g",
    tags: ["Gut Healing • Easy Digest", "14g Protein"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArfxXqi8WWIaC-p8pjlmu5-Z9fuxJJANI_rZmHvL5IKP45rFG3DV8WD24kO6quMVJlZQqpjEn7PEgHJIBhQ6pFSlrdUN0auTbfTJFkLAO6IgrdMm0NNUgfwwgKj7HyZJh5uD2yKqNb4KqK35bkoe1rs30qSeGorJWhH4C7LnBv4AsB4Si2ES0mV1pnSIqnkeKC0opx6_b_yxNBPmvle7uF4hpN7m_ERX7vfMgfjfs",
    imageAlt: "Warm earthenware pot filled with wholesome yellow moong lentil and brown rice khichdi with turmeric, cumin, spinach",
    ingredients: [
      "yellow lentil",
      "rice",
      "turmeric",
      "cumin",
      "spinach",
      "carrots",
      "gut healing"
    ],
    fullIngredients: [
      "1/2 cup yellow moong dal (split mung lentils)",
      "1/2 cup brown basmati rice",
      "1 cup chopped organic baby spinach",
      "1/2 cup diced carrots and green peas",
      "1 tsp grass-fed ghee or virgin coconut oil",
      "1 tsp toasted cumin seeds and ground turmeric",
      "1 pinch organic asafoetida (hing) for digestion"
    ],
    instructions: [
      "Rinse moong dal and brown rice until water runs clear; soak for 15 minutes.",
      "Warm ghee in a deep saucepan; temper cumin seeds and turmeric until aromatic.",
      "Add soaked rice, lentils, diced carrots, and 3.5 cups water. Bring to a boil.",
      "Lower heat, cover, and simmer for 18 minutes. Stir in baby spinach until wilted.",
      "Ladle warm into earthen bowls and finish with a squeeze of fresh lemon."
    ]
  },
  {
    id: "fruit-yogurt-bowl",
    title: "Fruit Yogurt Bowl",
    category: "breakfast",
    categoryLabel: "Breakfast",
    time: "5 mins",
    calories: 260,
    protein: "18g",
    carbs: "32g",
    fats: "5g",
    fiber: "7g",
    tags: ["Probiotic Rich • Low Sugar", "18g Protein"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvqFPSmTTnbdMbphT21oqCq8lugin8IekV5tP8DYua2dOJGx5i5H7m2qvuF2gwFjFqTOct0Ed03gXWmQ761mLKCjNf1GvMAt7LEAa0wJUbpSqi58kMngWSMbBhH0K90nsZZdygmCw-sdQL5sNC4pL5usPK7fvpFU13ACsd5NZOsa4F-_x3DN42ScDrpBUegLK9NnE0JdfuE1OGnqtA4VZZZplyoqI-tu7kEM9IbYY",
    imageAlt: "Thick Greek yogurt arranged with ruby pomegranate seeds, kiwi slices, raw honey, and hemp seeds",
    ingredients: [
      "greek yogurt",
      "pomegranate arils",
      "kiwi",
      "raw honey",
      "hemp seeds"
    ],
    fullIngredients: [
      "1 cup plain Greek strained yogurt (or coconut kefir)",
      "1/3 cup fresh pomegranate arils",
      "1 gold or green kiwi, thinly peeled and sliced",
      "1 tsp unpasteurized raw meadow honey",
      "1 tbsp hulled organic hemp hearts"
    ],
    instructions: [
      "Spoon Greek yogurt into the center of a chilled shallow bowl.",
      "Arrange kiwi slices fan-wise alongside pomegranate arils.",
      "Drizzle with a delicate ribbon of raw meadow honey.",
      "Scatter hemp hearts for botanical omega fatty acids and serve immediately."
    ]
  },
  {
    id: "sprouts-chaat",
    title: "Sprouts Chaat",
    category: "snacks",
    categoryLabel: "Snacks",
    time: "10 mins",
    calories: 190,
    protein: "12g",
    carbs: "28g",
    fats: "2g",
    fiber: "8g",
    tags: ["Immunity Boost • Zero Oil", "12g Protein"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGVfbG0RBTzwPPqPW4zgx7SvtpGoGOLczaDI51536oJtqIyN_97lFTNW9deqx7vaIBVYm0fYnrIY_gYb463VF8NrDdeHORkWoEi0N4GMP3dg6utHoMYRtqY-mH3qM1BDQ2dtfMkQ6OezEICfhCrhEf5G90rYPiewv50dBr2H_g4_jqul-SUTKGVNAeykU544TC5XXB3i2g0aN9y8jZfcKCZ6x6KGvClKFpdn7-efw",
    imageAlt: "Vibrant salad with steamed sprouted moong beans, red onions, tomatoes, coriander, lime, chaat spice",
    ingredients: [
      "sprouted moong beans",
      "chaat masala",
      "diced onions",
      "coriander",
      "fresh lime"
    ],
    fullIngredients: [
      "1.5 cups freshly sprouted green moong beans",
      "1/3 cup finely minced red shallots or red onion",
      "1/2 cup deseeded Roma tomato, diced",
      "2 tbsp fresh chopped cilantro leaves",
      "1/2 tsp roasted chaat masala blend",
      "Juice of half a juicy lime"
    ],
    instructions: [
      "Steam sprouted moong beans lightly for 3 minutes to preserve raw live enzymes.",
      "Toss warm beans with diced red shallots, tomatoes, and cilantro in a mixing bowl.",
      "Season with chaat masala and freshly squeezed lime juice.",
      "Toss thoroughly to coat evenly and enjoy as a high-protein afternoon energy reset."
    ]
  },
  {
    id: "green-glow-smoothie",
    title: "Healthy Green Glow Smoothie",
    category: "snacks",
    categoryLabel: "Snacks",
    time: "5 mins",
    calories: 215,
    protein: "4g",
    carbs: "38g",
    fats: "1.5g",
    fiber: "6g",
    tags: ["Detoxifying • Vitamin C", "6g Fiber"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAggeIX1jVRrP-LlWViDjn95amd_aa1et4DFpwb8wP5Sc4abf2MDUlb5Spb7IiyYq3M4baTYchqyjXcPlBshLXeEI4gdnXW6KIPchI-tQsFn3gRCXZyIA2HgyCmO8mfP6CxPTvigCIGljv8KBC9GZKupSOqMzPA6uRF9Uk22v-xsAGhK0aq2S5Im4ULrS1hoCmhpsxnFCWGb7_O-8IKs2MWvz6WG-gwyVcCpk5JJJU",
    imageAlt: "Tall glass with emerald green smoothie made from spinach, green apple, cucumber, ginger, coconut water",
    ingredients: [
      "baby spinach",
      "green apple",
      "cucumber",
      "ginger",
      "coconut water"
    ],
    fullIngredients: [
      "2 cups organic tender baby spinach",
      "1 crisp Granny Smith green apple, cored",
      "1 Persian cucumber, sliced",
      "1 inch fresh ginger rhizome, peeled",
      "1 cup chilled pure coconut water",
      "1 tbsp chia seeds soaked in water"
    ],
    instructions: [
      "Combine baby spinach and coconut water in a high-speed blender; blend until liquified.",
      "Add apple chunks, cucumber slices, and peeled fresh ginger.",
      "Blend on high for 60 seconds until silk-smooth and emerald green.",
      "Pour into a tall tumbler over ice and sip immediately for cellular hydration."
    ]
  },
  {
    id: "avocado-quinoa-bowl",
    title: "Avocado Quinoa Green Goddess Bowl",
    category: "lunch",
    categoryLabel: "Lunch",
    time: "15 mins",
    calories: 380,
    protein: "14g",
    carbs: "46g",
    fats: "16g",
    fiber: "11g",
    tags: ["Vegan", "Gluten-Free", "High Fiber", "Prebiotic Rich"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjOzsqdyO5V8l2V2VPG6f7yzVsY16wcDoHcEJqS3ypKFtI68NbaSuSfELDvLmjCnZXv2vlKS4QZFgaeLKRHA6Cvzu9E43ITNKgN6OUuqT8ZVt-Eg9H1WwhsktPHJd_uTNOFw4mlW4P6FYG0vqQ8tLUrBtDVCI3neCiPXx7z_HXWIE0zr50Q0CVYA7CyVI3bb_NBVvKrMUlSGwcxOhf8T_aNF5xcUCyrXPnWeF7qbQ",
    imageAlt: "Organic green goddess salad bowl with sliced avocado, quinoa, edamame, and herb dressing",
    ingredients: [
      "avocado",
      "quinoa",
      "edamame",
      "herb dressing",
      "greens"
    ],
    fullIngredients: [
      "1 cup cooked warm tri-color quinoa",
      "1/2 ripe Haas avocado, fanned",
      "1/2 cup shelled steamed edamame",
      "1 cup baby arugula and massaged kale",
      "2 tbsp homemade basil-tahini green goddess emulsion",
      "1 tsp hemp hearts"
    ],
    instructions: [
      "Layer massaged greens and warm quinoa in a broad ceramic serving dish.",
      "Arrange steamed edamame and fanned avocado over top.",
      "Drizzle with vibrant basil-tahini dressing and finish with hemp hearts."
    ]
  },
  {
    id: "berry-chia-oats",
    title: "Berry Chia Overnight Protein Oats",
    category: "breakfast",
    categoryLabel: "Breakfast",
    time: "Prep ahead",
    calories: 320,
    protein: "22g",
    carbs: "39g",
    fats: "9g",
    fiber: "10g",
    tags: ["High Protein", "Nutrient Dense", "Omega-3 Boost"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAie4nzsK31K2guha0yYQ2Ja3FtmvQKYyUzTkvdalwI9bRyBUg98oDYkrrMsvZpIHQvH6uFiSAH7JDa9WyWBXIQtaCTxFOwsbZAw7ZqPO6650m6y3Wj-dGbbA2Aplp-KgL4BcwJ9nbhHWJwdxWPdC6TFvJMGazkwjLd5JyZANxWrmUL_Z_ebCKWJ_BXdTJRc9XfOkW7R7JW8om-Bp4fFZikpjfKKFkfkLixqCOiZpU",
    imageAlt: "Artisanal glass jar filled with layered berry chia overnight protein oats, blackberries, chia seeds",
    ingredients: [
      "oats",
      "chia seeds",
      "blackberries",
      "plant protein",
      "almond milk"
    ],
    fullIngredients: [
      "1/2 cup rolled oats",
      "1 scoop pure vanilla pea protein isolate",
      "1.5 tbsp chia seeds",
      "3/4 cup unsweetened almond milk",
      "1/2 cup blackberries and raspberries"
    ],
    instructions: [
      "Whisk oats, protein powder, chia seeds, and almond milk inside a glass mason jar.",
      "Cover and refrigerate overnight (minimum 4 hours) until creamy and thick.",
      "Top with fresh organic blackberries and enjoy chilled straight from the jar."
    ]
  },
  {
    id: "tofu-crunch-salad",
    title: "Tofu & Edamame Sesame Crunch Salad",
    category: "dinner",
    categoryLabel: "Dinner",
    time: "20 mins",
    calories: 410,
    protein: "26g",
    carbs: "22g",
    fats: "18g",
    fiber: "8g",
    tags: ["Antioxidant", "Low GI", "Phyto-Nutrients", "Plant Power"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBz-k6G4rTsXbt8XBG4HmD71bTZtX6fotDlaRun88y79Dq7OtNZfkj7AHH9L1_SVtY3RbSE9jVG9fsizXWNJxBLnq0hZxnLyY67eKPQYFZH2c9Hii2yvvsBIlHBbeY25wvvPK0yVzgtYkC7F8C9t3vQqxq9LOAdT8iRgzJzr2Q3KLgXrohnpXbcbssYo_qp98TY2bkYb8VAAw3h-PyyjCIxEf-7FmOdVr6m4Cyo-TA",
    imageAlt: "Crispy tofu cubes with edamame, purple cabbage, sesame seeds, ginger tamari dressing",
    ingredients: [
      "tofu",
      "edamame",
      "purple cabbage",
      "sesame seeds",
      "ginger tamari"
    ],
    fullIngredients: [
      "180g extra-firm organic tofu, cubed and air-crisped",
      "1/2 cup shelled edamame",
      "1.5 cups shredded purple and Napa cabbage",
      "1 carrot, ribboned",
      "1 tbsp toasted black & white sesame seeds",
      "1.5 tbsp ginger tamari sesame vinaigrette"
    ],
    instructions: [
      "Sear or air-fry tofu cubes until edges are golden and delightfully crisp.",
      "In a wide bowl, toss ribboned carrots, purple cabbage, and edamame.",
      "Add warm tofu cubes, drizzle with ginger tamari dressing, and scatter sesame seeds."
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "“NutriBloom transformed how I view food. Lost 14kg in 4 months while completely reversing my pre-diabetes markers without feeling deprived once.”",
    author: "Sarah K.",
    detail: "Metabolic Renewal Plan",
    avatar: "SK",
    dietitian: "Dr. Lauren Reed, RD",
    rating: 5
  },
  {
    quote: "“The customized anti-inflammatory menu finally cleared my chronic IBS symptoms. My daily energy levels haven't felt this consistent in 8 years.”",
    author: "David M.",
    detail: "Gut Restoration Track",
    avatar: "DM",
    dietitian: "Dr. Marcus Vance, MS",
    rating: 5
  },
  {
    quote: "“Navigating postpartum nutrition was overwhelming until NutriBloom structured every micronutrient target. Truly life-changing compassionate care.”",
    author: "Elena R.",
    detail: "Hormonal Balance Program",
    avatar: "ER",
    dietitian: "Claire Bennett, RD",
    rating: 5
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    icon: "biotech",
    title: "Evidence Over Trends",
    description: "Clinical biochemistry guides our plans, never fleeting internet fads or temporary quick fixes."
  },
  {
    icon: "fingerprint",
    title: "Bio-Individuality",
    description: "No two metabolisms or microbiomes are identical. Your therapeutic diet should be as distinct as your DNA."
  },
  {
    icon: "all_inclusive",
    title: "Sustainable Habits",
    description: "Realistic meal planning that adapts to your work, family schedule, social life, and deep cultural roots."
  }
];

export const SERVICES_SUMMARY = [
  {
    icon: "person",
    title: "1-on-1 Clinical Consultations",
    description: "Direct therapeutic care and metabolic labs review."
  },
  {
    icon: "microbiology",
    title: "Metabolic & Gut Health",
    description: "Microbiome repair and glucose sensitivity reset."
  },
  {
    icon: "favorite",
    title: "Chronic Disease & PCOS",
    description: "Specialized endocrine and inflammation control."
  },
  {
    icon: "groups",
    title: "Corporate Wellness",
    description: "Interactive seminars and preventative team workshops."
  }
];

export const NUTRITION_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is your primary wellness aspiration right now?",
    options: [
      { label: "Shed visceral fat & reboot energy", category: "lifestyle", planId: "weight-management" },
      { label: "Address hormonal balance, cycle irregularities, or PCOS", category: "clinical", planId: "pcos-friendly" },
      { label: "Build enduring whole-food eating habits & heal my gut", category: "lifestyle", planId: "balanced-diet" },
      { label: "Peak athletic endurance, recovery, & muscle synthesis", category: "athletic", planId: "sports-nutrition" }
    ]
  },
  {
    id: 2,
    question: "How do your energy levels typically trend throughout the day?",
    options: [
      { label: "Morning sluggishness followed by severe 3:00 PM slump" },
      { label: "Spikes and crashes tied directly to meals" },
      { label: "Low baseline stamina and chronic digestive heaviness" },
      { label: "Generally solid, but struggling with post-workout recovery" }
    ]
  },
  {
    id: 3,
    question: "What is your preferred relationship with meal preparation?",
    options: [
      { label: "Quick 10-15 minute recipes with minimal cleanup" },
      { label: "Weekend batch prep and dynamic meal calendars" },
      { label: "Flexible guidelines I can adapt while dining out" },
      { label: "Precise gram-by-gram macro tracking and nutrient timing" }
    ]
  }
];

