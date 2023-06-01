// React Hooks
import { useEffect } from "react";

// Icon
import { FiGithub, FiExternalLink } from "react-icons/fi";

// Data
import { projects } from "../data/projects-data";

// Projects
const Projects = ({ title }) => {
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
        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-8 sm:px-2 lg:px-0">
          {projects.map(
            ({ id, src, title, description, techs, code, visit }) => (
              <div
                key={id}
                className="shadow-md flex sm:flex-col lg:flex-row shadow-gray-600 rounded-xl h-full group"
              >
                <div className="overflow-hidden rounded-l-xl">
                  <img
                    src={src}
                    className="ease-in-out duration-200 group-hover:scale-105 max-w-5xl w-full"
                    alt={title}
                  />
                </div>
                <div className="flex flex-col justify-center items-center text-center w-full py-5">
                  <div className="flex flex-col justify-center mx-5">
                    <h3 className="font-bold text-xl text-primary py-1.5">
                      {title}
                    </h3>
                    <span className="max-w-full text-[13.5px] text-gray-400 font-medium mt-1 mx-2">
                      {description}
                    </span>
                  </div>
                  <div className="py-4">
                    {techs.map((tech) => (
                      <button
                        key={tech}
                        className="text-gray-300 bg-[#222] text-xs px-3 font-medium py-2 rounded-lg cursor-default m-1"
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={visit} target="_blank">
                      <button className="flex flex-row items-center justify-center text-sm text-primary bg-gradient-to-br from-black via-black to-zinc-700 border border-zinc-700 rounded-full p-2 duration-300">
                        <FiExternalLink size={20} />
                      </button>
                    </a>
                    <a href={code} target="_blank">
                      <button className="flex flex-row items-center justify-center text-sm text-primary bg-gradient-to-br from-black via-black to-zinc-700 border border-zinc-700 rounded-full p-2 duration-300">
                        <FiGithub size={18} />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
