import { m } from "framer-motion";

import { ChevronRight } from "lucide-react";

import { ProjectsProps } from "@/types";

import { Button } from "@/components/utils/Button";
import { Typography } from "@/components/utils/Typography";

const animation = {
  hide: {
    y: -8,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export function ProjectItem({
  src,
  title,
  description,
  techs,
  code,
  visit,
}: ProjectsProps) {
  return (
    <m.section
      variants={animation}
      className="relative flex flex-col border border-neutral-800 rounded-xl h-full overflow-hidden"
    >
      <div className="absolute top-0 right-5 w-80 h-px bg-gradient-to-l from-transparent via-primary/50 via-10% to-transparent" />
      <figure className="overflow-hidden rounded-t-xl">
        <img
          src={src}
          loading="lazy"
          className="max-w-5xl w-full"
          alt={title}
        />
      </figure>
      <div className="flex flex-col items-center text-center md:items-start md:text-start w-full py-7 px-10 space-y-2">
        <div className="flex flex-col justify-center space-y-2">
          <h3 className="font-bold text-xl text-primary">{title}</h3>
          <Typography size="sm">{description}</Typography>
        </div>
        <div className="flex gap-3 py-3">
          {techs.map((tech: string) => (
            <img
              key={tech}
              src={tech}
              width={22}
              loading="lazy"
              className="grayscale hover:grayscale-0 duration-300"
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {visit && code ? (
            <>
              <a href={visit} target="_blank">
                <Button size="rounded">
                  Visitar
                  <ChevronRight size={14} />
                </Button>
              </a>
              <a href={code} target="_blank">
                <Button variant="ghost" size="rounded">
                  Repositório
                  <ChevronRight size={14} />
                </Button>
              </a>
            </>
          ) : (
            <a href={code} target="_blank">
              <Button size="rounded">
                Repositório
                <ChevronRight size={14} />
              </Button>
            </a>
          )}
        </div>
      </div>
    </m.section>
  );
}
