import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Undo2, Eye, Github } from "lucide-react";

import { projects } from "@/data/projects";

import { AnimateEnter } from "@/components/utils/AnimateEnter";
import { Separator } from "@/components/utils/Separator";
import { Title } from "@/components/utils/Title";
import { Typography } from "@/components/utils/Typography";

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata | undefined> {
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    return;
  }

  const { title, smallDescription, slug, image } = project;

  return {
    title,
    description: smallDescription,
    openGraph: {
      description: smallDescription,
      title,
      images: `${image}`,
      type: "website",
      url: `https://guhrodrigues.com/projects/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      description: smallDescription,
      images: `${image}`,
      title,
    },
  };
}

export default function ProjectPage({ params }: { params: any }) {
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  const { title, smallDescription, visit, code, techs, image, description } =
    project;

  return (
    <AnimateEnter className="max-w-[854px] max-lg:py-8 lg:w-4/5 lg:pt-8">
      <section className="space-y-6">
        <Link
          href="/projects"
          className="flex w-fit items-center gap-1 text-sm font-medium text-neutral-400 duration-300 hover:gap-1.5 hover:text-foreground"
        >
          <Undo2 size={16} />
          Voltar
        </Link>
        <div className="space-y-4">
          <div className="space-y-2">
            <Title variant="title">{title}</Title>
            <Typography>{smallDescription}</Typography>
          </div>
          <div className="flex items-center gap-2">
            {visit && (
              <>
                <a
                  href={visit}
                  target="_blank"
                  className="font-mono flex items-center gap-2 text-base"
                >
                  <Eye size={18} className="text-primary" />
                  <span className="text-emerald-500 hover:text-emerald-400">
                    Visualizar
                  </span>
                </a>
                <Separator />
              </>
            )}
            <a
              href={code}
              target="_blank"
              className="font-mono flex items-center gap-2 text-base"
            >
              <Github size={18} className="text-primary" />
              <span className="text-emerald-500 hover:text-emerald-400">
                Código fonte
              </span>
            </a>
          </div>
        </div>
        <figure className="overflow-hidden rounded-md">
          <Image
            src={image}
            className="duration-500 hover:scale-110"
            alt={title}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </figure>
      </section>
      <section className="mt-6">
        <article className="space-y-6">
          <div className="space-y-4">
            <Title variant="title" size="xl">
              Descrição
            </Title>
            <Typography className="leading-relaxed">{description}</Typography>
          </div>
          <div className="space-y-4">
            <Title variant="title" size="xl">
              Tecnologias utilizadas
            </Title>
            <ul className="flex flex-wrap items-center gap-3">
              {techs.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2"
                >
                  <Image
                    src={tech.image}
                    width={18}
                    alt={tech.name}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
                  />
                  <Typography size="sm">{tech.name}</Typography>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </AnimateEnter>
  );
}
