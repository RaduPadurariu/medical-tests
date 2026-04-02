export const labTestsOptions = {
  en: {
    searchPlaceholder: "Search by name...",
    searchLabel: "Search by name...",
    sampleTypeLabel: "Sample type",
    clinicalAreaLabel: "Clinical area",
    categories: {
      all: "All samples types",
      blood: "Blood tests",
      urine: "Urine tests",
      stool: "Stool tests",
    },
    subcategories: {
      all: "All topics",
      general: "General & inflammation",
      heart: "Heart & lipids",
      diabetes: "Diabetes",
      hormones: "Hormones & endocrinology",
      liver: "Liver",
      kidney: "Kidney & urology",
      minerals: "Minerals & vitamins",
      prostate: "Prostate",
    },
  },
  ro: {
    searchPlaceholder: "Caută după nume...",
    searchLabel: "Caută după nume...",
    sampleTypeLabel: "Tip de probă",
    clinicalAreaLabel: "Domeniu clinic",
    categories: {
      all: "Toate tipurile de probe",
      blood: "Analize de sânge",
      urine: "Analize de urină",
      stool: "Analize de fecale",
    },
    subcategories: {
      all: "Toate domeniile",
      general: "General & inflamare",
      heart: "Inimă & lipide",
      diabetes: "Diabet",
      hormones: "Hormoni & endocrinologie",
      liver: "Ficat",
      kidney: "Rinichi & urologie",
      minerals: "Minerale & vitamine",
      prostate: "Prostată",
    },
  },
};

