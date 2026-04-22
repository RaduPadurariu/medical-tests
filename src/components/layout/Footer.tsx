import { translations } from "@/data/translations";
import { LangType } from "@/types/types";

const Footer = ({ lang }: { lang: LangType }) => {
  return (
    <footer className="py-6 text-center text-sm text-gray-500 print:hidden">
      © {new Date().getFullYear()} Medical Tests. {translations[lang].footer}{" "}
      Radu Padurariu.
    </footer>
  );
};

export default Footer;
