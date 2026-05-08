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

// Metadata for the entire application
export const metadata: Metadata = {
  metadataBase: new URL("https://medical-tests.vercel.app"),
  title: {
    default: "Medical Tests",
    template: "%s | Medical Tests",
  },
  description:
    "A full-stack web application for managing and printing medical test checklists. Built with Next.js, MongoDB, and NextAuth.",
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

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://medical-tests.vercel.app",
    siteName: "Medical Tests",
    title: "Medical Tests",
    description:
      "A full-stack web application for managing and printing medical test checklists.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Medical Tests application preview",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Medical Tests",
    description:
      "A full-stack web application for managing and printing medical test checklists.",
    images: ["/images/og-image.jpg"],
  },

  creator: "Radu Padurariu",
  publisher: "Radu Padurariu",

  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
  category: "health",
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