export const labTestsList = [
  {
    id: 1,
    image: "/images/labTests/general.webp",
    name: {
      en: "Complete Blood Count",
      ro: "Hemoleucogramă completă",
    },
    description: {
      en: "Measures various components of the blood, including red cells, white cells, and platelets. Essential for screening infections or anemia.",
      ro: "Măsoară diferite componente ale sângelui, inclusiv eritrocitele, leucocitele și trombocitele. Esențială pentru depistarea infecțiilor sau anemiei.",
    },
    category: "blood",
    subcategory: "general",
  },
  {
    id: 2,
    image: "/images/labTests/general.webp",
    name: {
      en: "Erythrocyte Sedimentation Rate (ESR)",
      ro: "Viteza de sedimentare a hematiilor (VSH)",
    },
    description: {
      en: "A test that measures how quickly red blood cells settle at the bottom of a test tube, indicating inflammation in the body.",
      ro: "Măsoară cât de repede se depun globulele roșii în eprubetă, fiind un indicator clasic al prezenței unei inflamații în organism.",
    },
    category: "blood",
    subcategory: "general",
  },

  {
    id: 3,
    image: "/images/labTests/general.webp",
    name: {
      en: "Total protein",
      ro: "Proteine totale",
    },
    description: {
      en: "Measures the total amount of protein in your blood. Often appears on routine biochemistry reports alongside other baseline markers.",
      ro: "Măsoară cantitatea totală de proteine din sânge. Apare frecvent în primul buletin de biochimie, alături de alți markeri de bază.",
    },
    category: "blood",
    subcategory: "general",
  },
  {
    id: 4,
    image: "/images/labTests/general.webp",
    name: {
      en: "C-Reactive Protein (CRP)",
      ro: "Proteina C reactivă (CRP)",
    },
    description: {
      en: "A highly sensitive marker for inflammation in the body, used to assess infection risk and cardiovascular health.",
      ro: "Un marker foarte sensibil pentru inflamația din corp, utilizat pentru evaluarea riscului de infecție și a sănătății cardiovasculare.",
    },
    category: "blood",
    subcategory: "general",
  },

  // --- INIMĂ ȘI LIPIDE ---
  {
    id: 10,
    image: "/images/labTests/heart-lipids.webp",
    name: {
      en: "Total Cholesterol",
      ro: "Colesterol total",
    },
    description: {
      en: "Measures the overall level of cholesterol in your blood to help estimate your risk of heart disease.",
      ro: "Măsoară nivelul general de colesterol din sânge pentru a ajuta la estimarea riscului de boli cardiace.",
    },
    category: "blood",
    subcategory: "heart",
  },

  {
    id: 11,
    image: "/images/labTests/heart-lipids.webp",
    name: {
      en: "HDL Cholesterol",
      ro: "Colesterol HDL",
    },
    description: {
      en: "Known as 'good' cholesterol. It helps remove other forms of cholesterol from your bloodstream.",
      ro: "Cunoscut sub numele de colesterol 'bun'. Ajută la eliminarea altor forme de colesterol din fluxul sanguin.",
    },
    category: "blood",
    subcategory: "heart",
  },
  {
    id: 12,
    image: "/images/labTests/heart-lipids.webp",
    name: {
      en: "LDL Cholesterol",
      ro: "Colesterol LDL",
    },
    description: {
      en: "Known as 'bad' cholesterol. High levels lead to a buildup of cholesterol in your arteries.",
      ro: "Cunoscut sub numele de colesterol 'rău'. Nivelurile ridicate duc la acumularea de grăsime în artere.",
    },
    category: "blood",
    subcategory: "heart",
  },

  {
    id: 13,
    image: "/images/labTests/heart-lipids.webp",
    name: {
      en: "Triglycerides",
      ro: "Trigliceride",
    },
    description: {
      en: "A type of fat in your blood. High levels can increase the risk of heart disease and stroke.",
      ro: "Un tip de grăsime din sânge. Nivelurile ridicate pot crește riscul de boli de inimă și accident vascular cerebral.",
    },
    category: "blood",
    subcategory: "heart",
  },

  // --- DIABET ȘI GLICEMIE ---
  {
    id: 20,
    image: "/images/labTests/diabetes.webp",
    name: {
      en: "Fasting Blood Glucose",
      ro: "Glicemie",
    },
    description: {
      en: "Measures the amount of glucose (sugar) in your blood to screen for diabetes or prediabetes.",
      ro: "Măsoară cantitatea de glucoză (zahăr) din sânge pentru depistarea diabetului sau a prediabetului.",
    },
    category: "blood",
    subcategory: "diabetes",
  },
  {
    id: 21,
    image: "/images/labTests/diabetes.webp",
    name: {
      en: "Glycated Hemoglobin (HbA1c)",
      ro: "Hemoglobină glicozilată (HbA1c)",
    },
    description: {
      en: "Shows your average blood sugar levels over the past 2 to 3 months. Crucial for monitoring diabetes.",
      ro: "Indică media nivelului de zahăr din sânge din ultimele 2-3 luni. Crucială pentru monitorizarea diabetului.",
    },
    category: "blood",
    subcategory: "diabetes",
  },

  {
    id: 30,
    image: "/images/labTests/hormones.webp",
    name: {
      en: "Free T4 (free thyroxine)",
      ro: "T4 liber (tiroxină liberă, FT4)",
    },
    description: {
      en: "Measures the active thyroid hormone available to your tissues. Often interpreted together with TSH on a thyroid panel.",
      ro: "Măsoară hormonul tiroidian activ disponibil pentru țesuturi. Se interpretează de obicei împreună cu TSH în profilul tiroidian.",
    },
    category: "blood",
    subcategory: "hormones",
  },
  {
    id: 31,
    image: "/images/labTests/hormones.webp",
    name: {
      en: "TSH (thyroid-stimulating hormone)",
      ro: "TSH (hormon stimulator tiroidian)",
    },
    description: {
      en: "Pituitary signal that tells your thyroid how hard to work. A key first-line test for thyroid function.",
      ro: "Semnalul hipofizei care reglează activitatea tiroidei. Test de primă linie pentru funcția tiroidiană.",
    },
    category: "blood",
    subcategory: "hormones",
  },

  // --- FICAT ȘI CĂI BILIARE ---
  {
    id: 40,
    image: "/images/labTests/liver.webp",
    name: {
      en: "TGO / AST",
      ro: "TGO (AST)",
    },
    description: {
      en: "An enzyme found mostly in the liver and heart. High levels may indicate liver damage.",
      ro: "O enzimă prezentă mai ales în ficat și inimă. Nivelurile crescute pot indica leziuni ale ficatului.",
    },
    category: "blood",
    subcategory: "liver",
  },
  {
    id: 41,
    image: "/images/labTests/liver.webp",
    name: {
      en: "TGP / ALT",
      ro: "TGP (ALT)",
    },
    description: {
      en: "An enzyme found mainly in the liver. It is the most specific test for liver damage.",
      ro: "O enzimă care se găsește în principal în ficat. Este cel mai specific test pentru depistarea afectării ficatului.",
    },
    category: "blood",
    subcategory: "liver",
  },
  {
    id: 42,
    image: "/images/labTests/liver.webp",
    name: {
      en: "Gamma-GT (GGT)",
      ro: "Gama GT (GGT)",
    },
    description: {
      en: "Measures the level of the GGT enzyme. Often used to detect bile duct problems or alcohol abuse.",
      ro: "Măsoară nivelul enzimei GGT. Folosit adesea pentru depistarea problemelor biliare sau a consumului de alcool.",
    },
    category: "blood",
    subcategory: "liver",
  },
  {
    id: 43,
    image: "/images/labTests/liver.webp",
    name: {
      en: "Total Bilirubin",
      ro: "Bilirubină totală",
    },
    description: {
      en: "Measures the level of bilirubin to evaluate liver function or look for signs of liver disease and jaundice.",
      ro: "Măsoară nivelul de bilirubină pentru a evalua funcția hepatică sau pentru semne de icter.",
    },
    category: "blood",
    subcategory: "liver",
  },

  // --- RINICHI ȘI METABOLISM AZOTAT ---
  {
    id: 51,
    image: "/images/labTests/kidney.webp",
    name: {
      en: "Serum Creatinine",
      ro: "Creatinină serică",
    },
    description: {
      en: "A waste product filtered by the kidneys. High levels may indicate that the kidneys are not functioning properly.",
      ro: "Un produs rezidual filtrat de rinichi. Nivelurile crescute pot indica o funcționare defectuoasă a rinichilor.",
    },
    category: "blood",
    subcategory: "kidney",
  },
  {
    id: 52,
    image: "/images/labTests/kidney.webp",
    name: {
      en: "Serum Urea",
      ro: "Uree serică",
    },
    description: {
      en: "Measures the amount of nitrogen in your blood that comes from the waste product urea. Evaluates kidney function.",
      ro: "Măsoară cantitatea de azot din sânge provenită din uree. Evaluează funcția rinichilor.",
    },
    category: "blood",
    subcategory: "kidney",
  },
  {
    id: 53,
    image: "/images/labTests/kidney.webp",
    name: {
      en: "Uric Acid",
      ro: "Acid uric",
    },
    description: {
      en: "High levels can cause gout or kidney stones. Often measured in routine blood panels.",
      ro: "Nivelurile crescute pot cauza gută sau pietre la rinichi. Măsurat des în analizele de rutină.",
    },
    category: "blood",
    subcategory: "kidney",
  },

  {
    id: 54,
    image: "/images/labTests/kidney.webp",
    name: {
      en: "eGFR (estimated glomerular filtration rate)",
      ro: "eGFR (rată estimată de filtrare glomerulară)",
    },
    description: {
      en: "Usually reported on your kidney panel as a calculated value from creatinine (and often age/sex). It estimates how well your kidneys filter blood.",
      ro: "Apare de obicei la profilul renal ca valoare calculată din creatinină (și adesea vârstă/sex). Estimează cât de bine îți filtrează rinichii sângele.",
    },
    category: "blood",
    subcategory: "kidney",
  },

  // --- ANALIZE DE URINĂ (BONUS ESENȚIAL PENTRU BĂRBAȚI 40+) ---
  {
    id: 55,
    image: "/images/labTests/kidney.webp",
    name: {
      en: "Complete Urinalysis",
      ro: "Sumar de urină",
    },
    description: {
      en: "A general test to check for signs of urinary tract infections, kidney disease, or diabetes.",
      ro: "Un test general pentru a depista infecții urinare, boli de rinichi sau diabet.",
    },
    category: "urine",
    subcategory: "kidney",
  },

  // --- MINERALE ȘI VITAMINE ---

  {
    id: 60,
    image: "/images/labTests/minerals.webp",
    name: {
      en: "Total calcium",
      ro: "Calciu total",
    },
    description: {
      en: "Measures all calcium in serum (bound to proteins plus free fraction). Often reported alongside ionic/corrected calcium for interpretation.",
      ro: "Măsoară calciul total din ser (legat de proteine + fracțiune liberă). Se interpretează adesea împreună cu calciul ionic/corectat.",
    },
    category: "blood",
    subcategory: "minerals",
  },
  {
    id: 61,
    image: "/images/labTests/minerals.webp",
    name: {
      en: "Ionic (ionized) calcium",
      ro: "Calciu ionic (ionizat)",
    },
    description: {
      en: "The physiologically active fraction. On many reports it is measured directly; on others it appears as a calculated value from total calcium and albumin.",
      ro: "Fracțiunea biologic activă. În multe buletine e măsurată direct; în altele apare ca valoare calculată din calciu total și albumină.",
    },
    category: "blood",
    subcategory: "minerals",
  },

  {
    id: 62,
    image: "/images/labTests/minerals.webp",
    name: {
      en: "Serum Magnesium",
      ro: "Magneziu seric",
    },
    description: {
      en: "Measures the level of magnesium, vital for nerve function, muscles, and energy production.",
      ro: "Măsoară nivelul de magneziu, vital pentru funcția nervoasă, mușchi și producerea de energie.",
    },
    category: "blood",
    subcategory: "minerals",
  },
  {
    id: 63,
    image: "/images/labTests/minerals.webp",
    name: {
      en: "Serum Iron (Sideremia)",
      ro: "Fier (Sideremie)",
    },
    description: {
      en: "Measures the amount of circulating iron in your blood. Essential for hemoglobin production.",
      ro: "Măsoară cantitatea de fier circulant din sânge. Esențial pentru producerea hemoglobinei.",
    },
    category: "blood",
    subcategory: "minerals",
  },

  {
    id: 64,
    image: "/images/labTests/minerals.webp",
    name: {
      en: "Vitamin D (25-OH)",
      ro: "Vitamina D (25-OH)",
    },
    description: {
      en: "Measures vitamin D levels. Essential for bone health, immunity, and calcium absorption.",
      ro: "Măsoară nivelul de vitamina D. Esențială pentru sănătatea oaselor, imunitate și absorbția calciului.",
    },
    category: "blood",
    subcategory: "minerals",
  },

  // --- SCREENING BĂRBAȚI ---
  {
    id: 70,
    image: "/images/labTests/prostate.webp",
    name: {
      en: "PSA (Prostate Specific Antigen)",
      ro: "PSA (Antigen specific prostatic)",
    },
    description: {
      en: "A screening test for prostate cancer and other prostate disorders in men.",
      ro: "Un test de screening pentru cancerul de prostată și alte afecțiuni ale prostatei la bărbați.",
    },
    category: "blood",
    subcategory: "prostate",
  },
];
