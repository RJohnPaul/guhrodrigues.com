// Images
import portfolio from "/assets/img/portfolio.jpg";
import moviecorn from "/assets/img/moviecorn.jpg";
import musicplayer from "/assets/img/musicplayer.jpg";
import crypto from "/assets/img/crypto.jpg";
import toDo from "/assets/img/to-do.jpg";
import weather from "/assets/img/weather.jpg";

// Data
export const projects = [
  {
    id: 1,
    src: portfolio,
    title: "Portfólio",
    description:
      "No meu portfólio você conhece um pouco dos meus projetos e lê um pouco sobre mim.",
    techs: ["React", "Tailwind CSS", "React Router"],
    code: "https://github.com/projects-gustavo/portfolio",
    visit: "https://guhrodrigues.vercel.app",
  },
  {
    id: 2,
    src: moviecorn,
    title: "MovieCorn",
    description:
      "Aplicação onde é utilizada a TMDb API para mostrar uma biblioteca de filmes e séries utilizando a TMDb API.",
    techs: ["React", "Styled Components", "React Router"],
    code: "https://github.com/projects-gustavo/moviecorn",
    visit: "https://moviecorn.vercel.app",
  },
  {
    id: 3,
    src: crypto,
    title: "Crypto",
    description:
      "Sistema de criptografia e descriptografia utilizando o crypto-js.",
    techs: ["React", "Tailwind CSS", "React Router"],
    code: "https://github.com/projects-gustavo/crypto",
    visit: "https://crypto-shield.vercel.app/",
  },
  {
    id: 4,
    src: weather,
    title: "Weather",
    description:
      "Aplicação para mostrar a previsão do tempo utilizando a Open Weather API.",
    techs: ["React", "Tailwind CSS"],
    code: "https://github.com/projects-gustavo/weather",
    visit: "https://earth-weather.vercel.app",
  },
  {
    id: 5,
    src: toDo,
    title: "To-do List",
    description: "Projeto desenvolvido para criar e armazenar tarefas.",
    techs: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/projects-gustavo/to-do",
    visit: "https://projects-gustavo.github.io/to-do",
  },
  {
    id: 6,
    src: musicplayer,
    title: "Music Player",
    description:
      "A música sempre está presente em minha vida, então nesse site você pode ouvir minhas músicas favoritas.",
    techs: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/projects-gustavo/music-player",
    visit: "https://projects-gustavo.github.io/music-player",
  },
];
