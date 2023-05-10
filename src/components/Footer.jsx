// Data
import { socials } from "../data/footer-data";

// React Scroll
import { Link } from "react-scroll";

// Icon
import { MouseSimple } from "phosphor-react";

// Tippy
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale-extreme.css";
import "../styles/tippy.css";

// Footer
const Footer = () => {
  return (
    <footer className="bg-primary p-12 sm:mt-36 md:mt-96 lg:mt-52 xl:mt-36 2xl:mt-56">
      <div className="flex flex-col items-center justify-center mb-3">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={0}
          className="cursor-pointer"
        >
          <button
            onMouseEnter={() => mouseRef.current?.play()}
            onMouseLeave={() => mouseRef.current?.stop()}
            className="flex items-center"
          >
            <Tippy
              content={
                <span className="sm:invisible lg:visible flex items-center gap-1 select-none">
                  Topo <MouseSimple weight="bold" size={17} />
                </span>
              }
              animation="scale-extreme"
              inertia={true}
              theme="custom"
              placement="right"
            >
              <h1 className="font-signature table mx-auto text-secondary text-center text-5xl mb-8">
                Gustavo
              </h1>
            </Tippy>
          </button>
        </Link>
        <div className="text-center relative">
          <ul className="sm:block lg:flex text-center gap-16 select-none">
            {socials.map(({ id, href, name }) => (
              <a
                href={href}
                className="text-secondary hover:text-secondary"
                target="_blank"
              >
                <li
                  key={id}
                  className="relative pb-1.5 sm:p-4 sm:float-left sm:w-[50%] sm:mx-0 lg:float-none lg:w-full lg:p-1 after:content-[''] after:w-0 lg:after:h-[2px] after:block after:bg-secondary after:left-[40%] after:-translate-x-[40%] after:absolute after:transition-all after:bottom-0 hover:after:w-[85%]"
                >
                  {name}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <p className="text-secondary flex justify-center text-center items-center text-sm gap-2.5 font-medium mt-6">
          2023 © Gustavo Rodrigues. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
