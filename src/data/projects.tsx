import swiftmart from "@/assets/images/projects/swiftmart.png";
import moviecorn from "@/assets/images/projects/moviecorn.png";
import crypto from "@/assets/images/projects/crypto.png";
import weather from "@/assets/images/projects/weather.png";
import toDo from "@/assets/images/projects/to-do.png";
import musicplayer from "@/assets/images/projects/musicplayer.png";

import html from "@/assets/images/skills/html.svg";
import css from "@/assets/images/skills/css.svg";
import react from "@/assets/images/skills/react.svg";
import typescript from "@/assets/images/skills/typescript.svg";
import javascript from "@/assets/images/skills/javascript.svg";
import styledComponents from "@/assets/images/skills/styledcomponents.svg";
import tailwind from "@/assets/images/skills/tailwindcss.svg";

import { ProjectsProps } from "@/types";

export const projects: ProjectsProps[] = [
    {
        id: 1,
        src: swiftmart,
        title: "SwiftMart",
        description:
            "Simulação de e-commerce na qual utiliza a API do Mercado Livre para a listagem dos produtos.",
        techs: [react, typescript, styledComponents],
        code: "https://github.com/guhrodriguess/swiftmart",
        visit: "https://swiftmartstore.vercel.app",
    },
    {
        id: 2,
        src: moviecorn,
        title: "MovieCorn",
        description:
            "Aplicação onde é utilizada a TMDb API para mostrar uma biblioteca de filmes e séries.",
        techs: [react, styledComponents],
        code: "https://github.com/guhrodriguess/moviecorn",
        visit: "https://moviecorn.vercel.app",
    },
    {
        id: 3,
        src: crypto,
        title: "Crypto",
        description:
            "Sistema de criptografia e descriptografia realizado para um trabalho escolar.",
        techs: [react, tailwind],
        code: "https://github.com/guhrodriguess/crypto",
        visit: "https://crypto-shield.vercel.app/",
    },
    {
        id: 4,
        src: weather,
        title: "Weather",
        description:
            "Aplicação para mostrar a previsão do tempo utilizando a Open Weather API.",
        techs: [react, tailwind],
        code: "https://github.com/guhrodriguess/weather",
        visit: "https://earth-weather.vercel.app",
    },
    {
        id: 5,
        src: toDo,
        title: "To-do List",
        description:
            "Projeto desenvolvido para criar e armazenar tarefas com o uso do localStorage.",
        techs: [html, css, javascript],
        code: "https://github.com/guhrodriguess/to-do",
        visit: "https://guhrodriguess.github.io/to-do",
    },
    {
        id: 6,
        src: musicplayer,
        title: "Music Player",
        description:
            "A música sempre está presente em minha vida, então nesse site você pode ouvir minhas músicas favoritas.",
        techs: [html, css, javascript],
        code: "https://github.com/guhrodriguess/music-player",
        visit: "https://guhrodriguess.github.io/music-player",
    },
];
