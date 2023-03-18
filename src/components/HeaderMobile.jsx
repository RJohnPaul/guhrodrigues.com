import React, { useState, useEffect } from "react";

// Icons
import { List, X, Moon, Sun } from "phosphor-react";

// Theme
import { useTheme } from "../hooks/useTheme";

const HeaderMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleCloseMenu = () => {
    setShowMenu(false);
    document.body.style.overflowY = "scroll";
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  };

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
    <header
      className={`${
        shadow ? "shadow-lg" : "shadow-none"
      } fixed lg:hidden flex items-center justify-between w-full py-4 h-[10vh] z-50`}
    >
      <div className="text-center">
        <a
          href="#home"
          className="text-[2.2rem] font-signature font-semibold relative p-3.5 text-primary"
        >
          Gustavo
        </a>
      </div>
      <nav
        className={`fixed w-full md:w-[60%] h-full ${
          showMenu
            ? "left-0 bg-backgroundPrimaryLight/90 dark:bg-backgroundPrimaryDark/90 z-[-1] backdrop-blur-[5px]"
            : "-left-full z-[-1]"
        } top-0 flex-1 flex flex-col items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <li onClick={handleCloseMenu}>
          <a
            href="#home"
            className="relative pb-1.5 after:content-[''] after:w-0 after:h-[2px] after:bg-gradient-to-b from-primary to-secondary after:absolute after:bottom-0 after:left-0 after:transition-all after:ease-in-out hover:after:w-full"
          >
            Início
          </a>
        </li>
        <li onClick={handleCloseMenu}>
          <a
            href="#about"
            className="relative pb-1.5 after:content-[''] after:w-0 after:h-[2px] after:bg-gradient-to-b from-primary to-secondary after:absolute after:bottom-0 after:left-0 after:transition-all after:ease-in-out hover:after:w-full"
          >
            Sobre
          </a>
        </li>
        <li onClick={handleCloseMenu}>
          <a
            href="#skills"
            className="relative pb-1.5 after:content-[''] after:w-0 after:h-[2px] after:bg-gradient-to-b from-primary to-secondary after:absolute after:bottom-0 after:left-0 after:transition-all after:ease-in-out hover:after:w-full"
          >
            Habilidades
          </a>
        </li>
        <li onClick={handleCloseMenu}>
          <a
            href="#projects"
            className="relative pb-1.5 after:content-[''] after:w-0 after:h-[2px] after:bg-gradient-to-b from-primary to-secondary after:absolute after:bottom-0 after:left-0 after:transition-all after:ease-in-out hover:after:w-full"
          >
            Projetos
          </a>
        </li>
      </nav>
      <div className="flex items-center gap-2.5 px-2">
        <button className="text-black text-[18px] dark:text-gray-300">
          {theme === "dark" ? (
            <Sun size={25} weight="bold" onClick={() => setTheme("light")} />
          ) : (
            <Moon size={25} weight="bold" onClick={() => setTheme("dark")} />
          )}
        </button>
        <button
          onClick={handleMenu}
          className="text-black dark:text-gray-300 xl:hidden text-[18px]"
        >
          {showMenu ? (
            <X weight="bold" size={30} />
          ) : (
            <List weight="bold" size={30} />
          )}
        </button>
      </div>
    </header>
  );
};

export default HeaderMobile;
