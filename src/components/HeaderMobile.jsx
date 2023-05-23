// React Hooks
import { useState } from "react";

// Icons
import { List, X } from "phosphor-react";

// React Scroll
import { NavLink } from "react-router-dom";

// Header Mobile
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
    <header className="fixed md:invisible flex items-center justify-between w-full py-4 h-18 z-50 px-3">
      <div className="text-center">
        <NavLink
          to="/"
          onClick={handleCloseMenu}
          className="cursor-pointer text-[2.2rem] font-signature font-semibold relative p-2 text-primary"
        >
          Gustavo
        </NavLink>
      </div>
      <nav
        className={`fixed w-full left-0 h-full ${
          showMenu
            ? "bottom-0 z-[-1] bg-black/80 backdrop-blur-[15px] pointer-events-auto opacity-1 translate-y-0"
            : "-bottom-full z-[-1] opacity-0 pointer-events-none translate-y-[50px]"
        } top-0 flex items-center justify-center duration-150`}
      >
        <ul className={`flex flex-col items-center justify-center gap-10`}>
          <li className="text-tertiary">
            <NavLink to="/" onClick={handleCloseMenu}>
              Início
            </NavLink>
          </li>
          <li className="text-tertiary">
            <NavLink to="/about" onClick={handleCloseMenu}>
              Sobre
            </NavLink>
          </li>
          <li className="text-tertiary">
            <NavLink to="/skills" onClick={handleCloseMenu}>
              Habilidades
            </NavLink>
          </li>
          <li className="text-tertiary">
            <NavLink to="/projects" onClick={handleCloseMenu}>
              Projetos
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center px-1">
        <button onClick={handleMenu} className="text-tertiary text-[18px]">
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
