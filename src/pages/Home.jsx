import React from "react";

// Icons
import { BsArrowRight } from "react-icons/bs";

// TypeWriter
import TypeWriter from "typewriter-effect";

// Home
const Home = () => {
  return (
    <section
      className="w-full md:min-h-screen sm:h-[70vh] grid grid-cols-1 md:grid-cols-9 sm:text-center sm:items-center md:text-start"
      id="home"
    >
      <div className="md:col-span-12 flex flex-col items-center justify-center p-8">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-black dark:text-white">
            <span className="font-semibold lg:text-[22px]">Olá! Meu nome é</span>
            <br />
            <span className="text-primary sm:text-5xl md:text-5xl lg:text-7xl">
              Gustavo Rodrigues
            </span>
          </h1>
          <p className="flex gap-1 justify-center md:text-[20px] font-medium">
            <span className="text-gray-500 dark:text-gray-400">Sou</span>
            <span className="text-primary">
              <TypeWriter
                options={{
                  strings: [
                    "desenvolvedor web",
                    "amante da música",
                    "estudante de informática",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <div className="flex items-center gap-4 mt-2 justify-center">
            <a href="#projects">
              <button className="flex text-center items-center lg:text-[16px] gap-2 font-medium py-3 px-5 rounded-[1rem] duration-300 border-2 border-transparent text-[#D2EAFF] bg-primary hover:border-primary hover:bg-transparent hover:text-primary">
                Meus projetos
                <BsArrowRight size={25} />
              </button>
            </a>
          </div>
        </div>
        <div className="sm:hidden lg:flex absolute bottom-12 w-full justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] border-gray-400 dark:border-gray-500 rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mb-1 animation-scroll" />
            </div>      
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
