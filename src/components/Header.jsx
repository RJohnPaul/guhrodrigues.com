import React, { useState } from "react";

// Icons
import { List, X } from "phosphor-react";

// Header
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

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

  return (
    <header className="fixed flex items-center justify-between w-full py-4 h-[9vh] z-50 border-b border-backgroundSecondary">
      <div className="xl:w-1/3 2xl:w-[35.7%] text-center 2xl:mr-12">
        <a
          href="#home"
          className="sm:text-[2rem] lg:text-4xl 2xl:text-[2.5rem] font-signature font-semibold relative p-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >
          Gustavo
        </a>
      </div>
      <nav
        className={`fixed w-full md:w-[60%] xl:w-full h-full ${
          showMenu
            ? "left-0 bg-backgroundPrimary/90 z-[-1] backdrop-blur-[5px]"
            : "-left-full z-[-1]"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50 xl:ml-24`}
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
      <button
        onClick={handleMenu}
        className="text-color xl:hidden text-[18px] p-2"
      >
        {showMenu ? (
          <X weight="bold" size={25} />
        ) : (
          <List weight="bold" size={25} />
        )}
      </button>
    </header>
  );
};

export default Header;
