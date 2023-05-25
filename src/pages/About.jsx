// React Hooks
import { useEffect, useRef } from "react";

// Lottie
import Lottie from "lottie-react";

// Icon
import downloadIcon from "../../public/static/download.json";

// Download Alert
import { downloadAlert } from "../components/Toast";

// Assets
import about from "/assets/img/about.jpg";
import curriculo from "/assets/docs/curriculo.pdf";

// Framer Motion
import { motion } from "framer-motion";

// Transition Effect
import TransitionEffect from "../components/TransitionEffect";

// Data
import { socials } from "../data/footer-data";

// About
const About = ({ title }) => {
  const downloadRef = useRef();

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <>
      <TransitionEffect />
      <section
        className="w-full md:min-h-screen p-2 flex items-center py-16"
        id="about"
      >
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
          className="sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1000px] 2xl:max-w-[1050px] m-auto gap-8 p-5"
        >
          <div className="pb-8 text-center">
            <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm table mx-auto rounded-lg py-2">
              Introdução &mdash;
            </p>
            <h1 className="text-4xl text-center text-secondary">
              Sobre <span className="text-primary">mim</span>
            </h1>
          </div>
          <div className="md:grid lg:grid-cols-5">
            <div className="w-full h-auto sm:col-span-3 lg:col-span-2 m-auto flex items-center justify-center p-4">
              <img
                src={about}
                className="rounded-2xl flex w-[450px] hover:scale-105 ease-in duration-300"
                alt="Gustavo"
              />
            </div>
            <div className="col-span-3 flex justify-center flex-col sm:mt-6 lg:ml-24 lg:mt-0 gap-3 sm:px-4 lg:px-0">
              <p className="lg:text-md sm:text-center lg:text-start leading-8 text-tertiary">
                Meu nome é Gustavo Rodrigues, tenho 17 anos e nasci na região do
                Grande ABC. Sou desenvolvedor web e estudante de técnico em
                informática para internet.
              </p>
              <p className="lg:text-md sm:text-center lg:text-start leading-8 text-tertiary">
                Tive meu primeiro contato com desenvolvimento web em 2021, logo
                após a minha entrada no curso técnico.
              </p>
              <p className="lg:text-md sm:text-center lg:text-start leading-8 text-tertiary">
                Atualmente estou estudando e desenvolvendo projetos web, com o
                objetivo de ampliar meus conhecimentos e assim aprimorar ainda
                mais as habilidades que possuo.
              </p>
              <div className="mt-3.5 flex text-center sm:justify-center lg:justify-start">
                <a
                  href={curriculo}
                  download="Gustavo Rodrigues.pdf"
                  type="application/pdf"
                >
                  <button
                    onMouseEnter={() => downloadRef.current?.play()}
                    onClick={downloadAlert}
                    onMouseLeave={() => downloadRef.current?.stop()}
                    className="group flex text-center bg-transparent border-2 border-primary items-center text-primary font-semibold py-3 px-4 gap-2 rounded-lg transition-all duration-300 hover:bg-primary hover:text-white"
                  >
                    <Lottie
                      lottieRef={downloadRef}
                      animationData={downloadIcon}
                      style={{ width: 24, height: 24 }}
                      autoplay={false}
                      loop={false}
                      className="hidden group-hover:block"
                    />
                    Download C.V
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 py-5">
            {socials.map(({ id, href, icon }) => (
              <a href={href} key={id} target="_blank">
                <button className="p-3 rounded-md text-primary sm:hover:bg-transparent lg:hover:bg-primary lg:hover:text-black duration-300">
                  {icon}
                </button>
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
