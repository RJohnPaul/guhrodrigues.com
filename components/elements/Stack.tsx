"use client";

import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import { stacks } from "@/data/stacks";

import { InfiniteSlider } from "./InfiniteSlider";
import { Title } from "./Title";
import { Typography } from "./Typography";
import { Image } from "./Image";

const Stack = () => {
  const [shuffledSkills, setShuffledSkills] = useState<
    Array<[string, StaticImageData]>
  >([]);

  useEffect(() => {
    const skillsArray = Object.entries(stacks);
    const shuffledArray = [...skillsArray].sort(() => Math.random() - 0.5);

    setShuffledSkills(shuffledArray);
  }, []);

  const sliders = Array.from({ length: 3 }, (_, index) => {
    const sliderSkills = [...shuffledSkills].sort(() => Math.random() - 0.5);

    return (
      <InfiniteSlider key={index} isReverse={index === 1}>
        {sliderSkills.map(([title, image]) => (
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
      </InfiniteSlider>
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
        <div className="bg-fade-gradient pointer-events-none absolute inset-0" />
      </div>
    </section>
  );
};

export { Stack };
