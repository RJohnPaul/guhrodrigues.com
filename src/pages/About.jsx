// React Hooks
import { useRef } from "react";

// Lottie
import Lottie from "lottie-react";

// React Toastify
import { toast } from "react-toastify";

// Icon
import downloadIcon from "../../public/static/download.json";

// Assets
import about from "/assets/img/about.jpg";
import curriculo from "/assets/docs/curriculo.pdf";

// About
const About = () => {
  const downloadRef = useRef();

  const downloadAlert = () => {
    toast.success("Downloading...");
  };

  return (
    <section
      className="w-full md:min-h-screen p-2 flex items-center py-16"
      id="about"
    >
      <div className="sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1000px] 2xl:max-w-[1050px] m-auto gap-8 p-5">
        <p className="text-primary text-sm font-semibold uppercase bg-primary/20 table mx-auto py-1 px-2 rounded-lg">
          Apresentação
        </p>
        <h1 className="text-3xl py-3 mb-2 text-center text-secondary">Sobre</h1>
        <div className="md:grid lg:grid-cols-5">
          <div className="w-full h-auto sm:col-span-3 lg:col-span-2 m-auto flex items-center justify-center p-4">
            <img
              src={about}
              className="rounded-2xl flex w-[450px] hover:scale-105 ease-in duration-300"
              alt="Gustavo"
            />
          </div>
          <div className="col-span-3 flex justify-center flex-col sm:mt-6 lg:ml-24 lg:mt-0 gap-3">
            <p className="lg:text-md sm:text-center lg:text-start leading-8 text-gray-400">
              <span className="text-white">Meu nome é Gustavo Rodrigues</span>,
              tenho 17 anos e nasci na região do Grande ABC. Sou{" "}
              <span className="text-white">desenvolvedor web</span> e{" "}
              <span className="text-white">
                estudante de técnico em informática para internet
              </span>
              .
            </p>
            <p className="lg:text-md sm:text-center lg:text-start leading-8 text-gray-400">
              Tive meu{" "}
              <span className="text-white">
                primeiro contato com desenvolvimento web em 2021
              </span>
              , logo após a minha entrada no curso técnico.
            </p>
            <p className="lg:text-md sm:text-center lg:text-start leading-8 text-gray-400">
              Atualmente estou estudando e desenvolvendo projetos web, com o{" "}
              <span className="text-white">
                objetivo de ampliar meus conhecimentos
              </span>{" "}
              e assim aprimorar ainda mais as habilidades que possuo.
            </p>
            <div className="mt-3 flex text-center sm:justify-center lg:justify-start">
              <a
                href={curriculo}
                download="Gustavo Rodrigues.pdf"
                type="application/pdf"
              >
                <button
                  onMouseEnter={() => downloadRef.current?.play()}
                  onClick={downloadAlert}
                  onMouseLeave={() => downloadRef.current?.stop()}
                  className="flex text-center bg-primary border-2 border-transparent items-center text-white font-semibold py-3 px-3 gap-2 rounded-lg duration-300 hover:bg-primary/70"
                >
                  <Lottie
                    lottieRef={downloadRef}
                    animationData={downloadIcon}
                    style={{ width: 24, height: 24 }}
                    autoPlay={false}
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
  );
};

export default About;
