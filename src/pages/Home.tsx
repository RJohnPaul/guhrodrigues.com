import { useEffect } from "react";

import { Link } from "react-router-dom";

import Button from "@/components/Button";

import { MoveRight } from "lucide-react";

export default function Home({ title }) {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <main className="w-full sm:h-full sm:min-h-[calc(100vh_-_85px)] flex text-center justify-center pt-20">
            <section className="flex flex-col items-center justify-center p-8">
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-5xl py-1 font-bold">
                        Gustavo Rodrigues
                    </h1>
                    <div className="flex flex-col justify-center gap-2">
                        <p className="sm:text-sm md:text-md text-primary">
                            Desenvolvedor Web & Estudante de T.I
                        </p>
                        <p className="sm:text-sm md:text-md text-neutral-400">
                            A tecnologia move o mundo.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 justify-center">
                        <Link to="/projects">
                            <Button ghost className="rounded-xl group gap-1.5">
                                Veja meus projetos
                                <MoveRight
                                    className="group-hover:translate-x-0.5 duration-300 transition-transform"
                                    size={20}
                                />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
