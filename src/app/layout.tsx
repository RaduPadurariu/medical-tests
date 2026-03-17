import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
