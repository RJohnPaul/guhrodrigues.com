// React Hooks
import { useEffect } from "react";

// Data
import { skills } from "../data/skills-data";

// Framer Motion
import { motion } from "framer-motion";

// Transition Effect
import TransitionEffect from "../components/TransitionEffect";

// Skills
const Skills = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <TransitionEffect />
      <section className="w-full md:h-screen sm:pb-24 lg:pb-0 px-2" id="skills">
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
          className="max-w-[1000px] mx-auto flex justify-center flex-col h-full"
        >
          <div className="pb-6 sm:mt-20 lg:mt-0 text-center">
            <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm table mx-auto rounded-lg py-2">
              Meu conhecimento &mdash;
            </p>
            <h1 className="text-4xl mb-6 text-center text-secondary">
              Minhas <span className="text-primary">skills</span>
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 sm:gap-4 lg:gap-8 sm:px-2 lg:px-2">
            {skills.map(({ id, src, name, style }) => (
              <div
                key={id}
                className={`py-6 px-2 shadow-2xl rounded-xl ${style} bg-background`}
              >
                <div className="grid grid-cols-1 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <img src={src} width="64px" height="64px" alt={name} />
                  </div>
                  <div className="flex flex-col items-center justify-center text-center font-semibold text-tertiary">
                    <h3>{name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Skills;
