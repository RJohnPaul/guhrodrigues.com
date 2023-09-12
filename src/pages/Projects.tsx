import { useEffect } from "react";

import { AnimateEnter } from "@/components/utils/AnimateEnter";
import { ProjectsContent } from "@/components/content/ProjectsContent";

export function Projects({ title }) {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <article className="w-full py-20">
      <AnimateEnter className="py-9 mx-auto flex flex-col justify-center w-full">
        <ProjectsContent />
      </AnimateEnter>
    </article>
  );
}
