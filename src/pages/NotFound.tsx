import { useEffect } from "react";

import { Link } from "react-router-dom";

import Button from "@/components/utils/Button";

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
                            <Button ghost className="rounded-xl group gap-1.5">
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
        </main>
    );
}
