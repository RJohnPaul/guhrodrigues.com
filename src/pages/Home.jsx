// React Hooks
import { useEffect, useRef } from "react";

// React Scroll
import { Link } from "react-router-dom";

// Lottie
import Lottie from "lottie-react";

// Icons
import codeIcon from "../../public/static/code.json";

// TypeWriter
import TypeWriter from "typewriter-effect";

// Transition Effect
import TransitionEffect from "../components/TransitionEffect";

// Framer Motion
import { motion } from "framer-motion";
import { ArrowRight } from "phosphor-react";

// Home
const Home = ({ title }) => {
  const codeRef = useRef();

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <TransitionEffect />
      <section
        className="w-full relative sm:h-[70vh] md:h-screen flex text-center items-center justify-center"
        id="home"
      >
        <div className="flex flex-col items-center justify-center p-8">
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
            className="flex flex-col gap-4 text-center"
          >
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
              <Link to="/projects">
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
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
