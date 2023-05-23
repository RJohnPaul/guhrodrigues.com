// React Hooks
import { useEffect } from "react";

// Icon
import { ArrowRight } from "phosphor-react";

// Data
import { projects } from "../data/projects-data";

// Framer Motion
import { motion } from "framer-motion";

// Transition Effect
import TransitionEffect from "../components/TransitionEffect";

// Projects
const Projects = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <TransitionEffect />
      <section className="w-full min-h-screen py-24" id="projects">
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
          className="max-w-[1000px] min-h-screen p-4 mx-auto flex flex-col justify-center w-full"
        >
          <div className="pb-8 text-center">
            <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm table mx-auto rounded-lg py-2">
              Minhas aplicações &mdash;
            </p>
            <h1 className="text-4xl mb-6 text-center text-secondary">
              Meus <span className="text-primary">projetos</span>
            </h1>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 sm:px-2 lg:px-0">
            {projects.map(({ id, src, title, description, visit }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-xl h-full group/image"
              >
                <div className="overflow-hidden rounded-t-xl">
                  <img
                    src={src}
                    className="ease-in-out duration-200 group-hover/image:scale-105"
                    alt={title}
                  />
                </div>
                <div className="flex flex-col justify-center mx-5 mt-3">
                  <h3 className="font-bold text-[20px] text-primary">
                    {title}
                  </h3>
                  <span className="max-w-full text-[13.5px] text-tertiary font-medium mt-1">
                    {description}
                  </span>
                </div>
                <div className="mx-4 my-3 pb-1">
                  <a href={visit} target="_blank">
                    <button className="group/icon w-full flex flex-row items-center justify-center gap-1 text-sm border-2 border-primary rounded-lg font-semibold text-primary hover:bg-primary hover:text-secondary py-2 px-3 duration-300">
                      Visitar
                      <ArrowRight
                        className="group-hover/icon:translate-x-1 duration-300 transition-transform"
                        size={20}
                        weight="bold"
                      />
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Projects;
