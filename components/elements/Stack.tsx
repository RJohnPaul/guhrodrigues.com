"use client";

import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import { stacks } from "@/data/stacks";

import { cn } from "@/lib/utils";

import { Title } from "./Title";
import { Typography } from "./Typography";
import { Image } from "./Image";

const Stack = () => {
  const [shuffledStack, setShuffledStack] = useState<
    Array<[string, StaticImageData]>
  >([]);

  useEffect(() => {
    const stack = Object.entries(stacks);
    const stackArray = [...stack].sort(() => Math.random() - 0.5);

    setShuffledStack(stackArray);
  }, []);

  const sliders = Array.from({ length: 3 }, (_, index) => {
    const slider = [...shuffledStack].sort(() => Math.random() - 0.5);

    return (
      <div
        key={index}
        className={cn(
          "flex w-fit animate-slide",
          index === 1 ? "direction-reverse" : "direction-normal",
        )}
      >
        {slider.map(([title, image]) => (
          <div
            key={title}
            className="mr-3 flex w-max items-center gap-2 rounded-lg border border-border/50 bg-muted px-3 py-2"
          >
            <Image src={image} width={20} alt={title} />
            <Typography size="sm" className="font-medium">
              {title}
            </Typography>
          </div>
        ))}
      </div>
    );
  });

  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <Title variant="title" size="xl">
          Habilidades
        </Title>
        <Typography className="leading-relaxed">
          Explore as tecnologias e ferramentas que impulsionam minha jornada de
          desenvolvimento.
        </Typography>
      </div>
      <div className="relative flex flex-col justify-start gap-y-4 overflow-hidden py-2">
        {sliders}
        <div className="pointer-events-none absolute inset-0 bg-fade-gradient" />
      </div>
    </section>
  );
};

export { Stack };
