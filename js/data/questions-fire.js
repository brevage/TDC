// ===== Fire Safety Questions =====
var TDC = window.TDC || {};
window.TDC = TDC;

TDC.QuestionsFire = [
  // ── Cargo Nature in Fires ──
  {
    id: "fire-001",
    category: "fire",
    subcategory: "cargo",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "Why is it important for a driver to know the nature of the cargo in case of fire?",
    choices: [
      { key: "A", text: "To determine how much insurance coverage is needed" },
      { key: "B", text: "Because the nature of the cargo can greatly affect the severity of a fire; for example, paper, cloth, or upholstered furniture will add more fuel" },
      { key: "C", text: "To decide whether to call the fire department" },
      { key: "D", text: "It is not important; all fires are handled the same way" }
    ],
    answer: "B",
    explanation: "The nature of the cargo can greatly affect the severity of a fire on the vehicle. For example, paper, cloth, or upholstered furniture will add more fuel to a fire than steel coils. Knowing the cargo helps determine the best firefighting approach.",
    wrongExplanations: {
      "A": "Insurance coverage is not the concern during a fire emergency.",
      "C": "The fire department should always be called regardless of cargo type.",
      "D": "Different types of cargo require different firefighting approaches and affect fire severity differently."
    },
    keyFact: "Cargo nature affects fire severity: paper/cloth/furniture = more fuel than steel coils"
  },
  // ── Truck Fire Response (6 Steps) ──
  {
    id: "fire-002",
    category: "fire",
    subcategory: "response",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What should a professional driver do FIRST if their truck is on fire?",
    choices: [
      { key: "A", text: "Grab the fire extinguisher and fight the fire" },
      { key: "B", text: "Stay calm and signal to the driver moving to the shoulder of the road" },
      { key: "C", text: "Jump out of the moving truck immediately" },
      { key: "D", text: "Call 911 while continuing to drive" }
    ],
    answer: "B",
    explanation: "Most importantly, the driver should: (1) Stay calm and signal, moving to the shoulder of the road, (2) Come to a complete stop as soon as possible, (3) Shut off the engine and turn off the ignition, (4) Determine to leave or stay, (5) Grab the fire extinguisher and grab any emergency documents specific to the load, (6) Get out and away, ensure others are away from the burning vehicle, and call the fire department by dialing 911.",
    wrongExplanations: {
      "A": "Before grabbing the extinguisher, you must first safely stop the vehicle.",
      "C": "Jumping from a moving truck is extremely dangerous. You should first signal and pull over safely.",
      "D": "You should stop the vehicle first, then call 911. Driving while calling delays the response."
    },
    keyFact: "Fire response: (1) Stay calm & signal, (2) Stop, (3) Shut off engine, (4) Decide to leave/stay, (5) Grab extinguisher, (6) Get out & call 911"
  },
  {
    id: "fire-003",
    category: "fire",
    subcategory: "response",
    type: "fill",
    difficulty: 2,
    tags: ["procedure"],
    question: "List the six steps a professional driver should take if their truck is on fire.",
    answer: "Stay calm and signal, come to a complete stop, shut off engine, determine to leave or stay, grab extinguisher and documents, get out and away and call 911",
    acceptedAnswers: [
      "Stay calm and signal, come to a complete stop, shut off engine, determine to leave or stay, grab extinguisher and documents, get out and away and call 911",
      "Stay calm, stop, shut off engine, decide to leave or stay, grab extinguisher, get out and call 911",
      "Signal and pull over, stop, turn off ignition, decide to leave or stay, grab extinguisher, get away and call fire department"
    ],
    explanation: "The six steps are: (1) Stay calm and signal, moving to the shoulder, (2) Come to a complete stop as soon as possible, (3) Shut off the engine and turn off the ignition, (4) Determine to leave the vehicle or stay in the cab, (5) Grab the fire extinguisher and any emergency procedure documents specific to the load, (6) Get out and away, ensure others are away, and call the fire department by dialing 911.",
    keyFact: "6 fire steps: Calm/signal, Stop, Engine off, Decide leave/stay, Grab extinguisher, Get out/call 911"
  },
  // ── Steel-Belted Radials ──
  {
    id: "fire-004",
    category: "fire",
    subcategory: "tires",
    type: "tf",
    difficulty: 1,
    tags: ["safety"],
    question: "True or False: Steel-belted radial truck tires are not subject to tire fires.",
    answer: "false",
    explanation: "False. The use of steel cord in steel-belted radial truck tires does not make them fireproof. Steel-belted radial tires have no inner tube or flap, so it may take longer for a tire of this construction to reach its ignition temperature, but it can with time. Drivers must still check tire temperatures regularly.",
    keyFact: "Steel-belted radials are NOT fireproof; they can still catch fire, just may take longer"
  },
  {
    id: "fire-005",
    category: "fire",
    subcategory: "tires",
    type: "mc",
    difficulty: 1,
    tags: ["safety"],
    question: "How can tire fires be prevented?",
    choices: [
      { key: "A", text: "By regularly checking all tires to ensure they are properly inflated so that excessive internal heat will not build up" },
      { key: "B", text: "By driving faster to cool the tires with airflow" },
      { key: "C", text: "By pouring water on the tires every 100 miles" },
      { key: "D", text: "Tire fires cannot be prevented" }
    ],
    answer: "A",
    explanation: "Tire fires can be prevented by regularly checking all tires to ensure they are properly inflated so that excessive internal heat will not build up. Care should also be taken to avoid overloading and driving at excessive speed in hot weather.",
    wrongExplanations: {
      "B": "Driving faster actually generates more heat in the tires due to friction, increasing fire risk.",
      "C": "Pouring water on hot tires can cause thermal shock and is not a standard prevention method.",
      "D": "Tire fires can absolutely be prevented through proper inflation, avoiding overloading, and monitoring tire temperature."
    },
    keyFact: "Prevent tire fires: proper inflation, avoid overloading, avoid excessive speed in hot weather"
  },
  // ── Tire Temperature Check ──
  {
    id: "fire-006",
    category: "fire",
    subcategory: "tires",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "How should the driver check tire temperature?",
    choices: [
      { key: "A", text: "Place the back of the hand over and near the tire; if you feel strong heat, it is too hot to drive on" },
      { key: "B", text: "Touch the tire directly with the palm of the hand" },
      { key: "C", text: "Use a thermometer inserted into the tire" },
      { key: "D", text: "Kick the tire to check if it is hot" }
    ],
    answer: "A",
    explanation: "To check tire temperature, the driver should place the back of their hand over and near the tire. If you feel strong heat, it is too hot to drive on. Using the back of the hand prevents burns from direct contact with a hot surface.",
    wrongExplanations: {
      "B": "Touching the tire directly with your palm could cause burns. Use the back of your hand held near the tire.",
      "C": "Inserting a thermometer into a tire is impractical and not a standard method.",
      "D": "Kicking the tire does not effectively measure temperature and could injure your foot."
    },
    keyFact: "Check tire temp: back of hand near tire; strong heat = too hot to drive"
  },
  // ── FMCSA Extinguisher & Tire Fires ──
  {
    id: "fire-007",
    category: "fire",
    subcategory: "extinguishers",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "Will the FMCSA-required extinguisher extinguish a tire fire?",
    choices: [
      { key: "A", text: "Yes, it will fully extinguish any tire fire" },
      { key: "B", text: "No. It may briefly contain the surface flames, but the tire is likely to re-flash because of heat built up deep inside the tire carcass" },
      { key: "C", text: "It depends on the size of the tire" },
      { key: "D", text: "Only if the tire is flat" }
    ],
    answer: "B",
    explanation: "No. The FMCSA-required extinguisher may briefly contain the surface flames, but the tire is likely to re-flash because of the heat built up deep inside the tire carcass. A tire fire typically requires a larger water-based extinguisher or fire department response.",
    wrongExplanations: {
      "A": "The required extinguisher is generally insufficient for a tire fire due to deep heat in the tire carcass.",
      "C": "Regardless of tire size, the heat deep inside the tire carcass makes re-flash likely.",
      "D": "Whether the tire is flat does not determine the extinguisher's effectiveness against a tire fire."
    },
    keyFact: "FMCSA extinguisher may contain surface flames briefly, but tire will likely re-flash due to deep heat"
  },
  // ── Extinguisher Classes ──
  {
    id: "fire-008",
    category: "fire",
    subcategory: "extinguishers",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What type of fire does a Class A extinguisher fight?",
    choices: [
      { key: "A", text: "Fires in ordinary combustibles such as wood, cloth, paper" },
      { key: "B", text: "Fires in flammable liquids" },
      { key: "C", text: "Fires in energized electrical equipment" },
      { key: "D", text: "Fires in combustible metals" }
    ],
    answer: "A",
    explanation: "Class A extinguishers are for fires in ordinary combustibles such as wood, cloth, paper, etc. The classification system uses letters to indicate the type of fire each extinguisher is designed to fight.",
    wrongExplanations: {
      "B": "Flammable liquids are Class B fires.",
      "C": "Energized electrical equipment fires are Class C fires.",
      "D": "Combustible metals such as magnesium and aluminum are Class D fires."
    },
    keyFact: "Class A = Ordinary combustibles (wood, cloth, paper)"
  },
  {
    id: "fire-009",
    category: "fire",
    subcategory: "extinguishers",
    type: "fill",
    difficulty: 2,
    tags: ["regulation"],
    question: "What class of fire extinguisher is used for fires in flammable liquids?",
    answer: "Class B",
    acceptedAnswers: ["Class B", "B"],
    explanation: "Class B extinguishers are designed for fires in flammable liquids such as gasoline, oil, grease, and other petroleum-based products.",
    keyFact: "Class B = Flammable liquids (gasoline, oil, grease)"
  },
  {
    id: "fire-010",
    category: "fire",
    subcategory: "extinguishers",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What type of fire does a Class C extinguisher fight?",
    choices: [
      { key: "A", text: "Fires in ordinary combustibles" },
      { key: "B", text: "Fires in flammable liquids" },
      { key: "C", text: "Fires in energized electrical equipment" },
      { key: "D", text: "Fires in combustible metals" }
    ],
    answer: "C",
    explanation: "Class C extinguishers are for fires in energized electrical equipment. Using water on an electrical fire can result in electrocution, so a Class C extinguisher (which uses non-conductive agents) is essential.",
    wrongExplanations: {
      "A": "Ordinary combustibles are Class A fires.",
      "B": "Flammable liquids are Class B fires.",
      "D": "Combustible metals are Class D fires."
    },
    keyFact: "Class C = Energized electrical equipment"
  },
  {
    id: "fire-011",
    category: "fire",
    subcategory: "extinguishers",
    type: "fill",
    difficulty: 2,
    tags: ["regulation"],
    question: "What class of fire extinguisher is used for fires in combustible metals such as magnesium and aluminum?",
    answer: "Class D",
    acceptedAnswers: ["Class D", "D"],
    explanation: "Class D extinguishers are designed for fires in combustible metals such as magnesium and aluminum. These fires require special dry powder agents to extinguish.",
    keyFact: "Class D = Combustible metals (magnesium, aluminum)"
  },
  {
    id: "fire-012",
    category: "fire",
    subcategory: "extinguishers",
    type: "tf",
    difficulty: 1,
    tags: ["regulation"],
    question: "True or False: Any fire extinguisher can be used on any burning material.",
    answer: "false",
    explanation: "False. Basic classes of fire have been established, and the classes for which a particular extinguisher is suitable are indicated by a combination of letters and symbols: Class A (ordinary combustibles), Class B (flammable liquids), Class C (energized electrical equipment), and Class D (combustible metals). Using the wrong class can be ineffective or dangerous.",
    keyFact: "Extinguishers are class-specific: A=combustibles, B=liquids, C=electrical, D=metals"
  },
  // ── PASS Method ──
  {
    id: "fire-013",
    category: "fire",
    subcategory: "extinguishers",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What does the acronym PASS stand for when using a fire extinguisher?",
    choices: [
      { key: "A", text: "Pull, Aim, Squeeze, Sweep" },
      { key: "B", text: "Point, Activate, Spray, Secure" },
      { key: "C", text: "Prepare, Aim, Spray, Stop" },
      { key: "D", text: "Pull, Adjust, Shoot, Sweep" }
    ],
    answer: "A",
    explanation: "PASS stands for: P = Pull the locking mechanism that prevents accidental discharge, A = Aim the extinguisher at the base of the flames (at the burning material), S = Squeeze the handle to activate the extinguisher, S = Sweep the extinguisher back and forth across the fire.",
    wrongExplanations: {
      "B": "'Point, Activate, Spray, Secure' is not the correct PASS method.",
      "C": "'Prepare, Aim, Spray, Stop' is not the correct PASS method.",
      "D": "'Pull, Adjust, Shoot, Sweep' is not the correct PASS method."
    },
    keyFact: "PASS = Pull (pin), Aim (at base of flames), Squeeze (handle), Sweep (back and forth)"
  },
  {
    id: "fire-014",
    category: "fire",
    subcategory: "extinguishers",
    type: "fill",
    difficulty: 1,
    tags: ["procedure"],
    question: "When using the PASS method, where should you aim the fire extinguisher?",
    answer: "At the base of the flames",
    acceptedAnswers: ["At the base of the flames", "Base of the flames", "At the base of the fire", "Base of the fire", "At the base of the flames at the burning material"],
    explanation: "When using the PASS method, the 'A' stands for Aim. You should aim the extinguisher at the base of the flames (at the burning material), not at the top of the flames. This attacks the fuel source directly.",
    keyFact: "Aim at the BASE of the flames, not the top"
  },
  // ── Extinguisher Technique ──
  {
    id: "fire-015",
    category: "fire",
    subcategory: "extinguishers",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What is the most effective way to use a portable fire extinguisher?",
    choices: [
      { key: "A", text: "Stand as close as possible and spray at the top of the flames" },
      { key: "B", text: "Aim at the base of the flames and sweep the extinguisher back and forth, working with the wind at your back" },
      { key: "C", text: "Spray in a circular motion from a distance of at least 50 feet" },
      { key: "D", text: "Point the extinguisher upward to create a fire-retardant cloud" }
    ],
    answer: "B",
    explanation: "To extinguish a fire, aim the extinguishing agent at the base of the flames and the near edge of the fire. Move the extinguisher back and forth in a sweeping motion. Approach the fire working with the wind at your back. Do not approach closer than needed to avoid being trapped if the fire spreads.",
    wrongExplanations: {
      "A": "Spraying at the top of the flames is ineffective; you must target the base where the fuel is burning.",
      "C": "50 feet is too far away to be effective, and a circular motion is not the recommended technique.",
      "D": "Pointing upward does not address the fire at its source."
    },
    keyFact: "Aim at base of flames, sweep back and forth, wind at your back, don't get too close"
  },
  // ── Residue Removal ──
  {
    id: "fire-016",
    category: "fire",
    subcategory: "extinguishers",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "Why is it important to remove the residue of the extinguishing powder/agent once a fire is completely extinguished?",
    choices: [
      { key: "A", text: "For aesthetic purposes only" },
      { key: "B", text: "Because the residue is corrosive and if not removed properly, it can damage metal components in the area where the fire occurred" },
      { key: "C", text: "To recycle the extinguishing agent" },
      { key: "D", text: "It is not important to remove the residue" }
    ],
    answer: "B",
    explanation: "The extinguishing agent in many extinguishers is corrosive. If the residue is not removed properly, it can damage metal components in the area where the fire occurred. Prompt cleanup after the fire is extinguished protects the vehicle and equipment.",
    wrongExplanations: {
      "A": "This is not about aesthetics; the residue is corrosive and can damage equipment.",
      "C": "Extinguishing agent residue is not recycled; it must be cleaned up to prevent corrosion damage.",
      "D": "Leaving residue can cause significant corrosion damage to metal components."
    },
    keyFact: "Extinguishing residue is corrosive; remove promptly to prevent damage to metal components"
  },
  // ── Burning Liquid in Container ──
  {
    id: "fire-017",
    category: "fire",
    subcategory: "technique",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What can you do if the material your truck is carrying catches fire or is exhausted?",
    choices: [
      { key: "A", text: "Continue driving to the nearest fire station" },
      { key: "B", text: "A thousand gallons of dirt, sod, or snow on the fire may help to smother and control it" },
      { key: "C", text: "Open all windows to ventilate the truck" },
      { key: "D", text: "Nothing; wait for the fire department" }
    ],
    answer: "B",
    explanation: "A thousand gallons of dirt, sod, or snow on the fire may help to smother and control it. The goal is to cut off the flow of oxygen to the fire by smothering it.",
    wrongExplanations: {
      "A": "Continuing to drive with a fire is extremely dangerous and can spread the fire.",
      "C": "Opening windows provides more oxygen to the fire, making it worse.",
      "D": "While waiting for the fire department, you should attempt to control the fire if it can be done safely."
    },
    keyFact: "Smother truck fires with dirt, sod, or snow to cut off oxygen supply"
  },
  // ── Burning Liquid Extinguisher Technique ──
  {
    id: "fire-018",
    category: "fire",
    subcategory: "technique",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "How should an extinguisher be used to put out burning liquid in a small container?",
    choices: [
      { key: "A", text: "Spray directly into the center of the container" },
      { key: "B", text: "Aim at the internal side of the container so the extinguishing agent deflects down onto the burning surface" },
      { key: "C", text: "Pour the extinguishing agent on top from a height" },
      { key: "D", text: "Throw the extinguisher into the container" }
    ],
    answer: "B",
    explanation: "To reduce the chance of splashing and spreading the fire, the extinguisher should be aimed at the internal side of the container so that the extinguishing agent deflects down onto the burning surface. Placing a cover over the top of a small container may also smother the fire.",
    wrongExplanations: {
      "A": "Spraying directly into the center can splash burning liquid outside the container, spreading the fire.",
      "C": "Pouring from a height can splash and spread the burning liquid.",
      "D": "Throwing the extinguisher into the container would splash burning liquid and is extremely dangerous."
    },
    keyFact: "Aim extinguisher at inside wall of container to deflect agent down; avoid splashing"
  },
  // ── Electrical Fire Precautions ──
  {
    id: "fire-019",
    category: "fire",
    subcategory: "electrical",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What precautions can a driver take to minimize the risk of electrical fires?",
    choices: [
      { key: "A", text: "Ensure the battery is properly secured, look for charred insulation, report conditions to maintenance, and do not install personal electronic equipment" },
      { key: "B", text: "Disconnect the battery before every trip" },
      { key: "C", text: "Install additional electrical accessories for redundancy" },
      { key: "D", text: "Electrical fires cannot be prevented" }
    ],
    answer: "A",
    explanation: "To minimize electrical fire risk: (1) Ensure the battery is properly secured, (2) Look for worn, deteriorated, or charred insulation or wiring and report conditions to maintenance, (3) Do not bypass or interfere with fuses and circuit breakers, (4) Do not install personal electrical equipment such as CB radios, CD players, recorders, etc., except in accordance with company policy.",
    wrongExplanations: {
      "B": "Disconnecting the battery before every trip is impractical and not necessary for prevention.",
      "C": "Installing additional accessories without proper wiring increases electrical fire risk.",
      "D": "Electrical fires can absolutely be prevented through proper maintenance and inspection."
    },
    keyFact: "Prevent electrical fires: secure battery, check wiring, don't bypass fuses, no unauthorized electronics"
  },
  {
    id: "fire-020",
    category: "fire",
    subcategory: "electrical",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "In the event of an electrical fire, what must be done besides attempting to control the flames?",
    choices: [
      { key: "A", text: "The battery must be disconnected, if safe to do so, because it will continue to heat up the wiring and diminish the ability to control the fire" },
      { key: "B", text: "Pour water on the battery to cool it down" },
      { key: "C", text: "Rev the engine to charge the battery and reduce heat" },
      { key: "D", text: "Leave the battery connected to maintain lighting" }
    ],
    answer: "A",
    explanation: "The battery must be disconnected, if safe to do so. If it is not disconnected, the battery will continue to heat up the wiring and diminish the ability to successfully control or extinguish the fire.",
    wrongExplanations: {
      "B": "Pouring water on a battery during an electrical fire is extremely dangerous and could cause electrocution or explosion.",
      "C": "Revving the engine generates more electrical current, making the fire worse.",
      "D": "Leaving the battery connected allows it to continue feeding the fire through the wiring."
    },
    keyFact: "Electrical fire: disconnect battery if safe; connected battery continues heating wiring"
  },
  {
    id: "fire-021",
    category: "fire",
    subcategory: "electrical",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "When might disconnecting the battery NOT be enough to control an electrical fire?",
    choices: [
      { key: "A", text: "When the fire is in the engine compartment" },
      { key: "B", text: "When a severe crash causes the vehicle's metal parts to puncture the battery, allowing residual current to flow even after cables are disconnected" },
      { key: "C", text: "When the truck is parked" },
      { key: "D", text: "Disconnecting the battery is always sufficient" }
    ],
    answer: "B",
    explanation: "In a severe crash, the vehicle's metal parts might puncture the battery and allow a flow of current even after the battery cables have been disconnected. This can permit the development of sufficient heat to cause a fire even after disconnection.",
    wrongExplanations: {
      "A": "Engine compartment fires do not inherently prevent battery disconnection from being effective.",
      "C": "Whether the truck is parked is not the factor that makes battery disconnection insufficient.",
      "D": "In crash scenarios, disconnecting may not be enough due to punctured battery casing."
    },
    keyFact: "Crash can puncture battery, allowing current flow even after cables disconnected"
  },
  // ── Combination Unit Fire ──
  {
    id: "fire-022",
    category: "fire",
    subcategory: "response",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "If you are driving a combination unit and a fire occurs, what additional step should be taken to minimize the severity of the situation?",
    choices: [
      { key: "A", text: "Speed up to blow out the fire with wind" },
      { key: "B", text: "Disconnect the power unit from the semi-trailer: lower the landing gear, drive the power unit clear of the fire and its fuel supply" },
      { key: "C", text: "Jackknife the trailer to contain the fire" },
      { key: "D", text: "Leave the combination connected and drive to the nearest fire station" }
    ],
    answer: "B",
    explanation: "If it can be done safely, a driver of a combination vehicle should disconnect the power unit by lowering the landing gear of the semi-trailer, then drive the power unit clear of the fire. This action removes the power unit and its fuel supply from the danger zone.",
    wrongExplanations: {
      "A": "Speeding up feeds oxygen to the fire and spreads it further.",
      "C": "Jackknifing does not contain the fire and creates additional hazards.",
      "D": "Driving a burning combination to a fire station exposes others to danger and delays response."
    },
    keyFact: "Combination unit fire: disconnect power unit, lower landing gear, drive power unit away from fire/fuel"
  },
  // ── Self-Service Fuel Pump Safety ──
  {
    id: "fire-023",
    category: "fire",
    subcategory: "fueling",
    type: "mc",
    difficulty: 1,
    tags: ["procedure", "safety"],
    question: "Upon arrival at a self-service fueling facility, what safety feature should a driver look for?",
    choices: [
      { key: "A", text: "The nearest coffee shop" },
      { key: "B", text: "The location of the emergency shut-off for the fuel pumps" },
      { key: "C", text: "The price of fuel" },
      { key: "D", text: "The number of available pumps" }
    ],
    answer: "B",
    explanation: "Before fueling, the driver should locate the emergency shut-off for the pumps. In case of a fire or fuel spill, knowing where the emergency shut-off is located can prevent a catastrophic situation.",
    wrongExplanations: {
      "A": "Finding a coffee shop is not a safety concern during fueling.",
      "C": "While important for business, fuel price is not a safety feature.",
      "D": "The number of available pumps is not a safety concern."
    },
    keyFact: "Before fueling: locate the emergency shut-off for the pumps"
  },
  {
    id: "fire-024",
    category: "fire",
    subcategory: "fueling",
    type: "mc",
    difficulty: 1,
    tags: ["procedure", "safety"],
    question: "What five fire safety precautions must be observed when refueling a truck?",
    choices: [
      { key: "A", text: "Turn off the engine, ensure no one is smoking, no open flames/lights, maintain metal-to-metal nozzle contact, and keep the nozzle in contact with the fuel tank" },
      { key: "B", text: "Keep the engine running, smoke only downwind, use a flashlight, stand 10 feet away, and fill the tank to overflowing" },
      { key: "C", text: "Turn off the engine, use a cell phone, keep windows open, use a lighter for visibility, and fill quickly" },
      { key: "D", text: "Leave the engine idle, ensure passengers exit, lock the cab, check tire pressure, and fill slowly" }
    ],
    answer: "A",
    explanation: "Five fire safety precautions when refueling: (1) Turn off the truck engine and ensure no one is smoking in the vicinity, (2) Ensure there are no open flames or lights nearby, (3) Maintain metal-to-metal contact between the nozzle and fuel tank to prevent static sparks, (4) A driver should maintain contact between the nozzle and the fuel tank to prevent sparks, (5) Keep the nozzle in contact to prevent static discharge.",
    wrongExplanations: {
      "B": "The engine should be off, smoking is never allowed near fuel, and overfilling is dangerous.",
      "C": "Cell phones near fuel pumps are controversial, lighters are extremely dangerous, and these are not the correct precautions.",
      "D": "The engine should be completely off, not idling, when refueling."
    },
    keyFact: "Refueling safety: engine off, no smoking, no open flames, metal-to-metal contact, nozzle in tank"
  },
  {
    id: "fire-025",
    category: "fire",
    subcategory: "fueling",
    type: "mc",
    difficulty: 2,
    tags: ["procedure", "safety"],
    question: "What precaution should drivers take when using a self-service pump to fuel their vehicle?",
    choices: [
      { key: "A", text: "Drivers should point the self-service fuel pump nozzle away from themselves and others" },
      { key: "B", text: "Drivers should check fuel quality by smelling it" },
      { key: "C", text: "Drivers should fill the tank while seated in the cab" },
      { key: "D", text: "No special precautions are needed at self-service pumps" }
    ],
    answer: "A",
    explanation: "Drivers should point the self-service fuel pump nozzle away from themselves and others. By following that practice, drivers can avoid getting fuel on anyone if there is fuel residue in the nozzle or accidental discharge before the nozzle is inserted into the vehicle's fuel tank.",
    wrongExplanations: {
      "B": "Smelling fuel is not a safe or effective quality check and exposes you to harmful vapors.",
      "C": "Filling from inside the cab is unsafe; you should be standing outside monitoring the fill.",
      "D": "Self-service pumps require the same fire safety precautions as any fueling operation."
    },
    keyFact: "Point fuel nozzle away from yourself and others to avoid accidental fuel spray"
  },
  {
    id: "fire-026",
    category: "fire",
    subcategory: "fueling",
    type: "mc",
    difficulty: 2,
    tags: ["procedure", "safety"],
    question: "What should a driver do if the self-closing feature of a fuel nozzle fails to operate and they cannot shut off the flow of fuel?",
    choices: [
      { key: "A", text: "Pull the nozzle out of the tank and run" },
      { key: "B", text: "First shut off the flow at the control on the pump itself; if that fails, activate the emergency pump shut-off at the facility" },
      { key: "C", text: "Call the fuel company's customer service number" },
      { key: "D", text: "Keep pumping until the tank overflows and then shut off" }
    ],
    answer: "B",
    explanation: "If the self-closing feature fails, the driver can first try to shut off the flow of fuel at the control on the pump itself. If that does not cut off the flow, the driver can activate the emergency pump shut-off at the facility.",
    wrongExplanations: {
      "A": "Pulling the nozzle out would spray fuel everywhere, creating a major fire and environmental hazard.",
      "C": "Calling customer service is far too slow in an emergency; use the pump controls or emergency shut-off.",
      "D": "Allowing the tank to overflow creates a fire hazard and environmental contamination."
    },
    keyFact: "Nozzle fails: first try pump control, then activate facility's emergency pump shut-off"
  },
  {
    id: "fire-027",
    category: "fire",
    subcategory: "fueling",
    type: "tf",
    difficulty: 1,
    tags: ["procedure", "safety"],
    question: "True or False: A driver should never leave the fuel tank cap off or any other object to block the nozzle opening of a self-service pump to fuel a vehicle.",
    answer: "true",
    explanation: "True. A driver should never leave the fuel tank cap off or use any other object to block the nozzle opening. While fuel nozzles are equipped with automatic shut-off, these devices can malfunction and allow fuel to overflow, creating a fire and environmental hazard.",
    keyFact: "Never block nozzle open or leave tank cap off; auto shut-off can malfunction causing overflow"
  },
  // ── Diesel Fire Prevention ──
  {
    id: "fire-028",
    category: "fire",
    subcategory: "fueling",
    type: "mc",
    difficulty: 1,
    tags: ["procedure", "safety"],
    question: "What precautions should be observed to prevent fire when handling diesel fuel?",
    choices: [
      { key: "A", text: "The same precautions as when handling gasoline: no smoking, no open flames or lights, and metal-to-metal contact between nozzle and tank" },
      { key: "B", text: "No precautions are needed because diesel is not flammable" },
      { key: "C", text: "Only avoid open flames; smoking near diesel is safe" },
      { key: "D", text: "Diesel only requires precautions in cold weather" }
    ],
    answer: "A",
    explanation: "The same precautions taken to prevent fire when handling gasoline should be taken when handling diesel. There should be no smoking, open lights, or flames in the vicinity. Metal-to-metal contact should be maintained between the nozzle and the tank to prevent static sparks.",
    wrongExplanations: {
      "B": "Diesel is combustible and can ignite, especially when atomized or heated. Fire precautions are essential.",
      "C": "Smoking near any fuel, including diesel, is dangerous and prohibited.",
      "D": "Fire precautions for diesel are necessary in all weather conditions."
    },
    keyFact: "Diesel requires same fire precautions as gasoline: no smoking, no flames, metal-to-metal contact"
  },
  // ── 25-Foot Smoking Prohibition ──
  {
    id: "fire-029",
    category: "fire",
    subcategory: "scene-safety",
    type: "fill",
    difficulty: 1,
    tags: ["procedure", "safety", "numbers"],
    question: "At the scene of an accident, how far from the accident should there be no smoking, especially if fuel is leaking?",
    answer: "No one should be smoking in the vicinity",
    acceptedAnswers: [
      "No one should be smoking in the vicinity",
      "No smoking in the vicinity",
      "No smoking near the accident",
      "No smoking"
    ],
    explanation: "At an accident scene, no one should be smoking in the vicinity, especially if there is leaking fuel. Any spark from a cigarette could ignite fuel vapors and cause an explosion.",
    keyFact: "No smoking in the vicinity of an accident, especially with leaking fuel"
  },
  // ── Hotel/Motel Fire Escape ──
  {
    id: "fire-030",
    category: "fire",
    subcategory: "hotel-safety",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "If a driver is taking off-duty time in a hotel or motel, what should the driver do to be protected in the event of a building fire?",
    choices: [
      { key: "A", text: "Sleep with headphones in to avoid being woken up by alarms" },
      { key: "B", text: "Locate the two closest exits and any fire alarms, count the number of doors to the exits, and study emergency evacuation procedures" },
      { key: "C", text: "Request a room on the highest floor" },
      { key: "D", text: "Keep all windows and doors sealed" }
    ],
    answer: "B",
    explanation: "Upon arrival, the driver should locate the two closest exits and any fire alarms that may be installed. The driver should count the number of doors from the driver's room to each exit to help find it in darkness or smoky conditions. Study the emergency evacuation procedures as posted.",
    wrongExplanations: {
      "A": "Wearing headphones could prevent you from hearing a fire alarm.",
      "C": "Higher floors make fire escape more difficult.",
      "D": "Keeping doors sealed is not the priority; knowing your escape routes is essential."
    },
    keyFact: "Hotel fire safety: locate 2 closest exits, count doors to exits, study evacuation procedures"
  },
  {
    id: "fire-031",
    category: "fire",
    subcategory: "hotel-safety",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What should a driver do if a fire breaks out in their hotel or motel room?",
    choices: [
      { key: "A", text: "Open all windows to ventilate the room" },
      { key: "B", text: "Get out as quickly as possible, closing the door to minimize drafts that will spread the fire, and notify the front desk and fire department" },
      { key: "C", text: "Gather all personal belongings before leaving" },
      { key: "D", text: "Use the elevator for the fastest exit" }
    ],
    answer: "B",
    explanation: "The driver should get out as quickly as possible, closing the door behind them to minimize the creation of a draft which will spread the fire. The driver should notify building management and make sure the fire department is summoned.",
    wrongExplanations: {
      "A": "Opening windows feeds oxygen to the fire and helps it spread.",
      "C": "Gathering belongings wastes critical escape time. Life safety is the priority.",
      "D": "Elevators should never be used during a fire; they may stop at the fire floor or lose power."
    },
    keyFact: "Hotel room fire: get out fast, close door behind you, notify management and fire department"
  },
  {
    id: "fire-032",
    category: "fire",
    subcategory: "hotel-safety",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "If a driver is awakened by the smell of smoke coming from outside their hotel room, what precautions should be taken before attempting to leave?",
    choices: [
      { key: "A", text: "Immediately open the door wide and run into the hallway" },
      { key: "B", text: "Carefully determine if the door is hot; if the door surface is hot, stay in the room, call the front desk and fire department, stuff wet towels under the door, and go to the window" },
      { key: "C", text: "Jump from the window immediately" },
      { key: "D", text: "Go back to sleep; the hotel will handle it" }
    ],
    answer: "B",
    explanation: "The driver should carefully determine if the door is hot. If the door surface is hot, do not open it. Stay in the room, call the front desk and the fire department to let them know your location. Stuff wet towels under the door, and turn off fans and air conditioning. If a safe escape is not possible from the window, stay low and wait for rescue.",
    wrongExplanations: {
      "A": "Opening a hot door could release a blast of superheated air and flames into the room (backdraft).",
      "C": "Jumping from a window should only be a last resort if rescue is not possible.",
      "D": "Ignoring smoke is extremely dangerous and could be fatal."
    },
    keyFact: "Smoke outside room: check door heat, if hot stay inside, call for help, wet towels under door, go to window"
  },
  // ── Stop Drop Roll ──
  {
    id: "fire-033",
    category: "fire",
    subcategory: "personal-safety",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "If your clothing is on fire, what should you do?",
    choices: [
      { key: "A", text: "Run to find water" },
      { key: "B", text: "Stop, Drop, and Roll: stop where you are, drop to the ground, cover your face with hands, and roll over until the fire is out" },
      { key: "C", text: "Fan the flames with your hands" },
      { key: "D", text: "Remove all clothing as quickly as possible" }
    ],
    answer: "B",
    explanation: "If clothing is on fire: Stop, Drop, and Roll. Stop where you are (running fans the flames), drop to the ground, cover your face with hands and roll over and over slowly until the fire is out. Every effort should be made to extinguish the fire from the head to the toe. If a blanket, coat, or rug is available, roll yourself or the individual in it to cut off oxygen.",
    wrongExplanations: {
      "A": "Running fans the flames and makes the fire worse. Stop, Drop, and Roll is the correct procedure.",
      "C": "Fanning the flames provides oxygen and makes the fire worse.",
      "D": "While removing burning clothing may help, Stop, Drop, and Roll is the immediate and recommended action."
    },
    keyFact: "Clothing on fire: Stop, Drop, and Roll; cover face; roll slowly; use blanket/coat to smother"
  },
  // ── Smoke-Filled Area ──
  {
    id: "fire-034",
    category: "fire",
    subcategory: "escape",
    type: "fill",
    difficulty: 1,
    tags: ["procedure"],
    question: "What is the safest way to get through a smoke-filled area?",
    answer: "Crawl on hands and knees to take advantage of cleaner air close to the floor",
    acceptedAnswers: [
      "Crawl on hands and knees to take advantage of cleaner air close to the floor",
      "Crawl on hands and knees",
      "Crawl on the floor",
      "Stay low and crawl",
      "Get low and crawl"
    ],
    explanation: "To get through a smoke-filled area, crawl on hands and knees to take advantage of the cleaner air that is close to the floor. Smoke and heated gases rise, so the air near the floor is cooler and more breathable.",
    keyFact: "Smoke-filled area: crawl on hands and knees; cleaner air is close to the floor"
  },
  // ── Exhaust Fire Hazard ──
  {
    id: "fire-035",
    category: "fire",
    subcategory: "vehicle-hazards",
    type: "mc",
    difficulty: 2,
    tags: ["safety"],
    question: "When might a truck's exhaust system create a fire hazard?",
    choices: [
      { key: "A", text: "Only when the truck is parked" },
      { key: "B", text: "When there are leaks, the piping is routed too close to fuel lines or wiring, or near combustible material such as wood" },
      { key: "C", text: "Only during cold weather" },
      { key: "D", text: "The exhaust system never creates a fire hazard" }
    ],
    answer: "B",
    explanation: "A truck's exhaust system might create a fire hazard if there are leaks, or if the piping is routed too close to fuel lines, wiring, or combustible material such as wood. Regular inspection of the exhaust system is essential.",
    wrongExplanations: {
      "A": "Exhaust fire hazards can occur while driving or parked.",
      "C": "Exhaust fire hazards are not limited to cold weather.",
      "D": "The exhaust system can absolutely create fire hazards if not properly maintained."
    },
    keyFact: "Exhaust fire hazard: leaks, piping too close to fuel lines, wiring, or combustible material"
  },
  // ── Air Suspension Fire Hazard ──
  {
    id: "fire-036",
    category: "fire",
    subcategory: "vehicle-hazards",
    type: "mc",
    difficulty: 2,
    tags: ["safety"],
    question: "What potential hazard exists if a fire occurs on a vehicle equipped with an air suspension?",
    choices: [
      { key: "A", text: "The air suspension will automatically extinguish the fire" },
      { key: "B", text: "Air bags are made of material similar to tires and can burn through; if so, the bag can drop down and injure anyone underneath" },
      { key: "C", text: "The air suspension makes the vehicle immune to fires" },
      { key: "D", text: "The air bags will explode and propel the vehicle forward" }
    ],
    answer: "B",
    explanation: "Air bags on vehicles with air suspension are made of material similar to tires and can burn through. If this happens, the bag can drop down and injure any person who may get trapped underneath or between the bag and other parts of the vehicle.",
    wrongExplanations: {
      "A": "Air suspension has no fire extinguishing capability.",
      "C": "Air suspension does not provide fire immunity; the bags themselves are combustible.",
      "D": "The bags do not explode and propel the vehicle; they can collapse downward when burned through."
    },
    keyFact: "Air suspension bags are combustible like tires; can burn through and collapse on anyone underneath"
  },
  // ── Refrigerant Toxic Fumes ──
  {
    id: "fire-037",
    category: "fire",
    subcategory: "vehicle-hazards",
    type: "mc",
    difficulty: 2,
    tags: ["safety"],
    question: "What special challenges may exist if a vehicle with air conditioning or refrigeration equipment is involved in a fire?",
    choices: [
      { key: "A", text: "The refrigerant makes the fire burn cooler" },
      { key: "B", text: "When exposed to fire, all refrigerants decompose and create toxic fumes" },
      { key: "C", text: "Air conditioning systems are completely fireproof" },
      { key: "D", text: "The refrigerant will automatically extinguish the fire" }
    ],
    answer: "B",
    explanation: "When exposed to fire, all refrigerants decompose and create toxic fumes. This adds a serious health hazard to any vehicle fire involving air conditioning or refrigeration equipment.",
    wrongExplanations: {
      "A": "Refrigerants do not cool the fire; they create toxic fumes when exposed to heat.",
      "C": "Air conditioning systems are not fireproof; their refrigerants become toxic in a fire.",
      "D": "Refrigerants do not extinguish fires; they create a toxic fume hazard."
    },
    keyFact: "ALL refrigerants decompose in fire and create toxic fumes"
  },
  // ── Basic Principles of Extinguishing ──
  {
    id: "fire-038",
    category: "fire",
    subcategory: "basics",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What are the two basic ways to extinguish a fire?",
    choices: [
      { key: "A", text: "By cooling the burning material below its ignition temperature, or by smothering it by cutting off the flow of oxygen" },
      { key: "B", text: "By blowing on it or by covering it with paper" },
      { key: "C", text: "By adding fuel to burn it out faster, or by spraying water on it" },
      { key: "D", text: "By waiting for it to burn out, or by driving away from it" }
    ],
    answer: "A",
    explanation: "Fires are extinguished in one of two ways: (1) By cooling the burning material below its ignition temperature, or (2) By smothering the burning material by cutting off the flow of oxygen to the fire and interrupting the ongoing chemical reaction. Fire extinguishers used on trucks are used to smother small fires.",
    wrongExplanations: {
      "B": "Blowing on a fire can feed it oxygen and make it worse. Paper is a combustible and would fuel the fire.",
      "C": "Adding fuel makes a fire worse, not better.",
      "D": "Waiting and driving away are not firefighting methods and allow the fire to grow."
    },
    keyFact: "Two ways to extinguish: (1) Cool below ignition temp, (2) Smother by cutting off oxygen"
  },
  // ── Accident Scene Fire Prevention ──
  {
    id: "fire-039",
    category: "fire",
    subcategory: "scene-safety",
    type: "tf",
    difficulty: 1,
    tags: ["procedure", "safety"],
    question: "True or False: If there is evidence of leaking fuel at an accident scene, flares should NOT be used to direct traffic or protect the scene.",
    answer: "true",
    explanation: "True. If there is evidence of leaking fuel, then flares should NOT be used to direct traffic or protect the scene. Flares produce open flame that could ignite fuel vapors and cause an explosion or fire.",
    keyFact: "Leaking fuel at accident: do NOT use flares; they could ignite fuel vapors"
  }
];
