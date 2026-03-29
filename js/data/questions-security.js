var TDC = window.TDC || {};
window.TDC = TDC;

TDC.QuestionsSecurity = [
  {
    id: "security-001",
    category: "security",
    subcategory: "awareness",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What steps can a driver perform to increase their security awareness?",
    choices: [
      { key: "A", text: "Only lock doors while sleeping" },
      { key: "B", text: "Be observant and effective in noticing things at all times" },
      { key: "C", text: "Avoid reporting suspicious activity to save time" },
      { key: "D", text: "Leave doors unlocked for quick exit" }
    ],
    answer: "B",
    explanation: "A professional driver should be observant and effective in noticing things at all times. This includes watching for anything unusual or suspicious in their surroundings, following company security procedures, and knowing the company's procedure for reporting suspicious activity.",
    wrongExplanations: {
      "A": "Locking doors only while sleeping is insufficient. Drivers should maintain security awareness at ALL times, not just during rest periods.",
      "C": "Reporting suspicious activity is a critical security responsibility. Failing to report could endanger the driver and others.",
      "D": "Leaving doors unlocked compromises vehicle security and makes the driver and cargo vulnerable to theft or attack."
    },
    keyFact: "Be observant at ALL times. Report anything unusual."
  },
  {
    id: "security-002",
    category: "security",
    subcategory: "awareness",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What should a driver do if they see something that looks like a terrorist activity?",
    choices: [
      { key: "A", text: "Confront the suspicious person directly" },
      { key: "B", text: "Ignore it and continue driving" },
      { key: "C", text: "Take mental notes, report it, and stay out of harm's way" },
      { key: "D", text: "Post about it on social media immediately" }
    ],
    answer: "C",
    explanation: "If a driver observes what appears to be terrorist or suspicious activity, they should take mental notes of the details, report the activity to the proper authorities (911 or company dispatcher), and stay out of harm's way. They should NOT attempt to confront anyone or put themselves at risk.",
    wrongExplanations: {
      "A": "Confronting a suspicious person directly puts the driver at serious risk. Leave intervention to trained law enforcement.",
      "B": "Ignoring potential terrorist activity is irresponsible and could endanger many lives. Drivers have a duty to report suspicious activity.",
      "D": "Social media is not the proper reporting channel. Contact 911 or your company dispatcher immediately."
    },
    keyFact: "See something suspicious: observe, report, stay safe. Never confront."
  },
  {
    id: "security-003",
    category: "security",
    subcategory: "reporting",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "procedure"],
    question: "What does the acronym T-R-U-C-K-S stand for when reporting terrorist or suspicious activity?",
    answer: "Time, Reporting, Unusual activity, Communicate, Keep safe, Safety first",
    acceptedAnswers: [
      "Time, Reporting, Unusual activity, Communicate, Keep safe, Safety first",
      "Time Reporting Unusual activity Communicate Keep safe Safety first",
      "Time, Reporting, Unusual, Communicate, Keep, Safety"
    ],
    explanation: "The T-R-U-C-K-S acronym is a professional driver's guide for reporting terrorist or suspicious activity: T = Time (report time of observation), R = Reporting (who is reporting — name, company, location), U = Unusual activity (describe what was observed), C = Communicate (call 911 or company dispatcher, speak calmly and clearly), K = Keep safe (stay out of harm's way), S = Safety first (avoid becoming a target).",
    keyFact: "T-R-U-C-K-S: Time, Reporting, Unusual, Communicate, Keep safe, Safety first"
  },
  {
    id: "security-004",
    category: "security",
    subcategory: "reporting",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What does the 'T' in the T-R-U-C-K-S reporting acronym stand for?",
    choices: [
      { key: "A", text: "Terrorism" },
      { key: "B", text: "Time" },
      { key: "C", text: "Truck" },
      { key: "D", text: "Target" }
    ],
    answer: "B",
    explanation: "In the T-R-U-C-K-S reporting acronym for suspicious/terrorist activity, 'T' stands for Time — report the time of your observation. The full acronym is: Time, Reporting, Unusual activity, Communicate, Keep safe, Safety first.",
    wrongExplanations: {
      "A": "While the acronym relates to terrorism awareness, the 'T' specifically stands for Time — when the observation occurred.",
      "C": "T-R-U-C-K-S is named to be memorable for truck drivers, but 'T' represents Time, not Truck.",
      "D": "Target is not part of the acronym. 'T' stands for Time."
    },
    keyFact: "T = Time — report WHEN you saw the suspicious activity"
  },
  {
    id: "security-005",
    category: "security",
    subcategory: "reporting",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "What details should a driver report when observing terrorist or suspicious activity?",
    choices: [
      { key: "A", text: "Only the location" },
      { key: "B", text: "Report time, vehicle info (make, model, color, markings), identifying features, direction of travel, and description of persons involved" },
      { key: "C", text: "Only the license plate number" },
      { key: "D", text: "Only report if they are 100% certain it is terrorism" }
    ],
    answer: "B",
    explanation: "When reporting suspicious activity, drivers should provide as much detail as possible: the time of observation, vehicle information (make, model, type, color, and markings), identifying features such as landmarks or reference points to the incident location, direction of travel, and a description of the persons involved (including license plate numbers if possible).",
    wrongExplanations: {
      "A": "Location alone is insufficient. Authorities need comprehensive details to respond effectively.",
      "C": "While the license plate is helpful, drivers should report ALL available details including time, vehicle description, persons, and direction of travel.",
      "D": "Drivers do not need to be certain. If something seems suspicious, report it. Let law enforcement investigate and determine the nature of the activity."
    },
    keyFact: "Report everything: time, vehicle info, location landmarks, direction, person descriptions."
  },
  {
    id: "security-006",
    category: "security",
    subcategory: "reporting",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What does the 'C' in T-R-U-C-K-S stand for?",
    choices: [
      { key: "A", text: "Cargo" },
      { key: "B", text: "Company" },
      { key: "C", text: "Communicate" },
      { key: "D", text: "Cautious" }
    ],
    answer: "C",
    explanation: "In the T-R-U-C-K-S reporting acronym, 'C' stands for Communicate — speak calmly and clearly, and report to the 911 operator or company dispatcher. Full acronym: Time, Reporting, Unusual activity, Communicate, Keep safe, Safety first.",
    wrongExplanations: {
      "A": "Cargo is not part of the acronym. 'C' stands for Communicate.",
      "B": "While you may report to your company, the 'C' specifically stands for Communicate — the act of clearly conveying the information.",
      "D": "While being cautious is important, 'C' in T-R-U-C-K-S specifically means Communicate."
    },
    keyFact: "C = Communicate — call 911 or dispatcher, speak calmly and clearly"
  },
  {
    id: "security-007",
    category: "security",
    subcategory: "cargo-theft",
    type: "mc",
    difficulty: 1,
    tags: [],
    question: "When and where are cargo thefts most likely to occur?",
    choices: [
      { key: "A", text: "During weekday business hours at secured facilities" },
      { key: "B", text: "During the weekends and holidays when trucks are left unattended in unsecured lots" },
      { key: "C", text: "Only during nighttime hours" },
      { key: "D", text: "At weigh stations during inspections" }
    ],
    answer: "B",
    explanation: "Cargo thefts are most likely to occur during the weekends and holidays when trucks are left unattended in unsecured lots. These are times when surveillance may be reduced and facilities may be unstaffed, making trucks easy targets.",
    wrongExplanations: {
      "A": "Weekday business hours at secured facilities have the most oversight and security, making theft less likely.",
      "C": "While nighttime is a risk factor, the key timing is weekends and holidays when trucks sit unattended — this can be day or night.",
      "D": "Weigh stations are supervised by law enforcement and are extremely unlikely theft locations."
    },
    keyFact: "Cargo theft risk: weekends + holidays + unsecured lots + unattended trucks"
  },
  {
    id: "security-008",
    category: "security",
    subcategory: "awareness",
    type: "tf",
    difficulty: 1,
    tags: [],
    question: "A driver should follow their company's security procedures and know how to report suspicious activity.",
    answer: true,
    explanation: "True. Every professional driver should be familiar with and follow their company's security procedures. This includes knowing who to contact (dispatcher, 911, company security department) and how to properly report suspicious activity following established protocols.",
    keyFact: "Know your company's security procedures and reporting chain."
  },
  {
    id: "security-009",
    category: "security",
    subcategory: "awareness",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "If a driver discovers their truck or cargo has been tampered with, what should they do?",
    choices: [
      { key: "A", text: "Continue the trip and report at destination" },
      { key: "B", text: "Take inventory and deliver the company's security procedures, contact authorities, and do not move the vehicle" },
      { key: "C", text: "Move the vehicle to a different location immediately" },
      { key: "D", text: "Open all cargo doors to inspect contents" }
    ],
    answer: "B",
    explanation: "If a driver discovers tampering, they should follow company security procedures, contact law enforcement and their company dispatcher, and NOT move the vehicle until authorities have assessed the situation. The tampering could involve theft, smuggling of contraband, or even a potential explosive device.",
    wrongExplanations: {
      "A": "Continuing to drive could be extremely dangerous. Tampering could indicate anything from theft to a planted device.",
      "C": "Moving the vehicle could compromise evidence for law enforcement or could be dangerous if an explosive device has been planted.",
      "D": "Opening cargo doors without authority or law enforcement present could be dangerous and could compromise the chain of custody."
    },
    keyFact: "Tampering discovered: DON'T MOVE. Follow company procedures. Contact authorities."
  },
  {
    id: "security-010",
    category: "security",
    subcategory: "reporting",
    type: "mc",
    difficulty: 1,
    tags: ["procedure"],
    question: "What does the 'K' in T-R-U-C-K-S stand for?",
    choices: [
      { key: "A", text: "Knowledge" },
      { key: "B", text: "Key information" },
      { key: "C", text: "Keep safe (stay out of harm's way)" },
      { key: "D", text: "Kill the engine" }
    ],
    answer: "C",
    explanation: "In the T-R-U-C-K-S reporting acronym, 'K' stands for Keep safe — stay out of harm's way. Do not put yourself at risk when observing or reporting suspicious activity. Full acronym: Time, Reporting, Unusual activity, Communicate, Keep safe, Safety first.",
    wrongExplanations: {
      "A": "Knowledge is not part of the T-R-U-C-K-S acronym. 'K' stands for Keep safe.",
      "B": "While key information is important to report, the 'K' specifically represents Keep safe — staying out of danger.",
      "D": "While shutting off the engine might be appropriate in some emergencies, 'K' in T-R-U-C-K-S means Keep safe."
    },
    keyFact: "K = Keep safe — stay out of harm's way, do not intervene"
  },
  {
    id: "security-011",
    category: "security",
    subcategory: "reporting",
    type: "tf",
    difficulty: 1,
    tags: [],
    question: "The 'S' in T-R-U-C-K-S stands for 'Safety first — avoid becoming a target.'",
    answer: true,
    explanation: "True. The 'S' in the T-R-U-C-K-S reporting acronym stands for Safety first — avoid becoming a target. The full acronym is: T = Time, R = Reporting, U = Unusual activity, C = Communicate, K = Keep safe, S = Safety first.",
    keyFact: "S = Safety first — never make yourself a target"
  },
  {
    id: "security-012",
    category: "security",
    subcategory: "awareness",
    type: "mc",
    difficulty: 2,
    tags: ["procedure"],
    question: "How can a driver help prevent cargo theft?",
    choices: [
      { key: "A", text: "Leave the truck running for quick departure" },
      { key: "B", text: "Park in well-lit, secure areas; use locks; avoid leaving truck unattended in unsecured lots during weekends/holidays" },
      { key: "C", text: "Only use pad locks, no other security measures needed" },
      { key: "D", text: "Always park at the cheapest truck stop available" }
    ],
    answer: "B",
    explanation: "To prevent cargo theft, drivers should park in well-lit, secure areas; use proper locks and seals on cargo; avoid leaving the truck unattended in unsecured lots, especially during weekends and holidays when thefts are most common; be aware of surroundings; and follow company security procedures.",
    wrongExplanations: {
      "A": "Leaving the truck running wastes fuel and could make the vehicle easier to steal if the driver steps away.",
      "C": "While pad locks help, comprehensive security requires secure parking locations, awareness, proper seals, and following all company security protocols.",
      "D": "The cheapest truck stop may lack adequate lighting, surveillance, or security — cost should not be the primary factor in choosing parking."
    },
    keyFact: "Prevent cargo theft: secure parking, locks/seals, avoid unsecured lots on weekends/holidays."
  },
  {
    id: "security-013",
    category: "security",
    subcategory: "awareness",
    type: "tf",
    difficulty: 1,
    tags: [],
    question: "A driver should only report suspicious activity if they are absolutely certain a crime is being committed.",
    answer: false,
    explanation: "False. Drivers should report ANY suspicious activity, even if they are not certain a crime is being committed. It is better to report and let law enforcement investigate than to ignore potential threats. The saying is 'If you see something, say something.'",
    keyFact: "Report ALL suspicious activity — let law enforcement determine if it's a threat."
  },
  {
    id: "security-014",
    category: "security",
    subcategory: "reporting",
    type: "fill",
    difficulty: 2,
    tags: ["procedure"],
    question: "What does the 'R' in the T-R-U-C-K-S reporting acronym stand for?",
    answer: "Reporting",
    acceptedAnswers: ["Reporting", "Reporting - who is reporting"],
    explanation: "In the T-R-U-C-K-S acronym, 'R' stands for Reporting — this means identifying WHO is making the report (your name, company, truck number, and current location). Full acronym: Time, Reporting, Unusual activity, Communicate, Keep safe, Safety first.",
    keyFact: "R = Reporting — identify yourself (name, company, truck #, location)"
  },
  {
    id: "security-015",
    category: "security",
    subcategory: "reporting",
    type: "fill",
    difficulty: 2,
    tags: ["procedure"],
    question: "What does the 'U' in the T-R-U-C-K-S reporting acronym stand for?",
    answer: "Unusual activity",
    acceptedAnswers: ["Unusual activity", "Unusual Activity", "unusual activity"],
    explanation: "In the T-R-U-C-K-S acronym, 'U' stands for Unusual activity — describe WHAT you observed that was suspicious or out of the ordinary. Give a description of what was observed, including vehicles, landmarks, directions, and descriptions of persons involved. Full acronym: Time, Reporting, Unusual activity, Communicate, Keep safe, Safety first.",
    keyFact: "U = Unusual activity — describe exactly what you saw"
  }
];
