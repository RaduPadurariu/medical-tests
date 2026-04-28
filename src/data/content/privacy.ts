import { LangType } from "@/types/types";

type PrivacySectionType = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type PrivacyContentType = {
  lastUpdatedLabel: string;
  lastUpdatedValue: string;
  intro: string[];
  sections: PrivacySectionType[];
  contactTitle: string;
  contactEmail: string;
};

export const privacyContent: Record<LangType, PrivacyContentType> = {
  en: {
    lastUpdatedLabel: "Last updated",
    lastUpdatedValue: "April 23, 2026",
    intro: [
      "This Privacy Policy explains what personal data Medical Tests collects and how we use it.",
      "We keep this policy simple and limited to the data currently used by the platform.",
    ],
    sections: [
      {
        title: "1. Data We Collect",
        paragraphs: [
          "When you sign in with Google, we collect your email address and your name from your Google account.",
          "Inside the app, we store the profile data you enter: full name, age, city and sex.",
          "We do not request extra profile fields beyond the information listed above.",
        ],
      },
      {
        title: "2. How We Use Your Data",
        paragraphs: [
          "We use your data to create and manage your account, keep you signed in, and save the profile information you submit.",
          "We use this information only to run the platform features and provide support when needed.",
        ],
      },
      {
        title: "3. Where Data Is Stored",
        paragraphs: [
          "Your account and profile data are stored in our database infrastructure.",
          "We take reasonable technical and organizational measures to protect stored data.",
        ],
      },
      {
        title: "4. Data Sharing",
        paragraphs: [
          "We do not sell personal data.",
          "We only share data with services required to operate the app, such as Google authentication and infrastructure providers.",
          "We may disclose data only if legally required.",
        ],
      },
      {
        title: "5. Data Retention",
        paragraphs: [
          "We keep your data while your account is active or as long as needed to provide the service.",
          "If you request account deletion, we will remove your data unless legal obligations require retention.",
        ],
      },
      {
        title: "6. Your Rights",
        paragraphs: [
          "You can contact us at any time to request access, correction, or deletion of your personal data.",
        ],
        bullets: [
          "Access your stored data",
          "Correct inaccurate data",
          "Request account and data deletion",
        ],
      },
      {
        title: "7. Medical Notice",
        paragraphs: [
          "Medical Tests provides informational content and user tools.",
          "The platform does not provide medical diagnosis or treatment and does not replace professional medical advice.",
        ],
      },
      {
        title: "8. Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy when the app changes. We will update the date shown at the top of this page.",
        ],
      },
    ],
    contactTitle: "9. Contact",
    contactEmail: "padurariuionutradu@gmail.com",
  },
  ro: {
    lastUpdatedLabel: "Ultima actualizare",
    lastUpdatedValue: "23 aprilie 2026",
    intro: [
      "Aceasta Politica de confidentialitate explica ce date personale colecteaza Medical Tests si cum le folosim.",
      "Politica este redactata simplu si include doar datele utilizate in prezent de platforma.",
    ],
    sections: [
      {
        title: "1. Datele pe care le colectam",
        paragraphs: [
          "Cand te autentifici cu Google, colectam adresa ta de email si numele din contul Google.",
          "In aplicatie, stocam datele de profil introduse de tine: nume complet, varsta, locatie si sex.",
          "Nu cerem alte campuri de profil in afara celor mentionate mai sus.",
        ],
      },
      {
        title: "2. Cum folosim datele",
        paragraphs: [
          "Folosim datele pentru crearea si administrarea contului, mentinerea autentificarii si salvarea informatiilor de profil introduse de tine.",
          "Folosim aceste date doar pentru functionarea platformei si suport, atunci cand este necesar.",
        ],
      },
      {
        title: "3. Unde sunt stocate datele",
        paragraphs: [
          "Datele contului si ale profilului sunt stocate in infrastructura bazei noastre de date.",
          "Aplicam masuri tehnice si organizationale rezonabile pentru protejarea datelor stocate.",
        ],
      },
      {
        title: "4. Partajarea datelor",
        paragraphs: [
          "Nu vindem date personale.",
          "Partajam date doar cu servicii necesare functionarii aplicatiei, cum ar fi autentificarea Google si furnizorii de infrastructura.",
          "Putem divulga date doar daca acest lucru este cerut de lege.",
        ],
      },
      {
        title: "5. Perioada de stocare",
        paragraphs: [
          "Pastram datele cat timp contul tau este activ sau cat este necesar pentru furnizarea serviciului.",
          "Daca soliciti stergerea contului, vom sterge datele, cu exceptia cazurilor in care legea impune pastrarea lor.",
        ],
      },
      {
        title: "6. Drepturile tale",
        paragraphs: [
          "Ne poti contacta oricand pentru acces, corectare sau stergere a datelor tale personale.",
        ],
        bullets: [
          "Acces la datele stocate",
          "Corectarea datelor inexacte",
          "Solicitarea stergerii contului si datelor",
        ],
      },
      {
        title: "7. Nota medicala",
        paragraphs: [
          "Medical Tests ofera continut informativ si instrumente pentru utilizatori.",
          "Platforma nu ofera diagnostic sau tratament medical si nu inlocuieste sfatul unui profesionist medical.",
        ],
      },
      {
        title: "8. Modificari ale politicii",
        paragraphs: [
          "Putem actualiza aceasta Politica de confidentialitate atunci cand aplicatia se modifica. Vom actualiza data afisata in partea de sus a paginii.",
        ],
      },
    ],
    contactTitle: "9. Contact",
    contactEmail: "padurariuionutradu@gmail.com",
  },
};
