import React from "react";

// Images
import portfolio from "/assets/img/portfolio.jpg";
import moviecorn from "/assets/img/moviecorn.jpg";
import musicplayer from "/assets/img/musicplayer.jpg";
import calculator from "/assets/img/calculator.jpg";
import toDo from "/assets/img/to-do.jpg";
import weather from "/assets/img/weather.jpg";

import { ArrowUpRight } from "phosphor-react";

// Projects
const Projects = () => {
  const projects = [
    {
      id: 1,
      src: portfolio,
      title: "Portfólio",
      description:
        "No meu portfólio você conhece um pouco dos meus projetos e lê um pouco sobre mim.",
      visit: "https://guhrodrigues.vercel.app/",
    },
    {
      id: 2,
      src: moviecorn,
      title: "MovieCorn",
      description:
        "Aplicação onde é utilizada a TMDb API para mostrar uma biblioteca de filmes e séries.",
      visit: "https://moviecorn.vercel.app/",
    },
    {
      id: 3,
      src: musicplayer,
      title: "Music Player",
      description:
        "A música sempre está presente em minha vida, então nesse site você pode ouvir minhas músicas favoritas.",
      visit: "https://projects-gustavo.github.io/music-player/",
    },
    {
      id: 4,
      src: weather,
      title: "Weather",
      description:
        "Aplicação para mostrar a previsão do tempo utilizando a Open Weather API.",
      visit: "https://earth-weather.vercel.app",
    },
    {
      id: 5,
      src: toDo,
      title: "To-do List",
      description: "Projeto desenvolvido para criar e armazenar tarefas.",
      visit: "https://projects-gustavo.github.io/to-do/",
    },
    {
      id: 6,
      src: calculator,
      title: "Calculadora",
      description:
        "Calculadora simples desenvolvida para praticar o uso do JavaScript.",
      visit: "https://projects-gustavo.github.io/calculator/",
    },
  ];

  return (
    <section className="w-full min-h-screen sm:pt-36 lg:p-12" id="projects">
      <div className="max-w-[1000px] min-h-screen p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8 text-center">
          <p className="text-primary text-sm uppercase font-semibold bg-primary/20 table mx-auto py-1 px-2 rounded-lg">
            Portfólio
          </p>
          <h1 className="text-3xl py-3 mb-2 text-center text-slate-800 dark:text-secondary">
            Projetos
          </h1>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, title, description, visit }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-300 dark:shadow-gray-600 rounded-lg bg-backgroundSecondary h-full"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={src}
                  className="hover:scale-105 ease-in-out duration-200"
                  alt={title}
                />
              </div>
              <div className="flex flex-col justify-center mx-5 mt-3">
                <h3 className="font-bold text-[20px] text-primary">{title}</h3>
                <span className="max-w-full text-[13.5px] text-gray-700 dark:text-color font-medium mt-1">
                  {description}
                </span>
              </div>
              <div className="mx-4 my-3 pb-1">
                <a href={visit} target="_blank">
                  <button className="w-full flex flex-row items-center justify-center gap-1 text-[14px] border-2 border-primary rounded-lg font-semibold text-primary hover:bg-primary hover:text-[#D2EAFF] py-2 px-3 duration-300">
                    Visitar
                    <ArrowUpRight size={20} weight="bold" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
