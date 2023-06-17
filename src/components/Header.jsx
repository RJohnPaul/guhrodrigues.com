// React Hooks
import { useState } from "react";

// React Router
import { NavLink } from "react-router-dom";

// Styles
import "../styles/header.css";

// Icons
import { List, X } from "phosphor-react";

// Header
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = () => {
    setShowMenu(false);
    document.body.style.overflow = "auto";
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <header className="flex w-full z-50 fixed bg-background">
      <nav className="fixed max-w-[1250px] w-full px-5 xl:px-3 py-8 justify-between mx-auto right-0 left-0 top-0 xl:static flex flex-row items-center gap-10 z-50">
        <div className="text-center">
          <NavLink to="/" onClick={handleCloseMenu}>
            <h1 className="sm:text-md md:text-xl font-semibold relative text-primary">
              Gustavo
            </h1>
          </NavLink>
        </div>
        <button
          onClick={handleMenu}
          className="text-primary transition-transform active:scale-90 sm:flex md:hidden"
        >
          {showMenu ? <X size={26} /> : <List size={26} />}
        </button>
        <ul
          className={`${
            showMenu
              ? "flex flex-col justify-center w-full h-screen left-0 z-[-1] top-0 bg-background/80 backdrop-blur-lg"
              : "-bottom-full md:flex"
          } sm:fixed md:static gap-8 items-center duration-300`}
        >
          <li className="text-gray-400 hover:text-primary">
            <NavLink to="/" onClick={handleCloseMenu}>
              Início
            </NavLink>
          </li>
          <li className="text-gray-400 hover:text-primary">
            <NavLink to="/about" onClick={handleCloseMenu}>
              Sobre
            </NavLink>
          </li>
          <li className="text-gray-400 hover:text-primary">
            <NavLink to="/projects" onClick={handleCloseMenu}>
              Projetos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
