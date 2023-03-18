import React, { useState, useEffect } from "react";

// Icons
import { Moon, Sun } from "phosphor-react";

// Header Mobile
import HeaderMobile from "./HeaderMobile";

// Theme
import { useTheme } from "../hooks/useTheme";

// Header
const Header = () => {
  const [shadow, setShadow] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      <header
        className={`${
          shadow ? "shadow-lg" : "shadow-none"
        } md:hidden lg:flex w-full fixed z-50 bg-backgroundPrimaryLight dark:bg-backgroundPrimaryDark`}
      >
        <nav className="fixed w-full h-[9vh] justify-between lg:mx-auto xl:mx-[11rem] 2xl:mx-[22rem] top-0 xl:static flex flex-row items-center gap-10 z-50">
          <div className="text-center">
            <a
              href="#home"
              className="sm:text-[2rem] lg:text-4xl 2xl:text-[2.5rem] font-signature font-semibold relative p-2 text-primary"
            >
              Gustavo
            </a>
          </div>
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#home"
                className="relative pb-1.5 after:content-[''] after:w-0 after:h-[2px] after:bg-primary after:absolute after:bottom-0 after:left-0 after:transition-all after:ease-in-out hover:after:w-full"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="relative pb-1.5 after:content-[''] after:w-0 after:h-[2px] after:bg-primary after:absolute after:bottom-0 after:left-0 after:transition-all after:ease-in-out hover:after:w-full"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="relative pb-1.5 after:content-[''] after:w-0 after:h-[2px] after:bg-primary after:absolute after:bottom-0 after:left-0 after:transition-all after:ease-in-out hover:after:w-full"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="relative pb-1.5 after:content-[''] after:w-0 after:h-[2px] after:bg-primary after:absolute after:bottom-0 after:left-0 after:transition-all after:ease-in-out hover:after:w-full"
              >
                Projetos
              </a>
            </li>
            <button className="text-black text-[18px] p-2 dark:text-gray-300">
              {theme === "dark" ? (
                <Sun
                  size={25}
                  weight="bold"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <Moon
                  size={25}
                  weight="bold"
                  onClick={() => setTheme("dark")}
                />
              )}
            </button>
          </ul>
        </nav>
      </header>
      <HeaderMobile />
    </>
  );
};

export default Header;
