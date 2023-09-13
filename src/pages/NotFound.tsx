import { useEffect } from "react";

import { Link } from "react-router-dom";

import { MoveLeft } from "lucide-react";

import { Typography } from "@/components/utils/Typography";
import { Button } from "@/components/utils/Button";

export function NotFound({ title }) {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <article className="w-full relative h-[90vh] flex text-center items-center justify-center">
      <section className="flex flex-col items-center justify-center p-8">
        <div className="flex flex-col gap-4 text-center">
          <Typography>
            A página que você está tentando acessar não existe.
          </Typography>
          <div className="flex items-center gap-4 justify-center">
            <Link to="/">
              <Button variant="ghost" className="group">
                <MoveLeft
                  className="group-hover:-translate-x-0.5 duration-300 transition-transform"
                  size={20}
                />
                voltar
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
