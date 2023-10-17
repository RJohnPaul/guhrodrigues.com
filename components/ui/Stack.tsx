import Image from "next/image";

import { Code2 } from "lucide-react";

import { stack } from "@/data/stack";

import { Title } from "@/components/utils/Title";
import { Typography } from "@/components/utils/Typography";

export function Stack() {
  return (
    <section>
      <div className="space-y-2">
        <Title variant="title" size="xl" className="flex items-center gap-2">
          <Code2 size={18} />
          Habilidades
        </Title>
        <Typography>Meu conhecimento técnico.</Typography>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {stack.map(({ id, src, name }) => (
          <Image
            key={id}
            src={src}
            width={30}
            className="grayscale duration-300 hover:grayscale-0"
            alt={name}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
          />
        ))}
      </div>
    </section>
  );
}
