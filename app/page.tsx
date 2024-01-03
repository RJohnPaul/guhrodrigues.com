import { Send } from "lucide-react";

import { AnimateEnter } from "@/components/elements/AnimateEnter";
import { Title } from "@/components/elements/Title";
import { Typography } from "@/components/elements/Typography";
import { Divider } from "@/components/elements/Divider";
import { LatestProjects } from "@/components/elements/LatestProjects";
import { Button } from "@/components/elements/Button";

const HomePage = () => {
  return (
    <AnimateEnter className="max-w-[854px] max-lg:py-8 lg:w-4/5 lg:pt-8">
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
      <Divider />
      <section>
        <LatestProjects />
      </section>
      <Divider />
      <section className="flex flex-col gap-4 rounded-lg border border-border/50 bg-muted p-5">
        <Title variant="title" size="xl">
          Vamos trabalhar juntos!
        </Title>
        <Typography className="max-w-xl leading-relaxed">
          Se você se interessou pelo meu trabalho ou deseja fornecer feedback
          sobre este website,{" "}
          <span className="text-primary/80">estou aberto a trocar ideias</span>{" "}
          e discutir qualquer aspecto que possa ser relevante.
        </Typography>
        <Button className="w-fit">
          Contate-me
          <Send size={18} />
        </Button>
      </section>
    </AnimateEnter>
  );
};

export default HomePage;
