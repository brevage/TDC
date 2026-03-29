// ===== First Aid Questions =====
var TDC = window.TDC || {};
window.TDC = TDC;

TDC.QuestionsFirstAid = [
  // ── Four Purposes of First Aid ──
  {
    id: "firstaid-001",
    category: "firstaid",
    subcategory: "basics",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What are the four primary purposes of first aid training?",
    choices: [
      { key: "A", text: "Preserving life, preventing further injury, preserving the victim's morale, promoting recovery" },
      { key: "B", text: "Stopping bleeding, calling 911, performing CPR, transporting the victim" },
      { key: "C", text: "Diagnosing injuries, administering medication, calling for help, documenting the scene" },
      { key: "D", text: "Applying bandages, splinting fractures, treating shock, performing surgery" }
    ],
    answer: "A",
    explanation: "The four primary purposes of first aid training are: (1) Preserving life, (2) Preventing further injury or worsening of the condition, (3) Preserving the victim's morale (keeping them calm), and (4) Promoting recovery.",
    wrongExplanations: {
      "B": "While some of these are first aid actions, they do not represent the four stated purposes of first aid training.",
      "C": "Diagnosing injuries and administering medication are medical functions, not the core purposes of first aid.",
      "D": "Performing surgery is not a first aid function. The four purposes focus on preserving life, preventing further injury, maintaining morale, and promoting recovery."
    },
    keyFact: "4 purposes of first aid: Preserve life, Prevent further injury, Preserve morale, Promote recovery"
  },
  {
    id: "firstaid-002",
    category: "firstaid",
    subcategory: "basics",
    type: "fill",
    difficulty: 1,
    tags: ["procedure"],
    question: "What is the FIRST thing to do when giving first aid treatment?",
    answer: "Secure the scene",
    acceptedAnswers: [
      "Secure the scene",
      "Secure the scene and ensure safety",
      "Make sure the scene is safe",
      "Scene safety",
      "Ensure the scene is safe",
      "Secure the scene and ensure that the persons offering first aid and the patient are not in harms way"
    ],
    explanation: "The first thing to do when giving first aid is to secure the scene and ensure that both the persons offering first aid and the patient are not in harm's way, especially on a highway. You cannot help anyone if you become a victim yourself.",
    keyFact: "First step in first aid: Secure the scene and ensure safety"
  },
  {
    id: "firstaid-003",
    category: "firstaid",
    subcategory: "basics",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What should be done to summon emergency assistance?",
    choices: [
      { key: "A", text: "Wait for someone else to call" },
      { key: "B", text: "Give the location, type of emergency, and number of persons available to help; stay on the phone" },
      { key: "C", text: "Call only after completing all first aid" },
      { key: "D", text: "Send the victim to drive themselves to the hospital" }
    ],
    answer: "B",
    explanation: "To summon emergency assistance, you should call 911 or the local emergency number and give the location of the emergency, the type of emergency, and the number of persons available to help. Stay on the phone in case more information is needed, and send a reliable person to flag down the ambulance.",
    wrongExplanations: {
      "A": "Waiting for someone else wastes critical time. You should call immediately.",
      "C": "Emergency services should be contacted as soon as possible, not after all first aid is complete.",
      "D": "An injured person should never be asked to drive themselves. Call emergency services instead."
    },
    keyFact: "Summon help: Give location, type of emergency, number of helpers; stay on the phone"
  },
  // ── Basic Principles of Administering First Aid ──
  {
    id: "firstaid-004",
    category: "firstaid",
    subcategory: "basics",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "Which of the following is a basic principle to remember when administering first aid?",
    choices: [
      { key: "A", text: "Move the patient immediately to a warmer location" },
      { key: "B", text: "Avoid or overcome chilling by using blankets or covers if possible" },
      { key: "C", text: "Give the patient food and water right away" },
      { key: "D", text: "Ask the patient to stand up and walk around" }
    ],
    answer: "B",
    explanation: "Basic principles of first aid include: (1) Keep the victim from unnecessary moving, (2) Take immediate necessary action to remove the patient from danger, (3) Avoid or overcome chilling by using blankets or covers, (4) Determine the injury and take first aid measures, (5) Examine the patient carefully and methodically, (6) Reassure the victim, and (7) If the patient is unconscious, look for evidence of head injury.",
    wrongExplanations: {
      "A": "Moving the patient unnecessarily can worsen injuries. You should keep the victim from unnecessary movement.",
      "C": "You should NOT give food or drink to an unconscious or seriously injured person.",
      "D": "Asking the patient to move can worsen injuries. Keep the victim still."
    },
    keyFact: "Avoid or overcome chilling; keep victim from unnecessary movement; determine injury methodically"
  },
  {
    id: "firstaid-005",
    category: "firstaid",
    subcategory: "basics",
    type: "tf",
    difficulty: 1,
    tags: ["procedure"],
    question: "True or False: You should attempt to give first aid to a conscious person who refuses treatment.",
    answer: "false",
    explanation: "If the victim is conscious, you should ask permission before giving first aid. Do not attempt to give first aid against the victim's wishes. This respects the individual's right to refuse treatment.",
    keyFact: "Get permission; do NOT give first aid against a conscious victim's wishes"
  },
  // ── Shock Treatment ──
  {
    id: "firstaid-006",
    category: "firstaid",
    subcategory: "shock",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What are the general directions for first aid treatment for shock?",
    choices: [
      { key: "A", text: "Maintain body heat (do not add heat), elevate the person, and if raising legs would cause pain, keep the person flat" },
      { key: "B", text: "Apply ice packs to the patient's body and elevate the head" },
      { key: "C", text: "Give the patient hot coffee and cover them with heated blankets" },
      { key: "D", text: "Have the patient sit upright and walk around to improve circulation" }
    ],
    answer: "A",
    explanation: "For a patient in shock: maintain the patient's body heat (do not add heat), elevate the person but if raising the legs would cause pain or further injury, keep the person flat. The key is to prevent further heat loss without overheating.",
    wrongExplanations: {
      "B": "Ice packs would worsen shock by lowering body temperature. Elevating the head is not the standard procedure.",
      "C": "You should never give fluids to a person in shock, and you should maintain body heat, not add heat.",
      "D": "A person in shock should remain lying down, not sitting up or walking."
    },
    keyFact: "Shock treatment: Maintain body heat (don't add heat), elevate if possible, keep flat if raising legs causes pain"
  },
  // ── Infection ──
  {
    id: "firstaid-007",
    category: "firstaid",
    subcategory: "infection",
    type: "fill",
    difficulty: 2,
    tags: ["procedure"],
    question: "What is an infection in the context of first aid?",
    answer: "An infection is the growth of harmful germs in any internal or external wound",
    acceptedAnswers: [
      "An infection is the growth of harmful germs in any internal or external wound",
      "The growth of harmful germs in a wound",
      "Growth of harmful germs in any internal or external wound"
    ],
    explanation: "An infection is the growth of harmful germs in any internal or external wound. Serious infection and blood poisoning most often start from very small wounds, particularly on hands and feet. Proper wound care is essential to prevent infection.",
    keyFact: "Infection = growth of harmful germs in internal or external wounds; often starts from small wounds on hands/feet"
  },
  // ── Disease Transmission ──
  {
    id: "firstaid-008",
    category: "firstaid",
    subcategory: "disease-transmission",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What is the risk of disease transmission while administering first aid?",
    choices: [
      { key: "A", text: "There is no risk of disease transmission during first aid" },
      { key: "B", text: "There is a potential risk, but there are no known cases involving first aid treatment" },
      { key: "C", text: "Disease transmission only occurs through mouth-to-mouth resuscitation" },
      { key: "D", text: "The risk is so high that you should never administer first aid" }
    ],
    answer: "B",
    explanation: "There is a potential risk of disease transmission, but there are no known cases involving first aid treatment. Despite this, precautions should still be taken to minimize risk.",
    wrongExplanations: {
      "A": "There is a potential risk, even though no known cases have been documented during first aid.",
      "C": "The risk is not limited to mouth-to-mouth resuscitation; contact with bodily fluids also poses a risk.",
      "D": "The risk should not prevent you from administering first aid. Take precautions and provide care."
    },
    keyFact: "Potential risk of disease transmission exists, but no known cases from first aid treatment"
  },
  {
    id: "firstaid-009",
    category: "firstaid",
    subcategory: "disease-transmission",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "Which of the following is NOT a recommended step to minimize the risk of disease transmission during first aid?",
    choices: [
      { key: "A", text: "Avoid contact with bodily fluids when possible" },
      { key: "B", text: "Place barriers such as disposable gloves or a clean dry cloth between yourself and the patient's body fluids" },
      { key: "C", text: "Share eating utensils with the patient to build trust" },
      { key: "D", text: "Wash your hands with soap and water ASAP before and after giving care" }
    ],
    answer: "C",
    explanation: "Steps to minimize disease transmission risk include: (1) Avoid contact with bodily fluids, (2) Use barriers such as disposable gloves or clean dry cloth, (3) Use protective clothing, (4) Wash hands with soap and water before and after giving care, (5) Do not eat, drink, or touch your mouth, nose, or eyes when giving first aid, and (6) Do not touch objects that may be soiled with blood. Sharing eating utensils is NOT recommended.",
    wrongExplanations: {
      "A": "Avoiding contact with bodily fluids IS a recommended precaution.",
      "B": "Using barriers IS a recommended precaution to prevent disease transmission.",
      "D": "Washing hands before and after IS a recommended precaution."
    },
    keyFact: "Minimize transmission: gloves/barriers, wash hands, avoid bodily fluid contact, don't eat/drink/touch face"
  },
  // ── Internal Bleeding ──
  {
    id: "firstaid-010",
    category: "firstaid",
    subcategory: "bleeding",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "Which of the following is a sign of internal bleeding?",
    choices: [
      { key: "A", text: "Bright red blood flowing from a wound" },
      { key: "B", text: "Tender, bruised or hard areas of the body such as the abdomen" },
      { key: "C", text: "A visible broken bone protruding from the skin" },
      { key: "D", text: "A rash on the arms" }
    ],
    answer: "B",
    explanation: "Signs of internal bleeding include: (1) Tender, bruised, or hard areas of the body such as the abdomen, (2) Rapid, weak pulse, (3) Skin that is cool, moist, pale, or bluish, (4) Excessive thirst, and (5) Becoming confused, faint, drowsy, or unconscious.",
    wrongExplanations: {
      "A": "Bright red blood flowing from a wound indicates external bleeding, not internal.",
      "C": "A bone protruding from the skin is an open fracture, not a sign of internal bleeding.",
      "D": "A rash is not a typical sign of internal bleeding."
    },
    keyFact: "Internal bleeding signs: tender/bruised/hard abdomen, rapid weak pulse, cool/moist/pale skin, thirst, confusion"
  },
  {
    id: "firstaid-011",
    category: "firstaid",
    subcategory: "bleeding",
    type: "fill",
    difficulty: 2,
    tags: ["procedure", "numbers"],
    question: "How many pints of blood can a person lose at one time before it becomes serious or possibly fatal?",
    answer: "2 pints",
    acceptedAnswers: ["2 pints", "two pints", "2"],
    explanation: "Losing two pints of blood at one time is serious or possibly fatal. This is why controlling bleeding quickly is one of the most critical first aid skills.",
    keyFact: "Losing 2 pints of blood at one time is serious or possibly fatal"
  },
  // ── Tourniquets ──
  {
    id: "firstaid-012",
    category: "firstaid",
    subcategory: "bleeding",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "When should a tourniquet be used?",
    choices: [
      { key: "A", text: "For any minor cut or scrape" },
      { key: "B", text: "Only for severe life-threatening hemorrhages from an arm or leg that cannot be controlled by other means" },
      { key: "C", text: "Whenever there is any visible bleeding" },
      { key: "D", text: "As the first step in treating any wound" }
    ],
    answer: "B",
    explanation: "A tourniquet should be used only for severe life-threatening hemorrhages (from an arm or leg) that cannot be controlled by other means. It is a last resort because improper use can cause tissue damage or limb loss.",
    wrongExplanations: {
      "A": "A tourniquet is far too aggressive for minor cuts or scrapes. Direct pressure is sufficient.",
      "C": "A tourniquet is not appropriate for all visible bleeding, only life-threatening hemorrhages from extremities.",
      "D": "A tourniquet should be a last resort, not the first step. Try direct pressure first."
    },
    keyFact: "Tourniquet: ONLY for severe life-threatening hemorrhages from arm/leg not controllable by other means"
  },
  // ── Bandage Monitoring ──
  {
    id: "firstaid-013",
    category: "firstaid",
    subcategory: "bleeding",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "Why should bandages be examined frequently after application?",
    choices: [
      { key: "A", text: "To check if the bandage color matches the patient's clothing" },
      { key: "B", text: "Because swelling may cause the bandage to become too tight, cutting off blood supply" },
      { key: "C", text: "To ensure the bandage stays clean and dry" },
      { key: "D", text: "To apply more bandages on top of the existing one" }
    ],
    answer: "B",
    explanation: "Swelling usually follows an injury and a bandage which was just right when applied may become too tight later, cutting off the blood supply. Bandages should be examined frequently to ensure proper circulation.",
    wrongExplanations: {
      "A": "The color of the bandage is irrelevant. The concern is circulation.",
      "C": "While cleanliness matters, the primary reason for frequent checks is to prevent the bandage from becoming too tight due to swelling.",
      "D": "Adding more bandages is not the purpose. You need to check if swelling has made the existing bandage too tight."
    },
    keyFact: "Check bandages frequently: swelling can make bandages too tight, cutting off blood supply"
  },
  // ── Fractures ──
  {
    id: "firstaid-014",
    category: "firstaid",
    subcategory: "fractures",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What is the difference between a closed and an open fracture?",
    choices: [
      { key: "A", text: "A closed fracture involves the spine; an open fracture involves a limb" },
      { key: "B", text: "An open fracture has a wound extending from the break through the skin surface; a closed fracture has no such wound" },
      { key: "C", text: "A closed fracture is less painful than an open fracture" },
      { key: "D", text: "An open fracture can only occur in the arm; a closed fracture can occur anywhere" }
    ],
    answer: "B",
    explanation: "An open fracture is a break in a bone with a wound extending from the break through the surface of the skin. There is no such wound associated with a closed fracture. Open fractures carry a higher risk of infection.",
    wrongExplanations: {
      "A": "The distinction is not about body location but about whether the skin is broken.",
      "C": "Pain level is not what differentiates the two types; the presence of a wound through the skin is the key difference.",
      "D": "Open fractures can occur in any bone, not just the arm."
    },
    keyFact: "Open fracture: bone break with wound through skin. Closed fracture: no wound through skin."
  },
  // ── Moving Injured Persons ──
  {
    id: "firstaid-015",
    category: "firstaid",
    subcategory: "transport",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "If a first-aid provider must attempt immediate movement of an injured person, what principle must be observed to minimize further injury?",
    choices: [
      { key: "A", text: "Drag the person by their arms as quickly as possible" },
      { key: "B", text: "Protect all parts of the body from the tensions of lifting; provide support for arms, legs, head, and back" },
      { key: "C", text: "Only move the person by their legs" },
      { key: "D", text: "Roll the person over several times to the safe area" }
    ],
    answer: "B",
    explanation: "To minimize further injury, protect all parts of the body from the tensions of lifting. Provide support for the arms, legs, head, and back, keeping the body in a straight line and moving as little as possible.",
    wrongExplanations: {
      "A": "Dragging by the arms can cause further spinal or shoulder injury.",
      "C": "Moving only by the legs does not protect the spine, head, or other body parts.",
      "D": "Rolling the person could worsen spinal injuries or fractures."
    },
    keyFact: "Protect all body parts from lifting tensions; support arms, legs, head, back; keep body in straight line"
  },
  {
    id: "firstaid-016",
    category: "firstaid",
    subcategory: "transport",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "True or False: A seriously injured person should be transported lying down on a stretcher or backboard, face up, and possible fractures must be immobilized first.",
    answer: "true",
    explanation: "A seriously injured person should be transported lying down on a stretcher or backboard, face up. Possible fractures must be immobilized before transport to prevent further injury.",
    keyFact: "Transport seriously injured: stretcher/backboard, face up, immobilize fractures first"
  },
  // ── Wound Care ──
  {
    id: "firstaid-017",
    category: "firstaid",
    subcategory: "wounds",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What are the basic objectives in the first aid care of a wound?",
    choices: [
      { key: "A", text: "Apply antiseptic spray and wrap in plastic" },
      { key: "B", text: "Control bleeding, protect the wound from contamination, and treat for shock while remembering to protect from blood-borne diseases" },
      { key: "C", text: "Remove any foreign objects and stitch the wound closed" },
      { key: "D", text: "Apply a heating pad and elevate the wound above the heart" }
    ],
    answer: "B",
    explanation: "The first-aid provider's primary objectives are to control bleeding, protect the wound from contamination, and treat for shock while remembering to protect themselves from blood-borne diseases (e.g., by wearing rubber gloves).",
    wrongExplanations: {
      "A": "Wrapping in plastic is not standard wound care. The focus should be on bleeding control and contamination prevention.",
      "C": "Removing foreign objects and stitching wounds are medical procedures, not first aid actions.",
      "D": "Heating pads are not used for wound care. The objectives are bleeding control, contamination prevention, and shock treatment."
    },
    keyFact: "Wound care objectives: control bleeding, prevent contamination, treat for shock, protect from blood-borne diseases"
  },
  // ── Artificial Respiration ──
  {
    id: "firstaid-018",
    category: "firstaid",
    subcategory: "respiration",
    type: "fill",
    difficulty: 1,
    tags: ["procedure", "numbers"],
    question: "Within how many minutes of breathing stoppage can irreversible brain damage begin?",
    answer: "4 to 6 minutes",
    acceptedAnswers: ["4 to 6 minutes", "4-6 minutes", "4 to 6", "4-6"],
    explanation: "Unless given artificial respiration, most persons will suffer irreversible brain damage within 4 to 6 minutes of breathing stoppage. This is why rapid response is critical.",
    keyFact: "Irreversible brain damage begins within 4-6 minutes of breathing stoppage"
  },
  {
    id: "firstaid-019",
    category: "firstaid",
    subcategory: "respiration",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What are the most common methods of administering artificial respiration?",
    choices: [
      { key: "A", text: "Mouth-to-mouth and mouth-to-nose" },
      { key: "B", text: "Chest compressions only" },
      { key: "C", text: "Back blows and abdominal thrusts" },
      { key: "D", text: "Elevating the legs and applying cold compresses" }
    ],
    answer: "A",
    explanation: "The most common methods of administering artificial respiration are mouth-to-mouth and mouth-to-nose. These methods allow the first-aid provider to directly supply oxygen to the patient's lungs.",
    wrongExplanations: {
      "B": "Chest compressions are part of CPR but alone are not the method of artificial respiration described.",
      "C": "Back blows and abdominal thrusts are used for choking, not artificial respiration.",
      "D": "These are not methods of artificial respiration."
    },
    keyFact: "Most common artificial respiration methods: mouth-to-mouth and mouth-to-nose"
  },
  {
    id: "firstaid-020",
    category: "firstaid",
    subcategory: "respiration",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What is an advantage of mouth-to-mouth or mouth-to-nose artificial respiration?",
    choices: [
      { key: "A", text: "It requires no physical contact with the patient" },
      { key: "B", text: "It enables the provider to provide more oxygen, and you can feel air resistance and lung expansion" },
      { key: "C", text: "It can be performed from across the room" },
      { key: "D", text: "It is completely risk-free for the provider" }
    ],
    answer: "B",
    explanation: "Mouth-to-mouth or mouth-to-nose artificial respiration provides more oxygen to inflate the patient's lungs. It also enables the first-aid provider to feel the air resistance and feel and see the patient's chest rise, confirming air is being received.",
    wrongExplanations: {
      "A": "These methods require direct physical contact with the patient's mouth or nose.",
      "C": "These methods require being directly next to the patient.",
      "D": "There is a potential risk of disease transmission, though no known cases have been documented during first aid."
    },
    keyFact: "Mouth-to-mouth/nose: provides more oxygen, lets you feel air resistance and see chest rise"
  },
  {
    id: "firstaid-021",
    category: "firstaid",
    subcategory: "respiration",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "In giving mouth-to-mouth or mouth-to-nose artificial respiration, is there a risk of disease transmission?",
    choices: [
      { key: "A", text: "Yes, and diseases can easily be transmitted even though no known cases exist in first aid" },
      { key: "B", text: "Yes; face shields and masks should be used to avoid direct contact when available, and those not trained should administer compressions only" },
      { key: "C", text: "No, there is absolutely no risk" },
      { key: "D", text: "Yes, and therefore artificial respiration should never be performed" }
    ],
    answer: "B",
    explanation: "The potential that a disease can be transmitted from mouth-to-mouth or mouth-to-nose exists although there are no known cases. Face shields and masks which can be used to avoid direct contact with a victim's saliva are available and should be used when possible. Those not trained should administer compressions only, not mouth-to-mouth.",
    wrongExplanations: {
      "A": "While risk exists, it is not described as 'easily' transmitted, and precautions are available.",
      "C": "There is a potential risk, even if no known cases exist from first aid.",
      "D": "The risk should not prevent life-saving artificial respiration. Use precautions when possible."
    },
    keyFact: "Use face shields/masks for mouth-to-mouth; untrained should do compressions only"
  },
  // ── Conditions Requiring Immediate Rescue ──
  {
    id: "firstaid-022",
    category: "firstaid",
    subcategory: "rescue",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "Which of the following circumstances justify immediate rescue efforts?",
    choices: [
      { key: "A", text: "Only when the victim requests to be moved" },
      { key: "B", text: "Danger of fire or explosion, serious traffic hazards, risk of drowning, exposure to extreme conditions, or electrical injury" },
      { key: "C", text: "Only when an ambulance is more than 30 minutes away" },
      { key: "D", text: "Only when the victim is unconscious" }
    ],
    answer: "B",
    explanation: "Immediate rescue is warranted when one or more of the following exist: (1) Danger of fire or explosion, (2) Serious traffic hazards, (3) Risk of drowning, (4) Exposure to extreme cold/heat/severe weather, (5) Danger of collapsing structure/equipment, (6) Electrical injury or potential injury, (7) Floating by machinery, (8) Asphyxia due to lack of oxygen or toxic gases.",
    wrongExplanations: {
      "A": "An unconscious victim cannot request to be moved. Rescue is based on environmental dangers, not victim requests.",
      "C": "Immediate rescue is based on imminent danger, not ambulance arrival time.",
      "D": "Consciousness is not the determining factor; environmental dangers determine the need for immediate rescue."
    },
    keyFact: "Immediate rescue: fire/explosion, traffic, drowning, extreme conditions, collapsing structure, electrical injury, toxic gases"
  },
  // ── Life-Threatening Situations ──
  {
    id: "firstaid-023",
    category: "firstaid",
    subcategory: "priorities",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "In an immediate life-threatening situation, what actions must be taken by the first-aid provider before moving the patient?",
    choices: [
      { key: "A", text: "Take photographs of the scene for documentation" },
      { key: "B", text: "Care for breathing, circulation, and hemorrhaging; dress wounds; immobilize fractures" },
      { key: "C", text: "Wait for an ambulance before doing anything" },
      { key: "D", text: "Administer pain medication" }
    ],
    answer: "B",
    explanation: "Before moving a patient in a life-threatening situation, the first-aid provider should: (1) Care for breathing, circulation, and hemorrhaging, (2) Dress wounds, and (3) Immobilize fractures. These steps stabilize the patient before transport.",
    wrongExplanations: {
      "A": "Documentation is not a priority in a life-threatening situation. Patient care comes first.",
      "C": "In a life-threatening situation, waiting without action could cost the patient their life.",
      "D": "Administering medication is not a first-aid provider's role."
    },
    keyFact: "Before moving: care for breathing/circulation/hemorrhaging, dress wounds, immobilize fractures"
  },
  // ── Professional Help Indicators ──
  {
    id: "firstaid-024",
    category: "firstaid",
    subcategory: "priorities",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "Which of the following conditions clearly indicate the need to obtain professional medical help?",
    choices: [
      { key: "A", text: "A minor scrape on the knee" },
      { key: "B", text: "Unconsciousness, trouble breathing, chest pain, severe bleeding, vomiting or passing blood, severe headache, or possible broken bones" },
      { key: "C", text: "A small splinter in the finger" },
      { key: "D", text: "Mild sunburn" }
    ],
    answer: "B",
    explanation: "Professional medical assistance should be sought when the patient: (1) Is unconscious or semiconscious, (2) Has trouble breathing or is breathing strangely, (3) Has chest pain or pressure, (4) Is bleeding severely, (5) Is vomiting or passing blood, (6) Exhibits a severe headache or slurred speech, (7) Shows signs of poisoning, (8) Has possible broken bones.",
    wrongExplanations: {
      "A": "A minor scrape typically does not require professional medical help.",
      "C": "A small splinter usually does not require professional medical help.",
      "D": "Mild sunburn typically does not require professional medical help."
    },
    keyFact: "Get professional help: unconsciousness, breathing trouble, chest pain, severe bleeding, vomiting blood, broken bones"
  },
  // ── Artificial Respiration Conditions ──
  {
    id: "firstaid-025",
    category: "firstaid",
    subcategory: "respiration",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "Under what conditions may artificial respiration be helpful?",
    choices: [
      { key: "A", text: "Only for drowning victims" },
      { key: "B", text: "Electric shock, drowning, poisoning by gas or depressant drugs, and compression of the chest" },
      { key: "C", text: "Only for choking victims" },
      { key: "D", text: "Only for cardiac arrest" }
    ],
    answer: "B",
    explanation: "Artificial respiration may be life-saving if administered in cases of: (1) Electric shock, (2) Drowning, (3) Poisoning by gas or respiration-depressing drugs such as morphine, barbiturates, and alcohol, (4) Compression of the chest, (5) Choking or partial obstruction of breathing passages, and in some cases, (6) Gas and drug poisoning when breathing becomes extremely slow and shallow.",
    wrongExplanations: {
      "A": "Artificial respiration helps in many situations beyond drowning.",
      "C": "While choking is one condition, there are many others where artificial respiration is needed.",
      "D": "Cardiac arrest requires CPR (compressions and breaths), and artificial respiration helps in many non-cardiac situations."
    },
    keyFact: "Artificial respiration: electric shock, drowning, gas/drug poisoning, chest compression, choking"
  },
  // ── Why Fast Action Matters ──
  {
    id: "firstaid-026",
    category: "firstaid",
    subcategory: "respiration",
    type: "tf",
    difficulty: 1,
    tags: ["procedure", "numbers"],
    question: "True or False: Unless given artificial respiration, most persons will suffer irreversible brain damage within 4 to 6 minutes or less of breathing stoppage.",
    answer: "true",
    explanation: "This is true. Irreversible brain damage begins within 4 to 6 minutes of breathing stopping. This is why immediate action to restore breathing is so critical in first aid emergencies.",
    keyFact: "Brain damage in 4-6 minutes without breathing; act fast"
  },
  // ── Scene Safety at Accident ──
  {
    id: "firstaid-027",
    category: "firstaid",
    subcategory: "scene-safety",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "At the scene of an accident, what checks should be made to minimize the risk of fire?",
    choices: [
      { key: "A", text: "Check that all damaged vehicles are turned off, there is no leaking fuel, no one is smoking nearby, and if fuel is leaking use flares to protect the scene" },
      { key: "B", text: "Ensure engines of all damaged vehicles are turned off, there is no leaking fuel, no one is smoking in the vicinity, and if there is evidence of leaking fuel then flares should NOT be used" },
      { key: "C", text: "Only check the victim's vehicle for leaking fuel" },
      { key: "D", text: "Light flares immediately to mark the scene regardless of conditions" }
    ],
    answer: "B",
    explanation: "To minimize fire risk at an accident scene: (1) Ensure engines of all damaged vehicles are turned off, (2) Check that there is no leaking fuel, (3) Make sure no one is smoking in the vicinity (especially if there is leaking fuel), and (4) If there is evidence of leaking fuel, flares should NOT be used to direct traffic or protect the scene, as they could ignite the fuel.",
    wrongExplanations: {
      "A": "Flares should NOT be used if there is leaking fuel, as they could cause an explosion.",
      "C": "All damaged vehicles should be checked, not just the victim's vehicle.",
      "D": "Lighting flares immediately without checking for fuel leaks is extremely dangerous."
    },
    keyFact: "Turn off engines, check for fuel leaks, no smoking, do NOT use flares if fuel is leaking"
  },
  // ── Blood Loss ──
  {
    id: "firstaid-028",
    category: "firstaid",
    subcategory: "bleeding",
    type: "tf",
    difficulty: 1,
    tags: ["procedure", "numbers"],
    question: "True or False: The loss of two pints of blood at one time is serious or possibly fatal.",
    answer: "true",
    explanation: "True. Losing two pints of blood at one time is serious or possibly fatal. This underscores the critical importance of controlling bleeding quickly during first aid.",
    keyFact: "2 pints blood loss = serious/possibly fatal"
  },
  // ── Internal Bleeding Signs ──
  {
    id: "firstaid-029",
    category: "firstaid",
    subcategory: "bleeding",
    type: "fill",
    difficulty: 2,
    tags: ["procedure"],
    question: "Name three signs of internal bleeding.",
    answer: "Tender/bruised/hard areas of the body, rapid weak pulse, cool moist pale or bluish skin",
    acceptedAnswers: [
      "Tender/bruised/hard areas of the body, rapid weak pulse, cool moist pale or bluish skin",
      "Tender bruised or hard areas, rapid weak pulse, cool moist pale skin",
      "Bruised abdomen, weak pulse, pale skin",
      "Rapid weak pulse, excessive thirst, becoming confused or faint"
    ],
    explanation: "Signs of internal bleeding include: (1) Tender, bruised, or hard areas of the body such as the abdomen, (2) Rapid, weak pulse, (3) Skin that is cool, moist, pale, or bluish, (4) Excessive thirst, and (5) Becoming confused, faint, drowsy, or unconscious.",
    keyFact: "Internal bleeding: tender/bruised/hard abdomen, rapid weak pulse, cool/pale/bluish skin, thirst, confusion"
  },
  // ── What to Do Before Giving First Aid ──
  {
    id: "firstaid-030",
    category: "firstaid",
    subcategory: "basics",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What should you do before attempting to give first aid to a person who is conscious?",
    choices: [
      { key: "A", text: "Get the victim's consent; if they are unconscious, do not attempt first aid against the victim's wishes" },
      { key: "B", text: "Always proceed without asking, as time is critical" },
      { key: "C", text: "Only give first aid if a doctor is present" },
      { key: "D", text: "Wait until the ambulance arrives" }
    ],
    answer: "A",
    explanation: "Before giving first aid to a conscious person, you should get their consent. If the victim is conscious and does not want help, do not attempt to give first aid against their wishes. If the victim is unconscious, implied consent generally allows you to provide care.",
    wrongExplanations: {
      "B": "A conscious person has the right to refuse treatment. Always ask for consent.",
      "C": "First aid should be provided by trained bystanders when needed; you do not need a doctor present.",
      "D": "In an emergency, waiting for an ambulance without providing first aid could cost the victim their life."
    },
    keyFact: "Get consent from a conscious victim before giving first aid"
  }
];
