const TDC = window.TDC || {};
window.TDC = TDC;

TDC.QuestionsSafety = [
  // ============================================================
  // PROFESSIONAL DRIVER QUALITIES (pages 52-53)
  // ============================================================
  {
    id: "safety-001",
    category: "safety",
    subcategory: "driver-qualifications",
    type: "mc",
    difficulty: 1,
    tags: ["qualifications"],
    question: "Which of the following is NOT one of the five qualities of a professional truck driver?",
    choices: [
      { key: "A", text: "Is physically, mentally, and emotionally in control on the job" },
      { key: "B", text: "Has a sound grasp of safe driving techniques" },
      { key: "C", text: "Has at least 5 years of over-the-road driving experience" },
      { key: "D", text: "Is conscientious, compliant, courteous, and puts safety first" }
    ],
    answer: "C",
    explanation: "The five qualities of a professional driver are: (1) Is physically, mentally, and emotionally in control on the job; (2) Is well-informed about the driver's motor vehicle, the highway, and traffic law; (3) Has a sound grasp of safe driving techniques; (4) Has sufficient experience to have formed good driving habits and skills; (5) Is conscientious, compliant, courteous, and puts safety first. Years of experience is not a listed quality.",
    wrongExplanations: {
      "A": "This IS one of the five qualities - physical, mental, and emotional control on the job.",
      "B": "This IS one of the five qualities - a sound grasp of safe driving techniques.",
      "D": "This IS one of the five qualities - being conscientious, compliant, courteous, and safety-first."
    },
    keyFact: "The 5 qualities focus on control, knowledge, technique, experience/habits, and conscientiousness."
  },
  {
    id: "safety-002",
    category: "safety",
    subcategory: "driver-qualifications",
    type: "tf",
    difficulty: 1,
    tags: ["qualifications"],
    question: "One of the five qualities of a professional truck driver is being well-informed about the driver's motor vehicle, the highway, and traffic law.",
    answer: true,
    explanation: "This is the second of the five qualities of a professional truck driver as listed in the Facts for Drivers safety section.",
    keyFact: "Professional drivers must know their vehicle, the highway, and traffic law."
  },
  {
    id: "safety-003",
    category: "safety",
    subcategory: "driver-qualifications",
    type: "mc",
    difficulty: 1,
    tags: ["qualifications"],
    question: "A professional driver is one who has sufficient experience to have formed:",
    choices: [
      { key: "A", text: "Financial savings for retirement" },
      { key: "B", text: "Good driving habits and skills" },
      { key: "C", text: "Relationships with dispatchers" },
      { key: "D", text: "Mechanical repair knowledge" }
    ],
    answer: "B",
    explanation: "One of the five professional driver qualities is having sufficient experience to have formed good driving habits and skills.",
    wrongExplanations: {
      "A": "Financial savings is not one of the five professional driver qualities.",
      "C": "Dispatcher relationships, while useful, are not one of the five professional driver qualities.",
      "D": "Mechanical repair knowledge, while helpful, is not one of the five professional driver qualities."
    },
    keyFact: "Experience should result in good driving habits and skills."
  },

  // ============================================================
  // FACTORS WHEN OPERATING A VEHICLE (page 52)
  // ============================================================
  {
    id: "safety-004",
    category: "safety",
    subcategory: "vehicle-operation",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "Which of the following factors should a driver take into consideration when operating a vehicle?",
    choices: [
      { key: "A", text: "The condition of the vehicle, road conditions, weather, and the driver's mental and physical condition" },
      { key: "B", text: "Only the condition of the vehicle and the weather" },
      { key: "C", text: "Only road conditions and speed limits" },
      { key: "D", text: "Only the driver's mental and physical condition" }
    ],
    answer: "A",
    explanation: "A driver should always take into consideration: (1) The condition of the vehicle; (2) The types of roads and road conditions; (3) Light and weather conditions; (4) The driver's own mental and physical condition.",
    wrongExplanations: {
      "B": "This is incomplete - drivers must also consider road conditions and their own mental and physical condition.",
      "C": "This is incomplete - drivers must also consider vehicle condition, weather, and their own condition.",
      "D": "This is incomplete - drivers must also consider the vehicle condition, road conditions, and weather."
    },
    keyFact: "Four factors: vehicle condition, road conditions, weather/light, and driver condition."
  },

  // ============================================================
  // CDL CLASSES (page 52)
  // ============================================================
  {
    id: "safety-005",
    category: "safety",
    subcategory: "cdl-classes",
    type: "mc",
    difficulty: 2,
    tags: ["numbers", "regulation"],
    question: "A Class A CDL (Commercial Driver's License) is required for which type of vehicle?",
    choices: [
      { key: "A", text: "Any single vehicle with a GVWR of 26,001 or more pounds" },
      { key: "B", text: "Any combination of vehicles with a GCWR of 26,001 or more pounds, provided the GVWR of the vehicle(s) being towed is in excess of 10,000 pounds" },
      { key: "C", text: "Any vehicle designed to transport 16 or more passengers" },
      { key: "D", text: "Any vehicle transporting hazardous materials" }
    ],
    answer: "B",
    explanation: "Class A CDL (Commercial Driver's License) covers any combination of vehicles with a GCWR (Gross Combined Weight Rating) of 26,001 or more pounds, provided the GVWR (Gross Vehicle Weight Rating) of the vehicle(s) being towed is in excess of 10,000 pounds.",
    wrongExplanations: {
      "A": "A single vehicle with a GVWR of 26,001 or more pounds requires a Class B CDL, not Class A.",
      "C": "Vehicles designed to transport 16 or more passengers fall under Class C CDL.",
      "D": "Transporting hazardous materials falls under Class C CDL endorsements."
    },
    keyFact: "Class A = combination vehicles, 26,001+ GCWR, towed vehicle over 10,000 lbs."
  },
  {
    id: "safety-006",
    category: "safety",
    subcategory: "cdl-classes",
    type: "mc",
    difficulty: 2,
    tags: ["numbers", "regulation"],
    question: "A Class B CDL (Commercial Driver's License) is required for:",
    choices: [
      { key: "A", text: "Any combination of vehicles with a GCWR of 26,001 or more pounds" },
      { key: "B", text: "Any single vehicle with a GVWR of 26,001 or more pounds, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR" },
      { key: "C", text: "Vehicles designed to transport 16 or more passengers" },
      { key: "D", text: "Only vehicles transporting hazardous materials" }
    ],
    answer: "B",
    explanation: "Class B CDL (Commercial Driver's License) covers any single vehicle with a GVWR (Gross Vehicle Weight Rating) of 26,001 or more pounds, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.",
    wrongExplanations: {
      "A": "Combination vehicles with a GCWR of 26,001+ pounds where towed vehicle exceeds 10,000 lbs require a Class A CDL.",
      "C": "Vehicles designed to transport 16 or more passengers that do not meet Class A or B definitions fall under Class C CDL.",
      "D": "Hazardous materials transport falls under Class C CDL endorsements."
    },
    keyFact: "Class B = single vehicle 26,001+ GVWR, or towing under 10,000 lbs."
  },
  {
    id: "safety-007",
    category: "safety",
    subcategory: "cdl-classes",
    type: "mc",
    difficulty: 2,
    tags: ["numbers", "regulation"],
    question: "A Class C CDL (Commercial Driver's License) covers which of the following?",
    choices: [
      { key: "A", text: "Any combination of vehicles with a GCWR of 26,001+ pounds" },
      { key: "B", text: "Any single vehicle with a GVWR of 26,001+ pounds" },
      { key: "C", text: "Any vehicle designed to transport 16 or more passengers, or transporting hazardous materials" },
      { key: "D", text: "Any vehicle with air brakes" }
    ],
    answer: "C",
    explanation: "Class C CDL (Commercial Driver's License) covers any single vehicle, or combination of vehicles, that does not meet the definition of Class A or Class B, but is either designed to transport 16 or more passengers (including the driver), or is transporting material that has been designated as hazardous under 49 U.S.C. 5103.",
    wrongExplanations: {
      "A": "Combination vehicles 26,001+ GCWR with towed vehicle over 10,000 lbs require Class A.",
      "B": "Single vehicles 26,001+ GVWR require Class B.",
      "D": "Air brakes are not a determining factor for CDL class; they require a separate endorsement."
    },
    keyFact: "Class C = 16+ passengers or hazmat, not meeting Class A or B definitions."
  },
  {
    id: "safety-008",
    category: "safety",
    subcategory: "cdl-classes",
    type: "fill",
    difficulty: 3,
    tags: ["numbers"],
    question: "The GVWR threshold for both Class A combination vehicles and Class B single vehicles is ______ pounds.",
    acceptedAnswers: ["26,001", "26001", "26,001 pounds", "26001 pounds"],
    answer: "26,001",
    explanation: "Both Class A (combination) and Class B (single vehicle) CDL (Commercial Driver's License) classifications use 26,001 pounds as the GVWR (Gross Vehicle Weight Rating) or GCWR (Gross Combined Weight Rating) threshold.",
    keyFact: "26,001 pounds is the key weight threshold for Class A and Class B CDLs."
  },

  // ============================================================
  // FMCSR PARTS (pages 52-53)
  // ============================================================
  {
    id: "safety-009",
    category: "safety",
    subcategory: "fmcsr-knowledge",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "Which FMCSR (Federal Motor Carrier Safety Regulations) part covers Controlled Substances and Alcohol Use and Testing?",
    choices: [
      { key: "A", text: "Part 383" },
      { key: "B", text: "Part 382" },
      { key: "C", text: "Part 391" },
      { key: "D", text: "Part 395" }
    ],
    answer: "B",
    explanation: "FMCSR (Federal Motor Carrier Safety Regulations) Part 382 covers Controlled Substances and Alcohol Use and Testing for CMV (Commercial Motor Vehicle) drivers.",
    wrongExplanations: {
      "A": "Part 383 covers Commercial Driver's License Standards, Requirements, and Penalties.",
      "C": "Part 391 covers Qualifications of Drivers.",
      "D": "Part 395 covers Hours of Service of Drivers."
    },
    keyFact: "Part 382 = Drug & Alcohol testing."
  },
  {
    id: "safety-010",
    category: "safety",
    subcategory: "fmcsr-knowledge",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "FMCSR (Federal Motor Carrier Safety Regulations) Part 383 covers which topic?",
    choices: [
      { key: "A", text: "Controlled Substances and Alcohol Use and Testing" },
      { key: "B", text: "Hours of Service of Drivers" },
      { key: "C", text: "Commercial Driver's License Standards, Requirements, and Penalties" },
      { key: "D", text: "Driving of Commercial Motor Vehicles" }
    ],
    answer: "C",
    explanation: "FMCSR (Federal Motor Carrier Safety Regulations) Part 383 covers Commercial Driver's License (CDL) Standards, Requirements, and Penalties.",
    wrongExplanations: {
      "A": "Controlled Substances and Alcohol Use and Testing is covered by Part 382.",
      "B": "Hours of Service of Drivers is covered by Part 395.",
      "D": "Driving of Commercial Motor Vehicles is covered by Part 392."
    },
    keyFact: "Part 383 = CDL Standards, Requirements, and Penalties."
  },
  {
    id: "safety-011",
    category: "safety",
    subcategory: "fmcsr-knowledge",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "Which FMCSR (Federal Motor Carrier Safety Regulations) part addresses Qualifications of Drivers?",
    choices: [
      { key: "A", text: "Part 392" },
      { key: "B", text: "Part 393" },
      { key: "C", text: "Part 391" },
      { key: "D", text: "Part 395" }
    ],
    answer: "C",
    explanation: "FMCSR (Federal Motor Carrier Safety Regulations) Part 391 covers Qualifications of Drivers, including medical certificate requirements and driver disqualifications.",
    wrongExplanations: {
      "A": "Part 392 covers Driving of Commercial Motor Vehicles.",
      "B": "Part 393 covers Parts and Accessories Necessary for Safe Operation.",
      "D": "Part 395 covers Hours of Service of Drivers."
    },
    keyFact: "Part 391 = Driver Qualifications."
  },
  {
    id: "safety-012",
    category: "safety",
    subcategory: "fmcsr-knowledge",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "FMCSR (Federal Motor Carrier Safety Regulations) Part 395 covers:",
    choices: [
      { key: "A", text: "Parts and Accessories Necessary for Safe Operation" },
      { key: "B", text: "Hours of Service of Drivers" },
      { key: "C", text: "Inspection, Repair, and Maintenance" },
      { key: "D", text: "Qualifications of Drivers" }
    ],
    answer: "B",
    explanation: "FMCSR (Federal Motor Carrier Safety Regulations) Part 395 covers Hours of Service (HOS) of Drivers, which regulates driving time and required rest periods.",
    wrongExplanations: {
      "A": "Parts and Accessories Necessary for Safe Operation is covered by Part 393.",
      "C": "Inspection, Repair, and Maintenance is covered by Part 396.",
      "D": "Qualifications of Drivers is covered by Part 391."
    },
    keyFact: "Part 395 = Hours of Service (HOS)."
  },
  {
    id: "safety-013",
    category: "safety",
    subcategory: "fmcsr-knowledge",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "Which FMCSR (Federal Motor Carrier Safety Regulations) part covers Transportation of Hazardous Materials, Driving and Parking Rules?",
    choices: [
      { key: "A", text: "Part 393" },
      { key: "B", text: "Part 396" },
      { key: "C", text: "Part 397" },
      { key: "D", text: "Part 392" }
    ],
    answer: "C",
    explanation: "FMCSR (Federal Motor Carrier Safety Regulations) Part 397 covers Transportation of Hazardous Materials; Driving and Parking Rules (if hauling hazardous materials).",
    wrongExplanations: {
      "A": "Part 393 covers Parts and Accessories Necessary for Safe Operation.",
      "B": "Part 396 covers Inspection, Repair, and Maintenance.",
      "D": "Part 392 covers Driving of Commercial Motor Vehicles."
    },
    keyFact: "Part 397 = Hazmat Driving and Parking Rules."
  },
  {
    id: "safety-014",
    category: "safety",
    subcategory: "fmcsr-knowledge",
    type: "fill",
    difficulty: 3,
    tags: ["regulation"],
    question: "FMCSR Part ______ covers Inspection, Repair, and Maintenance of commercial motor vehicles.",
    acceptedAnswers: ["396", "Part 396"],
    answer: "396",
    explanation: "FMCSR (Federal Motor Carrier Safety Regulations) Part 396 covers Inspection, Repair, and Maintenance of CMVs (Commercial Motor Vehicles).",
    keyFact: "Part 396 = Inspection, Repair, and Maintenance."
  },
  {
    id: "safety-015",
    category: "safety",
    subcategory: "fmcsr-knowledge",
    type: "fill",
    difficulty: 3,
    tags: ["regulation"],
    question: "FMCSR Part ______ covers Driving of Commercial Motor Vehicles.",
    acceptedAnswers: ["392", "Part 392"],
    answer: "392",
    explanation: "FMCSR (Federal Motor Carrier Safety Regulations) Part 392 covers Driving of Commercial Motor Vehicles (CMVs).",
    keyFact: "Part 392 = Driving of CMVs."
  },
  {
    id: "safety-016",
    category: "safety",
    subcategory: "fmcsr-knowledge",
    type: "fill",
    difficulty: 3,
    tags: ["regulation"],
    question: "FMCSR Part ______ covers Parts and Accessories Necessary for Safe Operation.",
    acceptedAnswers: ["393", "Part 393"],
    answer: "393",
    explanation: "FMCSR (Federal Motor Carrier Safety Regulations) Part 393 covers Parts and Accessories Necessary for Safe Operation of CMVs (Commercial Motor Vehicles).",
    keyFact: "Part 393 = Parts and Accessories for Safe Operation."
  },

  // ============================================================
  // DROWSINESS AND FATIGUE (pages 53-54)
  // ============================================================
  {
    id: "safety-017",
    category: "safety",
    subcategory: "drowsiness",
    type: "tf",
    difficulty: 1,
    tags: ["procedure"],
    question: "An interstate driver may be dispatched while ill or fatigued.",
    answer: false,
    explanation: "A driver may not drive or operate a vehicle in interstate commerce while the driver's ability or alertness is impaired by illness, fatigue, or any other cause that may make it unsafe to drive (Section 392.3).",
    keyFact: "Never drive while ill, fatigued, or otherwise impaired."
  },
  {
    id: "safety-018",
    category: "safety",
    subcategory: "drowsiness",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What are signs of drowsiness?",
    choices: [
      { key: "A", text: "Eyes close involuntarily, head nods, yawning excessively" },
      { key: "B", text: "Increased alertness and faster reaction times" },
      { key: "C", text: "Improved concentration and awareness" },
      { key: "D", text: "Feeling energized and wide awake" }
    ],
    answer: "A",
    explanation: "There are several indicators of drowsiness. A person's eyes close involuntarily, their head nods, or they yawn excessively. If driving, a drowsy person may have difficulty staying in their lane, might not remember driving the last few miles, and may miss an exit.",
    wrongExplanations: {
      "B": "Increased alertness and faster reaction times are the opposite of drowsiness symptoms.",
      "C": "Improved concentration is not a sign of drowsiness; drowsy drivers have difficulty concentrating.",
      "D": "Feeling energized is the opposite of drowsiness."
    },
    keyFact: "Drowsiness signs: eyes closing, head nodding, yawning, drifting lanes, missing exits."
  },
  {
    id: "safety-019",
    category: "safety",
    subcategory: "drowsiness",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What should drivers do when they become drowsy while on the road?",
    choices: [
      { key: "A", text: "Turn up the radio and keep driving" },
      { key: "B", text: "Stop in a safe place, take a short nap or get out and walk around the vehicle" },
      { key: "C", text: "Drink coffee and continue driving" },
      { key: "D", text: "Open the window and increase speed" }
    ],
    answer: "B",
    explanation: "If drowsy, the driver should stop in a safe place -- such as a truck stop or rest area -- and take a short nap or get out and walk around the vehicle a couple of times (if it is safe to do so). While looking for a safe place to nap, the driver should open the window to get fresh air into the cab.",
    wrongExplanations: {
      "A": "Simply turning up the radio is not an effective countermeasure for drowsiness.",
      "C": "Coffee alone is not a reliable solution; the driver should stop and rest.",
      "D": "Opening the window may be a temporary measure while finding a safe place, but increasing speed is dangerous when drowsy."
    },
    keyFact: "Stop, nap, or walk around -- do not try to push through drowsiness."
  },

  // ============================================================
  // ON-DUTY TIME / HOURS OF SERVICE (pages 53-54)
  // ============================================================
  {
    id: "safety-020",
    category: "safety",
    subcategory: "hours-of-service",
    type: "mc",
    difficulty: 2,
    tags: ["regulation", "numbers"],
    question: "According to the FMCSR (Federal Motor Carrier Safety Regulations), what is meant by 'on duty' or 'on-duty time'?",
    choices: [
      { key: "A", text: "Only time spent driving a CMV" },
      { key: "B", text: "All time from when the driver begins to work or is required to be in readiness to work until released from work" },
      { key: "C", text: "Only time spent loading and unloading cargo" },
      { key: "D", text: "Only time spent at a terminal or facility" }
    ],
    answer: "B",
    explanation: "Per FMCSR (Federal Motor Carrier Safety Regulations) Part 395, 'on duty' means all time from when the driver begins to work or is required to be in readiness to work until the time the driver is relieved from work and all responsibility for performing work. On-duty time includes all time at a plant, terminal, facility, or other property of a motor carrier, driving time, loading/unloading, inspecting, fueling, and more.",
    wrongExplanations: {
      "A": "Driving time is only one component of on-duty time; it includes all work-related activities.",
      "C": "Loading and unloading is only one component of on-duty time.",
      "D": "Terminal time is only one component of on-duty time."
    },
    keyFact: "On-duty = ALL time from start of work or readiness to work until relieved."
  },
  {
    id: "safety-021",
    category: "safety",
    subcategory: "hours-of-service",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "Time spent resting in a sleeper berth is considered on-duty time.",
    answer: false,
    explanation: "Time spent resting in a sleeper berth is NOT considered on-duty time per FMCSR (Federal Motor Carrier Safety Regulations) Part 395. The on-duty definition specifically excludes rest time in a sleeper berth.",
    keyFact: "Sleeper berth rest time is OFF-duty time."
  },
  {
    id: "safety-022",
    category: "safety",
    subcategory: "hours-of-service",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "Which of the following IS included in on-duty time?",
    choices: [
      { key: "A", text: "Resting in the sleeper berth" },
      { key: "B", text: "Time spent inspecting, servicing, or conditioning any CMV at any time" },
      { key: "C", text: "Personal time off at a hotel" },
      { key: "D", text: "Vacation time" }
    ],
    answer: "B",
    explanation: "On-duty time includes all time inspecting, servicing, or conditioning any CMV (Commercial Motor Vehicle) at any time, per FMCSR (Federal Motor Carrier Safety Regulations) Part 395. This applies whether or not the driver is being paid for this time.",
    wrongExplanations: {
      "A": "Resting in the sleeper berth is specifically excluded from on-duty time.",
      "C": "Personal time off at a hotel is not on-duty time.",
      "D": "Vacation time is not on-duty time."
    },
    keyFact: "Inspecting/servicing any CMV at any time counts as on-duty."
  },
  {
    id: "safety-023",
    category: "safety",
    subcategory: "hours-of-service",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "Time spent loading or unloading a vehicle, supervising or assisting in loading or unloading, attending a CMV being loaded or unloaded, or remaining in readiness to operate the CMV counts as on-duty time.",
    answer: true,
    explanation: "Per FMCSR (Federal Motor Carrier Safety Regulations) Part 395, all time spent loading or unloading a CMV (Commercial Motor Vehicle), supervising or assisting in the loading or unloading, attending a CMV being loaded or unloaded, remaining in readiness to operate the CMV, or giving or receiving receipts for shipments loaded or unloaded counts as on-duty time.",
    keyFact: "All loading/unloading activities and readiness time = on-duty."
  },
  {
    id: "safety-024",
    category: "safety",
    subcategory: "hours-of-service",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "Time spent providing a breath sample or urine specimen for required testing counts as on-duty time.",
    answer: true,
    explanation: "Per FMCSR (Federal Motor Carrier Safety Regulations) Part 395, all time spent providing a breath sample or urine specimen, including travel time to and from the collection site, in order to comply with random, reasonable suspicion, post-accident, or follow-up testing required by Part 382 is considered on-duty time.",
    keyFact: "Drug/alcohol testing time, including travel to the site, = on-duty."
  },
  {
    id: "safety-025",
    category: "safety",
    subcategory: "hours-of-service",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "Next to compliance, what is the driver's most important responsibility with respect to the Hours of Service regulations?",
    choices: [
      { key: "A", text: "Maximizing driving miles per day" },
      { key: "B", text: "Getting proper rest during off-duty time" },
      { key: "C", text: "Keeping the truck fueled" },
      { key: "D", text: "Communicating with dispatch regularly" }
    ],
    answer: "B",
    explanation: "Next to compliance, the driver's most important responsibility with respect to the Hours of Service (HOS) regulations is that the driver get rest during their off-duty period regardless of the time of day. It is vitally important that the driver get rest during their off-duty period.",
    wrongExplanations: {
      "A": "Maximizing miles is not the purpose of HOS rules; safety through adequate rest is.",
      "C": "Keeping the truck fueled is important but not the most important HOS responsibility after compliance.",
      "D": "Communication with dispatch is important but secondary to getting proper rest."
    },
    keyFact: "After compliance, the #1 HOS priority is getting proper rest during off-duty time."
  },

  // ============================================================
  // DRIVING AS ON-DUTY TIME (page 54)
  // ============================================================
  {
    id: "safety-026",
    category: "safety",
    subcategory: "hours-of-service",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "All driving time as defined in the term 'driving time' is considered on-duty time.",
    answer: true,
    explanation: "Per FMCSR (Federal Motor Carrier Safety Regulations) Part 395, all driving as defined in the term 'driving time' for all time at the driving controls of a CMV (Commercial Motor Vehicle) in operation is included in on-duty time.",
    keyFact: "All driving time at the controls of a CMV = on-duty."
  },
  {
    id: "safety-027",
    category: "safety",
    subcategory: "hours-of-service",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "Time spent repairing, obtaining assistance, or remaining in attendance upon a disabled CMV counts as on-duty time.",
    answer: true,
    explanation: "Per FMCSR (Federal Motor Carrier Safety Regulations) Part 395, all time repairing, obtaining assistance, or remaining in attendance upon a disabled CMV (Commercial Motor Vehicle) is considered on-duty time.",
    keyFact: "Disabled vehicle time (repair, waiting, attending) = on-duty."
  },

  // ============================================================
  // MEDICAL CERTIFICATES (page 55)
  // ============================================================
  {
    id: "safety-028",
    category: "safety",
    subcategory: "medical-certificates",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What paper must the interstate driver have in their possession when on duty?",
    choices: [
      { key: "A", text: "Only a valid CDL" },
      { key: "B", text: "A Commercial Driver's License and log for the current day plus previous seven days" },
      { key: "C", text: "Only a medical certificate" },
      { key: "D", text: "Only proof of insurance" }
    ],
    answer: "B",
    explanation: "When on duty, the interstate driver must have their Commercial Driver's License (CDL) and log for the current day plus previous seven days. If hazardous materials are being transported, the driver must have documents showing what is in the load and meeting the requirements for placarding.",
    wrongExplanations: {
      "A": "A CDL alone is not sufficient; drivers must also carry their logbook records.",
      "C": "While medical certification is required, drivers must have their CDL and log records.",
      "D": "Proof of insurance alone is not sufficient."
    },
    keyFact: "On duty: must carry CDL + log for current day plus 7 previous days."
  },
  {
    id: "safety-029",
    category: "safety",
    subcategory: "medical-certificates",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "May a motor carrier require a more rigid physical examination than what is required by FMCSA (Federal Motor Carrier Safety Administration) safety regulations?",
    choices: [
      { key: "A", text: "No, the FMCSA standards are the only ones allowed" },
      { key: "B", text: "Yes, motor carriers may require an additional or more rigid examination" },
      { key: "C", text: "Only if the driver has a pre-existing condition" },
      { key: "D", text: "Only for hazardous materials drivers" }
    ],
    answer: "B",
    explanation: "Yes, motor carriers may require an additional or more rigid physical examination than what is required by FMCSA (Federal Motor Carrier Safety Administration) safety regulations.",
    wrongExplanations: {
      "A": "Motor carriers are allowed to impose stricter requirements than the FMCSA minimum.",
      "C": "The ability to require a more rigid exam is not limited to pre-existing conditions.",
      "D": "This applies to all drivers, not just hazmat drivers."
    },
    keyFact: "Carriers CAN require more rigid physicals than FMCSA minimums."
  },
  {
    id: "safety-030",
    category: "safety",
    subcategory: "medical-certificates",
    type: "mc",
    difficulty: 2,
    tags: ["regulation", "numbers"],
    question: "At what point may further evaluation of a driver's blood pressure be necessary?",
    choices: [
      { key: "A", text: "If blood pressure remains consistently above 120/80" },
      { key: "B", text: "If blood pressure remains consistently above 140/90" },
      { key: "C", text: "If blood pressure remains consistently above 160/100" },
      { key: "D", text: "If blood pressure remains consistently above 180/110" }
    ],
    answer: "B",
    explanation: "If the driver's blood pressure remains consistently above 140/90, further evaluation of that driver's blood pressure may be necessary.",
    wrongExplanations: {
      "A": "120/80 is considered normal blood pressure; evaluation is not triggered at this level.",
      "C": "140/90 is the threshold for further evaluation, not 160/100.",
      "D": "180/110 is far above the threshold; further evaluation should have already occurred at 140/90."
    },
    keyFact: "Blood pressure over 140/90 consistently = needs further evaluation."
  },

  // ============================================================
  // DRIVER PERFORMANCE MONITORING (page 55)
  // ============================================================
  {
    id: "safety-031",
    category: "safety",
    subcategory: "driver-performance",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "According to the FMCSA (Federal Motor Carrier Safety Administration), how may a motor carrier keep informed of each driver's driving performance?",
    choices: [
      { key: "A", text: "Only through annual driving tests" },
      { key: "B", text: "By consulting road observations, customer reports, police records, disciplinary actions, accidents, and state insurance records" },
      { key: "C", text: "Only through electronic logging device data" },
      { key: "D", text: "Only through self-reported driver evaluations" }
    ],
    answer: "B",
    explanation: "The motor carrier must consider any information it receives relative to a driver's actions, such as road observation reports, letters from customers or the public, records of disciplinary actions, accidents, etc. The carrier must also request a copy of each driver's motor vehicle record from the state of issuance annually (Section 391.25). Motor carriers also have access to Pre-Employment Screening Program (PSP) reports and to driver profiles from providers that analyze driver data.",
    wrongExplanations: {
      "A": "Annual driving tests are only one way; carriers must use multiple information sources.",
      "C": "ELD data is one source but not the only one; carriers use many sources of information.",
      "D": "Self-reported evaluations alone are insufficient; carriers must use external data sources."
    },
    keyFact: "Carriers use road observations, customer reports, police records, MVRs, and PSP reports."
  },

  // ============================================================
  // DRUG AND ALCOHOL RULES (pages 56-59)
  // ============================================================
  {
    id: "safety-032",
    category: "safety",
    subcategory: "drug-alcohol",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "To what extent do the FMCSRs (Federal Motor Carrier Safety Regulations) prohibit the use of alcohol?",
    choices: [
      { key: "A", text: "Drivers are prohibited from consuming alcohol only while driving" },
      { key: "B", text: "Drivers are prohibited from consuming or possessing alcoholic beverages while on duty, and may not be under the influence of alcohol within four hours of going on duty" },
      { key: "C", text: "Drivers may consume alcohol during rest breaks" },
      { key: "D", text: "There are no alcohol restrictions for off-duty time" }
    ],
    answer: "B",
    explanation: "Per FMCSR (Federal Motor Carrier Safety Regulations) Part 392.5, drivers are prohibited from consuming or possessing alcoholic beverages while on duty. They cannot consume or be under the influence of alcohol within four hours of going on duty.",
    wrongExplanations: {
      "A": "The prohibition extends beyond just driving; it covers all on-duty time and 4 hours before.",
      "C": "Drivers may not consume alcohol while on duty, including during rest breaks that are part of on-duty time.",
      "D": "There is a 4-hour pre-duty restriction on alcohol use even during off-duty time."
    },
    keyFact: "No alcohol on duty + no alcohol within 4 hours of going on duty."
  },
  {
    id: "safety-033",
    category: "safety",
    subcategory: "drug-alcohol",
    type: "fill",
    difficulty: 3,
    tags: ["numbers", "regulation"],
    question: "A driver is found operating a commercial vehicle with a BAC (Blood Alcohol Concentration) of ______ or greater is in violation of the prescribing rules and will be placed 'out of service' for 24 hours.",
    acceptedAnswers: ["0.04", ".04", "0.04%", ".04%"],
    answer: "0.04",
    explanation: "If a driver is found operating a commercial vehicle with a BAC (Blood Alcohol Concentration) of 0.04 or greater but less than 0.04 based on certain standards, the driver is placed 'out of service' for 24 hours. This is per FMCSR (Federal Motor Carrier Safety Regulations) Part 382.",
    keyFact: "BAC 0.04 or greater = out of service for 24 hours."
  },
  {
    id: "safety-034",
    category: "safety",
    subcategory: "drug-alcohol",
    type: "mc",
    difficulty: 2,
    tags: ["regulation", "numbers"],
    question: "What happens if a driver is convicted of operating a commercial vehicle with a BAC (Blood Alcohol Concentration) at or above the prescribed level?",
    choices: [
      { key: "A", text: "A warning is issued" },
      { key: "B", text: "The driver is subject to disqualification which may range from one year to lifetime" },
      { key: "C", text: "The driver receives a fine only" },
      { key: "D", text: "The driver must attend a 4-hour safety course" }
    ],
    answer: "B",
    explanation: "The driver is subject to disqualification which may range from one year to lifetime disqualification, in violation of the Part 382 alcohol prohibition (Section 382.201), which will be reported to the Drug & Alcohol Clearinghouse (Section 382.705) and require the driver to complete a treatment, evaluation, and return-to-duty testing process (Part 40, Subpart O).",
    wrongExplanations: {
      "A": "A BAC violation results in disqualification, not just a warning.",
      "C": "The penalty goes far beyond a fine -- it includes disqualification from driving.",
      "D": "A BAC violation requires disqualification, treatment evaluation, and return-to-duty testing, not just a safety course."
    },
    keyFact: "BAC violation = disqualification from 1 year to lifetime + Drug & Alcohol Clearinghouse report."
  },
  {
    id: "safety-035",
    category: "safety",
    subcategory: "drug-alcohol",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "A professional driver disqualified following a conviction for driving while intoxicated (DWI) in a personal vehicle will also have their CDL affected.",
    answer: true,
    explanation: "Yes, a driver convicted of DWI while driving a non-commercial motor vehicle, in which case the driver's CDL (Commercial Driver's License) may be suspended according to applicable regulatory requirements (Section 383.51).",
    keyFact: "A DWI in a personal vehicle CAN affect your CDL."
  },
  {
    id: "safety-036",
    category: "safety",
    subcategory: "drug-alcohol",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What types of FMCSA (Federal Motor Carrier Safety Administration) drug and alcohol tests is a driver subject to?",
    choices: [
      { key: "A", text: "Only pre-employment and random testing" },
      { key: "B", text: "Pre-employment, random, reasonable suspicion, follow-up, return-to-duty, and post-accident" },
      { key: "C", text: "Only post-accident testing" },
      { key: "D", text: "Only random and follow-up testing" }
    ],
    answer: "B",
    explanation: "Required FMCSA (Federal Motor Carrier Safety Administration) drug and alcohol tests include: pre-employment, random, reasonable suspicion, follow-up, return-to-duty, and post-accident. A pre-employment test is required for drug use only (Part 382).",
    wrongExplanations: {
      "A": "There are six types of tests, not just pre-employment and random.",
      "C": "Post-accident is only one of the six required test types.",
      "D": "Random and follow-up are only two of the six required test types."
    },
    keyFact: "6 test types: pre-employment, random, reasonable suspicion, follow-up, return-to-duty, post-accident."
  },
  {
    id: "safety-037",
    category: "safety",
    subcategory: "drug-alcohol",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "When is a driver subject to post-accident drug or alcohol testing?",
    choices: [
      { key: "A", text: "After any minor fender-bender" },
      { key: "B", text: "After any crash resulting in a fatality, or if the driver receives a citation and there is an injury or towaway crash" },
      { key: "C", text: "Only after fatal crashes" },
      { key: "D", text: "Only when requested by the driver" }
    ],
    answer: "B",
    explanation: "Post-accident testing is required following any crash resulting in a fatality. Testing is also required if the driver receives a citation and there is an injury or towaway crash, as defined in the FMCSR (Federal Motor Carrier Safety Regulations), and receives a citation for a moving violation in connection with the crash.",
    wrongExplanations: {
      "A": "Not every minor accident requires testing; specific criteria involving fatalities, citations, injuries, or towaways must be met.",
      "C": "Fatal crashes always require testing, but testing is also required in other specific circumstances.",
      "D": "Post-accident testing is mandatory when criteria are met, not at the driver's request."
    },
    keyFact: "Post-accident test: fatality always, or citation + injury/towaway crash."
  },
  {
    id: "safety-038",
    category: "safety",
    subcategory: "drug-alcohol",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "When is a driver subject to a 'reasonable suspicion' testing for alcohol or drug abuse?",
    choices: [
      { key: "A", text: "Randomly selected by computer" },
      { key: "B", text: "When a trained company representative has reason to believe the driver has violated regulations based on appearance, behavior, speech, or body odor" },
      { key: "C", text: "Every time they report for duty" },
      { key: "D", text: "Only after a positive pre-employment test" }
    ],
    answer: "B",
    explanation: "A driver is subject to reasonable suspicion testing when a trained company official or representative has reason to believe that the driver has violated the regulations based on specific, contemporaneous, articulable observations concerning the driver's appearance, behavior, speech, or body odor. The company official must be trained in accordance with Sections 382.302 and 382.307 of the FMCSR (Federal Motor Carrier Safety Regulations).",
    wrongExplanations: {
      "A": "Random selection by computer is a separate test type called 'random testing.'",
      "C": "Testing at every report for duty would be pre-duty testing, not reasonable suspicion.",
      "D": "Reasonable suspicion is based on observed behavior, not prior test results."
    },
    keyFact: "Reasonable suspicion = trained official observes appearance, behavior, speech, or body odor issues."
  },
  {
    id: "safety-039",
    category: "safety",
    subcategory: "drug-alcohol",
    type: "mc",
    difficulty: 3,
    tags: ["regulation", "numbers"],
    question: "Under the FMCSRs (Federal Motor Carrier Safety Regulations), if a driver tests positive for drug use or tests with an alcohol concentration of 0.04 or higher, what action must be taken?",
    choices: [
      { key: "A", text: "The driver receives a written warning" },
      { key: "B", text: "The driver must be reported to the Drug & Alcohol Clearinghouse, referred to a SAP, and restricted from performing safety-sensitive functions" },
      { key: "C", text: "The driver is immediately terminated" },
      { key: "D", text: "The driver receives additional training only" }
    ],
    answer: "B",
    explanation: "Under the FMCSR (Federal Motor Carrier Safety Regulations), if a driver tests positive for drug use or tests with a BAC (Blood Alcohol Concentration) of 0.04 or higher, the driver must be reported to the Drug & Alcohol Clearinghouse (Section 382.201), and must be restricted from performing any safety-sensitive functions, including not only driving but also loading, unloading, and servicing or repairing vehicles. The regulations also require the company to notify drivers of its own specific policies with respect to misuse of alcohol or use of controlled substances (Section 382.601).",
    wrongExplanations: {
      "A": "A positive test requires much more than a written warning; it triggers clearinghouse reporting and removal from safety-sensitive duties.",
      "C": "Immediate termination is not required; the driver must be referred to a SAP and may return after completing treatment.",
      "D": "Additional training alone is insufficient; the driver must be removed from safety-sensitive functions and referred to a SAP."
    },
    keyFact: "Positive test = Clearinghouse report + SAP referral + no safety-sensitive duties."
  },
  {
    id: "safety-040",
    category: "safety",
    subcategory: "drug-alcohol",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "What must the FMCSRs (Federal Motor Carrier Safety Regulations) require before a person can resume driving a commercial vehicle after the first regulation violation involving alcohol or drug misuse?",
    choices: [
      { key: "A", text: "A written apology to the employer" },
      { key: "B", text: "Evaluation by a Substance Abuse Professional (SAP) and compliance with recommended treatment, then return-to-duty testing" },
      { key: "C", text: "A 30-day waiting period only" },
      { key: "D", text: "Retaking the CDL written exam" }
    ],
    answer: "B",
    explanation: "Before a CDL (Commercial Driver's License) driver can resume driving a CMV (Commercial Motor Vehicle) after their first DOT (Department of Transportation) alcohol or drug violation, the driver must be evaluated by a Substance Abuse Professional (SAP) and comply with the recommended treatment. The driver must then pass a return-to-duty test. The driver is then subject to unannounced follow-up tests for up to 5 years (Section 382.503).",
    wrongExplanations: {
      "A": "A written apology is not part of the regulatory return-to-duty process.",
      "C": "There is no simple waiting period; the driver must complete SAP evaluation, treatment, and return-to-duty testing.",
      "D": "Retaking the CDL written exam is not part of the return-to-duty process for drug/alcohol violations."
    },
    keyFact: "Return to duty: SAP evaluation + treatment + return-to-duty test + follow-up tests up to 5 years."
  },
  {
    id: "safety-041",
    category: "safety",
    subcategory: "drug-alcohol",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "What are the consequences for a CDL (Commercial Driver's License) driver who refuses to submit to an FMCSA (Federal Motor Carrier Safety Administration)-mandated drug or alcohol test?",
    choices: [
      { key: "A", text: "No consequences as testing is voluntary" },
      { key: "B", text: "The consequences are the same as if the driver had tested at 0.04 BAC or greater" },
      { key: "C", text: "A small fine only" },
      { key: "D", text: "A verbal warning from the carrier" }
    ],
    answer: "B",
    explanation: "The consequences of refusing to submit to an FMCSA (Federal Motor Carrier Safety Administration)-mandated drug or alcohol test are the same as if the driver had tested at 0.04 BAC (Blood Alcohol Concentration) or greater. The consequences of refusing to submit to a DOT (Department of Transportation)-mandated substance test are the same as if the driver had tested positive (Sections 382.211 and 382.501).",
    wrongExplanations: {
      "A": "Testing is mandatory, not voluntary; refusal carries serious consequences.",
      "C": "Refusal is treated the same as a positive test result, not just a fine.",
      "D": "Refusal triggers the same consequences as a positive test, not a verbal warning."
    },
    keyFact: "Refusing a drug/alcohol test = same consequences as testing positive."
  },
  {
    id: "safety-042",
    category: "safety",
    subcategory: "drug-alcohol",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What protection is there for a CDL (Commercial Driver's License) driver in the drug testing process?",
    choices: [
      { key: "A", text: "None -- results are final" },
      { key: "B", text: "A driver who tests 'positive' on an initial test is entitled to a confirmation test, and may request a Medical Review Officer review and a split specimen retest" },
      { key: "C", text: "The driver can refuse the test" },
      { key: "D", text: "The driver can choose which lab performs the test" }
    ],
    answer: "B",
    explanation: "A driver who tests 'positive' on an initial test is entitled to a confirmation test using a more precise and accurate procedure. If the confirmation test is also 'positive,' the results must be reviewed by a Medical Review Officer (MRO) to determine whether the findings have a legitimate basis, such as prescription drug use, or are due to illegal use of a controlled substance. The driver may also request that the second half of the sample (the split specimen) be sent to another lab to be retested.",
    wrongExplanations: {
      "A": "There are multiple protections including confirmation testing and MRO review.",
      "C": "Refusing the test has the same consequences as a positive test result.",
      "D": "The driver cannot choose the lab, but can request a split specimen retest at a different lab."
    },
    keyFact: "Protections: confirmation test + MRO review + split specimen retest option."
  },
  {
    id: "safety-043",
    category: "safety",
    subcategory: "drug-alcohol",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What happens to a CDL (Commercial Driver's License) driver whose illegal use of a controlled substance is confirmed?",
    choices: [
      { key: "A", text: "They receive a warning only" },
      { key: "B", text: "The driver is considered unqualified, referred to a SAP for evaluation and possible treatment, and cannot drive a CMV until cleared" },
      { key: "C", text: "They must retake their CDL exam" },
      { key: "D", text: "They receive a 7-day suspension" }
    ],
    answer: "B",
    explanation: "If the illegal use of a controlled substance is detected during a routine test, the driver is considered unqualified and their status will be listed as 'prohibited' in the Drug & Alcohol Clearinghouse. The driver must be referred to a SAP (Substance Abuse Professional) for evaluation and possible treatment. The driver cannot drive a CMV (Commercial Motor Vehicle) until the SAP has approved the driver's return to duty, the driver is no longer 'prohibited' in the Clearinghouse, and the state licensing agency has restored the driver's driving privileges (Sections 382.503 and 382.701).",
    wrongExplanations: {
      "A": "Confirmed illegal substance use results in far more than a warning.",
      "C": "The CDL exam is not the issue; the driver must be cleared by a SAP.",
      "D": "There is no simple 7-day suspension; the driver is prohibited from driving until cleared through the full process."
    },
    keyFact: "Confirmed drug use = unqualified + SAP referral + prohibited in Clearinghouse until cleared."
  },
  {
    id: "safety-044",
    category: "safety",
    subcategory: "drug-alcohol",
    type: "fill",
    difficulty: 3,
    tags: ["numbers", "regulation"],
    question: "A driver may not consume or be under the influence of alcohol within ______ hours of going on duty.",
    acceptedAnswers: ["4", "four", "4 hours", "four hours"],
    answer: "4",
    explanation: "Per FMCSR (Federal Motor Carrier Safety Regulations) Part 392.5, drivers are prohibited from consuming or being under the influence of alcohol within four hours of going on duty.",
    keyFact: "4-hour alcohol rule: no alcohol within 4 hours before going on duty."
  },

  // ============================================================
  // CDL DISQUALIFICATION VIOLATIONS (pages 58-59)
  // ============================================================
  {
    id: "safety-045",
    category: "safety",
    subcategory: "disqualifications",
    type: "mc",
    difficulty: 3,
    tags: ["numbers", "regulation"],
    question: "A driver can be disqualified for 60 days for a conviction of any combination of how many of certain offenses?",
    choices: [
      { key: "A", text: "One offense" },
      { key: "B", text: "Two of the following offenses within 3 years" },
      { key: "C", text: "Three offenses within 5 years" },
      { key: "D", text: "Four offenses within 10 years" }
    ],
    answer: "B",
    explanation: "A driver can be disqualified for 60 days for a conviction of any combination of two of the following offenses within 3 years: speeding 15 mph or more above the posted limit, following too closely, improper or erratic lane-changing, driving recklessly, and certain other traffic violations. Disqualification is 120 days if convicted of three of the following in 3 years.",
    wrongExplanations: {
      "A": "One offense alone does not trigger the 60-day disqualification.",
      "C": "Three offenses within 3 years would be a 120-day disqualification, not 60 days.",
      "D": "Four offenses within 10 years is not the correct threshold for 60-day disqualification."
    },
    keyFact: "60 days = 2 offenses in 3 years; 120 days = 3 offenses in 3 years."
  },
  {
    id: "safety-046",
    category: "safety",
    subcategory: "disqualifications",
    type: "fill",
    difficulty: 3,
    tags: ["numbers", "regulation"],
    question: "A driver can be disqualified for ______ days if convicted of three qualifying traffic offenses within 3 years.",
    acceptedAnswers: ["120", "120 days"],
    answer: "120",
    explanation: "A driver can be disqualified for 120 days if convicted of three of the qualifying traffic offenses within 3 years (e.g., speeding 15 mph or more over the limit, following too closely, improper or erratic lane-changing, etc.).",
    keyFact: "120 days disqualification = 3 qualifying offenses in 3 years."
  },
  {
    id: "safety-047",
    category: "safety",
    subcategory: "disqualifications",
    type: "mc",
    difficulty: 3,
    tags: ["numbers", "regulation"],
    question: "A driver can be disqualified for one year (1 year) if convicted of one of which of the following violations?",
    choices: [
      { key: "A", text: "Speeding 10 mph over the limit" },
      { key: "B", text: "Operating while having an alcohol concentration of 0.04 or more, leaving the scene of an accident, or refusing to undergo an alcohol test" },
      { key: "C", text: "Failure to signal a lane change" },
      { key: "D", text: "Driving with an expired registration" }
    ],
    answer: "B",
    explanation: "A driver can be disqualified for one year if convicted of one of the following violations (per Section 383.51): operating while having a BAC (Blood Alcohol Concentration) of 0.04 or more, leaving the scene of an accident, commission of a felony involving the use of a CMV (Commercial Motor Vehicle), driving a CMV (Commercial Motor Vehicle) when the driver's CLP (Commercial Learner's Permit) or CDL (Commercial Driver's License) is revoked, suspended, or cancelled, refusal to undergo an alcohol test, and others.",
    wrongExplanations: {
      "A": "Speeding 10 mph over is a lesser offense; 1-year disqualification requires more serious violations.",
      "C": "Failure to signal a lane change is a minor violation, not a 1-year disqualification offense.",
      "D": "Expired registration does not trigger a 1-year CDL disqualification."
    },
    keyFact: "1-year disqualification: BAC 0.04+, leaving scene, felony w/ CMV, refusal to test."
  },
  {
    id: "safety-048",
    category: "safety",
    subcategory: "disqualifications",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "Which violation can result in a lifetime disqualification from driving a CMV (Commercial Motor Vehicle)?",
    choices: [
      { key: "A", text: "First offense speeding violation" },
      { key: "B", text: "A subsequent offense of any combination of 1-year disqualification violations, or using a CMV in the commission of a felony involving human trafficking" },
      { key: "C", text: "First offense failure to yield" },
      { key: "D", text: "Two parking violations" }
    ],
    answer: "B",
    explanation: "A subsequent offense of any combination of those violations resulting in a 1-year disqualification results in a lifetime disqualification. Also, using a CMV (Commercial Motor Vehicle) in the commission of a felony involving an act or practice of severe forms of human trafficking results in lifetime disqualification (Section 383.51).",
    wrongExplanations: {
      "A": "A first offense speeding violation does not result in lifetime disqualification.",
      "C": "A first offense failure to yield does not trigger lifetime disqualification.",
      "D": "Parking violations do not result in CDL disqualification."
    },
    keyFact: "Lifetime ban: 2nd offense of 1-year violations, or felony human trafficking with CMV."
  },
  {
    id: "safety-049",
    category: "safety",
    subcategory: "disqualifications",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "Which of the following offenses can lead to a 60-day or 120-day disqualification?",
    choices: [
      { key: "A", text: "Speeding 15 mph or more above the posted limit" },
      { key: "B", text: "Driving 5 mph over the speed limit" },
      { key: "C", text: "Failure to carry a logbook" },
      { key: "D", text: "Driving with a dirty windshield" }
    ],
    answer: "A",
    explanation: "Speeding 15 mph or more above the posted limit is one of the qualifying offenses that can lead to 60-day disqualification (for 2 offenses in 3 years) or 120-day disqualification (for 3 offenses in 3 years). Other qualifying offenses include following too closely, improper or erratic lane-changing, and driving recklessly.",
    wrongExplanations: {
      "B": "Driving 5 mph over the limit is not severe enough to qualify for these disqualifications.",
      "C": "Failure to carry a logbook, while a violation, is not one of the qualifying disqualification offenses.",
      "D": "A dirty windshield is not a qualifying disqualification offense."
    },
    keyFact: "Qualifying offenses: 15+ mph over limit, following too closely, erratic lane changes, reckless driving."
  },
  {
    id: "safety-050",
    category: "safety",
    subcategory: "disqualifications",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "Violating a State or local law prohibiting texting and/or use of a handheld mobile phone while operating a CMV (Commercial Motor Vehicle) is a qualifying offense for disqualification.",
    answer: true,
    explanation: "Violating a State or local law prohibiting texting and/or handheld mobile phone use while operating a CMV (Commercial Motor Vehicle) is listed among the qualifying offenses that can lead to driver disqualification.",
    keyFact: "Texting/handheld phone use while driving a CMV = qualifying disqualification offense."
  },

  // ============================================================
  // TRANSPORTATION OF PASSENGERS (page 60)
  // ============================================================
  {
    id: "safety-051",
    category: "safety",
    subcategory: "passenger-transport",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What is the FMCSA (Federal Motor Carrier Safety Administration) safety regulation concerning the transportation of passengers on property-carrying vehicles?",
    choices: [
      { key: "A", text: "Anyone may ride in a commercial vehicle at any time" },
      { key: "B", text: "No person other than those assigned by the motor carrier's employer may ride unless written authorization is obtained" },
      { key: "C", text: "Only family members may ride" },
      { key: "D", text: "Passengers are never permitted under any circumstances" }
    ],
    answer: "B",
    explanation: "No person other than the motor carrier's employees assigned to the vehicle may ride in a property-carrying vehicle unless specifically authorized in writing. Exceptions exist for transporting someone in case of an accident or other emergency. The written authorization must state the name of the person to be transported, the points where the transport is to begin and end, and the date when the authority expires (Section 392.60).",
    wrongExplanations: {
      "A": "Written authorization is required for non-assigned persons.",
      "C": "Even family members need written authorization from the carrier.",
      "D": "Passengers are permitted with proper written authorization."
    },
    keyFact: "Written authorization required for non-assigned passengers on property-carrying vehicles."
  },

  // ============================================================
  // PRE-TRIP INSPECTION (pages 60-62)
  // ============================================================
  {
    id: "safety-052",
    category: "safety",
    subcategory: "pre-trip-inspection",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What is the first thing a driver should do when checking a vehicle during a pre-trip inspection?",
    choices: [
      { key: "A", text: "Start the engine and check gauges" },
      { key: "B", text: "Note the vehicle's general condition when approaching it, looking for leakage or damage" },
      { key: "C", text: "Check the tires" },
      { key: "D", text: "Test the horn" }
    ],
    answer: "B",
    explanation: "When checking the vehicle, the driver should first note the vehicle's general condition when approaching it. Look for any leakage of water, fuel, or lubricants under the vehicle.",
    wrongExplanations: {
      "A": "Starting the engine comes after the initial visual walk-around inspection.",
      "C": "Checking tires is part of the inspection but not the first step.",
      "D": "Testing the horn comes later in the inspection process."
    },
    keyFact: "First step: walk around and note general condition, look for leaks/damage."
  },
  {
    id: "safety-053",
    category: "safety",
    subcategory: "pre-trip-inspection",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "During a pre-trip inspection, after noting the vehicle's general condition and checking fluid levels, what should the driver do?",
    choices: [
      { key: "A", text: "Immediately begin driving" },
      { key: "B", text: "Start and idle the engine to warm it up, check for abnormal engine noise, check gauges" },
      { key: "C", text: "Load the cargo" },
      { key: "D", text: "Contact dispatch" }
    ],
    answer: "B",
    explanation: "After the initial walk-around and checking fluid levels, the driver should start and idle the engine to warm it up, check for abnormal engine noise, check the oil pressure gauge, and check emergency equipment, horn, windshield wipers, and mirrors.",
    wrongExplanations: {
      "A": "The inspection must be completed before driving.",
      "C": "Cargo loading should not begin until the inspection is complete.",
      "D": "Contacting dispatch is not part of the pre-trip inspection sequence."
    },
    keyFact: "Start engine, let it warm up, check for abnormal noises, verify gauges."
  },
  {
    id: "safety-054",
    category: "safety",
    subcategory: "pre-trip-inspection",
    type: "tf",
    difficulty: 1,
    tags: ["procedure"],
    question: "During a pre-trip inspection, the driver should check all lights including headlights, turn signals, clearance and identification lights.",
    answer: true,
    explanation: "The pre-trip inspection requires checking headlights and turn signals, front clearance and identification lights, and all other lighting. The driver should leave the cab to check headlights and turn signal operation, check front clearance and identification lights, and inspect both sides of the vehicle.",
    keyFact: "Check ALL lights: headlights, turn signals, clearance, identification, and marker lights."
  },
  {
    id: "safety-055",
    category: "safety",
    subcategory: "pre-trip-inspection",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "Which of the following should be checked on tractor tires, wheels, and lugs during a pre-trip inspection?",
    choices: [
      { key: "A", text: "Only tire pressure" },
      { key: "B", text: "Tires, wheels, lugs or studs, and note any damage, cuts, or excessive wear" },
      { key: "C", text: "Only the tread depth" },
      { key: "D", text: "Only the valve stems" }
    ],
    answer: "B",
    explanation: "During a pre-trip inspection, the driver should check tractor tires, wheels, and lugs or studs, noting any damage, cuts, or excessive wear. This applies to both left and right sides of the tractor and all trailer tires.",
    wrongExplanations: {
      "A": "Tire pressure is only one part of what should be checked; damage, cuts, and wear must also be inspected.",
      "C": "Tread depth is important but not the only thing to check on tires.",
      "D": "Valve stems are one component but the entire tire, wheel, and lug assembly must be inspected."
    },
    keyFact: "Check tires, wheels, and lugs for damage, cuts, and excessive wear on ALL positions."
  },
  {
    id: "safety-056",
    category: "safety",
    subcategory: "pre-trip-inspection",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "During a pre-trip inspection, the driver should check the fifth wheel, jaws, release lever on tractor-trailer combinations, goofy hook, tow bar, safety chains, and converter gear on the trailer coupling device.",
    answer: true,
    explanation: "The pre-trip inspection includes checking the fifth wheel, jaws, release lever on tractor-trailer combinations, as well as the pintle hook, tow bar, safety chains, and converter gear on trailer coupling devices.",
    keyFact: "Check all coupling devices: 5th wheel, jaws, release lever, pintle hook, tow bar, safety chains."
  },
  {
    id: "safety-057",
    category: "safety",
    subcategory: "pre-trip-inspection",
    type: "tf",
    difficulty: 1,
    tags: ["procedure"],
    question: "The last step in a pre-trip inspection is to make a test stop before leaving the yard.",
    answer: true,
    explanation: "The final step in the pre-trip inspection procedure is to make a test stop before leaving the yard to ensure the brakes are functioning properly.",
    keyFact: "Always make a test stop before leaving the yard."
  },

  // ============================================================
  // BRAKE INSPECTION AND AIR BRAKES (pages 61-62)
  // ============================================================
  {
    id: "safety-058",
    category: "safety",
    subcategory: "brakes",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "When testing air brakes during a pre-trip inspection, what is the correct procedure for checking service brakes?",
    choices: [
      { key: "A", text: "Simply press the brake pedal once" },
      { key: "B", text: "With the engine off, apply service brakes; the initial pressure drop should be 5 to 10 psi, and further pressure drop should not exceed 3 psi in one minute" },
      { key: "C", text: "Only check the brake lights" },
      { key: "D", text: "Check brake fluid level only" }
    ],
    answer: "B",
    explanation: "To check for leaks in the braking system, apply service brakes after the initial pressure drop of 5 to 10 psi; further pressure drop should not exceed 3 psi in one minute. If notable leaks or rapid pressure drop are noted, have leakage corrected before departure.",
    wrongExplanations: {
      "A": "A single press is not sufficient; the driver must monitor pressure drop over time.",
      "C": "Brake lights are separate from the air brake system pressure test.",
      "D": "Air brakes do not use brake fluid; they use air pressure."
    },
    keyFact: "Air brake test: initial drop 5-10 psi, then no more than 3 psi drop per minute."
  },
  {
    id: "safety-059",
    category: "safety",
    subcategory: "brakes",
    type: "mc",
    difficulty: 3,
    tags: ["procedure", "numbers"],
    question: "When testing parking brakes on trucks and truck-tractors with air brakes, what should the driver do?",
    choices: [
      { key: "A", text: "Simply set the parking brake and drive" },
      { key: "B", text: "Release all parking brakes, move the treadle valve to 'supply' position, use the treadle valve to apply and release brakes, then set the tractor protection valve to 'normal' and trailer supply to 'emergency'" },
      { key: "C", text: "Only check the brake pedal" },
      { key: "D", text: "Test only the trailer brakes" }
    ],
    answer: "B",
    explanation: "The proper procedure for testing parking brakes on trucks and truck-tractors equipped with air brakes involves: releasing all parking brakes, moving the treadle valve to the 'supply' position, using the treadle valve to apply and release brakes, setting the tractor protection valve to 'normal' and the trailer supply to 'emergency,' and confirming that 'Park' (tractor brakes only) should apply.",
    wrongExplanations: {
      "A": "Simply setting the parking brake without testing is insufficient for a proper pre-trip inspection.",
      "C": "The brake pedal alone does not test the parking brake system.",
      "D": "Both tractor and trailer brakes must be tested, not just trailer brakes."
    },
    keyFact: "Test parking brakes: release, supply, apply/release treadle, set protection valve, confirm park applies."
  },
  {
    id: "safety-060",
    category: "safety",
    subcategory: "brakes",
    type: "mc",
    difficulty: 3,
    tags: ["procedure", "numbers"],
    question: "When performing the low air pressure warning test, at what psi should the 'Low Air' warning sound and pressure in the secondary reservoir begin to drop?",
    choices: [
      { key: "A", text: "80 psi" },
      { key: "B", text: "45 to 55 psi" },
      { key: "C", text: "Between 60 and 75 psi" },
      { key: "D", text: "20 psi" }
    ],
    answer: "C",
    explanation: "During the low air pressure warning test, release all parking brakes and turn off the engine, then use the treadle valve to fan down brakes. At 15 psi below primary reservoir pressure, the 'Low Air' warning signal should operate and pressure in secondary reservoir should start to drop; between 45 and 20 psi in the secondary reservoir, all brakes should apply.",
    wrongExplanations: {
      "A": "80 psi is above the range where the low air warning should activate.",
      "B": "45-55 psi is not the correct range; the warning activates at 60-75 psi (which is 15 psi below the normal reservoir pressure).",
      "D": "20 psi is the point at which all brakes should be fully applied, not when the warning sounds."
    },
    keyFact: "Low air warning at 60-75 psi; all brakes apply between 45 and 20 psi."
  },

  // ============================================================
  // EMERGENCY EQUIPMENT AND ADDITIONAL ITEMS (pages 62-63)
  // ============================================================
  {
    id: "safety-061",
    category: "safety",
    subcategory: "emergency-equipment",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What additional items must be inspected by the driver of a 'twin trailer' or 'triple' combination?",
    choices: [
      { key: "A", text: "Only the lead trailer" },
      { key: "B", text: "The converter dolly is properly secured, safety devices for accidental disconnection are positioned and secured, and the hook-up of the converter is correct" },
      { key: "C", text: "Only the rear trailer" },
      { key: "D", text: "Only the tractor" }
    ],
    answer: "B",
    explanation: "For 'twin trailer' or 'triple' combinations, the driver must inspect: (1) the eye of the drawbar is properly secured within the pintle hook; (2) the safety devices required for use in case of accidental disconnection of the drawbar are properly positioned and secured; (3) the hook-up of the converter is correct with safety gear to prevent excess noise, and the device is firmly raised and secured.",
    wrongExplanations: {
      "A": "All trailers and the converter dolly connections must be inspected, not just the lead trailer.",
      "C": "All trailers and connections must be inspected, not just the rear trailer.",
      "D": "The tractor inspection is standard; twin/triple combos require additional converter dolly inspection."
    },
    keyFact: "Twin/triple combos: check converter dolly, drawbar, safety devices, and hook-up."
  },
  {
    id: "safety-062",
    category: "safety",
    subcategory: "emergency-equipment",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What miscellaneous parts and accessories are required on all interstate vehicles by FMCSA (Federal Motor Carrier Safety Administration) safety regulations?",
    choices: [
      { key: "A", text: "Only a fire extinguisher" },
      { key: "B", text: "Windshield wiping and washing systems, defrosters, rear vision mirrors, speedometer, and horn" },
      { key: "C", text: "Only mirrors and a speedometer" },
      { key: "D", text: "Only a horn and windshield wipers" }
    ],
    answer: "B",
    explanation: "Required miscellaneous parts and accessories on all interstate vehicles per FMCSA (Federal Motor Carrier Safety Administration) regulations include: windshield wiping and washing systems, defrost devices, rear vision mirrors, speedometer, and horn.",
    wrongExplanations: {
      "A": "A fire extinguisher is required as emergency equipment, but many other accessories are also required.",
      "C": "Mirrors and speedometer are required, but so are wipers, washers, defrosters, and horn.",
      "D": "Horn and wipers are required, but so are washers, defrosters, mirrors, and speedometer."
    },
    keyFact: "Required accessories: wipers, washers, defrosters, mirrors, speedometer, horn."
  },
  {
    id: "safety-063",
    category: "safety",
    subcategory: "emergency-equipment",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What emergency equipment is required by FMCSA (Federal Motor Carrier Safety Administration) regulations on interstate vehicles?",
    choices: [
      { key: "A", text: "Only a first aid kit" },
      { key: "B", text: "One fire extinguisher, one set of prescribed emergency warning devices for stopped vehicles, and one spare fuse for each type (unless equipped with circuit breakers)" },
      { key: "C", text: "Only warning triangles" },
      { key: "D", text: "A fire extinguisher and a flashlight" }
    ],
    answer: "B",
    explanation: "Per FMCSA (Federal Motor Carrier Safety Administration) regulations, the following items are required on interstate vehicles: one fire extinguisher, one set of prescribed emergency warning devices for stopped vehicles, and one spare fuse for each type on the vehicle (unless the vehicle is equipped with circuit breakers) per Section 393.95.",
    wrongExplanations: {
      "A": "A first aid kit is not the required emergency equipment; fire extinguisher, warning devices, and spare fuses are.",
      "C": "Warning triangles are part of the prescribed warning devices, but a fire extinguisher and spare fuses are also required.",
      "D": "A flashlight is not a required item; spare fuses (or circuit breakers) are required instead."
    },
    keyFact: "Required: 1 fire extinguisher + 1 set emergency warning devices + spare fuses."
  },

  // ============================================================
  // EMERGENCY WARNING DEVICE PLACEMENT (pages 64-65)
  // ============================================================
  {
    id: "safety-064",
    category: "safety",
    subcategory: "warning-devices",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What types of emergency warning devices does the FMCSR (Federal Motor Carrier Safety Regulations) prescribe for stopped vehicles?",
    choices: [
      { key: "A", text: "Only road flares" },
      { key: "B", text: "Three red reflective triangles, three liquid burning flares, or a minimum of six fusees" },
      { key: "C", text: "Only reflective tape" },
      { key: "D", text: "Only electric lanterns" }
    ],
    answer: "B",
    explanation: "Per FMCSR (Federal Motor Carrier Safety Regulations) Section 393.95, three types of devices are authorized: three red reflective triangles, three liquid burning flares, or a minimum of six fusees.",
    wrongExplanations: {
      "A": "Road flares are one option, but reflective triangles and fusees are also authorized.",
      "C": "Reflective tape is not one of the prescribed emergency warning devices.",
      "D": "Electric lanterns are not listed as prescribed emergency warning devices."
    },
    keyFact: "3 types: red reflective triangles, liquid burning flares, or minimum 6 fusees."
  },
  {
    id: "safety-065",
    category: "safety",
    subcategory: "warning-devices",
    type: "mc",
    difficulty: 3,
    tags: ["numbers", "regulation"],
    question: "If a motor vehicle is stopped within 500 feet of a curve, crest of a hill, or other obstruction, where should a warning signal be placed?",
    choices: [
      { key: "A", text: "Only directly behind the vehicle" },
      { key: "B", text: "100 to 500 feet from the vehicle in the direction of the obstruction to give ample warning to other drivers" },
      { key: "C", text: "50 feet from the vehicle" },
      { key: "D", text: "At the crest of the hill only" }
    ],
    answer: "B",
    explanation: "If the motor vehicle is stopped within 500 feet of a curve, crest of a hill, or other obstruction, the signal shall be placed in the direction of the obstruction at a distance of 100 to 500 feet from the stopped vehicle to afford ample warning to other drivers (Section 392.22).",
    wrongExplanations: {
      "A": "The signal must be placed in the direction of the obstruction, not just behind the vehicle.",
      "C": "50 feet is not far enough; the signal should be 100 to 500 feet away.",
      "D": "The signal should be placed between 100 and 500 feet toward the obstruction, not at the crest itself."
    },
    keyFact: "Within 500 ft of obstruction: place warning 100-500 ft toward the obstruction."
  },
  {
    id: "safety-066",
    category: "safety",
    subcategory: "warning-devices",
    type: "mc",
    difficulty: 3,
    tags: ["numbers", "regulation"],
    question: "Where should emergency warning signals be placed when a vehicle is stopped on the shoulder or traveled portion of a two-lane road?",
    choices: [
      { key: "A", text: "All signals placed behind the vehicle" },
      { key: "B", text: "10 feet from the vehicle in the direction of traffic, 100 feet behind, and 100 feet ahead" },
      { key: "C", text: "50 feet in front and 50 feet behind" },
      { key: "D", text: "200 feet behind and 200 feet ahead only" }
    ],
    answer: "B",
    explanation: "When a vehicle is stopped on the shoulder or traveled portion of a two-lane road, emergency warning signals should be placed: one within 10 feet of the front or rear of the vehicle in the direction of traffic nearest the vehicle, one approximately 100 feet from the vehicle and beyond it in the center of the traffic lane or shoulder, and one approximately 100 feet from the vehicle in the opposite direction (Section 392.22).",
    wrongExplanations: {
      "A": "Signals must be placed both behind and ahead of the vehicle, not just behind.",
      "C": "The correct distances are 10 feet, 100 feet behind, and 100 feet ahead.",
      "D": "The distances are 10 ft, 100 ft, and 100 ft, not 200 ft and 200 ft."
    },
    keyFact: "Two-lane road: 10 ft (near side), 100 ft behind, 100 ft ahead."
  },
  {
    id: "safety-067",
    category: "safety",
    subcategory: "warning-devices",
    type: "mc",
    difficulty: 3,
    tags: ["numbers", "regulation"],
    question: "On a divided highway or one-way road, where should emergency warning signals be placed?",
    choices: [
      { key: "A", text: "10 feet, 100 feet, and 200 feet toward approaching traffic" },
      { key: "B", text: "100 feet, 200 feet, and 300 feet toward approaching traffic" },
      { key: "C", text: "50 feet, 100 feet, and 150 feet toward approaching traffic" },
      { key: "D", text: "All signals placed at the rear of the vehicle" }
    ],
    answer: "A",
    explanation: "On a divided highway or one-way road, all signals are placed to the rear of the vehicle. The prescribed distances are 10 feet, 100 feet, and 200 feet to the rear of the vehicle toward approaching traffic (Section 392.22).",
    wrongExplanations: {
      "B": "The correct distances are 10, 100, and 200 feet, not 100, 200, and 300 feet.",
      "C": "The correct distances are 10, 100, and 200 feet, not 50, 100, and 150 feet.",
      "D": "While all signals are placed to the rear on a divided highway, they must be at specific distances."
    },
    keyFact: "Divided highway: 10 ft, 100 ft, and 200 ft to the rear toward approaching traffic."
  },
  {
    id: "safety-068",
    category: "safety",
    subcategory: "warning-devices",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What rear-facing lights on an interstate truck might not be self-extinguishing?",
    choices: [
      { key: "A", text: "Brake lights" },
      { key: "B", text: "Turn signals" },
      { key: "C", text: "Turn signals may not be self-extinguishing and must be turned off manually" },
      { key: "D", text: "Headlights" }
    ],
    answer: "C",
    explanation: "Turn signals on some interstate trucks might not be self-extinguishing. Turn signals on an interstate truck might not be self-canceling, so the driver must remember to turn them off manually to avoid confusing other drivers.",
    wrongExplanations: {
      "A": "Brake lights are activated by the brake pedal and turn off when released.",
      "B": "This is partially correct but not specific enough -- the key point is they must be turned off manually.",
      "D": "Headlights are not rear-facing lights."
    },
    keyFact: "Truck turn signals may not self-cancel -- turn them off manually."
  },
  {
    id: "safety-069",
    category: "safety",
    subcategory: "warning-devices",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "How can the driver measure the proper distance for setting out emergency warning signals?",
    choices: [
      { key: "A", text: "Using a tape measure" },
      { key: "B", text: "By pacing off the distances -- one pace equals roughly four feet, so 25 paces equals 100 feet" },
      { key: "C", text: "By estimating visually" },
      { key: "D", text: "Using the truck's odometer" }
    ],
    answer: "B",
    explanation: "The driver can measure the proper distance for setting out emergency warning signals by pacing off the distances. One pace equals roughly four feet: 3 paces equals 10 feet, 25 paces equals 100 feet, 40 paces equals roughly 160 feet, 50 paces equals 200 feet.",
    wrongExplanations: {
      "A": "A tape measure is impractical in an emergency roadside situation.",
      "C": "Visual estimation is less accurate than pacing.",
      "D": "The truck's odometer cannot be used when the vehicle is stopped on the shoulder."
    },
    keyFact: "Pacing: 1 pace = ~4 feet. 25 paces = 100 ft. 50 paces = 200 ft."
  },
  {
    id: "safety-070",
    category: "safety",
    subcategory: "warning-devices",
    type: "fill",
    difficulty: 2,
    tags: ["numbers"],
    question: "When pacing off distances for emergency warning signal placement, one pace equals approximately ______ feet.",
    acceptedAnswers: ["4", "four", "4 feet", "four feet"],
    answer: "4",
    explanation: "When pacing off distances for emergency warning signal placement, one pace equals approximately four feet. This means 25 paces equals approximately 100 feet and 50 paces equals approximately 200 feet.",
    keyFact: "1 pace = approximately 4 feet."
  },

  // ============================================================
  // FOUR-WAY FLASHERS (pages 64-65)
  // ============================================================
  {
    id: "safety-071",
    category: "safety",
    subcategory: "warning-devices",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "When may the four-way flashers be in operation on a moving vehicle?",
    choices: [
      { key: "A", text: "Any time the driver wants to be more visible" },
      { key: "B", text: "Federal regulations permit the driver of a slow-moving vehicle to use four-way flashers to warn of a potential hazard or of the vehicle being operated substantially below the normal speed of traffic" },
      { key: "C", text: "Only during nighttime driving" },
      { key: "D", text: "Only during rain or snow" }
    ],
    answer: "B",
    explanation: "Federal regulations permit the driver of a slow-moving vehicle to use the four-way flashers to warn of a potential hazard or of the vehicle being operated substantially below the normal speed of traffic.",
    wrongExplanations: {
      "A": "Four-way flashers on a moving vehicle are specifically for slow-moving situations or hazard warnings, not general use.",
      "C": "The use is not limited to nighttime; it is related to slow-moving situations.",
      "D": "The use is not limited to weather conditions; it is related to slow speed or hazard warnings."
    },
    keyFact: "Four-way flashers on a moving vehicle: only for slow-moving/potential hazard situations."
  },
  {
    id: "safety-072",
    category: "safety",
    subcategory: "warning-devices",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What is the first step a driver should take when the driver's vehicle is stopped on the highway or shoulder for any cause other than necessary traffic stops?",
    choices: [
      { key: "A", text: "Call dispatch" },
      { key: "B", text: "Immediately activate the vehicle's four-way flashers" },
      { key: "C", text: "Set out warning triangles" },
      { key: "D", text: "Turn off the engine" }
    ],
    answer: "B",
    explanation: "The first step is to immediately activate the vehicle's four-way flashers (Section 392.22). Warning devices should then be set out as soon as possible, but the flashers provide immediate warning to approaching traffic.",
    wrongExplanations: {
      "A": "Calling dispatch comes after taking immediate safety measures.",
      "C": "Warning triangles should be set out, but the first immediate action is activating four-way flashers.",
      "D": "Turning off the engine is not the immediate safety priority; activating warning lights is."
    },
    keyFact: "First step when stopped: immediately activate four-way flashers."
  },
  {
    id: "safety-073",
    category: "safety",
    subcategory: "warning-devices",
    type: "mc",
    difficulty: 2,
    tags: ["numbers"],
    question: "For how long may a driver use the four-way flashers as an emergency warning when stopped alongside the road?",
    choices: [
      { key: "A", text: "Indefinitely" },
      { key: "B", text: "No more than 10 minutes, then the driver must place other emergency warning devices" },
      { key: "C", text: "30 minutes" },
      { key: "D", text: "5 minutes" }
    ],
    answer: "B",
    explanation: "If a vehicle is will not or cannot be moved within 10 minutes, the driver must place other emergency warning devices as required by the regulations (Section 392.22). The four-way flashers serve as an immediate warning but must be supplemented with proper warning devices within 10 minutes.",
    wrongExplanations: {
      "A": "Flashers alone are not sufficient indefinitely; warning devices must be placed within 10 minutes.",
      "C": "30 minutes is too long; warning devices must be placed within 10 minutes.",
      "D": "5 minutes is not the regulatory requirement; the threshold is 10 minutes."
    },
    keyFact: "Flashers only for up to 10 minutes, then set out proper warning devices."
  },

  // ============================================================
  // VEHICLE OUT OF SERVICE / DVIR (pages 65-66)
  // ============================================================
  {
    id: "safety-074",
    category: "safety",
    subcategory: "vehicle-inspection",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "If a roadside inspector determines that a driver is in violation of the driving or on-duty limitations or the vehicle is in unsatisfactory mechanical condition, what may happen?",
    choices: [
      { key: "A", text: "A verbal warning only" },
      { key: "B", text: "The inspector can place the driver in an 'out of service' status and the vehicle can be declared 'out of service'" },
      { key: "C", text: "The driver receives a fine only" },
      { key: "D", text: "Nothing -- roadside inspections are advisory only" }
    ],
    answer: "B",
    explanation: "If a roadside inspector determines that a driver is in violation of the driving or on-duty limitations or that the vehicle is in unsatisfactory mechanical condition, each has the authority to declare the driver or vehicle 'out of service.' The driver should contact their dispatcher, supervisor, and get care to the load (Section 396.9).",
    wrongExplanations: {
      "A": "Out-of-service declarations are more serious than verbal warnings.",
      "C": "Beyond fines, the driver or vehicle can be placed out of service and prohibited from operating.",
      "D": "Roadside inspections are not advisory; inspectors have enforcement authority."
    },
    keyFact: "Roadside inspectors can place drivers and vehicles 'out of service.'"
  },
  {
    id: "safety-075",
    category: "safety",
    subcategory: "vehicle-inspection",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What action may be taken if a vehicle is found to be in unsatisfactory mechanical condition?",
    choices: [
      { key: "A", text: "The vehicle may continue to its destination" },
      { key: "B", text: "The vehicle is likely declared 'out of service' and may not be operated until necessary repairs have been made or it is towed to where repairs can be made" },
      { key: "C", text: "The driver must call a tow truck immediately" },
      { key: "D", text: "The driver receives a repair order with 30 days to fix it" }
    ],
    answer: "B",
    explanation: "A vehicle that is found to be in unsatisfactory mechanical condition is likely to be declared 'out of service' and may not be operated until the necessary repairs have been made or until it is towed to where repairs can be made.",
    wrongExplanations: {
      "A": "An out-of-service vehicle may NOT continue to its destination until repairs are made.",
      "C": "Towing is one option, but the vehicle may also be repaired on-site.",
      "D": "There is no 30-day repair window for an out-of-service vehicle; it cannot be operated until repaired."
    },
    keyFact: "Out-of-service vehicle: cannot operate until repaired or towed for repair."
  },
  {
    id: "safety-076",
    category: "safety",
    subcategory: "vehicle-inspection",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What is the driver's responsibility after completion of a roadside inspection?",
    choices: [
      { key: "A", text: "Nothing further is required" },
      { key: "B", text: "The driver will be given a copy of the inspection report which the driver must deliver to the carrier, and the carrier must sign and return the report" },
      { key: "C", text: "The driver must file a report with the DOT" },
      { key: "D", text: "The driver must call their insurance company" }
    ],
    answer: "B",
    explanation: "Per the FMCSR (Federal Motor Carrier Safety Regulations), after a roadside inspection, the driver will be given a copy of the inspection report which the driver must deliver to the motor carrier. The carrier must review, sign, and return the report. If the driver will reach a carrier facility within 24 hours, the report may be turned in at that time. If not, the driver must immediately mail the report to the carrier. The signed copy is kept on file by the carrier for 90 days (Section 396.9).",
    wrongExplanations: {
      "A": "The driver has a clear obligation to deliver the inspection report to the carrier.",
      "C": "The driver delivers the report to the carrier, not directly to the DOT.",
      "D": "The insurance company is not involved in the roadside inspection report process."
    },
    keyFact: "After roadside inspection: deliver report to carrier, carrier signs and keeps for 90 days."
  },
  {
    id: "safety-077",
    category: "safety",
    subcategory: "vehicle-inspection",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What is a DVIR (Driver Vehicle Inspection Report)?",
    choices: [
      { key: "A", text: "A report filed with the DMV annually" },
      { key: "B", text: "A written report prepared by the driver at the end of each day's work on each vehicle operated, listing any defects or deficiencies discovered" },
      { key: "C", text: "An insurance document" },
      { key: "D", text: "A fuel consumption report" }
    ],
    answer: "B",
    explanation: "The DVIR (Driver Vehicle Inspection Report) is a written report that the driver must prepare at the end of each day's work on each vehicle operated. The driver must note any defects or deficiencies discovered, and the report must be reviewed, signed, and any reported defects corrected by the motor carrier before the vehicle is dispatched again.",
    wrongExplanations: {
      "A": "A DVIR is not filed with the DMV; it is an internal carrier/driver document.",
      "C": "A DVIR is not an insurance document; it documents vehicle condition.",
      "D": "A DVIR documents vehicle defects, not fuel consumption."
    },
    keyFact: "DVIR: driver's written end-of-day report listing any vehicle defects or deficiencies."
  },

  // ============================================================
  // LOAD SECUREMENT AND DISTRIBUTION (pages 63-64)
  // ============================================================
  {
    id: "safety-078",
    category: "safety",
    subcategory: "cargo-securement",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What do FMCSA (Federal Motor Carrier Safety Administration) safety regulations require for the distribution of the load?",
    choices: [
      { key: "A", text: "The load can be placed anywhere on the vehicle" },
      { key: "B", text: "The load on every motor vehicle transporting property shall be properly distributed and, if necessary, secured to safely prevent unsafe shifting of the load or unsafe operation of the vehicle" },
      { key: "C", text: "Only heavy items need to be secured" },
      { key: "D", text: "Load distribution is the shipper's responsibility only" }
    ],
    answer: "B",
    explanation: "Per FMCSA (Federal Motor Carrier Safety Administration) regulations (Section 393.100), the load on every motor vehicle transporting property shall be properly distributed and, if necessary, secured in order to safely prevent unsafe shifting of the load or unsafe operations of the vehicle.",
    wrongExplanations: {
      "A": "The load must be properly distributed, not placed anywhere.",
      "C": "All items, not just heavy ones, must be properly distributed and secured.",
      "D": "The driver and carrier share responsibility for proper load distribution."
    },
    keyFact: "All loads must be properly distributed and secured to prevent unsafe shifting."
  },
  {
    id: "safety-079",
    category: "safety",
    subcategory: "cargo-securement",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "How does the load affect the stability of the vehicle?",
    choices: [
      { key: "A", text: "It has no effect on stability" },
      { key: "B", text: "As the trailer is loaded, the center of gravity rises, making it less stable. Freight must be secured against movement and shift from side to side" },
      { key: "C", text: "A higher load always makes the vehicle more stable" },
      { key: "D", text: "Only the weight matters, not the distribution" }
    ],
    answer: "B",
    explanation: "On the trailer, the floor of a trailer is about 4 feet above ground making an empty trailer's center of gravity nearly equal to the height of a car. As the trailer is loaded, the center of gravity rises, making it less stable. Freight must be secured against movement or it may shift from side to side and contribute to diminished stability and rollover potential.",
    wrongExplanations: {
      "A": "Load distribution significantly affects vehicle stability, especially the center of gravity.",
      "C": "A higher load raises the center of gravity, making the vehicle LESS stable, not more.",
      "D": "Both weight and distribution matter; a poorly distributed load can be more dangerous than a heavier, well-distributed one."
    },
    keyFact: "Higher center of gravity = less stability = greater rollover risk."
  },
  {
    id: "safety-080",
    category: "safety",
    subcategory: "cargo-securement",
    type: "mc",
    difficulty: 2,
    tags: ["regulation", "numbers"],
    question: "What are the special requirements of the FMCSRs (Federal Motor Carrier Safety Regulations) for marking loads that project beyond the sides or rear of a motor vehicle?",
    choices: [
      { key: "A", text: "No marking is required" },
      { key: "B", text: "If a load extends more than 4 inches beyond the side of the vehicle or more than 4 feet beyond the rear, it must be marked with flags, lamps, or reflectors" },
      { key: "C", text: "Only rear projections need to be marked" },
      { key: "D", text: "Projections are not permitted" }
    ],
    answer: "B",
    explanation: "Per FMCSR (Federal Motor Carrier Safety Regulations) Section 393.11, if the load projects more than 4 inches beyond the side of the vehicle, the front projection must be marked with an amber lamp visible from the front and side, and the rear projection must be marked with a red lamp visible from the rear and side. A load extending 4 feet or more beyond the rear of a vehicle must be marked with a red flag, lamp, or reflector at each point where it extends.",
    wrongExplanations: {
      "A": "Projecting loads must be marked per FMCSR requirements.",
      "C": "Both side and rear projections must be marked with proper indicators.",
      "D": "Projections are permitted but must be properly marked."
    },
    keyFact: "4 inches beyond side or 4 feet beyond rear = must be marked with flags/lamps/reflectors."
  },
  {
    id: "safety-081",
    category: "safety",
    subcategory: "cargo-securement",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "Front facing red lights on an interstate truck or combination are prohibited except for emergency or service vehicles authorized by state laws.",
    answer: true,
    explanation: "Per FMCSR (Federal Motor Carrier Safety Regulations) Section 393.11, front facing red lights are prohibited on interstate trucks and combinations, except for emergency or service vehicles which are authorized by state laws to have such lights. The restriction does not apply to the rear facing lens of a front-mounted double-faced turn signal.",
    keyFact: "No front-facing red lights on commercial vehicles (except emergency/service vehicles)."
  },

  // ============================================================
  // BRAKING SYSTEMS AND BRAKE FADE (pages 66-68)
  // ============================================================
  {
    id: "safety-082",
    category: "safety",
    subcategory: "braking",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What should the driver do if a front tire fails suddenly?",
    choices: [
      { key: "A", text: "Immediately slam on the brakes" },
      { key: "B", text: "Grip the steering wheel firmly, avoid heavy braking, and steer to a straight course while gradually slowing down" },
      { key: "C", text: "Immediately accelerate to maintain control" },
      { key: "D", text: "Turn the wheel sharply in the opposite direction" }
    ],
    answer: "B",
    explanation: "Because front tire failures occur less often than rear tire failures and because of the steering characteristics of trucks, a driver should always be alert to any changes in the ride, handling, or sound of the unit, and should check for a possible tire failure by pulling off the road at a safe location.",
    wrongExplanations: {
      "A": "Slamming on the brakes during a tire failure can cause loss of control.",
      "C": "Accelerating during a tire failure increases danger.",
      "D": "Turning the wheel sharply can cause a rollover or loss of control."
    },
    keyFact: "Front tire failure: grip wheel firmly, avoid heavy braking, gradually slow down."
  },
  {
    id: "safety-083",
    category: "safety",
    subcategory: "braking",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What are the consequences of failure to bleed sludge and moisture from the brake system?",
    choices: [
      { key: "A", text: "No consequences" },
      { key: "B", text: "In cold weather, accumulated moisture in the brake system will freeze and obstruct the brake lines, preventing brakes from functioning properly; sludge may also contaminate valves" },
      { key: "C", text: "Improved brake performance" },
      { key: "D", text: "Only cosmetic rust on brake components" }
    ],
    answer: "B",
    explanation: "In cold weather, accumulated moisture in the brake system will freeze and obstruct the brake lines, preventing the brakes from functioning. Sludge can build up, stopping valves from operating properly, and dirt may be filtered through the brake system causing destruction of vital parts and malfunction.",
    wrongExplanations: {
      "A": "Failing to bleed moisture has serious safety consequences.",
      "C": "Moisture and sludge degrade brake performance, they do not improve it.",
      "D": "The consequences go far beyond cosmetic rust; brake failure can result."
    },
    keyFact: "Moisture in brakes = freezing in cold weather = brake failure."
  },
  {
    id: "safety-084",
    category: "safety",
    subcategory: "braking",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What does the professional driver rely on as the principal control of the unit when descending a grade?",
    choices: [
      { key: "A", text: "The service brakes" },
      { key: "B", text: "The braking effect of the engine in a lower gear" },
      { key: "C", text: "The parking brake" },
      { key: "D", text: "Coasting in neutral" }
    ],
    answer: "B",
    explanation: "To control the vehicle, the driver utilizes the braking effect of the engine and selects a lower gear which will enable speed to be held at a safe level for the downgrade with minimum use of the service brakes.",
    wrongExplanations: {
      "A": "Service brakes should be used minimally on grades to prevent brake fade.",
      "C": "The parking brake is not used for speed control on grades.",
      "D": "Coasting in neutral removes engine braking and is extremely dangerous on grades."
    },
    keyFact: "Downgrade: use engine braking in a lower gear, minimize service brake use."
  },
  {
    id: "safety-085",
    category: "safety",
    subcategory: "braking",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What is brake fade?",
    choices: [
      { key: "A", text: "Normal brake wear over time" },
      { key: "B", text: "When the driver overuses the brakes, causing them to build up heat and lose stopping power; the driver presses harder but the vehicle may not slow down adequately" },
      { key: "C", text: "A brake warning light on the dashboard" },
      { key: "D", text: "The sound brakes make when they are cold" }
    ],
    answer: "B",
    explanation: "Brake fade occurs when the driver overuses the brakes, causing them to overheat and lose their effectiveness. The braking effect of the engine should be used to minimize brake use on long downgrades. If the driver overuses the brakes, speed may build up so much that it will be impossible to slow the vehicle adequately.",
    wrongExplanations: {
      "A": "Brake fade is not normal wear; it is a dangerous condition caused by overheating.",
      "C": "Brake fade is a physical loss of braking power, not a dashboard warning light.",
      "D": "Cold brakes may squeak but that is not brake fade."
    },
    keyFact: "Brake fade = overheated brakes losing stopping power from overuse."
  },
  {
    id: "safety-086",
    category: "safety",
    subcategory: "braking",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "How should brakes be used to control speed on a long downgrade?",
    choices: [
      { key: "A", text: "Hold the brake pedal down constantly" },
      { key: "B", text: "Apply brakes firmly to slow well below the desired speed, then release brakes until speed returns to the safe speed for the grade" },
      { key: "C", text: "Pump the brakes rapidly" },
      { key: "D", text: "Do not use the brakes at all" }
    ],
    answer: "B",
    explanation: "A driver should never forget that the use of brakes on a long downgrade is only supplementary to the braking effect of the engine. When applying the brakes, a driver should apply them hard enough to feel a definite reduction of speed. When the vehicle's speed has been brought well below the desired speed for the grade, the driver should release the brakes and allow them to cool. This snub braking technique helps prevent brake fade.",
    wrongExplanations: {
      "A": "Holding brakes down constantly causes brake fade and overheating.",
      "C": "Rapid pumping is not the correct technique; firm snub braking is proper.",
      "D": "Not using brakes at all on a downgrade would allow unsafe speed buildup."
    },
    keyFact: "Snub braking: apply firmly to slow well below target speed, release, let brakes cool, repeat."
  },
  {
    id: "safety-087",
    category: "safety",
    subcategory: "braking",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "Can a unit equipped with a retarder be safely driven down a long grade at a higher speed with brakes not needed or only occasionally needed?",
    choices: [
      { key: "A", text: "Yes, a retarder eliminates the need for brakes entirely" },
      { key: "B", text: "Certainly not -- a retarder cannot be driven faster than a vehicle without one; the driver must use the appropriate gear and use brakes for emergencies or to make a full stop" },
      { key: "C", text: "Yes, retarders double the braking power" },
      { key: "D", text: "Only on straight roads" }
    ],
    answer: "B",
    explanation: "Certainly not. A vehicle equipped with a retarder cannot be driven faster down a long grade than a vehicle without one. The driver must enter the appropriate gear to maintain control and save the brakes for use in emergencies or to make a full stop.",
    wrongExplanations: {
      "A": "A retarder is supplementary and does not replace brakes.",
      "C": "Retarders do not double braking power; they supplement engine braking.",
      "D": "This applies on all grades regardless of road shape."
    },
    keyFact: "A retarder supplements engine braking but does NOT replace proper gear selection and braking."
  },
  {
    id: "safety-088",
    category: "safety",
    subcategory: "braking",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What should a driver do in order to hold a parked unit in place on a grade?",
    choices: [
      { key: "A", text: "Leave it in neutral" },
      { key: "B", text: "Apply the parking brakes, put the transmission in a low gear, and turn the front wheels toward the curb or shoulder" },
      { key: "C", text: "Only apply the parking brake" },
      { key: "D", text: "Only turn the wheels" }
    ],
    answer: "B",
    explanation: "To hold a parked unit in place on a grade, the driver should: (1) apply the parking brakes, (2) put the transmission in a lower gear, and (3) turn the front wheels appropriately toward the curb to prevent rollaway.",
    wrongExplanations: {
      "A": "Leaving in neutral on a grade is extremely dangerous; the vehicle could roll away.",
      "C": "The parking brake alone may not be sufficient on a steep grade.",
      "D": "Turning wheels alone without the parking brake is insufficient."
    },
    keyFact: "Park on grade: parking brakes + low gear + wheels turned toward curb."
  },

  // ============================================================
  // ABS (ANTI-LOCK BRAKING SYSTEM) (pages 68-69)
  // ============================================================
  {
    id: "safety-089",
    category: "safety",
    subcategory: "abs",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What is the purpose of an anti-lock braking system (ABS)?",
    choices: [
      { key: "A", text: "To make the vehicle stop faster" },
      { key: "B", text: "To reduce the likelihood of wheel lock-up, reduce the risk of losing control and jackknifing, and allow the driver to maintain steering control" },
      { key: "C", text: "To eliminate the need for regular brake maintenance" },
      { key: "D", text: "To allow the vehicle to stop on ice without any skidding" }
    ],
    answer: "B",
    explanation: "ABS (Anti-lock Braking System) is intended to reduce the likelihood of wheel lock-up (skidding), reduce the risk of losing control of the vehicle if the brakes are applied too hard for braking conditions, and take advantage of the fact that maximum braking and any steering occur just before the wheel starts to lock up. With ABS, the system automatically releases the brake when the wheel starts to lock up and reapplies it when sufficient traction is again available.",
    wrongExplanations: {
      "A": "ABS does not necessarily shorten stopping distance; it prevents lock-up and maintains steering control.",
      "C": "ABS does not eliminate the need for brake maintenance.",
      "D": "ABS helps maintain control on ice but does not completely eliminate skidding."
    },
    keyFact: "ABS prevents wheel lock-up, maintains steering control, reduces jackknife risk."
  },
  {
    id: "safety-090",
    category: "safety",
    subcategory: "abs",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "ABS (Anti-lock Braking System) can provide shorter stopping distances in all conditions.",
    answer: false,
    explanation: "ABS (Anti-lock Braking System) cannot necessarily shorten stopping distances. The purpose of ABS is to help the driver maintain control during hard braking by preventing wheel lock-up and out-of-control skids. ABS is not designed to affect the rate at which the brakes slow the vehicle, but to prevent lock-up.",
    keyFact: "ABS maintains control but does NOT always shorten stopping distance."
  },
  {
    id: "safety-091",
    category: "safety",
    subcategory: "abs",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "ABS (Anti-lock Braking System) can be helpful in preventing jackknifing when a driver has selected the appropriate speed for conditions.",
    answer: true,
    explanation: "If the driver has selected speed appropriate to the road conditions, ABS (Anti-lock Braking System) should be helpful in preventing jackknifing. Tests have shown the ABS-equipped tractor does slow down when the brakes are applied, because the ABS helps maintain directional stability. It has the potential to reduce jackknifing.",
    keyFact: "ABS helps prevent jackknifing by maintaining directional stability."
  },

  // ============================================================
  // FOLLOWING DISTANCE (page 69)
  // ============================================================
  {
    id: "safety-092",
    category: "safety",
    subcategory: "following-distance",
    type: "mc",
    difficulty: 2,
    tags: ["numbers", "procedure"],
    question: "What is the recommended following distance formula for CMV (Commercial Motor Vehicle) drivers when driving under 40 mph?",
    choices: [
      { key: "A", text: "2 seconds for any size vehicle" },
      { key: "B", text: "At least 1 second for every 10 feet of vehicle length" },
      { key: "C", text: "3 car lengths" },
      { key: "D", text: "100 feet regardless of speed" }
    ],
    answer: "B",
    explanation: "Safety experts recommend at least a 1-second following distance when driving under 40 mph, with following distance increasing at least 1 second per 10 feet of vehicle length, with an additional second added if over 40 mph. For example, a 40-foot vehicle at 40 mph should have at least 4 seconds of following distance.",
    wrongExplanations: {
      "A": "A flat 2 seconds does not account for vehicle length, which significantly affects stopping distance.",
      "C": "Car lengths are not the measurement standard; seconds per 10 feet of vehicle length is used.",
      "D": "A flat 100 feet does not account for speed or vehicle length."
    },
    keyFact: "Under 40 mph: 1 second per 10 feet of vehicle length."
  },
  {
    id: "safety-093",
    category: "safety",
    subcategory: "following-distance",
    type: "mc",
    difficulty: 3,
    tags: ["numbers", "procedure"],
    question: "When traveling over 40 mph, what additional following distance should a CMV (Commercial Motor Vehicle) driver add?",
    choices: [
      { key: "A", text: "No additional distance needed" },
      { key: "B", text: "An additional 1 second beyond the base calculation" },
      { key: "C", text: "An additional 5 seconds" },
      { key: "D", text: "Double the base distance" }
    ],
    answer: "B",
    explanation: "When traveling over 40 mph, an additional 1 second should be added to the base following distance calculation (1 second per 10 feet of vehicle length). So a 40-foot vehicle at speeds over 40 mph should maintain at least 5 seconds of following distance (4 seconds base + 1 additional second).",
    wrongExplanations: {
      "A": "Higher speeds require additional following distance beyond the base calculation.",
      "C": "Only 1 additional second is needed over 40 mph, not 5.",
      "D": "The distance is increased by 1 second, not doubled."
    },
    keyFact: "Over 40 mph: add 1 extra second to the base following distance."
  },
  {
    id: "safety-094",
    category: "safety",
    subcategory: "following-distance",
    type: "fill",
    difficulty: 3,
    tags: ["numbers"],
    question: "A 60-foot vehicle traveling at 50 mph should maintain a following distance of at least ______ seconds.",
    acceptedAnswers: ["7", "seven", "7 seconds", "seven seconds"],
    answer: "7",
    explanation: "For a 60-foot vehicle at 50 mph: 60 feet / 10 feet = 6 seconds base + 1 additional second (for being over 40 mph) = 7 seconds total following distance.",
    keyFact: "60-foot vehicle over 40 mph = 6 + 1 = 7 seconds following distance."
  },

  // ============================================================
  // SPEED AND STOPPING DISTANCE (pages 69-70)
  // ============================================================
  {
    id: "safety-095",
    category: "safety",
    subcategory: "speed-management",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "Does a bumpy or choppy road surface affect stopping distance?",
    choices: [
      { key: "A", text: "No, road surface does not affect stopping" },
      { key: "B", text: "Yes -- on uneven surfaces, tires may get momentarily airborne and vehicles under loaded conditions will not always have full traction" },
      { key: "C", text: "Only on gravel roads" },
      { key: "D", text: "Only when the road is wet" }
    ],
    answer: "B",
    explanation: "Stopping is controlled by friction. When the vehicle is traveling over an uneven surface, some tires may get momentarily airborne, and vehicles operating continuously under loaded conditions will not always have full traction; some will not. Either condition causes the brakes to become less effective.",
    wrongExplanations: {
      "A": "Road surface has a direct impact on stopping distance through friction.",
      "C": "Bumpy and uneven surfaces of all types affect stopping, not just gravel.",
      "D": "Bumpy surfaces affect stopping distance even when dry."
    },
    keyFact: "Bumpy roads reduce traction = longer stopping distances."
  },
  {
    id: "safety-096",
    category: "safety",
    subcategory: "speed-management",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "How does the professional driver keep traction on slippery streets?",
    choices: [
      { key: "A", text: "By driving at the speed limit" },
      { key: "B", text: "By driving at a low rate of speed with gradual application of acceleration and brakes, and no abrupt turning; adequate tread depth on tires is a must" },
      { key: "C", text: "By using four-way flashers" },
      { key: "D", text: "By applying the brakes frequently" }
    ],
    answer: "B",
    explanation: "To keep traction on a slippery street, the driver should drive at a low rate of speed with gradual application of acceleration and brakes, and no abrupt turning. Adequate tread depth on the tires is a must.",
    wrongExplanations: {
      "A": "The speed limit may be too fast for slippery conditions.",
      "C": "Four-way flashers provide visibility but do not help maintain traction.",
      "D": "Frequent brake application on slippery roads increases the risk of skidding."
    },
    keyFact: "Slippery roads: slow speed, gradual acceleration/braking, no abrupt turns, good tire tread."
  },

  // ============================================================
  // SKID RECOVERY (page 70)
  // ============================================================
  {
    id: "safety-097",
    category: "safety",
    subcategory: "skid-recovery",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "How does a driver attempt to recover from a skid?",
    choices: [
      { key: "A", text: "Steer in the opposite direction of the skid and brake hard" },
      { key: "B", text: "Release the brakes, steer in the direction the rear of the vehicle is sliding to bring the vehicle back to a straight line of travel, and avoid acceleration which could cause another skid" },
      { key: "C", text: "Accelerate out of the skid" },
      { key: "D", text: "Turn the steering wheel sharply to the left" }
    ],
    answer: "B",
    explanation: "To recover from a skid, the driver should steer in the direction that the rear of the vehicle is sliding, in order to bring the vehicle back to a straight line of travel. The driver should avoid acceleration which could cause another skid and get the vehicle under control.",
    wrongExplanations: {
      "A": "Steering opposite to the skid and braking hard will worsen the skid.",
      "C": "Accelerating during a skid can cause the skid to worsen.",
      "D": "Sharp wheel turns can worsen a skid; gentle correction in the direction of the slide is correct."
    },
    keyFact: "Skid recovery: steer in direction rear is sliding, release brakes, avoid accelerating."
  },
  {
    id: "safety-098",
    category: "safety",
    subcategory: "skid-recovery",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "Why is it so important to slow down before entering a curve rather than braking while in the curve?",
    choices: [
      { key: "A", text: "It is not important -- you can brake in the curve" },
      { key: "B", text: "In a curve, centrifugal force is already pulling the vehicle toward the outside of the curve; if the driver applies brakes, the tires can become unbalanced, directional stability is reduced, and the chances of skidding or jackknifing increase" },
      { key: "C", text: "Only to save fuel" },
      { key: "D", text: "To reduce tire wear only" }
    ],
    answer: "B",
    explanation: "In a curve, centrifugal force is already pulling the vehicle toward the outside of the curve. If the driver applies brakes in the curve, the tires can become unbalanced between traction forces, directional stability is reduced, and the chances of skidding or jackknifing increase.",
    wrongExplanations: {
      "A": "Braking in a curve is dangerous because of centrifugal force and reduced traction.",
      "C": "Fuel savings are not the primary concern; safety and stability are.",
      "D": "Reducing tire wear is secondary; the primary concern is preventing skids and jackknifing."
    },
    keyFact: "Slow down BEFORE the curve -- braking in a curve risks skidding/jackknifing."
  },
  {
    id: "safety-099",
    category: "safety",
    subcategory: "skid-recovery",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What should the driver do if the wheels on one side of the vehicle go off the pavement?",
    choices: [
      { key: "A", text: "Turn the steering wheel sharply back onto the road" },
      { key: "B", text: "Lay off the throttle, concentrate on steering, and release the brakes. Once the vehicle has slowed down, turn the vehicle back onto the road safely" },
      { key: "C", text: "Immediately accelerate back onto the road" },
      { key: "D", text: "Slam on the brakes" }
    ],
    answer: "B",
    explanation: "The driver should lay off the throttle, concentrate on steering, and avoid applying the brakes. Once the vehicle has slowed down to a safe speed, the driver can then steer the vehicle safely back onto the road.",
    wrongExplanations: {
      "A": "A sharp turn back onto the road can cause a rollover.",
      "C": "Accelerating can cause loss of control.",
      "D": "Slamming the brakes with wheels off the pavement can cause loss of control."
    },
    keyFact: "Off pavement: ease off throttle, steer straight, slow down, then gently return to road."
  },

  // ============================================================
  // SPEED TOO FAST FOR CONDITIONS (page 70)
  // ============================================================
  {
    id: "safety-100",
    category: "safety",
    subcategory: "speed-management",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What is meant by 'speed too fast for conditions'?",
    choices: [
      { key: "A", text: "Driving over the posted speed limit" },
      { key: "B", text: "Operating the vehicle at a speed that will not permit it to be properly controlled or stopped between the time the driver perceives a hazard and the time the vehicle reaches it" },
      { key: "C", text: "Driving faster than other traffic" },
      { key: "D", text: "Driving the posted speed limit in good weather" }
    ],
    answer: "B",
    explanation: "Speed too fast for conditions means operating the vehicle at a speed that will not permit it to be properly controlled or stopped between the time the driver perceives a hazard and the time the vehicle reaches it. On a straight, dry, level road in daylight, 50 mph might be 'too fast for conditions' but 25 mph on the same road when it is slippery would be 'too fast for conditions' as well.",
    wrongExplanations: {
      "A": "Speed too fast for conditions can occur even below the posted limit.",
      "C": "Driving faster than other traffic is not the definition; it is about control relative to hazards.",
      "D": "Driving the posted limit in good weather is generally acceptable, not the definition of too fast."
    },
    keyFact: "Too fast for conditions = cannot control or stop before reaching a perceived hazard."
  },
  {
    id: "safety-101",
    category: "safety",
    subcategory: "speed-management",
    type: "tf",
    difficulty: 2,
    tags: ["procedure"],
    question: "There is a rule of thumb by which a professional driver can judge the safe speed for a given stretch of road or highway.",
    answer: false,
    explanation: "Studies have shown that the speed at which traveling a road is a personal judgment. No rule of thumb is universal because weather and surface conditions require further speed reduction. On some stretches, a separate advisory speed for trucks may be posted and that should be a driver's guideline for a safe speed.",
    keyFact: "No universal speed rule of thumb exists -- safe speed is always a judgment call."
  },

  // ============================================================
  // QUICK DECISIONS AND DRIVING ABILITY (page 70)
  // ============================================================
  {
    id: "safety-102",
    category: "safety",
    subcategory: "driver-ability",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "How can a driver's ability to make quick, correct decisions be improved?",
    choices: [
      { key: "A", text: "Only through experience" },
      { key: "B", text: "Through experience, good driving habits, good mental and emotional habits, and good physical condition and adequate rest" },
      { key: "C", text: "Through speed training only" },
      { key: "D", text: "It cannot be improved" }
    ],
    answer: "B",
    explanation: "A driver's ability to make quick, correct decisions can be improved by acquiring: (1) Experience, (2) Good driving habits, (3) Good mental and emotional habits, (4) Good physical condition and adequate rest.",
    wrongExplanations: {
      "A": "Experience alone is insufficient; good habits and physical condition also matter.",
      "C": "Speed training is not one of the listed improvement factors.",
      "D": "Decision-making ability can definitely be improved through practice and good habits."
    },
    keyFact: "Better decisions through: experience, good habits, good mental/physical condition, and rest."
  },

  // ============================================================
  // MIRRORS AND BACKING (pages 70-71)
  // ============================================================
  {
    id: "safety-103",
    category: "safety",
    subcategory: "mirrors",
    type: "mc",
    difficulty: 2,
    tags: ["numbers", "procedure"],
    question: "How often should a professional driver check their mirrors?",
    choices: [
      { key: "A", text: "Every 30 seconds" },
      { key: "B", text: "Every 5 to 8 seconds" },
      { key: "C", text: "Every minute" },
      { key: "D", text: "Only when changing lanes" }
    ],
    answer: "B",
    explanation: "A driver should make sure the mirrors are properly checked every 5 to 8 seconds. A driver must also know about the blind spots that exist even with properly adjusted mirrors. Mirrors that are dirty or not correctly adjusted can make the blind areas larger.",
    wrongExplanations: {
      "A": "Every 30 seconds is too infrequent; mirrors should be checked every 5 to 8 seconds.",
      "C": "Every minute is far too infrequent for proper mirror monitoring.",
      "D": "Mirrors should be checked continuously, not just when changing lanes."
    },
    keyFact: "Check mirrors every 5 to 8 seconds."
  },
  {
    id: "safety-104",
    category: "safety",
    subcategory: "mirrors",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What precautions must be observed if a guide provides assistance when backing?",
    choices: [
      { key: "A", text: "The driver can fully rely on the guide and not look" },
      { key: "B", text: "The driver has sole control and full responsibility for safely backing the vehicle, and must make sure the guide is visible; if the guide disappears from view, the driver must stop" },
      { key: "C", text: "Only the guide is responsible for safety" },
      { key: "D", text: "The guide must be in the cab" }
    ],
    answer: "B",
    explanation: "It is important to remember that the driver has sole control of the vehicle and the full responsibility for safely backing it. The driver should also make sure they can always see the guide. If the guide disappears from view, the driver must stop immediately. Statistics suggest that one out of every four trucking accidents can be blamed on poor backing techniques.",
    wrongExplanations: {
      "A": "The driver must always maintain control and must be able to see the guide.",
      "C": "The driver, not the guide, has full responsibility for safe backing.",
      "D": "The guide should be outside the vehicle providing visual guidance."
    },
    keyFact: "Driver has SOLE responsibility for backing. If guide is not visible, STOP."
  },
  {
    id: "safety-105",
    category: "safety",
    subcategory: "mirrors",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What are the two principal safety concerns associated with right turns in a truck?",
    choices: [
      { key: "A", text: "Speed and visibility" },
      { key: "B", text: "The possibility of another vehicle trying to pass on the right, and the danger of the rear unit cutting the corner and striking a stationary object or pedestrian" },
      { key: "C", text: "Fuel consumption and tire wear" },
      { key: "D", text: "Lane width and road surface" }
    ],
    answer: "B",
    explanation: "When turning right, all drivers must be alert to: (1) the possibility that there may be another vehicle trying to pass on the right; and (2) the fact that if the rear of the unit cuts in close, especially if the wheels go up onto the sidewalk, there is danger of striking a stationary object or a pedestrian.",
    wrongExplanations: {
      "A": "While relevant, the specific safety concerns are right-side passing vehicles and rear unit cutting the corner.",
      "C": "Fuel and tire wear are not the primary safety concerns during turns.",
      "D": "Lane width and road surface are secondary to the two primary right-turn dangers."
    },
    keyFact: "Right turns: watch for vehicles passing on right + rear unit cutting the corner."
  },

  // ============================================================
  // NIGHT DRIVING AND HEADLIGHTS (page 71)
  // ============================================================
  {
    id: "safety-106",
    category: "safety",
    subcategory: "night-driving",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "When driving in fog, should a driver use high-beam or low-beam headlights?",
    choices: [
      { key: "A", text: "High-beam headlights for maximum visibility" },
      { key: "B", text: "Low-beam headlights because the drops of fog reflect the light back at a lower angle, providing less reflection into the driver's eyes" },
      { key: "C", text: "No headlights" },
      { key: "D", text: "Parking lights only" }
    ],
    answer: "B",
    explanation: "When driving in fog, it is preferable to use the vehicle's low-beam headlights because the drops of fog reflect the light back at a lower angle and therefore less reflection into the driver's eyes.",
    wrongExplanations: {
      "A": "High beams reflect off fog droplets and create glare that reduces visibility.",
      "C": "Headlights must be used in fog for visibility to yourself and others.",
      "D": "Parking lights alone are insufficient for driving in fog conditions."
    },
    keyFact: "Use LOW beams in fog -- high beams reflect off fog and reduce visibility."
  },
  {
    id: "safety-107",
    category: "safety",
    subcategory: "night-driving",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What precautions should be taken when it is not possible to see close to the right side when turning right at night?",
    choices: [
      { key: "A", text: "Turn quickly to minimize time in the blind spot" },
      { key: "B", text: "Keep the unit straight as long as possible to get the best look at what is ahead, and keep the turning radius as tight as safely possible" },
      { key: "C", text: "Honk the horn repeatedly" },
      { key: "D", text: "Have a passenger get out and look" }
    ],
    answer: "B",
    explanation: "In addition to signaling and slowing down, a driver should keep the unit straight as long as possible to get the best look at what is ahead using the headlights, and should try to keep the turning radius as tight as is safely possible. When it appears safe, the driver should start the turn slowly. If the driver hears a horn, the driver should be prepared to stop.",
    wrongExplanations: {
      "A": "Turning quickly reduces the driver's ability to identify hazards.",
      "C": "Honking the horn is not the primary precaution; maintaining visibility is.",
      "D": "Having a passenger get out is impractical in most situations."
    },
    keyFact: "Night right turns: stay straight as long as possible for headlight visibility, tight radius."
  },

  // ============================================================
  // DEPTH PERCEPTION AND PROFESSIONAL DRIVING (page 71)
  // ============================================================
  {
    id: "safety-108",
    category: "safety",
    subcategory: "perception",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "Why is 'depth perception' important in the professional truck driver?",
    choices: [
      { key: "A", text: "It helps the driver select the correct radio station" },
      { key: "B", text: "A professional driver needs depth perception to judge distances of objects and spaces ahead and to judge distances in relation to maneuvering, overtaking, and passing other vehicles" },
      { key: "C", text: "It helps the driver read road signs" },
      { key: "D", text: "It is not important for truck drivers" }
    ],
    answer: "B",
    explanation: "A professional driver needs depth perception to judge distances of objects and spaces ahead and to judge distances in relation to maneuvering, overtaking, and passing other vehicles, and in parking and backing.",
    wrongExplanations: {
      "A": "Depth perception has nothing to do with radio operation.",
      "C": "While vision is needed for signs, depth perception specifically relates to judging distances.",
      "D": "Depth perception is critically important for truck drivers."
    },
    keyFact: "Depth perception = judging distances for maneuvering, passing, parking, and backing."
  },
  {
    id: "safety-109",
    category: "safety",
    subcategory: "perception",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "How does the professional driver avoid being blinded by the glare of oncoming headlights?",
    choices: [
      { key: "A", text: "Wear sunglasses at night" },
      { key: "B", text: "Look to the right toward the right-hand edge of the pavement and use that edge as a guideline" },
      { key: "C", text: "Flash high beams at the oncoming vehicle" },
      { key: "D", text: "Close one eye" }
    ],
    answer: "B",
    explanation: "A professional driver avoids being blinded by the glare of oncoming headlights by looking into the approaching headlights. Rather, the driver looks toward the right-hand edge of the pavement and uses that edge as a guideline.",
    wrongExplanations: {
      "A": "Sunglasses at night reduce overall visibility dangerously.",
      "C": "Flashing high beams at oncoming traffic can blind the other driver.",
      "D": "Closing one eye is not a safe or effective technique."
    },
    keyFact: "Avoid headlight glare: look at right-hand edge of pavement as guideline."
  },

  // ============================================================
  // RECORDABLE CRASH DEFINITION (page 71)
  // ============================================================
  {
    id: "safety-110",
    category: "safety",
    subcategory: "crash-reporting",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "According to the FMCSR (Federal Motor Carrier Safety Regulations), what is the definition of a recordable crash?",
    choices: [
      { key: "A", text: "Any contact between two vehicles" },
      { key: "B", text: "An occurrence involving a commercial motor vehicle operating in interstate or intrastate commerce which results in a fatality, an injury transported away from the scene, or one or more vehicles being towed from the scene for damage" },
      { key: "C", text: "Only crashes involving fatalities" },
      { key: "D", text: "Any crash requiring a police report" }
    ],
    answer: "B",
    explanation: "Per FMCSR (Federal Motor Carrier Safety Regulations) Section 390.5, a recordable crash is defined as an occurrence involving a commercial motor vehicle operating in interstate or intrastate commerce, which results in any of the following: (1) a fatality; (2) an injury transported away from the scene; or (3) one or more vehicles being towed from the scene for damage.",
    wrongExplanations: {
      "A": "Not every contact between vehicles meets the recordable crash definition.",
      "C": "Recordable crashes also include injuries requiring transport and vehicles towed for damage.",
      "D": "A police report alone does not define a recordable crash; specific outcomes must occur."
    },
    keyFact: "Recordable crash: fatality, injury transport, or vehicle towed for damage."
  },

  // ============================================================
  // CRASH REPORTING - WHO, WHAT, WHERE (page 72)
  // ============================================================
  {
    id: "safety-111",
    category: "safety",
    subcategory: "crash-reporting",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What procedure should the interstate driver follow if involved in a crash?",
    choices: [
      { key: "A", text: "Leave the scene and call later" },
      { key: "B", text: "Take all reasonable precautions to prevent further accidents, render aid to injured, notify police, fill out a preliminary crash report, be polite, and follow company policy on post-crash reporting" },
      { key: "C", text: "Only exchange insurance information" },
      { key: "D", text: "Only notify the insurance company" }
    ],
    answer: "B",
    explanation: "If an interstate driver is involved in a crash, the driver should: (1) Take all reasonable precautions to prevent further accidents; (2) Render all possible assistance to the injured, when safe to do; (3) Notify the police and call the company; (4) Fill out a preliminary crash report and get the names of all persons involved; (5) Be polite and give their name and company name; (6) Make no statements as to who was at fault; (7) Stay at the scene until instructed by their company to leave; (8) Follow company policy on post-crash reporting.",
    wrongExplanations: {
      "A": "Leaving the scene of a crash is illegal and can result in serious penalties.",
      "C": "Much more is required than just exchanging insurance information.",
      "D": "The driver must take multiple immediate actions before just notifying the insurance company."
    },
    keyFact: "After crash: prevent further accidents, aid injured, notify police/company, get names, be polite, no fault statements."
  },
  {
    id: "safety-112",
    category: "safety",
    subcategory: "crash-reporting",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What are the three points to remember when reporting an emergency (WHO, WHAT, WHERE)?",
    choices: [
      { key: "A", text: "Who saw it, what they saw, and where they were standing" },
      { key: "B", text: "WHO (driver name, phone number, company, where the driver will be), WHAT (type of emergency such as accident, illness, fire), WHERE (location including road name, mile marker, nearby landmarks)" },
      { key: "C", text: "Who to blame, what happened, where to send the bill" },
      { key: "D", text: "Who was driving, what the speed limit was, where the insurance card is" }
    ],
    answer: "B",
    explanation: "When reporting an emergency, a driver should report the 'who, what, and where' of the incident, making sure the message is complete: WHO -- the driver should give their name, the phone number from which the driver is calling, and where the driver will be; WHAT -- what happened (accident, illness, fire, or other emergency); WHERE -- wherever possible, the driver should indicate the route number or street name, nearest intersection, and approximate distance from a nearby point.",
    wrongExplanations: {
      "A": "The WHO refers to the reporting driver, not witnesses.",
      "C": "This is not the correct interpretation of WHO, WHAT, WHERE.",
      "D": "While some of these are relevant, they do not capture the proper emergency reporting framework."
    },
    keyFact: "WHO = your name/number/location, WHAT = type of emergency, WHERE = road/intersection/landmarks."
  },
  {
    id: "safety-113",
    category: "safety",
    subcategory: "crash-reporting",
    type: "tf",
    difficulty: 1,
    tags: ["procedure"],
    question: "When involved in a crash, a driver should make statements about who was at fault.",
    answer: false,
    explanation: "When involved in a crash, the driver should make no statements as to who was at fault, and no statements to the press. The driver should be polite and give their name and company name and show their CDL (Commercial Driver's License) to the police or anyone involved in the crash.",
    keyFact: "NEVER make statements about who was at fault in a crash."
  },
  {
    id: "safety-114",
    category: "safety",
    subcategory: "crash-reporting",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What causes the most accidents?",
    choices: [
      { key: "A", text: "Vehicle mechanical failure" },
      { key: "B", text: "Human error" },
      { key: "C", text: "Road conditions" },
      { key: "D", text: "Weather" }
    ],
    answer: "B",
    explanation: "Human error causes the most accidents. This includes all driver-related factors such as fatigue, distraction, speeding, and impaired driving.",
    wrongExplanations: {
      "A": "While mechanical failure causes some accidents, human error is the leading cause.",
      "C": "Road conditions contribute to accidents, but human error is the primary cause.",
      "D": "Weather is a contributing factor, but human error is the number one cause."
    },
    keyFact: "Human error is the #1 cause of accidents."
  },

  // ============================================================
  // WHAT TO DO IF VEHICLE STRIKES UNATTENDED VEHICLE (page 73)
  // ============================================================
  {
    id: "safety-115",
    category: "safety",
    subcategory: "crash-reporting",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What is the driver required to do if their vehicle strikes an unattended vehicle on the highway?",
    choices: [
      { key: "A", text: "Drive away if no one sees it" },
      { key: "B", text: "Make every reasonable effort to locate the owner; if not possible, leave a conspicuous note stating the name and address of the driver and the vehicle owner" },
      { key: "C", text: "Just report it to their company" },
      { key: "D", text: "Wait at the scene indefinitely" }
    ],
    answer: "B",
    explanation: "When a driver's vehicle strikes an unattended vehicle on the highway, the driver should make every reasonable effort to locate the condition of the vehicle. If this is not possible, the driver must leave a conspicuous note stating the name and address of the driver who struck the vehicle.",
    wrongExplanations: {
      "A": "Leaving the scene without attempting to locate the owner or leaving a note is illegal.",
      "C": "The driver must make efforts to locate the owner AND leave a note, not just report to the company.",
      "D": "Waiting indefinitely is not required if a proper note is left."
    },
    keyFact: "Struck an unattended vehicle: try to find owner, or leave conspicuous note with name and address."
  },

  // ============================================================
  // MUTCD SIGN SHAPES (page 73)
  // ============================================================
  {
    id: "safety-116",
    category: "safety",
    subcategory: "traffic-signs",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "According to the Manual on Uniform Traffic Control Devices (MUTCD), what shape is an octagonal sign?",
    choices: [
      { key: "A", text: "Yield sign" },
      { key: "B", text: "Stop sign -- used only for stop signs" },
      { key: "C", text: "Warning sign" },
      { key: "D", text: "Speed limit sign" }
    ],
    answer: "B",
    explanation: "The Manual on Uniform Traffic Control Devices (MUTCD) specifies that the octagonal (eight-sided) shape is used only for stop signs.",
    wrongExplanations: {
      "A": "The yield sign is a triangle (inverted), not an octagon.",
      "C": "Warning signs are diamond-shaped, not octagonal.",
      "D": "Speed limit signs are rectangular, not octagonal."
    },
    keyFact: "Octagonal (8-sided) = STOP sign only."
  },
  {
    id: "safety-117",
    category: "safety",
    subcategory: "traffic-signs",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "According to the MUTCD (Manual on Uniform Traffic Control Devices), which sign shape is used to warn of danger?",
    choices: [
      { key: "A", text: "Rectangular" },
      { key: "B", text: "Diamond" },
      { key: "C", text: "Octagonal" },
      { key: "D", text: "Circular" }
    ],
    answer: "B",
    explanation: "The MUTCD (Manual on Uniform Traffic Control Devices) specifies that the diamond shape is used to warn of danger on or near the roadway.",
    wrongExplanations: {
      "A": "Rectangular signs are used for posting information and regulatory messages.",
      "C": "Octagonal signs are used exclusively for stop signs.",
      "D": "Circular signs are used at the advance warning of a railroad crossing."
    },
    keyFact: "Diamond shape = warning of danger."
  },
  {
    id: "safety-118",
    category: "safety",
    subcategory: "traffic-signs",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "According to the MUTCD (Manual on Uniform Traffic Control Devices), what shape is a triangular sign?",
    choices: [
      { key: "A", text: "Used to warn of danger" },
      { key: "B", text: "Used to indicate that drivers facing the sign should yield the right of way to vehicles on the intersecting road" },
      { key: "C", text: "Used only for stop signs" },
      { key: "D", text: "Used for speed limit signs" }
    ],
    answer: "B",
    explanation: "The MUTCD (Manual on Uniform Traffic Control Devices) specifies that the triangular shape is used to indicate that drivers facing the sign should yield the right of way to vehicles on the intersecting road.",
    wrongExplanations: {
      "A": "Warning signs are diamond-shaped, not triangular.",
      "C": "Stop signs are octagonal, not triangular.",
      "D": "Speed limit signs are rectangular, not triangular."
    },
    keyFact: "Triangle = YIELD sign."
  },
  {
    id: "safety-119",
    category: "safety",
    subcategory: "traffic-signs",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What sign shape is a round/circular shape used for according to the MUTCD (Manual on Uniform Traffic Control Devices)?",
    choices: [
      { key: "A", text: "Stop signs" },
      { key: "B", text: "Advance warning of a railroad crossing" },
      { key: "C", text: "Speed limit signs" },
      { key: "D", text: "Yield signs" }
    ],
    answer: "B",
    explanation: "The MUTCD (Manual on Uniform Traffic Control Devices) specifies that the round/circular shape is used at the advance warning of a railroad crossing.",
    wrongExplanations: {
      "A": "Stop signs are octagonal, not round.",
      "C": "Speed limit signs are rectangular, not round.",
      "D": "Yield signs are triangular, not round."
    },
    keyFact: "Round/circular sign = advance warning of railroad crossing."
  },
  {
    id: "safety-120",
    category: "safety",
    subcategory: "traffic-signs",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "According to the MUTCD (Manual on Uniform Traffic Control Devices), what shape is the crossbuck sign used at railroad crossings?",
    choices: [
      { key: "A", text: "Diamond" },
      { key: "B", text: "Two rectangles arranged in an X (crossbuck)" },
      { key: "C", text: "Octagonal" },
      { key: "D", text: "Triangular" }
    ],
    answer: "B",
    explanation: "The MUTCD (Manual on Uniform Traffic Control Devices) specifies that the crossbuck shape (two rectangles in an X) is used at the crossing of railroad tracks.",
    wrongExplanations: {
      "A": "Diamond signs are for warning of danger, not specifically at railroad crossings.",
      "C": "Octagonal signs are for stop signs only.",
      "D": "Triangular signs are for yield signs."
    },
    keyFact: "Crossbuck (X shape) = at the railroad crossing itself."
  },
  {
    id: "safety-121",
    category: "safety",
    subcategory: "traffic-signs",
    type: "fill",
    difficulty: 2,
    tags: ["regulation"],
    question: "According to the MUTCD, a ________-shaped sign is used for posting information such as regulatory messages and directions.",
    acceptedAnswers: ["rectangular", "rectangle", "Rectangular", "Rectangle"],
    answer: "rectangular",
    explanation: "The MUTCD (Manual on Uniform Traffic Control Devices) specifies that a rectangular shape is used for posting information, including regulatory messages, guidance, and directional information.",
    keyFact: "Rectangular = information, regulatory messages, and directions."
  },

  // ============================================================
  // CB RADIO RULES (pages 73-74)
  // ============================================================
  {
    id: "safety-122",
    category: "safety",
    subcategory: "cb-radio",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What is the position of the trucking industry on the use of CB radios by its drivers?",
    choices: [
      { key: "A", text: "CB radios are banned" },
      { key: "B", text: "All CB radios must be in compliance with federal regulations and the policy of the driver's employer" },
      { key: "C", text: "CB radios are mandatory for all trucks" },
      { key: "D", text: "There are no regulations on CB radio use" }
    ],
    answer: "B",
    explanation: "All CB radios must be in compliance with federal regulations and the policy of the driver's employer. Misuse of CB radios can create hazardous conditions.",
    wrongExplanations: {
      "A": "CB radios are not banned; they must be used in compliance with regulations.",
      "C": "CB radios are not mandatory; but if used, they must comply with regulations.",
      "D": "There are federal regulations governing CB radio use."
    },
    keyFact: "CB radios must comply with federal regulations and employer policy."
  },
  {
    id: "safety-123",
    category: "safety",
    subcategory: "cb-radio",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "How may the misuse of a CB radio create hazardous conditions?",
    choices: [
      { key: "A", text: "It uses too much electricity" },
      { key: "B", text: "Driver distraction and inattention, such as a high degree of concentration on talking that takes away from driving, and a fire from improper hook-up" },
      { key: "C", text: "It interferes with the vehicle's engine" },
      { key: "D", text: "It causes tire problems" }
    ],
    answer: "B",
    explanation: "Hazards from CB radio misuse include: (1) abuse of equipment because of driver's intelligence to stop talking and take action such as shifting gears; (2) such a high degree of instruction from talking that the driver fails to take necessary action to avoid an accident; (3) a fire resulting from an improper CB hook-up; and (4) personal injury sustained while installing the antenna or equipment.",
    wrongExplanations: {
      "A": "Electrical usage is not the primary hazard of CB radio misuse.",
      "C": "CB radios do not typically interfere with vehicle engines.",
      "D": "CB radios have no effect on tires."
    },
    keyFact: "CB hazards: driver distraction from talking, fire from improper hook-up, installation injuries."
  },

  // ============================================================
  // NOISE REDUCTION (page 74)
  // ============================================================
  {
    id: "safety-124",
    category: "safety",
    subcategory: "noise",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What can the professional driver do to minimize the noise created by the unit?",
    choices: [
      { key: "A", text: "Drive faster to get past residential areas quickly" },
      { key: "B", text: "Avoid using engine brakes in residential areas, maintain muffler/exhaust system, secure loose equipment, and observe speed limits" },
      { key: "C", text: "Only drive during daytime hours" },
      { key: "D", text: "Remove the muffler for better performance" }
    ],
    answer: "B",
    explanation: "There are several things which can help to minimize vehicle noise: (1) Avoiding incidental starts with full throttle acceleration (maximize engine speed in each gear); (2) Making sure all equipment is properly secured; (3) If driving a vehicle equipped with an engine brake, avoiding its use in populated areas; (4) Keeping the muffler and exhaust system in good repair; (5) Observing speed limits.",
    wrongExplanations: {
      "A": "Driving faster creates more noise, not less.",
      "C": "Time of driving is not the only consideration for noise reduction.",
      "D": "Removing the muffler would dramatically increase noise."
    },
    keyFact: "Reduce noise: no engine brakes in residential areas, maintain exhaust, secure equipment, obey speed limits."
  },

  // ============================================================
  // ENGINE SMOKE EMISSIONS (page 74)
  // ============================================================
  {
    id: "safety-125",
    category: "safety",
    subcategory: "emissions",
    type: "tf",
    difficulty: 1,
    tags: ["procedure"],
    question: "Smoke emissions from a truck that indicate the engine is not operating correctly may increase operating costs, lower fuel economy, increase maintenance costs, and shorten engine life.",
    answer: true,
    explanation: "Smoke emissions from a truck indicate the engine is not operating correctly. This can increase operating costs, lower fuel economy, increase maintenance costs, and shorten engine life.",
    keyFact: "Smoke emissions = engine problems = higher costs and shorter engine life."
  },

  // ============================================================
  // FUEL CONSERVATION (page 74)
  // ============================================================
  {
    id: "safety-126",
    category: "safety",
    subcategory: "fuel-conservation",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What can a professional driver do to get the most mileage from every gallon of fuel?",
    choices: [
      { key: "A", text: "Drive as fast as possible" },
      { key: "B", text: "Drive smoothly, maintain even pace, use the transmission properly, do not tamper with the engine or fuel system, do not 'bleed' tires, and avoid unnecessary idling" },
      { key: "C", text: "Coast downhill in neutral" },
      { key: "D", text: "Only drive in the highest gear" }
    ],
    answer: "B",
    explanation: "To help conserve fuel and contribute to safety, a driver can: (1) handle acceleration and deceleration smoothly; (2) drive smoothly and keep an even pace and avoid the need for additional acceleration and hard braking; (3) use the transmission properly so the truck's engine operates within its power range; (4) not tamper with any part of the engine or its fuel system; (5) never 'bleed' tires to get a softer ride because soft tires waste fuel and create other problems; (6) avoid unnecessary idling.",
    wrongExplanations: {
      "A": "Driving fast wastes fuel; smooth, moderate driving conserves fuel.",
      "C": "Coasting in neutral is dangerous and does not significantly save fuel.",
      "D": "Using only the highest gear is improper; the transmission should be used to keep the engine in its power range."
    },
    keyFact: "Save fuel: drive smoothly, maintain pace, use gears properly, no tampering, proper tire pressure, no unnecessary idling."
  },

  // ============================================================
  // ENGINE IDLING AND FUEL CONSUMPTION (page 75)
  // ============================================================
  {
    id: "safety-127",
    category: "safety",
    subcategory: "fuel-conservation",
    type: "mc",
    difficulty: 2,
    tags: ["numbers"],
    question: "What effect does prolonged idling have on fuel consumption?",
    choices: [
      { key: "A", text: "No effect on fuel consumption" },
      { key: "B", text: "When a truck is standing still with the engine running, it is getting zero miles per gallon; a diesel engine consumes about one gallon of fuel per hour when idling" },
      { key: "C", text: "Idling saves fuel compared to restarting" },
      { key: "D", text: "Idling uses only a teaspoon of fuel per hour" }
    ],
    answer: "B",
    explanation: "When a truck is standing still with the engine running, it is getting zero miles per gallon. When idling, a diesel engine consumes about one gallon of fuel per hour. Needlessly letting an engine idle wastes both fuel and money. Since the diesel fuel is also a coolant for the injectors, the injector tips can be burned if the engine idles at a low rpm.",
    wrongExplanations: {
      "A": "Idling consumes approximately one gallon of diesel per hour.",
      "C": "Prolonged idling wastes more fuel than restarting the engine.",
      "D": "A diesel engine uses approximately one gallon per hour when idling, not a teaspoon."
    },
    keyFact: "Idling a diesel = about 1 gallon of fuel per hour wasted."
  },

  // ============================================================
  // ENGINE TAMPERING (page 75)
  // ============================================================
  {
    id: "safety-128",
    category: "safety",
    subcategory: "engine-tampering",
    type: "mc",
    difficulty: 2,
    tags: ["regulation", "numbers"],
    question: "What are the undesirable effects of tampering with the engine?",
    choices: [
      { key: "A", text: "Improved performance" },
      { key: "B", text: "Increased fuel consumption, engine failure, stranding the driver; EPA fines can be up to $45,308 per noncompliant vehicle or engine, $4,527 per tampering event, and $45,308 per day for reporting and recordkeeping violations" },
      { key: "C", text: "Only voiding the warranty" },
      { key: "D", text: "Slightly increased fuel economy" }
    ],
    answer: "B",
    explanation: "Tampering with the engine's settings can increase fuel consumption, result in engine failure and leave the driver stranded. The Environmental Protection Agency (EPA) can also fine companies up to $45,308 per noncompliant vehicle or engine, $4,527 per tampering event or sale of defeat devices, and $45,308 per day for reporting and recordkeeping violations.",
    wrongExplanations: {
      "A": "Tampering degrades performance and can lead to engine failure.",
      "C": "Consequences go far beyond warranty issues -- EPA fines are substantial.",
      "D": "Tampering can increase fuel consumption, not improve fuel economy."
    },
    keyFact: "Engine tampering: EPA fines up to $45,308/vehicle, $4,527/event, $45,308/day for recordkeeping violations."
  },

  // ============================================================
  // CARBON MONOXIDE POISONING (page 75)
  // ============================================================
  {
    id: "safety-129",
    category: "safety",
    subcategory: "carbon-monoxide",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "Why is the presence of carbon monoxide in a motor vehicle so dangerous?",
    choices: [
      { key: "A", text: "It has a strong smell that causes headaches" },
      { key: "B", text: "Carbon monoxide is colorless, odorless, and tasteless, making it virtually impossible to detect; it is formed at lower concentrations by diesel engines than by gasoline engines" },
      { key: "C", text: "It damages the paint on the vehicle" },
      { key: "D", text: "It only affects passengers, not the driver" }
    ],
    answer: "B",
    explanation: "Carbon monoxide, which is produced when an engine burns carbon-based fuels, is deadly because it is released in excessive amounts and is virtually impossible to detect because it is colorless, odorless, and tasteless. Carbon monoxide is formed at lower concentrations by diesel engines than by gasoline engines.",
    wrongExplanations: {
      "A": "Carbon monoxide is odorless, not strong-smelling; that is what makes it so dangerous.",
      "C": "Carbon monoxide does not damage paint; it is a health and life hazard.",
      "D": "Carbon monoxide affects everyone in the vehicle, including the driver."
    },
    keyFact: "Carbon monoxide is colorless, odorless, and tasteless -- impossible to detect without equipment."
  },
  {
    id: "safety-130",
    category: "safety",
    subcategory: "carbon-monoxide",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What are the first symptoms of carbon monoxide poisoning?",
    choices: [
      { key: "A", text: "Nausea and vomiting" },
      { key: "B", text: "Drowsiness, lightheadedness, and/or headache" },
      { key: "C", text: "Chest pain" },
      { key: "D", text: "Skin rash" }
    ],
    answer: "B",
    explanation: "The first obvious symptoms of carbon monoxide poisoning are drowsiness, lightheadedness, and/or headache. These symptoms should be taken very seriously as carbon monoxide can be lethal.",
    wrongExplanations: {
      "A": "While nausea may occur with severe exposure, the first symptoms are drowsiness and headache.",
      "C": "Chest pain is not typically the first symptom of carbon monoxide poisoning.",
      "D": "Skin rash is not a symptom of carbon monoxide poisoning."
    },
    keyFact: "First CO symptoms: drowsiness, lightheadedness, headache."
  },

  // ============================================================
  // DIESEL ENGINE RPM AND TAMPERING (page 75)
  // ============================================================
  {
    id: "safety-131",
    category: "safety",
    subcategory: "engine-operation",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "How does today's diesel engine differ from those from years ago?",
    choices: [
      { key: "A", text: "They are louder and less efficient" },
      { key: "B", text: "Today's diesel engines operate over a much wider range of engine RPM with better torque and power; a professional driver always follows the engine manufacturer's recommendations for the proper engine speed" },
      { key: "C", text: "They use more fuel" },
      { key: "D", text: "They require more maintenance" }
    ],
    answer: "B",
    explanation: "Today's diesel engines have a narrower RPM range within which they must be operated to generate the necessary torque and power to move the vehicle and the operator with maximum efficiency. Today's diesel engines generate torque and power over a much wider range of engine RPM. A professional driver always follows the engine manufacturer's recommendations for the proper engine speed at which to shift up or down.",
    wrongExplanations: {
      "A": "Modern diesel engines are generally quieter and more efficient.",
      "C": "Modern diesel engines are more fuel-efficient.",
      "D": "While maintenance is important, modern engines do not necessarily require more maintenance."
    },
    keyFact: "Modern diesels: wider RPM range, better torque/power; always follow manufacturer's recommendations."
  },

  // ============================================================
  // SAFE RIGHT TURN PRECAUTIONS (page 71)
  // ============================================================
  {
    id: "safety-132",
    category: "safety",
    subcategory: "turning",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What basic precautions should be taken when making a safe right turn in any vehicle?",
    choices: [
      { key: "A", text: "Turn quickly without signaling" },
      { key: "B", text: "Signal well in advance, approach the intersection slowly, try to stay not more than two feet from the right-hand curb or pavement's edge to discourage other drivers from attempting to pass on the right" },
      { key: "C", text: "Swing wide to the left before turning right" },
      { key: "D", text: "Accelerate through the turn" }
    ],
    answer: "B",
    explanation: "When making a safe right turn, the driver should: (1) signal well in advance; (2) approach the intersection slowly; and (3) try to stay not more than two feet from the right-hand curb or pavement's edge to discourage impatient drivers from attempting to squeeze past on the right.",
    wrongExplanations: {
      "A": "Signaling well in advance is a critical safety precaution for right turns.",
      "C": "Swinging wide to the left before turning right can be dangerous and confuse other drivers.",
      "D": "Accelerating through a turn reduces control and increases rollover risk."
    },
    keyFact: "Right turns: signal early, approach slowly, stay within 2 feet of curb/edge."
  },

  // ============================================================
  // ADDITIONAL QUESTIONS TO REACH 120+ TARGET
  // ============================================================
  {
    id: "safety-133",
    category: "safety",
    subcategory: "hours-of-service",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "Time spent operating a CMV (Commercial Motor Vehicle) as part of performing compensated work for a person who is not a motor carrier is considered on-duty time.",
    answer: true,
    explanation: "Per FMCSR (Federal Motor Carrier Safety Regulations) Part 395, performing any other work in the capacity, employ, or service of a motor carrier, or performing any compensated work for a person who is not a motor carrier, counts as on-duty time.",
    keyFact: "Any compensated work, even for a non-carrier, counts as on-duty time."
  },
  {
    id: "safety-134",
    category: "safety",
    subcategory: "drug-alcohol",
    type: "fill",
    difficulty: 3,
    tags: ["numbers", "regulation"],
    question: "After a first DOT alcohol or drug violation, a driver is subject to unannounced follow-up tests for up to ______ years.",
    acceptedAnswers: ["5", "five", "5 years", "five years"],
    answer: "5",
    explanation: "After the first DOT (Department of Transportation) alcohol or drug violation, following SAP (Substance Abuse Professional) evaluation, treatment, and return-to-duty testing, the driver is subject to unannounced follow-up tests for up to 5 years (Section 382.503).",
    keyFact: "Follow-up testing after drug/alcohol violation: up to 5 years."
  },
  {
    id: "safety-135",
    category: "safety",
    subcategory: "medical-certificates",
    type: "fill",
    difficulty: 2,
    tags: ["numbers", "regulation"],
    question: "After a roadside inspection, the signed copy of the inspection report must be kept on file by the carrier for ______ days.",
    acceptedAnswers: ["90", "ninety", "90 days", "ninety days"],
    answer: "90",
    explanation: "Per FMCSR (Federal Motor Carrier Safety Regulations), after a roadside inspection, the driver must have the inspection report reviewed and signed by the carrier. The signed copy is kept on file by the carrier for 90 days (Section 396.9). Also, it is advised that drivers keep a copy of their medical certificates.",
    keyFact: "Carrier keeps roadside inspection report on file for 90 days."
  },
  {
    id: "safety-136",
    category: "safety",
    subcategory: "pre-trip-inspection",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "During a pre-trip inspection, what should the driver check regarding trailer air supply?",
    choices: [
      { key: "A", text: "Only the tractor air supply" },
      { key: "B", text: "Drain air tanks daily; unless equipped with automatic drains, check the trailer air supply lines, check the tractor protection valve on air-equipped trailers" },
      { key: "C", text: "Air supply does not need to be checked" },
      { key: "D", text: "Only check if the air horn works" }
    ],
    answer: "B",
    explanation: "During the pre-trip inspection, the driver should drain air tanks daily (unless equipped with automatic drains). The driver should also check trailer air supply lines and the tractor protection valve to ensure the air system is working properly for safe brake operation.",
    wrongExplanations: {
      "A": "Both tractor and trailer air supply must be checked.",
      "C": "Air supply is critical for brake operation and must be checked daily.",
      "D": "The air horn is only one part of the air system; the brake air supply is much more critical."
    },
    keyFact: "Drain air tanks daily; check trailer air supply lines and tractor protection valve."
  },
  {
    id: "safety-137",
    category: "safety",
    subcategory: "pre-trip-inspection",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "During the pre-trip inspection, when should the driver check the trailer lights and brake lines?",
    choices: [
      { key: "A", text: "Only after the trip begins" },
      { key: "B", text: "Check trailer lights and brake lines for secure connections and make sure attached are open and lines are properly connected" },
      { key: "C", text: "Only when it is dark outside" },
      { key: "D", text: "Only if the previous driver reported a problem" }
    ],
    answer: "B",
    explanation: "During the pre-trip inspection, the driver should check trailer lights and brake lines for secure connections, and make sure air-line shutoff valves (glad-hands) are open and lines are properly connected before departing.",
    wrongExplanations: {
      "A": "Trailer lights and brake lines must be checked before the trip begins.",
      "C": "Lights and brake lines must be checked regardless of time of day.",
      "D": "These must be checked every trip, not just when problems are reported."
    },
    keyFact: "Check trailer lights and brake line connections during every pre-trip inspection."
  },
  {
    id: "safety-138",
    category: "safety",
    subcategory: "cargo-securement",
    type: "mc",
    difficulty: 2,
    tags: ["regulation", "numbers"],
    question: "What is required if a small part of the load projects beyond the rear of the vehicle?",
    choices: [
      { key: "A", text: "Nothing is required" },
      { key: "B", text: "If the projection is three feet long or less, it may be marked with a single lamp; if more than three feet from the nearest lamp, the projection must be marked with a red lamp" },
      { key: "C", text: "Only during nighttime" },
      { key: "D", text: "A pilot vehicle must follow" }
    ],
    answer: "B",
    explanation: "If the projection is three feet long or less, it may be marked with a single lamp. If the projection is near the nearest lamp or on the vehicle surface, if the projection is near the lamp base, the lamp must be red (Section 393.11).",
    wrongExplanations: {
      "A": "Rear projections must be marked as required by FMCSR regulations.",
      "C": "Marking is required at all times, not just at night.",
      "D": "A pilot vehicle is not required for small load projections."
    },
    keyFact: "Rear projection 3 feet or less = can use a single lamp; over 3 feet from nearest lamp = red lamp required."
  },
  {
    id: "safety-139",
    category: "safety",
    subcategory: "disqualifications",
    type: "mc",
    difficulty: 3,
    tags: ["regulation"],
    question: "Which of the following violations can result in a driver being disqualified for 60 days?",
    choices: [
      { key: "A", text: "A single speeding ticket for 10 mph over the limit" },
      { key: "B", text: "A conviction of two of the following within 3 years: speeding 15+ mph over posted limit, following too closely, improper or erratic lane-changing, or driving recklessly" },
      { key: "C", text: "A single expired registration ticket" },
      { key: "D", text: "Failure to carry a medical certificate" }
    ],
    answer: "B",
    explanation: "A driver can be disqualified for 60 days for a conviction of any combination of two of the following offenses within 3 years: speeding 15 mph or more above the posted limit, following too closely, improper or erratic lane-changing, driving recklessly, and certain other qualifying traffic violations.",
    wrongExplanations: {
      "A": "A single speeding ticket at 10 mph over is not a disqualifying offense.",
      "C": "An expired registration ticket is not a disqualifying offense.",
      "D": "Failure to carry a medical certificate is a violation but not a disqualifying offense for 60 days."
    },
    keyFact: "60-day disqualification: 2 qualifying offenses in 3 years."
  },
  {
    id: "safety-140",
    category: "safety",
    subcategory: "disqualifications",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "Driving a CMV (Commercial Motor Vehicle) without obtaining a CLP (Commercial Learner's Permit) or CDL (Commercial Driver's License) can result in a 1-year disqualification.",
    answer: true,
    explanation: "Driving a CMV (Commercial Motor Vehicle) without obtaining a CLP (Commercial Learner's Permit) or CDL (Commercial Driver's License) is one of the violations that can result in a 1-year disqualification from operating a CMV.",
    keyFact: "Driving a CMV without a CLP or CDL = 1-year disqualification."
  },
  {
    id: "safety-141",
    category: "safety",
    subcategory: "warning-devices",
    type: "fill",
    difficulty: 3,
    tags: ["numbers", "regulation"],
    question: "On a two-lane road, emergency warning devices should be placed at ______ feet, ______ feet behind, and ______ feet ahead of the stopped vehicle.",
    acceptedAnswers: ["10, 100, 100", "10 feet, 100 feet, and 100 feet", "10, 100, and 100"],
    answer: "10, 100, 100",
    explanation: "On a two-lane road, emergency warning devices should be placed at: 10 feet from the vehicle in the direction of traffic, 100 feet behind the vehicle, and 100 feet ahead of the vehicle (Section 392.22).",
    keyFact: "Two-lane road: 10 ft near side, 100 ft behind, 100 ft ahead."
  },
  {
    id: "safety-142",
    category: "safety",
    subcategory: "warning-devices",
    type: "fill",
    difficulty: 3,
    tags: ["numbers", "regulation"],
    question: "On a divided highway, emergency warning devices should be placed at ______, ______, and ______ feet to the rear of the stopped vehicle.",
    acceptedAnswers: ["10, 100, 200", "10 feet, 100 feet, and 200 feet", "10, 100, and 200"],
    answer: "10, 100, 200",
    explanation: "On a divided highway or one-way road, all signals are placed to the rear of the vehicle at distances of 10 feet, 100 feet, and 200 feet toward approaching traffic (Section 392.22).",
    keyFact: "Divided highway: 10 ft, 100 ft, and 200 ft to the rear."
  },
  {
    id: "safety-143",
    category: "safety",
    subcategory: "vehicle-inspection",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What penalties apply to the driver who violates an out-of-service order?",
    choices: [
      { key: "A", text: "A small fine only" },
      { key: "B", text: "The driver may be disqualified as a CMV driver for not less than 180 days nor more than 2 years for first violation; for subsequent violations within 10 years, disqualification for not less than 3 years and not more than 5 years" },
      { key: "C", text: "A verbal warning" },
      { key: "D", text: "Loss of CDL for 30 days" }
    ],
    answer: "B",
    explanation: "A driver who violates an out-of-service order may be disqualified as a CMV (Commercial Motor Vehicle) driver for a period of not less than 180 days nor more than 2 years for the first violation. For subsequent violations within 10 years, the penalty is disqualification for not less than 3 years and not more than 5 years.",
    wrongExplanations: {
      "A": "The penalty is disqualification, not just a fine.",
      "C": "Violating an out-of-service order results in disqualification, not a verbal warning.",
      "D": "The minimum disqualification is 180 days, not 30 days."
    },
    keyFact: "First out-of-service violation: 180 days to 2 years; subsequent (within 10 yrs): 3 to 5 years."
  },
  {
    id: "safety-144",
    category: "safety",
    subcategory: "drug-alcohol",
    type: "tf",
    difficulty: 1,
    tags: ["regulation"],
    question: "Drivers are prohibited from possessing alcoholic beverages while on duty, even if the container is unopened.",
    answer: true,
    explanation: "Per FMCSR (Federal Motor Carrier Safety Regulations) Part 392.5, drivers are prohibited from consuming or possessing alcoholic beverages while on duty. This includes unopened containers.",
    keyFact: "No possession of alcohol on duty -- even unopened containers."
  },
  {
    id: "safety-145",
    category: "safety",
    subcategory: "driver-qualifications",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "What is the driver's responsibility to the employer if their driving privileges are suspended?",
    choices: [
      { key: "A", text: "Continue driving until caught" },
      { key: "B", text: "The driver whose driving privileges are suspended, canceled, or revoked by the state must immediately notify the employer; the driver cannot drive in interstate commerce until the privilege is restored" },
      { key: "C", text: "Wait until the next renewal to report it" },
      { key: "D", text: "No notification is required" }
    ],
    answer: "B",
    explanation: "A driver whose driving privileges are suspended, canceled, or revoked by the state must immediately notify their employer of the notice of suspension, cancellation, or revocation (Section 383.33). The driver cannot drive in interstate commerce until the privilege is restored.",
    wrongExplanations: {
      "A": "Continuing to drive with a suspended license is illegal and dangerous.",
      "C": "Immediate notification is required, not at the next renewal.",
      "D": "Notification to the employer is required immediately."
    },
    keyFact: "Suspended/canceled/revoked license = notify employer IMMEDIATELY."
  },
  {
    id: "safety-146",
    category: "safety",
    subcategory: "drug-alcohol",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "Under what circumstances may a driver take drugs when on duty?",
    choices: [
      { key: "A", text: "Any time the driver feels sick" },
      { key: "B", text: "Only when prescribed by the driver's doctor and the doctor has advised that they will not adversely affect the driver's ability to drive safely; any refusal on use or possession of drugs is prohibited except for drugs legally incorporated as part of cargo" },
      { key: "C", text: "Never, under any circumstances" },
      { key: "D", text: "Only over-the-counter medications" }
    ],
    answer: "B",
    explanation: "A driver may take drugs when on duty only when prescribed by the driver's physician and the doctor has been advised that they will not adversely affect the driver's ability to drive safely. Any refusal on use or possession of drugs is prohibited except for drugs legally transported as part of the cargo (Section 392.4).",
    wrongExplanations: {
      "A": "Only physician-prescribed drugs that do not impair driving ability are permitted.",
      "C": "Prescription drugs that do not affect driving ability are allowed.",
      "D": "Over-the-counter medications could impair driving; the standard is physician approval and no adverse effect on driving."
    },
    keyFact: "Prescription drugs OK only if doctor confirms they won't impair driving ability."
  },
  {
    id: "safety-147",
    category: "safety",
    subcategory: "pre-trip-inspection",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "During the pre-trip inspection, when should the driver check the parking brake?",
    choices: [
      { key: "A", text: "Only if the vehicle is parked on a grade" },
      { key: "B", text: "As part of the standard pre-trip inspection procedure before every trip" },
      { key: "C", text: "Only during annual inspections" },
      { key: "D", text: "Only if the last driver reported a problem" }
    ],
    answer: "B",
    explanation: "Checking the parking brake is a standard part of every pre-trip inspection. The driver should verify that the parking brake holds the vehicle properly before departing on any trip.",
    wrongExplanations: {
      "A": "The parking brake must be checked before every trip, not just on grades.",
      "C": "The parking brake is checked during every pre-trip, not just annual inspections.",
      "D": "The parking brake must be checked every trip regardless of previous driver reports."
    },
    keyFact: "Check parking brake during EVERY pre-trip inspection."
  },
  {
    id: "safety-148",
    category: "safety",
    subcategory: "following-distance",
    type: "fill",
    difficulty: 3,
    tags: ["numbers"],
    question: "A 40-foot vehicle traveling at speeds under 40 mph should maintain at least ______ seconds of following distance.",
    acceptedAnswers: ["4", "four", "4 seconds", "four seconds"],
    answer: "4",
    explanation: "For a 40-foot vehicle traveling under 40 mph: 40 feet / 10 feet = 4 seconds of following distance. No additional second is needed because the speed is not over 40 mph.",
    keyFact: "40-foot vehicle under 40 mph = 4 seconds following distance."
  },
  {
    id: "safety-149",
    category: "safety",
    subcategory: "fmcsr-knowledge",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "Drivers of hazardous materials should be familiar with which FMCSR (Federal Motor Carrier Safety Regulations) parts?",
    choices: [
      { key: "A", text: "Only Part 397" },
      { key: "B", text: "Parts 100-180 of Title 49 as well as Part 397" },
      { key: "C", text: "Only Part 382" },
      { key: "D", text: "Only Part 395" }
    ],
    answer: "B",
    explanation: "Drivers of hazardous materials should also be familiar with Parts 100-180 of Title 49 of the Code of Federal Regulations, which cover Hazardous Materials Regulations, as well as FMCSR (Federal Motor Carrier Safety Regulations) Part 397 which covers Transportation of Hazardous Materials; Driving and Parking Rules.",
    wrongExplanations: {
      "A": "Part 397 is important but drivers also need to know Parts 100-180 of Title 49.",
      "C": "Part 382 covers drug and alcohol testing, not hazardous materials specifically.",
      "D": "Part 395 covers Hours of Service, not hazardous materials."
    },
    keyFact: "Hazmat drivers: know 49 CFR Parts 100-180 AND FMCSR Part 397."
  },
  {
    id: "safety-150",
    category: "safety",
    subcategory: "driver-qualifications",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "The driver must pay particular attention to the requirements of which FMCSR (Federal Motor Carrier Safety Regulations) parts to ascertain the equipment meets requirements and is in safe operating condition?",
    choices: [
      { key: "A", text: "Parts 382 and 383" },
      { key: "B", text: "Parts 392 and 395" },
      { key: "C", text: "Parts 393 and 396" },
      { key: "D", text: "Parts 397 only" }
    ],
    answer: "C",
    explanation: "The driver must pay particular attention to the requirements of Parts 393 (Parts and Accessories Necessary for Safe Operation) and 396 (Inspection, Repair, and Maintenance) of the FMCSR (Federal Motor Carrier Safety Regulations) to ascertain that the equipment meets the requirements of the regulations and is in safe operating condition.",
    wrongExplanations: {
      "A": "Parts 382 and 383 cover drug/alcohol testing and CDL standards, not equipment condition.",
      "B": "Parts 392 and 395 cover driving rules and hours of service, not equipment standards.",
      "D": "Part 397 covers hazardous materials transportation, not general equipment safety."
    },
    keyFact: "Equipment safety: Parts 393 (parts & accessories) and 396 (inspection/repair/maintenance)."
  },
  {
    id: "safety-151",
    category: "safety",
    subcategory: "driver-qualifications",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "The driver should know the basic requirements of which FMCSR (Federal Motor Carrier Safety Regulations) part so the driver can remain qualified to drive?",
    choices: [
      { key: "A", text: "Part 393" },
      { key: "B", text: "Part 391" },
      { key: "C", text: "Part 397" },
      { key: "D", text: "Part 396" }
    ],
    answer: "B",
    explanation: "The driver should know the basic requirements of FMCSR (Federal Motor Carrier Safety Regulations) Part 391 (Qualifications of Drivers) so the driver can remain qualified to drive.",
    wrongExplanations: {
      "A": "Part 393 covers parts and accessories, not driver qualifications.",
      "C": "Part 397 covers hazardous materials transportation.",
      "D": "Part 396 covers inspection, repair, and maintenance."
    },
    keyFact: "Part 391 = know it to stay qualified to drive."
  },
  {
    id: "safety-152",
    category: "safety",
    subcategory: "fuel-conservation",
    type: "tf",
    difficulty: 1,
    tags: ["procedure"],
    question: "A professional driver should never 'bleed' tires to get a softer ride because soft tires waste fuel and create other problems.",
    answer: true,
    explanation: "A professional driver should never 'bleed' tires to get a softer ride. Soft tires waste fuel because they increase rolling resistance, and they can also create handling problems and increase tire wear.",
    keyFact: "Never bleed tires for a softer ride -- it wastes fuel and creates problems."
  },
  {
    id: "safety-153",
    category: "safety",
    subcategory: "pre-trip-inspection",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "During the pre-trip inspection, what should the driver note about the condition of the cab and body?",
    choices: [
      { key: "A", text: "Only the paint condition" },
      { key: "B", text: "Check right side of cab, doors, mirrors, etc.; check lights and reflectors along right side as inspection progresses" },
      { key: "C", text: "Only the windshield" },
      { key: "D", text: "Only the seats and seatbelts" }
    ],
    answer: "B",
    explanation: "During the pre-trip inspection, the driver should check the right side of the cab, doors, mirrors, etc., and check lights and reflectors along the right side as the inspection progresses. The driver should also check the left side in the same manner.",
    wrongExplanations: {
      "A": "Paint condition is cosmetic; the inspection focuses on safety-related components.",
      "C": "The windshield is one part, but the entire cab and body must be inspected.",
      "D": "Seats and seatbelts are important but not the only items to check."
    },
    keyFact: "Inspect both sides: cab, doors, mirrors, lights, and reflectors."
  },
  {
    id: "safety-154",
    category: "safety",
    subcategory: "hours-of-service",
    type: "mc",
    difficulty: 2,
    tags: ["regulation"],
    question: "Which of the following is included in on-duty time?",
    choices: [
      { key: "A", text: "Time at a plant, terminal, facility, or other property of a motor carrier" },
      { key: "B", text: "Time spent eating lunch at a restaurant away from the terminal" },
      { key: "C", text: "Personal time at home" },
      { key: "D", text: "Sleeping in a motel" }
    ],
    answer: "A",
    explanation: "Per FMCSR (Federal Motor Carrier Safety Regulations) Part 395, on-duty time includes all time at a plant, terminal, facility, or other property of a motor carrier or shipper, or on any public property, waiting to be dispatched, unless the driver has been relieved from duty by the motor carrier.",
    wrongExplanations: {
      "B": "Personal meal time away from the terminal is generally off-duty time.",
      "C": "Personal time at home is off-duty.",
      "D": "Sleeping in a motel is off-duty time."
    },
    keyFact: "Time at carrier terminal/facility/property = on-duty (unless officially relieved)."
  },
  {
    id: "safety-155",
    category: "safety",
    subcategory: "hours-of-service",
    type: "tf",
    difficulty: 2,
    tags: ["regulation"],
    question: "Time spent riding in the passenger seat of a property-carrying vehicle moving on the highway is considered on-duty time, except during a sleeper berth team operation.",
    answer: true,
    explanation: "Per FMCSR (Federal Motor Carrier Safety Regulations) Part 395, time spent in the passenger seat of a property-carrying vehicle moving on the highway is considered on-duty time, unless it is part of a qualifying team driving operation involving use of a sleeper berth with a period of at least 7 consecutive hours in the sleeper berth.",
    keyFact: "Riding in passenger seat while moving = on-duty (unless sleeper berth team operation)."
  }
];
