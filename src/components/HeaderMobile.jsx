// React Hooks
import { useState } from "react";

// Icons
import { List, X } from "phosphor-react";

// React Scroll
import { Link } from "react-scroll";

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
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={0}
          onClick={handleCloseMenu}
          className="cursor-pointer text-[2.2rem] font-signature font-semibold relative p-2 text-primary"
        >
          Gustavo
        </Link>
      </div>
      <nav
        className={`fixed w-full left-0 h-full ${
          showMenu
            ? "bottom-0 z-[-1] bg-black/80 backdrop-blur-[15px] pointer-events-auto opacity-1 translate-y-0"
            : "-bottom-full z-[-1] opacity-0 pointer-events-none translate-y-[50px] transition-[.5s]"
        } top-0 flex items-center justify-center transition-all duration-500 z-50`}
      >
        <ul className={`flex flex-col items-center justify-center gap-10`}>
          <li className="text-tertiary">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={0}
              className="cursor-pointer"
              onClick={handleCloseMenu}
              activeClass="text-primary"
            >
              Início
            </Link>
          </li>
          <li className="text-tertiary">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={0}
              className="cursor-pointer"
              onClick={handleCloseMenu}
              activeClass="text-primary"
            >
              Sobre
            </Link>
          </li>
          <li className="text-tertiary">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={0}
              className="cursor-pointer"
              onClick={handleCloseMenu}
              activeClass="text-primary"
            >
              Habilidades
            </Link>
          </li>
          <li className="text-tertiary">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={0}
              className="cursor-pointer"
              onClick={handleCloseMenu}
              activeClass="text-primary"
            >
              Projetos
            </Link>
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
