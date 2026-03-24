import type { Metadata } from "next";
import { Roboto, Montserrat, Lato } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--default-font",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--heading-font",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--nav-font",
});

export const metadata: Metadata = {
  title: "myMedicalTests | Manage & Print Medical Test Lists",
  description:
    "A full-stack web application for managing and printing medical test checklists. Built with Next.js, TypeScript, MongoDB, and NextAuth.",

  keywords: [
    "medical tests",
    "health checklist",
    "next.js app",
    "react project",
    "typescript",
    "tailwind css",
    "mongodb",
    "nextauth",
    "i18next",
    "zod",
    "jest",
    "full stack app",
    "portfolio project",
    "radu padurariu",
  ],

  authors: [
    {
      name: "Radu Padurariu",
      url: "https://radupadurariu.netlify.app",
    },
  ],

  creator: "Radu Padurariu",

  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${montserrat.variable} ${lato.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
