// React Scroll
import { Link } from "react-scroll";

// Header
const Header = () => {
  return (
    <header className="sm:invisible lg:visible flex w-full fixed z-50 bg-backgroundPrimaryDark">
      <nav className="fixed max-w-[1200px] w-full h-[8vh] justify-between mx-auto top-0 xl:static flex flex-row items-center gap-10 z-50">
        <div className="text-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={0}
            className="cursor-pointer lg:text-3xl 2xl:text-[2.4rem] font-signature font-semibold relative p-2 text-primary"
          >
            Gustavo
          </Link>
        </div>
        <ul className="flex items-center gap-8">
          <li>
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
          <li>
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
          <li>
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
          <li>
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
