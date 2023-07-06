// React Hooks
import { useEffect } from "react";

// React Router
import { Link } from "react-router-dom";

// Phosphor React
import { ArrowLeft } from "phosphor-react";

// Not Found
const NotFound = ({ title }) => {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <section
            className="w-full relative h-[90vh] flex text-center items-center justify-center"
            id="home"
        >
            <div className="flex flex-col items-center justify-center p-8">
                <div className="flex flex-col gap-4 text-center">
                    <p className="flex gap-1 justify-center md:text-[20px] font-medium mb-1">
                        <span className="text-primary">
                            A página que você está tentando acessar não existe.
                        </span>
                    </p>
                    <div className="flex items-center gap-4 justify-center">
                        <Link to="/">
                            <button className="group/icon w-full flex items-center justify-center py-2 px-3 gap-1.5 font-medium text-sm text-gray-400 hover:text-primary duration-300">
                                <ArrowLeft
                                    className="group-hover/icon:-translate-x-1 duration-300 transition-transform"
                                    size={20}
                                    weight="bold"
                                />
                                voltar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
