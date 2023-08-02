import { useEffect } from "react";

import { projects } from "@/data/projects";
import ProjectItem from "@/components/ProjectItem";

export default function Projects({ title }) {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <main className="w-full min-h-screen py-16">
            <section className="py-9 mx-auto flex flex-col justify-center w-full">
                <div className="mb-8 space-y-4">
                    <h1 className="text-4xl font-extrabold">
                        Trabalho, hobby & open source.
                    </h1>
                    <p className="text-gray-400">
                        Sou fanático em criar{" "}
                        <span className="text-primary">projetos pessoais</span>.
                        Nesta página você pode navegar para{" "}
                        <span className="text-primary">
                            {projects.length} sites
                        </span>{" "}
                        na qual desenvolvi.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8">
                    {projects.map(
                        ({
                            id,
                            src,
                            title,
                            description,
                            techs,
                            code,
                            visit,
                        }) => (
                            <ProjectItem
                                key={id}
                                src={src}
                                title={title}
                                description={description}
                                techs={techs}
                                code={code}
                                visit={visit}
                            />
                        )
                    )}
                </div>
            </section>
        </main>
    );
}
