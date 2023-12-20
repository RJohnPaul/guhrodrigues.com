import { AnimateEnter } from "@/components/Elements/AnimateEnter";
import { Title } from "@/components/Elements/Title";
import { Typography } from "@/components/Elements/Typography";
import { Divider } from "@/components/Elements/Divider";
import { LatestProjects } from "@/components/Elements/LatestProjects";
import { ContactButton } from "@/components/Button/components/ContactButton";

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
      <section className="flex flex-col gap-4 rounded-lg border border-neutral-800 bg-neutral-900 bg-globe-pattern bg-right bg-no-repeat p-5 max-md:bg-none">
        <Title variant="title" size="xl">
          Vamos trabalhar juntos!
        </Title>
        <Typography className="max-w-xl leading-relaxed">
          Caso se interessou pelo meu trabalho ou queira dar um feedback sobre
          este website, vamos trocar um papo.
        </Typography>
        <ContactButton />
      </section>
    </AnimateEnter>
  );
};

export default HomePage;
