// Images
import portfolio from "/assets/img/portfolio.jpg";
import moviecorn from "/assets/img/moviecorn.jpg";
import musicplayer from "/assets/img/musicplayer.jpg";
import calculator from "/assets/img/calculator.jpg";
import toDo from "/assets/img/to-do.jpg";
import weather from "/assets/img/weather.jpg";

export const projects = [
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
