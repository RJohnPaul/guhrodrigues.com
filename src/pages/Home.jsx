// React Hooks
import { useRef } from "react";

// React Scroll
import { Link } from "react-scroll";

// Lottie
import Lottie from "lottie-react";

// Icons
import mouseIcon from "../../public/static/mouse.json";
import codeIcon from "../../public/static/code.json";

// TypeWriter
import TypeWriter from "typewriter-effect";

// Home
const Home = () => {
  const codeRef = useRef();
  const mouseRef = useRef();

  return (
    <section
      className="w-full md:min-h-screen sm:h-[70vh] grid grid-cols-1 md:grid-cols-9 sm:text-center sm:items-center md:text-start"
      id="home"
    >
      <div className="md:col-span-12 flex flex-col items-center justify-center p-8">
        <div className="flex flex-col gap-4 text-center">
          <h1>
            <span className="font-medium text-tertiary lg:text-[22px]">
              Meu nome é
            </span>
            <br />
            <span className="text-primary font-black sm:text-5xl md:text-5xl lg:text-7xl">
              Gustavo Rodrigues
            </span>
          </h1>
          <p className="flex gap-1 justify-center md:text-[20px] font-medium mb-1">
            <span className="text-gray-400">Sou</span>
            <span className="text-primary">
              <TypeWriter
                options={{
                  strings: [
                    "desenvolvedor web",
                    "estudante de informática",
                    "entusiasta da tecnologia",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <div className="flex items-center gap-4 justify-center">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={0}
              className="cursor-pointer"
            >
              <button
                onMouseEnter={() => codeRef.current?.play()}
                onMouseLeave={() => codeRef.current?.stop()}
                className="flex text-center items-center lg:text-[16px] gap-2 font-medium py-3 px-5 rounded-2xl border-2 border-transparent text-white bg-primary duration-300 hover:bg-primary/70"
              >
                Meus projetos
                <Lottie
                  lottieRef={codeRef}
                  animationData={codeIcon}
                  style={{ width: 30, height: 30 }}
                  autoplay={false}
                  loop={false}
                />
              </button>
            </Link>
          </div>
        </div>
        <div className="sm:invisible lg:visible flex absolute bottom-5 w-full justify-center items-center">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={0}
            className="cursor-pointer"
          >
            <Lottie
              lottieRef={mouseRef}
              animationData={mouseIcon}
              style={{ width: 90, height: 90 }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
