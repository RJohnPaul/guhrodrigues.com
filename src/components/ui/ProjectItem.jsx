// Icon
import { ChevronRight } from "lucide-react";

// ProjectItem
export default function ProjectItem({
    id,
    src,
    title,
    description,
    techs,
    code,
    visit,
}) {
    return (
        <div
            key={id}
            className="shadow-md flex sm:flex-col lg:flex-row shadow-gray-600 rounded-xl h-full group"
        >
            <div className="overflow-hidden sm:rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl">
                <img
                    src={src}
                    className="ease-in-out duration-200 group-hover:scale-105 max-w-5xl w-full"
                    alt={title}
                />
            </div>
            <div className="flex flex-col justify-center items-center text-center w-full py-5 px-10">
                <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-xl text-primary py-2">
                        {title}
                    </h3>
                    <span className="max-w-full text-[13.5px] text-gray-400 font-medium py-2 mx-3">
                        {description}
                    </span>
                </div>
                <div className="py-2">
                    {techs.map((tech) => (
                        <button
                            key={tech}
                            className="text-gray-300 bg-primary/10 text-xs px-3 font-medium py-2 rounded-lg cursor-default m-1"
                        >
                            {tech}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-7 py-2">
                    <a href={visit} target="_blank">
                        <button className="flex text-center justify-center items-center bg-primary text-black font-semibold p-3 text-sm gap-1 rounded-2xl hover:bg-primary/70 duration-300">
                            Visitar
                            <ChevronRight size={18} />
                        </button>
                    </a>
                    <a href={code} target="_blank">
                        <button className="flex items-center justify-center font-medium text-sm text-gray-400 gap-1 duration-300 hover:text-primary">
                            Repositório
                            <ChevronRight size={18} />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
