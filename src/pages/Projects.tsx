// React Hooks
import { useEffect } from "react";

// Data
import { projects } from "@/data/projects";

// ProjectItem Component
import ProjectItem from "@/components/ProjectItem";

// Projects
export default function Projects({ title }) {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <main className="w-full min-h-screen py-24">
            <section className="max-w-[1000px] py-3 px-4 mx-auto flex flex-col justify-center w-full">
                <div className="sm:px-2 lg:px-0 mb-8 space-y-4">
                    <h1 className="text-4xl font-extrabold">
                        Trabalho, hobby & open source.
                    </h1>
                    <p className="text-gray-400">
                        Sou fanático em criar{" "}
                        <span className="text-primary">projetos paralelos</span>
                        . Nesta página você pode navegar para{" "}
                        <span className="text-primary">
                            {projects.length} sites
                        </span>{" "}
                        na qual desenvolvi.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:px-2 lg:px-0">
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
