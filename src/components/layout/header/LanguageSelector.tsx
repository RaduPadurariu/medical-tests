"use client";

import { languages } from "@/data/data";
import Image from "next/image";
import { useState } from "react";

const LanguageSelector = () => {
  const [arrowOpen, setArrowOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  return (
    <div className="relative mr-4">
      <div
        className="rounded-sm py-0.5 px-3 text-xs text-(--primary-color) bg-[#D3DAF0] flex items-center cursor-pointer"
        onClick={() => setArrowOpen(!arrowOpen)}
      >
        <Image
          src={selectedLanguage.flag}
          alt="no-lng-img"
          width={20}
          height={20}
          className="mr-2"
        />
        <div
          className={`w-2 h-2 border-r-2 border-b-2 font-bold border-black transform transition-transform duration-300 ${
            arrowOpen ? "-rotate-135" : "rotate-45"
          }`}
        />
        {arrowOpen && (
          <ul
            className={`absolute top-full left-0 z-50 min-w-40 text-xs text-(--primary-color) align-left bg-[#F8FAFF] py-4 px-0 mt-0.5 border shadow-lg border-gray-200 rounded`}
          >
            {languages.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => {
                    setArrowOpen(false);
                    setSelectedLanguage(item);
                  }}
                  className="w-full, py-1 px-4 flex items-center justify-between mb-1 cursor-pointer hover:bg-[#E8EDFF] transition-all duration-300 ease-in-out"
                >
                  <div className="flex items-center">
                    <Image
                      src={item.flag}
                      alt="no-flag"
                      width={20}
                      height={20}
                      className=""
                    />
                    <div className="ml-2 text-(--primary-color) font-semibold text-sm">
                      {item.title}
                    </div>
                  </div>
                  {item.title === selectedLanguage.title && (
                    <svg
                      className="w-4 h-4 text-(--primary-color)"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.071 7.071a1 1 0 01-1.414 0L3.293 9.85a1 1 0 011.414-1.414l3.182 3.182 6.364-6.364a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
