export const translations = {
  en: {
    nav: {
      home: "Home",
      labTests: "Lab Tests",
      contact: "Contact",
      myList: "My List",
    },
    auth: {
      signup: "Sign up",
      login: "Log in",
      profile: "Profile",
      logout: "Log out",
    },
    footer: "Built by",

    home: {
      heroSection: {
        badges: {
          cloud: "Cloud Sync",
          pdf: "PDF Export",
        },
        headline: {
          start: "Organize Your",
          middle: "Lab Tests",
          end: "in Minutes",
        },
        description:
          "Create your personalized lab test list, keep track of what you need, and print a professional PDF to bring to your laboratory. Simple, organized, and always accessible.",
        stats: {
          tests: {
            value: "20+",
            secondary: "Lab Tests",
          },
          free: {
            value: "Free",
            secondary: "To Use",
          },
          save: {
            value: "Save",
            secondary: "Your List",
          },
        },
        cta: {
          getStarted: "Get Started",
          viewLabTests: "View Lab Tests",
        },
        floatingCard: {
          myTestList: "My Test List",
          testsSelected: "tests selected",
          pdfReady: "PDF Ready",
          printableExport: "Printable export",
        },
      },
      callToAction: {
        title: "Ready to Organize Your Lab Tests?",
        description:
          "Join today and create your first test list in minutes. It's completely free.",
        getStarted: "Get Started",
        viewLabTests: "View Lab Tests",
      },
      howItWorks: {
        howItWorksTitle: "How It Works",
        howItWorksDescription:
          "Get your lab test list ready in just four simple steps.",
        howItWorksSteps: [
          {
            id: "01",
            title: "Create an Account",
            description:
              "Sign up for free in seconds. All you need is an email address to get started.",
          },
          {
            id: "02",
            title: "Browse & Select Tests",
            description:
              "Explore our catalog of lab tests. Click to add any test you need to your personal list.",
          },
          {
            id: "03",
            title: "Review Your List",
            description:
              "Check your selected tests, make adjustments, and ensure everything is correct.",
          },
          {
            id: "04",
            title: "Print & Go",
            description:
              "Generate a PDF with your test list. Print it and bring it to your preferred laboratory.",
          },
        ],
      },
    },
    medicalTests: {
      title: "Lab Tests",
      description:
        "Explore our catalog of lab tests. Click to add any test you need to your personal list.",
      addToList: "Add to list",
      addToListDone: "Added to list",
      learnMore: "Learn more",
      noTestsFound: "No tests found",
    },
    singleTestPage: {
      highlightsMeasures: "What it measures",
      highlightsMatters: "Why it matters",
      highlightsTurnaround: "Typical turnaround",
      referenceRangeTitle: "Typical adult reference interval (serum)",
      men: "Men",
      women: "Women",
      sectionTitle: "About this test",
      stepsTitle: "BEFORE YOU GO TO THE LAB (INFORMATIVE)",
      stepList:
        "Take this created list with you to the lab so the staff knows exactly which tests you’d like to perform.",
      stepId:
        "Bring a valid ID (National ID); it is required for registration at the lab. Also, check if you need an appointment or a queue ticket.",
      stepFasting:
        "Most tests are best performed in the morning after 8–12 hours of fasting (no food or drinks except plain water). Staying well-hydrated with water makes the blood draw easier and more comfortable.",
      stepSpecial:
        "This test follows the standard procedure. No additional special steps are needed beyond the general advice shown here.",
      categoriesHeading: "Where this test fits",
      categoriesSubtitle:
        "Clinical grouping used on this site (not a diagnosis)",
      belowReference: "If your result is below the lab’s reference",
      aboveReference: "If your result is above the lab’s reference",
      disclaimer:
        "Information on this page is educational and does not replace medical advice. Use your laboratory’s reference interval and discuss results with a qualified professional.",
    },
    accountPage: {
      title: "Account",
      description: "Manage your account and preferences.",
      helloUser: "Welcome, ",
      deleteAccount: "Delete account",
    },
    breadcrumbs: {
      home: "Home",
      labTests: "Lab Tests",
      contact: "Contact",
      myList: "My List",
      login: "Login",
      register: "Register",
      account: "Account",
      editPrintHeader: "Edit print header",
      printPreview: "Print preview",
    },
    myListPage: {
      title: "My List",
      description:
        "Here you can see all the tests selected and export them in PDF.",
      printHeaderSectionTitle: "Optional print header details",
      printHeaderSectionDescription:
        "Fill in these details if you want them to appear in the printed document header.",
      fullNameLabel: "Full name",
      ageLabel: "Age",
      sexLabel: "Sex",
      cityLabel: "City",
      notProvided: "Not provided",
      editPrintHeaderButton: "Edit print header",
      testsSectionTitle: "Selected tests",
      testsSectionDescription:
        "Manage your test list before printing. You can add, edit, or delete tests.",
      newTestPlaceholder: "Add a new test name",
      addTestButton: "Add",
      emptyListMessage: "No tests in your list yet.",
      editButton: "Edit",
      deleteButton: "Delete",
      goToPrintButton: "Go to print page",
      // Edit print header page
      editPrintHeaderPage: {
        title: "Edit print header",
        description: "Edit the print header details.",
        saveButton: "Save",
        cancelButton: "Cancel",
        fullNamePlaceholder: "John Doe",
        agePlaceholder: "32",
        sexOptionEmpty: "Select",
        sexOptionMale: "Male",
        sexOptionFemale: "Female",
        sexOptionPreferNotToSay: "Prefer not to say",
        cityPlaceholder: "Optional",
      },

      // Print preview page
      printPreviewPage: {
        title: "Print preview",
        description: "Preview the print document.",
        printButton: "Print",
        switchToAutoFormatButton: "Use auto height",
        switchToA4FormatButton: "Use standard A4",
        headerTitle: "Patient details",
        fullNameLabel: "Full name",
        ageLabel: "Age",
        sexLabel: "Sex",
        cityLabel: "City",
        testsTitle: "Requested lab tests",
      },
    },
    loginPage: {
      title: "Login",
      description:
        "Login to your account to access your test list and print PDF.",
      continueWithGoogle: "Continue with Google",
      switchPrompt: "Don't have an account?",
      switchLink: "Register",
    },
    registerPage: {
      title: "Register",
      description:
        "Register to create your account and access your test list and print PDF.",
      continueWithGoogle: "Continue with Google",
      switchPrompt: "Already have an account?",
      switchLink: "Log in",
    },
    contactPage: {
      title: "Contact",
      description:
        "Questions, feedback, or bug reports — send a message and we’ll get back to you when we can.",
      disclaimer:
        "This app helps you organize lab test names and export a list. It does not provide medical advice.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@example.com",
        subject: "Subject",
        subjectGeneral: "General",
        subjectBug: "Bug report",
        subjectFeature: "Feature idea",
        message: "Message",
        messagePlaceholder: "How can we help?",
        submitSuccess: "Thanks — this is a demo; nothing was sent to a server.",
        submit: "Send message",
        errorRequired: "Please fill in all fields.",
        errorEmail: "Please enter a valid email address.",
      },
      aside: {
        emailTitle: "Email",
        emailAddress: "padurariuionutradu@gmail.com",
        locationTitle: "Location",
        locationValue: "Falticeni, Suceava, Romania",
        replyNote: "We usually reply within a few business days.",
      },
      faqTitle: "Common questions",
      faq: [
        {
          q: "Is this medical advice?",
          a: "No. Information about tests is for organization only. Always follow your doctor and the laboratory.",
        },
        {
          q: "Where is my data stored?",
          a: "When you sign in, your saved list can be stored in a database. This contact form is frontend-only until you connect a service.",
        },
        {
          q: "How do I report a problem?",
          a: "Use the form with “Bug report” or email us directly from the address on the right.",
        },
      ],
    },
  },
  ro: {
    nav: {
      home: "Acasă",
      labTests: "Analize",
      contact: "Contact",
      myList: "Lista mea",
    },
    auth: {
      signup: "Înregistrare",
      login: "Autentificare",
      profile: "Profil",
      logout: "Deconectare",
    },
    footer: "Creat de",
    home: {
      heroSection: {
        badges: {
          cloud: "Salvare în Cloud",
          pdf: "Exporta PDF",
        },
        headline: {
          start: "Organizează",
          middle: "analizele",
          end: "în cateva minute",
        },
        description:
          "Creează lista ta personală de analize, păstrează urmărirea testelor pe care le ai nevoie și generează un PDF profesional pentru a le duce la laborator. Simplu, organizat și accesibil mereu.",
        stats: {
          tests: {
            value: "20+",
            secondary: "Analize",
          },
          free: {
            value: "Gratuit",
            secondary: "De utilizat",
          },
          save: {
            value: "Salvează",
            secondary: "Lista ta",
          },
        },
        cta: {
          getStarted: "Începe",
          viewLabTests: "Vezi analize",
        },
        floatingCard: {
          myTestList: "Lista de analize",
          testsSelected: "analize selectate",
          pdfReady: "PDF gata",
          printableExport: "Exportabil",
        },
      },
      callToAction: {
        title: "Gata să organizezi analizele?",
        description:
          "Alătură-te astăzi și creează prima listă de teste în minute. Este complet gratuit.",
        getStarted: "Începe",
        viewLabTests: "Vezi analize",
      },
      howItWorks: {
        howItWorksTitle: "Cum funcționează ",
        howItWorksDescription:
          "Creează-ți lista de analize în doar patru pași simpli.",
        howItWorksSteps: [
          {
            id: "01",
            title: "Creează un cont",
            description:
              "Înregistrează-te gratuit în câteva secunde. Ai nevoie doar de o adresă de email.",
          },
          {
            id: "02",
            title: "Caută și selectează analize",
            description:
              "Explorează catalogul nostru de analize. Adaugă testele dorite în lista ta personală.",
          },
          {
            id: "03",
            title: "Verifică lista",
            description:
              "Revizuiește analizele selectate și asigură-te că totul este corect.",
          },
          {
            id: "04",
            title: "Printează și mergi",
            description:
              "Generează un PDF cu lista ta și du-l la laboratorul ales.",
          },
        ],
      },
    },
    medicalTests: {
      title: "Analize medicale",
      description:
        "Explorează catalogul nostru de analize. Adaugă testele dorite în lista ta personală.",
      addToList: "Adaugă în listă",
      addToListDone: "Adăugat în listă",
      learnMore: "Află mai mult",
      noTestsFound: "Nu s-au găsit analize",
    },
    singleTestPage: {
      highlightsMeasures: "Ce măsoară",
      highlightsMatters: "De ce contează",
      highlightsTurnaround: "Timp orientativ până la rezultat",
      referenceRangeTitle: "Interval de referință tipic adult (ser)",
      men: "Barbati",
      women: "Femei",
      sectionTitle: "Despre această analiză",
      stepsTitle: "ÎNAINTE DE A MERGE LA LABORATOR (INFORMATIV)",
      stepList:
        "Ia această listă creată cu tine la laborator astfel încât personalul să știe exact care teste dorește să se facă.",
      stepId:
        "Bifează un document valid (CNP); este necesar pentru înregistrarea la laborator. Verifică dacă ai nevoie de o programare sau de un bilet de coadă.",
      stepFasting:
        "Multe teste sunt mai bune efectuate dimineața după 8–12 ore de post (fără alimente sau băuturi, doar apă pură). Menținerea hidratării cu apă face recoltarea mai ușoară și confortabilă.",
      stepSpecial:
        "Această analiză urmează procedura standard. Nu sunt necesare pași speciali în afară de recomandările generale afișate aici.",
      categoriesHeading: "Unde se încadrează",
      categoriesSubtitle:
        "Grupare folosită pe acest site (nu e un diagnostic).",
      belowReference: "Dacă rezultatul e sub referința laboratorului",
      aboveReference: "Dacă rezultatul e peste referința laboratorului",
      disclaimer:
        "Informațiile sunt educative și nu înlocuiesc consultul medical. Folosește intervalul de pe buletin și discută rezultatele cu un specialist.",
    },
    accountPage: {
      title: "Cont",
      description: "Gestionează-ți contul și preferințele.",
      helloUser: "Bun venit, ",
      deleteAccount: "Șterge contul",
    },
    breadcrumbs: {
      home: "Acasă",
      labTests: "Analize medicale",
      contact: "Contact",
      myList: "Lista mea",
      login: "Autentificare",
      register: "Înregistrare",
      account: "Cont",
      editPrintHeader: "Editează antetul de print",
      printPreview: "Previzualizare print",
    },
    myListPage: {
      title: "Lista mea",
      description:
        "Aici poți vedea toate analizele selectate și să le exportezi în PDF.",
      printHeaderSectionTitle: "Date optionale pentru antetul de print",
      printHeaderSectionDescription:
        "Completează aceste date dacă vrei să apară în antetul documentului printat.",
      fullNameLabel: "Nume complet",
      ageLabel: "Vârstă",
      sexLabel: "Sex",
      cityLabel: "Localitate",
      notProvided: "Necompletat",
      editPrintHeaderButton: "Editează antetul de print",
      testsSectionTitle: "Analize selectate",
      testsSectionDescription:
        "Gestionează lista de analize înainte de print. Poți adăuga, edita sau șterge analize.",
      newTestPlaceholder: "Adaugă numele unei analize",
      addTestButton: "Adaugă",
      emptyListMessage: "Nu ai încă analize în listă.",
      editButton: "Editează",
      deleteButton: "Șterge",
      goToPrintButton: "Mergi la pagina de print",
      // Edit print header page
      editPrintHeaderPage: {
        title: "Editează antetul de print",
        description: "Editează detaliile antetului de print.",
        saveButton: "Salvează",
        cancelButton: "Anulează",
        fullNamePlaceholder: "Ion Popescu",
        agePlaceholder: "32",
        sexOptionEmpty: "Selectează",
        sexOptionMale: "Masculin",
        sexOptionFemale: "Feminin",
        sexOptionPreferNotToSay: "Prefer să nu spun",
        cityPlaceholder: "Opțional",
      },
      // Print preview page
      printPreviewPage: {
        title: "Previzualizare print",
        description: "Previzualizează documentul de print.",
        printButton: "Printează",
        switchToAutoFormatButton: "Folosește înălțime automată",
        switchToA4FormatButton: "Folosește format standard A4",
        headerTitle: "Detalii pacient",
        fullNameLabel: "Nume complet",
        ageLabel: "Vârstă",
        sexLabel: "Sex",
        cityLabel: "Localitate",
        testsTitle: "Analize solicitate",
      },
    },
    loginPage: {
      title: "Autentificare",
      description:
        "Autentifică-te în contul tău pentru a accesa lista ta de analize și să generezi un PDF.",
      continueWithGoogle: "Continuă cu Google",
      switchPrompt: "Nu ai cont?",
      switchLink: "Înregistrare",
    },
    registerPage: {
      title: "Înregistrare",
      description:
        "Înregistrează-te pentru a crea un cont și să accesezi lista ta de analize și să generezi un PDF.",
      continueWithGoogle: "Continuă cu Google",
      switchPrompt: "Ai deja cont?",
      switchLink: "Autentificare",
    },
    contactPage: {
      title: "Contact",
      description:
        "Întrebări, feedback sau raport de eroare — trimite un mesaj și îți răspundem când putem.",
      disclaimer:
        "Aplicația te ajută să organizezi numele analizelor și să exporți o listă. Nu oferă sfaturi medicale.",
      form: {
        name: "Nume",
        namePlaceholder: "Numele tău",
        email: "Email",
        emailPlaceholder: "tu@exemplu.com",
        subject: "Subiect",
        subjectGeneral: "General",
        subjectBug: "Raport eroare",
        subjectFeature: "Sugestie funcție",
        message: "Mesaj",
        messagePlaceholder: "Cu ce te putem ajuta?",
        submitSuccess:
          "Mulțumim — acesta este un demo; nu s-a trimis nimic către un server.",
        submit: "Trimite mesaj",
        errorRequired: "Completează toate câmpurile.",
        errorEmail: "Introdu o adresă de email validă.",
      },
      aside: {
        emailTitle: "Email",
        emailAddress: "padurariuionutradu@gmail.com",
        locationTitle: "Locație",
        locationValue: "Fălticeni, Suceava, România",
        replyNote: "De obicei răspundem în câteva zile lucrătoare.",
      },
      faqTitle: "Întrebări frecvente",
      faq: [
        {
          q: "Este sfat medical?",
          a: "Nu. Informațiile despre analize sunt doar pentru organizare. Urmează mereu indicațiile medicului și ale laboratorului.",
        },
        {
          q: "Unde sunt stocate datele mele?",
          a: "După autentificare, lista salvată poate fi într-o bază de date. Acest formular de contact este doar frontend până conectezi un serviciu.",
        },
        {
          q: "Cum raportez o problemă?",
          a: "Folosește formularul cu „Raport eroare” sau scrie-ne direct la adresa din dreapta.",
        },
      ],
    },
  },
};
