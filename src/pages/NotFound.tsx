// React Hooks
import { useEffect } from "react";

// React Router
import { Link } from "react-router-dom";

// Icon
import { MoveLeft } from "lucide-react";

// Section
import NotFoundSection from "@/components/sections/NotFoundSection";

// Not Found
export default function NotFound({ title }) {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <NotFoundSection>
            <div className="flex flex-col items-center justify-center p-8">
                <div className="flex flex-col gap-4 text-center">
                    <p className="flex text-primary md:text-[20px] font-medium mb-1">
                        A página que você está tentando acessar não existe.
                    </p>
                    <div className="flex items-center gap-4 justify-center">
                        <Link to="/">
                            <button className="group/icon w-full flex items-center justify-center py-2 px-3 gap-1.5 font-medium text-sm text-gray-400 hover:text-primary duration-300">
                                <MoveLeft
                                    className="group-hover/icon:-translate-x-1 duration-300 transition-transform"
                                    size={16}
                                />
                                voltar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </NotFoundSection>
    );
}
