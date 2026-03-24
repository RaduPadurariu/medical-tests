import { Language, NavLinkType } from "@/types/types";

export const navLinks: NavLinkType[] = [
  { id: 1, key: "home", href: "/" },
  { id: 2, key: "labTests", href: "/lab-tests" },
  { id: 3, key: "contact", href: "/contact" },
];

export const languages: Language[] = [
  { id: 1, flag: "/images/us-flag.png", label: "EN", code: "en" },
  { id: 2, flag: "/images/ro-flag.png", label: "RO", code: "ro" },
];
