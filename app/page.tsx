import Link from "next/link";

import { Globe } from "lucide-react";

import { LatestProjects } from "@/components/ui/LatestProjects";
import { AnimateEnter } from "@/components/utils/AnimateEnter";
import { Button } from "@/components/utils/Button";
import { Divider } from "@/components/utils/Divider";
import { Title } from "@/components/utils/Title";
import { Typography } from "@/components/utils/Typography";

export default function Home() {
  return (
    <AnimateEnter className="max-w-[854px] pt-8 lg:w-4/5">
      <section>
        <Title variant="title">Gustavo Rodrigues</Title>
        <Typography variant="muted" className="mt-2 flex items-center gap-2">
          <span className="text-emerald-600">
            <Globe size={16} />
          </span>
          São Paulo, Brasil
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
      <section className="flex flex-col gap-4 rounded-lg border border-neutral-800 bg-neutral-900 p-5">
        <Title variant="title" size="xl">
          Vamos trabalhar juntos!
        </Title>
        <Typography className="leading-relaxed">
          Caso se interessou pelo meu trabalho ou queira dar um feedback sobre
          este website, vamos trocar um papo.
        </Typography>
        <Link href="/contact" className="w-fit">
          <Button>Contate-me</Button>
        </Link>
      </section>
    </AnimateEnter>
  );
}
