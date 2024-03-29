import Link from "next/link";

import { Send } from "lucide-react";

import { AnimateEnter } from "@/components/elements/AnimateEnter";
import { Title } from "@/components/elements/Title";
import { Typography } from "@/components/elements/Typography";
import { LatestProjects } from "@/components/elements/LatestProjects";
import { Button } from "@/components/elements/Button";

const HomePage = () => {
  return (
    <AnimateEnter className="max-w-[854px] space-y-12 max-lg:py-8 lg:w-4/5 lg:pt-8">
      <section className="space-y-4">
        <Title variant="title">Gustavo Rodrigues</Title>
        <Typography className="leading-relaxed">
          Como <span className="text-primary/80">desenvolvedor web</span>,
          almejo criar experiências digitais que harmonizem de maneira impecável
          a estética elegante com uma funcionalidade excepcional. Minha
          verdadeira paixão reside em{" "}
          <span className="text-primary/80">
            transformar códigos em experiências extraordinárias.
          </span>
        </Typography>
      </section>
      <section>
        <LatestProjects />
      </section>
      <section className="relative flex flex-col gap-4 overflow-hidden rounded-lg border border-border/50 bg-muted p-5">
        <Title variant="title" size="xl">
          Vamos trabalhar juntos!
        </Title>
        <Typography className="max-w-xl leading-relaxed">
          Se você se interessou pelo meu trabalho ou deseja fornecer feedback
          sobre este website,{" "}
          <span className="text-primary/80">estou aberto a trocar ideias</span>{" "}
          e discutir qualquer aspecto que possa ser relevante.
        </Typography>
        <Link href="/contact" className="w-fit">
          <Button>
            Contate-me
            <Send size={18} />
          </Button>
        </Link>
        <div className="absolute right-8 top-0 h-px w-[500px] bg-gradient-to-l from-transparent via-primary/30 via-20% to-transparent" />
      </section>
    </AnimateEnter>
  );
};

export default HomePage;
