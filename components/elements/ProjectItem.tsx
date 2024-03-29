"use client";

import Link from "next/link";
import { StaticImageData } from "next/image";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { Image } from "@/components/elements/Image";
import { Typography } from "@/components/elements/Typography";
import { Title } from "./Title";

type Project = {
  image: StaticImageData;
  title: string;
  smallDescription: string;
  techs: Array<{
    image: StaticImageData;
    name: string;
  }>;
  slug: string;
};

const ProjectItem = (props: Project) => {
  const { image, title, smallDescription, techs, slug } = props;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <Link
      href={`/projects/${slug}`}
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className="group relative flex flex-col items-center overflow-hidden rounded-xl border border-border/50 p-2"
    >
      <div className="absolute right-5 top-0 h-px w-[400px] bg-gradient-to-l from-transparent via-primary/30 via-20% to-transparent" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative flex flex-col">
        <Image src={image} className="rounded-md" alt={title} />
        <div className="flex w-full flex-col space-y-4 px-3 py-4">
          <div className="flex flex-col justify-center space-y-2">
            <Title variant="title" size="xl">
              {title}
            </Title>
            <Typography size="sm" className="leading-[1.7]">
              {smallDescription}
            </Typography>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {techs.map((tech, index) => (
              <Image key={index} src={tech.image} width={22} alt={tech.name} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export { ProjectItem };
