const TDC = window.TDC || {};
window.TDC = TDC;

TDC.QuestionsHazmat = [
  // ===== HME ENDORSEMENT REQUIREMENTS =====
  {
    id: "hazmat-001",
    category: "hazmat",
    subcategory: "endorsement",
    type: "mc",
    difficulty: 2,
    tags: ["regulation", "procedure"],
    question: "What must a commercial vehicle driver provide to receive a Hazardous Materials Endorsement (HME)?",
    choices: [
      { key: "A", text: "Only a valid CDL and proof of insurance" },
      { key: "B", text: "Name, SSN, date of birth, citizenship, fingerprints, current and previous addresses for 7 years, and other personal information on the HME application" },
      { key: "C", text: "A letter from their employer and a medical certificate" },
      { key: "D", text: "Only a background check and written test score" }
    ],
    answer: "B",
    explanation: "To receive a Hazardous Materials Endorsement (HME), a driver must provide: name, applicable suffix, and any other name used previously; current residential address and previous residential address(es) for the preceding 7 years; date of birth; citizenship; Social Security Number (SSN); height, weight, hair and eye color; immigration status and date of naturalization if a naturalized citizen; gender; alien registration number if applicable; city, state and country of birth; current employer information; and state of application, Commercial Driver's License (CDL) number, and type of endorsement held.",
    wrongExplanations: {
      "A": "A valid CDL and insurance alone are not sufficient. The HME application requires extensive personal information including fingerprints and a Transportation Security Administration (TSA) background check.",
      "C": "While employment information is part of the application, a simple employer letter is not sufficient. The application requires detailed personal data and a TSA background check.",
      "D": "A background check is part of the process, but the application itself requires extensive personal information beyond just the check and test."
    },
    keyFact: "HME requires: name, SSN, DOB, citizenship, fingerprints, 7 years of addresses, and a TSA background check."
  },
  {
    id: "hazmat-002",
    category: "hazmat",
    subcategory: "endorsement",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "What certifications must accompany the HME application?",
    choices: [
      { key: "A", text: "Only a medical examiner's certificate" },
      { key: "B", text: "Certification regarding criminal history, a continuing obligation to disclose, and a Privacy Act Notice" },
      { key: "C", text: "A hazmat training completion certificate only" },
      { key: "D", text: "An employer verification form and insurance certificate" }
    ],
    answer: "B",
    explanation: "The Hazardous Materials Endorsement (HME) application must include: a certification (signed and dated) attesting to whether the driver has been wanted or under indictment in any jurisdiction for any disqualifying crime in the last 7 years; a statement that the driver has a continuing obligation to disclose to the state within 24 hours if convicted of a disqualifying crime or found not guilty by reason of insanity; a Privacy Act Notice (certified and dated); a statement certifying the truth of the information provided (dated); and a statement acknowledging that the Transportation Security Administration (TSA) may notify the driver's employer and provide threat assessment information to other law enforcement agencies per 49 Code of Federal Regulations (CFR) Section 1572.9.",
    wrongExplanations: {
      "A": "A medical examiner's certificate is required for the CDL itself but is not specifically part of the HME certification requirements.",
      "C": "While hazmat training is required for drivers, the HME application specifically requires certifications related to criminal history, disclosure obligations, and privacy.",
      "D": "Employer verification and insurance certificates are not part of the required HME certifications. The certifications relate to criminal history disclosure and privacy."
    },
    keyFact: "HME certifications: criminal history attestation, 24-hour disclosure obligation, Privacy Act Notice, truth statement, and TSA notification acknowledgment."
  },
  {
    id: "hazmat-003",
    category: "hazmat",
    subcategory: "endorsement",
    type: "fill",
    difficulty: 3,
    tags: ["regulation", "numbers"],
    question: "There are ____ categories of individuals who must surrender their Hazardous Materials Endorsement (HME).",
    acceptedAnswers: ["6", "six", "Six"],
    answer: "6",
    explanation: "There are 6 categories of individuals who must surrender their Hazardous Materials Endorsement (HME): (1) an alien (unless a lawful permanent resident); (2) an individual who has renounced their U.S. citizenship; (3) an individual who is wanted or under indictment for certain felonies; (4) an individual convicted in civilian or military court for certain felonies; (5) an individual who has been found to be mentally defective or committed to a mental institution; and (6) an individual who is considered to pose a security threat based on a review of various databases.",
    keyFact: "6 categories must surrender HME: aliens, renounced citizens, wanted/indicted, convicted felons, mentally defective, and security threats."
  },
  {
    id: "hazmat-004",
    category: "hazmat",
    subcategory: "endorsement",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "An individual who has renounced their United States citizenship must surrender their Hazardous Materials Endorsement (HME).",
    answer: true,
    explanation: "This is true. An individual who has renounced their U.S. citizenship is one of the 6 categories of people who must surrender their Hazardous Materials Endorsement (HME). The other categories include aliens (unless lawful permanent residents), individuals wanted or under indictment for certain felonies, individuals convicted in civilian or military court, those found mentally defective or committed to a mental institution, and those considered a security threat.",
    keyFact: "Renouncing U.S. citizenship = must surrender HME."
  },

  // ===== CARGO TANK MARKINGS: V, I, P, L, K, T =====
  {
    id: "hazmat-005",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "mc",
    difficulty: 3,
    tags: ["procedure", "numbers"],
    question: "What do the markings V, I, P, L, K, and T stand for on a cargo tank?",
    choices: [
      { key: "A", text: "V=volume, I=inspection, P=pressure, L=load, K=key, T=test" },
      { key: "B", text: "V=visual, I=internal visual, P=pressure, L=lining, K=leakage, T=thickness" },
      { key: "C", text: "V=valve, I=interior, P=pump, L=level, K=kinetic, T=temperature" },
      { key: "D", text: "V=vent, I=insulation, P=placard, L=liquid, K=kerosene, T=transport" }
    ],
    answer: "B",
    explanation: "The markings V, I, P, L, K, and T indicate what tests and inspections must be performed on a cargo tank. V = visual test; I = internal visual test; P = pressure test; L = lining test; K = leakage test; T = thickness test. The markings will indicate the date that the test or inspection was performed. All tanks will not necessarily require all tests and inspections. If Environmental Protection Agency (EPA) Method 27 is used for leakage testing, the tank must be marked K-EPA27.",
    wrongExplanations: {
      "A": "These are incorrect meanings. V stands for visual (not volume), I for internal visual (not inspection), L for lining (not load), K for leakage (not key), and T for thickness (not test).",
      "C": "These are all incorrect. The correct meanings are: V=visual, I=internal visual, P=pressure, L=lining, K=leakage, T=thickness.",
      "D": "None of these are correct. The markings represent specific tests: V=visual, I=internal visual, P=pressure, L=lining, K=leakage, T=thickness."
    },
    keyFact: "V-I-P-L-K-T: Visual, Internal visual, Pressure, Lining, leaKage, Thickness."
  },
  {
    id: "hazmat-006",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "fill",
    difficulty: 3,
    tags: ["procedure"],
    question: "If EPA Method 27 is used for leakage testing on a cargo tank, the tank must be marked K-____.",
    acceptedAnswers: ["EPA27", "K-EPA27", "epa27"],
    answer: "EPA27",
    explanation: "If Environmental Protection Agency (EPA) Method 27 is used for leakage testing, the cargo tank must be marked K-EPA27. The K marking indicates leakage testing was performed, and the EPA27 suffix specifies the particular test method used.",
    keyFact: "K-EPA27 = leakage test using EPA Method 27."
  },

  // ===== DRIVER CHECKS AND RESPONSIBILITIES =====
  {
    id: "hazmat-007",
    category: "hazmat",
    subcategory: "driver-duties",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What special check must be made by the driver hauling hazardous materials?",
    choices: [
      { key: "A", text: "Only check tire pressure before departure" },
      { key: "B", text: "Check shipping papers to determine what hazard class(es) are in the load, determine whether placards are needed, check that proper placards are displayed on all four sides, and segregate incompatible HM" },
      { key: "C", text: "Only verify the truck has a fire extinguisher" },
      { key: "D", text: "Only check that the load is under the weight limit" }
    ],
    answer: "B",
    explanation: "By law, the shipper is required to check shipping papers for the Hazardous Materials (HM) to ascertain what class(es) are in the load to determine whether or not placards are needed. However, drivers should also check shipping papers to determine whether or not the vehicle displays the proper placards on the front, rear, and both sides. The driver must also segregate incompatible types of HM from each other inside the trailer.",
    wrongExplanations: {
      "A": "While tire checks are part of general pre-trip inspection, HM drivers have specific additional responsibilities regarding shipping papers, placards, and cargo segregation.",
      "C": "A fire extinguisher is important but the driver's special HM responsibilities are much broader, including verifying shipping papers, placards, and proper cargo segregation.",
      "D": "Weight limits matter, but the special HM check involves verifying hazard classes on shipping papers, ensuring proper placarding on all four sides, and segregating incompatible materials."
    },
    keyFact: "HM drivers must: check shipping papers for hazard classes, verify placards on all 4 sides, and segregate incompatible materials."
  },

  // ===== NITROGEN BLANKET =====
  {
    id: "hazmat-008",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "mc",
    difficulty: 3,
    tags: ["procedure"],
    question: "What is the purpose of a nitrogen blanket in a trailer?",
    choices: [
      { key: "A", text: "To keep the cargo cold during transport" },
      { key: "B", text: "To provide a cushioning, colorless gas that does not support combustion, used to prevent contamination and protect flammable or low flash point products" },
      { key: "C", text: "To increase the pressure inside the tank for faster unloading" },
      { key: "D", text: "To test for leaks in the tank structure" }
    ],
    answer: "B",
    explanation: "A nitrogen blanket is a cushioning, colorless gas that does not support combustion. Applying a cover of nitrogen gas (nitrogen blanket) is an ideal method for pressure unloading/loading flammable or combustible materials, for pressuring unloading flammable materials with a low flash point. Nitrogen gas is also used to prevent contamination of product from air or moisture.",
    wrongExplanations: {
      "A": "Nitrogen blankets are not used for temperature control. They serve to prevent combustion and contamination during loading/unloading of flammable materials.",
      "C": "While nitrogen can be used for pressure unloading, its primary purpose is safety -- preventing combustion and contamination -- not simply speeding up the unloading process.",
      "D": "Nitrogen blankets are not used for leak testing. They are used to provide an inert atmosphere to prevent combustion when handling flammable materials."
    },
    keyFact: "Nitrogen blanket = inert gas cushion that prevents combustion and contamination during flammable material handling."
  },
  {
    id: "hazmat-009",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "tf",
    difficulty: 3,
    tags: ["procedure"],
    question: "Nitrogen used in a nitrogen blanket can be detected by smell if it reaches a dangerous concentration.",
    answer: false,
    explanation: "This is false. Nitrogen cannot be seen or smelled. It can only be detected by testing. Nitrogen displaces oxygen; therefore, brief exposure to a concentrated atmosphere of nitrogen can render someone unconscious almost instantly, making it extremely dangerous.",
    keyFact: "Nitrogen: cannot be seen or smelled -- only detected by testing. Displaces oxygen instantly."
  },

  // ===== GROUNDING AND BONDING =====
  {
    id: "hazmat-010",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "mc",
    difficulty: 2,
    tags: ["procedure", "regulation"],
    question: "What is required with respect to 'bonding' tank trucks?",
    choices: [
      { key: "A", text: "A drag chain must be attached to the rear of the vehicle" },
      { key: "B", text: "An electrical bond wire must be used during filling/loading to effectively ground the vehicle and prevent the build-up of static charges" },
      { key: "C", text: "The tank must be painted with anti-static paint" },
      { key: "D", text: "Rubber tires must be specially grounded with copper wire" }
    ],
    answer: "B",
    explanation: "The Hazardous Materials (HM) Regulations require that an electrical bond wire must be used during the filling/loading of a tank truck because the bond wire effectively grounds the vehicle during filling to prevent the build-up of static charges. A 'drag chain' is NOT accepted as an effective grounding device for this purpose.",
    wrongExplanations: {
      "A": "A drag chain is specifically NOT accepted as an effective grounding device. An electrical bond wire is required for proper grounding during loading.",
      "C": "Anti-static paint is not the required method. An electrical bond wire must physically connect the tank truck to the loading facility to prevent static charge buildup.",
      "D": "Copper wire on tires is not the required method. The Hazardous Materials Regulations (HMR) specifically require an electrical bond wire during filling/loading operations."
    },
    keyFact: "Bond wire required for loading -- drag chain is NOT acceptable for grounding."
  },
  {
    id: "hazmat-011",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "A drag chain is an acceptable grounding device for tank trucks during loading of flammable materials.",
    answer: false,
    explanation: "This is false. A 'drag chain' is NOT accepted as an effective grounding device for tank trucks. The Hazardous Materials (HM) Regulations require that an electrical bond wire must be used during the filling/loading of a tank truck to effectively ground the vehicle and prevent the build-up of static charges.",
    keyFact: "Drag chain = NOT acceptable. Bond wire = required."
  },

  // ===== FUSIBLE LINKS =====
  {
    id: "hazmat-012",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "mc",
    difficulty: 3,
    tags: ["numbers", "procedure"],
    question: "What is the purpose of 'fusible links' and at what temperature do they melt?",
    choices: [
      { key: "A", text: "They connect trailer sections and melt at 200°C (392°F)" },
      { key: "B", text: "They are heat-activated devices installed on cable lines or tubing that melt at 127°C (261°F) to trigger internal valves to close automatically in a fire" },
      { key: "C", text: "They are pressure relief devices that activate at 100°C (212°F)" },
      { key: "D", text: "They secure the manhole cover and melt at 150°C (302°F)" }
    ],
    answer: "B",
    explanation: "Fusible links or elements are heat-activated devices installed on the cable lines, or tubing (in the case of hydraulically or air-controlled internal valves) of tank trailers. They are designed to melt at a temperature no greater than 127 degrees Celsius (261 degrees Fahrenheit) in case of fire, and when melted, trigger the internal valves to close automatically.",
    wrongExplanations: {
      "A": "Fusible links do not connect trailer sections. They are safety devices on valve control lines that melt at 127°C (261°F), not 200°C.",
      "C": "Fusible links are heat-activated, not pressure-activated. They melt at 127°C (261°F), not 100°C, to close internal valves during a fire.",
      "D": "Fusible links are installed on cable lines or tubing for internal valves, not on manhole covers. They melt at 127°C (261°F), not 150°C."
    },
    keyFact: "Fusible links melt at 127°C / 261°F, triggering internal valves to close in a fire."
  },
  {
    id: "hazmat-013",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "fill",
    difficulty: 3,
    tags: ["numbers"],
    question: "Fusible links on tank trailers are designed to melt at a temperature no greater than ____°C (____°F).",
    acceptedAnswers: ["127/261", "127°C/261°F", "127 / 261", "127°C (261°F)", "127"],
    answer: "127/261",
    explanation: "Fusible links or elements are designed to melt at a temperature no greater than 127 degrees Celsius (261 degrees Fahrenheit). When melted in the event of a fire, they trigger the internal valves to close automatically, preventing the release of hazardous cargo.",
    keyFact: "Fusible links: 127°C / 261°F."
  },

  // ===== SHEAR SECTION =====
  {
    id: "hazmat-014",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "mc",
    difficulty: 3,
    tags: ["procedure"],
    question: "What is a 'shear section' on a flammable liquid tank truck?",
    choices: [
      { key: "A", text: "A divider that separates different types of liquid cargo" },
      { key: "B", text: "A specially machined section of the outlet piping designed to break away in case of damage, preventing damage to the tank shell and internal valve" },
      { key: "C", text: "A reinforced section of the tank designed to withstand rollovers" },
      { key: "D", text: "A section where the driver can visually inspect the cargo level" }
    ],
    answer: "B",
    explanation: "A shear section is a specially machined section of the outlet piping connected to the bottom of the tank shell. Its purpose is to ensure that, in the event of damage to the piping, the shear section will break before the point at which it connects to the tank shell, thus minimizing the possibility of damage to the tank shell and internal valve.",
    wrongExplanations: {
      "A": "A shear section is not a divider. It is a weak point in the outlet piping designed to break away before damage reaches the tank shell.",
      "C": "A shear section is not for rollover protection. It is a deliberately weakened section of outlet piping that breaks first to protect the tank shell and internal valve.",
      "D": "A shear section is not for cargo inspection. It is a safety feature in the outlet piping designed to fail before the tank shell does in an accident."
    },
    keyFact: "Shear section = weak point in outlet piping that breaks first to protect the tank shell."
  },

  // ===== BAFFLE VS BULKHEAD =====
  {
    id: "hazmat-015",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What is the difference between a 'baffle' and a 'bulkhead'?",
    choices: [
      { key: "A", text: "They are the same thing with different names" },
      { key: "B", text: "Baffles have holes (openings) and reduce surge; bulkheads are solid and divide the tank into separate compartments" },
      { key: "C", text: "Bulkheads have holes and baffles are solid" },
      { key: "D", text: "Baffles are external and bulkheads are internal" }
    ],
    answer: "B",
    explanation: "A baffle and a bulkhead are both internal tank sections always perpendicular to the long axis of the tank. The difference is that bulkheads are liquid tight while baffles have openings, generally at the top and bottom. Bulkheads, therefore, divide the tank into separate compartments while baffles do not. Baffles help reduce product surge.",
    wrongExplanations: {
      "A": "They are not the same. Baffles have openings and reduce surge, while bulkheads are liquid-tight and create separate compartments.",
      "C": "This is reversed. Baffles have the holes/openings, and bulkheads are solid (liquid-tight) dividers that create separate compartments.",
      "D": "Both baffles and bulkheads are internal tank sections. The difference is that baffles have openings and bulkheads are solid."
    },
    keyFact: "Baffles = holes, reduce surge. Bulkheads = solid, separate compartments."
  },

  // ===== OUTAGE =====
  {
    id: "hazmat-016",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "mc",
    difficulty: 2,
    tags: ["numbers", "procedure"],
    question: "What is 'outage' and why is it important?",
    choices: [
      { key: "A", text: "The weight of the cargo minus the weight of the tank" },
      { key: "B", text: "The volume of a tank that is NOT filled, generally 1% to 3% of total volume, to allow for liquid expansion and prevent spillage" },
      { key: "C", text: "The time it takes to unload a full tank" },
      { key: "D", text: "The distance between the tank and the ground" }
    ],
    answer: "B",
    explanation: "Outage is the volume of the tank which is not filled when the tank is loaded. For flammable liquids, it is generally from 1% to 3% of the total volume. Outage is important in order to prevent spillage and tank rupture. Generally, and especially during warm weather, tanks are filled with liquids which are cooler than the air temperature. Most liquids to some degree heat up and expand during transportation. If there is no outage or inadequate outage when the liquid warms and expands, the liquid spills through the vents. Improper outage may result in a tank which may rupture due to expansion.",
    wrongExplanations: {
      "A": "Outage does not refer to weight calculations. It is the unfilled volume in a tank (1-3%) that allows for liquid expansion during transport.",
      "C": "Outage is not a time measurement. It refers to the 1-3% of tank volume left unfilled to allow for thermal expansion of liquids.",
      "D": "Outage has nothing to do with ground clearance. It is the empty space (1-3% of volume) left in a tank to accommodate liquid expansion."
    },
    keyFact: "Outage = 1-3% unfilled volume for liquid expansion. No outage = spill or rupture risk."
  },

  // ===== REMOTE CONTROL AND EMERGENCY VALVE =====
  {
    id: "hazmat-017",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "The 'remote control' on a cargo tank is an emergency device located away from the normal control handles, used as a secondary means to close the internal valves.",
    answer: true,
    explanation: "The remote control on a cargo tank is a secondary control to close the internal valves. It is an emergency device located away from the normal control handles used to operate the internal valves, providing a backup safety mechanism.",
    keyFact: "Remote control = emergency secondary valve control located away from normal handles."
  },

  // ===== CARGO TANK INTERNAL VALVES =====
  {
    id: "hazmat-018",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "A cargo tank's internal valves are self-closing shut-off valves designed to close automatically to prevent accidental release of product during unloading operations.",
    answer: true,
    explanation: "A cargo tank's internal valves are self-closing shut-off valves used in normal unloading operations and are designed and operated to close automatically to prevent the accidental release of product.",
    keyFact: "Internal valves = self-closing shut-off valves that prevent accidental product release."
  },

  // ===== OVERTURN PROTECTION =====
  {
    id: "hazmat-019",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "Overturn protection on a cargo tank is designed to protect the cargo tank valves and manhole covers from damage in the event of an overturn.",
    answer: true,
    explanation: "Overturn protection protects the cargo tank valves and manhole covers from damage in the event of overturn so as to minimize or totally prevent cargo loss. It does not prevent overturns; rather, it limits the damage to critical components if one occurs.",
    keyFact: "Overturn protection = protects valves and manhole covers during overturn to prevent cargo loss."
  },

  // ===== TRACTOR ENGINE RUNNING DURING LOADING =====
  {
    id: "hazmat-020",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "A tractor engine may be kept running during the loading or unloading of a tank truck only if it is required to run a pump, and only if care is taken to avoid ignition of fumes.",
    answer: true,
    explanation: "A tractor engine may only be kept running during the loading or unloading of a tank truck if the engine is required to run a pump, and then only if care is taken to avoid ignition of fumes.",
    keyFact: "Engine running during loading ONLY if needed to run a pump + care taken to avoid ignition."
  },

  // ===== SPILLAGE CLEANUP =====
  {
    id: "hazmat-021",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "If there is spillage on the ground around the tank truck after loading or unloading, what must be done before the vehicle is driven away?",
    choices: [
      { key: "A", text: "Nothing, the spill will evaporate on its own" },
      { key: "B", text: "The overflow or spillage on the ground around the tank truck must be cleaned up, and the driver should try to contain the spill if possible" },
      { key: "C", text: "Just drive away quickly to prevent further spilling" },
      { key: "D", text: "Cover the spill with dirt and leave" }
    ],
    answer: "B",
    explanation: "If there is overflow or spillage on the ground around the tank truck, and that overflow/spillage involves a hazardous material, the driver should try to contain the spill if possible, and only if it does not endanger the driver. The appropriate authorities must be contacted. The driver must also try to satisfy Hazardous Materials (HM) and Occupational Safety and Health Administration (OSHA) requirements. A U.S. Department of Transportation (DOT) incident report may need to be completed. The driver should also notify the owner of the property and the local authorities.",
    wrongExplanations: {
      "A": "Ignoring a hazardous material spill is illegal and dangerous. The spill must be cleaned up and reported to appropriate authorities.",
      "C": "Driving away from a spill is illegal. The driver must contain the spill if safe to do so and notify authorities per HM and OSHA requirements.",
      "D": "Simply covering a hazardous spill with dirt is not proper cleanup. Proper containment, reporting, and compliance with HM and OSHA regulations are required."
    },
    keyFact: "Spill = contain if safe, contact authorities, satisfy HM and OSHA requirements, file DOT incident report if needed."
  },

  // ===== LOADING PROCEDURES =====
  {
    id: "hazmat-022",
    category: "hazmat",
    subcategory: "loading",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What are the primary precautions that must be taken around a loading rack?",
    choices: [
      { key: "A", text: "Keep the engine running and stay in the cab" },
      { key: "B", text: "Vehicle engine off, vehicle secured against movement, no smoking or open flames, no electronic devices or cell phones, and navigation systems turned off" },
      { key: "C", text: "Only turn off the headlights" },
      { key: "D", text: "Park on a slope so the vehicle can roll away in an emergency" }
    ],
    answer: "B",
    explanation: "When around a loading rack, the driver should make sure that: (1) the vehicle's engine is off; (2) the vehicle is secured against movement; (3) there is no smoking or open flames or lights; (4) electronic devices such as cell phones, CB radios, and navigation systems are turned off.",
    wrongExplanations: {
      "A": "The engine must be OFF at the loading rack, and the driver should not remain in the cab during loading. Safety precautions require active oversight.",
      "C": "Turning off headlights alone is insufficient. The engine must be off, the vehicle secured, no smoking or flames allowed, and all electronic devices turned off.",
      "D": "The vehicle must be secured AGAINST movement, not positioned to roll. The loading area requires the vehicle to be stationary and the engine off."
    },
    keyFact: "Loading rack: engine OFF, vehicle secured, NO smoking/flames, NO electronics/cell phones."
  },

  // ===== SPECIFICATION CARGO TANK =====
  {
    id: "hazmat-023",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What is a Specification Cargo Tank?",
    choices: [
      { key: "A", text: "Any tank that can carry liquids" },
      { key: "B", text: "A cargo tank built to a tank vehicle constructed to manufacturing specifications as prescribed by the Hazardous Materials Regulations (HMR)" },
      { key: "C", text: "A tank that has been painted with regulatory markings" },
      { key: "D", text: "A tank that is only used for non-hazardous materials" }
    ],
    answer: "B",
    explanation: "A Specification Cargo Tank is a tank vehicle constructed to manufacturing specifications as prescribed by the Hazardous Materials Regulations (HMR). The Hazardous Materials Regulations require that drivers must use Specification Cargo Tanks on most interstate or intrastate shipments of Hazardous Materials (HM) liquids and Class 9 materials. However, materials are allowed to be transported in non-specification tanks in domestic commerce.",
    wrongExplanations: {
      "A": "Not any tank qualifies. A Specification Cargo Tank must be built to specific manufacturing standards prescribed by the Hazardous Materials Regulations (HMR).",
      "C": "Paint and markings alone do not make a Specification Cargo Tank. It must be manufactured to the specifications prescribed by the HMR.",
      "D": "Specification Cargo Tanks are specifically designed FOR hazardous materials transport, not for non-hazardous materials."
    },
    keyFact: "Specification Cargo Tank = built to HMR manufacturing specifications for HM transport."
  },

  // ===== SPECIFICATION PLATE =====
  {
    id: "hazmat-024",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What is the 'Specification Plate' on a cargo tank?",
    choices: [
      { key: "A", text: "A placard showing the hazard class of the current cargo" },
      { key: "B", text: "A plate permanently affixed to the Specification Cargo Tank showing manufacturing data, serial number, dates of manufacture and test, and shell materials" },
      { key: "C", text: "The license plate on the rear of the tank" },
      { key: "D", text: "A removable tag that identifies the current load" }
    ],
    answer: "B",
    explanation: "A specification plate (or spec plate), as required by the Hazardous Materials Regulations, is one that is permanently affixed to the Specification Cargo Tank vehicle and shows such things as the specification number to which the tank was constructed, the manufacturer's serial number, dates of manufacture and test, and shell materials. The information on the plate varies according to the type of cargo tank vehicle.",
    wrongExplanations: {
      "A": "The specification plate is not a placard. It is a permanent plate showing manufacturing data, not current cargo information.",
      "C": "The specification plate is not the vehicle's license plate. It is a permanently affixed plate on the cargo tank itself showing manufacturing and test data.",
      "D": "The specification plate is permanently affixed, not removable. It shows manufacturing specifications, not current load information."
    },
    keyFact: "Spec plate = permanently affixed, shows manufacturer data, serial number, dates, and shell materials."
  },
  {
    id: "hazmat-025",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "Of what value is the Specification Plate to the driver?",
    choices: [
      { key: "A", text: "It tells the driver the current cargo weight" },
      { key: "B", text: "The driver must check it to make certain that the tank vehicle is authorized for the product being loaded; if incompatible material is loaded, it could be catastrophic" },
      { key: "C", text: "It shows the driver's name and license number" },
      { key: "D", text: "It is only important for the mechanic, not the driver" }
    ],
    answer: "B",
    explanation: "The driver must check the Specification Plate to make certain that an incompatible material is not loaded. If an incompatible material is loaded into a cargo tank, a catastrophic event could result.",
    wrongExplanations: {
      "A": "The spec plate does not show current cargo weight. It shows manufacturing specifications that the driver must check to ensure the tank is authorized for the product being loaded.",
      "C": "The spec plate contains manufacturing and tank specification data, not driver information.",
      "D": "The spec plate is critically important for drivers. They must check it before loading to ensure the cargo tank is compatible with the material being loaded."
    },
    keyFact: "Driver must check spec plate BEFORE loading to ensure tank is authorized for that product."
  },

  // ===== PRODUCT GROUNDING =====
  {
    id: "hazmat-026",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "fill",
    difficulty: 2,
    tags: ["regulation"],
    question: "Products considered to be __________ and __________ must be grounded while being loaded or unloaded.",
    acceptedAnswers: ["flammable and combustible", "flammable/combustible", "Flammable and Combustible", "flammable, combustible"],
    answer: "flammable and combustible",
    explanation: "Products considered to be flammable and combustible must be grounded while being loaded or unloaded. This prevents the buildup of static electricity that could ignite flammable vapors.",
    keyFact: "Flammable and combustible products MUST be grounded during loading/unloading."
  },

  // ===== EMERGENCY SIGNAL DEVICES =====
  {
    id: "hazmat-027",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "fill",
    difficulty: 2,
    tags: ["procedure"],
    question: "When transporting flammable materials, any __________-producing emergency signal (such as flares) is forbidden.",
    acceptedAnswers: ["flame", "Flame", "FLAME", "fire"],
    answer: "flame",
    explanation: "It is forbidden to use any flame-producing emergency signal when transporting flammable materials. Flame-producing signals such as flares could ignite flammable vapors. Non-flame devices such as reflective triangles should be used instead.",
    keyFact: "NO flares or flame-producing signals when transporting flammables."
  },

  // ===== WRONG STORAGE TANK HAZARDS =====
  {
    id: "hazmat-028",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What are the hazards associated with unloading HM into the wrong storage tank?",
    choices: [
      { key: "A", text: "The only risk is a small fine" },
      { key: "B", text: "An inadvertent mixture of incompatible materials may result in the release of toxic fumes, and/or a possible increase in the danger of fire or explosion; a spill could result if the tank overflows" },
      { key: "C", text: "The storage tank paint may be damaged" },
      { key: "D", text: "There are no significant hazards" }
    ],
    answer: "B",
    explanation: "An inadvertent mixture of incompatible materials may result in the release of toxic fumes, and/or a possible increase in the danger of fire or explosion. A spill could result if the tank overflows.",
    wrongExplanations: {
      "A": "The consequences go far beyond a fine. Mixing incompatible materials can produce toxic fumes, fires, explosions, and dangerous spills.",
      "C": "Paint damage is trivial compared to the real risks: toxic fumes, fire, explosion, and hazardous spills from incompatible materials.",
      "D": "There are extremely significant hazards including toxic fume release, fire, explosion, and spills from mixing incompatible materials."
    },
    keyFact: "Wrong tank = toxic fumes + fire/explosion risk + overflow spill danger."
  },

  // ===== OVERFILLING CONSEQUENCES =====
  {
    id: "hazmat-029",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "Overfilling a storage tank with hazardous materials can result in environmental damage, costly cleanup measures, and even fire, in addition to loss of product.",
    answer: true,
    explanation: "The hazards of overfilling a storage tank will vary with the nature of the product, and could cause a fire. In addition to the loss of product, overfilling a storage tank is likely to result in environmental damage and require costly clean-up measures.",
    keyFact: "Overfilling = product loss + environmental damage + costly cleanup + possible fire."
  },

  // ===== SHIPPING PAPERS =====
  {
    id: "hazmat-030",
    category: "hazmat",
    subcategory: "shipping-papers",
    type: "mc",
    difficulty: 2,
    tags: ["regulation", "procedure"],
    question: "What information on shipping documents must a driver check before accepting a load?",
    choices: [
      { key: "A", text: "Only the weight of the load" },
      { key: "B", text: "It is a violation to accept hazmat that is not properly described; the driver must check for proper descriptions including U.N. identification number, proper commodity description, hazard classification, and total quantity" },
      { key: "C", text: "Only the destination address" },
      { key: "D", text: "Only the shipper's name and phone number" }
    ],
    answer: "B",
    explanation: "It is a violation of the regulations for a carrier to accept hazmat that is not properly described in the shipping documents. When a carrier 'signs' at the loading site, the driver must check for proper descriptions such as U.N. identification number, proper commodity description, hazard classification (flammable liquid, corrosive, etc.), packing group, and total quantity by weight or volume and the number and type of packages/drums.",
    wrongExplanations: {
      "A": "Weight is just one element. The driver must verify the complete description including U.N. identification number, commodity description, hazard class, and total quantity.",
      "C": "Destination alone is not sufficient. The driver must check U.N. identification number, proper commodity description, hazard classification, packing group, and total quantity.",
      "D": "Shipper contact info alone is insufficient. The critical items to verify include proper HM descriptions, U.N. numbers, hazard classifications, and quantities."
    },
    keyFact: "Driver must verify: UN ID number, commodity description, hazard class, packing group, and total quantity."
  },

  // ===== PLACARDS AFTER UNLOADING =====
  {
    id: "hazmat-031",
    category: "hazmat",
    subcategory: "placarding",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "Hazardous materials placards on a cargo tank may be removed immediately after the HM cargo has been unloaded.",
    answer: false,
    explanation: "This is false. The placards must be left in place until the vehicle is purged to remove all Hazardous Materials (HM) residues. Simply unloading the cargo does not mean the vehicle is free of hazardous residues.",
    keyFact: "Placards stay on until vehicle is PURGED of all HM residues."
  },

  // ===== PRE-TRIP CHECKS FOR HM =====
  {
    id: "hazmat-032",
    category: "hazmat",
    subcategory: "driver-duties",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What special checks of a tank vehicle transporting HM must be made as part of the driver's pre-trip inspection?",
    choices: [
      { key: "A", text: "Only check the mirrors and lights" },
      { key: "B", text: "Ensure all valves and unloading lines are securely closed, that manifolds are closed, and check for signs of leakage elsewhere on the vehicle" },
      { key: "C", text: "Only check the fuel level" },
      { key: "D", text: "Only verify the route on the GPS" }
    ],
    answer: "B",
    explanation: "The driver must be sure that all valves and unloading lines are securely closed and that manifolds are closed to prevent the loss of cargo. The driver should also check for any signs of leakage elsewhere on the vehicle.",
    wrongExplanations: {
      "A": "Mirrors and lights are general pre-trip items. For Hazardous Materials (HM) tank vehicles, the driver must specifically check that all valves, unloading lines, and manifolds are closed and inspect for leakage.",
      "C": "Fuel level is a general check. HM tank vehicle pre-trip requires verifying all valves and unloading lines are closed and checking for leakage.",
      "D": "Route planning is important but not the special HM pre-trip check. The driver must verify valve/line closure and inspect for leakage."
    },
    keyFact: "HM pre-trip: all valves closed, unloading lines secured, manifolds closed, check for leakage."
  },

  // ===== LIQUID SURGE =====
  {
    id: "hazmat-033",
    category: "hazmat",
    subcategory: "tank-operations",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "Why is it particularly important to avoid any sudden steering maneuvers when driving a cargo tank vehicle?",
    choices: [
      { key: "A", text: "The tank may crack from the vibration" },
      { key: "B", text: "A sudden turning movement causes 'liquid surge' -- as the contents move from side to side, they develop sufficient force to cause the vehicle to overturn" },
      { key: "C", text: "The placards may fall off" },
      { key: "D", text: "The brakes are less effective on tank vehicles" }
    ],
    answer: "B",
    explanation: "A sudden turning movement causes 'liquid surge.' As the contents of the cargo tank move from side to side, they can develop sufficient force to cause the vehicle to overturn.",
    wrongExplanations: {
      "A": "The concern is not tank cracking but liquid surge. The moving liquid develops enough force during sudden steering to overturn the vehicle.",
      "C": "Placards are not the concern. Liquid surge from sudden steering can generate enough lateral force to roll the entire vehicle over.",
      "D": "While braking is affected by liquid surge, the primary danger of sudden steering is that liquid surge can develop enough force to overturn the vehicle."
    },
    keyFact: "Sudden steering = liquid surge = risk of vehicle overturn."
  },

  // ===== SPEED CONTROL =====
  {
    id: "hazmat-034",
    category: "hazmat",
    subcategory: "tank-operations",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "Why is speed control on curves and turns especially important when driving any cargo tank vehicle?",
    choices: [
      { key: "A", text: "Because the engine overheats more easily" },
      { key: "B", text: "On curves and turns, the sideways movement of the liquid cargo is added to the normal centrifugal force exerted on the vehicle, which increases the possibility of overturning" },
      { key: "C", text: "Because the placards are harder to read at high speed" },
      { key: "D", text: "Because the tires wear out faster on curves" }
    ],
    answer: "B",
    explanation: "On curves and turns, the sideways movement of the liquid cargo is added to the normal centrifugal force exerted on the vehicle, which increases the possibility of the cargo tank vehicle overturning.",
    wrongExplanations: {
      "A": "Engine overheating is not the concern. The danger is that liquid cargo's sideways movement adds to centrifugal force, greatly increasing rollover risk.",
      "C": "Placard visibility is not the issue. Speed control matters because liquid surge combines with centrifugal force, making rollover much more likely.",
      "D": "Tire wear is not the critical concern. The real danger is liquid surge combined with centrifugal force creating a high risk of vehicle rollover."
    },
    keyFact: "Curves + liquid surge + centrifugal force = high rollover risk. Control speed!"
  },

  // ===== BRAKES DURING STOPS =====
  {
    id: "hazmat-035",
    category: "hazmat",
    subcategory: "tank-operations",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "Why should the driver of a cargo tank vehicle keep the brakes applied during a normal traffic stop?",
    choices: [
      { key: "A", text: "To save fuel" },
      { key: "B", text: "Stopping the vehicle causes the liquid cargo to move back and forth and surge; if the brakes are released, the continued movement of the liquid may be sufficient to cause the vehicle to roll back and forth" },
      { key: "C", text: "It is not necessary to keep brakes applied" },
      { key: "D", text: "To prevent the engine from stalling" }
    ],
    answer: "B",
    explanation: "Stopping the vehicle causes the liquid cargo to move back and forth and surge. If the brakes are released while the liquid is still surging, the continued movement of the liquid may be sufficient to cause the vehicle to roll back and forth.",
    wrongExplanations: {
      "A": "Fuel savings are not the reason. The brakes must stay applied because liquid surge after stopping can push the vehicle forward or backward.",
      "C": "It IS necessary. Releasing brakes while liquid is still surging can cause the vehicle to roll back and forth uncontrollably.",
      "D": "Engine stalling is not the concern. The brakes prevent liquid surge from pushing the stopped vehicle into motion."
    },
    keyFact: "Keep brakes applied at stops -- liquid surge can push the vehicle if brakes are released."
  },

  // ===== PARTIALLY FILLED TANK =====
  {
    id: "hazmat-036",
    category: "hazmat",
    subcategory: "tank-operations",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "A cargo tank vehicle is most vulnerable to liquid surge when the tank is only partially full.",
    answer: true,
    explanation: "A cargo tank is particularly vulnerable to liquid surge when the cargo tank is only partially full. The additional space allows the liquid to develop greater momentum as it moves from side to side or back and forth, increasing the risk of vehicle overturn.",
    keyFact: "Partially full tank = greatest liquid surge danger."
  },

  // ===== HAZARD CLASSES 1-9 =====
  {
    id: "hazmat-037",
    category: "hazmat",
    subcategory: "hazard-classes",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What are the hazard classes designated by the Federal Motor Carrier Safety Regulations (FMCSRs)?",
    choices: [
      { key: "A", text: "Only 5 hazard classes" },
      { key: "B", text: "9 numbered hazard classes: 1-Explosives, 2-Gases, 3-Flammable Liquid, 4-Flammable Solid, 5-Oxidizer, 6-Poison, 7-Radioactive, 8-Corrosive, 9-Miscellaneous" },
      { key: "C", text: "12 hazard classes based on chemical composition" },
      { key: "D", text: "Only 3 classes: flammable, corrosive, and explosive" }
    ],
    answer: "B",
    explanation: "The U.S. Hazardous Materials (HM) Regulations are consistent with the United Nations (UN) recommendations. The HM Regulations recognize 9 hazard classes: Class 1 Explosives (with Divisions 1.1 through 1.6); Class 2 Gases (Divisions 2.1 Flammable Gas, 2.2 Non-Flammable Gas, 2.3 Poison Gas); Class 3 Flammable Liquid; Class 4 Flammable Solid (Divisions 4.1 Flammable Solid, 4.2 Spontaneously Combustible, 4.3 Dangerous When Wet); Class 5 Oxidizer (Divisions 5.1 Oxidizer, 5.2 Organic Peroxide); Class 6 Poison (Divisions 6.1 Poisonous Material, 6.2 Etiologic Agent/Infectious Substance); Class 7 Radioactive Material; Class 8 Corrosive Material; and Class 9 Miscellaneous Hazardous Materials (HM).",
    wrongExplanations: {
      "A": "There are 9, not 5, recognized hazard classes in the U.S. HM Regulations, consistent with United Nations (UN) recommendations.",
      "C": "There are 9 numbered hazard classes (with subdivisions), not 12. They are based on hazard type, not chemical composition.",
      "D": "There are 9 hazard classes, not 3. They cover explosives, gases, flammable liquids, flammable solids, oxidizers, poisons, radioactive materials, corrosives, and miscellaneous HM."
    },
    keyFact: "9 hazard classes: Explosives, Gases, Flammable Liquid, Flammable Solid, Oxidizer, Poison, Radioactive, Corrosive, Miscellaneous."
  },
  {
    id: "hazmat-038",
    category: "hazmat",
    subcategory: "hazard-classes",
    type: "fill",
    difficulty: 2,
    tags: ["regulation"],
    question: "Hazard Class 3 is designated as __________ Liquid.",
    acceptedAnswers: ["Flammable", "flammable", "FLAMMABLE"],
    answer: "Flammable",
    explanation: "Hazard Class 3 is Flammable Liquid. This class covers liquids with flash points that make them a fire hazard during transportation.",
    keyFact: "Class 3 = Flammable Liquid."
  },
  {
    id: "hazmat-039",
    category: "hazmat",
    subcategory: "hazard-classes",
    type: "fill",
    difficulty: 2,
    tags: ["regulation"],
    question: "Hazard Class 8 is designated as __________ Material.",
    acceptedAnswers: ["Corrosive", "corrosive", "CORROSIVE"],
    answer: "Corrosive",
    explanation: "Hazard Class 8 is Corrosive Material. This class includes substances that can cause visible destruction or irreversible damage to living tissue or other materials upon contact.",
    keyFact: "Class 8 = Corrosive Material."
  },

  // ===== METRIC MEASUREMENTS =====
  {
    id: "hazmat-040",
    category: "hazmat",
    subcategory: "regulations",
    type: "mc",
    difficulty: 3,
    tags: ["numbers", "regulation"],
    question: "What are the key metric flashpoint thresholds in the Hazardous Materials Regulations?",
    choices: [
      { key: "A", text: "100°C for flammable and 200°C for combustible" },
      { key: "B", text: "60.5°C (141°F) and below = flammable liquid; above 60.5°C to 93°C (200°F) = combustible liquid; 37.8°C (100°F) = elevated temperature material" },
      { key: "C", text: "50°C for flammable and 100°C for combustible" },
      { key: "D", text: "32°C for flammable and 55°C for combustible" }
    ],
    answer: "B",
    explanation: "Key metric flashpoint thresholds: 60.5 degrees Celsius (141 degrees Fahrenheit) and below, the flashpoint above and below which a liquid is classified as a flammable liquid under the regulations; above 60.5 degrees Celsius (141 degrees Fahrenheit) to 93 degrees Celsius (200 degrees Fahrenheit), the flashpoint above and below which a liquid may be reclassified as a combustible liquid for domestic transportation only; 37.8 degrees Celsius (100 degrees Fahrenheit), a liquid with a flashpoint at or above this temperature that is intentionally heated and transported at or above its flashpoint is an elevated temperature material.",
    wrongExplanations: {
      "A": "These thresholds are incorrect. The correct flashpoint thresholds are 60.5°C (141°F) for flammable liquids and 93°C (200°F) for combustible liquids.",
      "C": "The correct thresholds are 60.5°C for flammable and 93°C for combustible, not 50°C and 100°C.",
      "D": "These values are incorrect. The HMR specifies 60.5°C (141°F) as the flammable/combustible boundary and 93°C (200°F) as the combustible upper limit."
    },
    keyFact: "Flammable: at or below 60.5°C (141°F). Combustible: above 60.5°C to 93°C (200°F). Elevated temp: 37.8°C (100°F)."
  },
  {
    id: "hazmat-041",
    category: "hazmat",
    subcategory: "regulations",
    type: "mc",
    difficulty: 3,
    tags: ["numbers", "regulation"],
    question: "At what weight thresholds do metric measurements affect placarding requirements?",
    choices: [
      { key: "A", text: "500 kilograms and 2,500 kilograms" },
      { key: "B", text: "454 kilograms (1,001 pounds) for Table 2 placarding; 2,268 kilograms (5,000 pounds) for bulk packaging; 4,536 kilograms (10,000 pounds) for display on transport vehicles" },
      { key: "C", text: "100 kilograms and 1,000 kilograms" },
      { key: "D", text: "There are no metric weight thresholds for placarding" }
    ],
    answer: "B",
    explanation: "Key metric weight thresholds include: 454 kilograms (1,001 pounds), the weight capacity above which a packaging is determined to be a bulk packaging for liquids; this is also the threshold for Table 2 placarding. 2,268 kilograms (5,000 pounds) and 4,536 kilograms (10,000 pounds) are additional thresholds. These measurements are important for drivers in ensuring compliance with the Hazardous Materials Regulations (HMR).",
    wrongExplanations: {
      "A": "These are not the correct thresholds. The key weights are 454 kg (1,001 lbs) for Table 2 placarding and bulk packaging determination.",
      "C": "These values are incorrect. The Hazardous Materials Regulations (HMR) specify 454 kg (1,001 lbs) and other thresholds for different regulatory requirements.",
      "D": "There are specific metric weight thresholds. The HMR uses both metric and imperial measurements for placarding and packaging requirements."
    },
    keyFact: "454 kg (1,001 lbs) = Table 2 placarding threshold and bulk packaging for liquids."
  },

  // ===== PLACARDING RULES: TABLE 1 VS TABLE 2 =====
  {
    id: "hazmat-042",
    category: "hazmat",
    subcategory: "placarding",
    type: "mc",
    difficulty: 3,
    tags: ["regulation", "numbers"],
    question: "What is the difference between Table 1 and Table 2 placarding requirements?",
    choices: [
      { key: "A", text: "Table 1 is for domestic shipments and Table 2 is for international" },
      { key: "B", text: "Table 1 requires placarding for ANY quantity; Table 2 requires placarding only when the aggregate gross weight is 1,001 pounds or more" },
      { key: "C", text: "Table 1 is for liquids and Table 2 is for solids" },
      { key: "D", text: "There is no difference; both require placarding at 500 pounds" }
    ],
    answer: "B",
    explanation: "Table 1 Hazardous Materials (HM) classes require placarding for any quantity on a vehicle. Table 2 HM classes require placarding when the vehicle has materials in bulk packaging or an aggregate gross weight of 1,001 pounds (454 kilograms) or more on a truck.",
    wrongExplanations: {
      "A": "The distinction is not domestic vs. international. Table 1 requires placarding at ANY quantity due to higher hazard, while Table 2 requires 1,001+ pounds.",
      "C": "The distinction is not liquids vs. solids. Table 1 classes are higher-hazard materials requiring placarding at any quantity; Table 2 classes require 1,001+ pounds.",
      "D": "There is a significant difference. Table 1 = any quantity. Table 2 = 1,001 pounds (454 kg) or more aggregate gross weight."
    },
    keyFact: "Table 1 = ANY quantity. Table 2 = 1,001+ lbs (454+ kg)."
  },
  {
    id: "hazmat-043",
    category: "hazmat",
    subcategory: "placarding",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "Which of the following is a Table 1 hazard class that requires placarding for ANY quantity?",
    choices: [
      { key: "A", text: "Class 3 Flammable Liquid" },
      { key: "B", text: "Division 1.1, 1.2, and 1.3 Explosives" },
      { key: "C", text: "Class 9 Miscellaneous HM" },
      { key: "D", text: "Division 2.2 Non-Flammable Gas" }
    ],
    answer: "B",
    explanation: "Table 1 classes that require placarding for any quantity include: Division 1.1, 1.2, and 1.3 Explosives; Division 2.3 Poison Gas; Division 4.3 Dangerous When Wet; Division 5.2 Organic Peroxide Type B (liquid or solid, temperature controlled); Division 6.1 Poison Inhalation Hazard; and Radioactive Materials displaying the Radioactive Yellow III label.",
    wrongExplanations: {
      "A": "Class 3 Flammable Liquid is a Table 2 class, requiring placarding only at 1,001+ pounds aggregate gross weight.",
      "C": "Class 9 Miscellaneous Hazardous Materials (HM) is a Table 2 class, not Table 1. It requires 1,001+ pounds for placarding.",
      "D": "Division 2.2 Non-Flammable Gas is a Table 2 class. Table 1 includes Division 2.3 Poison Gas, not 2.2."
    },
    keyFact: "Table 1 (any quantity): Div 1.1-1.3, Div 2.3, Div 4.3, Div 5.2 Type B, Div 6.1 PIH, Class 7 Yellow III."
  },
  {
    id: "hazmat-044",
    category: "hazmat",
    subcategory: "placarding",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "Which of the following are Table 2 hazard classes requiring placarding at 1,001 pounds or more?",
    choices: [
      { key: "A", text: "Division 1.1 Explosives and Division 2.3 Poison Gas" },
      { key: "B", text: "Division 1.4 Explosives, Division 2.1 Flammable Gas, Division 2.2 Non-Flammable Gas, Class 3 Flammable Liquid, and Class 8 Corrosives" },
      { key: "C", text: "Only Class 7 Radioactive Material" },
      { key: "D", text: "Only Division 6.1 Poison Inhalation Hazard materials" }
    ],
    answer: "B",
    explanation: "Table 2 classes requiring placarding at 1,001 pounds (454 kilograms) or more aggregate gross weight include: Division 1.4 Explosives; Division 1.5 and 1.6 Explosives; Division 2.1 Flammable Gas; Division 2.2 Non-Flammable Gas; Class 3 Flammable Liquid; Division 4.1 Flammable Solid; Division 4.2 Spontaneously Combustible; Division 5.1 Oxidizers; Division 5.2 Organic Peroxides (other than Type B); Division 6.1 Poisons (other than inhalation hazard); Class 8 Corrosives; Class 9 Miscellaneous Hazardous Materials (HM); and Division 1.4 Explosives, Compatibility Group S (1.4S).",
    wrongExplanations: {
      "A": "Division 1.1 Explosives and Division 2.3 Poison Gas are Table 1 classes requiring placarding at ANY quantity, not Table 2.",
      "C": "Class 7 Radioactive Material with Yellow III label is a Table 1 class. Table 2 includes many classes like flammable gas, flammable liquid, corrosives, etc.",
      "D": "Division 6.1 Poison Inhalation Hazard (PIH) is a Table 1 class. Table 2 includes Division 6.1 Poisons that are NOT inhalation hazards."
    },
    keyFact: "Table 2 (1,001+ lbs): Div 1.4-1.6, Div 2.1-2.2, Class 3, Div 4.1-4.2, Div 5.1, Div 6.1 (non-PIH), Class 8, Class 9."
  },

  // ===== PLACARD PLACEMENT =====
  {
    id: "hazmat-045",
    category: "hazmat",
    subcategory: "placarding",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "Where should placards be placed on the vehicle?",
    choices: [
      { key: "A", text: "Only on the rear of the vehicle" },
      { key: "B", text: "On each end (front and rear) and on each side of the vehicle, with the front placard on either the cab or the front of the power unit" },
      { key: "C", text: "Only on the driver's side" },
      { key: "D", text: "Only on the top of the trailer" }
    ],
    answer: "B",
    explanation: "Placards must be placed on each end and on each side of the vehicle -- that means front, rear, and both sides. The front placard may be either on the cab or the front of the power unit (tractor).",
    wrongExplanations: {
      "A": "Rear only is not sufficient. Placards must be displayed on all four sides: front, rear, left side, and right side.",
      "C": "One side only is not compliant. Federal regulations require placards on all four sides: front, rear, and both sides of the vehicle.",
      "D": "The top is not a placard location. Placards go on the front, rear, and both sides of the vehicle."
    },
    keyFact: "Placards on ALL 4 sides: front, rear, left, right. Front can be on cab or tractor front."
  },
  {
    id: "hazmat-046",
    category: "hazmat",
    subcategory: "placarding",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "In a twin trailer unit where only one trailer contains HM, both trailers must be placarded for safety.",
    answer: false,
    explanation: "This is false. Only the trailer containing the Hazardous Materials (HM) must be placarded. The trailer containing non-HM should NOT be placarded, as this would provide false information about its contents.",
    keyFact: "Only the trailer with HM gets placarded -- non-HM trailer should NOT be placarded."
  },

  // ===== WHEN PLACARDS ARE REQUIRED =====
  {
    id: "hazmat-047",
    category: "hazmat",
    subcategory: "placarding",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "When must a truck be placarded?",
    choices: [
      { key: "A", text: "Only when traveling on the interstate" },
      { key: "B", text: "When transporting any quantity of HM found in Table 1, or when transporting Table 2 materials in bulk packaging or with aggregate gross weight of 1,001 pounds or more" },
      { key: "C", text: "Only when carrying more than 5,000 pounds of any material" },
      { key: "D", text: "Only when the shipment crosses state lines" }
    ],
    answer: "B",
    explanation: "Placards are required on a vehicle transporting any quantity of Hazardous Materials (HM) found in Table 1. Placards are also required on a vehicle transporting HM from Table 2 when the materials are in a bulk packaging or in non-bulk packaging when total weight of all Table 2 materials is 1,001 pounds (454 kilograms) or more.",
    wrongExplanations: {
      "A": "Placarding requirements apply to all roads, not just interstates. The requirement depends on hazard class and quantity.",
      "C": "The 5,000-pound threshold is incorrect. Table 1 materials require placarding at ANY quantity, and Table 2 materials at 1,001 pounds or more.",
      "D": "Placarding is not based on whether the shipment crosses state lines. It is based on the hazard class and quantity being transported."
    },
    keyFact: "Placard required: Table 1 = any quantity; Table 2 = bulk packaging or 1,001+ lbs total."
  },

  // ===== CLASSES NOT REQUIRING PLACARDING =====
  {
    id: "hazmat-048",
    category: "hazmat",
    subcategory: "placarding",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "What classes do not require placarding regardless of the amount?",
    choices: [
      { key: "A", text: "Class 3 Flammable Liquids" },
      { key: "B", text: "The driver need not placard if transporting Division 1.4 Substances, Radioactive Materials (White I or Radioactive Yellow II labels), limited quantity shipments of HM, ORM, small shipments of combustible liquids, or Class 9 materials" },
      { key: "C", text: "Class 2 Gases" },
      { key: "D", text: "All classes require placarding without exception" }
    ],
    answer: "B",
    explanation: "The driver need not placard the vehicle if transporting Division 1.4 Substances (Compatibility Group S), Radioactive Materials (White I or Radioactive Yellow II labels), limited quantity shipments of Hazardous Materials (HM), Other Regulated Materials (ORM), small shipments of combustible liquids, or Class 9 materials. Also, domestic shipments are exempted from placarding: 'Keep Away from Food' and 'Drive Safely' are not authorized placards.",
    wrongExplanations: {
      "A": "Class 3 Flammable Liquids DO require placarding when the aggregate gross weight exceeds 1,001 pounds (Table 2).",
      "C": "Class 2 Gases require placarding under appropriate Table 1 or Table 2 rules depending on the division.",
      "D": "Not all classes require placarding. Several exemptions exist for limited quantities, ORM, certain radioactive, and specific Division 1.4S materials."
    },
    keyFact: "No placard needed: Div 1.4S, Radioactive White I/Yellow II, limited qty, ORM, small combustible, Class 9."
  },

  // ===== LABELS AND PLACARDS RELATIONSHIP =====
  {
    id: "hazmat-049",
    category: "hazmat",
    subcategory: "placarding",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "Both labels and placards are diamond-shaped, with labels used on packages and containers, and placards used on vehicles.",
    answer: true,
    explanation: "Both labels and placards are diamond-shaped, and placards generally replace the labels used on packages and containers. Sometimes, placards and labels are identical except for size. Other times, there are minor variations in wording, color scheme, or both.",
    keyFact: "Both diamond-shaped: labels on packages, placards on vehicles. Same hazard info, different sizes."
  },

  // ===== ID NUMBER DISPLAY =====
  {
    id: "hazmat-050",
    category: "hazmat",
    subcategory: "placarding",
    type: "mc",
    difficulty: 3,
    tags: ["regulation", "numbers"],
    question: "How must the identification number of HM be displayed on the exterior of a vehicle transporting bulk packages of HM?",
    choices: [
      { key: "A", text: "In any color on any background" },
      { key: "B", text: "The identification number must be visible on each side and each end of the vehicle; it can be shown by black numbers on an orange panel, on a white square-on-point placard, or by black numbers on a placard" },
      { key: "C", text: "Only on the rear bumper in small print" },
      { key: "D", text: "On the roof of the vehicle only" }
    ],
    answer: "B",
    explanation: "The three options available for displaying the identification number on a cargo tank, portable tank, or other bulk packaging transporting Hazardous Materials (HM) which do not require placarding are: (1) by black numbers on an orange panel; (2) by black numbers on a white square-on-point configuration (a diamond shape placed when used alone); and (3) the identification numbers must be displayed in the manner described for the placarded vehicle, by black numbers on a placard.",
    wrongExplanations: {
      "A": "There are specific color requirements. Numbers must be black, and the background must be either orange panels or white diamond-shaped configurations.",
      "C": "The ID number must be visible on each side and each end of the vehicle, not just on the rear bumper.",
      "D": "The roof is not a valid display location. ID numbers go on each side and each end of the vehicle."
    },
    keyFact: "ID numbers: 4-inch black numbers on orange panel, white diamond, or on the placard itself. All sides and ends."
  },
  {
    id: "hazmat-051",
    category: "hazmat",
    subcategory: "placarding",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "The 'UN' or 'NA' prefix is always required when the identification number is shown on a placard instead of the hazard class name.",
    answer: false,
    explanation: "When the identification number may be shown on the placard instead of the hazard class name, the 'UN' or 'NA' prefix is NOT required in these circumstances.",
    keyFact: "UN/NA prefix NOT required when ID number is displayed on a placard."
  },

  // ===== SHIPPING PAPER LOCATION =====
  {
    id: "hazmat-052",
    category: "hazmat",
    subcategory: "shipping-papers",
    type: "mc",
    difficulty: 2,
    tags: ["regulation", "procedure"],
    question: "What requirements govern the location of HM shipping papers while transporting?",
    choices: [
      { key: "A", text: "They can be stored anywhere in the truck" },
      { key: "B", text: "When driving: within the driver's reach while restrained by a seat belt, or in a pouch attached to the driver's door. When away from the vehicle: in a pouch on the driver's door or on the driver's seat." },
      { key: "C", text: "In the glove compartment at all times" },
      { key: "D", text: "In the trailer with the cargo" }
    ],
    answer: "B",
    explanation: "Hazardous Materials (HM) shipping papers must be within the driver's reach when restrained by a seat belt, or they must be in a pouch attached to the driver's door. When the driver is away from the vehicle, the HM shipping papers must be in a pouch on the driver's door, or on the driver's seat. HM shipping papers must be kept separate from all other papers, or be on top of all other papers being carried, or distinctively tabbed to facilitate locating them readily. See 49 Code of Federal Regulations (CFR) Sections 177.817 and 49 CFR Section 172.201 et seq.",
    wrongExplanations: {
      "A": "HM papers cannot be stored just anywhere. They must be within the driver's reach when belted in, or in the driver's door pouch.",
      "C": "The glove compartment is not an acceptable location. Papers must be within reach while belted or in the door pouch when driving, and on the seat or door pouch when away.",
      "D": "Keeping papers in the trailer defeats their purpose. They must be immediately accessible to the driver and to emergency responders."
    },
    keyFact: "Driving: within reach when belted OR door pouch. Away: door pouch OR driver's seat. Always on top or tabbed."
  },
  {
    id: "hazmat-053",
    category: "hazmat",
    subcategory: "shipping-papers",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "HM shipping papers must be kept separate from all other papers, or be placed on top of all other papers, or be distinctively tabbed for easy location.",
    answer: true,
    explanation: "Hazardous Materials (HM) shipping papers must be kept separate from all other papers, or the papers must be on top of all other papers being carried, or distinctively tabbed to facilitate locating them readily. This is required under 49 Code of Federal Regulations (CFR) Section 177.817 and 49 CFR Section 172.201 et seq.",
    keyFact: "HM papers: separate, on top, or tabbed -- must be easy to find quickly."
  },

  // ===== SHIPPING PAPER CONTENT =====
  {
    id: "hazmat-054",
    category: "hazmat",
    subcategory: "shipping-papers",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "What special information on the shipping paper will help the driver identify HM shipments?",
    choices: [
      { key: "A", text: "The shipper's logo only" },
      { key: "B", text: "The HM may be listed first; be entered in a contrasting color; be designated by an 'X' in a column captioned 'HM'; or any combination of these methods" },
      { key: "C", text: "A red border around the entire document" },
      { key: "D", text: "The driver's name highlighted in yellow" }
    ],
    answer: "B",
    explanation: "Shipping papers must designate Hazardous Materials (HM) in one of these ways: (1) the HM may be listed first, before any non-HM items; (2) the HM may be entered in a color that contrasts with non-HM entries; (3) the HM may be designated by an 'X' located in a column captioned 'HM.'",
    wrongExplanations: {
      "A": "A shipper's logo does not identify HM. The designated methods are: listing HM first, using contrasting color, or marking with an 'X' in the HM column.",
      "C": "A red border is not a regulatory method. HM must be identified by listing first, contrasting color, or an 'X' in the HM column.",
      "D": "The driver's name is irrelevant to HM identification. The three methods are: HM listed first, contrasting color entries, or 'X' in the HM column."
    },
    keyFact: "HM on shipping papers: listed first, OR contrasting color, OR 'X' in HM column."
  },

  // ===== DRIVER DETERMINING HM =====
  {
    id: "hazmat-055",
    category: "hazmat",
    subcategory: "shipping-papers",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "How can a driver determine whether a shipment is a hazardous material?",
    choices: [
      { key: "A", text: "Only by asking the shipper verbally" },
      { key: "B", text: "By the information on the shipping paper, by diamond-shaped labels on containers and packages, and by a marking on the container such as the hazard class" },
      { key: "C", text: "Only by the color of the container" },
      { key: "D", text: "By the weight of the shipment" }
    ],
    answer: "B",
    explanation: "There are several ways to identify a shipment of hazardous material: (1) by the information on the shipping paper; (2) by diamond-shaped labels on containers and packages; (3) by a marking on the container such as the hazard class (e.g., 'Flammable').",
    wrongExplanations: {
      "A": "While communicating with the shipper is good practice, drivers can identify HM through shipping papers, diamond-shaped labels, and hazard class markings on containers.",
      "C": "Container color alone is not a reliable identifier. Look for shipping paper information, diamond-shaped labels, and hazard class markings.",
      "D": "Weight does not determine if a shipment is HM. The three identification methods are: shipping papers, diamond-shaped labels, and container markings."
    },
    keyFact: "Identify HM by: (1) shipping papers, (2) diamond-shaped labels, (3) hazard class markings on containers."
  },

  // ===== UN/NA IDENTIFICATION NUMBERS =====
  {
    id: "hazmat-056",
    category: "hazmat",
    subcategory: "placarding",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "How can packages marked in accordance with United Nations recommendations and HM regulations be recognized?",
    choices: [
      { key: "A", text: "By their blue color" },
      { key: "B", text: "By the 'UN' symbol followed by a series of code letters and numbers providing information about the type of packaging, material, country of origin, etc." },
      { key: "C", text: "By a special stamp from the post office" },
      { key: "D", text: "By the size of the container only" }
    ],
    answer: "B",
    explanation: "Packages marked in accordance with United Nations (UN) recommendations and Hazardous Materials (HM) regulations can be identified by the 'UN' symbol which will be followed by a series of code letters and numbers providing information about the type of packaging, the material of which the package is made, the country of origin, etc.",
    wrongExplanations: {
      "A": "Color alone does not identify UN-compliant packaging. Look for the UN symbol followed by coded letters and numbers.",
      "C": "UN markings are not postal stamps. They consist of the UN symbol followed by specific codes for packaging type, material, and origin.",
      "D": "Container size is not the identifying factor. The UN symbol and associated code series provide the proper identification."
    },
    keyFact: "UN marking = 'UN' symbol + code letters/numbers for packaging type, material, and country."
  },

  // ===== MULTIPLE LABELING =====
  {
    id: "hazmat-057",
    category: "hazmat",
    subcategory: "placarding",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "What are the requirements for multiple labeling and placarding?",
    choices: [
      { key: "A", text: "Only one label per package is ever needed" },
      { key: "B", text: "Materials requiring multiple labels are identified in the HM Table; primary and subsidiary labels must be applied, and vehicles must display placards for all applicable hazard classes" },
      { key: "C", text: "Multiple labels are only used internationally" },
      { key: "D", text: "A single DANGEROUS placard replaces all individual labels" }
    ],
    answer: "B",
    explanation: "Materials which require multiple labels are identified in Section 172.101 (the Hazardous Materials Table) and Column 6 (Labels Required) which lists labeling requirements for the material. Materials subject to the 'Poison Inhalation Hazard' shipping paper description should be placarded Poison Inhalation Hazard or Poison Gas, plus placards required in Section 172.504 (any amount). Primary and subsidiary hazard labels must be applied to each package.",
    wrongExplanations: {
      "A": "Many materials require multiple labels. The HM Table specifies primary and subsidiary labels for materials with more than one hazard.",
      "C": "Multiple labeling requirements apply both domestically and internationally. The HM Table (Section 172.101) specifies when multiple labels are needed.",
      "D": "While a DANGEROUS placard may be used in some circumstances, materials with multiple hazards still require all applicable labels on packages and appropriate placards on vehicles."
    },
    keyFact: "Check HM Table Column 6 for multiple label requirements. Primary + subsidiary labels needed."
  },

  // ===== MIXED LOAD PLACARDING =====
  {
    id: "hazmat-058",
    category: "hazmat",
    subcategory: "placarding",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "How does the driver placard a vehicle that contains a mixed load of HM?",
    choices: [
      { key: "A", text: "Use only the placard for the heaviest material" },
      { key: "B", text: "There are four options depending on Table 1 vs Table 2 classes and quantities; Table 1 classes must always be placarded, and a DANGEROUS placard may be used for Table 2 materials when no single class exceeds 2,205 pounds" },
      { key: "C", text: "Use a blank white placard" },
      { key: "D", text: "No placards are needed for mixed loads" }
    ],
    answer: "B",
    explanation: "There are four ways to placard a vehicle with a mixed load of Hazardous Materials (HM): (1) If the load includes a class requiring placarding for any quantity (Table 1), that class placard must be used AND displayed for any quantity. (2) If the load includes one class for which placarding is required at the 1,001-pound level (Table 2), that class placard must be used if the aggregate gross weight on board reaches 1,001 pounds. (3) If the load includes two or more classes of materials from Table 2, and the gross weight of the combined classes is 1,001 pounds or more, either the class placard for each class or a DANGEROUS placard may be used. (4) If 2,205 pounds or more of one HM for which placarding is required at the 1,001-pound level is loaded at a single location, the class placard for that HM must be displayed in addition to any other required placards.",
    wrongExplanations: {
      "A": "Placarding is not based on heaviest material alone. Table 1 materials always need their specific placard, and Table 2 materials follow quantity-based rules.",
      "C": "A blank white placard is not a valid option. Specific hazard class placards or a DANGEROUS placard must be used according to the regulatory rules.",
      "D": "Mixed loads absolutely require placarding. The rules depend on whether materials are Table 1 or Table 2 classes and their aggregate weights."
    },
    keyFact: "Mixed loads: Table 1 always placarded. Table 2: class placard at 1,001 lbs, or DANGEROUS placard for combined. 2,205 lbs at one stop = that class placard required."
  },

  // ===== EMERGENCY RESPONSE INFO =====
  {
    id: "hazmat-059",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "Do the Hazardous Materials Regulations require motor carriers and drivers to have information available in case of an emergency involving HM?",
    choices: [
      { key: "A", text: "No, emergency services handle all HM incidents" },
      { key: "B", text: "Yes, the HM Regulations require the availability of emergency response information on vehicles transporting HM and at every facility at which HM are received, stored, or handled during transportation" },
      { key: "C", text: "Only for Class 1 Explosives" },
      { key: "D", text: "Only during nighttime transport" }
    ],
    answer: "B",
    explanation: "Yes, the Hazardous Materials (HM) Regulations require the availability of emergency response information on vehicles transporting HM and at every facility at which HM are received, stored, or handled during transportation. Note these requirements do not apply to HM that are exempt from the shipping paper requirements themselves. See 49 Code of Federal Regulations (CFR) Section 172.600.",
    wrongExplanations: {
      "A": "Carriers and drivers ARE required to have emergency response information available. This is a regulatory mandate, not optional.",
      "C": "The requirement applies to all hazardous materials shipments, not just Class 1 Explosives.",
      "D": "The requirement applies at all times during transportation, not just at night."
    },
    keyFact: "Emergency response info REQUIRED on vehicles transporting HM and at all HM facilities."
  },
  {
    id: "hazmat-060",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What emergency response information is required by the HM Regulations?",
    choices: [
      { key: "A", text: "Only the driver's phone number" },
      { key: "B", text: "Description of the material, immediate health hazards, risks of fire/explosion, precautions for accidents, fire-fighting methods, spill handling methods, and first aid measures" },
      { key: "C", text: "Only the name of the chemical" },
      { key: "D", text: "Only the hospital location nearest to the route" }
    ],
    answer: "B",
    explanation: "The following minimum emergency response information must accompany each HM shipment: (1) the description of the material as prescribed in the shipping paper; (2) any immediate health hazards; (3) risks of fire or explosion; (4) immediate precautions to be taken in case of an accident; (5) immediate methods for handling fires; (6) initial methods for handling leaks and spills when fire does not occur; and (7) preliminary first aid measures.",
    wrongExplanations: {
      "A": "A phone number alone is not sufficient. Seven categories of emergency information are required, including health hazards, fire risks, and first aid measures.",
      "C": "The name alone is inadequate. Full emergency response information includes health hazards, fire/explosion risks, precautions, firefighting methods, spill handling, and first aid.",
      "D": "Hospital locations are not the required information. The regulations specify material description, health hazards, fire risks, accident precautions, firefighting and spill methods, and first aid."
    },
    keyFact: "7 required items: material description, health hazards, fire/explosion risks, accident precautions, fire methods, spill methods, first aid."
  },

  // ===== EMERGENCY TELEPHONE NUMBERS =====
  {
    id: "hazmat-061",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "Under what circumstances might a driver have more than one emergency telephone number when transporting HM?",
    choices: [
      { key: "A", text: "Never -- only one number is needed" },
      { key: "B", text: "An emergency telephone number must be provided for each HM in a shipment or load, unless one number provides information about all the HM; each number must be shown in association with the proper shipping name of the HM" },
      { key: "C", text: "Only if traveling through more than one state" },
      { key: "D", text: "Only if the load exceeds 10,000 pounds" }
    ],
    answer: "B",
    explanation: "The Hazardous Materials (HM) Regulations provide that an emergency telephone number must be provided for each HM in a shipment or load, unless one number provides information about all of the HM in a load. Several numbers might be provided for sources of assistance for several different HM. Each number must be shown in association with the proper shipping name of the HM for which it is the source of information.",
    wrongExplanations: {
      "A": "Multiple numbers may be needed if different HM in the load require different emergency contacts. One number suffices only if it covers all HM in the load.",
      "C": "The number of states is irrelevant. Multiple numbers depend on whether one number can provide information about all HM in the load.",
      "D": "Weight is not the determining factor. Multiple numbers depend on whether a single number covers all HM types being transported."
    },
    keyFact: "One emergency number per HM type, unless one number covers ALL HM in the load."
  },
  {
    id: "hazmat-062",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "Should the driver attempt to use these emergency telephone numbers?",
    choices: [
      { key: "A", text: "No, only emergency responders should call" },
      { key: "B", text: "The driver should follow their employer's policy; in an HM emergency, contact the company, '911' or the telephone operator, the appropriate local emergency responders, and in certain circumstances, the National Response Center" },
      { key: "C", text: "Only call if there are injuries" },
      { key: "D", text: "Only call during business hours" }
    ],
    answer: "B",
    explanation: "The driver should follow their employer's policy when deciding whether to use the emergency telephone number(s). In an HM emergency, the driver should contact the company and the appropriate local emergency responders through '911' or the telephone operator. The driver should have shipping papers ready to show the emergency responders when they arrive. Under certain circumstances, immediate notification must be provided to the National Response Center (NRC) by telephone.",
    wrongExplanations: {
      "A": "Drivers should use emergency numbers per their employer's policy. In HM emergencies, drivers play a crucial role in contacting the company, 911, and potentially the NRC.",
      "C": "Emergency calls are needed for any HM incident, not just injuries. Spills, leaks, and other emergencies also require notification.",
      "D": "HM emergencies can happen at any time. The emergency telephone numbers must be available 24 hours and are not limited to business hours."
    },
    keyFact: "In HM emergency: call employer, 911, local responders. Have shipping papers ready. NRC if needed."
  },

  // ===== CHEMTREC / NRC =====
  {
    id: "hazmat-063",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "Where can information be obtained on dealing with an emergency involving HM or fuel spills?",
    choices: [
      { key: "A", text: "Only from local police" },
      { key: "B", text: "The Chemical Transportation Emergency Center (Chemtrec) can be contacted to obtain information on dealing with an emergency involving HM or fuel spills at www.chemtrec.com, or The Spill Center may be reached at (301) 982-0977" },
      { key: "C", text: "Only from the vehicle manufacturer" },
      { key: "D", text: "Only from the local fire department" }
    ],
    answer: "B",
    explanation: "The Chemical Transportation Emergency Center, known as Chemtrec, can be contacted to obtain information on dealing with an emergency involving Hazardous Materials (HM) or fuel spills. Chemtrec's website is www.chemtrec.com. Several private contractors specialize in providing HM incident compliance assistance. The Spill Center may be reached at (301) 982-0977 or www.spillcenter.com.",
    wrongExplanations: {
      "A": "While police may be contacted, specialized resources like Chemtrec (Chemical Transportation Emergency Center) provide expert HM emergency guidance.",
      "C": "Vehicle manufacturers are not the primary resource. Chemtrec and The Spill Center are dedicated HM emergency information providers.",
      "D": "Fire departments respond to emergencies but Chemtrec is the specialized resource for HM and fuel spill information and guidance."
    },
    keyFact: "Chemtrec = Chemical Transportation Emergency Center for HM/fuel spill emergencies. Spill Center: (301) 982-0977."
  },
  {
    id: "hazmat-064",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "fill",
    difficulty: 2,
    tags: ["procedure"],
    question: "The Chemical Transportation Emergency Center, which provides emergency HM spill information, is commonly known as __________.",
    acceptedAnswers: ["Chemtrec", "CHEMTREC", "chemtrec"],
    answer: "Chemtrec",
    explanation: "Chemtrec is the Chemical Transportation Emergency Center, a resource for obtaining information on dealing with emergencies involving Hazardous Materials (HM) or fuel spills. It can be reached through www.chemtrec.com.",
    keyFact: "Chemtrec = Chemical Transportation Emergency Center."
  },

  // ===== HOW EMERGENCY INFO IS MADE AVAILABLE =====
  {
    id: "hazmat-065",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "How can emergency response information be made available at the scene of a highway emergency involving HM?",
    choices: [
      { key: "A", text: "Only by calling the shipper" },
      { key: "B", text: "On the shipping papers, on a separate form such as a Safety Data Sheet (SDS), or in a separate document such as an Emergency Response Guidebook" },
      { key: "C", text: "Only on the vehicle's registration" },
      { key: "D", text: "Only through a mobile phone app" }
    ],
    answer: "B",
    explanation: "The required emergency response information may be provided: (1) on the shipping papers; (2) on a separate form such as a Safety Data Sheet (SDS) which shows the prescribed descriptions and the necessary information; (3) in a separate document such as an Emergency Response Guidebook.",
    wrongExplanations: {
      "A": "Calling the shipper is one option, but the information should already be available on shipping papers, SDS forms, or an Emergency Response Guidebook.",
      "C": "Vehicle registration does not contain emergency response information. The three sources are shipping papers, SDS forms, and Emergency Response Guidebooks.",
      "D": "While technology may help, the regulations specify shipping papers, Safety Data Sheets (SDS), and Emergency Response Guidebooks as the primary sources."
    },
    keyFact: "Emergency info sources: (1) shipping papers, (2) Safety Data Sheet (SDS), (3) Emergency Response Guidebook."
  },

  // ===== ENVIRONMENTAL FINES =====
  {
    id: "hazmat-066",
    category: "hazmat",
    subcategory: "fines",
    type: "fill",
    difficulty: 2,
    tags: ["regulation"],
    question: "The leading cause of environmental fines for motor carriers transporting HM is failure to complete timely __________ and __________ reports for fuel spills.",
    acceptedAnswers: ["telephone and written", "phone and written", "telephone/written", "telephone, written"],
    answer: "telephone and written",
    explanation: "A carrier's failure to complete timely telephone and written reports for fuel spills has resulted in fines and penalties for a significant number of carriers. Prompt reporting of spills to the appropriate authorities is critical.",
    keyFact: "Leading environmental fine = failure to report fuel spills promptly with telephone and written reports."
  },
  {
    id: "hazmat-067",
    category: "hazmat",
    subcategory: "fines",
    type: "mc",
    difficulty: 2,
    tags: ["regulation", "numbers"],
    question: "What penalty can be levied for not reporting a spill into waterways?",
    choices: [
      { key: "A", text: "$1,000 per incident" },
      { key: "B", text: "Under federal law, the maximum penalty is $25,000 per day; additionally, states and municipalities may levy separate fines" },
      { key: "C", text: "$500 per day" },
      { key: "D", text: "There is no penalty for waterway spills" }
    ],
    answer: "B",
    explanation: "Under federal law, the maximum penalty is $25,000 per day. Additionally, states and municipalities may levy separate fines for not reporting spills into waterways.",
    wrongExplanations: {
      "A": "$1,000 per incident is far less than the actual penalty. Federal law allows up to $25,000 per DAY, plus additional state and municipal fines.",
      "C": "$500 per day is far too low. The federal maximum is $25,000 per day, and states and municipalities can add their own penalties.",
      "D": "There are severe penalties. Federal fines can reach $25,000 per day, plus state and municipal fines on top of that."
    },
    keyFact: "$25,000/day federal fine for not reporting waterway spills + state/municipal fines."
  },

  // ===== DRIVER ACTIONS IN A SPILL =====
  {
    id: "hazmat-068",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What should a driver do in the event of a vehicle spill involving materials that might contaminate or otherwise damage waterways?",
    choices: [
      { key: "A", text: "Drive away from the area immediately" },
      { key: "B", text: "Attempt to protect the scene if trained to do so, call emergency responders through '911', notify the employer/company, and be alert that every area is considered to have potential access to waterways" },
      { key: "C", text: "Wait for someone else to report it" },
      { key: "D", text: "Push the spill into a ditch and continue driving" }
    ],
    answer: "B",
    explanation: "The driver should attempt to protect the scene (if trained to do so). The driver should call local emergency responders through '911' or the telephone operator, notify the employer/company and officials. Also, drivers should be aware that in many states, every area is considered to have potential access to waterways, so drivers should always notify their company of a spill, even if it appears to be insignificant for the spill to reach water.",
    wrongExplanations: {
      "A": "Driving away from a hazardous spill is illegal and irresponsible. The driver must protect the scene, call 911, and notify their company.",
      "C": "Waiting for someone else is not acceptable. The driver is responsible for immediate action: protecting the scene, calling 911, and notifying the employer.",
      "D": "Pushing a spill into a ditch could contaminate waterways. Every area is considered to have potential waterway access, so proper containment and reporting are required."
    },
    keyFact: "Spill: protect scene, call 911, notify employer. ALL areas potentially connect to waterways."
  },

  // ===== WATERWAY CONTAMINANTS =====
  {
    id: "hazmat-069",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "All petroleum products from either cargo or fuel tanks, plus hazardous substances, hazardous waste, and marine pollutants, should be considered contaminants capable of damaging waterways.",
    answer: true,
    explanation: "As far as the driver is concerned, any petroleum or all types of petroleum products from either cargo or fuel tanks and those substances as defined by government agencies as 'hazardous substances,' 'hazardous waste,' or 'marine pollutants' should be considered as contaminants capable of causing damage to waterways.",
    keyFact: "Waterway contaminants: ALL petroleum products + hazardous substances + hazardous waste + marine pollutants."
  },

  // ===== KEEPING LIQUID HM FROM WATER =====
  {
    id: "hazmat-070",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "Once liquid hazardous materials reach underground waterways, it will be virtually impossible to control the spread of the liquid and its associated hazards.",
    answer: true,
    explanation: "Once underground, it will be virtually impossible to control the spread of the liquid and any potential hazards associated with the liquid. This is why preventing liquid hazardous materials from reaching waterways is critical.",
    keyFact: "Once liquid HM goes underground or into waterways, controlling its spread is virtually impossible."
  },

  // ===== REPORTABLE QUANTITY (RQ) =====
  {
    id: "hazmat-071",
    category: "hazmat",
    subcategory: "rq",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "Where can a driver find the 'reportable quantity' (RQ) of a particular HM and what does it mean?",
    choices: [
      { key: "A", text: "In the vehicle owner's manual" },
      { key: "B", text: "In the Hazardous Substances Appendix to the Hazardous Materials Table; the RQ refers to the amount of the material in one package (not total shipment weight) that triggers reporting and regulatory requirements" },
      { key: "C", text: "On the vehicle's dashboard" },
      { key: "D", text: "It is not listed anywhere and must be memorized" }
    ],
    answer: "B",
    explanation: "A driver would refer to the Hazardous Substances Appendix to the Hazardous Materials Table to find the reportable quantity of a particular Hazardous Material (HM). The Reportable Quantity (RQ) amounts are listed in both pounds and kilograms. The weight listed refers to the amount of the material in one package, not the total weight of the shipment.",
    wrongExplanations: {
      "A": "The vehicle owner's manual does not contain RQ information. The Hazardous Substances Appendix to the HM Table provides RQ data.",
      "C": "RQ information is not on the dashboard. It is found in the Hazardous Substances Appendix to the Hazardous Materials Table.",
      "D": "RQ values are published in the Hazardous Substances Appendix. They do not need to be memorized as they vary by material."
    },
    keyFact: "RQ found in Hazardous Substances Appendix. RQ = amount in ONE package, not total shipment weight."
  },
  {
    id: "hazmat-072",
    category: "hazmat",
    subcategory: "rq",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "Are there any special package markings required to identify shipments of a hazardous substance?",
    choices: [
      { key: "A", text: "No special markings are needed" },
      { key: "B", text: "Yes, the HM Regulations require that one or both packages carry the letters 'RQ' on the package of hazardous substance shipments in association with the proper shipping name" },
      { key: "C", text: "Only a red stripe on the package" },
      { key: "D", text: "Only the weight must be displayed" }
    ],
    answer: "B",
    explanation: "Yes, the Hazardous Materials (HM) Regulations require that one or both packages carry the letters 'RQ' (Reportable Quantity) on the package of hazardous substance shipments in association with the proper shipping name.",
    wrongExplanations: {
      "A": "Special markings ARE required. Packages must carry the letters 'RQ' in association with the proper shipping name.",
      "C": "A red stripe is not the required marking. The letters 'RQ' (Reportable Quantity) must appear on the package with the proper shipping name.",
      "D": "Weight alone is insufficient. The 'RQ' marking must appear on packages of hazardous substances along with the proper shipping name."
    },
    keyFact: "RQ marking = letters 'RQ' on package with proper shipping name."
  },
  {
    id: "hazmat-073",
    category: "hazmat",
    subcategory: "rq",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "Are there any special shipping paper notations required to identify a hazardous substance?",
    choices: [
      { key: "A", text: "No notation is needed on shipping papers" },
      { key: "B", text: "Yes, the letters 'RQ' must appear on the shipping paper either before or after the basic description; when there is a column captioned 'HM,' the 'RQ' designation can replace the shipping column 'X' entry" },
      { key: "C", text: "Only the weight must be noted" },
      { key: "D", text: "Only the driver's signature is needed" }
    ],
    answer: "B",
    explanation: "Yes, the HM Regulations require that the letters 'RQ' (Reportable Quantity) appear on the shipping paper either before or after the basic description of the material substance. When there is a column on the shipping paper captioned 'HM,' the 'RQ' designation can be placed in the shipping column in place of the required 'X' entry. Examples include: RQ, UN2016 Corrosic, 6.1, II; or UN3077, Environmentally Hazardous substance, solid, n.o.s., 9, III (adipic acid), RQ.",
    wrongExplanations: {
      "A": "Notations ARE required. The letters 'RQ' must appear on shipping papers before or after the material description.",
      "C": "Weight notation alone is insufficient. The 'RQ' letters must appear on the shipping paper in association with the material description.",
      "D": "A driver's signature is not the required notation. The 'RQ' designation must appear on the shipping paper for hazardous substances."
    },
    keyFact: "RQ on shipping paper: before or after description, OR in the HM column replacing 'X'."
  },

  // ===== RAILROAD GRADE CROSSING =====
  {
    id: "hazmat-074",
    category: "hazmat",
    subcategory: "railroad-crossing",
    type: "mc",
    difficulty: 2,
    tags: ["regulation", "numbers"],
    question: "According to the FMCSRs, within what distance from a railroad grade crossing must a driver stop if the vehicle is one of those required to stop?",
    choices: [
      { key: "A", text: "Within 100 feet but not less than 25 feet" },
      { key: "B", text: "Within 50 feet but not less than 15 feet from the nearest rail of such railroad grade crossing" },
      { key: "C", text: "Within 75 feet but not less than 10 feet" },
      { key: "D", text: "Within 30 feet but not less than 5 feet" }
    ],
    answer: "B",
    explanation: "The vehicle must be brought to a full stop within 50 feet but not less than 15 feet from the nearest rail of such railroad grade crossing, as required by the Federal Motor Carrier Safety Regulations (FMCSRs).",
    wrongExplanations: {
      "A": "The correct distances are within 50 feet (not 100) and not less than 15 feet (not 25).",
      "C": "The correct distances are within 50 feet (not 75) and not less than 15 feet (not 10).",
      "D": "The correct distances are within 50 feet (not 30) and not less than 15 feet (not 5)."
    },
    keyFact: "Railroad crossing: stop within 50 feet, not less than 15 feet from nearest rail."
  },
  {
    id: "hazmat-075",
    category: "hazmat",
    subcategory: "railroad-crossing",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "Which interstate vehicles must stop at railroad grade crossings?",
    choices: [
      { key: "A", text: "Only school buses" },
      { key: "B", text: "Buses transporting passengers; vehicles transporting any quantity of chlorine; vehicles marked or placarded for HM transportation; cargo tank vehicles loaded or empty (used for HM or fuels with flashpoint at or below 200°F); and cargo tanks transporting commodities at elevated temperatures" },
      { key: "C", text: "Only vehicles over 26,000 pounds" },
      { key: "D", text: "All vehicles regardless of cargo" }
    ],
    answer: "B",
    explanation: "The following interstate vehicles must stop at railroad grade crossings: (1) buses transporting passengers; (2) vehicles transporting any quantity of chlorine; (3) vehicles marked or placarded for the transportation of Hazardous Materials (HM); (4) a cargo tank vehicle, loaded or empty, used for the transportation of HM, or for any liquid having a flashpoint at or below 200 degrees Fahrenheit; (5) cargo tank vehicles transporting any commodity which was loaded at a temperature in excess of its flashpoint; and (6) cargo tank vehicles loaded or empty transporting a Hazardous Material (HM) under the terms of a 'special permit' (formerly 'exemption') granted by the Pipeline and Hazardous Materials Safety Administration (PHMSA).",
    wrongExplanations: {
      "A": "School buses must stop, but many other vehicles must too, including HM-placarded vehicles, chlorine carriers, and cargo tanks.",
      "C": "Weight alone does not determine the requirement. The stop requirement is based on the type of vehicle and cargo, including buses, HM vehicles, and cargo tanks.",
      "D": "Not all vehicles must stop. The requirement applies to specific categories: buses with passengers, chlorine carriers, HM vehicles, and cargo tank vehicles."
    },
    keyFact: "Must stop at railroad crossings: passenger buses, chlorine carriers, HM-marked vehicles, cargo tanks (loaded or empty)."
  },

  // ===== RAILROAD CROSSING PENALTY =====
  {
    id: "hazmat-076",
    category: "hazmat",
    subcategory: "railroad-crossing",
    type: "fill",
    difficulty: 2,
    tags: ["regulation", "numbers"],
    question: "A driver who disregards grade crossing safety rules will be disqualified from operating a Commercial Motor Vehicle (CMV) for ____ days for a first conviction.",
    acceptedAnswers: ["60", "sixty", "Sixty"],
    answer: "60",
    explanation: "In addition to any other penalties under traffic laws, the driver will be disqualified from operating a Commercial Motor Vehicle (CMV) for 60 days for a first conviction of disregarding grade crossing safety rules.",
    keyFact: "Railroad crossing violation = 60-day CMV disqualification for first conviction + traffic penalties."
  },

  // ===== COMBUSTIBLE VS FLAMMABLE =====
  {
    id: "hazmat-077",
    category: "hazmat",
    subcategory: "hazard-classes",
    type: "mc",
    difficulty: 3,
    tags: ["regulation", "numbers"],
    question: "What is the difference between a 'combustible liquid' and a 'flammable liquid'?",
    choices: [
      { key: "A", text: "There is no difference" },
      { key: "B", text: "A combustible liquid has a higher flashpoint (above 60.5°C/141°F to 93°C/200°F) making it harder to ignite than a flammable liquid (at or below 60.5°C/141°F)" },
      { key: "C", text: "Combustible liquids burn faster than flammable liquids" },
      { key: "D", text: "Flammable liquids are only found in laboratories" }
    ],
    answer: "B",
    explanation: "A combustible liquid has a higher flashpoint than a flammable liquid. The distinction between the two is defined by the temperature (flashpoint) at which the vapor above the liquid surface ignites from a specified test. The upper limit for the flashpoint of flammable liquids is 141 degrees Fahrenheit (60.5 degrees Celsius). Liquids with flashpoints between 141 degrees Fahrenheit and 200 degrees Fahrenheit (93 degrees Celsius) are classified as combustible liquids. Gasoline was previously classed as a flammable liquid, and diesel fuel and kerosene were once classed as combustible liquids; all three are now legally classified as flammable liquids.",
    wrongExplanations: {
      "A": "There is a significant difference based on flashpoint temperature. Flammable liquids ignite at lower temperatures than combustible liquids.",
      "C": "Combustible liquids actually have higher flashpoints and are harder to ignite, not faster burning. Flammable liquids ignite at lower temperatures.",
      "D": "Flammable liquids are common in transportation, including gasoline, diesel fuel, and kerosene. They are not limited to laboratories."
    },
    keyFact: "Flammable: flashpoint at or below 60.5°C (141°F). Combustible: flashpoint above 141°F to 200°F (93°C)."
  },

  // ===== SMOKING PROHIBITION =====
  {
    id: "hazmat-078",
    category: "hazmat",
    subcategory: "regulations",
    type: "mc",
    difficulty: 2,
    tags: ["regulation", "numbers"],
    question: "What are the regulations governing smoking by drivers while transporting HM?",
    choices: [
      { key: "A", text: "Smoking is allowed anywhere outside the vehicle" },
      { key: "B", text: "The FMCSRs prohibit smoking within 25 feet of a vehicle transporting explosives, flammable materials (liquids, solids, gases), or oxidizers; the driver of an empty tank vehicle placarded for flammable materials is also prohibited from smoking" },
      { key: "C", text: "Smoking is allowed in the cab only" },
      { key: "D", text: "There are no smoking restrictions for HM transport" }
    ],
    answer: "B",
    explanation: "The Federal Motor Carrier Safety Regulations (FMCSRs) prohibit smoking within 25 feet of a vehicle transporting explosives, flammable materials (liquids, solids, gases), or oxidizers. In addition, the driver of an empty tank vehicle that is placarded for the transportation of flammable liquids or flammable gas is also prohibited from smoking.",
    wrongExplanations: {
      "A": "Smoking is prohibited within 25 feet of the vehicle when carrying explosives, flammables, or oxidizers -- not just anywhere outside.",
      "C": "Smoking in the cab is absolutely prohibited when transporting flammable materials, explosives, or oxidizers. No smoking within 25 feet of the vehicle.",
      "D": "There are strict smoking restrictions. No smoking within 25 feet of vehicles with explosives, flammables, or oxidizers -- even empty placarded tanks."
    },
    keyFact: "No smoking within 25 feet of vehicle with explosives, flammables, or oxidizers. Includes EMPTY placarded tanks."
  },

  // ===== TANK ROLLOVER =====
  {
    id: "hazmat-079",
    category: "hazmat",
    subcategory: "tank-operations",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "Which creates the greatest fire hazard -- a tank vehicle lying on its side or a tank vehicle that has rolled over 180 degrees?",
    choices: [
      { key: "A", text: "A tank on its side is more dangerous" },
      { key: "B", text: "A tank upside down (180 degrees) poses a greater risk because the driver may be buried, the tank's pressure relief valves cannot function properly, and the tank's internal pressure increases with heat" },
      { key: "C", text: "Both are equally dangerous" },
      { key: "D", text: "Neither situation creates a fire hazard" }
    ],
    answer: "B",
    explanation: "A tank truck that has rolled over 180 degrees and is lying upside down poses a greater risk than a tank truck on its side because the pressure relief valves in a tank on its side may be buried or held shut, thereby restricting their ability to relieve the tank's internal pressure (which would increase with heat).",
    wrongExplanations: {
      "A": "A tank on its side is dangerous but less so. An upside-down tank (180 degrees) is worse because pressure relief valves are buried and cannot function.",
      "C": "They are not equally dangerous. An upside-down tank is worse because pressure relief valves are blocked, internal pressure builds with heat, and fire risk increases.",
      "D": "Both situations create fire hazards, but the 180-degree rollover is worse due to non-functional pressure relief valves."
    },
    keyFact: "180-degree rollover = worst. Pressure relief valves buried, cannot relieve pressure, increasing fire/explosion risk."
  },

  // ===== WATER ON TRUCK FIRE =====
  {
    id: "hazmat-080",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "When can the use of water on a truck fire make things worse?",
    choices: [
      { key: "A", text: "Water never makes a fire worse" },
      { key: "B", text: "A driver should not use water on cargoes that react chemically with water, or on specific flammable or combustible liquids which float on or are repelled by water" },
      { key: "C", text: "Only when the fire is electrical" },
      { key: "D", text: "Water always works on every type of fire" }
    ],
    answer: "B",
    explanation: "A driver should not use water on cargoes that react chemically with water, or on specific flammable or combustible liquids which float on or are repelled by water. A professional driver should be aware of the appropriate method of extinguishing a fire for any given load to be hauled.",
    wrongExplanations: {
      "A": "Water can definitely make fires worse, especially with materials that react with water (such as Division 4.3 Dangerous When Wet) or flammable liquids that float on water.",
      "C": "Electrical fires are one concern, but more critically, water should never be used on cargoes that react chemically with water or on flammable/combustible liquids that float on water.",
      "D": "Water is dangerous on water-reactive materials and flammable liquids. Drivers must know the appropriate extinguishing method for their specific cargo."
    },
    keyFact: "NO water on: water-reactive cargoes or flammable/combustible liquids that float on water."
  },

  // ===== FIRE NEAR TANK UNLOADING =====
  {
    id: "hazmat-081",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "If fire ignites near the point where flammable liquids are being unloaded from a cargo tank, what should the professional driver do?",
    choices: [
      { key: "A", text: "Continue unloading to empty the tank faster" },
      { key: "B", text: "If fire ignites near the tank's unloading point, the professional driver should first try to stop the flow of fuel by use of shut-off mechanisms or remote control devices" },
      { key: "C", text: "Run away immediately" },
      { key: "D", text: "Pour water on the fire" }
    ],
    answer: "B",
    explanation: "If fire ignites near a cargo tank's unloading point, the professional driver should first try to stop the flow of fuel by use of shut-off mechanisms or remote control devices.",
    wrongExplanations: {
      "A": "Continuing to unload would feed the fire with more flammable fuel. The first priority is to stop the fuel flow using shut-off mechanisms.",
      "C": "While personal safety is important, the trained professional driver should first attempt to stop the fuel flow using available shut-off mechanisms and remote controls.",
      "D": "Water may not be appropriate for flammable liquid fires. The priority is to stop the fuel flow using shut-off mechanisms or remote control devices."
    },
    keyFact: "Fire at unloading point: FIRST stop fuel flow using shut-off mechanisms or remote control."
  },

  // ===== FIRE ON MANHOLE COVER =====
  {
    id: "hazmat-082",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "Closing the manhole cover on a cargo tank will often extinguish a fire at the manhole opening.",
    answer: true,
    explanation: "Closing the manhole cover will often extinguish the fire at the manhole opening of a cargo tank by cutting off the oxygen supply to the fire.",
    keyFact: "Close manhole cover = cuts off oxygen = extinguishes fire at opening."
  },

  // ===== SPILLS AND CARRIERS =====
  {
    id: "hazmat-083",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "Spills are only a problem for tank truck carriers; other types of carriers have no responsibility for spill reporting.",
    answer: false,
    explanation: "Spills are not only a problem for tank truck carriers. Any spill from trailers, railcars, freight containers, pressurized fuel tanks, or damaged concrete liners is reportable. In addition, spills during refueling of a vehicle may be reportable. All types of carriers have the same responsibilities under the law.",
    keyFact: "ALL carriers are responsible for spill reporting -- not just tank trucks."
  },
  {
    id: "hazmat-084",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "A spill that runs off directly into a nearby stream, or seeps through soil to an underground stream, is considered reportable.",
    answer: true,
    explanation: "Does a spill have to be going directly into a stream in order to be reportable? No. A spill into a roadside ditch could flow into a nearby stream by run-off or seeping through its soil to an underground stream. A spill onto a roadside could flow into a storm drain or catch basin. Remember, that in some areas, all spills are reportable. All spills are considered to have potential access to a waterway.",
    keyFact: "ALL spills are potentially reportable -- run-off, seepage, storm drains all count."
  },

  // ===== HAZARDOUS SUBSTANCE VS HAZARDOUS MATERIAL =====
  {
    id: "hazmat-085",
    category: "hazmat",
    subcategory: "rq",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "How does a hazardous substance differ from a hazardous material?",
    choices: [
      { key: "A", text: "They are exactly the same thing" },
      { key: "B", text: "There are many materials listed in both the HM Table and Hazardous Substances Appendix; to be considered a hazardous substance, the amount in one package must equal or exceed the Reportable Quantity (RQ) for that material" },
      { key: "C", text: "Hazardous substances are always more dangerous" },
      { key: "D", text: "Hazardous materials are liquids and hazardous substances are solids" }
    ],
    answer: "B",
    explanation: "There are many materials that are listed in both the Hazardous Materials (HM) Table and Hazardous Substances Appendix. However, in order to be considered a hazardous substance, the amount in one package must equal or exceed the Reportable Quantity (RQ) listed for that material. If it does not equal the RQ, the material remains regulated as an HM but not as a hazardous substance.",
    wrongExplanations: {
      "A": "They are not the same. A hazardous substance specifically means the amount in one package equals or exceeds the Reportable Quantity (RQ).",
      "C": "Hazardous substances are not necessarily more dangerous. The distinction is about quantity -- when a single package equals or exceeds the RQ.",
      "D": "The distinction is not about physical state. It is about whether the quantity in one package meets or exceeds the RQ for that material."
    },
    keyFact: "Hazardous substance = HM where one package amount >= RQ. Below RQ = just HM, not hazardous substance."
  },

  // ===== DRIVER DO'S AND DON'TS FOR GAS =====
  {
    id: "hazmat-086",
    category: "hazmat",
    subcategory: "safety",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What are the 'Do's and Don'ts' that will help prevent gas poisoning?",
    choices: [
      { key: "A", text: "Keep windows closed at all times" },
      { key: "B", text: "Do not breathe gas even briefly, do not use a handkerchief as a gas mask, do not start an engine in a closed garage, know the location of gas meters, do not obstruct ventilators, do not let liquid boil over, use flashlights for leak detection, use only high-grade tubing, and do not burn gas in a room where anyone is sleeping" },
      { key: "C", text: "Always keep a candle lit to detect gas" },
      { key: "D", text: "Use your nose to detect all gas leaks" }
    ],
    answer: "B",
    explanation: "To help prevent gas poisoning, one should: not knowingly breathe gas even for a short time; protect oneself with a mask; know that a handkerchief is not a gas mask; not start a motor vehicle engine in a closed garage; know the location of the gas meter and not obstruct or cut advice from safety officials; not let liquid boil over and extinguish all or part of gas range; never ignore apparent odors; use a flashlight and soap suds to locate gas leaks; not use metal tubing to connect gas heaters, etc.; use only high-grade flexible tubing and inspect frequently; and not burn gas in a room where anyone is sleeping.",
    wrongExplanations: {
      "A": "Keeping windows closed can trap gas and worsen poisoning. Proper ventilation is critical for gas safety.",
      "C": "NEVER use an open flame (candle) to detect gas! Use a flashlight and soap suds to locate gas leaks.",
      "D": "While odor can alert you to some gases, nitrogen and other dangerous gases have no smell. Use proper detection methods, not just your nose."
    },
    keyFact: "Gas safety: no breathing gas, no handkerchief masks, no engines in closed garages, use flashlights not flames for leak detection."
  },

  // ===== FIRST AID FOR GAS OVERCOME =====
  {
    id: "hazmat-087",
    category: "hazmat",
    subcategory: "safety",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What are the first steps in administering first aid to anyone who may have been overcome by gas?",
    choices: [
      { key: "A", text: "Give them water to drink immediately" },
      { key: "B", text: "If it appears someone has been overcome by gas, first take steps to avoid inhaling the gas yourself, then ventilate the room, remove everyone from the area, and seek emergency medical assistance" },
      { key: "C", text: "Slap them on the back to help them breathe" },
      { key: "D", text: "Cover their face with a damp cloth" }
    ],
    answer: "B",
    explanation: "If it appears someone has been overcome by gas, the first aid provider should take steps to first avoid inhaling the gas yourself, then ventilate the same types (doors and windows), remove everyone from the area of gas exposure, and seek emergency medical assistance.",
    wrongExplanations: {
      "A": "Giving water is not the first priority. First, protect yourself from the gas, ventilate the area, remove the victim, and call for medical help.",
      "C": "Slapping is not helpful. The correct steps are: protect yourself, ventilate the area, remove the victim from exposure, and seek emergency medical assistance.",
      "D": "A damp cloth is not a gas mask. Protect yourself first, then ventilate, remove the victim from the gas exposure area, and call for medical help."
    },
    keyFact: "Gas first aid: (1) protect yourself, (2) ventilate, (3) remove victim, (4) seek medical help."
  },

  // ===== FIRST AID - EYE BURNS =====
  {
    id: "hazmat-088",
    category: "hazmat",
    subcategory: "safety",
    type: "fill",
    difficulty: 2,
    tags: ["procedure", "numbers"],
    question: "For chemical burns of the eye, hold the eyelid open and flush continuously with cool running water for ____ minutes, then cover with dry dressings.",
    acceptedAnswers: ["15", "fifteen", "Fifteen"],
    answer: "15",
    explanation: "To treat chemical burns of the eye, one should hold the eyelid open and flush the eye continuously with cool running water for 15 minutes, cover the eye with dry dressings, and get medical aid immediately. If only one eye is affected, flush that eye outward from the inside corner to minimize the risk of getting the chemical into the uninjured eye.",
    keyFact: "Chemical eye burn: hold lid open, flush with cool water for 15 minutes, cover with dry dressings, get medical aid."
  },

  // ===== FIRST AID - BODY CHEMICAL BURNS =====
  {
    id: "hazmat-089",
    category: "hazmat",
    subcategory: "safety",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What is the first aid treatment for chemical burns of the body?",
    choices: [
      { key: "A", text: "Apply butter or grease to the burn" },
      { key: "B", text: "Wash away the chemical with large amounts of water; for acid burns, flush with water and apply baking soda solution; for alkali burns, rinse and flush with water and weak acid (vinegar); remove contaminated clothing" },
      { key: "C", text: "Cover the burn with a dry cloth immediately" },
      { key: "D", text: "Apply ice directly to the burn" }
    ],
    answer: "B",
    explanation: "To treat chemical burns, one should wash away the chemical with large amounts of water. For acid burns, flush face/skin and dry, then thoroughly wash with cool running water for 30 minutes, remove loose particles with sterile gauze, do not irrigate with acids or alkali solutions, cover with dry compresses, and get medical aid immediately. For alkali burns, a person who has been exposed to acid should remove contaminated clothing and rinse themselves immediately and thoroughly with water for no less than 15 minutes.",
    wrongExplanations: {
      "A": "Never apply butter or grease to chemical burns. Flush with large amounts of water to wash away the chemical.",
      "C": "Covering with a dry cloth traps the chemical. First wash the chemical away with large amounts of water, then cover with dry compresses.",
      "D": "Ice is not the correct treatment. Flush with large amounts of water to remove the chemical, and follow specific acid/alkali treatment protocols."
    },
    keyFact: "Chemical body burn: wash with lots of water, remove contaminated clothing, specific treatment for acid vs. alkali burns."
  },

  // ===== ACID EXPOSURE =====
  {
    id: "hazmat-090",
    category: "hazmat",
    subcategory: "safety",
    type: "fill",
    difficulty: 2,
    tags: ["procedure", "numbers"],
    question: "A person exposed to acid while loading or unloading should remove contaminated clothing and rinse with water for no less than ____ minutes.",
    acceptedAnswers: ["15", "fifteen", "Fifteen"],
    answer: "15",
    explanation: "A person who has been exposed to acid should remove contaminated clothing and rinse themselves immediately and thoroughly with water for no less than 15 minutes. This should be done immediately without waiting to call a supervisor or apply other treatments.",
    keyFact: "Acid exposure: remove clothing + rinse with water for at least 15 minutes immediately."
  },

  // ===== TRUCK FIRE SERIOUSNESS =====
  {
    id: "hazmat-091",
    category: "hazmat",
    subcategory: "tank-operations",
    type: "fill",
    difficulty: 2,
    tags: ["procedure"],
    question: "The three types of cargo most likely to increase the seriousness of a truck fire are explosives, __________, and organic peroxides.",
    acceptedAnswers: ["oxidizers", "Oxidizers", "oxidizer", "Oxidizer"],
    answer: "oxidizers",
    explanation: "Explosives, oxidizers, and organic peroxides are most likely to increase the seriousness of a truck fire. Oxidizers provide additional oxygen that feeds combustion, making fires burn more intensely.",
    keyFact: "Explosives + oxidizers + organic peroxides = most likely to increase truck fire seriousness."
  },

  // ===== SAFETY EQUIPMENT =====
  {
    id: "hazmat-092",
    category: "hazmat",
    subcategory: "safety",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What type of safety equipment should be used in loading and unloading HM?",
    choices: [
      { key: "A", text: "Regular work clothes are sufficient" },
      { key: "B", text: "For acids or caustic/corrosive chemicals: face shield, rubber gauntlets, complete rubberized suit, and rubber boots; for weak acids: carbonate, phosphate, and acetic agents; specific procedures per Safety Data Sheet (SDS)" },
      { key: "C", text: "Only gloves are needed" },
      { key: "D", text: "A hard hat is the only requirement" }
    ],
    answer: "B",
    explanation: "For acids or other caustic or corrosive chemicals, a face shield, rubber gauntlets, complete rubberized suit, and rubber boots, and for alkali hazards, use appropriate protections. For weak acids such as carbonate, phosphate, and acetic agents are generally considered adequate. Specific procedures are set forth in the Safety Data Sheet (SDS) warning labels.",
    wrongExplanations: {
      "A": "Regular work clothes provide no protection against hazardous materials. Specific protective equipment is required based on the material type.",
      "C": "Gloves alone are insufficient. Full protective equipment including face shields, rubberized suits, and boots may be required depending on the material.",
      "D": "A hard hat alone does not protect against chemical exposure. Full protective equipment as specified in the Safety Data Sheet (SDS) is required."
    },
    keyFact: "Acid/corrosive PPE: face shield + rubber gauntlets + full rubberized suit + rubber boots. Check SDS for specifics."
  },

  // ===== KNOWING HOW TO HANDLE HM =====
  {
    id: "hazmat-093",
    category: "hazmat",
    subcategory: "regulations",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "The FMCSRs require that any vehicle transporting HM must have instructions for all HM on board, and these instructions must cover what to do in case of fire or an emergency.",
    answer: true,
    explanation: "The Federal Motor Carrier Safety Regulations (FMCSRs) require that any vehicle transporting Hazardous Materials (HM) must have emergency response instructions on board for all HM in the shipment. These instructions must cover what to do in case of fire, in any event the driver should compare properly with respect to a hazardous emergency and should take no action that endangers the driver's personal safety.",
    keyFact: "FMCSRs require HM emergency instructions on board covering fire and emergency procedures."
  },

  // ===== PROFESSIONAL DRIVER FIRE ACTION =====
  {
    id: "hazmat-094",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What action should the professional driver take if the HM on fire is a type that should not be quenched by water?",
    choices: [
      { key: "A", text: "Use water anyway" },
      { key: "B", text: "The professional driver should specifically advise emergency responders of the presence of the HM and warn them not to use water" },
      { key: "C", text: "Leave the scene without telling anyone" },
      { key: "D", text: "Try to smother the fire with dirt" }
    ],
    answer: "B",
    explanation: "The professional driver should specifically advise emergency responders of the presence of the Hazardous Materials (HM) and warn them not to use water on materials that react dangerously with water.",
    wrongExplanations: {
      "A": "Using water on water-reactive materials can cause violent reactions, explosions, or the release of toxic gases. The driver must warn responders.",
      "C": "Leaving without informing responders is dangerous and irresponsible. The driver must advise them about the HM and warn against using water.",
      "D": "The correct action is to inform emergency responders about the specific HM hazards so they can use the appropriate firefighting method."
    },
    keyFact: "If HM is water-reactive: WARN emergency responders not to use water."
  },

  // ===== ELEVATED TEMPERATURE MATERIAL =====
  {
    id: "hazmat-095",
    category: "hazmat",
    subcategory: "regulations",
    type: "mc",
    difficulty: 3,
    tags: ["regulation", "numbers"],
    question: "Other than flashpoint, how does temperature apply to the classification of HM?",
    choices: [
      { key: "A", text: "Temperature is not relevant to HM classification" },
      { key: "B", text: "Temperature may result in a material transported in bulk packaging being classed as an 'elevated temperature material': a liquid at or above 100°C (212°F), a liquid with flashpoint at or above 37.8°C (100°F) that is heated and transported at or above its flashpoint, or a solid at or above 240°C (464°F)" },
      { key: "C", text: "Only frozen materials have temperature classifications" },
      { key: "D", text: "Temperature only matters for Class 7 Radioactive materials" }
    ],
    answer: "B",
    explanation: "Temperature may result in a material transported in a bulk packaging being classed as an 'elevated temperature material' when that material is: (1) a liquid transported at a temperature at or above 100 degrees Celsius (212 degrees Fahrenheit); (2) a liquid with a flashpoint at or above 37.8 degrees Celsius (100 degrees Fahrenheit) that is intentionally heated and transported at or above its flashpoint; or (3) a solid transported at or above 240 degrees Celsius (464 degrees Fahrenheit).",
    wrongExplanations: {
      "A": "Temperature is very relevant. Materials transported above certain temperature thresholds are classified as 'elevated temperature materials' with specific regulatory requirements.",
      "C": "The classification relates to heated materials, not frozen ones. Liquids at or above 100°C and solids at or above 240°C are elevated temperature materials.",
      "D": "Temperature classifications apply broadly, not just to Class 7. Elevated temperature material classification applies to any liquid or solid exceeding the specified thresholds."
    },
    keyFact: "Elevated temp material: liquid >= 100°C (212°F), liquid heated above flashpoint (if >= 37.8°C), or solid >= 240°C (464°F)."
  },

  // ===== IDENTIFICATION NUMBER FOR ELEVATED TEMP =====
  {
    id: "hazmat-096",
    category: "hazmat",
    subcategory: "placarding",
    type: "tf",
    difficulty: 3,
    tags: ["regulation"],
    question: "The UN identification number 3257 will be displayed when a vehicle is transporting an elevated temperature material and the word 'HOT' may also appear.",
    answer: true,
    explanation: "In many cases, the United Nations (UN) identification number 3257 will be displayed when a vehicle is transporting an elevated temperature material. If the number is displayed on the square-on-point marking, the word 'HOT' may also appear at the top portion of the marking. If the vehicle is transporting a material whose marking includes 'molten aluminum' or 'molten sulfur,' those words must be displayed on the vehicle.",
    keyFact: "Elevated temp material: UN 3257 + may display word 'HOT'."
  },

  // ===== CONTAINERS FOR HM =====
  {
    id: "hazmat-097",
    category: "hazmat",
    subcategory: "regulations",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "Federal regulations govern cylinders and other containers in which hazardous materials are transported, including detailed specifications for the construction of cylinders, cargo tanks, and bulk containers.",
    answer: true,
    explanation: "Yes, in addition to performance testing requirements for most non-bulk packaging and intermediate bulk containers, the Hazardous Materials (HM) Regulations provide detailed specifications for the construction of cylinders and bulk containers, such as cargo tanks, as well as lashing requirements to ensure cylinders are not damaged during transport.",
    keyFact: "Federal regulations specify construction standards for HM containers: cylinders, cargo tanks, and bulk containers."
  },

  // ===== WHAT DRIVER CHECKS BEFORE ACCEPTING =====
  {
    id: "hazmat-098",
    category: "hazmat",
    subcategory: "driver-duties",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What are the general duties of a driver when handling a hazardous material shipment?",
    choices: [
      { key: "A", text: "Only drive the vehicle from point A to point B" },
      { key: "B", text: "Check the shipping paper for proper preparation, check labels/classifications against the shipping paper, check each package for leaking, reject incompatible HM shipments, ensure packages are properly blocked and braced, and ensure proper placarding" },
      { key: "C", text: "Only check the fuel level and tire pressure" },
      { key: "D", text: "Only verify the destination address" }
    ],
    answer: "B",
    explanation: "There are detailed Hazardous Materials (HM) Regulations and company rules the driver should be familiar with: (1) check the shipping paper to be sure it is properly prepared; (2) check the labels on the container to see that they agree with the class(es) shown on the shipping paper; (3) check each package or container for leaking or other visible damage; (4) not load HM if it is incompatible with other HM shipments or with food stuffs already on the vehicle; (5) ensure that packages are properly blocked and braced to prevent shifting and relative motion between packages; and (6) ensure the vehicle is properly placarded, with additional driver requirements found in Part 397 of the Federal Motor Carrier Safety Regulations (FMCSRs).",
    wrongExplanations: {
      "A": "A HM driver has extensive responsibilities beyond just driving, including verifying shipping papers, checking labels, inspecting packages, and ensuring proper placarding.",
      "C": "Fuel and tire checks are general duties. HM drivers must additionally check shipping papers, labels, packages for leaks, cargo compatibility, blocking/bracing, and placarding.",
      "D": "Destination is just one piece of information. The driver must verify shipping papers, labels, package integrity, cargo compatibility, and proper placarding."
    },
    keyFact: "Driver HM duties: check papers, verify labels, inspect packages for leaks, reject incompatible loads, block/brace, verify placards."
  },

  // ===== SPECIAL CARE WHEN HANDLING HM =====
  {
    id: "hazmat-099",
    category: "hazmat",
    subcategory: "driver-duties",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What special care must be taken by the driver when handling HM?",
    choices: [
      { key: "A", text: "No special care is required beyond normal cargo handling" },
      { key: "B", text: "Make certain there is no smoking while loading/unloading HM; do not drop, jar, or bump packages; handle containers of HM with care using proper handling aids; use warning signs like 'This End Down' or 'This Side Up'; take care to ensure HM will not be wetted; and load HM so labels are visible" },
      { key: "C", text: "Only wear gloves" },
      { key: "D", text: "Only check for leaks" }
    ],
    answer: "B",
    explanation: "When handling Hazardous Materials (HM), the driver should: (1) make certain there is no smoking while loading/unloading HM; (2) not drop, jar, or bump packages or containers; (3) handle containers of HM with care when using hoisting aids; (4) comply with orientation signs such as 'This End Down' or 'This Side Up' and obey the orientation arrows; (5) take special care to ensure that the HM will not be wetted against movement, will not tip over, and labels will not be obscured; (6) always try to load HM so that labels are visible to anyone handling the cargo after the driver will be able to recognize the nature of the cargo.",
    wrongExplanations: {
      "A": "HM requires extensive special care including no smoking, careful handling, following orientation signs, protecting from moisture, and ensuring label visibility.",
      "C": "Gloves are just one element. Special HM handling includes no smoking, no dropping/jarring, following orientation signs, moisture protection, and label visibility.",
      "D": "Checking for leaks is important but only one aspect. The full list includes no smoking, careful handling, orientation compliance, moisture protection, and label visibility."
    },
    keyFact: "HM care: no smoking, no dropping/jarring, follow orientation signs, protect from water, keep labels visible."
  },

  // ===== CARGO TANK DRIVER CHECKS BEFORE UNLOADING =====
  {
    id: "hazmat-100",
    category: "hazmat",
    subcategory: "driver-duties",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What checks should the driver of a cargo tank vehicle make before unloading?",
    choices: [
      { key: "A", text: "Only check that the hose is connected" },
      { key: "B", text: "In addition to all normal checks, ensure the unloading hose on the tank truck vehicle is connected to the proper fill pipe of the particular storage tank, and that the storage tank has sufficient capacity to accept the quantity of cargo" },
      { key: "C", text: "Only check the weather conditions" },
      { key: "D", text: "No pre-unloading checks are required" }
    ],
    answer: "B",
    explanation: "In addition to all normal checks before unloading, the driver should be sure that the unloading hose on the tank truck vehicle is connected to the proper fill pipe of the particular storage tank being filled. The driver should also be sure that the storage tank has sufficient capacity to accept the quantity of cargo being unloaded.",
    wrongExplanations: {
      "A": "Checking the hose connection is important but insufficient. The driver must also verify it connects to the CORRECT fill pipe and that the storage tank has enough capacity.",
      "C": "Weather conditions may be a consideration, but the critical pre-unloading checks are verifying the correct fill pipe connection and storage tank capacity.",
      "D": "Pre-unloading checks are absolutely required to prevent connecting to the wrong tank or overfilling, both of which can cause catastrophic incidents."
    },
    keyFact: "Before unloading: verify correct fill pipe + verify storage tank has sufficient capacity."
  },

  // ===== FMCSR FUEL TANKER LOADING =====
  {
    id: "hazmat-101",
    category: "hazmat",
    subcategory: "regulations",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "The FMCSRs require that a driver must be in attendance during the loading of a fuel tanker.",
    answer: true,
    explanation: "A driver must be in attendance during the loading of a fuel tanker. The vehicle is required to be placarded for the transportation of Hazardous Materials (HM) as required by the Federal Motor Carrier Safety Regulations (FMCSRs). Leaving the vehicle unattended during loading is a violation.",
    keyFact: "Driver MUST be in attendance when fuel tanker is being loaded. Vehicle must be properly placarded."
  },

  // ===== WHAT SHOULD DRIVER DO IF LIQUID HM LEAKING =====
  {
    id: "hazmat-102",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What should professional drivers do if they learn that their liquid HM shipment is leaking?",
    choices: [
      { key: "A", text: "Continue to the destination and report it upon arrival" },
      { key: "B", text: "If liquid HM is leaking, the professional driver should try to stop the leak at the source if safe to do so, make every effort to keep the leakage from reaching waterways, dig a ditch to attempt to trap the liquid if possible" },
      { key: "C", text: "Speed up to reach the destination faster" },
      { key: "D", text: "Ignore the leak if it is small" }
    ],
    answer: "B",
    explanation: "If liquid Hazardous Material (HM) is leaking, the professional driver should try to get the load off the truck as soon as possible and make every effort to keep the leakage from reaching waterways. If the leak cannot be stopped, the driver should dig a ditch to attempt to trap the liquid, if possible, and call for assistance.",
    wrongExplanations: {
      "A": "Continuing to drive with a leaking HM shipment is dangerous and can result in widespread contamination. Immediate action is required.",
      "C": "Speeding with a leaking HM load increases danger. The driver must stop, contain the leak, and prevent it from reaching waterways.",
      "D": "No HM leak should be ignored regardless of size. The driver must attempt to stop the leak and prevent waterway contamination."
    },
    keyFact: "Leaking HM: stop leak at source, prevent waterway contamination, dig a ditch to trap liquid, call for help."
  },

  // ===== SPECIFICATION CARGO TANK USAGE =====
  {
    id: "hazmat-103",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "When must a Specification Cargo Tank be used?",
    choices: [
      { key: "A", text: "Only for international shipments" },
      { key: "B", text: "The HM Regulations require that drivers must use Specification Cargo Tanks on most interstate or intrastate shipments of HM liquids and Class 9 materials, though non-specification tanks are allowed for some domestic commerce" },
      { key: "C", text: "Only for Class 1 Explosives" },
      { key: "D", text: "Specification Cargo Tanks are never required" }
    ],
    answer: "B",
    explanation: "The Hazardous Materials Regulations (HMR) require that drivers must use Specification Cargo Tanks on most interstate or intrastate shipments of Hazardous Materials (HM) liquids and Class 9 materials. However, some materials are allowed to be transported in non-specification tanks in domestic commerce.",
    wrongExplanations: {
      "A": "Specification Cargo Tanks are required for most domestic (interstate and intrastate) HM shipments, not just international ones.",
      "C": "The requirement covers HM liquids and Class 9 materials broadly, not just Class 1 Explosives.",
      "D": "Specification Cargo Tanks ARE required for most HM liquid and Class 9 material shipments by the HMR."
    },
    keyFact: "Specification Cargo Tanks required for most interstate/intrastate HM liquid and Class 9 shipments."
  },

  // ===== INCOMPATIBLE TRANSPORT =====
  {
    id: "hazmat-104",
    category: "hazmat",
    subcategory: "placarding",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "All hazard classes of HM may be safely transported together in the same vehicle as long as they are properly placarded.",
    answer: false,
    explanation: "This is false. Because of the danger involved, certain classes of Hazardous Materials (HM) cannot be transported together in the same vehicle regardless of placarding. If a driver is not familiar with these segregation restrictions, the driver should contact their supervisor before loading different classes of HM in one vehicle.",
    keyFact: "Some HM classes CANNOT be transported together. Driver must know restrictions or ask supervisor."
  },

  // ===== ADDITIONAL TF QUESTIONS =====
  {
    id: "hazmat-105",
    category: "hazmat",
    subcategory: "hazard-classes",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "Class 2 in the hazard classification system is designated for Gases, with Division 2.1 being Flammable Gas, Division 2.2 being Non-Flammable Gas, and Division 2.3 being Poison Gas.",
    answer: true,
    explanation: "Class 2 covers Gases with three divisions: Division 2.1 is Flammable Gas, Division 2.2 is Non-Flammable Gas, and Division 2.3 is Poison Gas.",
    keyFact: "Class 2: Div 2.1 = Flammable Gas, Div 2.2 = Non-Flammable Gas, Div 2.3 = Poison Gas."
  },
  {
    id: "hazmat-106",
    category: "hazmat",
    subcategory: "hazard-classes",
    type: "fill",
    difficulty: 2,
    tags: ["regulation"],
    question: "Hazard Class 7 is designated as __________ Material.",
    acceptedAnswers: ["Radioactive", "radioactive", "RADIOACTIVE"],
    answer: "Radioactive",
    explanation: "Hazard Class 7 is Radioactive Material. This class covers materials that emit ionizing radiation and have specific placarding and handling requirements.",
    keyFact: "Class 7 = Radioactive Material."
  },
  {
    id: "hazmat-107",
    category: "hazmat",
    subcategory: "hazard-classes",
    type: "fill",
    difficulty: 2,
    tags: ["regulation"],
    question: "Division 4.3 in the hazard classification system is designated as 'Dangerous When ____'.",
    acceptedAnswers: ["Wet", "wet", "WET"],
    answer: "Wet",
    explanation: "Division 4.3 is classified as 'Dangerous When Wet.' This division covers materials that, in contact with water, are liable to become spontaneously flammable or give off flammable or toxic gas. Division 4.3 is a Table 1 class requiring placarding for any quantity.",
    keyFact: "Division 4.3 = Dangerous When Wet (Table 1 -- any quantity placarding)."
  },

  // ===== ADDITIONAL FILL-IN QUESTIONS =====
  {
    id: "hazmat-108",
    category: "hazmat",
    subcategory: "endorsement",
    type: "fill",
    difficulty: 2,
    tags: ["regulation"],
    question: "The background check for a Hazardous Materials Endorsement (HME) is conducted by the ____ (abbreviation for the federal security agency).",
    acceptedAnswers: ["TSA", "tsa"],
    answer: "TSA",
    explanation: "The Transportation Security Administration (TSA) conducts the background check for the Hazardous Materials Endorsement (HME). The TSA may also notify the driver's employer and provide threat assessment information to law enforcement agencies.",
    keyFact: "TSA (Transportation Security Administration) conducts the HME background check."
  },
  {
    id: "hazmat-109",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "fill",
    difficulty: 2,
    tags: ["numbers"],
    question: "The maximum federal penalty for not reporting a spill into waterways is $________ per day.",
    acceptedAnswers: ["25,000", "25000", "$25,000", "$25000"],
    answer: "25,000",
    explanation: "Under federal law, the maximum penalty for not reporting a spill into waterways is $25,000 per day. Additionally, states and municipalities may levy separate fines on top of this federal penalty.",
    keyFact: "$25,000 per day federal fine for unreported waterway spills."
  },
  {
    id: "hazmat-110",
    category: "hazmat",
    subcategory: "railroad-crossing",
    type: "fill",
    difficulty: 2,
    tags: ["numbers"],
    question: "When stopping at a railroad grade crossing, the vehicle must stop within ____ feet but not less than ____ feet from the nearest rail.",
    acceptedAnswers: ["50/15", "50 / 15", "50 and 15"],
    answer: "50/15",
    explanation: "According to the Federal Motor Carrier Safety Regulations (FMCSRs), the vehicle must be brought to a full stop within 50 feet but not less than 15 feet from the nearest rail of the railroad grade crossing.",
    keyFact: "Railroad stop: within 50 feet, not less than 15 feet."
  },

  // ===== ADDITIONAL MC QUESTIONS =====
  {
    id: "hazmat-111",
    category: "hazmat",
    subcategory: "placarding",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "When the identification number of HM is required on the exterior of a vehicle transporting non-bulk packages, where must it be visible?",
    choices: [
      { key: "A", text: "Only on the cab" },
      { key: "B", text: "On each side and each end of the vehicle; if 4,520 pounds or more of a single HM is loaded at one stop with no other material on the vehicle, or 2,205 pounds or more of a Poison Inhalation Hazard material, the vehicle must be marked with the identification number" },
      { key: "C", text: "Only on the shipping papers" },
      { key: "D", text: "It is not required for non-bulk packages" }
    ],
    answer: "B",
    explanation: "The identification number of a Hazardous Material (HM) must be visible on each side and each end of a vehicle when 4,520 pounds or more of a single HM is loaded at one stop and there is no other material on the vehicle, or when 2,205 pounds or more of a Poison Inhalation Hazard material is shipped to either Hazard Zone A or B. For different materials in the same Hazard Zone, the vehicle should be marked with the identification number for the material with the highest weight.",
    wrongExplanations: {
      "A": "The ID number must be on each side and each end of the vehicle, not just the cab.",
      "C": "The shipping paper contains the ID number, but it must also be displayed on the vehicle exterior when threshold quantities are met.",
      "D": "ID number display IS required for non-bulk packages when specific weight thresholds are met (4,520 lbs or 2,205 lbs for PIH)."
    },
    keyFact: "Non-bulk ID display: 4,520+ lbs single HM at one stop, or 2,205+ lbs PIH. Show on all sides and ends."
  },
  {
    id: "hazmat-112",
    category: "hazmat",
    subcategory: "shipping-papers",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "What requirements govern the shipping papers used to transport HM?",
    choices: [
      { key: "A", text: "Any standard invoice is sufficient" },
      { key: "B", text: "Shipping paper descriptions must begin with the UN or NA identification number, proper shipping name of the commodity, hazard class entered in parentheses following the proper shipping name (or a combination such as 'Flammable liquid and a subsidiary hazard'), and the packing group" },
      { key: "C", text: "Only the destination and weight are needed" },
      { key: "D", text: "The driver creates the shipping paper at the loading site" }
    ],
    answer: "B",
    explanation: "Shipping paper descriptions must begin with the United Nations (UN) or North American (NA) identification number, proper shipping name of the commodity as specified in the Hazardous Materials Table, hazard class entered in parentheses following the proper shipping name, and the packing group (I, II, or III). The number and types of packaging must also be listed. The shipper's certification indicating compliance with the Hazardous Materials Regulations must also be included.",
    wrongExplanations: {
      "A": "A standard invoice is not sufficient. HM shipping papers require specific UN/NA ID numbers, proper shipping names, hazard classes, and packing groups.",
      "C": "Destination and weight are not enough. The regulations require UN/NA ID numbers, proper shipping names, hazard classes, packing groups, and shipper certification.",
      "D": "The shipper, not the driver, prepares the shipping papers. The driver's responsibility is to verify the papers are correct before accepting the load."
    },
    keyFact: "HM shipping papers require: UN/NA ID number + proper shipping name + hazard class + packing group + shipper certification."
  },

  // ===== ADDITIONAL QUESTIONS =====
  {
    id: "hazmat-113",
    category: "hazmat",
    subcategory: "shipping-papers",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "What additional information is required by the U.S. DOT to be on the shipping paper to help identify HM loads?",
    choices: [
      { key: "A", text: "Only the driver's license number" },
      { key: "B", text: "The identification number prescribed for HM including the prefix UN or NA, the proper shipping name of the commodity, the numerical class or division, the packing group, and the shipper's certification of compliance with HM Regulations" },
      { key: "C", text: "Only the vehicle registration number" },
      { key: "D", text: "Only the name of the loading dock worker" }
    ],
    answer: "B",
    explanation: "In addition to standard information, the following is required by the U.S. Department of Transportation (DOT) to be on the shipping paper to help identify Hazardous Materials (HM) loads: (1) the identification number prescribed for HM including the prefix UN or NA (North America) as specified; (2) the proper shipping name of the commodity as specified in the Table of Hazardous Materials; (3) the numerical class or division number such as (3) for 'Flammable Liquid,' (8) for 'Corrosive Material,' and (5.1) for 'Oxidizer'; (4) the packing group of the HM, shown in Roman numerals, such as PGI, PGII, and PGIII; and (5) the shipper's certification indicating that the shipment is in compliance with the Hazardous Materials Regulations.",
    wrongExplanations: {
      "A": "The driver's license number is not required on HM shipping papers. The required information includes UN/NA prefix, shipping name, class/division, packing group, and shipper's certification.",
      "C": "Vehicle registration is not required on HM shipping papers. The DOT requires specific HM identification including UN/NA numbers, proper shipping names, and hazard classifications.",
      "D": "The loading dock worker's name is not required. HM shipping papers need UN/NA identification, proper shipping name, hazard class, packing group, and shipper certification."
    },
    keyFact: "DOT required on papers: UN/NA prefix + shipping name + class/division number + packing group (Roman numeral) + shipper certification."
  },
  {
    id: "hazmat-114",
    category: "hazmat",
    subcategory: "placarding",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "Is there a requirement for an identification number or other special identification on a vehicle transporting an elevated temperature material?",
    choices: [
      { key: "A", text: "No special identification is needed" },
      { key: "B", text: "Yes, the UN identification number 3257 will be displayed when a vehicle is transporting an elevated temperature material; the word 'HOT' may also appear on the marking" },
      { key: "C", text: "Only a red flag is needed" },
      { key: "D", text: "Only a flashing yellow light is needed" }
    ],
    answer: "B",
    explanation: "In many cases, the United Nations (UN) identification number 3257 will be displayed when a vehicle is transporting an elevated temperature material. If the number is displayed on the square-on-point marking, the word 'HOT' may also appear at the top portion of the marking.",
    wrongExplanations: {
      "A": "Special identification IS required. The UN number 3257 and potentially the word 'HOT' must be displayed for elevated temperature materials.",
      "C": "A red flag is not the required marking. The UN identification number 3257 and potentially the word 'HOT' are required.",
      "D": "A flashing light is not the requirement. The proper marking is the UN number 3257 displayed per regulations, with the word 'HOT' as applicable."
    },
    keyFact: "Elevated temp: UN 3257 + word 'HOT' on square-on-point marking."
  },
  {
    id: "hazmat-115",
    category: "hazmat",
    subcategory: "placarding",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "What should a driver know about shipments when there are two labels on a package or container?",
    choices: [
      { key: "A", text: "The second label is always optional" },
      { key: "B", text: "Several specific HM require multiple labels listed in the Hazardous Materials Regulations; if a single packaging contains materials of more than one hazard class, primary and subsidiary labels must be applied, and the shipper's description must note the primary hazard class" },
      { key: "C", text: "Only the larger label matters" },
      { key: "D", text: "Two labels means the shipment is refused" }
    ],
    answer: "B",
    explanation: "Several specific Hazardous Materials (HM) require multiple labels and are so listed in the Hazardous Materials Regulations. In other cases, if a material meets the definition of two specified HM classes, it is required to be labeled for each. Primary and subsidiary labels must be applied. If a single packaging contains materials of more than one hazard class, a label for each class must be affixed to the outer package. In these cases, the driver must check the shipping paper to ascertain the primary hazard class for the purpose of placarding the transport vehicle.",
    wrongExplanations: {
      "A": "The second label is NOT optional. When a material has multiple hazards, both primary and subsidiary labels are required by regulation.",
      "C": "Both labels are important. The primary label indicates the main hazard for placarding purposes, and the subsidiary label indicates additional hazards.",
      "D": "Two labels do not mean the shipment is refused. Many HM legitimately require multiple labels for different hazard classes."
    },
    keyFact: "Multiple labels = multiple hazards. Both primary and subsidiary labels required. Check shipping paper for primary hazard class."
  },
  {
    id: "hazmat-116",
    category: "hazmat",
    subcategory: "emergency-response",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "An emergency telephone number must be available at all times while HM is being transported, and the number must connect to someone who can provide detailed information about the HM.",
    answer: true,
    explanation: "The Hazardous Materials (HM) Regulations require that an emergency telephone number must be on the shipping paper and must be available at all times. The number must be for the shipper or a designated agent or person and must be available while the HM is in transportation. The person answering must be knowledgeable about the HM being shipped and able to provide comprehensive emergency information.",
    keyFact: "Emergency phone number must be available 24/7 during transport, answered by someone knowledgeable about the HM."
  },
  {
    id: "hazmat-117",
    category: "hazmat",
    subcategory: "safety",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "A driver can use an emergency flare (flame-producing device) as a warning signal when transporting flammable materials.",
    answer: false,
    explanation: "It is forbidden to use any flame-producing emergency signal such as a flare when transporting flammable materials. Flame-producing signals could ignite flammable vapors. Non-flame devices such as reflective triangles should be used instead.",
    keyFact: "NEVER use flares/flame-producing signals when transporting flammables. Use reflective triangles."
  },
  {
    id: "hazmat-118",
    category: "hazmat",
    subcategory: "cargo-tanks",
    type: "fill",
    difficulty: 3,
    tags: ["numbers"],
    question: "Outage for flammable liquids is generally from ____% to ____% of the total tank volume.",
    acceptedAnswers: ["1/3", "1 to 3", "1-3", "1% to 3%"],
    answer: "1/3",
    explanation: "Outage for flammable liquids is generally from 1% to 3% of the total tank volume. This unfilled space is essential to allow for thermal expansion of the liquid during transportation and prevent spillage or tank rupture.",
    keyFact: "Outage = 1% to 3% of total volume for flammable liquids."
  },
  {
    id: "hazmat-119",
    category: "hazmat",
    subcategory: "regulations",
    type: "fill",
    difficulty: 2,
    tags: ["numbers"],
    question: "The FMCSRs prohibit smoking within ____ feet of a vehicle transporting explosives, flammable materials, or oxidizers.",
    acceptedAnswers: ["25", "twenty-five", "twenty five"],
    answer: "25",
    explanation: "The Federal Motor Carrier Safety Regulations (FMCSRs) prohibit smoking within 25 feet of a vehicle transporting explosives, flammable materials (liquids, solids, gases), or oxidizers. This applies to both loaded and empty placarded tank vehicles.",
    keyFact: "25-foot no-smoking zone around vehicles with explosives, flammables, or oxidizers."
  },
  {
    id: "hazmat-120",
    category: "hazmat",
    subcategory: "railroad-crossing",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "An empty cargo tank vehicle that was previously used to transport flammable liquids must stop at railroad grade crossings.",
    answer: true,
    explanation: "A cargo tank vehicle, loaded OR empty, that is used for the transportation of Hazardous Materials (HM) or for any liquid having a flashpoint at or below 200 degrees Fahrenheit must stop at railroad grade crossings. This applies to empty tanks that have not been purged.",
    keyFact: "EMPTY cargo tanks used for HM/flammables MUST stop at railroad crossings."
  },
];
