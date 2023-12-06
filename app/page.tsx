import { AnimateEnter } from "@/components/utils/AnimateEnter";
import { Title } from "@/components/utils/Title";
import { Typography } from "@/components/utils/Typography";
import { Divider } from "@/components/utils/Divider";
import { LatestProjects } from "@/components/ui/LatestProjects";
import { ContactButton } from "@/components/ui/ContactButton";

export default function Home() {
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
}
