import sharespace from "@/assets/images/projects/sharespace.png";
import quickchat from "@/assets/images/projects/quickchat.png";
import swiftmart from "@/assets/images/projects/swiftmart.png";
import moviecorn from "@/assets/images/projects/moviecorn.png";
import crypto from "@/assets/images/projects/crypto.png";
import weather from "@/assets/images/projects/weather.png";
import todo from "@/assets/images/projects/todo.png";
import musicplayer from "@/assets/images/projects/musicplayer.png";

import html from "@/assets/images/skills/html.svg";
import css from "@/assets/images/skills/css.svg";
import nextjs from "@/assets/images/skills/nextjs.svg";
import vite from "@/assets/images/skills/vite.svg";
import shadcn from "@/assets/images/skills/shadcn.svg";
import mongo from "@/assets/images/skills/mongo.svg";
import nextauth from "@/assets/images/skills/nextauth.svg";
import openai from "@/assets/images/skills/openai.svg";
import react from "@/assets/images/skills/react.svg";
import typescript from "@/assets/images/skills/typescript.svg";
import javascript from "@/assets/images/skills/javascript.svg";
import styledComponents from "@/assets/images/skills/styledcomponents.svg";
import tailwind from "@/assets/images/skills/tailwindcss.svg";

import { ProjectsProps } from "@/types";

export const projects: ProjectsProps[] = [
  {
    id: 1,
    src: sharespace,
    title: "ShareSpace",
    description:
      "Descubra e compartilhe prompts, transforme suas ideias em obras-primas.",
    techs: [nextjs, typescript, mongo, nextauth, tailwind, shadcn],
    code: "https://github.com/guhrodriguess/sharespace",
    visit: "https://sharespacelab.vercel.app",
  },
  {
    id: 2,
    src: quickchat,
    title: "QuickChat",
    description:
      "Chatbot feito com o Vercel SDK, assim tornando-o uma experiência interativa, inteligente e agradável.",
    techs: [nextjs, typescript, openai, tailwind, shadcn],
    code: "https://github.com/guhrodriguess/quickchat",
  },
  {
    id: 3,
    src: swiftmart,
    title: "SwiftMart",
    description:
      "Simulação de e-commerce na qual utiliza a API do Mercado Livre para a listagem dos produtos.",
    techs: [vite, react, typescript, styledComponents],
    code: "https://github.com/guhrodriguess/swiftmart",
    visit: "https://swiftmartstore.vercel.app",
  },
  {
    id: 4,
    src: moviecorn,
    title: "MovieCorn",
    description:
      "Aplicação onde é utilizada a TMDb API para mostrar uma biblioteca de filmes e séries.",
    techs: [vite, react, typescript, styledComponents],
    code: "https://github.com/guhrodriguess/moviecorn",
    visit: "https://moviecorn.vercel.app",
  },
  {
    id: 5,
    src: crypto,
    title: "Crypto",
    description:
      "Sistema de criptografia e descriptografia realizado para um trabalho escolar.",
    techs: [vite, react, tailwind],
    code: "https://github.com/guhrodriguess/crypto",
    visit: "https://crypto-shield.vercel.app/",
  },
  {
    id: 6,
    src: weather,
    title: "Weather",
    description:
      "Aplicação para mostrar a previsão do tempo utilizando a Open Weather API.",
    techs: [vite, react, tailwind],
    code: "https://github.com/guhrodriguess/weather",
    visit: "https://earth-weather.vercel.app",
  },
  {
    id: 7,
    src: todo,
    title: "Todo",
    description:
      "Projeto desenvolvido para criar e armazenar tarefas com o uso do localStorage.",
    techs: [html, css, javascript],
    code: "https://github.com/guhrodriguess/to-do",
    visit: "https://guhrodriguess.github.io/to-do",
  },
  {
    id: 8,
    src: musicplayer,
    title: "Music Player",
    description:
      "A música sempre está presente em minha vida, então nesse site você pode ouvir minhas músicas favoritas.",
    techs: [html, css, javascript],
    code: "https://github.com/guhrodriguess/music-player",
    visit: "https://guhrodriguess.github.io/music-player",
  },
];
