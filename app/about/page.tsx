import { Metadata } from "next";

import { AnimateEnter } from "@/components/elements/AnimateEnter";
import { Title } from "@/components/elements/Title";
import { Biography } from "@/components/elements/Biography";
import { DownloadButton } from "@/components/elements/DownloadButton";
import { Divider } from "@/components/elements/Divider";
import { Stack } from "@/components/elements/Stack";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça um pouco de mim e das minhas paixões.",
};

const AboutPage = () => {
  return (
    <AnimateEnter className="max-w-[854px] overflow-hidden max-lg:py-8 lg:w-4/5 lg:pt-8">
      <section>
        <Title variant="title">Sobre mim</Title>
        <div className="my-6">
          <Biography />
        </div>
        <div className="w-fit">
          <DownloadButton />
        </div>
      </section>
      <Divider />
      <Stack />
    </AnimateEnter>
  );
};

export default AboutPage;
