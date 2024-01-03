import { StaticImageData } from "next/image";

import html from "@/assets/images/skills/html.svg";
import css from "@/assets/images/skills/css.svg";
import nextjs from "@/assets/images/skills/nextjs.svg";
import vite from "@/assets/images/skills/vite.svg";
import shadcn from "@/assets/images/skills/shadcn.svg";
import mongo from "@/assets/images/skills/mongo.svg";
import react from "@/assets/images/skills/react.svg";
import typescript from "@/assets/images/skills/typescript.svg";
import javascript from "@/assets/images/skills/javascript.svg";
import node from "@/assets/images/skills/nodejs.svg";
import styled_components from "@/assets/images/skills/styled-components.svg";
import tailwind from "@/assets/images/skills/tailwindcss.svg";
import framer from "@/assets/images/skills/framer.svg";
import radix from "@/assets/images/skills/radix.svg";
import mui from "@/assets/images/skills/mui.svg";
import mysql from "@/assets/images/skills/mysql.svg";
import prisma from "@/assets/images/skills/prisma.svg";
import express from "@/assets/images/skills/express.svg";
import react_router from "@/assets/images/skills/react-router.svg";
import next_auth from "@/assets/images/skills/next-auth.svg";
import git from "@/assets/images/skills/git.svg";
import vitest from "@/assets/images/skills/vitest.svg";
import jest from "@/assets/images/skills/jest.svg";

type Stacks = Array<{
  src: StaticImageData;
  name: string;
}>;

const stacks: Stacks = [
  {
    src: nextjs,
    name: "Next.js",
  },
  {
    src: react,
    name: "React",
  },
  {
    src: vite,
    name: "Vite",
  },
  {
    src: typescript,
    name: "TypeScript",
  },
  {
    src: javascript,
    name: "JavaScript",
  },
  {
    src: react_router,
    name: "React Router",
  },
  {
    src: next_auth,
    name: "Next Auth",
  },
  {
    src: tailwind,
    name: "Tailwind CSS",
  },
  {
    src: styled_components,
    name: "Styled Components",
  },
  {
    src: mui,
    name: "MUI",
  },
  {
    src: shadcn,
    name: "shadcn/ui",
  },
  {
    src: framer,
    name: "Framer",
  },
  {
    src: radix,
    name: "Radix UI",
  },
  {
    src: html,
    name: "HTML",
  },
  {
    src: css,
    name: "CSS",
  },
  {
    src: node,
    name: "Node.js",
  },
  {
    src: express,
    name: "Express",
  },
  {
    src: prisma,
    name: "Prisma",
  },
  {
    src: vitest,
    name: "Vitest",
  },
  {
    src: jest,
    name: "Jest",
  },
  {
    src: mongo,
    name: "MongoDB",
  },
  {
    src: mysql,
    name: "MySQL",
  },
  {
    src: git,
    name: "Git",
  },
];

export { stacks };
