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
import framer from "@/assets/images/skills/framer.svg";

import { ProjectProps } from "@/types";

export const projects: ProjectProps[] = [
  {
    id: 1,
    image: sharespace,
    title: "ShareSpace",
    smallDescription:
      "Descubra e compartilhe prompts, transforme suas ideias em obras-primas.",
    description: [
      {
        content:
          "A funcionalidade principal do ShareSpace é a geração de prompts e comentários. Os prompts são estímulos criativos que podem ser usados para inspirar a escrita, estimular a discussão ou desencadear novas ideias. Os usuários podem criar prompts personalizados ou colaborar em sua criação, promovendo assim a cocriação de conteúdo.",
      },
      {
        content:
          "Uma das características mais distintivas é sua integração perfeita com a autenticação do Google. Isso garante que os usuários tenham uma experiência segura e confiável ao acessar a plataforma.",
      },
    ],
    techs: [
      {
        image: nextjs,
        name: "Next.js",
      },
      {
        image: typescript,
        name: "TypeScript",
      },
      {
        image: mongo,
        name: "MongoDB",
      },
      {
        image: nextauth,
        name: "NextAuth",
      },
      {
        image: tailwind,
        name: "Tailwind CSS",
      },
      {
        image: shadcn,
        name: "shadcn/ui",
      },
      {
        image: framer,
        name: "Framer",
      },
    ],
    code: "https://github.com/guhrodriguess/sharespace",
    visit: "https://sharespacelab.vercel.app",
    slug: "sharespace",
  },
  {
    id: 2,
    image: quickchat,
    title: "QuickChat",
    smallDescription: "Chatbot com uma experiência inteligente e agradável.",
    description: [
      {
        content:
          "Chatbot que faz uso da API da OpenAI em conjunto com a Vercel SDK para fornecer interações de conversação eficientes e automatizadas.",
      },
      {
        content:
          "Esta aplicação tem o potencial de ser uma ferramenta valiosa em várias aplicações, desde atendimento ao cliente automatizado até assistência em tarefas específicas.",
      },
      {
        content:
          "O QuickChat permite que os usuários tenham conversas naturais com um assistente virtual, alimentado pela tecnologia de IA da OpenAI.",
      },
    ],
    techs: [
      {
        image: nextjs,
        name: "Next.js",
      },
      {
        image: typescript,
        name: "TypeScript",
      },
      {
        image: openai,
        name: "OpenAI API",
      },
      {
        image: tailwind,
        name: "Tailwind CSS",
      },
      {
        image: shadcn,
        name: "shadcn/ui",
      },
    ],
    code: "https://github.com/guhrodriguess/quickchat",
    slug: "quickchat",
  },
  {
    id: 3,
    image: swiftmart,
    title: "SwiftMart",
    smallDescription:
      "Simulação de e-commerce na qual utiliza a API do Mercado Livre para a listagem dos produtos.",
    description: [
      {
        content:
          "Simulador de e-commerce inovador que possui funcionalidades de carrinho, listagem de produtos e pesquisa avançada. Utilizando a API do Mercado Livre, o SwiftMart oferece uma ampla gama de recursos que simulam a funcionalidade de uma loja virtual autêntica.",
      },
    ],
    techs: [
      {
        image: vite,
        name: "Vite",
      },
      {
        image: react,
        name: "React",
      },
      {
        image: typescript,
        name: "TypeScript",
      },
      {
        image: styledComponents,
        name: "Styled Components",
      },
    ],
    code: "https://github.com/guhrodriguess/swiftmart",
    visit: "https://swiftmartstore.vercel.app",
    slug: "swiftmart",
  },
  {
    id: 4,
    image: moviecorn,
    title: "MovieCorn",
    smallDescription:
      "Aplicação onde é utilizada a TMDb API para mostrar uma biblioteca de filmes e séries.",
    description: [
      {
        content:
          "Plataforma dedicada a fornecer informações detalhadas sobre filmes e séries de TV, usando a API do The Movie Database (TMDb). O MovieCorn é uma fonte valiosa para os amantes do cinema e da televisão que desejam descobrir, explorar e acompanhar os títulos mais populares, os rankeados e os lançamentos mais recentes.",
      },
    ],
    techs: [
      {
        image: vite,
        name: "Vite",
      },
      {
        image: react,
        name: "React",
      },
      {
        image: typescript,
        name: "TypeScript",
      },
      {
        image: styledComponents,
        name: "Styled Components",
      },
    ],
    code: "https://github.com/guhrodriguess/moviecorn",
    visit: "https://moviecorn.vercel.app",
    slug: "moviecorn",
  },
  {
    id: 5,
    image: crypto,
    title: "Crypto",
    smallDescription:
      "Sistema de criptografia e descriptografia realizado para um trabalho escolar.",
    description: [
      {
        content:
          "Aplicação para um trabalho escolar que oferece recursos de criptografia e descriptografia de contentos, permitindo aos usuários protegerem informações sensíveis por meio do uso da biblioteca crypto-js.",
      },
      {
        content:
          "Esta ferramenta fornece uma camada adicional de segurança e privacidade para as comunicações online e é valiosa para qualquer pessoa que deseje manter suas informações confidenciais.",
      },
    ],
    techs: [
      {
        image: vite,
        name: "Vite",
      },
      {
        image: react,
        name: "React",
      },
      {
        image: tailwind,
        name: "Tailwind CSS",
      },
    ],
    code: "https://github.com/guhrodriguess/crypto",
    visit: "https://crypto-shield.vercel.app/",
    slug: "crypto",
  },
  {
    id: 6,
    image: weather,
    title: "Weather",
    smallDescription:
      "Aplicação para mostrar a previsão do tempo utilizando a Open Weather API.",
    description: [
      {
        content:
          "Aplicação que utiliza a API da OpenWeather para fornecer informações atualizadas sobre as condições climáticas em todo o mundo.",
      },
      {
        content:
          "Esta aplicação é uma ferramenta valiosa para pessoas que desejam acompanhar o clima em diversas localidades e planejar suas atividades com base nas previsões meteorológicas",
      },
    ],
    techs: [
      {
        image: vite,
        name: "Vite",
      },
      {
        image: react,
        name: "React",
      },
      {
        image: tailwind,
        name: "Tailwind CSS",
      },
    ],
    code: "https://github.com/guhrodriguess/weather",
    visit: "https://earth-weather.vercel.app",
    slug: "weather",
  },
  {
    id: 7,
    image: todo,
    title: "To-do",
    smallDescription:
      "Projeto desenvolvido para criar e armazenar tarefas com o uso do localStorage.",
    description: [
      {
        content:
          "O projeto To-do com o uso do localStorage é uma aplicação de lista de tarefas que permite aos usuários criar, visualizar, concluir e excluir tarefas, com a capacidade de armazenar essas informações localmente no navegador.",
      },
      {
        content:
          "Essa abordagem é particularmente útil para manter listas de tarefas pessoais sem a necessidade de um servidor ou banco de dados.",
      },
    ],
    techs: [
      {
        image: html,
        name: "HTML",
      },
      {
        image: css,
        name: "CSS",
      },
      {
        image: javascript,
        name: "JavaScript",
      },
    ],
    code: "https://github.com/guhrodriguess/to-do",
    visit: "https://guhrodriguess.github.io/to-do",
    slug: "to-do",
  },
  {
    id: 8,
    image: musicplayer,
    title: "Music Player",
    smallDescription:
      "A música sempre está presente em minha vida, ouça minhas músicas favoritas.",
    description: [
      {
        content:
          "Meu projeto Music Player representa um marco significativo em minha jornada criativa. Foi um dos primeiros projetos que eu criei e uma decisão que tomei para compartilhar minha profunda paixão pela música.",
      },
      {
        content:
          "Cada aspecto foi meticulosamente construído 100% à mão, do design aos controles, para transmitir a essência da minha conexão com a música.",
      },
    ],
    techs: [
      {
        image: html,
        name: "HTML",
      },
      {
        image: css,
        name: "CSS",
      },
      {
        image: javascript,
        name: "JavaScript",
      },
    ],
    code: "https://github.com/guhrodriguess/music-player",
    visit: "https://guhrodriguess.github.io/music-player",
    slug: "music-player",
  },
];
