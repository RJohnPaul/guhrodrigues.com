// Icon
import { ArrowUpRight } from "phosphor-react";

// Data
import { projects } from "../data/projects-data"

// Projects
const Projects = () => {
  return (
    <section className="w-full min-h-screen sm:pt-36 lg:p-12" id="projects">
      <div className="max-w-[1000px] min-h-screen p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8 text-center">
          <p className="text-primary text-sm uppercase font-semibold bg-primary/20 table mx-auto py-1 px-2 rounded-lg">
            Portfólio
          </p>
          <h1 className="text-3xl py-3 mb-2 text-center text-secondary">
            Projetos
          </h1>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, title, description, visit }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg h-full group"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={src}
                  className="ease-in-out duration-200 group-hover:scale-105"
                  alt={title}
                />
              </div>
              <div className="flex flex-col justify-center mx-5 mt-3">
                <h3 className="font-bold text-[20px] text-primary">{title}</h3>
                <span className="max-w-full text-[13.5px] text-color font-medium mt-1">
                  {description}
                </span>
              </div>
              <div className="mx-4 my-3 pb-1">
                <a href={visit} target="_blank">
                  <button className="w-full flex flex-row items-center justify-center gap-1 text-[14px] border-2 border-primary rounded-lg font-semibold text-primary hover:bg-primary hover:text-secondary py-2 px-3 duration-300">
                    Visitar
                    <ArrowUpRight size={20} weight="bold" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
