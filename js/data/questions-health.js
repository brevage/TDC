var TDC = window.TDC || {};
window.TDC = TDC;

TDC.QuestionsHealth = [
  {
    id: "health-001",
    category: "health",
    subcategory: "diabetes",
    type: "mc",
    difficulty: 1,
    tags: [],
    question: "What is diabetes?",
    choices: [
      { key: "A", text: "A disease where the body produces too much insulin" },
      { key: "B", text: "A disease where the body does not produce or properly use insulin" },
      { key: "C", text: "A disease that only affects the lungs" },
      { key: "D", text: "A temporary condition caused by diet" }
    ],
    answer: "B",
    explanation: "Diabetes is a disease in which the body does not produce or properly use insulin. Insulin is a hormone needed to convert sugar, starches, and other food into energy needed for daily life. Both genetic and environmental factors such as obesity and lack of exercise have been found to trigger the onset of the disease.",
    wrongExplanations: {
      "A": "Diabetes involves the body NOT producing or NOT properly using insulin, not producing too much.",
      "C": "Diabetes affects the body's ability to process sugar (glucose), not the lungs.",
      "D": "Diabetes is a chronic disease, not a temporary condition, though diet and lifestyle are contributing factors."
    },
    keyFact: "Diabetes = body doesn't produce or properly use insulin"
  },
  {
    id: "health-002",
    category: "health",
    subcategory: "diabetes",
    type: "mc",
    difficulty: 2,
    tags: [],
    question: "Which of the following is NOT a typical symptom of diabetes?",
    choices: [
      { key: "A", text: "Frequent urination" },
      { key: "B", text: "Excessive thirst" },
      { key: "C", text: "Improved vision" },
      { key: "D", text: "Unusual weight loss" }
    ],
    answer: "C",
    explanation: "Improved vision is NOT a symptom of diabetes. The 7 typical signs of diabetes are: 1) Frequent urination, 2) Excessive thirst, 3) Extreme hunger, 4) Unusual weight loss, 5) Increased fatigue, 6) Irritability, 7) Blurry vision (not improved vision).",
    wrongExplanations: {
      "A": "Frequent urination IS a symptom of diabetes — it is one of the 7 typical signs.",
      "B": "Excessive thirst IS a symptom of diabetes — it is one of the 7 typical signs.",
      "D": "Unusual weight loss IS a symptom of diabetes — it is one of the 7 typical signs."
    },
    keyFact: "7 diabetes symptoms: frequent urination, thirst, hunger, weight loss, fatigue, irritability, BLURRY (not improved) vision"
  },
  {
    id: "health-003",
    category: "health",
    subcategory: "diabetes",
    type: "fill",
    difficulty: 2,
    tags: ["numbers"],
    question: "How many typical signs/symptoms of diabetes are listed in the Facts for Drivers?",
    answer: "7",
    acceptedAnswers: ["7", "seven", "Seven"],
    explanation: "There are 7 typical signs of diabetes listed in the Facts for Drivers: 1) Frequent urination, 2) Excessive thirst, 3) Extreme hunger, 4) Unusual weight loss, 5) Increased fatigue, 6) Irritability, 7) Blurry vision.",
    keyFact: "7 signs of diabetes: urination, thirst, hunger, weight loss, fatigue, irritability, blurry vision"
  },
  {
    id: "health-004",
    category: "health",
    subcategory: "nutrition",
    type: "mc",
    difficulty: 1,
    tags: [],
    question: "Which is a recommended way to improve nutrition according to the Facts for Drivers?",
    choices: [
      { key: "A", text: "Skip meals to reduce calorie intake" },
      { key: "B", text: "Substitute whole grains for processed foods and drink water instead of soda or coffee" },
      { key: "C", text: "Eat only fast food for convenience" },
      { key: "D", text: "Avoid all snacking between meals" }
    ],
    answer: "B",
    explanation: "The Facts for Drivers recommends several ways to improve nutrition: 1) Have a piece of fruit for a mid-morning snack, 2) Substitute whole grains for processed foods (brown rice, wheat bread), 3) Drink a glass of water for every cup of coffee or can of soda, 4) Eat one low-sweet dessert per day (cookie, cake, ice cream).",
    wrongExplanations: {
      "A": "Skipping meals is not recommended. The book suggests healthy substitutions and moderation, not skipping meals.",
      "C": "Fast food is generally not the healthiest option. The book recommends whole grains and fruit.",
      "D": "The book actually recommends having a piece of fruit as a mid-morning snack."
    },
    keyFact: "Nutrition tips: fruit snacks, whole grains, water for every coffee/soda, limit sweets"
  },
  {
    id: "health-005",
    category: "health",
    subcategory: "fitness",
    type: "mc",
    difficulty: 1,
    tags: [],
    question: "What are the prime requisites for keeping physically fit?",
    choices: [
      { key: "A", text: "Expensive gym equipment and supplements" },
      { key: "B", text: "Plenty of rest and no overindulgence, with daily exercise and good eating habits" },
      { key: "C", text: "Only cardio exercise and a strict diet" },
      { key: "D", text: "Sleeping at least 12 hours per day" }
    ],
    answer: "B",
    explanation: "The prime requisites for keeping physically fit are plenty of rest and no overindulgence that would result in abuse of the body. Annual physical exams are beneficial, as are daily exercise and good eating habits.",
    wrongExplanations: {
      "A": "Fitness doesn't require expensive equipment. The basics are rest, moderation, exercise, and good eating habits.",
      "C": "The book recommends a balanced approach including rest, moderation, daily exercise, and good eating — not just cardio and strict dieting.",
      "D": "While adequate rest is important, 12 hours is excessive. The key is 'plenty of rest' combined with exercise and moderation."
    },
    keyFact: "Fitness = rest + no overindulgence + daily exercise + good eating habits + annual physical"
  },
  {
    id: "health-006",
    category: "health",
    subcategory: "lifting",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What is the proper way to lift a heavy object?",
    choices: [
      { key: "A", text: "Bend at the waist and use your back muscles to lift" },
      { key: "B", text: "Place feet close to the object (shoulder width), get a sure grip, lift gradually with legs and thigh muscles keeping the back straight" },
      { key: "C", text: "Lift quickly using a jerking motion" },
      { key: "D", text: "Keep feet together and twist while lifting" }
    ],
    answer: "B",
    explanation: "The proper lifting technique is: place feet close to the object (about shoulder width apart), get a sure grip with the hands, and attempt to lift gradually — using the legs and thigh muscles while keeping the back straight. This prevents back injuries by using the strongest muscle groups.",
    wrongExplanations: {
      "A": "NEVER bend at the waist and use back muscles to lift. This is the primary cause of back injuries. Use your legs.",
      "C": "Quick jerking motions greatly increase the risk of muscle strains and hernias. Always lift gradually and smoothly.",
      "D": "Keeping feet together reduces stability, and twisting while lifting puts extreme strain on the back muscles and spine."
    },
    keyFact: "Lift with LEGS: feet shoulder width, sure grip, lift gradually, back STRAIGHT"
  },
  {
    id: "health-007",
    category: "health",
    subcategory: "lifting",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "When a turn is necessary during a lift or while carrying a heavy object, drivers should shift their feet to turn their entire body rather than twisting at the waist.",
    answer: true,
    explanation: "True. When a turn is necessary during a lift or while carrying a heavy object, lifters should shift their feet to avoid twisting the body. Twisting puts great strain on the back muscles and increases the likelihood of injury. The body should turn as a complete unit.",
    keyFact: "Turn by shifting feet, NEVER twist at the waist while carrying heavy objects"
  },
  {
    id: "health-008",
    category: "health",
    subcategory: "lifting",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "In addition to proper lifting techniques, what steps can be taken to further avoid injuries caused by lifting or carrying?",
    choices: [
      { key: "A", text: "Always carry the heaviest load possible in one trip" },
      { key: "B", text: "Get assistance for heavy objects, work as a team, make sure everyone is in charge and give signals for lifting/setting down" },
      { key: "C", text: "Use only your arms to carry objects" },
      { key: "D", text: "Ignore the weight limit and lift faster" }
    ],
    answer: "B",
    explanation: "To further avoid lifting injuries: 1) Get assistance to handle objects that are too big or heavy for one person, 2) When more than one person is involved, make sure everybody works as a team — one person should be in charge and give all signals for lifting, moving, and setting down the object, 3) Make sure the lifters always see where they are going.",
    wrongExplanations: {
      "A": "This is the opposite of safe practice. Break large loads into smaller ones or get help.",
      "C": "Using only your arms puts tremendous strain on them and your back. Use proper body mechanics and team lifting.",
      "D": "Ignoring weight limits and rushing increases injury risk dramatically."
    },
    keyFact: "Team lift: one person in charge, give signals, make sure everyone can see where they're going"
  },
  {
    id: "health-009",
    category: "health",
    subcategory: "injury-prevention",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What precautions can easily be taken to avoid hand injuries when moving freight?",
    choices: [
      { key: "A", text: "Never wear gloves to maintain grip sensitivity" },
      { key: "B", text: "Inspect articles for splinters, protruding nails, or rough surfaces and remove or avoid them; place hands where they cannot be caught between objects" },
      { key: "C", text: "Move freight as fast as possible" },
      { key: "D", text: "Only use bare hands to better feel the cargo" }
    ],
    answer: "B",
    explanation: "To avoid hand injuries when moving freight: 1) Inspect the article to be moved for splinters, protruding nails, or other rough surfaces and remove them or avoid them, 2) Place hands where they cannot be caught between the object being moved and any other nearby object, 3) Always avoid moving any object by grasping steel strapping.",
    wrongExplanations: {
      "A": "Gloves are often necessary protection against cuts, splinters, and chemical exposure when handling freight.",
      "C": "Rushing increases the chance of hand injuries. Take time to inspect and handle freight carefully.",
      "D": "Bare hands are more vulnerable to cuts, splinters, and chemical contact."
    },
    keyFact: "Hand safety: inspect for splinters/nails, place hands where they can't get caught, avoid steel strapping"
  },
  {
    id: "health-010",
    category: "health",
    subcategory: "injury-prevention",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What precautions should a driver take to avoid injury when working around the vehicle?",
    choices: [
      { key: "A", text: "Jump down from the cab to save time" },
      { key: "B", text: "Always use three points of contact when climbing in and out; be aware of foot and hand holds" },
      { key: "C", text: "Wear sandals for comfort on long trips" },
      { key: "D", text: "Skip pre-trip inspection steps that require getting under the vehicle" }
    ],
    answer: "B",
    explanation: "To avoid injury around the vehicle, drivers should: 1) Always be sure of foot and hand holds when climbing into or out of the cab, cargo space, or behind the cab, 2) Use three points of contact (two hands and one foot, or two feet and one hand) at all times, 3) Connect air and light lines, and when getting in and out of the vehicle.",
    wrongExplanations: {
      "A": "NEVER jump down from the cab. This is a leading cause of driver injuries. Always use three points of contact.",
      "C": "Proper footwear with non-slip soles is essential for safety. Sandals provide no foot protection.",
      "D": "All pre-trip inspection steps are required by FMCSR (Federal Motor Carrier Safety Regulations) and must be completed."
    },
    keyFact: "3 points of contact ALWAYS when getting in/out of vehicle. Never jump down."
  },
  {
    id: "health-011",
    category: "health",
    subcategory: "lifting",
    type: "tf",
    difficulty: 1,
    tags: ["procedure"],
    question: "The force exerted on the back when lifting with the back bent is approximately 8 to 10 times greater than lifting with the back straight.",
    answer: true,
    explanation: "True. In lifting, the amount of force that is exerted on the structures of the back is approximately eight to ten times greater with the back bent than with the back straight. Both a strain and hernia (rupture) are more apt to be avoided if proper lifting methods are used.",
    keyFact: "Bent back = 8-10x MORE force on spine. Always lift with back STRAIGHT."
  },
  {
    id: "health-012",
    category: "health",
    subcategory: "injury-prevention",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "How can a driver avoid injury while turning to avoid twisting the body when carrying a heavy object?",
    choices: [
      { key: "A", text: "Twist at the waist quickly" },
      { key: "B", text: "Shift their feet to turn their entire body as a unit" },
      { key: "C", text: "Only use one arm to carry" },
      { key: "D", text: "Lean backwards while turning" }
    ],
    answer: "B",
    explanation: "When a turn is necessary during a lift or while carrying a heavy object, the lifter should shift their feet to turn the entire body as a unit. Twisting the body puts great strain on the back muscles and increases the likelihood of injury.",
    wrongExplanations: {
      "A": "Twisting at the waist — especially quickly — is the exact motion that causes back injuries while carrying heavy loads.",
      "C": "Carrying with one arm puts asymmetric stress on the body and is more likely to cause injury.",
      "D": "Leaning backward shifts the center of gravity and increases fall and back injury risk."
    },
    keyFact: "Shift feet to turn. NEVER twist at the waist while carrying."
  },
  {
    id: "health-013",
    category: "health",
    subcategory: "fitness",
    type: "tf",
    difficulty: 1,
    tags: [],
    question: "Annual physical exams, daily exercise, and good eating habits are all recommended for professional drivers to maintain fitness.",
    answer: true,
    explanation: "True. The Facts for Drivers recommends that professional drivers maintain fitness through annual physical examinations, daily exercise, and good eating habits. These are the prime requisites for keeping physically fit, along with plenty of rest and avoiding overindulgence.",
    keyFact: "Driver fitness: annual physicals + daily exercise + good eating + adequate rest"
  },
  {
    id: "health-014",
    category: "health",
    subcategory: "nutrition",
    type: "tf",
    difficulty: 1,
    tags: [],
    question: "Drinking a glass of water for every cup of coffee or can of soda is a recommended nutrition improvement for drivers.",
    answer: true,
    explanation: "True. The Facts for Drivers lists drinking a glass of water for every cup of coffee or can of soda as one of several easy pathways to incorporate better nutrition into a driver's diet.",
    keyFact: "Match every coffee/soda with a glass of water."
  },
  {
    id: "health-015",
    category: "health",
    subcategory: "injury-prevention",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "Why should a driver always avoid moving any object by grasping steel strapping?",
    choices: [
      { key: "A", text: "Steel strapping is too weak to hold" },
      { key: "B", text: "Steel strapping can cut hands severely and may break under tension" },
      { key: "C", text: "Steel strapping is only decorative" },
      { key: "D", text: "It's against company policy but not dangerous" }
    ],
    answer: "B",
    explanation: "Drivers should always avoid moving any object by grasping steel strapping because steel strapping can cut the hands severely and may break under tension, causing serious lacerations and potentially releasing heavy cargo suddenly.",
    wrongExplanations: {
      "A": "Steel strapping is strong, but that's not the issue — it's the sharp edges and risk of sudden release that make it dangerous to grasp.",
      "C": "Steel strapping serves a real functional purpose for securing cargo, but it should never be used as a handle.",
      "D": "It IS inherently dangerous, not just a policy matter. Steel strapping can cause severe hand injuries."
    },
    keyFact: "NEVER grasp steel strapping to move objects — severe hand laceration risk."
  }
];
