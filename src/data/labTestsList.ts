import type { TestType } from "@/types/types";

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

export const labTestsList: TestType[] = [
  {
    id: 1,
    image: "/images/labTests/general.webp",
    name: {
      en: "Complete Blood Count (CBC)",
      ro: "Hemoleucogramă completă",
    },
    description: {
      en: "A fundamental blood test that evaluates your overall health and detects a wide range of disorders, including anemia, infection, and leukemia.",
      ro: "O analiză fundamentală care evaluează starea generală de sănătate și detectează o gamă largă de afecțiuni, inclusiv anemia, infecțiile și leucemia.",
    },
    category: "blood",
    subcategory: "general",
    detailPage: {
      whatItMeasures: {
        en: "It measures the three main types of blood cells: Red Blood Cells (carry oxygen), White Blood Cells (fight infection), and Platelets (help blood clot). It also checks Hemoglobin levels and Hematocrit.",
        ro: "Măsoară cele trei tipuri principale de celule sanguine: Eritrocitele (transportă oxigenul), Leucocitele (luptă împotriva infecțiilor) și Trombocitele (ajută la coagulare). Verifică, de asemenea, Hemoglobina și Hematocritul.",
      },
      whyItMatters: {
        en: "This is the primary 'screening' test. It helps explain symptoms like fatigue, weakness, bruising, or fever. It's essential for monitoring how medications or chronic conditions affect your blood production.",
        ro: "Este principalul test de screening. Ajută la explicarea unor simptome precum oboseala, slăbiciunea, vânătăile sau febra. Este esențial pentru a monitoriza modul în care medicamentele sau bolile cronice afectează producția de sânge.",
      },
      typicalTurnaround: {
        en: "One of the fastest tests; results are usually ready within 24 hours, often on the same day as the draw.",
        ro: "Una dintre cele mai rapide analize; rezultatele sunt gata, de regulă, în 24 de ore, adesea chiar în aceeași zi cu recoltarea.",
      },
      referenceMinMale: "4.0",
      referenceMaxMale: "10.0",
      referenceMinFemale: "4.0",
      referenceMaxFemale: "10.0",
      unitMeasure: "10^3/uL",
      longDescription: {
        en: "The CBC is a comprehensive 'census' of your blood cells. It evaluates three major systems: the delivery of oxygen (Red Cells), the defense against invaders (White Cells), and the sealing of leaks (Platelets). Your results show a healthy balance, with a particularly good hemoglobin level. Doctors look at the 'indices' (like MCV or RDW) to see if cells are of normal size and shape, which is crucial for ruling out early-stage anemias.",
        ro: "Hemoleucograma este un 'recensământ' complet al celulelor sanguine. Evaluează trei sisteme majore: livrarea oxigenului (Eritrocite), apărarea împotriva intrușilor (Leucocite) și sigilarea scurgerilor (Trombocite). Rezultatele tale arată un echilibru sănătos, cu un nivel de hemoglobină optim. Medicii analizează 'indicii' (precum VEM sau RDW) pentru a vedea dacă celulele au dimensiuni și forme normale, esențial pentru excluderea anemiilor în stadiu incipient.",
      },
      stepSpecial: {
        en: "Standard procedure: Fasting is not strictly required for CBC alone, but avoid intense physical activity right before the draw, as it can temporarily shift the white blood cell count and hematocrit levels.",
        ro: "Procedură standard: Repausul alimentar nu este strict necesar doar pentru hemoleucogramă, dar evitați efortul fizic intens chiar înainte de recoltare, deoarece poate modifica temporar numărul de leucocite și nivelul hematocritului.",
      },
      belowReference: {
        en: "Low counts (cytopenia) can indicate anemia, nutritional deficiencies (Iron, B12, Folate), or a weakened immune system. Symptoms often include pallor, chronic fatigue, or frequent infections.",
        ro: "Valorile scăzute (citopenie) pot indica anemii, deficiențe nutriționale (Fier, B12, Acid Folic) sau un sistem imunitar slăbit. Simptomele includ paloare, oboseală cronică sau infecții frecvente.",
      },
      aboveReference: {
        en: "High counts (cytosis) may signal an active infection, dehydration, or an inflammatory response. A high red cell count is sometimes seen in smokers or people living at high altitudes as the body compensates for lower oxygen levels.",
        ro: "Valorile crescute (citoză) pot semnala o infecție activă, deshidratare sau un răspuns inflamator. Un număr mare de eritrocite este uneori întâlnit la fumători sau la persoanele care trăiesc la altitudini mari.",
      },
    },
  },
  {
    id: 2,
    image: "/images/labTests/general.webp",
    name: {
      en: "Erythrocyte Sedimentation Rate (ESR)",
      ro: "Viteza de sedimentare a hematiilor (VSH)",
    },
    description: {
      en: "A non-specific marker used to detect and monitor inflammation in the body.",
      ro: "Un marker nespecific utilizat pentru a detecta și monitoriza prezența inflamației în organism.",
    },
    category: "blood",
    subcategory: "general",
    detailPage: {
      whatItMeasures: {
        en: "It measures the distance (in millimeters) that red blood cells fall in a thin tube over one hour. When inflammation is present, proteins cause red cells to clump together and settle faster.",
        ro: "Măsoară distanța (în milimetri) pe care globulele roșii o parcurg prin cădere într-o eprubetă timp de o oră. În prezența inflamației, proteinele fac eritrocitele să se lipească și să se depună mai rapid.",
      },
      whyItMatters: {
        en: "It helps doctors identify hidden inflammatory activity or monitor conditions like temporal arteritis, polymyalgia rheumatica, or rheumatoid arthritis. It is often used alongside C-Reactive Protein (CRP).",
        ro: "Ajută medicii să identifice activitatea inflamatorie ascunsă sau să monitorizeze afecțiuni precum arterita temporală, polimialgia reumatică sau artrita reumatoidă. Este adesea utilizat împreună cu Proteina C Reactivă (PCR).",
      },
      typicalTurnaround: {
        en: "Results are typically available within 24 hours.",
        ro: "Rezultatele sunt, de regulă, disponibile în 24 de ore.",
      },
      referenceMinMale: "2",
      referenceMaxMale: "15",
      referenceMinFemale: "2",
      referenceMaxFemale: "20",
      unitMeasure: "mm/h",
      longDescription: {
        en: "ESR measures how quickly red blood cells settle at the bottom of a tube. Your result of 5 mm/h indicates no significant systemic inflammation. Unlike CRP, which rises and falls quickly, ESR is a 'slow' marker—it takes longer to increase when you get sick and longer to return to normal after you recover. It is particularly useful for monitoring chronic conditions over long periods.",
        ro: "VSH măsoară cât de repede se depun globulele roșii la baza unei eprubete. Rezultatul tău de 5 mm/h indică absența unei inflamații sistemice semnificative. Spre deosebire de CRP, care crește și scade rapid, VSH este un marker 'lent' — are nevoie de mai mult timp să crească când te îmbolnăvești și mai mult timp să revină la normal după vindecare. Este util în special pentru monitorizarea bolilor cronice pe perioade lungi.",
      },
      stepSpecial: {
        en: "Morning fasting (8-12h) is recommended. Ensure you are well-hydrated, as dehydration can make the blood 'thicker' and falsely slow down the sedimentation rate, giving an inaccurately low result.",
        ro: "Recoltare dimineața pe nemâncate (8-12h). Asigurați-vă că sunteți bine hidratat, deoarece deshidratarea poate face sângele mai 'vâscos' și poate încetini fals viteza de sedimentare, oferind un rezultat eronat de mic.",
      },
      belowReference: {
        en: "Very low levels (0-1 mm/h) are generally normal but can occasionally be seen in polycythemia (too many red cells) or with high-dose aspirin use.",
        ro: "Nivelurile foarte scăzute (0-1 mm/h) sunt în general normale, dar pot fi întâlnite ocazional în policitemie (prea multe globule roșii) sau la utilizarea unor doze mari de aspirină.",
      },
      aboveReference: {
        en: "Elevated levels suggest inflammation. Modest increases can occur during pregnancy or with aging. Significant elevations (especially >100 mm/h) require thorough investigation for infections, autoimmune disorders, or other systemic issues.",
        ro: "Nivelurile crescute sugerează inflamație. Creșteri moderate pot apărea în timpul sarcinii sau odată cu înaintarea în vârstă. Creșterile semnificative (mai ales >100 mm/h) necesită investigații amănunțite pentru infecții sau boli autoimune.",
      },
    },
  },

  {
    id: 3,
    image: "/images/labTests/general.webp",
    name: {
      en: "Total Protein",
      ro: "Proteine Totale",
    },
    description: {
      en: "An essential marker that reflects your nutritional status and the health of your liver and kidneys.",
      ro: "Un marker esențial care reflectă starea nutrițională și sănătatea ficatului și a rinichilor.",
    },
    category: "blood",
    subcategory: "general",
    detailPage: {
      whatItMeasures: {
        en: "This test measures the total amount of protein in the liquid portion of your blood (serum). It is the combined sum of two major types: Albumin (produced by the liver) and Globulins (which include antibodies that fight infection).",
        ro: "Acest test măsoară cantitatea totală de proteine din partea lichidă a sângelui (ser). Este suma combinată a două tipuri majore: Albumina (produsă de ficat) și Globulinele (care includ anticorpii ce luptă împotriva infecțiilor).",
      },
      whyItMatters: {
        en: "It is used as a screening tool for liver or kidney disease, malnutrition, or unexplained swelling (edema). Since it’s a 'total' sum, doctors usually interpret it alongside other markers to see if the balance between albumin and globulins is correct.",
        ro: "Este utilizat pentru depistarea bolilor de ficat sau rinichi, a malnutriției sau a edemelor (umflături) inexplicabile. Fiind o sumă 'totală', medicii o interpretează alături de alți markeri pentru a vedea dacă raportul dintre albumină și globuline este corect.",
      },
      typicalTurnaround: {
        en: "Usually ready within 1–2 working days. Most biochemistry labs process these samples daily.",
        ro: "De regulă, rezultatul este gata în 1–2 zile lucrătoare. Majoritatea laboratoarelor procesează aceste probe zilnic.",
      },
      referenceMinMale: "6.4",
      referenceMaxMale: "8.3",
      referenceMinFemale: "6.4",
      referenceMaxFemale: "8.3",
      unitMeasure: "g/dL",
      longDescription: {
        en: "Total protein measures the combined levels of albumin and globulin. Your result of 7.30 g/dL is perfectly centered in the normal range. It's a key indicator of your body's 'building blocks'. Interestingly, hydration status can slightly shift this number: if you are dehydrated, the protein concentration appears higher; if you drink too much water just before the test, it may appear lower.",
        ro: "Proteinele totale măsoară nivelurile combinate de albumină și globulină. Rezultatul tău de 7.30 g/dL este perfect centrat în intervalul normal. Este un indicator cheie al 'cărămizilor' organismului tău. Interesant este că starea de hidratare poate modifica ușor acest număr: dacă ești deshidratat, concentrația pare mai mare; dacă bei prea multă apă chiar înainte de test, poate părea mai mică.",
      },
      stepSpecial: {
        en: "Morning fasting (8-12h). Avoid applying a tourniquet for too long during the draw, as this can falsely increase protein concentration in that arm. Normal hydration with plain water is recommended.",
        ro: "Recoltare dimineața pe nemâncate (8-12h). Evitarea aplicării garoului pentru un timp prea îndelungat în timpul recoltării, deoarece acest lucru poate crește fals concentrația de proteine în brațul respectiv. Se recomandă hidratarea normală cu apă plată.",
      },
      belowReference: {
        en: "Low levels (hypoproteinemia) can indicate that the liver isn't producing enough protein or the kidneys are losing it. It can also be a sign of malabsorption or an extremely low-protein diet.",
        ro: "Nivelurile scăzute (hipoproteinemie) pot indica faptul că ficatul nu produce suficiente proteine sau că rinichii le pierd. Poate fi, de asemenea, un semn de malabsorbție sau de dietă extrem de săracă în proteine.",
      },
      aboveReference: {
        en: "Elevated levels can be caused by chronic inflammation, infections, or dehydration. If significantly high, doctors may order a 'Protein Electrophoresis' to see exactly which type of protein is elevated.",
        ro: "Nivelurile crescute pot fi cauzate de inflamații cronice, infecții sau deshidratare. Dacă sunt semnificativ mărite, medicii pot recomanda 'Electroforeza proteinelor' pentru a vedea exact ce tip de proteină este în exces.",
      },
    },
  },
  {
    id: 4,
    image: "/images/labTests/general.webp",
    name: {
      en: "C-Reactive Protein (CRP)",
      ro: "Proteina C reactivă (CRP)",
    },
    description: {
      en: "A protein made by the liver that increases when there is inflammation in your body.",
      ro: "O proteină produsă de ficat ale cărei niveluri cresc atunci când există o inflamație în organism.",
    },
    category: "blood",
    subcategory: "general",
    detailPage: {
      whatItMeasures: {
        en: "It measures the concentration of C-reactive protein in the blood. It is an 'acute phase reactant', meaning its levels rise rapidly in response to injury, infection, or medical conditions that cause inflammation.",
        ro: "Măsoară concentrația de proteină C reactivă din sânge. Este un 'reactant de fază acută', ceea ce înseamnă că nivelul său crește rapid ca răspuns la leziuni, infecții sau afecțiuni care cauzează inflamație.",
      },
      whyItMatters: {
        en: "CRP is a more sensitive and faster-responding marker than ESR. It helps detect acute infections, monitor chronic inflammatory diseases (like lupus or RA), and can help assess the risk of future heart problems.",
        ro: "CRP este un marker mai sensibil și cu răspuns mai rapid decât VSH. Ajută la detectarea infecțiilor acute, monitorizarea bolilor inflamatorii cronice (precum lupus sau poliartrită reumatoidă) și poate ajuta la evaluarea riscului cardiovascular.",
      },
      typicalTurnaround: {
        en: "Results are usually available within 24 hours.",
        ro: "Rezultatele sunt, de regulă, disponibile în 24 de ore.",
      },
      referenceMinMale: "0",
      referenceMaxMale: "5.0",
      referenceMinFemale: "0",
      referenceMaxFemale: "5.0",
      unitMeasure: "mg/L",
      longDescription: {
        en: "CRP is an 'emergency broadcast' protein. Within 6 hours of an infection or injury, the liver starts pumping CRP into the blood. It is highly sensitive—your value of 0.18 mg/L indicates a very low level of systemic inflammation. Doctors use this to distinguish between bacterial infections (where CRP is usually very high) and viral infections (where CRP is often only slightly elevated). It is also a key marker for 'silent inflammation' related to heart health.",
        ro: "CRP este o proteină de 'alertă maximă'. În 6 ore de la o infecție sau leziune, ficatul începe să pompeze CRP în sânge. Este un test foarte sensibil — valoarea ta de 0.18 mg/L indică un nivel foarte scăzut de inflamație sistemică. Medicii folosesc acest test pentru a distinge între infecțiile bacteriene (unde CRP este de obicei foarte mare) și cele virale (unde CRP este adesea doar ușor crescută). Este, de asemenea, un marker pentru 'inflamația silențioasă' legată de inimă.",
      },
      stepSpecial: {
        en: "Fasting (8-12h) is recommended. Avoid strenuous exercise for 24 hours before the test, as muscle micro-tears can cause a temporary spike in CRP levels, potentially mimicking an infection.",
        ro: "Recoltare pe nemâncate (8-12h). Evitați efortul fizic intens cu 24 de ore înainte, deoarece micro-leziunile musculare pot crește temporar nivelul CRP, imitând o infecție.",
      },
      belowReference: {
        en: "Low levels (typically below 1.0 mg/L) are ideal and associated with a lower risk of cardiovascular disease and a healthy immune state.",
        ro: "Nivelurile scăzute (de regulă sub 1.0 mg/L) sunt ideale și asociate cu un risc cardiovascular scăzut și o stare imunitară sănătoasă.",
      },
      aboveReference: {
        en: "1-3 mg/L: Average risk; 3-10 mg/L: High risk/Minor inflammation. >10 mg/L: Acute inflammation (infection or injury). Persistent high levels require investigation to find the source of inflammation.",
        ro: "1-3 mg/L: Risc moderat; 3-10 mg/L: Risc crescut/Inflamație minoră. >10 mg/L: Inflamație acută (infecție sau traumatism). Nivelurile mari persistente necesită investigații pentru găsirea sursei inflamației.",
      },
    },
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
    detailPage: {
      whatItMeasures: {
        en: "It measures the total amount of cholesterol (a waxy, fat-like substance) found in your blood. This includes Low-Density Lipoprotein (LDL or 'bad' cholesterol) and High-Density Lipoprotein (HDL or 'good' cholesterol).",
        ro: "Măsoară cantitatea totală de colesterol (o substanță grasă, asemănătoare cerii) din sânge. Acesta include lipoproteinele cu densitate joasă (LDL sau colesterolul 'rău') și lipoproteinele cu densitate mare (HDL sau colesterolul 'bun').",
      },
      whyItMatters: {
        en: "High cholesterol levels can lead to the buildup of plaques in your arteries (atherosclerosis), increasing the risk of heart attack and stroke. It is a key component of a cardiovascular risk assessment.",
        ro: "Nivelurile ridicate de colesterol pot duce la acumularea de plăci în artere (ateroscleroză), crescând riscul de atac de cord și accident vascular cerebral. Este un element cheie în evaluarea riscului cardiovascular.",
      },
      typicalTurnaround: {
        en: "Results are typically available within 1–2 working days.",
        ro: "Rezultatele sunt, de regulă, disponibile în 1–2 zile lucrătoare.",
      },
      referenceMinMale: "120",
      referenceMaxMale: "200",
      referenceMinFemale: "120",
      referenceMaxFemale: "200",
      unitMeasure: "mg/dL",
      longDescription: {
        en: "Total cholesterol is the sum of your HDL, LDL, and 20% of your triglycerides. Your result of 195 mg/dL is at the upper limit of the desirable range. It's important to remember that total cholesterol is just a starting point; a high-normal value is less concerning if your 'good' HDL is high and your 'bad' LDL is low. Genetics play a massive role here, as some people produce more cholesterol naturally regardless of diet.",
        ro: "Colesterolul total este suma HDL, LDL și a 20% din valoarea trigliceridelor. Rezultatul tău de 195 mg/dL este la limita superioară a intervalului dorit. Este important de reținut că valoarea totală este doar un punct de plecare; o valoare mare-normală este mai puțin îngrijorătoare dacă HDL-ul 'bun' este mare și LDL-ul 'rău' este mic. Genetica joacă un rol masiv, deoarece unii oameni produc mai mult colesterol natural, indiferent de dietă.",
      },
      stepSpecial: {
        en: "Strict fasting (9–12 hours) is required. Avoid high-fat meals and alcohol for 24 hours before the test. Since total cholesterol is used to calculate other lipid fractions, any deviation from fasting can distort your entire cardiovascular profile.",
        ro: "Repaus alimentar strict (9–12 ore). Evitați mesele bogate în grăsimi și alcoolul cu 24 de ore înainte de test. Deoarece colesterolul total este folosit în calculul altor fracții lipidice, orice abatere de la repausul alimentar poate distorsiona întreg profilul cardiovascular.",
      },
      belowReference: {
        en: "Values below 120 mg/dL are considered low. While often seen as positive, extremely low levels can sometimes be linked to underlying issues like hyperthyroidism or severe liver conditions.",
        ro: "Valorile sub 120 mg/dL sunt considerate scăzute. Deși adesea văzute ca pozitive, nivelurile extrem de mici pot fi uneori legate de probleme subiacente precum hipertiroidismul sau afecțiuni hepatice severe.",
      },
      aboveReference: {
        en: "Desirable: <200 mg/dL; Borderline High: 200-239 mg/dL; High: ≥ 240 mg/dL. Even if you are below 200, medical evaluation is recommended if other risk factors like high blood pressure or smoking are present.",
        ro: "Doribil: <200 mg/dL; La limită: 200-239 mg/dL; Crescut: ≥ 240 mg/dL. Chiar dacă ești sub 200, evaluarea medicală este recomandată dacă există alți factori de risc precum hipertensiunea sau fumatul.",
      },
    },
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
    detailPage: {
      whatItMeasures: {
        en: "It measures the level of High-Density Lipoprotein (HDL) in your blood. HDL acts like a scavenger, picking up excess cholesterol and carrying it back to your liver to be broken down and removed.",
        ro: "Măsoară nivelul de lipoproteine cu densitate mare (HDL) din sânge. HDL acționează ca un 'aspirator', colectând excesul de colesterol și transportându-l înapoi la ficat pentru a fi descompus și eliminat.",
      },
      whyItMatters: {
        en: "Higher levels of HDL are generally associated with a lower risk of heart disease. Unlike most markers, a 'low' number here is actually more concerning than a 'high' one, as it means less protection for your arteries.",
        ro: "Nivelurile mai ridicate de HDL sunt în general asociate cu un risc mai scăzut de boli cardiace. Spre deosebire de majoritatea markerilor, o valoare 'scăzută' este mai îngrijorătoare decât una 'ridicată', deoarece indică o protecție mai mică pentru artere.",
      },
      typicalTurnaround: {
        en: "Results are typically available within 1–2 working days.",
        ro: "Rezultatele sunt, de regulă, disponibile în 1–2 zile lucrătoare.",
      },
      referenceMinMale: "60",
      referenceMaxMale: "100",
      referenceMinFemale: "60",
      referenceMaxFemale: "100",
      unitMeasure: "mg/dL",
      longDescription: {
        en: "HDL is the 'garbage truck' of the bloodstream, picking up excess cholesterol from your arteries and taking it to the liver for disposal. While your result of 57 mg/dL is good, medical guidelines suggest that levels above 60 mg/dL provide the best protection against heart disease. Low HDL is often a sign of metabolic syndrome, especially when combined with high triglycerides.",
        ro: "HDL este 'mașina de gunoi' a fluxului sanguin, colectând excesul de colesterol din artere și transportându-l la ficat pentru eliminare. Deși rezultatul tău de 57 mg/dL este bun, ghidurile medicale sugerează că nivelurile peste 60 mg/dL oferă cea mai bună protecție. Un HDL scăzut este adesea un semn al sindromului metabolic, mai ales când este combinat cu trigliceride mari.",
      },
      stepSpecial: {
        en: "Strict fasting (9-12 hours) is mandatory. Avoid alcohol for 24-48 hours before the test, as it can temporarily and falsely inflate HDL levels, giving a misleading sense of protection.",
        ro: "Repaus alimentar strict (9-12 ore). Evitați alcoolul cu 24-48 de ore înainte de test, deoarece acesta poate crește temporar și fals nivelul HDL, oferind o senzație falsă de protecție.",
      },
      belowReference: {
        en: "Risk Profile: <40 mg/dL (High risk); 40-59 mg/dL (Moderate risk). Low levels are often linked to smoking, sedentary lifestyle, and high consumption of processed carbohydrates.",
        ro: "Profil de risc: <40 mg/dL (Risc ridicat); 40-59 mg/dL (Risc moderat). Nivelurile scăzute sunt adesea legate de fumat, sedentarism și consumul ridicat de carbohidrați procesați.",
      },
      aboveReference: {
        en: "Levels ≥ 60 mg/dL are considered a 'negative risk factor,' meaning they actively help subtract risk from your overall cardiovascular profile.",
        ro: "Nivelurile ≥ 60 mg/dL sunt considerate un 'factor de risc negativ', ceea ce înseamnă că ajută activ la scăderea riscului cardiovascular general.",
      },
    },
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
    detailPage: {
      whatItMeasures: {
        en: "It measures the level of Low-Density Lipoprotein (LDL) in your blood. LDL carries cholesterol to your cells, but if there is too much, it can stick to the walls of your arteries.",
        ro: "Măsoară nivelul de lipoproteine cu densitate joasă (LDL) din sânge. LDL transportă colesterolul către celule, dar dacă există în exces, se poate depune pe pereții arterelor.",
      },
      whyItMatters: {
        en: "High LDL levels are a major risk factor for heart disease and stroke because they contribute to the formation of plaques that narrow or block blood vessels.",
        ro: "Nivelurile ridicate de LDL sunt un factor de risc major pentru bolile de inimă și accidentul vascular cerebral, deoarece contribuie la formarea plăcilor care îngustează sau blochează vasele de sânge.",
      },
      typicalTurnaround: {
        en: "Results are typically available within 1–2 working days.",
        ro: "Rezultatele sunt, de regulă, disponibile în 1–2 zile lucrătoare.",
      },
      referenceMinMale: "0",
      referenceMaxMale: "100",
      referenceMinFemale: "0",
      referenceMaxFemale: "100",
      unitMeasure: "mg/dL",
      longDescription: {
        en: "LDL is known as 'bad' cholesterol because it contributes to plaque buildup in arteries (atherosclerosis). Your result of 123.60 mg/dL is considered 'Near Optimal'. However, the target for LDL is not the same for everyone; for individuals with high cardiovascular risk or diabetes, doctors often aim for much lower levels (below 70 or even 55 mg/dL). It is usually calculated using the Friedewald formula based on total cholesterol, HDL, and triglycerides.",
        ro: "LDL este cunoscut sub numele de colesterol 'rău' deoarece contribuie la formarea plăcilor în artere (ateroscleroză). Rezultatul tău de 123.60 mg/dL este considerat 'Optim la limită'. Totuși, ținta LDL nu este aceeași pentru toată lumea; pentru persoanele cu risc cardiovascular ridicat, medicii vizează adesea niveluri mult mai mici (sub 70 sau chiar 55 mg/dL). Este de obicei calculat prin formula Friedewald.",
      },
      stepSpecial: {
        en: "Strict fasting (9-12 hours) is essential for an accurate calculation. Avoid high-fat meals the night before and do not consume alcohol for 24 hours, as high triglycerides can lead to an inaccurate LDL calculation.",
        ro: "Repausul alimentar strict (9-12 ore) este esențial pentru un calcul precis. Evitați mesele bogate în grăsimi în seara precedentă și nu consumați alcool cu 24 de ore înainte, deoarece trigliceridele crescute pot duce la un calcul incorect al LDL.",
      },
      belowReference: {
        en: "Low levels are generally excellent for cardiovascular health. Extremely low levels (below 40 mg/dL) are rare and can be seen in cases of severe malnutrition or over-treatment with statins.",
        ro: "Nivelurile scăzute sunt, în general, excelente pentru sănătatea cardiovasculară. Nivelurile extrem de mici (sub 40 mg/dL) sunt rare și pot apărea în malnutriție severă sau supradozaj de statine.",
      },
      aboveReference: {
        en: "Optimal: <100 mg/dL; Near Optimal: 100-129 mg/dL; Borderline High: 130-159 mg/dL; High: 160-189 mg/dL. Levels above 190 mg/dL are considered very high and often indicate a genetic predisposition.",
        ro: "Optim: <100 mg/dL; Optim la limită: 100-129 mg/dL; Crescut la limită: 130-159 mg/dL; Crescut: 160-189 mg/dL. Valorile peste 190 mg/dL sunt considerate foarte mari și indică adesea o predispoziție genetică.",
      },
    },
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
    detailPage: {
      whatItMeasures: {
        en: "It measures the amount of triglycerides, the most common type of fat in the body. When you eat, your body converts any calories it doesn't need to use right away into triglycerides, which are stored in your fat cells.",
        ro: "Măsoară cantitatea de trigliceride, cel mai comun tip de grăsime din organism. Când mănânci, corpul convertește caloriile de care nu are nevoie imediat în trigliceride, care sunt stocate în celulele adipoase.",
      },
      whyItMatters: {
        en: "High triglycerides are often a sign of other conditions that increase the risk of heart disease and stroke, such as obesity, metabolic syndrome, and type 2 diabetes. Extremely high levels can also cause acute pancreatitis.",
        ro: "Trigliceridele mari sunt adesea un semn al altor afecțiuni care cresc riscul de boli cardiace, cum ar fi obezitatea, sindromul metabolic și diabetul de tip 2. Nivelurile extrem de mari pot provoca, de asemenea, pancreatită acută.",
      },
      typicalTurnaround: {
        en: "Results are typically available within 1–2 working days.",
        ro: "Rezultatele sunt, de regulă, disponibile în 1–2 zile lucrătoare.",
      },
      referenceMinMale: "0",
      referenceMaxMale: "150",
      referenceMinFemale: "0",
      referenceMaxFemale: "150",
      unitMeasure: "mg/dL",
      longDescription: {
        en: "Triglycerides are the main form of stored energy in the body. They are incredibly dynamic; a single high-carb meal or a few glasses of wine can triple your levels within hours. This is why they are a key indicator of 'metabolic health'. Persistent high levels, even if cholesterol is normal, can significantly increase cardiovascular risk and are a hallmark of insulin resistance.",
        ro: "Trigliceridele sunt principala formă de energie stocată în corp. Sunt incredibil de dinamice; o singură masă bogată în carbohidrați sau câteva pahare de vin pot tripla nivelul în câteva ore. De aceea, sunt un indicator cheie al sănătății metabolice. Nivelurile mari persistente, chiar dacă colesterolul e normal, cresc riscul cardiovascular și sunt un semn al rezistenței la insulină.",
      },
      stepSpecial: {
        en: "Strict fasting for 12 hours is mandatory. Do not consume alcohol for at least 48 hours before the test. Even a small amount of alcohol or a late-night sugary snack can lead to a massive, false spike in triglyceride levels.",
        ro: "Repaus alimentar strict timp de 12 ore este obligatoriu. Nu consumați alcool cu cel puțin 48 de ore înainte de test. Chiar și o cantitate mică de alcool sau o gustare dulce târziu în noapte poate duce la o creștere masivă și falsă a trigliceridelor.",
      },
      belowReference: {
        en: "Very low levels (below 40-50 mg/dL) are rare and can sometimes indicate malabsorption, hyperthyroidism, or an ultra-low-fat diet.",
        ro: "Nivelurile foarte scăzute (sub 40-50 mg/dL) sunt rare și pot indica uneori malabsorbție, hipertiroidism sau o dietă extrem de săracă în grăsimi.",
      },
      aboveReference: {
        en: "150-199: Borderline high. 200-499: High. ≥ 500: Very high (risk of pancreatitis). High levels are often associated with a high-sugar diet, sedentary lifestyle, or untreated prediabetes.",
        ro: "150-199: La limită. 200-499: Crescut. ≥ 500: Foarte crescut (risc de pancreatită). Nivelurile mari sunt adesea asociate cu o dietă bogată în zahăr, sedentarism sau un prediabet netratat.",
      },
    },
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
    detailPage: {
      whatItMeasures: {
        en: "It measures the concentration of glucose, the main type of sugar found in your blood and the body's primary source of energy. The 'fasting' aspect is crucial as it shows how the body manages sugar levels without the immediate influence of a meal.",
        ro: "Măsoară concentrația de glucoză, principalul tip de zahăr din sânge și sursa primară de energie a organismului. Aspectul 'pe nemâncate' este crucial, deoarece arată cum gestionează corpul zahărul fără influența imediată a unei mese.",
      },
      whyItMatters: {
        en: "This is the primary test for diagnosing prediabetes and diabetes. Maintaining healthy glucose levels is vital for preventing long-term damage to the heart, kidneys, eyes, and nerves.",
        ro: "Acesta este testul principal pentru diagnosticarea prediabetului și a diabetului. Menținerea unui nivel sănătos al glicemiei este vitală pentru prevenirea afectării pe termen lung a inimii, rinichilor, ochilor și nervilor.",
      },
      typicalTurnaround: {
        en: "Results are typically available within 24 hours.",
        ro: "Rezultatele sunt, de regulă, disponibile în 24 de ore.",
      },
      referenceMinMale: "74",
      referenceMaxMale: "100",
      referenceMinFemale: "74",
      referenceMaxFemale: "100",
      unitMeasure: "mg/dL",
      longDescription: {
        en: "Glucose is your body's main energy source, but it must be kept within a narrow range. Even if you haven't eaten, your liver can release stored sugar into the blood during times of stress or intense exercise (the 'fight or flight' response). This is why a single high reading is not enough for a diabetes diagnosis and must be interpreted in a calm, rested state.",
        ro: "Glucoza este sursa principală de energie, dar trebuie menținută într-un interval strict. Chiar dacă nu ați mâncat, ficatul poate elibera zahăr în sânge în momente de stres sau efort intens (reacția 'luptă sau fugi'). De aceea, o singură valoare mare nu este suficientă pentru diagnostic și trebuie interpretată într-o stare de repaus.",
      },
      stepSpecial: {
        en: "Strict fasting (8–12 hours) is mandatory. Only plain water is allowed. Avoid black coffee, tea, smoking, or intense morning exercise before the draw, as these can trigger the release of stored glucose and falsely elevate your results.",
        ro: "Repaus alimentar strict (8–12 ore). Este permisă doar apa plată. Evitați cafeaua neagră, ceaiul, fumatul sau efortul fizic intens în dimineața recoltării, deoarece acestea pot declanșa eliberarea zahărului stocat în ficat, crescând fals glicemia.",
      },
      belowReference: {
        en: "Hypoglycemia (low blood sugar) is typically defined as below 70 mg/dL. Symptoms include dizziness, hunger, and heart palpitations. In non-diabetics, it can be caused by prolonged fasting, reactive hypoglycemia, or intense exercise.",
        ro: "Hipoglicemia (glicemia scăzută) este definită de obicei sub 70 mg/dL. Simptomele includ amețeala, foamea și palpitațiile. La nediabetici, poate fi cauzată de post prelungit sau efort fizic intens.",
      },
      aboveReference: {
        en: "100-125 mg/dL: Prediabetes (Impaired Fasting Glucose). ≥ 126 mg/dL: Threshold for Diabetes diagnosis (if confirmed by a second test). High levels indicate that insulin is not effectively clearing sugar from your blood.",
        ro: "100-125 mg/dL: Prediabet. ≥ 126 mg/dL: Prag pentru diagnosticul de Diabet (dacă se confirmă la un al doilea test). Nivelurile mari indică faptul că insulina nu elimină eficient zahărul din sânge.",
      },
    },
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
    detailPage: {
      whatItMeasures: {
        en: "It measures the percentage of hemoglobin (a protein in red blood cells) that is coated with sugar. Since red blood cells live for about 3 months, the test reflects your average blood sugar levels over that entire period.",
        ro: "Măsoară procentul de hemoglobină (o proteină din globulele roșii) care este acoperită de zahăr. Deoarece globulele roșii trăiesc aproximativ 3 luni, testul reflectă media glicemiei tale pe întreaga perioadă.",
      },
      whyItMatters: {
        en: "Unlike a standard glucose test that shows sugar levels at a single moment, HbA1c provides a long-term picture. It is the 'gold standard' for diagnosing diabetes and evaluating how well a treatment plan is working.",
        ro: "Spre deosebire de glicemia simplă care arată nivelul de zahăr dintr-un singur moment, HbA1c oferă o imagine pe termen lung. Este 'standardul de aur' pentru diagnosticarea diabetului și evaluarea eficienței tratamentului.",
      },
      typicalTurnaround: {
        en: "Results are typically available within 1–2 working days.",
        ro: "Rezultatele sunt, de regulă, disponibile în 1–2 zile lucrătoare.",
      },
      referenceMinMale: "4.8",
      referenceMaxMale: "5.6",
      referenceMinFemale: "4.8",
      referenceMaxFemale: "5.6",
      unitMeasure: "%",
      longDescription: {
        en: "HbA1c measures your average blood sugar over the past 90 days. It is the 'memory' of your blood sugar. Unlike fasting glucose, it cannot be 'cheated' by dieting a few days before the test. It is essential for distinguishing between a temporary sugar spike (due to stress or a large meal) and chronic high blood sugar.",
        ro: "HbA1c măsoară media glicemiei în ultimele 90 de zile. Este 'memoria' zahărului din sânge. Spre deosebire de glicemia a jeun, acest test nu poate fi 'păcălit' de o dietă de câteva zile înainte de recoltare. Este esențial pentru a distinge între o creștere temporară (stres, masă copioasă) și o glicemie mare cronică.",
      },
      stepSpecial: {
        en: "No fasting required. This is one of the few blood tests that can be performed at any time of the day, as it reflects long-term averages rather than immediate glucose levels.",
        ro: "Nu este necesar repaus alimentar. Este una dintre puținele analize de sânge care poate fi făcută în orice moment al zilei, deoarece reflectă media pe termen lung, nu nivelul imediat de glucoză.",
      },
      belowReference: {
        en: "Levels below 4.0% may be seen in individuals with certain types of anemia or conditions that cause rapid turnover of red blood cells.",
        ro: "Nivelurile sub 4.0% pot apărea la persoanele cu anumite tipuri de anemie sau afecțiuni care accelerează regenerarea globulelor roșii.",
      },
      aboveReference: {
        en: "5.7% - 6.4%: Prediabetes (increased risk). ≥ 6.5%: Diagnostic criteria for Diabetes. For diabetic patients, a target below 7.0% is often recommended to prevent complications.",
        ro: "5.7% - 6.4%: Prediabet (risc crescut). ≥ 6.5%: Criteriu de diagnostic pentru Diabet. Pentru pacienții diabetici, se recomandă adesea o țintă sub 7.0% pentru a preveni complicațiile.",
      },
    },
  },
  {
    id: 30,
    image: "/images/labTests/hormones.webp",
    name: {
      en: "Free T4 (Free Thyroxine)",
      ro: "T4 liber (FT4)",
    },
    description: {
      en: "Measures the active thyroid hormone available to your tissues. Often interpreted together with TSH.",
      ro: "Măsoară hormonul tiroidian activ disponibil pentru țesuturi. Se interpretează de obicei împreună cu TSH.",
    },
    category: "blood",
    subcategory: "hormones",
    detailPage: {
      whatItMeasures: {
        en: "It measures the amount of 'free' thyroxine in your blood—the portion of the T4 hormone that isn't attached to proteins and is ready to be used by your body's cells.",
        ro: "Măsoară cantitatea de tiroxină 'liberă' din sânge — acea porțiune a hormonului T4 care nu este legată de proteine și este gata să fie utilizată de celulele corpului.",
      },
      whyItMatters: {
        en: "FT4 directly reflects how your thyroid gland is functioning. It helps diagnose hyperthyroidism (overactive) or hypothyroidism (underactive) and is used to monitor the effectiveness of thyroid medication.",
        ro: "FT4 reflectă direct modul în care funcționează glanda tiroidă. Ajută la diagnosticarea hipertiroidismului (activitate excesivă) sau a hipotiroidismului (activitate scăzută) și la monitorizarea tratamentului tiroidian.",
      },
      typicalTurnaround: {
        en: "Results are usually available within 1–2 working days.",
        ro: "Rezultatele sunt disponibile, de regulă, în 1–2 zile lucrătoare.",
      },
      referenceMinMale: "0.70",
      referenceMaxMale: "1.48",
      referenceMinFemale: "0.70",
      referenceMaxFemale: "1.48",
      unitMeasure: "ng/dL",
      longDescription: {
        en: "Free T4 (FT4) measures the unbound thyroxine that is actually entering your cells. It is the follow-up test to an abnormal TSH. When TSH is high and FT4 is low or borderline low (as in your case), it confirms that the thyroid is struggling to produce enough hormone. Many factors, including severe illness or certain supplements, can affect these levels.",
        ro: "FT4 măsoară tiroxina nelegată de proteine, cea care ajunge efectiv la celule. Este testul de confirmare după un TSH anormal. Când TSH este mare și FT4 este mic sau la limita de jos, se confirmă faptul că tiroida depune eforturi să producă suficienți hormoni. Factori precum bolile acute sau anumite suplimente pot influența aceste niveluri.",
      },
      stepSpecial: {
        en: "Morning fasting is required. IMPORTANT: If you are already on thyroid medication (e.g., Euthyrox), the blood must be drawn BEFORE you take your daily dose, as the pill will cause a temporary peak that masks your true baseline.",
        ro: "Recoltare dimineața pe nemâncate. IMPORTANT: Dacă urmați deja un tratament tiroidian (ex: Euthyrox), sângele trebuie recoltat ÎNAINTE de a lua doza zilnică, deoarece pastila va cauza un vârf temporar care maschează nivelul tău real.",
      },
      belowReference: {
        en: "Low levels (Hypothyroidism) mean your metabolism is slowing down. Even 'borderline' low levels can contribute to fatigue and brain fog.",
        ro: "Nivelurile scăzute (Hipotiroidism) înseamnă că metabolismul încetinește. Chiar și nivelurile aflate la limita inferioară pot contribui la oboseală și dificultăți de concentrare.",
      },
      aboveReference: {
        en: "High levels (Hyperthyroidism) mean your metabolism is running too fast, often causing heart palpitations, heat intolerance, and weight loss.",
        ro: "Nivelurile crescute (Hipertiroidism) înseamnă că metabolismul funcționează prea repede, cauzând adesea palpitații, intoleranță la căldură și scădere în greutate.",
      },
    },
  },
  {
    id: 31,
    image: "/images/labTests/hormones.webp",
    name: {
      en: "TSH (Thyroid-Stimulating Hormone)",
      ro: "TSH (Hormon stimulator tiroidian)",
    },
    description: {
      en: "Pituitary signal that tells your thyroid how hard to work. A key first-line test for thyroid function.",
      ro: "Semnalul hipofizei care reglează activitatea tiroidei. Test de primă linie pentru funcția tiroidiană.",
    },
    category: "blood",
    subcategory: "hormones",
    detailPage: {
      whatItMeasures: {
        en: "It measures the amount of thyroid-stimulating hormone in the blood. TSH is produced by the pituitary gland to signal the thyroid to produce more or less hormones (T3 and T4).",
        ro: "Măsoară cantitatea de hormon stimulator tiroidian din sânge. TSH este produs de glanda hipofiză pentru a semnala tiroidei să producă mai mulți sau mai puțini hormoni (T3 și T4).",
      },
      whyItMatters: {
        en: "TSH is the most sensitive test for thyroid screening. It often becomes abnormal before thyroid hormone levels (T3/T4) move outside the reference range, making it a powerful early detection tool.",
        ro: "TSH este cel mai sensibil test pentru screening-ul tiroidian. Adesea, acesta devine anormal înainte ca hormonii tiroidieni (T3/T4) să iasă din intervalul de referință, fiind un instrument de detectare timpurie.",
      },
      typicalTurnaround: {
        en: "Results are usually available within 1–2 working days.",
        ro: "Rezultatele sunt disponibile, de regulă, în 1–2 zile lucrătoare.",
      },
      referenceMinMale: "0.35",
      referenceMaxMale: "4.94",
      referenceMinFemale: "0.35",
      referenceMaxFemale: "4.94",
      unitMeasure: "uIU/mL",
      longDescription: {
        en: "TSH acts like a thermostat for your thyroid. If it's high, it means your brain is 'screaming' at the thyroid to work harder because levels might be low. Interestingly, 95% of the healthy population has TSH values between 0.4 - 2.5 uIU/mL, even if the laboratory's 'normal' range goes up to nearly 5.0.",
        ro: "TSH funcționează ca un termostat pentru tiroidă. Dacă este mare, înseamnă că hipofiza 'strigă' la tiroidă să muncească mai mult. Interesant este că 95% din populația sănătoasă are valori între 0.4 - 2.5 uIU/mL, chiar dacă limita 'normală' a laboratorului merge până la aproape 5.0.",
      },
      stepSpecial: {
        en: "Morning fasting is essential. If you are taking biotin (Vitamin B7) or thyroid medication, consult your doctor, as these can significantly interfere with the TSH result.",
        ro: "Recoltarea matinală pe nemâncate este esențială. Dacă luați biotină (Vitamina B7) sau tratament pentru tiroidă, consultați medicul, deoarece acestea pot interfera semnificativ cu rezultatul TSH.",
      },
      belowReference: {
        en: "Low TSH (Hyperthyroidism) can lead to weight loss, rapid heartbeat, and anxiety. The thyroid is overproducing hormones, causing the pituitary to shut down TSH production.",
        ro: "TSH scăzut (Hipertiroidism) poate duce la scădere în greutate, ritm cardiac rapid și anxietate. Tiroida produce prea mulți hormoni, determinând hipofiza să oprească producția de TSH.",
      },
      aboveReference: {
        en: "High TSH (Hypothyroidism) signals a sluggish thyroid. Symptoms often include fatigue, weight gain, and feeling cold. A value slightly above 5.0, as seen in some cases, may indicate subclinical hypothyroidism.",
        ro: "TSH crescut (Hipotiroidism) semnalează o tiroidă leneșă. Simptomele includ oboseală, creștere în greutate și senzație de frig. O valoare ușor peste 5.0 poate indica un hipotiroidism subclinic.",
      },
    },
  },

  // --- FICAT ȘI CĂI BILIARE ---
  {
    id: 40,
    image: "/images/labTests/liver.webp",
    name: {
      en: "AST (SGOT)",
      ro: "TGO (AST)",
    },
    description: {
      en: "An enzyme found in the liver, heart, and muscles. Elevated levels often signal liver or muscle damage.",
      ro: "O enzimă prezentă în ficat, inimă și mușchi. Nivelurile crescute semnalează adesea leziuni hepatice sau musculare.",
    },
    category: "blood",
    subcategory: "liver",
    detailPage: {
      whatItMeasures: {
        en: "It measures the level of aspartate aminotransferase (AST) in your blood. When cells in the liver or muscles are damaged, they leak AST into the bloodstream.",
        ro: "Măsoară nivelul de aspartat aminotransferază (AST) din sânge. Când celulele din ficat sau mușchi sunt deteriorate, acestea eliberează AST în fluxul sanguin.",
      },
      whyItMatters: {
        en: "It is used to check for liver damage and to monitor treatment for liver disease. Because it's also found in muscles, it's often compared with ALT to pinpoint if the issue is specifically in the liver.",
        ro: "Este utilizat pentru a verifica leziunile hepatice și pentru a monitoriza tratamentul bolilor de ficat. Deoarece se găsește și în mușchi, este adesea comparat cu TGP pentru a identifica dacă problema este strict la ficat.",
      },
      typicalTurnaround: {
        en: "Results are typically available within 1–2 working days.",
        ro: "Rezultatele sunt, de regulă, disponibile în 1–2 zile lucrătoare.",
      },
      referenceMinMale: "5",
      referenceMaxMale: "37",
      referenceMinFemale: "5",
      referenceMaxFemale: "31",
      unitMeasure: "U/L",
      longDescription: {
        en: "AST is found in several organs, including the liver, heart, and muscles. Because of this, it is slightly less specific for the liver than ALT. However, comparing AST and ALT (the De Ritis ratio) is a powerful diagnostic tool; for instance, a ratio where AST is significantly higher than ALT may suggest alcohol-related liver stress or muscle injury.",
        ro: "TGO se găsește în mai multe organe, inclusiv în ficat, inimă și mușchi. Din acest motiv, este puțin mai puțin specific pentru ficat decât TGP. Totuși, compararea TGO cu TGP (raportul De Ritis) este un instrument de diagnostic util; de exemplu, un raport în care TGO este mult mai mare decât TGP poate sugera un stres hepatic cauzat de alcool sau o leziune musculară.",
      },
      stepSpecial: {
        en: "Morning fasting (8-12h). Strictly avoid strenuous physical activity for 24 hours before the test. Intense exercise can cause AST to leak from muscles into the blood, leading to a falsely high liver score.",
        ro: "Recoltare dimineața pe nemâncate (8-12h). Evitați strict efortul fizic intens cu 24 de ore înainte. Sportul intens poate face ca TGO să treacă din mușchi în sânge, ducând la un rezultat fals mărit.",
      },
      belowReference: {
        en: "Low levels are normal and indicate no significant cell damage in the liver or muscles.",
        ro: "Nivelurile scăzute sunt normale și indică absența leziunilor celulare semnificative la nivelul ficatului sau mușchilor.",
      },
      aboveReference: {
        en: "Elevated levels can signal liver inflammation (hepatitis) or muscle injury. If AST is high but ALT is normal, the source is likely muscular rather than hepatic.",
        ro: "Nivelurile crescute pot semnala inflamația ficatului (hepatită) sau leziuni musculare. Dacă TGO este mare, dar TGP este normal, sursa este probabil musculară, nu hepatică.",
      },
    },
  },
  {
    id: 41,
    image: "/images/labTests/liver.webp",
    name: {
      en: "ALT (SGPT)",
      ro: "TGP (ALT)",
    },
    description: {
      en: "The most specific enzyme for liver health. High levels usually indicate inflammation or damage to liver cells.",
      ro: "Cea mai specifică enzimă pentru sănătatea ficatului. Nivelurile mari indică, de regulă, inflamația sau lezarea celulelor hepatice.",
    },
    category: "blood",
    subcategory: "liver",
    detailPage: {
      whatItMeasures: {
        en: "It measures the level of alanine aminotransferase (ALT) in the blood. ALT is found almost exclusively in the liver, making it a very precise indicator of liver health.",
        ro: "Măsoară nivelul de alanin aminotransferază (ALT) din sânge. TGP se găsește aproape exclusiv în ficat, fiind un indicator foarte precis al sănătății hepatice.",
      },
      whyItMatters: {
        en: "ALT is often the first enzyme to rise when the liver is stressed. It is used to screen for hepatitis, fatty liver, and damage caused by alcohol or long-term medication use.",
        ro: "TGP este adesea prima enzimă care crește când ficatul este stresat. Este folosită pentru screening-ul hepatitei, ficatului gras și al daunelor cauzate de alcool sau medicamente.",
      },
      typicalTurnaround: {
        en: "Results are typically available within 1–2 working days.",
        ro: "Rezultatele sunt, de regulă, disponibile în 1–2 zile lucrătoare.",
      },
      referenceMinMale: "7",
      referenceMaxMale: "41",
      referenceMinFemale: "7",
      referenceMaxFemale: "33",
      unitMeasure: "U/L",
      longDescription: {
        en: "ALT is primarily found in the liver, making it more specific for liver damage than other enzymes. It is the most sensitive marker for fatty liver (steatosis). Levels can fluctuate based on BMI and even the time of day, but a persistent elevation usually warrants further investigation like an ultrasound.",
        ro: "TGP se găsește în principal în ficat, fiind mult mai specific pentru acest organ decât alte enzime. Este cel mai sensibil marker pentru ficatul gras (steatoză). Nivelurile pot fluctua în funcție de indicele de masă corporală (IMC), însă o creștere persistentă necesită de obicei o ecografie.",
      },
      stepSpecial: {
        en: "Morning fasting (8-12h). Avoid alcohol and intense muscle-straining exercise for 24 hours before the test, as muscle repair can sometimes cause slight elevations in transaminases.",
        ro: "Recoltare dimineața pe nemâncate (8-12h). Evitați alcoolul și efortul fizic intens (sala) cu 24 de ore înainte, deoarece repararea musculară poate crește ușor nivelul transaminazelor.",
      },
      belowReference: {
        en: "Low ALT levels are normal and indicate no current liver cell inflammation.",
        ro: "Nivelurile scăzute de TGP sunt normale și indică absența inflamației celulelor hepatice.",
      },
      aboveReference: {
        en: "Elevated ALT (over 41 for men, 33 for women) points to liver stress. Common causes include fatty liver, viral hepatitis, or the side effects of certain medications (like statins or heavy use of paracetamol).",
        ro: "TGP mărit (peste 41 la bărbați, 33 la femei) indică un stres hepatic. Cauzele comune includ ficatul gras, hepatitele virale sau efectele secundare ale unor medicamente (precum statinele sau excesul de paracetamol).",
      },
    },
  },
  {
    id: 42,
    image: "/images/labTests/liver.webp",
    name: {
      en: "Gamma-GT (GGT)",
      ro: "Gama GT (GGT)",
    },
    description: {
      en: "A sensitive enzyme used to detect bile duct problems and monitor alcohol intake.",
      ro: "O enzimă sensibilă utilizată pentru detectarea problemelor biliare și monitorizarea consumului de alcool.",
    },
    category: "blood",
    subcategory: "liver",
    detailPage: {
      whatItMeasures: {
        en: "It measures the amount of GGT enzyme in the blood. GGT is highly sensitive to changes in the bile ducts and is often the first liver enzyme to rise when a bile duct is blocked.",
        ro: "Măsoară cantitatea de enzimă GGT din sânge. GGT este foarte sensibilă la schimbările căilor biliare și este adesea prima enzimă care crește când un canal biliar este blocat.",
      },
      whyItMatters: {
        en: "It helps distinguish between bone disease and liver disease when other tests (like Alkaline Phosphatase) are high. It's also a primary marker for monitoring alcohol-induced liver stress.",
        ro: "Ajută la distingerea între bolile osoase și cele hepatice când alte analize sunt mărite. Este, de asemenea, un marker principal pentru monitorizarea stresului hepatic cauzat de alcool.",
      },
      typicalTurnaround: {
        en: "Results are typically available within 1–2 working days.",
        ro: "Rezultatele sunt, de regulă, disponibile în 1–2 zile lucrătoare.",
      },
      referenceMinMale: "8",
      referenceMaxMale: "60",
      referenceMinFemale: "5",
      referenceMaxFemale: "36",
      unitMeasure: "U/L",
      longDescription: {
        en: "GGT is the most sensitive indicator of liver and bile duct injury. Unlike other liver enzymes, GGT is particularly affected by alcohol and certain drugs (like anti-seizure medications). If GGT is high but other liver tests are normal, alcohol or medication is likely the cause. If Alkaline Phosphatase (ALP) is also high, it strongly points to a bile duct issue.",
        ro: "GGT este cel mai sensibil indicator al afectării ficatului și a căilor biliare. Spre deosebire de alte enzime, GGT este afectată în mod special de alcool și anumite medicamente. Dacă GGT este mare, dar restul testelor de ficat sunt normale, cauza este probabil alcoolul sau medicamentele. Dacă și Fosfataza Alcalină (ALP) este mare, indică o problemă biliară.",
      },
      stepSpecial: {
        en: "Morning fasting (8-12h). Strictly avoid alcohol for 24-48 hours before the test. Even a single glass of wine the night before can falsely elevate GGT levels in sensitive individuals.",
        ro: "Recoltare dimineața pe nemâncate (8-12h). Evitați strict alcoolul cu 24-48 de ore înainte. Chiar și un singur pahar de vin băut în seara precedentă poate crește fals nivelul GGT la persoanele sensibile.",
      },
      belowReference: {
        en: "Low levels are normal and indicate no current bile duct or liver irritation.",
        ro: "Nivelurile scăzute sunt normale și indică absența iritației hepatice sau biliare.",
      },
      aboveReference: {
        en: "High levels (over 60 for men, 36 for women) can indicate bile flow blockage (cholestasis), fatty liver, or chronic alcohol consumption. It is also an early marker for metabolic syndrome.",
        ro: "Nivelurile mari pot indica blocarea fluxului biliar (colestază), ficat gras sau consum cronic de alcool. Este, de asemenea, un marker timpuriu pentru sindromul metabolic.",
      },
    },
  },
  {
    id: 43,
    image: "/images/labTests/liver.webp",
    name: {
      en: "Total Bilirubin",
      ro: "Bilirubină totală",
    },
    description: {
      en: "A yellow pigment formed during the breakdown of red blood cells. High levels can cause jaundice.",
      ro: "Un pigment galben format prin descompunerea globulelor roșii. Nivelurile mari pot cauza icter.",
    },
    category: "blood",
    subcategory: "liver",
    detailPage: {
      whatItMeasures: {
        en: "It measures the total amount of bilirubin in the blood. Bilirubin is a waste product from the natural recycling of old red blood cells, which the liver normally processes and excretes.",
        ro: "Măsoară cantitatea totală de bilirubină din sânge. Bilirubina este un reziduu din reciclarea naturală a globulelor roșii vechi, pe care ficatul le procesează și le elimină în mod normal.",
      },
      whyItMatters: {
        en: "It is used to evaluate liver function and to diagnose jaundice (yellowing of eyes/skin). High levels can indicate liver disease, bile duct blockage, or an abnormal rate of red blood cell destruction (hemolysis).",
        ro: "Este utilizată pentru a evalua funcția hepatică și pentru a diagnostica icterul. Nivelurile mari pot indica boli de ficat, blocarea căilor biliare sau o distrugere anormală a globulelor roșii (hemoliză).",
      },
      typicalTurnaround: {
        en: "Results are typically available within 24 hours.",
        ro: "Rezultatele sunt, de regulă, disponibile în 24 de ore.",
      },
      referenceMinMale: "0.1",
      referenceMaxMale: "1.2",
      referenceMinFemale: "0.1",
      referenceMaxFemale: "1.2",
      unitMeasure: "mg/dL",
      longDescription: {
        en: "Total bilirubin is the sum of direct and indirect bilirubin. A common finding is a slightly elevated level due to Gilbert’s Syndrome, a harmless genetic trait. However, significant elevations require investigation of the liver and bile ducts. Fasting is crucial as a meal can temporarily lower bilirubin levels, potentially masking a slight elevation.",
        ro: "Bilirubina totală reprezintă suma fracțiunilor directă și indirectă. O cauză frecventă a creșterilor ușoare este Sindromul Gilbert, o trăsătură genetică inofensivă. Totuși, creșterile semnificative necesită investigarea ficatului și a căilor biliare. Repausul alimentar este crucial, deoarece o masă poate scădea temporar nivelul bilirubinei.",
      },
      stepSpecial: {
        en: "Morning fasting (8-12h) is mandatory. Avoid alcohol and strenuous exercise for 24 hours before the test. Prolonged fasting (over 24h) can actually cause a spike in bilirubin levels in some individuals.",
        ro: "Recoltare dimineața pe nemâncate (8-12h) este obligatorie. Evitați alcoolul și efortul fizic intens cu 24h înainte. Atenție: un post prelungit (peste 24h) poate crește paradoxal nivelul bilirubinei la anumite persoane.",
      },
      belowReference: {
        en: "Low levels are generally not clinically significant and are often linked to high caffeine intake or certain medications like vitamin C.",
        ro: "Nivelurile scăzute nu au, de regulă, semnificație clinică, fiind uneori legate de consumul ridicat de cofeină sau anumite medicamente precum vitamina C.",
      },
      aboveReference: {
        en: "Elevated levels (hyperbilirubinemia) can cause jaundice. If only indirect bilirubin is high, it may suggest blood breakdown issues; if direct bilirubin is high, it usually points to liver or bile duct obstruction.",
        ro: "Nivelurile crescute (hiperbilirubinemie) pot cauza icter. Dacă doar bilirubina indirectă este mare, poate sugera distrugerea globulelor roșii; dacă cea directă este mare, indică de obicei o problemă biliară sau hepatică.",
      },
    },
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
    detailPage: {
      whatItMeasures: {
        en: "It measures the level of creatinine, a waste product that comes from the normal wear and tear on muscles of the body. Healthy kidneys filter creatinine from the blood and pass it out of the body through urine.",
        ro: "Măsoară nivelul de creatinină, un produs rezidual care provine din uzura normală a mușchilor corpului. Rinichii sănătoși filtrează creatinina din sânge și o elimină prin urină.",
      },
      whyItMatters: {
        en: "Creatinine is a reliable indicator of kidney function. If your kidney function is reduced, creatinine levels in the blood rise. It is also used to calculate the eGFR (filtration rate).",
        ro: "Creatinina este un indicator de încredere al funcției renale. Dacă funcția rinichilor este redusă, nivelul creatininei din sânge crește. Este, de asemenea, utilizată pentru a calcula rata de filtrare (eGFR).",
      },
      typicalTurnaround: {
        en: "Results are typically available within 24 hours.",
        ro: "Rezultatele sunt, de regulă, disponibile în 24 de ore.",
      },
      referenceMinMale: "0.6",
      referenceMaxMale: "1.3",
      referenceMinFemale: "0.5",
      referenceMaxFemale: "1.1",
      unitMeasure: "mg/dL",
      longDescription: {
        en: "Creatinine levels are directly related to muscle mass. This is why men typically have higher levels than women, and athletes have higher levels than sedentary people. It is the most stable marker of kidney function, but it's important to know that a high-meat diet or creatine supplements can cause a temporary spike unrelated to kidney health.",
        ro: "Nivelul creatininei este direct corelat cu masa musculară. De aceea, bărbații au valori mai mari decât femeile, iar sportivii valori mai mari decât persoanele sedentare. Este cel mai stabil marker al funcției renale, însă dieta bogată în carne sau suplimentele cu creatină pot cauza o creștere temporară care nu ține de sănătatea rinichilor.",
      },
      stepSpecial: {
        en: "Morning fasting (8-12h) is required. Strictly avoid intense physical exercise and consumption of red meat for 24 hours before the test to ensure an accurate baseline.",
        ro: "Recoltare dimineața pe nemâncate (8-12h). Evitați strict efortul fizic intens și consumul de carne roșie cu 24 de ore înainte de test pentru a asigura un rezultat bazal corect.",
      },
      belowReference: {
        en: "Low levels are rare and often linked to low muscle mass (sarcopenia), severe malnutrition, or advanced liver disease.",
        ro: "Nivelurile scăzute sunt rare și adesea legate de o masă musculară redusă (sarcopenie), malnutriție severă sau boli hepatice avansate.",
      },
      aboveReference: {
        en: "High levels suggest impaired kidney filtration. However, if the increase is slight, it could be due to dehydration or recent muscle injury. It should always be interpreted alongside the eGFR score.",
        ro: "Nivelurile mari sugerează o filtrare renală deficitară. Totuși, dacă creșterea este ușoară, poate fi cauzată de deshidratare sau efort muscular recent. Trebuie interpretată întotdeauna împreună cu scorul eGFR.",
      },
    },
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
    detailPage: {
      whatItMeasures: {
        en: "Urea is a waste product created in the liver when the body breaks down proteins. The kidneys filter urea out of the blood and into the urine.",
        ro: "Ureea este un produs rezidual creat în ficat atunci când corpul descompune proteinele. Rinichii filtrează ureea din sânge și o elimină prin urină.",
      },
      whyItMatters: {
        en: "Checking urea levels helps doctors see how well your kidneys and liver are working. It is often used to monitor patients with kidney failure or those undergoing dialysis.",
        ro: "Verificarea nivelului de uree ajută medicii să vadă cât de bine funcționează rinichii și ficatul. Este adesea folosită pentru a monitoriza pacienții cu insuficiență renală sau pe cei care fac dializă.",
      },
      typicalTurnaround: {
        en: "Results are typically available within 24 hours.",
        ro: "Rezultatele sunt, de regulă, disponibile în 24 de ore.",
      },
      referenceMinMale: "19.0",
      referenceMaxMale: "44.0",
      referenceMinFemale: "19.0",
      referenceMaxFemale: "44.0",
      unitMeasure: "mg/dL",
      longDescription: {
        en: "Urea levels are highly sensitive to hydration and protein intake. While creatinine reflects muscle mass, urea reflects protein metabolism. Dehydration is a common cause of a temporary spike in urea. It is best evaluated using the BUN/Creatinine ratio to distinguish between kidney issues and other causes like dehydration.",
        ro: "Nivelul ureei este foarte sensibil la hidratare și la aportul de proteine. În timp ce creatinina reflectă masa musculară, ureea reflectă metabolismul proteinelor. Deshidratarea este o cauză comună a creșterii temporare a ureei. Este evaluată cel mai bine împreună cu creatinina pentru a distinge între problemele renale și alte cauze.",
      },
      stepSpecial: {
        en: "Morning fasting (8-12 hours) is recommended. Ensure proper hydration (water) before the test, as dehydration can falsely elevate urea levels.",
        ro: "Se recomandă repaus alimentar dimineața (8-12 ore). Asigurați o hidratare corespunzătoare cu apă înainte de test, deoarece deshidratarea poate crește fals nivelul ureei.",
      },
      belowReference: {
        en: "Low levels are uncommon but can be seen in severe liver disease, malnutrition, or overhydration.",
        ro: "Nivelurile scăzute sunt neobișnuite, dar pot apărea în boli hepatice severe, malnutriție sau suprahidratare.",
      },
      aboveReference: {
        en: "High levels (uremia) can suggest kidney issues, but also high protein intake, dehydration, or gastrointestinal bleeding. If urea is high but creatinine is normal, dehydration is often the culprit.",
        ro: "Nivelurile mari (uremie) pot sugera probleme renale, dar și un consum ridicat de proteine, deshidratare sau sângerări digestive. Dacă ureea este mare, dar creatinina e normală, deshidratarea este adesea vinovată.",
      },
    },
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
    detailPage: {
      whatItMeasures: {
        en: "It measures the amount of uric acid in the blood, which is produced when the body breaks down purines (substances found in certain foods and drinks).",
        ro: "Măsoară cantitatea de acid uric din sânge, care este produs atunci când corpul descompune purinele (substanțe găsite în anumite alimente și băuturi).",
      },
      whyItMatters: {
        en: "High levels of uric acid can lead to the formation of crystals in the joints (causing gout) or in the kidneys (causing kidney stones). It is also monitored during certain medical treatments like chemotherapy.",
        ro: "Nivelurile mari de acid uric pot duce la formarea de cristale în articulații (cauzând guta) sau în rinichi (cauzând pietre la rinichi). Este monitorizat și în timpul unor tratamente medicale precum chimioterapia.",
      },
      typicalTurnaround: {
        en: "Results are typically available within 24 hours.",
        ro: "Rezultatele sunt, de regulă, disponibile în 24 de ore.",
      },
      referenceMinMale: "3.4",
      referenceMaxMale: "7.0",
      referenceMinFemale: "2.4",
      referenceMaxFemale: "5.7",
      unitMeasure: "mg/dL",
      longDescription: {
        en: "Most uric acid dissolves in blood and is excreted by the kidneys. Diet plays a crucial role; foods high in purines (red meat, organ meats, seafood) and fructose-sweetened drinks can spike levels. Interestingly, high doses of Vitamin C can actually lower uric acid levels in some people, potentially masking the true result.",
        ro: "Majoritatea acidului uric este eliminat de rinichi. Dieta este crucială: carnea roșie, organele, fructele de mare și băuturile cu fructoză pot crește nivelul. Interesant este că dozele mari de Vitamina C pot scădea nivelul acidului uric, mascând uneori rezultatul real.",
      },
      stepSpecial: {
        en: "Morning fasting is required. Strictly avoid alcohol for 24 hours before the test, as it severely hinders the kidneys' ability to excrete uric acid, leading to falsely elevated results.",
        ro: "Recoltare dimineața pe nemâncate. Evitați strict alcoolul cu 24 de ore înainte de test, deoarece acesta blochează capacitatea rinichilor de a elimina acidul uric, ducând la rezultate fals crescute.",
      },
      belowReference: {
        en: "Low levels (hypouricemia) are rare and usually not concerning, but can sometimes be seen in liver disease or with certain medications.",
        ro: "Nivelurile scăzute (hipouricemie) sunt rare și de obicei nu sunt îngrijorătoare, dar pot apărea în boli hepatice sau sub influența anumitor medicamente.",
      },
      aboveReference: {
        en: "High levels (hyperuricemia) can cause needle-like crystals to form in joints (gout) or kidneys (stones). Chronic high levels are also linked to metabolic syndrome.",
        ro: "Nivelurile crescute (hiperuricemie) pot cauza formarea cristalelor în articulații (gută) sau rinichi (pietre). Nivelurile mari cronice sunt legate și de sindromul metabolic.",
      },
    },
  },
  {
    id: 54,
    image: "/images/labTests/kidney.webp",
    name: {
      en: "eGFR (Estimated Glomerular Filtration Rate)",
      ro: "eGFR (Rată estimată de filtrare glomerulară)",
    },
    description: {
      en: "A calculated value that estimates how well your kidneys filter blood based on your creatinine level.",
      ro: "O valoare calculată care estimează cât de bine îți filtrează rinichii sângele, pe baza nivelului de creatinină.",
    },
    category: "blood",
    subcategory: "kidney",
    detailPage: {
      whatItMeasures: {
        en: "Instead of a direct measurement, eGFR is a calculation that uses your serum creatinine level, age, sex, and sometimes race to estimate your kidney's filtration efficiency.",
        ro: "În loc de o măsurătoare directă, eGFR este un calcul care folosește nivelul creatininei, vârsta, sexul și uneori rasa pentru a estima eficiența filtrării renale.",
      },
      whyItMatters: {
        en: "It is the best overall way to measure kidney function and determine the stage of kidney disease. It helps doctors decide if medication dosages need to be adjusted.",
        ro: "Este cea mai bună metodă generală de a măsura funcția renală și de a determina stadiul unei boli de rinichi. Ajută medicii să decidă dacă dozele de medicamente trebuie ajustate.",
      },
      typicalTurnaround: {
        en: "Available alongside the creatinine result (usually 24 hours).",
        ro: "Disponibil împreună cu rezultatul creatininei (de regulă 24 de ore).",
      },
      referenceMinMale: "90",
      referenceMaxMale: "150",
      referenceMinFemale: "90",
      referenceMaxFemale: "150",
      unitMeasure: "mL/min/1.73 m²",
      longDescription: {
        en: "eGFR estimates how much blood passes through the glomeruli (tiny filters in the kidneys) each minute. A result above 90 is considered normal. Values between 60-89 may indicate early stage kidney issues and should be monitored. Factors like muscle mass, diet, and age significantly affect this calculation.",
        ro: "eGFR estimează volumul de sânge filtrat de rinichi în fiecare minut. O valoare de peste 90 este considerată normală. Valorile între 60-89 pot indica o scădere ușoară a funcției renale și trebuie monitorizate. Masa musculară, dieta și vârsta influențează semnificativ acest calcul.",
      },
      stepSpecial: {
        en: "Preparation is identical to Serum Creatinine: Morning fasting (8-12h). Avoid cooked meat and intense exercise for 24 hours before the test to prevent false results.",
        ro: "Pregătirea este identică cu cea pentru Creatinina serică: Repaus alimentar dimineața (8-12h). Evitați consumul de carne gătită și efortul fizic intens cu 24h înainte pentru a evita rezultate fals scăzute.",
      },
      belowReference: {
        en: "Results below 60 mL/min/1.73m² for more than 3 months are a key indicator of chronic kidney disease (CKD).",
        ro: "Rezultatele sub 60 mL/min/1.73m² menținute timp de peste 3 luni sunt principalul indicator al bolii cronice de rinichi (BCR).",
      },
      aboveReference: {
        en: "Values above 90 are considered normal. Extremely high values are rarely a clinical concern but should be discussed with a doctor if they appear alongside other symptoms.",
        ro: "Valorile peste 90 sunt considerate normale. Valorile extrem de mari nu reprezintă de obicei o problemă clinică, dar trebuie discutate cu medicul dacă apar alte simptome.",
      },
    },
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
    detailPage: {
      whatItMeasures: {
        en: "It evaluates the physical, chemical, and microscopic characteristics of urine. This includes appearance (color/clarity), pH, specific gravity, and the presence of substances like protein, glucose, nitrites, and blood cells.",
        ro: "Evaluează caracteristicile fizice, chimice și microscopice ale urinei. Aceasta include aspectul (culoare/claritate), pH-ul, densitatea și prezența unor substanțe precum proteinele, glucoza, nitriții și celulele sanguine.",
      },
      whyItMatters: {
        en: "It is a versatile screening tool used to detect urinary tract infections (UTI), monitor kidney disorders, or screen for metabolic conditions like diabetes. It can often reveal problems even before you have noticeable symptoms.",
        ro: "Este un instrument de screening versatil utilizat pentru detectarea infecțiilor urinare (ITU), monitorizarea afecțiunilor renale sau depistarea bolilor metabolice precum diabetul. Poate dezvălui probleme chiar înainte de apariția simptomelor.",
      },
      typicalTurnaround: {
        en: "Results are usually available within 24 hours.",
        ro: "Rezultatele sunt, de regulă, disponibile în 24 de ore.",
      },
      referenceMinMale: "N/A",
      referenceMaxMale: "N/A",
      referenceMinFemale: "N/A",
      referenceMaxFemale: "N/A",
      unitMeasure: "N/A",
      longDescription: {
        en: "Urinalysis consists of three parts: Visual exam (checks for cloudiness or unusual color), Chemical exam (using a dipstick to test for 10+ substances), and Microscopic exam (identifying cells, crystals, or bacteria). Factors like certain foods (beets/blackberries) or medications can change urine color without indicating a health problem.",
        ro: "Sumarul de urină constă în trei părți: Examenul vizual (verifică turbiditatea sau culoarea neobișnuită), Examenul chimic (folosind un strip pentru a testa peste 10 substanțe) și Examenul microscopic (identificarea celulelor, cristalelor sau bacteriilor). Anumite alimente (sfecla) sau medicamente pot schimba culoarea urinei fără a indica o problemă de sănătate.",
      },
      stepSpecial: {
        en: "Mandatory: Use a sterile container. Perform local hygiene before collection. Collect the 'mid-stream' portion of the first morning urine. Deliver the sample to the lab within 2 hours.",
        ro: "Obligatoriu: Utilizați un recipient steril. Efectuați toaleta locală înainte de recoltare. Colectați 'mijlocul jetului' din prima urină de dimineață. Aduceți proba la laborator în maximum 2 ore.",
      },
      belowReference: {
        en: "N/A",
        ro: "N/A",
      },
      aboveReference: {
        en: "Presence of glucose, protein, nitrites, or high levels of white/red blood cells usually indicates a condition that requires medical follow-up (infection, diabetes, or kidney issues).",
        ro: "Prezența glucozei, proteinelor, nitriților sau a unui nivel ridicat de leucocite/hematii indică de obicei o afecțiune care necesită consult medical (infecție, diabet sau probleme renale).",
      },
    },
  },

  // --- MINERALE ȘI VITAMINE ---

  {
    id: 60,
    image: "/images/labTests/minerals.webp",
    name: {
      en: "Total Calcium",
      ro: "Calciu total",
    },
    description: {
      en: "Measures all calcium in serum. Vital for bone health, muscle contraction, and nerve signaling.",
      ro: "Măsoară calciul total din ser. Vital pentru sănătatea oaselor, contracția musculară și semnalizarea nervoasă.",
    },
    category: "blood",
    subcategory: "minerals",
    detailPage: {
      whatItMeasures: {
        en: "It measures the total amount of calcium in your blood, including the portion bound to proteins (like albumin) and the 'free' portion. Calcium is one of the most important minerals in the body.",
        ro: "Măsoară cantitatea totală de calciu din sânge, incluzând porțiunea legată de proteine (cum este albumina) și porțiunea 'liberă'. Calciul este unul dintre cele mai importante minerale din corp.",
      },
      whyItMatters: {
        en: "It is used to screen for bone diseases, kidney issues, and disorders of the parathyroid gland. It is also essential for monitoring patients with muscle cramps or numbness in the fingers.",
        ro: "Este utilizat pentru depistarea bolilor osoase, a problemelor renale și a tulburărilor glandei paratiroide. Este esențial și pentru monitorizarea pacienților cu crampe musculare sau amorțeli.",
      },
      typicalTurnaround: {
        en: "Results are typically available within 24 hours.",
        ro: "Rezultatele sunt, de regulă, disponibile în 24 de ore.",
      },
      referenceMinMale: "9.0",
      referenceMaxMale: "10.2",
      referenceMinFemale: "9.0",
      referenceMaxFemale: "10.0",
      unitMeasure: "mg/dL",
      longDescription: {
        en: "Because about half of blood calcium is carried by albumin, your doctor may look at both results together. If albumin levels are abnormal, the 'total calcium' value must be corrected. Proper calcium levels are maintained by the parathyroid glands and Vitamin D.",
        ro: "Deoarece aproximativ jumătate din calciul din sânge este transportat de albumină, medicul va analiza ambele rezultate împreună. Dacă nivelul de albumină este anormal, valoarea calciului total trebuie corectată. Nivelul optim este menținut de glandele paratiroide și Vitamina D.",
      },
      stepSpecial: {
        en: "Standard procedure: Fasting is recommended. Avoid taking calcium supplements for 24 hours before the test.",
        ro: "Procedură standard: Se recomandă repaus alimentar. Evitați administrarea suplimentelor de calciu cu 24 de ore înainte de test.",
      },
      belowReference: {
        en: "Low levels (hypocalcemia) can be caused by vitamin D deficiency, kidney failure, or parathyroid issues. Symptoms include muscle cramps and tingling.",
        ro: "Nivelurile scăzute (hipocalcemie) pot fi cauzate de deficiența de vitamina D, insuficiență renală sau probleme paratiroidiene. Simptomele includ crampe și furnicături.",
      },
      aboveReference: {
        en: "High levels (hypercalcemia) can indicate overactive parathyroid glands, excessive vitamin D intake, or, in some cases, bone-related disorders.",
        ro: "Nivelurile crescute (hipercalcemie) pot indica o glandă paratiroidă hiperactivă, consum excesiv de vitamina D sau, în unele cazuri, afecțiuni osoase.",
      },
    },
  },
  {
    id: 61,
    image: "/images/labTests/minerals.webp",
    name: {
      en: "Ionic (Ionized) Calcium",
      ro: "Calciu ionic (ionizat)",
    },
    description: {
      en: "The physiologically active fraction of calcium, reflecting what is actually available to your cells.",
      ro: "Fracțiunea biologic activă a calciului, reflectând ceea ce este cu adevărat disponibil pentru celule.",
    },
    category: "blood",
    subcategory: "minerals",
    detailPage: {
      whatItMeasures: {
        en: "This test measures only the 'free' or ionized calcium in your blood, which is the form that actively participates in muscle, nerve, and heart functions.",
        ro: "Măsoară doar calciul 'liber' sau ionizat din sânge, care este forma ce participă activ la funcțiile musculare, nervoase și cardiace.",
      },
      whyItMatters: {
        en: "Ionized calcium provides a more accurate picture of calcium status in patients with abnormal protein levels, during surgery, or in critical care settings.",
        ro: "Calciul ionic oferă o imagine mai exactă a stării calciului la pacienții cu niveluri anormale de proteine, în timpul intervențiilor chirurgicale sau în stare critică.",
      },
      typicalTurnaround: {
        en: "Results are typically available within 24 hours.",
        ro: "Rezultatele sunt, de regulă, disponibile în 24 de ore.",
      },
      referenceMinMale: "4.2",
      referenceMaxMale: "5.2",
      referenceMinFemale: "4.2",
      referenceMaxFemale: "5.2",
      unitMeasure: "mg/dL",
      longDescription: {
        en: "Unlike total calcium, ionized calcium is not affected by changes in albumin levels. However, it is very sensitive to blood pH. If blood becomes more acidic or alkaline, the amount of ionized calcium shifts, which is why samples often require special handling to prevent CO2 loss.",
        ro: "Spre deosebire de calciul total, cel ionic nu este influențat de nivelul albuminei. Totuși, este foarte sensibil la pH-ul sângelui. Dacă sângele devine mai acid sau alcalin, fracțiunea ionică se modifică.",
      },
      stepSpecial: {
        en: "Fasting for 8–12 hours is recommended (water only). Avoid intense physical exercise and alcohol consumption for 24 hours prior, as these can affect mineral balance.",
        ro: "Se recomandă repaus alimentar de 8–12 ore (doar apă). Evitați efortul fizic intens și consumul de alcool cu 24 de ore înainte, deoarece pot influența echilibrul mineral.",
      },
      belowReference: {
        en: "Low ionized calcium can cause neuromuscular irritability, even if total calcium appears normal.",
        ro: "Un calciu ionic scăzut poate cauza iritabilitate neuromusculară, chiar dacă nivelul calciului total pare normal.",
      },
      aboveReference: {
        en: "High ionized calcium can signal hyperparathyroidism or other underlying conditions that disrupt mineral balance.",
        ro: "Un calciu ionic crescut poate semnala hiperparatiroidism sau alte afecțiuni care perturbă echilibrul mineral.",
      },
    },
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
    detailPage: {
      whatItMeasures: {
        en: "It measures the amount of magnesium in the serum. Magnesium is an essential electrolyte involved in over 300 biochemical reactions in the body.",
        ro: "Măsoară cantitatea de magneziu din ser. Magneziul este un electrolit esențial implicat în peste 300 de reacții biochimice în organism.",
      },
      whyItMatters: {
        en: "It is used to investigate symptoms like tremors, muscle cramps, or heart arrhythmias. It's also important for monitoring patients with malabsorption or kidney issues.",
        ro: "Este utilizat pentru a investiga simptome precum tremurături, crampe musculare sau aritmii cardiace. Este important și în monitorizarea pacienților cu malabsorbție.",
      },
      typicalTurnaround: {
        en: "Results are typically available within 24 hours.",
        ro: "Rezultatele sunt, de regulă, disponibile în 24 de ore.",
      },
      referenceMinMale: "1.6",
      referenceMaxMale: "2.6",
      referenceMinFemale: "1.6",
      referenceMaxFemale: "2.6",
      unitMeasure: "mg/dL",
      longDescription: {
        en: "Only about 1% of the body's total magnesium is found in the blood; the rest is stored in bones and muscles. This means a blood test might appear normal even if total body stores are low. It is often checked alongside calcium and potassium because these minerals work together.",
        ro: "Doar aproximativ 1% din magneziul total al corpului se află în sânge; restul este stocat în oase și mușchi. Asta înseamnă că testul poate părea normal chiar dacă depozitele sunt mici. Se verifică des împreună cu calciul și potasiul.",
      },
      stepSpecial: {
        en: "Morning fasting (8-12 hours) is recommended. Avoid taking magnesium supplements for 24 hours before the test.",
        ro: "Se recomandă recoltarea dimineața pe nemâncate (8-12 ore). Evitați administrarea suplimentelor de magneziu cu 24 de ore înainte.",
      },
      belowReference: {
        en: "Low levels (hypomagnesemia) are common in chronic alcoholism, malnutrition, or with certain medications (like diuretics). Can cause fatigue and muscle weakness.",
        ro: "Nivelurile scăzute (hipomagnezemie) sunt frecvente în alcoolismul cronic, malnutriție sau la utilizarea diureticelor. Pot cauza oboseală și slăbiciune musculară.",
      },
      aboveReference: {
        en: "High levels (hypermagnesemia) are rare but can occur in advanced kidney disease or from excessive use of magnesium-containing antacids.",
        ro: "Nivelurile crescute (hipermagnezemie) sunt rare, dar pot apărea în boli renale avansate sau prin consumul excesiv de antiacide cu magneziu.",
      },
    },
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
    detailPage: {
      whatItMeasures: {
        en: "It measures the iron that is currently being transported in the blood, mostly bound to a protein called transferrin.",
        ro: "Măsoară fierul care este transportat în sânge în momentul respectiv, majoritatea fiind legat de o proteină numită transferină.",
      },
      whyItMatters: {
        en: "It helps diagnose iron-deficiency anemia or iron overload (hemochromatosis). It is usually ordered with other tests like Ferritin to get a complete picture of iron stores.",
        ro: "Ajută la diagnosticarea anemiei feriprive sau a supraîncărcării cu fier (hemocromatoză). Se recomandă împreună cu Feritina pentru a vedea depozitele reale de fier.",
      },
      typicalTurnaround: {
        en: "Results are typically available within 24 hours.",
        ro: "Rezultatele sunt, de regulă, disponibile în 24 de ore.",
      },
      referenceMinMale: "60",
      referenceMaxMale: "170",
      referenceMinFemale: "50",
      referenceMaxFemale: "160",
      unitMeasure: "µg/dL",
      longDescription: {
        en: "Iron levels fluctuate significantly throughout the day and are affected by diet. A single low iron test doesn't always mean anemia—the body's reserve (Ferritin) is often a better indicator of long-term status.",
        ro: "Nivelul de fier fluctuează semnificativ pe parcursul zilei și este influențat de dietă. Un singur test scăzut nu înseamnă mereu anemie — rezerva corpului (Feritina) este un indicator mai bun.",
      },
      stepSpecial: {
        en: "Morning fasting is mandatory as iron levels peak in the morning. Avoid iron supplements for 24-48 hours before the test.",
        ro: "Recoltarea dimineața pe nemâncate este obligatorie (nivelul de fier atinge valoarea maximă dimineața). Evitați suplimentele cu fier cu 24-48 de ore înainte.",
      },
      belowReference: {
        en: "Low levels suggest iron deficiency, often due to chronic blood loss, poor diet, or pregnancy. Leads to fatigue and pale skin.",
        ro: "Nivelurile scăzute sugerează deficiența de fier, adesea din cauza pierderilor de sânge, dietei precare sau sarcinii. Duce la oboseală și paloare.",
      },
      aboveReference: {
        en: "High levels can be caused by multiple blood transfusions, excessive iron intake, or genetic conditions like hemochromatosis.",
        ro: "Nivelurile crescute pot fi cauzate de transfuzii multiple, aport excesiv de fier sau condiții genetice precum hemocromatoza.",
      },
    },
  },
  {
    id: 64,
    image: "/images/labTests/minerals.webp",
    name: {
      en: "Vitamin D (25-OH)",
      ro: "Vitamina D (25-OH)",
    },
    description: {
      en: "The best indicator of vitamin D status. Vital for bone health and immune system function.",
      ro: "Cel mai bun indicator al nivelului de vitamina D. Vitală pentru sănătatea oaselor și funcția sistemului imunitar.",
    },
    category: "blood",
    subcategory: "minerals",
    detailPage: {
      whatItMeasures: {
        en: "It measures the level of 25-hydroxyvitamin D in the blood, which is the primary circulating form of the vitamin and the best indicator of overall stores.",
        ro: "Măsoară nivelul de 25-hidroxivitamina D din sânge, principala formă circulantă a vitaminei și cel mai bun indicator al rezervelor totale.",
      },
      whyItMatters: {
        en: "Vitamin D is essential for absorbing calcium and maintaining strong bones. Low levels are linked to bone pain, muscle weakness, and a higher risk of fractures.",
        ro: "Vitamina D este esențială pentru absorbția calciului și menținerea oaselor puternice. Nivelurile scăzute sunt legate de dureri osoase și risc crescut de fracturi.",
      },
      typicalTurnaround: {
        en: "Results usually take 1–3 working days.",
        ro: "Rezultatele sunt gata, de regulă, în 1–3 zile lucrătoare.",
      },
      referenceMinMale: "30",
      referenceMaxMale: "100",
      referenceMinFemale: "30",
      referenceMaxFemale: "100",
      unitMeasure: "ng/ml",
      longDescription: {
        en: "We get Vitamin D from sun exposure, certain foods, and supplements. Deficiency is very common, especially in winter or in northern latitudes. Values between 20-30 ng/mL are often considered 'insufficient', while below 20 is 'deficient'.",
        ro: "Obținem Vitamina D prin expunerea la soare, alimente și suplimente. Deficiența este foarte comună, mai ales iarna. Valorile între 20-30 ng/mL sunt considerate 'insuficiente', iar sub 20 'deficit'.",
      },
      stepSpecial: {
        en: "Fasting for 8–12 hours is recommended. Discontinue Vitamin D supplements 72 hours before the test and inform your doctor if you are taking high-dose Biotin (Vitamin B7).",
        ro: "Se recomandă repaus alimentar de 8–12 ore. Întrerupeți administrarea suplimentelor de Vitamina D cu 72 de ore înainte de recoltare și informați medicul dacă luați doze mari de Biotină (Vitamina B7).",
      },
      belowReference: {
        en: "Deficiency can lead to rickets in children and osteomalacia or osteoporosis in adults.",
        ro: "Deficiența poate duce la rahitism la copii și osteomalacie sau osteoporoză la adulți.",
      },
      aboveReference: {
        en: "Vitamin D toxicity is rare but can occur with extremely high-dose supplements, leading to excessive calcium buildup (hypercalcemia).",
        ro: "Toxicitatea este rară, dar poate apărea la doze de suplimente extrem de mari, ducând la acumularea excesivă de calciu.",
      },
    },
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
    detailPage: {
      whatItMeasures: {
        en: "It measures the level of a protein produced by both cancerous and non-cancerous tissue in the prostate, a small gland that sits below the bladder in men.",
        ro: "Măsoară nivelul unei proteine produse atât de țesutul canceros, cât și de cel non-canceros din prostată, o mică glandă situată sub vezica urinară la bărbați.",
      },
      whyItMatters: {
        en: "PSA is primarily used to screen for prostate cancer. It is also used to monitor patients with a history of prostate issues or to evaluate symptoms like difficult or frequent urination.",
        ro: "PSA este utilizat în principal pentru depistarea cancerului de prostată. Este folosit și pentru monitorizarea pacienților cu antecedente de afecțiuni prostatice sau pentru evaluarea simptomelor precum urinarea dificilă sau frecventă.",
      },
      typicalTurnaround: {
        en: "Results are typically available within 1–2 working days.",
        ro: "Rezultatele sunt, de regulă, disponibile în 1–2 zile lucrătoare.",
      },
      referenceMinMale: "0",
      referenceMaxMale: "4",
      referenceMinFemale: "N/A",
      referenceMaxFemale: "N/A",
      unitMeasure: "ng/ml",
      longDescription: {
        en: "While a high PSA can indicate cancer, it is also frequently raised by benign conditions like an enlarged prostate (BPH) or inflammation (prostatitis). Factors such as age, ethnicity, and even recent physical activity or medical procedures can influence the result. Often, if PSA is elevated, a 'Free PSA' test is ordered to help clarify the risk.",
        ro: "Deși un PSA crescut poate indica un cancer, acesta este frecvent mărit și de condiții benigne, cum ar fi prostata mărită (adenom) sau inflamația (prostatită). Factori precum vârsta, etnia și chiar activitatea fizică recentă pot influența rezultatul. Adesea, dacă PSA este mărit, se recomandă testul 'Free PSA' pentru clarificarea riscului.",
      },
      stepSpecial: {
        en: "Crucial: Avoid ejaculation, vigorous exercise (like cycling), or prostate manipulation (rectal exam/biopsy) for at least 48 hours before the test, as these can significantly spike PSA levels.",
        ro: "Crucial: Evitați ejacularea, efortul fizic intens (mersul pe bicicletă) sau manipularea prostatei (tușeu rectal/biopsie) cu cel puțin 48 de ore înainte de test, deoarece acestea pot crește semnificativ nivelul PSA.",
      },
      belowReference: {
        en: "Low levels are normal and generally indicate a low risk of significant prostate pathology.",
        ro: "Nivelurile scăzute sunt normale și indică, în general, un risc scăzut de patologie prostatică semnificativă.",
      },
      aboveReference: {
        en: "Elevated levels require clinical follow-up. While not a definitive diagnosis of cancer, values above 4 ng/mL (or lower depending on age) often lead to further investigations like an ultrasound or MRI.",
        ro: "Nivelurile crescute necesită monitorizare medicală. Deși nu reprezintă un diagnostic definitiv de cancer, valorile peste 4 ng/mL (sau mai mici, în funcție de vârstă) duc adesea la investigații suplimentare precum ecografia sau RMN-ul.",
      },
    },
  },
];
