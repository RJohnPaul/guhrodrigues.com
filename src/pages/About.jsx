import React from "react";

// Icon
import { RiDownload2Fill } from "react-icons/ri";

// Assets
import about from "/assets/img/about.jpg";
import curriculo from "/assets/docs/curriculo.pdf";

// About
const About = () => {
  return (
    <section
      className="w-full md:min-h-screen p-2 flex items-center py-16"
      id="about"
    >
      <div className="sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1000px] 2xl:max-w-[1050px] m-auto gap-8 p-5">
        <h1 className="text-4xl text-center">Sobre</h1>
        <p className="py-3 mb-2 text-center text-gray-400">Introdução</p>
        <div className="md:grid lg:grid-cols-5">
          <div className="w-full h-auto sm:col-span-3 lg:col-span-2 m-auto flex items-center justify-center p-4">
            <img
              src={about}
              className="rounded-2xl flex w-[450px] hover:scale-105 ease-in duration-300"
              alt="Gustavo"
            />
          </div>
          <div className="col-span-3 flex justify-center flex-col sm:mt-6 lg:ml-24 lg:mt-0 gap-3">
            <p className="lg:text-md sm:text-center lg:text-start leading-7 text-gray-500 dark:text-gray-300">
              Meu nome é Gustavo Rodrigues, tenho 17 anos e nasci na região do
              Grande ABC. Sou desenvolvedor web e estudante de técnico em
              informática para internet.
            </p>
            <p className="lg:text-md sm:text-center lg:text-start leading-7 text-gray-500 dark:text-gray-300">
              Meu primeiro contato com desenvolvimento web começou em 2021, logo
              após a minha entrada no curso técnico.
            </p>
            <p className="lg:text-md sm:text-center lg:text-start leading-7 text-gray-500 dark:text-gray-300">
              Atualmente estou estudando e desenvolvendo projetos web, com o
              objetivo de ampliar meus conhecimentos e assim aprimorar ainda
              mais as habilidades que possuo.
            </p>
            <div className="mt-6 flex text-center sm:justify-center lg:justify-start">
              <a
                href={curriculo}
                download="Gustavo Rodrigues.pdf"
                type="application/pdf"
              >
                <button className="flex text-center items-center font-medium gap-1 bg-primary py-3 px-3.5 text-[#D2EAFF] rounded-lg hover:opacity-90 duration-300">
                  Download C.V
                  <RiDownload2Fill />
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
