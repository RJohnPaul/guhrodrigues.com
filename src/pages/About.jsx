// React Hooks
import { useEffect, useRef } from "react";

// Lottie
import Lottie from "lottie-react";

// Icon
import downloadIcon from "../../public/static/download.json";

// Toastify
import { downloadAlert } from "../components/Toast";
import Toast from "../components/Toast";

// Assets
import about from "/assets/img/about.jpg";
import curriculo from "/assets/docs/curriculo.pdf";

// About
const About = ({ title }) => {
  const downloadRef = useRef();

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <>
      <Toast />
      <section className="w-full lg:h-full lg:min-h-[calc(100vh_-_85px)] p-2 flex items-center py-16">
        <div className="sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1000px] 2xl:max-w-[1050px] m-auto gap-8 p-5">
          <div className="pb-8 text-center">
            <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm table mx-auto rounded-lg py-2">
              Introdução &mdash;
            </p>
            <h1 className="text-4xl font-extrabold bg-gradient-to-br from-white to-transparent via-primary bg-clip-text text-transparent">
              Sobre mim
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
            <div className="col-span-3 flex justify-center flex-col sm:mt-6 lg:ml-24 lg:mt-0 gap-3 sm:px-1 lg:px-0">
              <p className="lg:text-md sm:text-center lg:text-start leading-8 text-gray-400">
                Meu nome é{" "}
                <span className="text-primary">Gustavo Rodrigues</span>, tenho{" "}
                <span className="text-primary">17 anos</span> e nasci na região
                do Grande ABC. Sou{" "}
                <span className="text-primary">desenvolvedor web</span> e
                estudante de{" "}
                <span className="text-primary">
                  técnico em informática para internet
                </span>
                .
              </p>
              <p className="lg:text-md sm:text-center lg:text-start leading-8 text-gray-400">
                Tive meu{" "}
                <span className="text-primary">
                  primeiro contato com desenvolvimento web em 2021
                </span>
                , logo após a minha entrada no curso técnico.
              </p>
              <p className="lg:text-md sm:text-center lg:text-start leading-8 text-gray-400">
                Atualmente estou{" "}
                <span className="text-primary">
                  estudando e desenvolvendo projetos web
                </span>
                , com o{" "}
                <span className="text-primary">
                  objetivo de ampliar meus conhecimentos
                </span>{" "}
                e assim aprimorar ainda mais as habilidades que possuo.
              </p>
              <div className="mt-3.5 flex text-center sm:justify-center lg:justify-start">
                <a
                  href={curriculo}
                  download="Gustavo Rodrigues.pdf"
                  type="application/pdf"
                >
                  <button
                    onClick={downloadAlert}
                    onMouseEnter={() => downloadRef.current?.play()}
                    onMouseLeave={() => downloadRef.current?.stop()}
                    className="flex text-center items-center text-primary font-semibold py-3 px-4 gap-2 rounded-lg hover:bg-[#222] transition-colors"
                  >
                    <Lottie
                      lottieRef={downloadRef}
                      animationData={downloadIcon}
                      style={{ width: 24, height: 24 }}
                      autoplay={false}
                      loop={false}
                    />
                    Download C.V
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
