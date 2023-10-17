import { Metadata } from "next";
import Image from "next/image";

import author from "@/assets/images/author.jpg";

import { Title } from "@/components/utils/Title";
import { Biography } from "@/components/ui/Biography";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { Divider } from "@/components/utils/Divider";
import { Stack } from "@/components/ui/Stack";
import { AnimateEnter } from "@/components/utils/AnimateEnter";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça um pouco de mim e das minhas paixões.",
};

export default function About() {
  return (
    <AnimateEnter className="max-w-[854px] py-8 lg:w-4/5">
      <section>
        <Title variant="title">Sobre mim</Title>
        <div className="my-6 flex justify-between gap-12 sm:flex-col md:flex-row lg:items-center">
          <figure className="md:order-2">
            <Image
              src={author}
              className="w-[400px] rounded-lg md:w-[1000px]"
              alt="Gustavo"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
              priority
            />
          </figure>
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
