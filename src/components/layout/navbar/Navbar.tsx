"use client";

import { navLinks } from "@/data/data";
import NavbarActiveLink from "./NavbarActiveLink";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav
      className={`${navOpen ? "fixed inset-0 bg-[#212529CC] z-999" : ""} sm:static`}
    >
      <ul
        className={`${navOpen ? "flex" : "hidden sm:flex"} absolute sm:static top-15 right-5 bottom-5 left-5 py-2.5 sm:py-0 px-0 m-0 rounded-md sm:rounded-none flex-col sm:flex-row bg-white z-50`}
      >
        {navLinks.map((item) => {
          return (
            <NavbarActiveLink
              item={item}
              key={item.id}
              setNavOpen={setNavOpen}
            />
          );
        })}

        <li className="ml-5 sm:ml-7 mt-1.5 self-start">
          <Link
            href="/my-list"
            className="px-5 py-2 flex items-center gap-2 rounded-full cursor-pointer bg-(--secondary-color) text-white border-2 border-(--secondary-color) font-semibold transition-all duration-300 hover:bg-blue-600 hover:shadow-md leading-none"
          >
            <i className="fa-solid fa-notes-medical text-base"></i>
            <span className="text-[17px] sm:text-[15px] font-medium">
              My List (0)
            </span>
          </Link>
        </li>
      </ul>

      <div
        onClick={() => setNavOpen(!navOpen)}
        className="block sm:hidden z-50 cursor-pointer text-2xl p-3"
      >
        {navOpen ? (
          <div className="absolute right-5 top-2 z-50 cursor-pointer p-3">
            <i className="fa-solid fa-xmark text-white"></i>
          </div>
        ) : (
          <div className="z-50 cursor-pointer p-3">
            <i className="fa-solid fa-bars  text-(--primary-color)"></i>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
