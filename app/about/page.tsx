import { Metadata } from "next";

import { AnimateEnter } from "@/components/elements/AnimateEnter";
import { Title } from "@/components/elements/Title";
import { Biography } from "@/components/elements/Biography";
import { DownloadButton } from "@/components/elements/DownloadButton";
import { Stack } from "@/components/elements/Stack";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça um pouco de mim e das minhas paixões.",
};

const AboutPage = () => {
  return (
    <AnimateEnter className="max-w-[854px] space-y-12 overflow-hidden max-lg:py-8 lg:w-4/5 lg:pt-8">
      <section>
        <Title variant="title">Sobre mim</Title>
        <div className="my-6">
          <Biography />
        </div>
        <div className="w-fit">
          <DownloadButton />
        </div>
      </section>
      <Stack />
    </AnimateEnter>
  );
};

export default AboutPage;
