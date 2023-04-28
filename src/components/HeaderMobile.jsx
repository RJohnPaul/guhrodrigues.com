// React Hooks
import { useState } from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faX } from "@fortawesome/free-solid-svg-icons";

const HeaderMobile = () => {
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
    <header className="fixed lg:invisible flex items-center justify-between w-full py-4 h-[10vh] z-50">
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
            ? "left-0 bg-backgroundPrimaryDark/90 z-[-1] backdrop-blur-[5px]"
            : "-left-full z-[-1]"
        } top-0 flex-1 flex flex-col items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <li onClick={handleCloseMenu}>
          <a href="#home">Início</a>
        </li>
        <li onClick={handleCloseMenu}>
          <a href="#about">Sobre</a>
        </li>
        <li onClick={handleCloseMenu}>
          <a href="#skills">Habilidades</a>
        </li>
        <li onClick={handleCloseMenu}>
          <a href="#projects">Projetos</a>
        </li>
      </nav>
      <div className="flex items-center gap-3 px-2">
        <button
          onClick={handleMenu}
          className="text-black dark:text-gray-300 xl:hidden text-[18px]"
        >
          {showMenu ? (
            <FontAwesomeIcon icon={faX} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faBarsStaggered} size="lg" />
          )}
        </button>
      </div>
    </header>
  );
};

export default HeaderMobile;
