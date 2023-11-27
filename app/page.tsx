import { Globe } from "lucide-react";

import { AnimateEnter } from "@/components/utils/AnimateEnter";
import { Title } from "@/components/utils/Title";
import { Typography } from "@/components/utils/Typography";
import { Divider } from "@/components/utils/Divider";
import { LatestProjects } from "@/components/ui/LatestProjects";
import { ContactButton } from "@/components/ui/ContactButton";

export default function Home() {
  return (
    <AnimateEnter className="max-w-[854px] max-lg:py-8 lg:w-4/5 lg:pt-8">
      <section>
        <Title variant="title">Gustavo Rodrigues</Title>
        <Typography
          size="sm"
          className="relative mt-2 flex w-fit items-center gap-2 overflow-hidden rounded-lg border border-neutral-800 px-2 py-1.5 font-medium text-emerald-400/90"
        >
          <span className="text-emerald-400/95">
            <Globe size={16} />
          </span>
          São Paulo, Brasil
          <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-primary/30 via-10% to-transparent" />
        </Typography>
        <Typography className="mt-6 leading-relaxed">
          Como desenvolvedor web, meu objetivo é criar experiências digitais que
          combinem perfeitamente a estética elegante com a funcionalidade
          excepcional. Minha paixão é transformar código em experiências
          incríveis, garantindo que cada projeto conte uma história única e
          envolvente na web.
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
