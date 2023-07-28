// React Hooks
import { useEffect } from "react";

// React Router
import { Link } from "react-router-dom";

// Icon
import { MoveRight } from "lucide-react";

// Home
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
                        <p className="sm:text-sm md:text-md mb-1 text-gray-400">
                            A tecnologia move o mundo.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 justify-center">
                        <Link to="/projects">
                            <button className="group/icon w-full flex items-center justify-center py-2 px-3 gap-1.5 font-medium text-sm text-gray-400 hover:text-primary duration-300">
                                Veja meus projetos
                                <MoveRight
                                    className="group-hover/icon:translate-x-1 duration-300 transition-transform"
                                    size={20}
                                />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
