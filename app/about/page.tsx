import { Metadata } from "next";

import { AnimateEnter } from "@/components/utils/AnimateEnter";
import { Title } from "@/components/utils/Title";
import { Biography } from "@/components/ui/Biography";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { Divider } from "@/components/utils/Divider";
import { Stack } from "@/components/ui/Stack";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça um pouco de mim e das minhas paixões.",
};

export default function About() {
  return (
    <AnimateEnter className="max-w-[854px] max-lg:py-8 lg:w-4/5 lg:pt-8">
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
}
