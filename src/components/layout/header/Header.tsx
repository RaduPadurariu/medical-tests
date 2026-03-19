import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import NavAuth from "./NavAuth";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <div>
      <header className="w-full fixed text-(--primary-color) z-30 bg-white/0 shadow-[0px_0px_18px_rgba(0,0,0,0.1)]">
        <div className="flex items-center h-10 p-0 text-sm transition-all duration-500 bg-(--secondary-color) text-white">
          <div className="medical-container flex justify-between">
            <div className="flex items-center ml-auto">
              <LanguageSelector />
              <div className="h-5 w-px bg-white/30" />
              <NavAuth />
            </div>
          </div>
        </div>

        <div className="min-h-15 py-2.5 flex items-center">
          <div className="medical-container relative flex items-center justify-between">
            <Link href="/" className="logo flex  flex-col">
              <h1 className="text-[30px] m-0 font-semibold text-(--heading-color)">
                Medical Tests
              </h1>
            </Link>

            <Navbar />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
