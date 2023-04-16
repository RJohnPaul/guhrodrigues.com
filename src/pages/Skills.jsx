import React from "react";

// Images
import html from "/assets/img/html.png";
import css from "/assets/img/css.png";
import javascript from "/assets/img/javascript.png";
import php from "/assets/img/php.png";
import react from "/assets/img/react.png";
import tailwind from "/assets/img/tailwind.png";
import styledcomponents from "/assets/img/styled-components.png";
import bootstrap from "/assets/img/bootstrap.png";

// Skills
const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      name: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      name: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      name: "JavaScript",
      style: "shadow-yellow-300",
    },
    {
      id: 4,
      src: php,
      name: "PHP",
      style: "shadow-indigo-300",
    },
    {
      id: 5,
      src: react,
      name: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 6,
      src: tailwind,
      name: "Tailwind",
      style: "shadow-cyan-600",
    },
    {
      id: 7,
      src: styledcomponents,
      name: "Styled Components",
      style: "shadow-fuchsia-600",
    },
    {
      id: 8,
      src: bootstrap,
      name: "Bootstrap",
      style: "shadow-violet-500",
    },
  ];

  return (
    <section className="w-full md:h-screen p-2" id="skills">
      <div className="max-w-[1000px] mx-auto flex justify-center flex-col h-full">
        <div className="pb-8 sm:mt-20 lg:mt-0 text-center">
          <p className="text-primary text-sm uppercase font-semibold bg-primary/20 table mx-auto py-1 px-2 rounded-lg">
            Conhecimento
          </p>
          <h1 className="text-3xl py-3 mb-2 text-center text-slate-800 dark:text-secondary">
            Habilidades
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 sm:gap-4 lg:gap-8">
          {skills.map(({ id, src, name, style }) => (
            <div
              key={id}
              className={`py-6 px-2 shadow-2xl rounded-xl ${style} bg-backgroundPrimaryLight dark:bg-backgroundPrimaryDark`}
            >
              <div className="grid grid-cols-1 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img src={src} width="64px" height="64px" alt={name} />
                </div>
                <div className="flex flex-col items-center justify-center text-center font-semibold text-black dark:text-color">
                  <h3>{name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
