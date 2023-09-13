import { Link } from "react-router-dom";

import { m } from "framer-motion";

import { MoveRight } from "lucide-react";

import { Button } from "@/components/utils/Button";
import { Title } from "@/components/utils/Title";
import { Typography } from "@/components/utils/Typography";

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

export function HomeContent() {
  return (
    <m.div
      initial="hide"
      animate="show"
      transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      className="flex flex-col gap-4 text-center"
    >
      <m.div variants={animation}>
        <Title variant="title" size="xxl">
          Gustavo Rodrigues
        </Title>
      </m.div>
      <m.div
        className="flex flex-col justify-center gap-2"
        variants={animation}
      >
        <Typography variant="primary" className="sm:text-sm md:text-md">
          Desenvolvedor Web & Estudante de T.I
        </Typography>
        <Typography variant="muted" className="sm:text-sm md:text-md">
          Fanático pela criação de interfaces
        </Typography>
      </m.div>
      <m.div className="flex items-center justify-center" variants={animation}>
        <Link to="/projects">
          <Button variant="ghost" className="group">
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
