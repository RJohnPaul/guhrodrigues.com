// React Hooks
import { useRef, useState } from "react";

// React Router
import { NavLink } from "react-router-dom";

// Styles
import "../styles/header.css";

// Icons
import { List, X } from "phosphor-react";
import contactIcon from "../../public/static/contact.json";

// Lottie
import Lottie from "lottie-react";

// Header
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const contactRef = useRef();

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
      <nav className="fixed max-w-[1250px] w-full xl:px-3 p-5 justify-between mx-auto right-0 left-0 top-0 xl:static flex flex-row items-center gap-10 z-50">
        <div className="text-center">
          <NavLink to="/" onClick={handleCloseMenu}>
            <h1 className="sm:text-md md:text-xl font-semibold relative text-primary">
              Gustavo
            </h1>
          </NavLink>
        </div>
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
        <div>
          <a href="https://wa.me/5511986319802" target="_blank">
            <button
              onMouseEnter={() => contactRef.current?.play()}
              onMouseLeave={() => contactRef.current?.stop()}
              className="sm:hidden md:flex text-center justify-center items-center bg-primary text-black font-semibold p-3 text-sm gap-1.5 rounded-2xl hover:bg-primary/70 duration-300"
            >
              Contato
              <Lottie
                lottieRef={contactRef}
                animationData={contactIcon}
                style={{ width: 18, height: 18 }}
                autoplay={false}
                loop={false}
              />
            </button>
          </a>
        </div>
        <button
          onClick={handleMenu}
          className="text-primary transition-transform active:scale-90 sm:flex md:hidden"
        >
          {showMenu ? <X size={26} /> : <List size={26} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
