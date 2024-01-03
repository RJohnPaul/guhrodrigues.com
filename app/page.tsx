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
          Como desenvolvedor web, almejo criar experiências digitais que
          harmonizem de maneira impecável a estética elegante com uma
          funcionalidade excepcional. Minha verdadeira paixão reside em
          transformar códigos em experiências extraordinárias.
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
          Caso se interessou pelo meu trabalho ou queira dar um feedback sobre
          este website, vamos trocar um papo.
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
