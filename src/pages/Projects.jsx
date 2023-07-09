// React Hooks
import { useEffect } from "react";

// Data
import { projects } from "../data/projects";

// ProjectItem Component
import ProjectItem from "../components/ProjectItem";

// Projects
export default function Projects({ title }) {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <section className="w-full min-h-screen py-24">
            <div className="max-w-[1000px] min-h-screen p-4 mx-auto flex flex-col justify-center w-full">
                <div className="pb-8 text-center">
                    <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm table mx-auto rounded-lg py-2">
                        Minhas aplicações &mdash;
                    </p>
                    <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-br from-white to-transparent via-primary bg-clip-text text-transparent">
                        Meus projetos
                    </h1>
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
            </div>
        </section>
    );
}
