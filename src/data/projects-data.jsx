// Images
import portfolio from "/assets/img/portfolio.png";
import swiftmart from "/assets/img/swiftmart.png";
import moviecorn from "/assets/img/moviecorn.png";
import crypto from "/assets/img/crypto.png";
import weather from "/assets/img/weather.png";
import toDo from "/assets/img/to-do.png";
import musicplayer from "/assets/img/musicplayer.png";

// Data
export const projects = [
    {
        id: 1,
        src: portfolio,
        title: "Portfólio",
        description:
            "No meu portfólio você conhece um pouco dos meus projetos e lê um pouco sobre mim.",
        techs: ["React", "Tailwind CSS", "React Router"],
        code: "https://github.com/guhrodriguess/portfolio",
        visit: "https://guhrodrigues.vercel.app",
    },
    {
        id: 2,
        src: swiftmart,
        title: "SwiftMart",
        description:
            "Simulação de e-commerce na qual utiliza a API do Mercado Livre para a listagem dos produtos.",
        techs: ["React", "TypeScript", "Styled Components"],
        code: "https://github.com/guhrodriguess/swiftmart",
        visit: "https://swiftmartstore.vercel.app",
    },
    {
        id: 3,
        src: moviecorn,
        title: "MovieCorn",
        description:
            "Aplicação onde é utilizada a TMDb API para mostrar uma biblioteca de filmes e séries.",
        techs: ["React", "Styled Components", "React Router"],
        code: "https://github.com/guhrodriguess/moviecorn",
        visit: "https://moviecorn.vercel.app",
    },
    {
        id: 4,
        src: crypto,
        title: "Crypto",
        description:
            "Sistema de criptografia e descriptografia realizado para um trabalho escolar.",
        techs: ["React", "Tailwind CSS", "CryptoJS"],
        code: "https://github.com/guhrodriguess/crypto",
        visit: "https://crypto-shield.vercel.app/",
    },
    {
        id: 5,
        src: weather,
        title: "Weather",
        description:
            "Aplicação para mostrar a previsão do tempo utilizando a Open Weather API.",
        techs: ["React", "Tailwind CSS"],
        code: "https://github.com/guhrodriguess/weather",
        visit: "https://earth-weather.vercel.app",
    },
    {
        id: 6,
        src: toDo,
        title: "To-do List",
        description:
            "Projeto desenvolvido para criar e armazenar tarefas com o uso do localStorage.",
        techs: ["HTML", "CSS", "JavaScript"],
        code: "https://github.com/guhrodriguess/to-do",
        visit: "https://guhrodriguess.github.io/to-do",
    },
    {
        id: 7,
        src: musicplayer,
        title: "Music Player",
        description:
            "A música sempre está presente em minha vida, então nesse site você pode ouvir minhas músicas favoritas.",
        techs: ["HTML", "CSS", "JavaScript"],
        code: "https://github.com/guhrodriguess/music-player",
        visit: "https://guhrodriguess.github.io/music-player",
    },
];
