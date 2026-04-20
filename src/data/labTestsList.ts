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
      referenceMin: "4.0",
      referenceMax: "10.0",
      longDescription: {
        en: "The CBC provides a detailed 'snapshot' of your blood's composition. Because it tracks so many different markers (MCV, MCH, RDW, etc.), doctors look at the relationships between these numbers rather than just one value. A slight deviation in one marker might be normal, while a shift in several could indicate an underlying issue like a vitamin deficiency or a hidden infection.",
        ro: "Hemoleucograma oferă o 'fotografie' detaliată a compoziției sângelui. Deoarece urmărește mulți markeri diferiți (VEM, HEM, RDW etc.), medicii analizează relația dintre aceste numere. O ușoară abatere a unui singur marker poate fi normală, în timp ce modificarea mai multor valori poate indica o problemă precum o carență de vitamine sau o infecție ascunsă.",
      },
      stepSpecial: {
        en: "No special preparation is strictly required, but it is often done fasting if other chemistry tests are ordered at the same time.",
        ro: "Nu este necesară o pregătire specială strictă, dar se efectuează adesea pe nemâncate dacă sunt comandate și alte analize de biochimie în același timp.",
      },
      belowReference: {
        en: "Low counts can indicate various types of anemia (low red cells), an increased risk of infection (low white cells), or a risk of excessive bleeding (low platelets).",
        ro: "Valorile scăzute pot indica diverse tipuri de anemii (eritrocite scăzute), un risc crescut de infecție (leucocite scăzute) sau risc de sângerare excesivă (trombocite scăzute).",
      },
      aboveReference: {
        en: "High counts may suggest dehydration, bone marrow disorders, chronic inflammation, or an active immune response to an infection or stress.",
        ro: "Valorile crescute pot sugera deshidratare, afecțiuni ale măduvei osoase, inflamație cronică sau un răspuns imun activ la o infecție sau stres.",
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
      referenceMin: "2",
      referenceMax: "20",
      longDescription: {
        en: "ESR is an indirect marker of the acute phase response. While it indicates that inflammation is present, it does not reveal the exact cause or location. Values naturally increase with age and can be higher in women. Factors like pregnancy, anemia, or kidney disease can also affect the results, which is why it is interpreted in a broader clinical context.",
        ro: "VSH este un marker indirect al răspunsului de fază acută. Deși indică prezența inflamației, nu dezvăluie cauza sau locația exactă. Valorile cresc natural cu vârsta și pot fi mai mari la femei. Factori precum sarcina, anemia sau bolile renale pot influența rezultatele, motiv pentru care este interpretat într-un context clinic mai larg.",
      },
      stepSpecial: {
        en: "Standard procedure: Fasting is recommended but not strictly required unless other chemistry tests are performed from the same draw.",
        ro: "Procedură standard: Repausul alimentar este recomandat, dar nu strict obligatoriu, decât dacă se efectuează și alte analize de biochimie din aceeași probă.",
      },
      belowReference: {
        en: "A very low ESR is rarely a cause for concern but can be seen in conditions that affect the shape or number of red blood cells, such as polycythemia or sickle cell anemia.",
        ro: "Un VSH foarte scăzut este rareori un motiv de îngrijorare, dar poate fi întâlnit în afecțiuni care modifică forma sau numărul globulelor roșii, cum ar fi policitemia sau anemia falciformă.",
      },
      aboveReference: {
        en: "High levels indicate inflammation, which could be due to infection, autoimmune disease, or malignancy. Extremely high values (over 100 mm/h) often point to a significant underlying condition that requires immediate medical investigation.",
        ro: "Nivelurile crescute indică o inflamație, care poate fi cauzată de infecții, boli autoimune sau tumori. Valorile extrem de mari (peste 100 mm/h) indică adesea o afecțiune subiacentă semnificativă ce necesită investigații medicale imediate.",
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
      referenceMin: "64",
      referenceMax: "83",
      longDescription: {
        en: "Total protein reflects the delicate balance of protein production and loss in the body. While it provides a good overview of health, a normal result doesn't always rule out underlying issues, which is why it's bundled in 'panels'. Note: Minor fluctuations can occur due to hydration levels or prolonged standing before the blood draw.",
        ro: "Proteinele totale reflectă echilibrul dintre producția și pierderea de proteine în organism. Deși oferă o imagine de ansamblu bună, un rezultat normal nu exclude întotdeauna problemele subiacente, motiv pentru care este inclus în 'panouri' de analize. Notă: Mici fluctuații pot apărea în funcție de nivelul de hidratare sau dacă ați stat mult timp în picioare înainte de recoltare.",
      },
      stepSpecial: {
        en: "Standard procedure: No specific preparation is required beyond the general 8–12 hour fast. Drinking plain water is encouraged.",
        ro: "Procedură standard: Nu este necesară o pregătire specifică în afara repausului alimentar general de 8–12 ore. Hidratarea cu apă plată este încurajată.",
      },
      belowReference: {
        en: "Low levels (hypoproteinemia) may suggest liver dysfunction, kidney issues (leaking protein), malabsorption, or severe malnutrition. In some cases, it simply reflects overhydration.",
        ro: "Nivelurile scăzute (hipoproteinemie) pot sugera disfuncții hepatice, probleme renale (pierdere de proteine), malabsorbție sau malnutriție severă. În unele cazuri, poate reflecta doar o hidratare excesivă.",
      },
      aboveReference: {
        en: "High levels (hyperproteinemia) can be seen in cases of severe dehydration, chronic inflammation, or certain bone marrow disorders. Further tests like protein electrophoresis are often the next step to identify which protein fraction is elevated.",
        ro: "Nivelurile crescute (hiperproteinemie) pot apărea în caz de deshidratare severă, inflamații cronice sau anumite afecțiuni ale măduvei osoase. Analize suplimentare, precum electroforeza proteinelor, sunt adesea pasul următor.",
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
      referenceMin: "0",
      referenceMax: "5",
      longDescription: {
        en: "Unlike tests that point to a specific disease, CRP is a general alert system. It tells doctors that something is triggering the immune system, but not exactly what or where. Because it reacts so quickly, it is excellent for checking if a treatment (like an antibiotic) is working—if the treatment is successful, CRP levels should drop fast. Note that minor elevations can be caused by smoking, obesity, or lack of exercise.",
        ro: "Spre deosebire de testele care indică o boală specifică, CRP este un sistem de alertă generală. Îi spune medicului că ceva declanșează sistemul imunitar, dar nu exact ce sau unde. Deoarece reacționează rapid, este excelent pentru a verifica dacă un tratament (ex. antibioticul) funcționează. Rețineți că creșteri minore pot fi cauzate de fumat, obezitate sau lipsa exercițiilor fizice.",
      },
      stepSpecial: {
        en: "Standard procedure: Fasting (8–12 hours) is recommended, especially as CRP is often bundled with lipid panels or other biochemistry tests.",
        ro: "Procedură standard: Repausul alimentar (8–12 ore) este recomandat, mai ales că CRP este adesea comandată împreună cu profilul lipidic sau alte analize de biochimie.",
      },
      belowReference: {
        en: "Low levels are normal and generally indicate a lack of significant active systemic inflammation in the body.",
        ro: "Nivelurile scăzute sunt normale și indică, în general, absența unei inflamații sistemice active semnificative în organism.",
      },
      aboveReference: {
        en: "High levels indicate inflammation due to infection, trauma, or chronic disease. Very high levels (over 50–100 mg/L) usually suggest a serious bacterial infection or a significant inflammatory flare-up that requires clinical attention.",
        ro: "Nivelurile crescute indică o inflamație cauzată de infecție, traumă sau boli cronice. Nivelurile foarte mari (peste 50–100 mg/L) sugerează de obicei o infecție bacteriană gravă sau un puseu inflamator semnificativ.",
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
      referenceMin: "120",
      referenceMax: "200",
      longDescription: {
        en: "Total cholesterol is often measured as part of a lipid panel. While the total number is important, doctors also look at the ratio between 'good' and 'bad' cholesterol. Factors like genetics, diet, age, and physical activity all influence these levels. A high result doesn't always mean immediate danger, but it serves as a starting point for lifestyle changes or medical intervention.",
        ro: "Colesterolul total este adesea măsurat ca parte a unui profil lipidic. Deși numărul total este important, medicii analizează și raportul dintre colesterolul 'bun' și cel 'rău'. Factori precum genetica, dieta, vârsta și activitatea fizică influențează aceste niveluri. Un rezultat mare nu înseamnă întotdeauna un pericol imediat, dar servește ca punct de plecare pentru schimbări în stilul de viață.",
      },
      stepSpecial: {
        en: "Strict fasting is required: Do not eat or drink anything except plain water for 9–12 hours before the test. Avoid alcohol for 24 hours prior.",
        ro: "Este necesar repaus alimentar strict: Nu mâncați și nu beți nimic în afară de apă plată timp de 9–12 ore înainte de test. Evitați consumul de alcool cu 24 de ore înainte.",
      },
      belowReference: {
        en: "Very low cholesterol (hypocholesterolemia) is uncommon but can be associated with hyperthyroidism, liver disease, malabsorption, or certain genetic conditions.",
        ro: "Colesterolul foarte scăzut (hipocolesterolemie) este neobișnuit, dar poate fi asociat cu hipertiroidismul, boli hepatice, malabsorbție sau anumite afecțiuni genetice.",
      },
      aboveReference: {
        en: "High levels (hypercholesterolemia) indicate an increased risk of cardiovascular disease. Next steps usually involve checking LDL, HDL, and Triglycerides to get a complete picture of your lipid health.",
        ro: "Nivelurile crescute (hipercolesterolemie) indică un risc crescut de boli cardiovasculare. Pasul următor implică verificarea LDL, HDL și a trigliceridelor pentru a obține o imagine completă a sănătății lipidice.",
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
      referenceMin: "40",
      referenceMax: "60",
      longDescription: {
        en: "HDL is often called 'good' cholesterol because it helps prevent plaque buildup in the arteries. However, the protective effect depends on other factors too, like your LDL and Triglyceride levels. Lifestyle habits like regular exercise, smoking cessation, and eating healthy fats (like olive oil and nuts) are the most effective ways to boost your HDL levels.",
        ro: "HDL este adesea numit colesterol 'bun' deoarece ajută la prevenirea acumulării plăcilor în artere. Totuși, efectul protector depinde și de alți factori, cum ar fi nivelurile LDL și ale trigliceridelor. Exercițiile fizice regulate, renunțarea la fumat și consumul de grăsimi sănătoase sunt cele mai eficiente metode de a crește HDL.",
      },
      stepSpecial: {
        en: "Strict fasting is required: Do not eat or drink anything except plain water for 9–12 hours before the test. Avoid alcohol for 24 hours prior.",
        ro: "Este necesar repaus alimentar strict: Nu mâncați și nu beți nimic în afară de apă plată timp de 9–12 ore înainte de test. Evitați consumul de alcool cu 24 de ore înainte.",
      },
      belowReference: {
        en: "Low HDL levels (below 40 mg/dL for men, 50 mg/dL for women) increase the risk of cardiovascular disease. This can be caused by smoking, obesity, sedentary lifestyle, or type 2 diabetes.",
        ro: "Nivelurile scăzute de HDL cresc riscul de boli cardiovasculare. Acestea pot fi cauzate de fumat, obezitate, sedentarism sau diabet de tip 2.",
      },
      aboveReference: {
        en: "High levels (above 60 mg/dL) are considered protective against heart disease. Very high levels are usually genetic and generally beneficial, though extreme values should be discussed with a doctor.",
        ro: "Nivelurile ridicate (peste 60 mg/dL) sunt considerate protectoare împotriva bolilor de inimă. Valorile foarte mari sunt de obicei genetice și benefice, deși valorile extreme trebuie discutate cu medicul.",
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
      referenceMin: "0",
      referenceMax: "100",
      longDescription: {
        en: "LDL is the primary target of cholesterol-lowering treatments. Your 'ideal' LDL level often depends on your overall health and other risk factors, such as whether you have diabetes or high blood pressure. Managing LDL usually involves a combination of a low-saturated fat diet, regular exercise, and in some cases, medication prescribed by a doctor.",
        ro: "LDL este principala țintă a tratamentelor de scădere a colesterolului. Nivelul 'ideal' de LDL depinde adesea de starea generală de sănătate și de alți factori de risc, cum ar fi prezența diabetului sau a hipertensiunii. Gestionarea LDL implică de obicei o dietă săracă în grăsimi saturate, exerciții fizice și, uneori, medicație.",
      },
      stepSpecial: {
        en: "Strict fasting is required: Do not eat or drink anything except plain water for 9–12 hours before the test. Avoid alcohol for 24 hours prior.",
        ro: "Este necesar repaus alimentar strict: Nu mâncați și nu beți nimic în afară de apă plată timp de 9–12 ore înainte de test. Evitați consumul de alcool cu 24 de ore înainte.",
      },
      belowReference: {
        en: "Very low LDL levels are generally beneficial for heart health, but extremely low values can occasionally be linked to liver disease, hyperthyroidism, or rare genetic disorders.",
        ro: "Nivelurile foarte scăzute de LDL sunt, în general, benefice pentru sănătatea inimii, dar valorile extrem de mici pot fi legate ocazional de boli hepatice, hipertiroidism sau afecțiuni genetice rare.",
      },
      aboveReference: {
        en: "High LDL levels (above 130 mg/dL or 160 mg/dL depending on your risk profile) indicate a higher risk of plaque buildup. Immediate lifestyle changes or a medical consultation are usually recommended.",
        ro: "Nivelurile ridicate de LDL (peste 130 sau 160 mg/dL, în funcție de profilul de risc) indică un risc crescut de acumulare a plăcilor arteriale. Se recomandă schimbarea stilului de viață sau un consult medical.",
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
      referenceMin: "0",
      referenceMax: "150",
      longDescription: {
        en: "Triglycerides are highly sensitive to your recent diet, especially sugar and alcohol. They are usually measured as part of a lipid profile. To manage high levels, doctors recommend reducing sugar intake, losing weight, and increasing physical activity. Unlike cholesterol, which is used to build cells, triglycerides are primarily used for energy.",
        ro: "Trigliceridele sunt foarte sensibile la dieta recentă, în special la zahăr și alcool. Sunt măsurate de obicei ca parte a profilului lipidic. Pentru a gestiona nivelurile mari, medicii recomandă reducerea zahărului, scăderea în greutate și activitatea fizică. Spre deosebire de colesterol, trigliceridele sunt folosite în principal pentru energie.",
      },
      stepSpecial: {
        en: "Strict fasting is required: Do not eat or drink anything except plain water for 12 hours before the test. Avoid alcohol for 24–48 hours prior, as it can significantly spike results.",
        ro: "Este necesar repaus alimentar strict: Nu mâncați și nu beți nimic în afară de apă plată timp de 12 ore înainte de test. Evitați consumul de alcool cu 24–48 de ore înainte, deoarece poate crește semnificativ rezultatele.",
      },
      belowReference: {
        en: "Low triglyceride levels are generally not a concern but can sometimes be seen with very low-fat diets, hyperthyroidism, or malabsorption syndromes.",
        ro: "Nivelurile scăzute de trigliceride nu reprezintă de obicei o problemă, dar pot apărea în diete foarte sărace în grăsimi, hipertiroidism sau sindroame de malabsorbție.",
      },
      aboveReference: {
        en: "High levels (hypertriglyceridemia) are linked to an increased risk of atherosclerosis. Values above 500 mg/dL are considered very high and require medical attention to prevent pancreatic inflammation.",
        ro: "Nivelurile ridicate (hipertrigliceridemie) sunt legate de un risc crescut de ateroscleroză. Valorile peste 500 mg/dL sunt considerate foarte mari și necesită atenție medicală pentru a preveni inflamația pancreasului.",
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
      referenceMin: "70",
      referenceMax: "99",
      longDescription: {
        en: "Glucose levels are tightly regulated by insulin, a hormone produced by the pancreas. Factors such as stress, acute illness, and certain medications (like steroids) can temporarily raise blood sugar. For an accurate diagnosis, a high result is usually confirmed with a second test on a different day or by checking Hemoglobin A1c.",
        ro: "Nivelul glicemiei este strict reglat de insulină, un hormon produs de pancreas. Factori precum stresul, bolile acute și anumite medicamente (precum steroizii) pot crește temporar zahărul din sânge. Pentru un diagnostic corect, un rezultat mare este de obicei confirmat printr-un al doilea test sau prin verificarea Hemoglobinei glicozilate (A1c).",
      },
      stepSpecial: {
        en: "Strict fasting is mandatory: Do not eat or drink anything except plain water for at least 8 hours (preferably 10-12 hours) before the test. Avoid chewing gum or smoking on the morning of the draw.",
        ro: "Repaus alimentar strict: Nu mâncați și nu beți nimic în afară de apă plată timp de cel puțin 8 ore (de preferat 10-12 ore) înainte de test. Evitați guma de mestecat și fumatul în dimineața recoltării.",
      },
      belowReference: {
        en: "Low blood sugar (hypoglycemia) can cause shakiness, sweating, and confusion. It is often linked to diabetes medication, excessive alcohol consumption, or, more rarely, liver or pancreatic issues.",
        ro: "Glicemia scăzută (hipoglicemia) poate cauza tremurături, transpirație și confuzie. Este adesea legată de medicația pentru diabet, consumul excesiv de alcool sau, mai rar, probleme hepatice sau pancreatice.",
      },
      aboveReference: {
        en: "High levels (hyperglycemia) between 100-125 mg/dL suggest prediabetes, while 126 mg/dL or higher on two separate tests typically indicates diabetes. Persistent high sugar requires medical management to prevent complications.",
        ro: "Nivelurile crescute (hiperglicemia) între 100-125 mg/dL sugerează prediabet, în timp ce valorile de 126 mg/dL sau mai mari pe două teste separate indică de obicei diabetul. Valorile mari persistente necesită management medical.",
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
      referenceMin: "4.0",
      referenceMax: "5.6",
      longDescription: {
        en: "Because HbA1c depends on red blood cells, conditions that affect cell lifespan (like anemia or recent blood loss) can sometimes lead to inaccurate results. It is an excellent tool because it isn't affected by short-term changes like what you ate yesterday or stress on the day of the test.",
        ro: "Deoarece HbA1c depinde de globulele roșii, afecțiunile care afectează durata de viață a acestora (precum anemia sau pierderile recente de sânge) pot duce uneori la rezultate imprecise. Este un instrument excelent deoarece nu este influențat de ce ai mâncat ieri sau de stresul din ziua recoltării.",
      },
      stepSpecial: {
        en: "No fasting is required. You can take this test at any time of day, regardless of when you last ate.",
        ro: "Nu este necesară nicio pregătire specială sau repaus alimentar. Puteți face acest test în orice moment al zilei, indiferent de când ați mâncat ultima dată.",
      },
      belowReference: {
        en: "Values below 4% are uncommon and may be seen in conditions that shorten red blood cell lifespan or in cases of persistent hypoglycemia.",
        ro: "Valorile sub 4% sunt neobișnuite și pot apărea în afecțiuni care scurtează viața globulelor roșii sau în cazuri de hipoglicemie persistentă.",
      },
      aboveReference: {
        en: "Values between 5.7% and 6.4% indicate prediabetes. A level of 6.5% or higher on two separate tests typically indicates diabetes. For those already diagnosed, target levels are usually around 7.0%.",
        ro: "Valorile între 5,7% și 6,4% indică prediabet. Un nivel de 6,5% sau mai mare pe două teste separate indică de obicei diabet. Pentru cei deja diagnosticați, ținta este de obicei în jur de 7,0%.",
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
      referenceMin: "0.9",
      referenceMax: "1.7",
      longDescription: {
        en: "Free T4 is considered a more accurate reflection of thyroid function than Total T4 because it isn't affected by changes in blood proteins (like those caused by pregnancy or certain medications). Doctors look at FT4 and TSH levels together to determine if a thyroid issue starts in the thyroid gland itself or in the pituitary gland.",
        ro: "T4 liber este considerat o reflectare mai exactă a funcției tiroidiene decât T4 total, deoarece nu este influențat de proteinele din sânge (care se pot modifica în sarcină sau din cauza unor medicamente). Medicii analizează FT4 împreună cu TSH pentru a vedea dacă problema pornește de la tiroidă sau de la hipofiză.",
      },
      stepSpecial: {
        en: "Standard procedure: Fasting is recommended. If you take thyroid medication, ask your doctor if you should take it before or after the blood draw, as it can temporarily spike your levels.",
        ro: "Procedură standard: Se recomandă recoltarea pe nemâncate. Dacă luați tratament pentru tiroidă, întrebați medicul dacă trebuie să luați doza înainte sau după recoltare, deoarece poate crește temporar nivelul hormonului.",
      },
      belowReference: {
        en: "Low levels suggest hypothyroidism. This can lead to symptoms like weight gain, fatigue, cold intolerance, and dry skin.",
        ro: "Nivelurile scăzute sugerează hipotiroidism. Acesta poate duce la simptome precum creșterea în greutate, oboseală, intoleranță la frig și piele uscată.",
      },
      aboveReference: {
        en: "High levels suggest hyperthyroidism. This can cause symptoms like rapid heartbeat, unexplained weight loss, anxiety, and tremors.",
        ro: "Nivelurile crescute sugerează hipertiroidism. Acesta poate cauza simptome precum bătăi rapide ale inimii, scădere inexplicabilă în greutate, anxietate și tremurături.",
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
      referenceMin: "0.4",
      referenceMax: "4.0",
      longDescription: {
        en: "Think of TSH as a thermostat: when thyroid levels are low, TSH rises to 'turn on the heat'; when thyroid levels are high, TSH drops to 'turn it off'. For this reason, a high TSH usually indicates an underactive thyroid, and a low TSH indicates an overactive thyroid.",
        ro: "Gândiți-vă la TSH ca la un termostat: când nivelul hormonilor tiroidieni e mic, TSH crește ca să 'pornească căldura'; când nivelul e mare, TSH scade ca să o 'oprească'. Din acest motiv, un TSH mare indică de obicei o tiroidă leneșă, iar un TSH mic una hiperactivă.",
      },
      stepSpecial: {
        en: "Standard procedure: Fasting is recommended. Levels can fluctuate during the day, so it's best to have the test done in the morning.",
        ro: "Procedură standard: Se recomandă recoltarea pe nemâncate. Nivelurile pot fluctua pe parcursul zilei, așa că este indicat să faceți testul dimineața.",
      },
      belowReference: {
        en: "Low TSH usually means hyperthyroidism (overactive thyroid) or, more rarely, an issue with the pituitary gland itself.",
        ro: "Un TSH scăzut indică de regulă hipertiroidism (tiroidă hiperactivă) sau, mai rar, o problemă a glandei hipofize.",
      },
      aboveReference: {
        en: "High TSH usually means hypothyroidism (underactive thyroid), as the pituitary gland is working harder to stimulate a sluggish thyroid.",
        ro: "Un TSH crescut indică de obicei hipotiroidism (tiroidă leneșă), deoarece hipofiza muncește mai mult pentru a stimula o tiroidă care nu produce suficienți hormoni.",
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
      referenceMin: "5",
      referenceMax: "40",
      longDescription: {
        en: "While AST is a key marker for liver health, it is less specific than ALT because it also exists in the heart, kidneys, and skeletal muscles. High levels can occur after intense exercise or due to certain medications. Doctors often calculate the AST/ALT ratio to distinguish between different causes of liver injury, such as alcohol-related damage.",
        ro: "Deși TGO este un marker cheie, este mai puțin specific decât TGP, deoarece există și în inimă, rinichi și mușchi. Nivelurile pot crește după efort fizic intens sau din cauza unor medicamente. Medicii calculează adesea raportul TGO/TGP pentru a distinge cauzele leziunilor hepatice, cum ar fi cele cauzate de alcool.",
      },
      stepSpecial: {
        en: "Standard procedure: Fasting (8–12 hours) is recommended. Avoid strenuous exercise for 24 hours before the test, as it can falsely raise AST levels.",
        ro: "Procedură standard: Se recomandă repaus alimentar (8–12 ore). Evitați efortul fizic intens cu 24 de ore înainte, deoarece poate crește fals nivelul TGO.",
      },
      belowReference: {
        en: "Low AST levels are generally normal and not a cause for concern.",
        ro: "Nivelurile scăzute de TGO sunt, de regulă, normale și nu reprezintă un motiv de îngrijorare.",
      },
      aboveReference: {
        en: "High levels can indicate hepatitis, cirrhosis, or damage from toxins/alcohol. Moderate elevations are also common in fatty liver disease (steatosis).",
        ro: "Nivelurile crescute pot indica hepatită, ciroză sau leziuni cauzate de toxine/alcool. Creșterile moderate sunt frecvente și în steatoza hepatică (ficat gras).",
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
      referenceMin: "7",
      referenceMax: "56",
      longDescription: {
        en: "ALT is considered the 'gold standard' for detecting liver injury. Even if you have no symptoms, elevated ALT can point to early-stage fatty liver disease. Because many common medications (like certain painkillers or statins) are processed by the liver, ALT is frequently used to monitor their safety.",
        ro: "TGP este considerat 'standardul de aur' pentru detectarea leziunilor hepatice. Chiar și fără simptome, un TGP mărit poate indica un ficat gras în stadiu incipient. Deoarece multe medicamente comune sunt procesate de ficat, TGP este folosit pentru a monitoriza siguranța acestora.",
      },
      stepSpecial: {
        en: "Standard procedure: Fasting (8–12 hours) is recommended. Avoid alcohol for 24 hours prior.",
        ro: "Procedură standard: Se recomandă repaus alimentar (8–12 ore). Evitați consumul de alcool cu 24 de ore înainte.",
      },
      belowReference: {
        en: "Low ALT levels are normal and expected in healthy individuals.",
        ro: "Nivelurile scăzute de TGP sunt normale și de așteptat la persoanele sănătoase.",
      },
      aboveReference: {
        en: "High levels suggest liver inflammation. Significant spikes are seen in acute hepatitis, while chronic elevations are common in non-alcoholic fatty liver disease (NAFLD).",
        ro: "Nivelurile crescute sugerează inflamația ficatului. Creșteri semnificative apar în hepatitele acute, în timp ce creșterile cronice sunt comune în steatoza hepatică.",
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
      referenceMin: "8",
      referenceMax: "61",
      longDescription: {
        en: "GGT is very sensitive, meaning it can rise even with minor liver irritation. While a high GGT is often linked to alcohol use, it can also be raised by certain medications or conditions that slow down the flow of bile from the liver.",
        ro: "GGT este foarte sensibilă, putând crește chiar și la o iritare minoră a ficatului. Deși un GGT mare este adesea legat de consumul de alcool, acesta poate fi mărit și de anumite medicamente sau afecțiuni care încetinesc fluxul bilei.",
      },
      stepSpecial: {
        en: "Strict fasting (8–12 hours) is recommended. You must avoid alcohol for at least 24 hours before the test as even small amounts can cause a spike.",
        ro: "Repaus alimentar strict (8–12 ore). Trebuie să evitați alcoolul cu cel puțin 24 de ore înainte, deoarece chiar și cantitățile mici pot cauza o creștere bruscă.",
      },
      belowReference: {
        en: "Low levels of GGT are normal.",
        ro: "Nivelurile scăzute de GGT sunt normale.",
      },
      aboveReference: {
        en: "Elevated levels can indicate bile duct obstruction, gallstones, heavy alcohol use, or liver congestion. It is often elevated in chronic liver disease.",
        ro: "Nivelurile crescute pot indica obstrucția căilor biliare, pietre la ficat/fiere, consum de alcool sau congestie hepatică. Este adesea crescut în bolile hepatice cronice.",
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
      referenceMin: "0.1",
      referenceMax: "1.2",
      longDescription: {
        en: "Bilirubin exists in two forms: direct (conjugated) and indirect (unconjugated). Total bilirubin is the sum of both. Some people have a harmless genetic condition called Gilbert’s Syndrome, where bilirubin is slightly elevated but the liver is perfectly healthy.",
        ro: "Bilirubina există sub două forme: directă și indirectă. Bilirubina totală este suma celor două. Unele persoane au o condiție genetică inofensivă numită Sindromul Gilbert, unde bilirubina este ușor crescută, dar ficatul este perfect sănătos.",
      },
      stepSpecial: {
        en: "Fasting is required. Avoid vigorous exercise before the test and inform your doctor of any medications, as some can interfere with the results.",
        ro: "Este necesar repaus alimentar. Evitați efortul fizic intens înainte de test și informați medicul despre orice medicamente luați, deoarece pot interfera cu rezultatul.",
      },
      belowReference: {
        en: "Lower than normal bilirubin levels are usually not a concern.",
        ro: "Nivelurile de bilirubină mai mici decât cele normale nu reprezintă, de obicei, o problemă.",
      },
      aboveReference: {
        en: "High levels can cause the skin and eyes to turn yellow (jaundice). This can be due to liver infection (hepatitis), gallstones, or blood disorders.",
        ro: "Nivelurile crescute pot îngălbeni pielea și ochii (icter). Aceasta se poate datora infecțiilor hepatice, pietrelor la bilă sau unor tulburări ale sângelui.",
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
      referenceMin: "0.7",
      referenceMax: "1.3",
      longDescription: {
        en: "Because creatinine levels depend on muscle mass, results can vary by age, sex, and body size. A high level isn't always due to kidney disease; it can also be caused by intense exercise, a diet high in meat, or certain medications. However, it is a key marker for monitoring chronic kidney conditions or the effects of medications on the kidneys.",
        ro: "Deoarece nivelul creatininei depinde de masa musculară, rezultatele pot varia în funcție de vârstă, sex și mărimea corpului. O valoare mare nu se datorează întotdeauna unei boli de rinichi; poate fi cauzată și de efort fizic intens, o dietă bogată în carne sau anumite medicamente. Totuși, este un marker cheie pentru monitorizarea rinichilor.",
      },
      stepSpecial: {
        en: "Standard procedure: Fasting is recommended. Avoid strenuous exercise for 24 hours before the blood draw, as it can temporarily increase creatinine levels.",
        ro: "Procedură standard: Se recomandă repausul alimentar. Evitați efortul fizic intens cu 24 de ore înainte de recoltare, deoarece poate crește temporar nivelul creatininei.",
      },
      belowReference: {
        en: "Low creatinine levels are uncommon and may be seen in conditions involving muscle wasting, severe liver disease, or a very low-protein diet.",
        ro: "Nivelurile scăzute sunt neobișnuite și pot apărea în afecțiuni care implică scăderea masei musculare, boli hepatice severe sau o dietă foarte săracă în proteine.",
      },
      aboveReference: {
        en: "High levels often suggest that the kidneys are not filtering effectively. This can be due to dehydration, kidney infection, or chronic kidney disease. Immediate clinical evaluation is usually recommended if levels are significantly elevated.",
        ro: "Nivelurile mari sugerează adesea că rinichii nu filtrează eficient. Aceasta poate fi din cauza deshidratării, a unei infecții renale sau a bolii cronice de rinichi. Se recomandă evaluarea medicală dacă valorile sunt crescute semnificativ.",
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
      referenceMin: "10",
      referenceMax: "50",
      longDescription: {
        en: "Urea levels are more sensitive to diet and hydration than creatinine. For example, a high-protein diet or dehydration can raise urea levels even if the kidneys are healthy. Therefore, it is almost always interpreted alongside creatinine to get a clearer picture of kidney health.",
        ro: "Nivelul ureei este mai sensibil la dietă și hidratare decât cel al creatininei. De exemplu, o dietă bogată în proteine sau deshidratarea pot crește ureea chiar dacă rinichii sunt sănătoși. De aceea, se interpretează aproape mereu împreună cu creatinina.",
      },
      stepSpecial: {
        en: "Standard procedure: Fasting (8–12 hours) is recommended, as a recent high-protein meal can temporarily increase urea levels.",
        ro: "Procedură standard: Se recomandă repaus alimentar (8–12 ore), deoarece o masă bogată în proteine poate crește temporar nivelul ureei.",
      },
      belowReference: {
        en: "Low urea levels are rare but can occur during pregnancy, overhydration, severe liver disease, or malnutrition.",
        ro: "Nivelurile scăzute de uree sunt rare, dar pot apărea în timpul sarcinii, în caz de suprahidratare, boli hepatice severe sau malnutriție.",
      },
      aboveReference: {
        en: "High levels (uremia) can indicate kidney dysfunction, but also gastrointestinal bleeding, high protein intake, or dehydration. Very high levels require urgent medical investigation.",
        ro: "Nivelurile mari (uremie) pot indica disfuncții renale, dar și sângerări gastrointestinale, consum ridicat de proteine sau deshidratare. Nivelurile foarte mari necesită investigații medicale urgente.",
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
      referenceMin: "2.4",
      referenceMax: "7.0",
      longDescription: {
        en: "Most uric acid dissolves in the blood, travels to the kidneys, and leaves the body in urine. Diet plays a huge role here—foods like red meat, seafood, and alcohol (especially beer) are high in purines and can spike uric acid levels. Genetics also determine how efficiently your kidneys excrete it.",
        ro: "Majoritatea acidului uric se dizolvă în sânge, ajunge la rinichi și este eliminat prin urină. Dieta joacă un rol imens — carnea roșie, fructele de mare și alcoolul (în special berea) sunt bogate în purine și pot crește nivelul acidului uric.",
      },
      stepSpecial: {
        en: "Standard procedure: Fasting is recommended. Avoid alcohol for 24 hours before the test as it significantly reduces the excretion of uric acid, leading to a spike.",
        ro: "Procedură standard: Se recomandă repaus alimentar. Evitați alcoolul cu 24 de ore înainte de test, deoarece acesta reduce semnificativ eliminarea acidului uric.",
      },
      belowReference: {
        en: "Low levels are much less common than high levels and are usually not a clinical concern, though they can be linked to certain rare genetic conditions or liver issues.",
        ro: "Nivelurile scăzute sunt mult mai puțin frecvente și, de obicei, nu reprezintă o problemă clinică, deși pot fi legate de anumite afecțiuni genetice rare sau probleme hepatice.",
      },
      aboveReference: {
        en: "High levels (hyperuricemia) can lead to painful gout attacks or kidney stones. Long-term high levels are also being studied for their links to cardiovascular health.",
        ro: "Nivelurile crescute (hiperuricemie) pot duce la atacuri dureroase de gută sau pietre la rinichi. Nivelurile mari pe termen lung sunt studiate și pentru legătura lor cu sănătatea cardiovasculară.",
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
      referenceMin: "60",
      referenceMax: "120",
      longDescription: {
        en: "The eGFR tells you how many milliliters of blood your kidneys filter per minute. A score above 60 is generally considered normal. Because it is an estimate, certain factors like extreme body size or pregnancy can make the calculation less accurate. It is the primary tool for tracking chronic kidney disease (CKD) over time.",
        ro: "eGFR îți spune câți mililitri de sânge filtrează rinichii tăi pe minut. Un scor peste 60 este în general considerat normal. Fiind o estimare, factori precum dimensiunea extremă a corpului sau sarcina pot face calculul mai puțin precis.",
      },
      stepSpecial: {
        en: "Follow the preparation for Serum Creatinine: Fasting and avoiding heavy exercise before the test.",
        ro: "Urmați pregătirea pentru Creatinina serică: Repaus alimentar și evitarea efortului fizic intens înainte de test.",
      },
      belowReference: {
        en: "A result below 60 for three months or more may indicate chronic kidney disease. A result below 15 indicates kidney failure and requires immediate medical intervention.",
        ro: "Un rezultat sub 60 timp de trei luni sau mai mult poate indica o boală cronică de rinichi. Un rezultat sub 15 indică insuficiență renală și necesită intervenție medicală imediată.",
      },
      aboveReference: {
        en: "High values are generally normal and indicate healthy, robust kidney filtration.",
        ro: "Valorile mari sunt în general normale și indică o filtrare renală sănătoasă și robustă.",
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
      referenceMin: "N/A",
      referenceMax: "N/A",
      longDescription: {
        en: "Urinalysis consists of three parts: Visual exam (checks for cloudiness or unusual color), Chemical exam (using a dipstick to test for 10+ substances), and Microscopic exam (identifying cells, crystals, or bacteria). Factors like certain foods (beets/blackberries) or medications can change urine color without indicating a health problem.",
        ro: "Sumarul de urină constă în trei părți: Examenul vizual (verifică turbiditatea sau culoarea neobișnuită), Examenul chimic (folosind un strip pentru a testa peste 10 substanțe) și Examenul microscopic (identificarea celulelor, cristalelor sau bacteriilor). Anumite alimente (sfecla) sau medicamente pot schimba culoarea urinei fără a indica o problemă de sănătate.",
      },
      stepSpecial: {
        en: "Standard procedure: Use a sterile container. The 'mid-stream' sample is required (start urinating, then collect the sample in the middle of the flow). It is best to use the first morning urine for the most concentrated and accurate results.",
        ro: "Procedură standard: Utilizați un recipient steril. Este necesară recoltarea 'din mijlocul jetului' (începeți să urinați, apoi colectați proba la mijlocul fluxului). Cel mai bine este să folosiți prima urină de dimineață pentru cele mai precise rezultate.",
      },
      belowReference: {
        en: "N/A - Results for specific markers (like pH or specific gravity) are interpreted individually based on hydration and diet.",
        ro: "N/A - Rezultatele pentru markeri specifici (precum pH-ul sau densitatea) sunt interpretate individual în funcție de hidratare și dietă.",
      },
      aboveReference: {
        en: "Abnormal findings like the presence of nitrites or leukocyte esterase often indicate infection. Protein in urine may suggest kidney stress, and glucose can be a sign of uncontrolled diabetes.",
        ro: "Descoperirile anormale, cum ar fi prezența nitriților sau a esterazei leucocitare, indică adesea o infecție. Proteinele în urină pot sugera stres renal, iar glucoza poate fi un semn de diabet necontrolat.",
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
      referenceMin: "8.5",
      referenceMax: "10.2",
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
      referenceMin: "1.10",
      referenceMax: "1.35",
      longDescription: {
        en: "Unlike total calcium, ionized calcium is not affected by changes in albumin levels. However, it is very sensitive to blood pH. If blood becomes more acidic or alkaline, the amount of ionized calcium shifts, which is why samples often require special handling to prevent CO2 loss.",
        ro: "Spre deosebire de calciul total, cel ionic nu este influențat de nivelul albuminei. Totuși, este foarte sensibil la pH-ul sângelui. Dacă sângele devine mai acid sau alcalin, fracțiunea ionică se modifică.",
      },
      stepSpecial: {
        en: "Standard procedure: Fasting is recommended. The sample should be drawn without prolonged use of a tourniquet if possible.",
        ro: "Procedură standard: Se recomandă repaus alimentar. Recoltarea ar trebui făcută fără aplicarea prelungită a garoului, dacă este posibil.",
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
      referenceMin: "1.7",
      referenceMax: "2.5",
      longDescription: {
        en: "Only about 1% of the body's total magnesium is found in the blood; the rest is stored in bones and muscles. This means a blood test might appear normal even if total body stores are low. It is often checked alongside calcium and potassium because these minerals work together.",
        ro: "Doar aproximativ 1% din magneziul total al corpului se află în sânge; restul este stocat în oase și mușchi. Asta înseamnă că testul poate părea normal chiar dacă depozitele sunt mici. Se verifică des împreună cu calciul și potasiul.",
      },
      stepSpecial: {
        en: "Standard procedure: No specific preparation is strictly required, but fasting is generally recommended for biochemistry panels.",
        ro: "Procedură standard: Nu este necesară o pregătire specifică, dar repausul alimentar este recomandat în general pentru biochimie.",
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
      referenceMin: "60",
      referenceMax: "170",
      longDescription: {
        en: "Iron levels fluctuate significantly throughout the day and are affected by diet. A single low iron test doesn't always mean anemia—the body's reserve (Ferritin) is often a better indicator of long-term status.",
        ro: "Nivelul de fier fluctuează semnificativ pe parcursul zilei și este influențat de dietă. Un singur test scăzut nu înseamnă mereu anemie — rezerva corpului (Feritina) este un indicator mai bun.",
      },
      stepSpecial: {
        en: "Morning fasting is required. Iron levels are highest in the morning. Avoid iron supplements for 24 hours before the draw.",
        ro: "Recoltarea dimineața pe nemâncate este obligatorie. Nivelul de fier este maxim dimineața. Evitați suplimentele cu fier cu 24 de ore înainte.",
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
      referenceMin: "30",
      referenceMax: "100",
      longDescription: {
        en: "We get Vitamin D from sun exposure, certain foods, and supplements. Deficiency is very common, especially in winter or in northern latitudes. Values between 20-30 ng/mL are often considered 'insufficient', while below 20 is 'deficient'.",
        ro: "Obținem Vitamina D prin expunerea la soare, alimente și suplimente. Deficiența este foarte comună, mai ales iarna. Valorile între 20-30 ng/mL sunt considerate 'insuficiente', iar sub 20 'deficit'.",
      },
      stepSpecial: {
        en: "Standard procedure: Fasting is generally recommended, but not strictly required. Inform your doctor if you take high-dose supplements.",
        ro: "Procedură standard: Repausul alimentar este recomandat în general. Informați medicul dacă luați suplimente cu doze mari.",
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
      referenceMin: "0",
      referenceMax: "4",
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
