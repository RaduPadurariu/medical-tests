import { LangType } from "@/types/types";

type TermsSectionType = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type TermsContentType = {
  lastUpdatedLabel: string;
  lastUpdatedValue: string;
  intro: string[];
  sections: TermsSectionType[];
  contactTitle: string;
  contactEmail: string;
};

export const termsContent: Record<LangType, TermsContentType> = {
  en: {
    lastUpdatedLabel: "Last updated",
    lastUpdatedValue: "April 23, 2026",
    intro: [
      "These Terms of Service govern your use of Medical Tests.",
      "By accessing or using the platform, you agree to these terms.",
    ],
    sections: [
      {
        title: "1. Scope of Service",
        paragraphs: [
          "Medical Tests provides informational content and user tools related to medical tests.",
          "The platform is intended for educational and personal use.",
        ],
      },
      {
        title: "2. Medical Disclaimer",
        paragraphs: [
          "The platform does not provide medical diagnosis, treatment, or emergency services.",
          "Information available on the website does not replace professional medical advice from a qualified healthcare provider.",
        ],
      },
      {
        title: "3. Account and Authentication",
        paragraphs: [
          "You may create and access your account using Google sign-in.",
          "You are responsible for maintaining the security of your account and for activities performed under your account.",
        ],
      },
      {
        title: "4. User Data and Profile Information",
        paragraphs: [
          "You may provide profile data in the app, including full name, age, location, and sex.",
          "You are responsible for ensuring that the data you submit is accurate.",
        ],
      },
      {
        title: "5. Acceptable Use",
        paragraphs: [
          "You agree to use the platform lawfully and respectfully.",
        ],
        bullets: [
          "Do not attempt unauthorized access to systems or data",
          "Do not misuse, disrupt, or overload the platform",
          "Do not use the service for unlawful or harmful purposes",
        ],
      },
      {
        title: "6. Intellectual Property",
        paragraphs: [
          "Platform content, branding, and software elements are owned by Medical Tests, unless otherwise stated.",
          "You may not copy, reproduce, or distribute protected content without permission.",
        ],
      },
      {
        title: "7. Limitation of Liability",
        paragraphs: [
          "The platform is provided on an as-is and as-available basis.",
          "To the extent permitted by law, Medical Tests is not liable for indirect, incidental, or consequential damages resulting from platform use.",
        ],
      },
      {
        title: "8. Service Changes and Termination",
        paragraphs: [
          "We may update, suspend, or discontinue parts of the platform at any time.",
          "We may restrict access for users who violate these terms.",
        ],
      },
      {
        title: "9. Changes to These Terms",
        paragraphs: [
          "We may update these Terms of Service. The latest version is indicated by the updated date at the top of this page.",
        ],
      },
      {
        title: "10. Governing Law",
        paragraphs: [
          "These terms are governed by the laws of Romania, unless mandatory local laws require otherwise.",
        ],
      },
    ],
    contactTitle: "11. Contact",
    contactEmail: "padurariuionutradu@gmail.com",
  },
  ro: {
    lastUpdatedLabel: "Ultima actualizare",
    lastUpdatedValue: "23 aprilie 2026",
    intro: [
      "Acesti Termeni si Conditii reglementeaza utilizarea platformei Medical Tests.",
      "Prin accesarea sau utilizarea platformei, esti de acord cu acesti termeni.",
    ],
    sections: [
      {
        title: "1. Domeniul serviciului",
        paragraphs: [
          "Medical Tests ofera continut informativ si instrumente pentru utilizatori, legate de analize medicale.",
          "Platforma este destinata utilizarii personale si in scop educational.",
        ],
      },
      {
        title: "2. Disclaimer medical",
        paragraphs: [
          "Platforma nu ofera diagnostic medical, tratament sau servicii de urgenta.",
          "Informatiile de pe website nu inlocuiesc sfatul medical profesionist oferit de personal medical calificat.",
        ],
      },
      {
        title: "3. Cont si autentificare",
        paragraphs: [
          "Poti crea si accesa contul folosind autentificarea cu Google.",
          "Esti responsabil pentru securitatea contului tau si pentru activitatile realizate prin acesta.",
        ],
      },
      {
        title: "4. Date de profil introduse de utilizator",
        paragraphs: [
          "In aplicatie poti introduce date de profil, inclusiv nume complet, varsta, locatie si sex.",
          "Esti responsabil ca datele introduse sa fie corecte.",
        ],
      },
      {
        title: "5. Utilizare permisa",
        paragraphs: [
          "Esti de acord sa folosesti platforma in mod legal si responsabil.",
        ],
        bullets: [
          "Nu incerca acces neautorizat la sisteme sau date",
          "Nu abuza, perturba sau supraincarca platforma",
          "Nu folosi serviciul pentru scopuri ilegale sau daunatoare",
        ],
      },
      {
        title: "6. Proprietate intelectuala",
        paragraphs: [
          "Continutul, brandul si elementele software ale platformei apartin Medical Tests, daca nu este mentionat altfel.",
          "Nu poti copia, reproduce sau distribui continut protejat fara permisiune.",
        ],
      },
      {
        title: "7. Limitarea raspunderii",
        paragraphs: [
          "Platforma este furnizata in forma disponibila, fara garantii absolute.",
          "In masura permisa de lege, Medical Tests nu raspunde pentru daune indirecte, incidentale sau consecvente rezultate din utilizarea platformei.",
        ],
      },
      {
        title: "8. Modificarea serviciului si inchiderea accesului",
        paragraphs: [
          "Putem actualiza, suspenda sau opri parti ale platformei in orice moment.",
          "Putem restrictiona accesul utilizatorilor care incalca acesti termeni.",
        ],
      },
      {
        title: "9. Modificari ale termenilor",
        paragraphs: [
          "Putem actualiza acesti Termeni si Conditii. Versiunea curenta este indicata prin data actualizata din partea de sus a paginii.",
        ],
      },
      {
        title: "10. Legea aplicabila",
        paragraphs: [
          "Acesti termeni sunt guvernati de legislatia din Romania, cu exceptia situatiilor in care legi locale obligatorii prevad altfel.",
        ],
      },
    ],
    contactTitle: "11. Contact",
    contactEmail: "padurariuionutradu@gmail.com",
  },
};
