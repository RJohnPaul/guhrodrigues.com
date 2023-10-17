import { Metadata } from "next";
import Link from "next/link";

import { MoveLeft } from "lucide-react";

import { Typography } from "@/components/utils/Typography";
import { Button } from "@/components/utils/Button";

export const metadata: Metadata = {
  title: "Not Found",
  description: "A página que você está tentando acessar não existe.",
};

export default function NotFound() {
  return (
    <main className="flex max-w-[854px] items-center justify-center py-8 lg:w-4/5 lg:py-0">
      <section className="flex flex-col items-center justify-center p-8">
        <div className="flex flex-col gap-4 text-center">
          <Typography>
            A página que você está tentando acessar não existe.
          </Typography>
          <div className="flex items-center justify-center gap-4">
            <Link href="/">
              <Button variant="ghost" className="group">
                <MoveLeft
                  className="transition-transform duration-300 group-hover:-translate-x-0.5"
                  size={20}
                />
                voltar
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
