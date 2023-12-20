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
import styledComponents from "@/assets/images/skills/styledcomponents.svg";
import tailwind from "@/assets/images/skills/tailwindcss.svg";
import framer from "@/assets/images/skills/framer.svg";
import mui from "@/assets/images/skills/mui.svg";
import mysql from "@/assets/images/skills/mysql.svg";

type Stack = Array<{
  src: StaticImageData;
  name: string;
}>;

const stack: Stack = [
  {
    src: nextjs,
    name: "Next.js",
  },
  {
    src: react,
    name: "React",
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
    src: node,
    name: "Node.js",
  },
  {
    src: vite,
    name: "Vite",
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
    src: tailwind,
    name: "Tailwind CSS",
  },
  {
    src: styledComponents,
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
    src: html,
    name: "HTML",
  },
  {
    src: css,
    name: "CSS",
  },
];

export { stack };
