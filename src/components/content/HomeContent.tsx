import { m } from "framer-motion";

import Button from "@/components/utils/Button";

import { Link } from "react-router-dom";

import { MoveRight } from "lucide-react";

const animation = {
  hide: {
    y: 8,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export default function HomeContent() {
  return (
    <m.div
      initial="hide"
      animate="show"
      transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      className="flex flex-col gap-4 text-center"
    >
      <m.h1 className="text-5xl py-1 font-bold" variants={animation}>
        Gustavo Rodrigues
      </m.h1>
      <m.div
        className="flex flex-col justify-center gap-2"
        variants={animation}
      >
        <p className="sm:text-sm md:text-md text-primary">
          Desenvolvedor Web & Estudante de T.I
        </p>
        <p className="sm:text-sm md:text-md text-neutral-400">
          Fanático pela criação de interfaces
        </p>
      </m.div>
      <m.div
        className="flex items-center gap-4 justify-center"
        variants={animation}
      >
        <Link to="/projects">
          <Button ghost className="rounded-lg group gap-1.5">
            Veja meus projetos
            <MoveRight
              className="group-hover:translate-x-0.5 duration-300 transition-transform"
              size={20}
            />
          </Button>
        </Link>
      </m.div>
    </m.div>
  );
}
