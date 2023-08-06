import { useEffect } from "react";

import { Link } from "react-router-dom";

import { MoveLeft } from "lucide-react";

export default function NotFound({ title }) {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <main className="w-full relative h-[90vh] flex text-center items-center justify-center">
            <section className="flex flex-col items-center justify-center p-8">
                <div className="flex flex-col gap-4 text-center">
                    <p className="text-primary md:text-[20px] font-medium mb-1">
                        A página que você está tentando acessar não existe.
                    </p>
                    <div className="flex items-center gap-4 justify-center">
                        <Link to="/">
                            <button className="group/icon w-full flex items-center justify-center py-2 px-3 gap-1.5 font-medium text-sm text-neutral-400 hover:text-primary duration-300">
                                <MoveLeft
                                    className="group-hover/icon:-translate-x-1 duration-300 transition-transform"
                                    size={16}
                                />
                                voltar
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
