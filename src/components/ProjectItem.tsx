import { ChevronRight } from "lucide-react";

export default function ProjectItem({
    src,
    title,
    description,
    techs,
    code,
    visit,
}) {
    return (
        <div className="relative flex sm:flex-col lg:flex-row border border-neutral-800 rounded-xl h-full overflow-hidden">
            <div className="absolute top-0 right-5 w-80 h-[1px] bg-gradient-to-l from-transparent via-primary/50 via-10% to-transparent" />
            <div className="overflow-hidden sm:rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl">
                <img
                    src={src}
                    loading="lazy"
                    className="max-w-5xl w-full"
                    alt={title}
                />
            </div>
            <div className="flex flex-col sm:text-center sm:items-center lg:text-start lg:items-start justify-center w-full py-5 px-10">
                <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-xl text-primary py-2">
                        {title}
                    </h3>
                    <span className="max-w-full text-[13.5px] text-gray-400 font-medium py-2">
                        {description}
                    </span>
                </div>
                <div className="flex gap-3 py-3">
                    {techs.map((tech: string) => (
                        <img
                            key={tech}
                            src={tech}
                            width={22}
                            className="grayscale hover:grayscale-0 duration-300"
                        />
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-2 py-2">
                    <a href={visit} target="_blank">
                        <button className="flex text-center justify-center items-center bg-primary text-black font-semibold py-3 px-4 text-sm gap-1 rounded-full hover:bg-primary/70 duration-300">
                            Visitar
                            <ChevronRight size={14} />
                        </button>
                    </a>
                    <a href={code} target="_blank">
                        <button className="flex text-center items-center text-sm font-semibold py-3 px-4 gap-1 rounded-full text-gray-400 hover:text-primary hover:bg-neutral-800 duration-300">
                            Repositório
                            <ChevronRight size={14} />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
