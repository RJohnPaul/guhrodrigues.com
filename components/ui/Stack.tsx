import { Code2 } from "lucide-react";

import { stack } from "@/data/stack";

import { Title } from "@/components/utils/Title";
import { Typography } from "@/components/utils/Typography";
import { Image } from "@/components/utils/Image";

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
      <ul className="mt-4 flex flex-wrap items-center gap-3">
        {stack.map(({ id, src, name }) => (
          <li
            key={id}
            className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2"
          >
            <Image src={src} width={18} alt={name} />
            <Typography size="sm" className="font-medium">
              {name}
            </Typography>
          </li>
        ))}
      </ul>
    </section>
  );
}
