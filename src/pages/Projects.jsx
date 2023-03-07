import React from "react";

// Images
import portfolio from "/assets/img/portfolio.jpg";
import moviecorn from "/assets/img/moviecorn.jpg";
import musicplayer from "/assets/img/musicplayer.jpg";
import calculator from "/assets/img/calculator.jpg";

// Icons
import { FiLink, FiGithub } from "react-icons/fi";

// Projects
const Projects = () => {
  const projects = [
    {
      id: 1,
      src: portfolio,
      title: "Portfólio",
      description:
        "No meu portfólio você conheçe um pouco dos meus projetos e lê um pouco sobre mim. Esse projeto foi desenvolvido com React e Tailwind.",
      visit: "https://guhrodrigues.vercel.app/",
      code: "https://github.com/projects-gustavo/portfolio",
    },
    {
      id: 2,
      src: moviecorn,
      title: "MovieCorn",
      description:
        "MovieCorn é uma aplicação onde é mostrado uma biblioteca de filmes e séries utilizando a TMDb API. Foi desenvolvido com React, Styled Components e React Router.",
      visit: "https://moviecorn.vercel.app/",
      code: "https://github.com/projects-gustavo/moviecorn",
    },
    {
      id: 3,
      src: musicplayer,
      title: "Music Player",
      description:
        "Nesse website você ouve minhas top 10 músicas favoritas. Desenvolvido com HTML, CSS e JavaScript",
      visit: "https://projects-gustavo.github.io/music-player/",
      code: "https://github.com/projects-gustavo/music-player",
    },
    {
      id: 4,
      src: calculator,
      title: "Calculadora",
      description:
        "Calculadora simples desenvolvida com HTML, CSS e JavaScript.",
      visit: "https://projects-gustavo.github.io/calculator/",
      code: "https://github.com/projects-gustavo/calculator",
    },
  ];

  return (
    <div className="w-full text-white md:h-screen" id="projects">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center mt-20">
          <h1 className="text-4xl inline">Projetos</h1>
          <p className="py-3 text-gray-400">
            Confira aqui alguns dos meus trabalhos
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, title, description, visit, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg bg-backgroundSecondary"
            >
              <img
                src={src}
                className="rounded-md hover:opacity-40 ease-in-out duration-300"
                alt={title}
              />
              <div className="flex flex-col justify-center mx-5 mt-3">
                <h3 className="font-semibold text-[20px] text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary">
                  {title}
                </h3>
                <span className="text-[14px] text-gray-400">{description}</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={visit}
                  className="font-medium text-primary"
                  target="_blank"
                >
                  <button className="w-full flex flex-row items-center justify-center gap-2 text-[14px] bg-primary border border-transparent rounded-lg text-white px-3 py-3 m-4 duration-300 hover:bg-opacity-50">
                    <FiLink size={20} />
                    Visitar
                  </button>
                </a>
                <a
                  href={code}
                  className="font-medium text-primary"
                  target="_blank"
                >
                  <button className="w-full flex flex-row items-center justify-center gap-2 text-[14px] border border-primary rounded-lg hover:bg-primary hover:text-white px-3 py-3 m-4 duration-300">
                    <FiGithub size={20} />
                    Repositório
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
