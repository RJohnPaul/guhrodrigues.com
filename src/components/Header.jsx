// React Scroll
import { NavLink } from "react-router-dom";

// Styles
import "../styles/header.css";

// Header
const Header = () => {
  return (
    <header className="sm:invisible md:visible flex w-full z-50 fixed bg-background">
      <nav className="fixed max-w-[1200px] w-full md:px-6 xl:px-0 py-3 min-h-[9vh] justify-between mx-auto top-0 xl:static flex flex-row items-center gap-10 z-50">
        <div className="text-center">
          <NavLink to="/">
            <h1 className="md:text-4xl 2xl:text-4xl font-signature font-semibold relative p-2 text-primary">
              Gustavo
            </h1>
          </NavLink>
        </div>
        <ul className="flex items-center gap-8">
          <li className="text-tertiary hover:text-primary">
            <NavLink to="/">Início</NavLink>
          </li>
          <li className="text-tertiary hover:text-primary">
            <NavLink to="/about">Sobre</NavLink>
          </li>
          <li className="text-tertiary hover:text-primary">
            <NavLink to="/skills">Habilidades</NavLink>
          </li>
          <li className="text-tertiary hover:text-primary">
            <NavLink to="/projects">Projetos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
