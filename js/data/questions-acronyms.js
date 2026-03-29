// ===== Trucking Industry Acronym Questions =====
var TDC = window.TDC || {};
window.TDC = TDC;

TDC.QuestionsAcronyms = [
  // ── AASHTO ──
  {
    id: "acronym-001",
    category: "acronyms",
    subcategory: "organizations",
    type: "mc",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does AASHTO stand for?",
    choices: [
      { key: "A", text: "American Association of State Highway and Transportation Officials" },
      { key: "B", text: "American Association of State Highway and Transit Organizations" },
      { key: "C", text: "American Alliance of State Highway and Transportation Officials" },
      { key: "D", text: "American Association of State Highways and Trucking Officials" }
    ],
    answer: "A",
    explanation: "AASHTO stands for American Association of State Highway and Transportation Officials. It is the organization that sets standards for highway design and transportation policy.",
    wrongExplanations: {
      "B": "'Transit Organizations' is incorrect. The correct term is 'Transportation Officials.'",
      "C": "'Alliance' is incorrect. The correct word is 'Association.'",
      "D": "'Trucking Officials' is incorrect. The correct term is 'Transportation Officials.'"
    },
    keyFact: "AASHTO = American Association of State Highway and Transportation Officials"
  },
  // ── ABS ──
  {
    id: "acronym-002",
    category: "acronyms",
    subcategory: "vehicle-systems",
    type: "fill",
    difficulty: 1,
    tags: ["acronym", "safety"],
    question: "What does the acronym ABS stand for in trucking?",
    answer: "Anti-lock Braking System",
    acceptedAnswers: ["Anti-lock Braking System", "Antilock Braking System", "Anti lock Braking System"],
    explanation: "ABS stands for Anti-lock Braking System. It is a safety system that prevents wheels from locking up during braking, helping the driver maintain steering control.",
    keyFact: "ABS = Anti-lock Braking System"
  },
  // ── APTA ──
  {
    id: "acronym-003",
    category: "acronyms",
    subcategory: "organizations",
    type: "mc",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does APTA stand for?",
    choices: [
      { key: "A", text: "American Public Transit Authority" },
      { key: "B", text: "American Public Transportation Association" },
      { key: "C", text: "Associated Public Transportation Alliance" },
      { key: "D", text: "American Private Trucking Association" }
    ],
    answer: "B",
    explanation: "APTA stands for American Public Transportation Association. It is an organization that advocates for public transportation in the United States.",
    wrongExplanations: {
      "A": "'Transit Authority' is incorrect. The correct term is 'Transportation Association.'",
      "C": "'Associated' and 'Alliance' are incorrect. The correct terms are 'American' and 'Association.'",
      "D": "'Private Trucking' is incorrect. APTA deals with 'Public Transportation.'"
    },
    keyFact: "APTA = American Public Transportation Association"
  },
  // ── ATA ──
  {
    id: "acronym-004",
    category: "acronyms",
    subcategory: "organizations",
    type: "fill",
    difficulty: 1,
    tags: ["acronym"],
    question: "What does ATA stand for in the trucking industry?",
    answer: "American Trucking Associations",
    acceptedAnswers: ["American Trucking Associations", "American Trucking Association"],
    explanation: "ATA stands for American Trucking Associations. It is the largest national trade association for the trucking industry.",
    keyFact: "ATA = American Trucking Associations"
  },
  // ── ATRI ──
  {
    id: "acronym-005",
    category: "acronyms",
    subcategory: "organizations",
    type: "mc",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does ATRI stand for?",
    choices: [
      { key: "A", text: "American Transportation Research Institute" },
      { key: "B", text: "American Trucking Research Institute" },
      { key: "C", text: "American Transit Research Institute" },
      { key: "D", text: "Allied Transportation Research Institute" }
    ],
    answer: "A",
    explanation: "ATRI stands for American Transportation Research Institute. It is a nonprofit research organization that conducts transportation research.",
    wrongExplanations: {
      "B": "'Trucking' is incorrect. The correct word is 'Transportation.'",
      "C": "'Transit' is incorrect. The correct word is 'Transportation.'",
      "D": "'Allied' is incorrect. The correct word is 'American.'"
    },
    keyFact: "ATRI = American Transportation Research Institute"
  },
  // ── BAC ──
  {
    id: "acronym-006",
    category: "acronyms",
    subcategory: "regulations",
    type: "fill",
    difficulty: 1,
    tags: ["acronym", "regulation"],
    question: "What does BAC stand for?",
    answer: "Blood Alcohol Content",
    acceptedAnswers: ["Blood Alcohol Content", "Blood Alcohol Concentration"],
    explanation: "BAC stands for Blood Alcohol Content. For commercial motor vehicle (CMV) drivers, the legal BAC limit is 0.04%, half the standard limit for non-commercial drivers.",
    keyFact: "BAC = Blood Alcohol Content"
  },
  // ── BASIC ──
  {
    id: "acronym-007",
    category: "acronyms",
    subcategory: "safety-programs",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "regulation"],
    question: "In the context of the CSA program, what does BASIC stand for?",
    choices: [
      { key: "A", text: "Behavioral Analysis and Safety Improvement Categories" },
      { key: "B", text: "Basic Analysis of Safety and Inspection Criteria" },
      { key: "C", text: "Behavioral Assessment and Safety Investigation Categories" },
      { key: "D", text: "Behavioral Analysis and Safety Inspection Compliance" }
    ],
    answer: "A",
    explanation: "BASIC stands for Behavioral Analysis and Safety Improvement Categories. These are the seven safety-related categories used in the FMCSA's Compliance, Safety, Accountability (CSA) program.",
    wrongExplanations: {
      "B": "'Basic Analysis of Safety and Inspection Criteria' is not the correct expansion of BASIC.",
      "C": "'Assessment' and 'Investigation' are incorrect. The correct terms are 'Analysis' and 'Improvement.'",
      "D": "'Inspection Compliance' is incorrect. The correct term is 'Improvement Categories.'"
    },
    keyFact: "BASIC = Behavioral Analysis and Safety Improvement Categories"
  },
  // ── BLS ──
  {
    id: "acronym-008",
    category: "acronyms",
    subcategory: "government",
    type: "fill",
    difficulty: 1,
    tags: ["acronym"],
    question: "What does BLS stand for?",
    answer: "Bureau of Labor Statistics",
    acceptedAnswers: ["Bureau of Labor Statistics"],
    explanation: "BLS stands for Bureau of Labor Statistics. It is the principal federal agency responsible for measuring labor market activity, working conditions, and price changes.",
    keyFact: "BLS = Bureau of Labor Statistics"
  },
  // ── CCSF ──
  {
    id: "acronym-009",
    category: "acronyms",
    subcategory: "security",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "security"],
    question: "What does CCSF stand for?",
    choices: [
      { key: "A", text: "Certified Cargo Safety Facility" },
      { key: "B", text: "Certified Cargo Screening Facility" },
      { key: "C", text: "Commercial Cargo Screening Facility" },
      { key: "D", text: "Certified Container Screening Facility" }
    ],
    answer: "B",
    explanation: "CCSF stands for Certified Cargo Screening Facility. These facilities are certified to screen cargo before it is transported on passenger aircraft.",
    wrongExplanations: {
      "A": "'Safety' is incorrect. The correct word is 'Screening.'",
      "C": "'Commercial' is incorrect. The correct word is 'Certified.'",
      "D": "'Container' is incorrect. The correct word is 'Cargo.'"
    },
    keyFact: "CCSF = Certified Cargo Screening Facility"
  },
  // ── CCSP ──
  {
    id: "acronym-010",
    category: "acronyms",
    subcategory: "security",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "security"],
    question: "What does CCSP stand for?",
    answer: "Certified Cargo Screening Professional",
    acceptedAnswers: ["Certified Cargo Screening Professional"],
    explanation: "CCSP stands for Certified Cargo Screening Professional. A CCSP is an individual certified to perform cargo screening at a Certified Cargo Screening Facility (CCSF).",
    keyFact: "CCSP = Certified Cargo Screening Professional"
  },
  // ── CDC ──
  {
    id: "acronym-011",
    category: "acronyms",
    subcategory: "government",
    type: "mc",
    difficulty: 1,
    tags: ["acronym"],
    question: "What does CDC stand for?",
    choices: [
      { key: "A", text: "Centers for Disease Control & Prevention" },
      { key: "B", text: "Center for Disease Communication" },
      { key: "C", text: "Centers for Disease Containment & Prevention" },
      { key: "D", text: "Central Disease Control & Prevention" }
    ],
    answer: "A",
    explanation: "CDC stands for Centers for Disease Control & Prevention. It is the national public health agency of the United States.",
    wrongExplanations: {
      "B": "'Center for Disease Communication' is not correct. CDC stands for Centers for Disease Control & Prevention.",
      "C": "'Containment' is incorrect. The correct word is 'Control.'",
      "D": "'Central' is incorrect. The correct word is 'Centers.'"
    },
    keyFact: "CDC = Centers for Disease Control & Prevention"
  },
  // ── CDL ──
  {
    id: "acronym-012",
    category: "acronyms",
    subcategory: "licensing",
    type: "fill",
    difficulty: 1,
    tags: ["acronym", "regulation"],
    question: "What does CDL stand for?",
    answer: "Commercial Drivers License",
    acceptedAnswers: ["Commercial Drivers License", "Commercial Driver's License", "Commercial Driver License"],
    explanation: "CDL stands for Commercial Drivers License. It is the license required to operate commercial motor vehicles (CMVs) in the United States.",
    keyFact: "CDL = Commercial Drivers License"
  },
  // ── CDLIS ──
  {
    id: "acronym-013",
    category: "acronyms",
    subcategory: "licensing",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "regulation"],
    question: "What does CDLIS stand for?",
    choices: [
      { key: "A", text: "Commercial Drivers License Information System" },
      { key: "B", text: "Commercial Drivers License Inspection Service" },
      { key: "C", text: "CDL Identification System" },
      { key: "D", text: "Commercial Drivers License Interstate System" }
    ],
    answer: "A",
    explanation: "CDLIS stands for Commercial Drivers License Information System. It is a nationwide computer system that ensures each commercial driver has only one CDL and one complete driving record.",
    wrongExplanations: {
      "B": "'Inspection Service' is incorrect. The correct term is 'Information System.'",
      "C": "'CDL Identification System' is not the correct expansion.",
      "D": "'Interstate System' is incorrect. The correct term is 'Information System.'"
    },
    keyFact: "CDLIS = Commercial Drivers License Information System"
  },
  // ── CLP ──
  {
    id: "acronym-014",
    category: "acronyms",
    subcategory: "licensing",
    type: "fill",
    difficulty: 1,
    tags: ["acronym", "regulation"],
    question: "What does CLP stand for in trucking?",
    answer: "Commercial Learner Permit",
    acceptedAnswers: ["Commercial Learner Permit", "Commercial Learners Permit", "Commercial Learner's Permit"],
    explanation: "CLP stands for Commercial Learner Permit. A CLP allows a person to practice driving a commercial motor vehicle (CMV) under the supervision of a CDL holder.",
    keyFact: "CLP = Commercial Learner Permit"
  },
  // ── CMV ──
  {
    id: "acronym-015",
    category: "acronyms",
    subcategory: "vehicle-types",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "regulation"],
    question: "What does CMV stand for?",
    choices: [
      { key: "A", text: "Commercial Motor Vehicle" },
      { key: "B", text: "Certified Motor Vehicle" },
      { key: "C", text: "Commercial Municipal Vehicle" },
      { key: "D", text: "Common Motor Vehicle" }
    ],
    answer: "A",
    explanation: "CMV stands for Commercial Motor Vehicle. A CMV is defined as a vehicle used in commerce with a gross vehicle weight rating (GVWR) of 10,001 pounds or more, or one designed to transport 16 or more passengers, or one used to transport hazardous materials.",
    wrongExplanations: {
      "B": "'Certified' is incorrect. The correct word is 'Commercial.'",
      "C": "'Municipal' is incorrect. The correct word is 'Motor.'",
      "D": "'Common' is incorrect. The correct word is 'Commercial.'"
    },
    keyFact: "CMV = Commercial Motor Vehicle"
  },
  // ── CSA ──
  {
    id: "acronym-016",
    category: "acronyms",
    subcategory: "safety-programs",
    type: "fill",
    difficulty: 1,
    tags: ["acronym", "regulation"],
    question: "What does CSA stand for in trucking regulation?",
    answer: "Compliance Safety Accountability",
    acceptedAnswers: ["Compliance Safety Accountability", "Compliance, Safety, Accountability"],
    explanation: "CSA stands for Compliance, Safety, Accountability. It is the Federal Motor Carrier Safety Administration's (FMCSA) safety compliance and enforcement program.",
    keyFact: "CSA = Compliance, Safety, Accountability"
  },
  // ── CSR ──
  {
    id: "acronym-017",
    category: "acronyms",
    subcategory: "safety-programs",
    type: "mc",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does CSR stand for in the trucking industry?",
    choices: [
      { key: "A", text: "Corporate Safety Review" },
      { key: "B", text: "Carrier Safety Rating" },
      { key: "C", text: "Commercial Safety Report" },
      { key: "D", text: "Compliance and Safety Review" }
    ],
    answer: "A",
    explanation: "CSR stands for Corporate Safety Review. It is a process used by carriers to review and improve their safety performance.",
    wrongExplanations: {
      "B": "'Carrier Safety Rating' is not what CSR stands for.",
      "C": "'Commercial Safety Report' is incorrect.",
      "D": "'Compliance and Safety Review' is not the correct expansion."
    },
    keyFact: "CSR = Corporate Safety Review"
  },
  // ── CT ──
  {
    id: "acronym-018",
    category: "acronyms",
    subcategory: "equipment",
    type: "fill",
    difficulty: 2,
    tags: ["acronym"],
    question: "In intermodal transportation, what does CT stand for?",
    answer: "Container-on-flatcar Trailer",
    acceptedAnswers: ["Container-on-flatcar Trailer", "Container on flatcar Trailer", "Container-on-Flatcar Trailer"],
    explanation: "CT stands for Container-on-flatcar Trailer. This refers to a method of intermodal (IM) transportation where a shipping container is placed on a flatcar trailer for rail transport.",
    keyFact: "CT = Container-on-flatcar Trailer"
  },
  // ── CTPAT ──
  {
    id: "acronym-019",
    category: "acronyms",
    subcategory: "security",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "security"],
    question: "What does CTPAT stand for?",
    choices: [
      { key: "A", text: "Customs-Trade Partnership Against Terrorism" },
      { key: "B", text: "Commercial Transport Protection Against Terrorism" },
      { key: "C", text: "Customs and Trade Protection Agency for Transport" },
      { key: "D", text: "Certified Trade Partnership for Anti-Terrorism" }
    ],
    answer: "A",
    explanation: "CTPAT stands for Customs-Trade Partnership Against Terrorism. It is a voluntary public-private sector partnership program managed by U.S. Customs and Border Protection (CBP).",
    wrongExplanations: {
      "B": "'Commercial Transport Protection Against Terrorism' is not correct.",
      "C": "'Protection Agency for Transport' is incorrect.",
      "D": "'Certified Trade Partnership for Anti-Terrorism' is not the correct expansion."
    },
    keyFact: "CTPAT = Customs-Trade Partnership Against Terrorism"
  },
  // ── CVSA ──
  {
    id: "acronym-020",
    category: "acronyms",
    subcategory: "organizations",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "regulation"],
    question: "What does CVSA stand for?",
    answer: "Commercial Vehicle Safety Alliance",
    acceptedAnswers: ["Commercial Vehicle Safety Alliance"],
    explanation: "CVSA stands for Commercial Vehicle Safety Alliance. It is an international not-for-profit organization comprising local, state, provincial, territorial, and federal motor carrier safety officials and industry representatives.",
    keyFact: "CVSA = Commercial Vehicle Safety Alliance"
  },
  // ── DHS ──
  {
    id: "acronym-021",
    category: "acronyms",
    subcategory: "government",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "security"],
    question: "What does DHS stand for?",
    choices: [
      { key: "A", text: "Department of Highway Safety" },
      { key: "B", text: "Department of Homeland Security" },
      { key: "C", text: "Division of Homeland Services" },
      { key: "D", text: "Department of Health Services" }
    ],
    answer: "B",
    explanation: "DHS stands for Department of Homeland Security. It is the federal department responsible for public security, including the Transportation Security Administration (TSA).",
    wrongExplanations: {
      "A": "'Highway Safety' is incorrect. DHS deals with 'Homeland Security.'",
      "C": "'Division of Homeland Services' is not correct.",
      "D": "'Health Services' is incorrect. DHS is 'Homeland Security.'"
    },
    keyFact: "DHS = Department of Homeland Security"
  },
  // ── DOL ──
  {
    id: "acronym-022",
    category: "acronyms",
    subcategory: "government",
    type: "fill",
    difficulty: 1,
    tags: ["acronym"],
    question: "What does DOL stand for?",
    answer: "Department of Labor",
    acceptedAnswers: ["Department of Labor"],
    explanation: "DOL stands for Department of Labor. It is the federal agency responsible for occupational safety, wage and hour standards, and workers' compensation programs.",
    keyFact: "DOL = Department of Labor"
  },
  // ── DOT ──
  {
    id: "acronym-023",
    category: "acronyms",
    subcategory: "government",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "regulation"],
    question: "What does DOT stand for?",
    choices: [
      { key: "A", text: "Division of Transportation" },
      { key: "B", text: "Department of Transit" },
      { key: "C", text: "Department of Transportation" },
      { key: "D", text: "Department of Trucking" }
    ],
    answer: "C",
    explanation: "DOT stands for Department of Transportation. It is the federal department that oversees all modes of transportation in the United States, including the Federal Motor Carrier Safety Administration (FMCSA).",
    wrongExplanations: {
      "A": "'Division' is incorrect. The correct word is 'Department.'",
      "B": "'Transit' is incorrect. The correct word is 'Transportation.'",
      "D": "'Trucking' is incorrect. DOT oversees all 'Transportation,' not just trucking."
    },
    keyFact: "DOT = Department of Transportation"
  },
  // ── EDR ──
  {
    id: "acronym-024",
    category: "acronyms",
    subcategory: "technology",
    type: "fill",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does EDR stand for?",
    answer: "Electronic Data Recorder",
    acceptedAnswers: ["Electronic Data Recorder"],
    explanation: "EDR stands for Electronic Data Recorder. Similar to an airplane's 'black box,' an EDR records vehicle data such as speed, brake application, and other parameters that can be used in crash investigation.",
    keyFact: "EDR = Electronic Data Recorder"
  },
  // ── ELD ──
  {
    id: "acronym-025",
    category: "acronyms",
    subcategory: "technology",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "regulation"],
    question: "What does ELD stand for?",
    choices: [
      { key: "A", text: "Electronic Logging Device" },
      { key: "B", text: "Electronic Location Device" },
      { key: "C", text: "Electronic Load Detector" },
      { key: "D", text: "Engine Logging Device" }
    ],
    answer: "A",
    explanation: "ELD stands for Electronic Logging Device. The FMCSA mandates that most commercial motor vehicle (CMV) drivers use ELDs to record their Hours of Service (HOS).",
    wrongExplanations: {
      "B": "'Location Device' is incorrect. ELD records driving time, not location.",
      "C": "'Load Detector' is incorrect. The correct term is 'Logging Device.'",
      "D": "'Engine' is incorrect. The correct word is 'Electronic.'"
    },
    keyFact: "ELD = Electronic Logging Device"
  },
  // ── EPA ──
  {
    id: "acronym-026",
    category: "acronyms",
    subcategory: "government",
    type: "fill",
    difficulty: 1,
    tags: ["acronym"],
    question: "What does EPA stand for?",
    answer: "Environmental Protection Agency",
    acceptedAnswers: ["Environmental Protection Agency"],
    explanation: "EPA stands for Environmental Protection Agency. It is the federal agency that sets emissions standards for commercial trucks and regulates environmental impacts of the transportation industry.",
    keyFact: "EPA = Environmental Protection Agency"
  },
  // ── ESC ──
  {
    id: "acronym-027",
    category: "acronyms",
    subcategory: "vehicle-systems",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "safety"],
    question: "What does ESC stand for in vehicle safety?",
    choices: [
      { key: "A", text: "Electronic Stability Control" },
      { key: "B", text: "Engine Safety Controller" },
      { key: "C", text: "Electronic Speed Control" },
      { key: "D", text: "Emergency Stability Control" }
    ],
    answer: "A",
    explanation: "ESC stands for Electronic Stability Control. It is a computerized technology that improves a vehicle's stability by detecting and reducing loss of traction (skidding).",
    wrongExplanations: {
      "B": "'Engine Safety Controller' is not correct.",
      "C": "'Speed Control' is incorrect. The correct term is 'Stability Control.'",
      "D": "'Emergency' is incorrect. The correct word is 'Electronic.'"
    },
    keyFact: "ESC = Electronic Stability Control"
  },
  // ── FAST ACT ──
  {
    id: "acronym-028",
    category: "acronyms",
    subcategory: "legislation",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "regulation"],
    question: "What does the FAST ACT stand for?",
    answer: "Fixing America's Surface Transportation Act",
    acceptedAnswers: ["Fixing America's Surface Transportation Act", "Fixing Americas Surface Transportation Act"],
    explanation: "FAST ACT stands for Fixing America's Surface Transportation Act. It is a federal law that funds surface transportation programs including highways and transit.",
    keyFact: "FAST ACT = Fixing America's Surface Transportation Act"
  },
  // ── FCC ──
  {
    id: "acronym-029",
    category: "acronyms",
    subcategory: "government",
    type: "mc",
    difficulty: 1,
    tags: ["acronym"],
    question: "What does FCC stand for?",
    choices: [
      { key: "A", text: "Federal Communications Commission" },
      { key: "B", text: "Federal Commercial Commission" },
      { key: "C", text: "Federal Compliance Committee" },
      { key: "D", text: "Federal Commerce Commission" }
    ],
    answer: "A",
    explanation: "FCC stands for Federal Communications Commission. It regulates communications by radio, television, wire, satellite, and cable, which affects CB radio use in trucking.",
    wrongExplanations: {
      "B": "'Commercial Commission' is incorrect. FCC is about 'Communications.'",
      "C": "'Compliance Committee' is incorrect.",
      "D": "'Commerce Commission' is incorrect. The correct word is 'Communications.'"
    },
    keyFact: "FCC = Federal Communications Commission"
  },
  // ── FCW ──
  {
    id: "acronym-030",
    category: "acronyms",
    subcategory: "vehicle-systems",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "safety"],
    question: "What does FCW stand for in truck safety technology?",
    answer: "Forward Collision Warning",
    acceptedAnswers: ["Forward Collision Warning", "Forward Collision Warning system", "Forward Collision Warning System"],
    explanation: "FCW stands for Forward Collision Warning (system). It is a safety technology that alerts the driver when a potential collision with a vehicle ahead is detected.",
    keyFact: "FCW = Forward Collision Warning (system)"
  },
  // ── FHWA ──
  {
    id: "acronym-031",
    category: "acronyms",
    subcategory: "government",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "regulation"],
    question: "What does FHWA stand for?",
    choices: [
      { key: "A", text: "Federal Highway Administration" },
      { key: "B", text: "Federal Highway Association" },
      { key: "C", text: "Federal Highways and Waterways Administration" },
      { key: "D", text: "Federal Highway Authority" }
    ],
    answer: "A",
    explanation: "FHWA stands for Federal Highway Administration. It is an agency within the U.S. Department of Transportation (DOT) that provides funding and technical assistance for highway programs.",
    wrongExplanations: {
      "B": "'Association' is incorrect. The correct word is 'Administration.'",
      "C": "'Highways and Waterways' is incorrect. It is just 'Highway.'",
      "D": "'Authority' is incorrect. The correct word is 'Administration.'"
    },
    keyFact: "FHWA = Federal Highway Administration"
  },
  // ── FMCSA ──
  {
    id: "acronym-032",
    category: "acronyms",
    subcategory: "government",
    type: "fill",
    difficulty: 1,
    tags: ["acronym", "regulation"],
    question: "What does FMCSA stand for?",
    answer: "Federal Motor Carrier Safety Administration",
    acceptedAnswers: ["Federal Motor Carrier Safety Administration"],
    explanation: "FMCSA stands for Federal Motor Carrier Safety Administration. It is the federal agency within the U.S. Department of Transportation (DOT) that regulates the trucking industry, including CDL standards, Hours of Service (HOS), and the CSA program.",
    keyFact: "FMCSA = Federal Motor Carrier Safety Administration"
  },
  // ── FMCSRs ──
  {
    id: "acronym-033",
    category: "acronyms",
    subcategory: "regulations",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "regulation"],
    question: "What does FMCSRs stand for?",
    choices: [
      { key: "A", text: "Federal Motor Carrier Safety Regulations" },
      { key: "B", text: "Federal Motor Carrier Safety Requirements" },
      { key: "C", text: "Federal Motor Carrier Safety Rules" },
      { key: "D", text: "Federal Motor Commercial Safety Regulations" }
    ],
    answer: "A",
    explanation: "FMCSRs stands for Federal Motor Carrier Safety Regulations. These are the rules codified in Title 49 of the Code of Federal Regulations (CFR) that govern the trucking industry.",
    wrongExplanations: {
      "B": "'Requirements' is incorrect. The correct word is 'Regulations.'",
      "C": "'Rules' is incorrect. The correct word is 'Regulations.'",
      "D": "'Commercial' is incorrect. The correct word is 'Carrier.'"
    },
    keyFact: "FMCSRs = Federal Motor Carrier Safety Regulations"
  },
  // ── FMVSS ──
  {
    id: "acronym-034",
    category: "acronyms",
    subcategory: "regulations",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "regulation"],
    question: "What does FMVSS stand for?",
    answer: "Federal Motor Vehicle Safety Standard",
    acceptedAnswers: ["Federal Motor Vehicle Safety Standard", "Federal Motor Vehicle Safety Standards"],
    explanation: "FMVSS stands for Federal Motor Vehicle Safety Standard. These are U.S. federal regulations specifying design, construction, performance, and durability requirements for motor vehicles.",
    keyFact: "FMVSS = Federal Motor Vehicle Safety Standard"
  },
  // ── FR ──
  {
    id: "acronym-035",
    category: "acronyms",
    subcategory: "government",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "regulation"],
    question: "What does FR stand for in the context of government regulations?",
    choices: [
      { key: "A", text: "Federal Register" },
      { key: "B", text: "Federal Regulation" },
      { key: "C", text: "Federal Report" },
      { key: "D", text: "Federal Ruling" }
    ],
    answer: "A",
    explanation: "FR stands for Federal Register. It is the official journal of the federal government, where all proposed and final regulations, executive orders, and other official documents are published.",
    wrongExplanations: {
      "B": "'Federal Regulation' is incorrect. The FR is the 'Federal Register.'",
      "C": "'Federal Report' is incorrect.",
      "D": "'Federal Ruling' is incorrect."
    },
    keyFact: "FR = Federal Register"
  },
  // ── FRA ──
  {
    id: "acronym-036",
    category: "acronyms",
    subcategory: "government",
    type: "fill",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does FRA stand for?",
    answer: "Federal Railroad Administration",
    acceptedAnswers: ["Federal Railroad Administration"],
    explanation: "FRA stands for Federal Railroad Administration. It is the agency within the U.S. Department of Transportation (DOT) that regulates railroad safety.",
    keyFact: "FRA = Federal Railroad Administration"
  },
  // ── GAO ──
  {
    id: "acronym-037",
    category: "acronyms",
    subcategory: "government",
    type: "mc",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does GAO stand for?",
    choices: [
      { key: "A", text: "Government Accountability Office" },
      { key: "B", text: "General Accounting Office" },
      { key: "C", text: "Government Auditing Organization" },
      { key: "D", text: "General Administrative Office" }
    ],
    answer: "A",
    explanation: "GAO stands for Government Accountability Office. It is an independent, nonpartisan agency that works for Congress, often called the 'congressional watchdog.'",
    wrongExplanations: {
      "B": "'General Accounting Office' was the former name but it was renamed to Government Accountability Office in 2004.",
      "C": "'Government Auditing Organization' is incorrect.",
      "D": "'General Administrative Office' is incorrect."
    },
    keyFact: "GAO = Government Accountability Office"
  },
  // ── GCWR ──
  {
    id: "acronym-038",
    category: "acronyms",
    subcategory: "vehicle-specs",
    type: "fill",
    difficulty: 1,
    tags: ["acronym", "numbers"],
    question: "What does GCWR stand for?",
    answer: "Gross Combination Weight Rating",
    acceptedAnswers: ["Gross Combination Weight Rating"],
    explanation: "GCWR stands for Gross Combination Weight Rating. It is the maximum allowable weight of the truck, trailer, cargo, passengers, and fuel combined as specified by the manufacturer.",
    keyFact: "GCWR = Gross Combination Weight Rating"
  },
  // ── GIS ──
  {
    id: "acronym-039",
    category: "acronyms",
    subcategory: "technology",
    type: "mc",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does GIS stand for?",
    choices: [
      { key: "A", text: "Geographic Information System" },
      { key: "B", text: "Global Information Service" },
      { key: "C", text: "Geographic Identification System" },
      { key: "D", text: "General Information System" }
    ],
    answer: "A",
    explanation: "GIS stands for Geographic Information System. It is a system designed to capture, store, manipulate, analyze, manage, and present spatial or geographic data.",
    wrongExplanations: {
      "B": "'Global Information Service' is incorrect.",
      "C": "'Identification' is incorrect. The correct word is 'Information.'",
      "D": "'General' is incorrect. The correct word is 'Geographic.'"
    },
    keyFact: "GIS = Geographic Information System"
  },
  // ── GPS ──
  {
    id: "acronym-040",
    category: "acronyms",
    subcategory: "technology",
    type: "fill",
    difficulty: 1,
    tags: ["acronym"],
    question: "What does GPS stand for?",
    answer: "Global Positioning Systems",
    acceptedAnswers: ["Global Positioning Systems", "Global Positioning System"],
    explanation: "GPS stands for Global Positioning Systems. Trucks use GPS for navigation, route planning, and fleet management.",
    keyFact: "GPS = Global Positioning Systems"
  },
  // ── GVWR ──
  {
    id: "acronym-041",
    category: "acronyms",
    subcategory: "vehicle-specs",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "numbers"],
    question: "What does GVWR stand for?",
    choices: [
      { key: "A", text: "Gross Vehicle Weight Rating" },
      { key: "B", text: "Gross Vehicle Width Restriction" },
      { key: "C", text: "General Vehicle Weight Rating" },
      { key: "D", text: "Gross Vehicle Weight Requirement" }
    ],
    answer: "A",
    explanation: "GVWR stands for Gross Vehicle Weight Rating. It is the maximum operating weight of a vehicle as specified by the manufacturer, including the vehicle itself, passengers, cargo, and fuel.",
    wrongExplanations: {
      "B": "'Width Restriction' is incorrect. GVWR deals with 'Weight Rating.'",
      "C": "'General' is incorrect. The correct word is 'Gross.'",
      "D": "'Requirement' is incorrect. The correct word is 'Rating.'"
    },
    keyFact: "GVWR = Gross Vehicle Weight Rating"
  },
  // ── H&W ──
  {
    id: "acronym-042",
    category: "acronyms",
    subcategory: "health",
    type: "fill",
    difficulty: 1,
    tags: ["acronym"],
    question: "What does H&W stand for in the trucking industry?",
    answer: "Health & Wellness",
    acceptedAnswers: ["Health & Wellness", "Health and Wellness"],
    explanation: "H&W stands for Health & Wellness. Driver health and wellness programs are important for reducing fatigue-related crashes and improving driver retention.",
    keyFact: "H&W = Health & Wellness"
  },
  // ── HM ──
  {
    id: "acronym-043",
    category: "acronyms",
    subcategory: "hazmat",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "hazmat"],
    question: "What does HM stand for in trucking?",
    choices: [
      { key: "A", text: "Hazardous Materials" },
      { key: "B", text: "Heavy Machinery" },
      { key: "C", text: "Highway Maintenance" },
      { key: "D", text: "High Mileage" }
    ],
    answer: "A",
    explanation: "HM stands for Hazardous Materials. Drivers transporting hazardous materials must have a Hazardous Materials Endorsement (HME) on their CDL.",
    wrongExplanations: {
      "B": "'Heavy Machinery' is incorrect. HM stands for 'Hazardous Materials.'",
      "C": "'Highway Maintenance' is not what HM stands for in trucking.",
      "D": "'High Mileage' is incorrect."
    },
    keyFact: "HM = Hazardous Materials"
  },
  // ── HME ──
  {
    id: "acronym-044",
    category: "acronyms",
    subcategory: "hazmat",
    type: "fill",
    difficulty: 1,
    tags: ["acronym", "hazmat", "regulation"],
    question: "What does HME stand for?",
    answer: "Hazardous Materials Endorsement",
    acceptedAnswers: ["Hazardous Materials Endorsement"],
    explanation: "HME stands for Hazardous Materials Endorsement. It is a special endorsement on a CDL (Commercial Drivers License) required to transport hazardous materials. Obtaining an HME requires passing a TSA (Transportation Security Administration) Security Threat Assessment (STA).",
    keyFact: "HME = Hazardous Materials Endorsement"
  },
  // ── HMR ──
  {
    id: "acronym-045",
    category: "acronyms",
    subcategory: "hazmat",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "hazmat", "regulation"],
    question: "What does HMR stand for?",
    choices: [
      { key: "A", text: "Hazardous Materials Regulations" },
      { key: "B", text: "Hazardous Materials Report" },
      { key: "C", text: "Highway Materials Review" },
      { key: "D", text: "Hazmat Management Rules" }
    ],
    answer: "A",
    explanation: "HMR stands for Hazardous Materials Regulations. These are the federal regulations governing the transportation of hazardous materials, administered by the Pipeline and Hazardous Materials Safety Administration (PHMSA).",
    wrongExplanations: {
      "B": "'Report' is incorrect. The correct word is 'Regulations.'",
      "C": "'Highway Materials Review' is not correct.",
      "D": "'Hazmat Management Rules' is not the correct expansion."
    },
    keyFact: "HMR = Hazardous Materials Regulations"
  },
  // ── HOS ──
  {
    id: "acronym-046",
    category: "acronyms",
    subcategory: "regulations",
    type: "fill",
    difficulty: 1,
    tags: ["acronym", "regulation"],
    question: "What does HOS stand for?",
    answer: "Hours of Service",
    acceptedAnswers: ["Hours of Service"],
    explanation: "HOS stands for Hours of Service. These are the Federal Motor Carrier Safety Administration (FMCSA) regulations that govern how many hours a commercial motor vehicle (CMV) driver may drive and work, and how much rest is required.",
    keyFact: "HOS = Hours of Service"
  },
  // ── HRM ──
  {
    id: "acronym-047",
    category: "acronyms",
    subcategory: "management",
    type: "mc",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does HRM stand for?",
    choices: [
      { key: "A", text: "Human Resource Management" },
      { key: "B", text: "Highway Route Management" },
      { key: "C", text: "Hazardous Route Mapping" },
      { key: "D", text: "Human Risk Management" }
    ],
    answer: "A",
    explanation: "HRM stands for Human Resource Management. In the trucking industry, HRM covers driver recruitment, training, retention, and compliance with employment regulations.",
    wrongExplanations: {
      "B": "'Highway Route Management' is incorrect.",
      "C": "'Hazardous Route Mapping' is incorrect.",
      "D": "'Human Risk Management' is not what HRM stands for."
    },
    keyFact: "HRM = Human Resource Management"
  },
  // ── IAC ──
  {
    id: "acronym-048",
    category: "acronyms",
    subcategory: "security",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "security"],
    question: "What does IAC stand for?",
    answer: "Indirect Air Carrier",
    acceptedAnswers: ["Indirect Air Carrier"],
    explanation: "IAC stands for Indirect Air Carrier. An IAC is any person or entity that engages in the indirect air transportation of property, such as freight forwarders who tender cargo to airlines.",
    keyFact: "IAC = Indirect Air Carrier"
  },
  // ── ICC ──
  {
    id: "acronym-049",
    category: "acronyms",
    subcategory: "government",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "regulation"],
    question: "What does ICC stand for?",
    choices: [
      { key: "A", text: "Interstate Commerce Commission" },
      { key: "B", text: "International Commerce Council" },
      { key: "C", text: "Interstate Commercial Carriers" },
      { key: "D", text: "Interstate Compliance Committee" }
    ],
    answer: "A",
    explanation: "ICC stands for Interstate Commerce Commission. It was the former federal agency that regulated the trucking industry before being abolished in 1995. Its functions were transferred to the Surface Transportation Board and FMCSA.",
    wrongExplanations: {
      "B": "'International Commerce Council' is incorrect.",
      "C": "'Interstate Commercial Carriers' is incorrect.",
      "D": "'Interstate Compliance Committee' is not correct."
    },
    keyFact: "ICC = Interstate Commerce Commission"
  },
  // ── IIHS ──
  {
    id: "acronym-050",
    category: "acronyms",
    subcategory: "organizations",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "safety"],
    question: "What does IIHS stand for?",
    answer: "Insurance Institute for Highway Safety",
    acceptedAnswers: ["Insurance Institute for Highway Safety"],
    explanation: "IIHS stands for Insurance Institute for Highway Safety. It is an independent, nonprofit scientific and educational organization dedicated to reducing deaths, injuries, and property damage from motor vehicle crashes.",
    keyFact: "IIHS = Insurance Institute for Highway Safety"
  },
  // ── IM ──
  {
    id: "acronym-051",
    category: "acronyms",
    subcategory: "operations",
    type: "mc",
    difficulty: 1,
    tags: ["acronym"],
    question: "What does IM stand for in the transportation industry?",
    choices: [
      { key: "A", text: "Intermodal" },
      { key: "B", text: "Interstate Movement" },
      { key: "C", text: "Internal Management" },
      { key: "D", text: "Inspection Manual" }
    ],
    answer: "A",
    explanation: "IM stands for Intermodal. Intermodal transportation involves using two or more modes of transport (e.g., truck and rail) to move freight.",
    wrongExplanations: {
      "B": "'Interstate Movement' is incorrect.",
      "C": "'Internal Management' is not what IM stands for.",
      "D": "'Inspection Manual' is incorrect."
    },
    keyFact: "IM = Intermodal"
  },
  // ── ITS ──
  {
    id: "acronym-052",
    category: "acronyms",
    subcategory: "technology",
    type: "fill",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does ITS stand for?",
    answer: "Intelligent Transportation System",
    acceptedAnswers: ["Intelligent Transportation System", "Intelligent Transportation Systems"],
    explanation: "ITS stands for Intelligent Transportation System. It encompasses advanced technologies applied to transportation to improve safety, efficiency, and sustainability.",
    keyFact: "ITS = Intelligent Transportation System"
  },
  // ── LCV ──
  {
    id: "acronym-053",
    category: "acronyms",
    subcategory: "vehicle-types",
    type: "mc",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does LCV stand for?",
    choices: [
      { key: "A", text: "Longer Combination Vehicle" },
      { key: "B", text: "Light Commercial Vehicle" },
      { key: "C", text: "Large Cargo Vehicle" },
      { key: "D", text: "Licensed Commercial Vehicle" }
    ],
    answer: "A",
    explanation: "LCV stands for Longer Combination Vehicle. LCVs are truck combinations that are longer than typical tractor-trailer rigs, such as double or triple trailers.",
    wrongExplanations: {
      "B": "'Light Commercial Vehicle' is incorrect. LCV refers to 'Longer Combination Vehicle.'",
      "C": "'Large Cargo Vehicle' is incorrect.",
      "D": "'Licensed Commercial Vehicle' is incorrect."
    },
    keyFact: "LCV = Longer Combination Vehicle"
  },
  // ── LDWS ──
  {
    id: "acronym-054",
    category: "acronyms",
    subcategory: "vehicle-systems",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "safety"],
    question: "What does LDWS stand for?",
    answer: "Lane Departure Warning Systems",
    acceptedAnswers: ["Lane Departure Warning Systems", "Lane Departure Warning System"],
    explanation: "LDWS stands for Lane Departure Warning Systems. These systems alert the driver when the vehicle begins to drift out of its lane without a turn signal activated.",
    keyFact: "LDWS = Lane Departure Warning Systems"
  },
  // ── LOC ──
  {
    id: "acronym-055",
    category: "acronyms",
    subcategory: "safety-programs",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "safety"],
    question: "What does LOC stand for in truck crash analysis?",
    choices: [
      { key: "A", text: "Loss of Control" },
      { key: "B", text: "Line of Communication" },
      { key: "C", text: "Level of Compliance" },
      { key: "D", text: "Load Over Capacity" }
    ],
    answer: "A",
    explanation: "LOC stands for Loss of Control. It is one of the leading factors in large truck crashes.",
    wrongExplanations: {
      "B": "'Line of Communication' is incorrect in this context.",
      "C": "'Level of Compliance' is incorrect.",
      "D": "'Load Over Capacity' is incorrect."
    },
    keyFact: "LOC = Loss of Control"
  },
  // ── LTCCS ──
  {
    id: "acronym-056",
    category: "acronyms",
    subcategory: "safety-programs",
    type: "fill",
    difficulty: 3,
    tags: ["acronym"],
    question: "What does LTCCS stand for?",
    answer: "Large Truck Crash Causation Study",
    acceptedAnswers: ["Large Truck Crash Causation Study"],
    explanation: "LTCCS stands for Large Truck Crash Causation Study. It was a major research study conducted by the FMCSA and the National Highway Traffic Safety Administration (NHTSA) to identify the causes of serious large truck crashes.",
    keyFact: "LTCCS = Large Truck Crash Causation Study"
  },
  // ── LTL ──
  {
    id: "acronym-057",
    category: "acronyms",
    subcategory: "operations",
    type: "mc",
    difficulty: 1,
    tags: ["acronym"],
    question: "What does LTL stand for?",
    choices: [
      { key: "A", text: "Less Than Truckload" },
      { key: "B", text: "Long-Term Lease" },
      { key: "C", text: "Limited Truck License" },
      { key: "D", text: "Less Than Legal" }
    ],
    answer: "A",
    explanation: "LTL stands for Less Than Truckload. LTL carriers consolidate smaller shipments from multiple shippers into a single truckload.",
    wrongExplanations: {
      "B": "'Long-Term Lease' is incorrect.",
      "C": "'Limited Truck License' is incorrect.",
      "D": "'Less Than Legal' is incorrect."
    },
    keyFact: "LTL = Less Than Truckload"
  },
  // ── MCMIS ──
  {
    id: "acronym-058",
    category: "acronyms",
    subcategory: "technology",
    type: "fill",
    difficulty: 3,
    tags: ["acronym", "regulation"],
    question: "What does MCMIS stand for?",
    answer: "Motor Carrier Management Information System",
    acceptedAnswers: ["Motor Carrier Management Information System"],
    explanation: "MCMIS stands for Motor Carrier Management Information System. It is the FMCSA's database containing information on all registered motor carriers, including safety performance data.",
    keyFact: "MCMIS = Motor Carrier Management Information System"
  },
  // ── MCSAC ──
  {
    id: "acronym-059",
    category: "acronyms",
    subcategory: "organizations",
    type: "mc",
    difficulty: 3,
    tags: ["acronym", "regulation"],
    question: "What does MCSAC stand for?",
    choices: [
      { key: "A", text: "Motor Carrier Safety Advisory Committee" },
      { key: "B", text: "Motor Carrier Safety Assessment Center" },
      { key: "C", text: "Motor Commercial Safety Advisory Council" },
      { key: "D", text: "Motor Carrier Standards and Compliance" }
    ],
    answer: "A",
    explanation: "MCSAC stands for Motor Carrier Safety Advisory Committee. It advises the FMCSA Administrator on motor carrier safety issues.",
    wrongExplanations: {
      "B": "'Assessment Center' is incorrect. The correct term is 'Advisory Committee.'",
      "C": "'Commercial' and 'Council' are incorrect.",
      "D": "'Standards and Compliance' is not the correct expansion."
    },
    keyFact: "MCSAC = Motor Carrier Safety Advisory Committee"
  },
  // ── MCSAP ──
  {
    id: "acronym-060",
    category: "acronyms",
    subcategory: "safety-programs",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "regulation"],
    question: "What does MCSAP stand for?",
    answer: "Motor Carrier Safety Assistance Program",
    acceptedAnswers: ["Motor Carrier Safety Assistance Program"],
    explanation: "MCSAP stands for Motor Carrier Safety Assistance Program. It is a federal grant program that provides funding to states to reduce commercial motor vehicle (CMV) crashes.",
    keyFact: "MCSAP = Motor Carrier Safety Assistance Program"
  },
  // ── MSDS ──
  {
    id: "acronym-061",
    category: "acronyms",
    subcategory: "hazmat",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "hazmat"],
    question: "What does MSDS stand for?",
    choices: [
      { key: "A", text: "Material Safety Data Sheet" },
      { key: "B", text: "Motor Safety Documentation Standard" },
      { key: "C", text: "Materials Shipping Data Summary" },
      { key: "D", text: "Manufacturer Safety Description Sheet" }
    ],
    answer: "A",
    explanation: "MSDS stands for Material Safety Data Sheet. It provides detailed information about a chemical substance, including its hazards, handling procedures, and emergency measures.",
    wrongExplanations: {
      "B": "'Motor Safety Documentation Standard' is incorrect.",
      "C": "'Materials Shipping Data Summary' is incorrect.",
      "D": "'Manufacturer Safety Description Sheet' is incorrect."
    },
    keyFact: "MSDS = Material Safety Data Sheet"
  },
  // ── MVR ──
  {
    id: "acronym-062",
    category: "acronyms",
    subcategory: "licensing",
    type: "fill",
    difficulty: 1,
    tags: ["acronym", "regulation"],
    question: "What does MVR stand for?",
    answer: "Motor Vehicle Record",
    acceptedAnswers: ["Motor Vehicle Record"],
    explanation: "MVR stands for Motor Vehicle Record. It is a report of a driver's driving history, including violations, accidents, and license status, used by carriers during the hiring process.",
    keyFact: "MVR = Motor Vehicle Record"
  },
  // ── NAFTA ──
  {
    id: "acronym-063",
    category: "acronyms",
    subcategory: "legislation",
    type: "mc",
    difficulty: 1,
    tags: ["acronym"],
    question: "What does NAFTA stand for?",
    choices: [
      { key: "A", text: "North American Free Trade Agreement" },
      { key: "B", text: "National Association of Freight Transport Agencies" },
      { key: "C", text: "North American Freight Transport Association" },
      { key: "D", text: "National Agreement for Free Trade in America" }
    ],
    answer: "A",
    explanation: "NAFTA stands for North American Free Trade Agreement. It was the trade agreement between the United States, Canada, and Mexico (later replaced by the USMCA).",
    wrongExplanations: {
      "B": "'National Association of Freight Transport Agencies' is incorrect.",
      "C": "'Freight Transport Association' is incorrect.",
      "D": "'National Agreement for Free Trade in America' is incorrect."
    },
    keyFact: "NAFTA = North American Free Trade Agreement"
  },
  // ── NATMI ──
  {
    id: "acronym-064",
    category: "acronyms",
    subcategory: "organizations",
    type: "fill",
    difficulty: 3,
    tags: ["acronym"],
    question: "What does NATMI stand for?",
    answer: "North American Transportation Management Institute",
    acceptedAnswers: ["North American Transportation Management Institute"],
    explanation: "NATMI stands for North American Transportation Management Institute. It provides certification and training programs for transportation safety professionals.",
    keyFact: "NATMI = North American Transportation Management Institute"
  },
  // ── NHTSA ──
  {
    id: "acronym-065",
    category: "acronyms",
    subcategory: "government",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "regulation", "safety"],
    question: "What does NHTSA stand for?",
    choices: [
      { key: "A", text: "National Highway Traffic Safety Administration" },
      { key: "B", text: "National Highway Transport Safety Authority" },
      { key: "C", text: "National Highway and Transit Safety Administration" },
      { key: "D", text: "National Highway Traffic Standards Agency" }
    ],
    answer: "A",
    explanation: "NHTSA stands for National Highway Traffic Safety Administration. It is the agency within the U.S. Department of Transportation (DOT) responsible for reducing deaths, injuries, and economic losses resulting from motor vehicle crashes.",
    wrongExplanations: {
      "B": "'Transport Safety Authority' is incorrect. The correct term is 'Traffic Safety Administration.'",
      "C": "'Transit' is incorrect. The correct word is 'Traffic.'",
      "D": "'Standards Agency' is incorrect. The correct term is 'Safety Administration.'"
    },
    keyFact: "NHTSA = National Highway Traffic Safety Administration"
  },
  // ── NIOSH ──
  {
    id: "acronym-066",
    category: "acronyms",
    subcategory: "government",
    type: "fill",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does NIOSH stand for?",
    answer: "National Institute for Occupational Safety & Health",
    acceptedAnswers: ["National Institute for Occupational Safety & Health", "National Institute for Occupational Safety and Health"],
    explanation: "NIOSH stands for National Institute for Occupational Safety & Health. It conducts research and makes recommendations for the prevention of work-related injury and illness.",
    keyFact: "NIOSH = National Institute for Occupational Safety & Health"
  },
  // ── NMCSP ──
  {
    id: "acronym-067",
    category: "acronyms",
    subcategory: "safety-programs",
    type: "mc",
    difficulty: 3,
    tags: ["acronym", "regulation"],
    question: "What does NMCSP stand for?",
    choices: [
      { key: "A", text: "National Motor Carrier Safety Program" },
      { key: "B", text: "National Motor Commercial Safety Plan" },
      { key: "C", text: "National Motor Carrier Standards Program" },
      { key: "D", text: "New Motor Carrier Safety Protocol" }
    ],
    answer: "A",
    explanation: "NMCSP stands for National Motor Carrier Safety Program. It is the comprehensive program aimed at reducing crashes, injuries, and fatalities involving commercial motor vehicles.",
    wrongExplanations: {
      "B": "'Commercial Safety Plan' is incorrect. It is 'Carrier Safety Program.'",
      "C": "'Standards Program' is incorrect. The correct term is 'Safety Program.'",
      "D": "'New Motor Carrier Safety Protocol' is incorrect."
    },
    keyFact: "NMCSP = National Motor Carrier Safety Program"
  },
  // ── NPRM ──
  {
    id: "acronym-068",
    category: "acronyms",
    subcategory: "regulations",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "regulation"],
    question: "What does NPRM stand for?",
    answer: "Notice of Proposed Rulemaking",
    acceptedAnswers: ["Notice of Proposed Rulemaking"],
    explanation: "NPRM stands for Notice of Proposed Rulemaking. It is a public notice issued in the Federal Register (FR) by a federal agency when it wants to add, remove, or change a rule or regulation, allowing public comment.",
    keyFact: "NPRM = Notice of Proposed Rulemaking"
  },
  // ── NPTC ──
  {
    id: "acronym-069",
    category: "acronyms",
    subcategory: "organizations",
    type: "mc",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does NPTC stand for?",
    choices: [
      { key: "A", text: "National Private Truck Council" },
      { key: "B", text: "National Public Transportation Commission" },
      { key: "C", text: "National Professional Trucking Council" },
      { key: "D", text: "National Private Transport Committee" }
    ],
    answer: "A",
    explanation: "NPTC stands for National Private Truck Council. It is the only national trade association exclusively representing the interests of private fleet operators.",
    wrongExplanations: {
      "B": "'Public Transportation Commission' is incorrect.",
      "C": "'Professional Trucking Council' is incorrect. It is 'Private Truck Council.'",
      "D": "'Private Transport Committee' is incorrect."
    },
    keyFact: "NPTC = National Private Truck Council"
  },
  // ── NRC ──
  {
    id: "acronym-070",
    category: "acronyms",
    subcategory: "hazmat",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "hazmat"],
    question: "What does NRC stand for in the context of hazardous materials?",
    answer: "National Response Center",
    acceptedAnswers: ["National Response Center"],
    explanation: "NRC stands for National Response Center. It is the sole federal point of contact for reporting oil and chemical spills. Drivers transporting hazardous materials (HM) must know to call the NRC in case of a spill.",
    keyFact: "NRC = National Response Center"
  },
  // ── NSA ──
  {
    id: "acronym-071",
    category: "acronyms",
    subcategory: "government",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "security"],
    question: "What does NSA stand for?",
    choices: [
      { key: "A", text: "National Security Agency" },
      { key: "B", text: "National Safety Association" },
      { key: "C", text: "National Standards Authority" },
      { key: "D", text: "National Surveillance Agency" }
    ],
    answer: "A",
    explanation: "NSA stands for National Security Agency. It is a national-level intelligence agency of the United States Department of Defense.",
    wrongExplanations: {
      "B": "'National Safety Association' is incorrect.",
      "C": "'National Standards Authority' is incorrect.",
      "D": "'National Surveillance Agency' is incorrect."
    },
    keyFact: "NSA = National Security Agency"
  },
  // ── NSC ──
  {
    id: "acronym-072",
    category: "acronyms",
    subcategory: "organizations",
    type: "fill",
    difficulty: 1,
    tags: ["acronym", "safety"],
    question: "What does NSC stand for?",
    answer: "National Safety Council",
    acceptedAnswers: ["National Safety Council"],
    explanation: "NSC stands for National Safety Council. It is a nonprofit safety advocacy organization that focuses on eliminating preventable deaths in the workplace, in homes and communities, and on the road.",
    keyFact: "NSC = National Safety Council"
  },
  // ── NTSB ──
  {
    id: "acronym-073",
    category: "acronyms",
    subcategory: "government",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "safety"],
    question: "What does NTSB stand for?",
    choices: [
      { key: "A", text: "National Transportation Safety Board" },
      { key: "B", text: "National Trucking Safety Bureau" },
      { key: "C", text: "National Traffic Safety Board" },
      { key: "D", text: "National Transport Standards Board" }
    ],
    answer: "A",
    explanation: "NTSB stands for National Transportation Safety Board. It is an independent federal agency charged with determining the probable cause of transportation accidents and promoting transportation safety.",
    wrongExplanations: {
      "B": "'Trucking Safety Bureau' is incorrect. NTSB covers all modes of 'Transportation.'",
      "C": "'Traffic' is incorrect. The correct word is 'Transportation.'",
      "D": "'Transport Standards' is incorrect. The correct term is 'Transportation Safety.'"
    },
    keyFact: "NTSB = National Transportation Safety Board"
  },
  // ── NTTC ──
  {
    id: "acronym-074",
    category: "acronyms",
    subcategory: "organizations",
    type: "fill",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does NTTC stand for?",
    answer: "National Tank Truck Carriers Association",
    acceptedAnswers: ["National Tank Truck Carriers Association", "National Tank Truck Carriers"],
    explanation: "NTTC stands for National Tank Truck Carriers Association. It is the trade association representing the tank truck industry.",
    keyFact: "NTTC = National Tank Truck Carriers Association"
  },
  // ── OBSM ──
  {
    id: "acronym-075",
    category: "acronyms",
    subcategory: "technology",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "safety"],
    question: "What does OBSM stand for?",
    choices: [
      { key: "A", text: "On-Board Safety Monitoring" },
      { key: "B", text: "On-Board System Management" },
      { key: "C", text: "Operational Braking Safety Module" },
      { key: "D", text: "On-Board Speed Monitor" }
    ],
    answer: "A",
    explanation: "OBSM stands for On-Board Safety Monitoring. These are electronic systems installed in trucks that monitor driver behavior and vehicle performance in real time.",
    wrongExplanations: {
      "B": "'System Management' is incorrect. The correct term is 'Safety Monitoring.'",
      "C": "'Operational Braking Safety Module' is incorrect.",
      "D": "'On-Board Speed Monitor' is incorrect."
    },
    keyFact: "OBSM = On-Board Safety Monitoring"
  },
  // ── OMB ──
  {
    id: "acronym-076",
    category: "acronyms",
    subcategory: "government",
    type: "fill",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does OMB stand for?",
    answer: "Office of Management and Budget",
    acceptedAnswers: ["Office of Management and Budget"],
    explanation: "OMB stands for Office of Management and Budget. It serves the President of the United States by overseeing the implementation of his or her vision across the Executive Branch.",
    keyFact: "OMB = Office of Management and Budget"
  },
  // ── OOIDA ──
  {
    id: "acronym-077",
    category: "acronyms",
    subcategory: "organizations",
    type: "mc",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does OOIDA stand for?",
    choices: [
      { key: "A", text: "Owner-Operator Independent Drivers Association" },
      { key: "B", text: "Over-the-Road Independent Drivers Association" },
      { key: "C", text: "Owner-Operator Interstate Drivers Alliance" },
      { key: "D", text: "Organization of Independent Driver Associations" }
    ],
    answer: "A",
    explanation: "OOIDA stands for Owner-Operator Independent Drivers Association. It is the largest trade association representing the interests of independent owner-operators and professional drivers.",
    wrongExplanations: {
      "B": "'Over-the-Road' is incorrect. The correct term is 'Owner-Operator.'",
      "C": "'Interstate Drivers Alliance' is incorrect.",
      "D": "'Organization of Independent Driver Associations' is incorrect."
    },
    keyFact: "OOIDA = Owner-Operator Independent Drivers Association"
  },
  // ── OOS ──
  {
    id: "acronym-078",
    category: "acronyms",
    subcategory: "regulations",
    type: "fill",
    difficulty: 1,
    tags: ["acronym", "regulation"],
    question: "What does OOS stand for?",
    answer: "Out of Service",
    acceptedAnswers: ["Out of Service"],
    explanation: "OOS stands for Out of Service. A vehicle or driver placed OOS is prohibited from operating until the identified safety violation is corrected.",
    keyFact: "OOS = Out of Service"
  },
  // ── ORM-D ──
  {
    id: "acronym-079",
    category: "acronyms",
    subcategory: "hazmat",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "hazmat"],
    question: "What does ORM-D stand for?",
    choices: [
      { key: "A", text: "Other Regulated Materials for Domestic Transport" },
      { key: "B", text: "Other Required Materials for Delivery" },
      { key: "C", text: "Over-Regulated Materials for Distribution" },
      { key: "D", text: "Official Regulated Materials for Domestic Transport" }
    ],
    answer: "A",
    explanation: "ORM-D stands for Other Regulated Materials for Domestic Transport. It refers to materials such as consumer commodities that present a limited hazard during transportation.",
    wrongExplanations: {
      "B": "'Required Materials for Delivery' is incorrect.",
      "C": "'Over-Regulated Materials for Distribution' is incorrect.",
      "D": "'Official' is incorrect. The correct word is 'Other.'"
    },
    keyFact: "ORM-D = Other Regulated Materials for Domestic Transport"
  },
  // ── OSA ──
  {
    id: "acronym-080",
    category: "acronyms",
    subcategory: "health",
    type: "fill",
    difficulty: 1,
    tags: ["acronym"],
    question: "What does OSA stand for in driver health?",
    answer: "Obstructive Sleep Apnea",
    acceptedAnswers: ["Obstructive Sleep Apnea"],
    explanation: "OSA stands for Obstructive Sleep Apnea. It is a common sleep disorder among truck drivers that causes breathing to repeatedly stop and start during sleep, leading to daytime fatigue and increased crash risk.",
    keyFact: "OSA = Obstructive Sleep Apnea"
  },
  // ── OSHA ──
  {
    id: "acronym-081",
    category: "acronyms",
    subcategory: "government",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "regulation", "safety"],
    question: "What does OSHA stand for?",
    choices: [
      { key: "A", text: "Occupational Safety and Health Administration" },
      { key: "B", text: "Occupational Standards for Highway Administration" },
      { key: "C", text: "Office of Safety and Health Administration" },
      { key: "D", text: "Occupational Safety and Hazard Assessment" }
    ],
    answer: "A",
    explanation: "OSHA stands for Occupational Safety and Health Administration. It is the federal agency that ensures safe and healthful working conditions by setting and enforcing standards.",
    wrongExplanations: {
      "B": "'Standards for Highway Administration' is incorrect.",
      "C": "'Office of Safety' is incorrect. It is 'Occupational Safety.'",
      "D": "'Hazard Assessment' is incorrect. The correct term is 'Health Administration.'"
    },
    keyFact: "OSHA = Occupational Safety and Health Administration"
  },
  // ── OTR ──
  {
    id: "acronym-082",
    category: "acronyms",
    subcategory: "operations",
    type: "fill",
    difficulty: 1,
    tags: ["acronym"],
    question: "What does OTR stand for?",
    answer: "Over-the-Road",
    acceptedAnswers: ["Over-the-Road", "Over the Road"],
    explanation: "OTR stands for Over-the-Road. OTR trucking involves long-haul driving, typically covering large distances across multiple states.",
    keyFact: "OTR = Over-the-Road"
  },
  // ── P&D ──
  {
    id: "acronym-083",
    category: "acronyms",
    subcategory: "operations",
    type: "mc",
    difficulty: 1,
    tags: ["acronym"],
    question: "What does P&D stand for?",
    choices: [
      { key: "A", text: "Pickup & Delivery" },
      { key: "B", text: "Planning & Development" },
      { key: "C", text: "Processing & Distribution" },
      { key: "D", text: "Purchase & Dispatch" }
    ],
    answer: "A",
    explanation: "P&D stands for Pickup & Delivery. P&D drivers typically make local or regional runs, picking up and delivering freight within a defined area.",
    wrongExplanations: {
      "B": "'Planning & Development' is not what P&D stands for in trucking.",
      "C": "'Processing & Distribution' is incorrect.",
      "D": "'Purchase & Dispatch' is incorrect."
    },
    keyFact: "P&D = Pickup & Delivery"
  },
  // ── PAR ──
  {
    id: "acronym-084",
    category: "acronyms",
    subcategory: "documentation",
    type: "fill",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does PAR stand for?",
    answer: "Police Accident Report",
    acceptedAnswers: ["Police Accident Report"],
    explanation: "PAR stands for Police Accident Report. It is the official report filed by law enforcement at the scene of a traffic accident.",
    keyFact: "PAR = Police Accident Report"
  },
  // ── PHMSA ──
  {
    id: "acronym-085",
    category: "acronyms",
    subcategory: "government",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "hazmat", "regulation"],
    question: "What does PHMSA stand for?",
    choices: [
      { key: "A", text: "Pipeline and Hazardous Materials Safety Administration" },
      { key: "B", text: "Pipeline and Highway Materials Safety Agency" },
      { key: "C", text: "Public Hazardous Materials Safety Administration" },
      { key: "D", text: "Pipeline and Hazardous Materials Standards Authority" }
    ],
    answer: "A",
    explanation: "PHMSA stands for Pipeline and Hazardous Materials Safety Administration. It is the DOT agency responsible for regulating and ensuring the safe transportation of hazardous materials by all modes.",
    wrongExplanations: {
      "B": "'Highway Materials Safety Agency' is incorrect.",
      "C": "'Public' is incorrect. The correct word is 'Pipeline.'",
      "D": "'Standards Authority' is incorrect. The correct term is 'Safety Administration.'"
    },
    keyFact: "PHMSA = Pipeline and Hazardous Materials Safety Administration"
  },
  // ── RFID ──
  {
    id: "acronym-086",
    category: "acronyms",
    subcategory: "technology",
    type: "fill",
    difficulty: 1,
    tags: ["acronym"],
    question: "What does RFID stand for?",
    answer: "Radio Frequency Identification",
    acceptedAnswers: ["Radio Frequency Identification"],
    explanation: "RFID stands for Radio Frequency Identification. It uses electromagnetic fields to automatically identify and track tags attached to objects, used in trucking for cargo tracking and toll collection.",
    keyFact: "RFID = Radio Frequency Identification"
  },
  // ── ROI ──
  {
    id: "acronym-087",
    category: "acronyms",
    subcategory: "management",
    type: "mc",
    difficulty: 1,
    tags: ["acronym"],
    question: "What does ROI stand for?",
    choices: [
      { key: "A", text: "Return on Investment" },
      { key: "B", text: "Rate of Inspection" },
      { key: "C", text: "Record of Incidents" },
      { key: "D", text: "Review of Operations and Infrastructure" }
    ],
    answer: "A",
    explanation: "ROI stands for Return on Investment. In trucking, ROI is used to evaluate the financial benefit of safety programs, technology investments, and fleet management decisions.",
    wrongExplanations: {
      "B": "'Rate of Inspection' is incorrect.",
      "C": "'Record of Incidents' is incorrect.",
      "D": "'Review of Operations and Infrastructure' is incorrect."
    },
    keyFact: "ROI = Return on Investment"
  },
  // ── RQ ──
  {
    id: "acronym-088",
    category: "acronyms",
    subcategory: "hazmat",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "hazmat", "regulation"],
    question: "What does RQ stand for in hazmat transport?",
    answer: "Reportable Quantity",
    acceptedAnswers: ["Reportable Quantity"],
    explanation: "RQ stands for Reportable Quantity. It is the quantity of a hazardous substance that, when released into the environment, must be reported to the National Response Center (NRC).",
    keyFact: "RQ = Reportable Quantity"
  },
  // ── RSA ──
  {
    id: "acronym-089",
    category: "acronyms",
    subcategory: "vehicle-systems",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "safety"],
    question: "What does RSA stand for?",
    choices: [
      { key: "A", text: "Roll Stability Advisor" },
      { key: "B", text: "Road Safety Assessment" },
      { key: "C", text: "Rollover Safety Alert" },
      { key: "D", text: "Remote Safety Activation" }
    ],
    answer: "A",
    explanation: "RSA stands for Roll Stability Advisor. It is a system that warns the driver of potential rollover conditions by monitoring lateral acceleration.",
    wrongExplanations: {
      "B": "'Road Safety Assessment' is incorrect.",
      "C": "'Rollover Safety Alert' is not the correct expansion.",
      "D": "'Remote Safety Activation' is incorrect."
    },
    keyFact: "RSA = Roll Stability Advisor"
  },
  // ── RSC ──
  {
    id: "acronym-090",
    category: "acronyms",
    subcategory: "vehicle-systems",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "safety"],
    question: "What does RSC stand for?",
    answer: "Roll Stability Control",
    acceptedAnswers: ["Roll Stability Control"],
    explanation: "RSC stands for Roll Stability Control. Unlike the RSA (Roll Stability Advisor) which only warns, RSC actively intervenes by applying brakes or reducing engine power to prevent a rollover.",
    keyFact: "RSC = Roll Stability Control"
  },
  // ── SAFER ──
  {
    id: "acronym-091",
    category: "acronyms",
    subcategory: "technology",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "regulation"],
    question: "What does SAFER stand for?",
    choices: [
      { key: "A", text: "Safety and Fitness Electronic Records" },
      { key: "B", text: "Safety Assurance for Fleet Equipment Records" },
      { key: "C", text: "Safety Assessment and Fitness Evaluation Report" },
      { key: "D", text: "Standard Automated Fitness Electronic Records" }
    ],
    answer: "A",
    explanation: "SAFER stands for Safety and Fitness Electronic Records. It is the FMCSA's online system that provides company safety data and inspection results to the public.",
    wrongExplanations: {
      "B": "'Safety Assurance for Fleet Equipment Records' is not correct.",
      "C": "'Assessment and Fitness Evaluation Report' is incorrect.",
      "D": "'Standard Automated' is incorrect. The correct term is 'Safety and.'"
    },
    keyFact: "SAFER = Safety and Fitness Electronic Records"
  },
  // ── SIDA ──
  {
    id: "acronym-092",
    category: "acronyms",
    subcategory: "security",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "security"],
    question: "What does SIDA stand for?",
    answer: "Security Identification Display Area",
    acceptedAnswers: ["Security Identification Display Area"],
    explanation: "SIDA stands for Security Identification Display Area. It refers to restricted areas at airports where individuals must display proper identification badges.",
    keyFact: "SIDA = Security Identification Display Area"
  },
  // ── SMC ──
  {
    id: "acronym-093",
    category: "acronyms",
    subcategory: "organizations",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "safety"],
    question: "What does SMC stand for?",
    choices: [
      { key: "A", text: "Safety Management Council" },
      { key: "B", text: "Safety Monitoring Committee" },
      { key: "C", text: "Standard Motor Carrier" },
      { key: "D", text: "Safety and Maintenance Council" }
    ],
    answer: "A",
    explanation: "SMC stands for Safety Management Council. It is a council within the American Trucking Associations (ATA) that focuses on safety best practices.",
    wrongExplanations: {
      "B": "'Safety Monitoring Committee' is incorrect.",
      "C": "'Standard Motor Carrier' is incorrect.",
      "D": "'Safety and Maintenance Council' is incorrect."
    },
    keyFact: "SMC = Safety Management Council"
  },
  // ── ST ──
  {
    id: "acronym-094",
    category: "acronyms",
    subcategory: "vehicle-types",
    type: "fill",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does ST stand for in trucking?",
    answer: "Single-Unit Truck",
    acceptedAnswers: ["Single-Unit Truck", "Single Unit Truck"],
    explanation: "ST stands for Single-Unit Truck. This is a truck where the engine, cab, and cargo area are all on a single frame, as opposed to a tractor-trailer combination.",
    keyFact: "ST = Single-Unit Truck"
  },
  // ── STA ──
  {
    id: "acronym-095",
    category: "acronyms",
    subcategory: "security",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "security"],
    question: "What does STA stand for in the context of CDL endorsements?",
    choices: [
      { key: "A", text: "Security Threat Assessment" },
      { key: "B", text: "Safety Training Authorization" },
      { key: "C", text: "State Transportation Authority" },
      { key: "D", text: "Standard Testing Assessment" }
    ],
    answer: "A",
    explanation: "STA stands for Security Threat Assessment. It is a background check required by the Transportation Security Administration (TSA) for drivers seeking a Hazardous Materials Endorsement (HME) on their CDL.",
    wrongExplanations: {
      "B": "'Safety Training Authorization' is incorrect.",
      "C": "'State Transportation Authority' is incorrect.",
      "D": "'Standard Testing Assessment' is incorrect."
    },
    keyFact: "STA = Security Threat Assessment"
  },
  // ── TCA ──
  {
    id: "acronym-096",
    category: "acronyms",
    subcategory: "organizations",
    type: "fill",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does TCA stand for?",
    answer: "Truckload Carriers Association",
    acceptedAnswers: ["Truckload Carriers Association"],
    explanation: "TCA stands for Truckload Carriers Association. It is the trade association representing the truckload (TL) segment of the trucking industry.",
    keyFact: "TCA = Truckload Carriers Association"
  },
  // ── TL ──
  {
    id: "acronym-097",
    category: "acronyms",
    subcategory: "operations",
    type: "mc",
    difficulty: 1,
    tags: ["acronym"],
    question: "What does TL stand for?",
    choices: [
      { key: "A", text: "Truckload" },
      { key: "B", text: "Transport License" },
      { key: "C", text: "Transit Line" },
      { key: "D", text: "Truck Lease" }
    ],
    answer: "A",
    explanation: "TL stands for Truckload. TL shipments use an entire truck trailer for one shipper's freight, as opposed to LTL (Less Than Truckload) which consolidates multiple shippers' freight.",
    wrongExplanations: {
      "B": "'Transport License' is incorrect.",
      "C": "'Transit Line' is incorrect.",
      "D": "'Truck Lease' is incorrect."
    },
    keyFact: "TL = Truckload"
  },
  // ── TRB ──
  {
    id: "acronym-098",
    category: "acronyms",
    subcategory: "organizations",
    type: "fill",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does TRB stand for?",
    answer: "Transportation Research Board",
    acceptedAnswers: ["Transportation Research Board"],
    explanation: "TRB stands for Transportation Research Board. It is a division of the National Academies that provides research and advice on transportation issues.",
    keyFact: "TRB = Transportation Research Board"
  },
  // ── TSA ──
  {
    id: "acronym-099",
    category: "acronyms",
    subcategory: "government",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "security"],
    question: "What does TSA stand for?",
    choices: [
      { key: "A", text: "Transportation Security Administration" },
      { key: "B", text: "Transportation Safety Authority" },
      { key: "C", text: "Transport Standards Agency" },
      { key: "D", text: "Trucking Security Administration" }
    ],
    answer: "A",
    explanation: "TSA stands for Transportation Security Administration. It is the agency within the Department of Homeland Security (DHS) responsible for security of the traveling public, including the TWIC (Transportation Worker Identification Credential) program.",
    wrongExplanations: {
      "B": "'Safety Authority' is incorrect. TSA is about 'Security Administration.'",
      "C": "'Transport Standards Agency' is incorrect.",
      "D": "'Trucking' is incorrect. TSA covers all 'Transportation.'"
    },
    keyFact: "TSA = Transportation Security Administration"
  },
  // ── TSC ──
  {
    id: "acronym-100",
    category: "acronyms",
    subcategory: "organizations",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "security"],
    question: "What does TSC stand for?",
    answer: "Transportation Security Council",
    acceptedAnswers: ["Transportation Security Council"],
    explanation: "TSC stands for Transportation Security Council. It works to improve security awareness and practices within the transportation industry.",
    keyFact: "TSC = Transportation Security Council"
  },
  // ── TT ──
  {
    id: "acronym-101",
    category: "acronyms",
    subcategory: "organizations",
    type: "mc",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does TT stand for in the trucking industry?",
    choices: [
      { key: "A", text: "Transportation Topics" },
      { key: "B", text: "Truck Terminal" },
      { key: "C", text: "Transit Times" },
      { key: "D", text: "Trailer Transport" }
    ],
    answer: "A",
    explanation: "TT stands for Transportation Topics. It is a major news publication covering the freight transportation industry.",
    wrongExplanations: {
      "B": "'Truck Terminal' is incorrect.",
      "C": "'Transit Times' is incorrect.",
      "D": "'Trailer Transport' is incorrect."
    },
    keyFact: "TT = Transportation Topics"
  },
  // ── TWIC ──
  {
    id: "acronym-102",
    category: "acronyms",
    subcategory: "security",
    type: "fill",
    difficulty: 1,
    tags: ["acronym", "security", "regulation"],
    question: "What does TWIC stand for?",
    answer: "Transportation Worker Identification Credential",
    acceptedAnswers: ["Transportation Worker Identification Credential"],
    explanation: "TWIC stands for Transportation Worker Identification Credential. It is a biometric credential required for unescorted access to secure areas of port facilities and vessels regulated by the Maritime Transportation Security Act.",
    keyFact: "TWIC = Transportation Worker Identification Credential"
  },
  // ── UMTRI ──
  {
    id: "acronym-103",
    category: "acronyms",
    subcategory: "organizations",
    type: "mc",
    difficulty: 3,
    tags: ["acronym"],
    question: "What does UMTRI stand for?",
    choices: [
      { key: "A", text: "University of Michigan Transportation Research Institute" },
      { key: "B", text: "United Motor Transport Research Institute" },
      { key: "C", text: "University of Missouri Transportation Research Initiative" },
      { key: "D", text: "Universal Motor Transportation Research Institute" }
    ],
    answer: "A",
    explanation: "UMTRI stands for University of Michigan Transportation Research Institute. It is one of the largest and most productive university-based transportation research centers.",
    wrongExplanations: {
      "B": "'United Motor Transport' is incorrect.",
      "C": "'Missouri' and 'Initiative' are incorrect. It is 'Michigan' and 'Institute.'",
      "D": "'Universal Motor' is incorrect. It is 'University of Michigan.'"
    },
    keyFact: "UMTRI = University of Michigan Transportation Research Institute"
  },
  // ── USMCA ──
  {
    id: "acronym-104",
    category: "acronyms",
    subcategory: "legislation",
    type: "fill",
    difficulty: 2,
    tags: ["acronym"],
    question: "What does USMCA stand for?",
    answer: "United States of America the United Mexican States and Canada Agreement",
    acceptedAnswers: [
      "United States of America the United Mexican States and Canada Agreement",
      "United States Mexico Canada Agreement",
      "United States-Mexico-Canada Agreement"
    ],
    explanation: "USMCA stands for the agreement between the United States of America, the United Mexican States, and Canada. It replaced NAFTA (North American Free Trade Agreement) as the trade agreement governing commerce between these three nations.",
    keyFact: "USMCA = United States of America, the United Mexican States, and Canada Agreement"
  },
  // ── VMT ──
  {
    id: "acronym-105",
    category: "acronyms",
    subcategory: "operations",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "numbers"],
    question: "What does VMT stand for?",
    choices: [
      { key: "A", text: "Vehicle Miles Traveled" },
      { key: "B", text: "Vehicle Maintenance Tracking" },
      { key: "C", text: "Verified Mileage Total" },
      { key: "D", text: "Vehicle Management Technology" }
    ],
    answer: "A",
    explanation: "VMT stands for Vehicle Miles Traveled. It is a standard measurement of the amount of travel for all vehicles in a geographic region over a given time period.",
    wrongExplanations: {
      "B": "'Vehicle Maintenance Tracking' is incorrect.",
      "C": "'Verified Mileage Total' is incorrect.",
      "D": "'Vehicle Management Technology' is incorrect."
    },
    keyFact: "VMT = Vehicle Miles Traveled"
  },
  // ── VTTI ──
  {
    id: "acronym-106",
    category: "acronyms",
    subcategory: "organizations",
    type: "fill",
    difficulty: 3,
    tags: ["acronym"],
    question: "What does VTTI stand for?",
    answer: "Virginia Tech Transportation Institute",
    acceptedAnswers: ["Virginia Tech Transportation Institute"],
    explanation: "VTTI stands for Virginia Tech Transportation Institute. It is one of the largest and most comprehensive transportation research institutes in the United States.",
    keyFact: "VTTI = Virginia Tech Transportation Institute"
  },
  // ── WHTI ──
  {
    id: "acronym-107",
    category: "acronyms",
    subcategory: "legislation",
    type: "mc",
    difficulty: 3,
    tags: ["acronym", "security"],
    question: "What does WHTI stand for?",
    choices: [
      { key: "A", text: "Western Hemisphere Travel Initiative" },
      { key: "B", text: "Western Highway Transportation Initiative" },
      { key: "C", text: "Workplace Health and Transport Initiative" },
      { key: "D", text: "Western Hemisphere Transit Integration" }
    ],
    answer: "A",
    explanation: "WHTI stands for Western Hemisphere Travel Initiative. It requires all travelers, including U.S. and Canadian citizens, to present a passport or other approved document when entering the United States.",
    wrongExplanations: {
      "B": "'Highway Transportation Initiative' is incorrect.",
      "C": "'Workplace Health and Transport Initiative' is incorrect.",
      "D": "'Transit Integration' is incorrect. The correct term is 'Travel Initiative.'"
    },
    keyFact: "WHTI = Western Hemisphere Travel Initiative"
  },
  // ── BONUS: Which acronym questions (reverse) ──
  {
    id: "acronym-108",
    category: "acronyms",
    subcategory: "government",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "regulation"],
    question: "Which agency regulates the trucking industry and is abbreviated FMCSA?",
    choices: [
      { key: "A", text: "Federal Motor Carrier Safety Administration" },
      { key: "B", text: "Federal Motor Commercial Safety Association" },
      { key: "C", text: "Federal Motor Carrier Standards Administration" },
      { key: "D", text: "Federal Maritime Carrier Safety Administration" }
    ],
    answer: "A",
    explanation: "FMCSA stands for Federal Motor Carrier Safety Administration. It operates within the U.S. Department of Transportation (DOT) and is responsible for regulating and providing safety oversight of commercial motor vehicles (CMVs).",
    wrongExplanations: {
      "B": "'Commercial Safety Association' is incorrect.",
      "C": "'Standards' is incorrect. The correct word is 'Safety.'",
      "D": "'Maritime' is incorrect. The correct word is 'Motor.'"
    },
    keyFact: "FMCSA = Federal Motor Carrier Safety Administration"
  },
  {
    id: "acronym-109",
    category: "acronyms",
    subcategory: "regulations",
    type: "fill",
    difficulty: 1,
    tags: ["acronym", "regulation"],
    question: "The regulations governing how many hours a CMV driver may drive are abbreviated as what three-letter acronym?",
    answer: "HOS",
    acceptedAnswers: ["HOS"],
    explanation: "HOS stands for Hours of Service. These Federal Motor Carrier Safety Administration (FMCSA) regulations limit the number of daily and weekly hours a commercial motor vehicle (CMV) driver can drive and work.",
    keyFact: "HOS = Hours of Service"
  },
  {
    id: "acronym-110",
    category: "acronyms",
    subcategory: "licensing",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "regulation"],
    question: "A Commercial Drivers License is commonly abbreviated as:",
    choices: [
      { key: "A", text: "CLD" },
      { key: "B", text: "CDL" },
      { key: "C", text: "DCL" },
      { key: "D", text: "LCD" }
    ],
    answer: "B",
    explanation: "CDL stands for Commercial Drivers License. It is the license required to operate a commercial motor vehicle (CMV) in the United States.",
    wrongExplanations: {
      "A": "CLD is not a standard trucking industry acronym.",
      "C": "DCL is not a standard trucking industry acronym.",
      "D": "LCD stands for Liquid Crystal Display, not a trucking term."
    },
    keyFact: "CDL = Commercial Drivers License"
  },
  {
    id: "acronym-111",
    category: "acronyms",
    subcategory: "technology",
    type: "fill",
    difficulty: 1,
    tags: ["acronym", "regulation"],
    question: "What is the three-letter acronym for the device that replaced paper logbooks for recording driving time?",
    answer: "ELD",
    acceptedAnswers: ["ELD"],
    explanation: "ELD stands for Electronic Logging Device. The FMCSA's ELD mandate requires most commercial motor vehicle (CMV) drivers to use ELDs instead of paper logbooks to record their Hours of Service (HOS).",
    keyFact: "ELD = Electronic Logging Device"
  },
  {
    id: "acronym-112",
    category: "acronyms",
    subcategory: "vehicle-systems",
    type: "mc",
    difficulty: 1,
    tags: ["acronym", "safety"],
    question: "Which safety system prevents wheel lock-up during braking and is abbreviated ABS?",
    choices: [
      { key: "A", text: "Automatic Brake Stabilizer" },
      { key: "B", text: "Anti-lock Braking System" },
      { key: "C", text: "Advanced Braking System" },
      { key: "D", text: "Assisted Braking System" }
    ],
    answer: "B",
    explanation: "ABS stands for Anti-lock Braking System. It prevents wheels from locking up during hard braking, allowing the driver to maintain steering control.",
    wrongExplanations: {
      "A": "'Automatic Brake Stabilizer' is incorrect.",
      "C": "'Advanced Braking System' is incorrect.",
      "D": "'Assisted Braking System' is incorrect."
    },
    keyFact: "ABS = Anti-lock Braking System"
  },
  {
    id: "acronym-113",
    category: "acronyms",
    subcategory: "vehicle-specs",
    type: "fill",
    difficulty: 1,
    tags: ["acronym", "numbers"],
    question: "What acronym represents the maximum operating weight of a single vehicle as specified by the manufacturer?",
    answer: "GVWR",
    acceptedAnswers: ["GVWR"],
    explanation: "GVWR stands for Gross Vehicle Weight Rating. It is the maximum total weight a vehicle is designed to carry, including the vehicle itself, passengers, cargo, and fuel.",
    keyFact: "GVWR = Gross Vehicle Weight Rating"
  },
  {
    id: "acronym-114",
    category: "acronyms",
    subcategory: "safety-programs",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "regulation"],
    question: "The FMCSA's safety compliance and enforcement program is abbreviated as:",
    choices: [
      { key: "A", text: "CSR" },
      { key: "B", text: "CSA" },
      { key: "C", text: "CSS" },
      { key: "D", text: "CAS" }
    ],
    answer: "B",
    explanation: "CSA stands for Compliance, Safety, Accountability. It is the Federal Motor Carrier Safety Administration's (FMCSA) program for improving large truck and bus safety.",
    wrongExplanations: {
      "A": "CSR stands for Corporate Safety Review, not the FMCSA's enforcement program.",
      "C": "CSS is not a standard trucking industry acronym for this program.",
      "D": "CAS is not a standard trucking industry acronym."
    },
    keyFact: "CSA = Compliance, Safety, Accountability"
  },
  {
    id: "acronym-115",
    category: "acronyms",
    subcategory: "security",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "security"],
    question: "What acronym is the biometric credential required for unescorted access to secure port areas?",
    answer: "TWIC",
    acceptedAnswers: ["TWIC"],
    explanation: "TWIC stands for Transportation Worker Identification Credential. It is issued by the Transportation Security Administration (TSA) and uses biometric technology (fingerprints) for identity verification.",
    keyFact: "TWIC = Transportation Worker Identification Credential"
  },
  {
    id: "acronym-116",
    category: "acronyms",
    subcategory: "hazmat",
    type: "mc",
    difficulty: 2,
    tags: ["acronym", "hazmat"],
    question: "Which document provides detailed information about chemical hazards and handling procedures, abbreviated MSDS?",
    choices: [
      { key: "A", text: "Motor Safety Documentation Standard" },
      { key: "B", text: "Material Safety Data Sheet" },
      { key: "C", text: "Materials Shipping Data Summary" },
      { key: "D", text: "Master Safety Data System" }
    ],
    answer: "B",
    explanation: "MSDS stands for Material Safety Data Sheet. It provides comprehensive information about a chemical substance including hazards, safe handling, storage, and emergency procedures.",
    wrongExplanations: {
      "A": "'Motor Safety Documentation Standard' is not correct.",
      "C": "'Materials Shipping Data Summary' is incorrect.",
      "D": "'Master Safety Data System' is incorrect."
    },
    keyFact: "MSDS = Material Safety Data Sheet"
  },
  {
    id: "acronym-117",
    category: "acronyms",
    subcategory: "operations",
    type: "fill",
    difficulty: 1,
    tags: ["acronym"],
    question: "What three-letter acronym refers to shipments that use less than a full trailer and consolidate multiple shippers' freight?",
    answer: "LTL",
    acceptedAnswers: ["LTL"],
    explanation: "LTL stands for Less Than Truckload. LTL carriers consolidate partial shipments from multiple shippers into a single trailer, as opposed to TL (Truckload) where one shipper fills the entire trailer.",
    keyFact: "LTL = Less Than Truckload"
  },
  {
    id: "acronym-118",
    category: "acronyms",
    subcategory: "government",
    type: "mc",
    difficulty: 1,
    tags: ["acronym"],
    question: "Which independent federal agency investigates transportation accidents and is abbreviated NTSB?",
    choices: [
      { key: "A", text: "National Traffic Safety Bureau" },
      { key: "B", text: "National Transportation Standards Board" },
      { key: "C", text: "National Transportation Safety Board" },
      { key: "D", text: "National Trucking Safety Bureau" }
    ],
    answer: "C",
    explanation: "NTSB stands for National Transportation Safety Board. It is an independent federal agency that investigates civil transportation accidents in all modes and issues safety recommendations.",
    wrongExplanations: {
      "A": "'Traffic Safety Bureau' is incorrect.",
      "B": "'Standards Board' is incorrect. It is 'Safety Board.'",
      "D": "'Trucking Safety Bureau' is incorrect. NTSB covers all transportation modes."
    },
    keyFact: "NTSB = National Transportation Safety Board"
  },
  {
    id: "acronym-119",
    category: "acronyms",
    subcategory: "regulations",
    type: "fill",
    difficulty: 2,
    tags: ["acronym", "regulation"],
    question: "What acronym refers to a driver or vehicle that is prohibited from operating until a safety violation is corrected?",
    answer: "OOS",
    acceptedAnswers: ["OOS"],
    explanation: "OOS stands for Out of Service. When a driver or vehicle is placed OOS during a roadside inspection, they may not operate until the identified safety deficiency is corrected.",
    keyFact: "OOS = Out of Service"
  },
  {
    id: "acronym-120",
    category: "acronyms",
    subcategory: "health",
    type: "mc",
    difficulty: 1,
    tags: ["acronym"],
    question: "The sleep disorder common among truck drivers that is abbreviated OSA is:",
    choices: [
      { key: "A", text: "Obstructive Sleep Apnea" },
      { key: "B", text: "Occupational Sleep Assessment" },
      { key: "C", text: "Overnight Sleep Analysis" },
      { key: "D", text: "Obstructive Snoring Ailment" }
    ],
    answer: "A",
    explanation: "OSA stands for Obstructive Sleep Apnea. It is a condition where the airway becomes blocked during sleep, causing breathing to repeatedly stop and start, leading to poor sleep quality and excessive daytime sleepiness.",
    wrongExplanations: {
      "B": "'Occupational Sleep Assessment' is incorrect.",
      "C": "'Overnight Sleep Analysis' is incorrect.",
      "D": "'Obstructive Snoring Ailment' is incorrect."
    },
    keyFact: "OSA = Obstructive Sleep Apnea"
  }
];
