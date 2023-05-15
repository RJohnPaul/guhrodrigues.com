// React Scroll
import { Link } from "react-scroll";

import "../styles/header.css"

// Header
const Header = () => {
  return (
    <header className="sm:invisible md:visible flex w-full fixed z-50 bg-background">
      <nav className="fixed max-w-[1200px] w-full md:px-6 xl:px-0 min-h-[9vh] justify-between mx-auto top-0 xl:static flex flex-row items-center gap-10 z-50">
        <div className="text-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={0}
            className="cursor-pointer"
          >
            <h1 className="md:text-4xl 2xl:text-4xl font-signature font-semibold relative p-2 text-primary">
              Gustavo
            </h1>
          </Link>
        </div>
        <ul className="flex items-center gap-8">
          <li className="text-tertiary hover:text-primary">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={0}
              className="cursor-pointer"
            >
              Início
            </Link>
          </li>
          <li className="text-tertiary hover:text-primary">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={0}
              className="cursor-pointer"
            >
              Sobre
            </Link>
          </li>
          <li className="text-tertiary hover:text-primary">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={0}
              className="cursor-pointer"
            >
              Habilidades
            </Link>
          </li>
          <li className="text-tertiary hover:text-primary">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={0}
              className="cursor-pointer"
            >
              Projetos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
