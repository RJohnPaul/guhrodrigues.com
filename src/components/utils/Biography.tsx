import { m } from "framer-motion";

const animation = {
  hide: {
    x: -8,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

export default function Biography() {
  return (
    <m.div
      initial="hide"
      animate="show"
      transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      className="leading-8 space-y-4"
    >
      <m.p className="text-md text-foreground" variants={animation}>
        Meu nome é{" "}
        <span className="text-primary font-medium">Gustavo Rodrigues</span>, sou{" "}
        <span className="text-primary font-medium">Desenvolvedor Web</span> e
        estudante de{" "}
        <span className="text-primary font-medium">
          Técnico em Informática para Internet
        </span>
        .
      </m.p>
      <m.p className="text-md text-foreground font-normal" variants={animation}>
        Gosto de criar experiências únicas e fluidas para o usuário. Atualmente
        interessado em{" "}
        <span className="text-primary font-medium">TypeScript e C</span>.
      </m.p>
      <m.p className="text-md text-foreground font-normal" variants={animation}>
        Estou sempre{" "}
        <span className="text-primary font-medium">
          em busca de conhecimento
        </span>{" "}
        por meio de projetos novos, desafios e assim crescer profissionalmente.
      </m.p>
      <m.p className="text-md text-foreground font-normal" variants={animation}>
        <span className="text-primary font-medium">
          Interfaces minimalistas
        </span>
        , dark mode e projetos paralelos me encantam. Desfrutar de músicas é uma{" "}
        <span className="text-primary font-medium">terapia para mim</span>.
      </m.p>
    </m.div>
  );
}
