import React from 'react'

// Icons
import { BsArrowRight, BsMouse, BsArrowDownShort } from 'react-icons/bs';

// TypeWriter
import TypeWriter from 'typewriter-effect'

// Home
const Home = () => {
    return (
        <section
            className="w-full md:h-screen sm:h-[70vh] grid grid-cols-1 md:grid-cols-9 sm:text-center sm:items-center md:text-start"
            id="home"
        >
            <div className="md:col-span-12 flex flex-col items-center justify-center p-8">
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-white">
                        <span className="font-normal lg:text-[22px] ml-1.5">Olá! Meu nome é</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-7xl">
                            Gustavo Rodrigues
                        </span>
                    </h1>
                    <p className="flex gap-1 justify-center text-[20px] font-medium">
                        <span className="text-gray-400">
                            Sou
                        </span>
                        <span className="text-secondary">
                            <TypeWriter
                                options={{
                                    strings: ['desenvolvedor web','amante da música', 'estudante de informática'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </p>
                    <div className="flex items-center gap-4 justify-center">
                        <a href="#projects">
                            <button class="flex text-center items-center lg:text-[16px] gap-2.5 font-medium py-3 px-5 rounded-[1rem] duration-300 border border-primary text-white bg-primary hover:bg-transparent hover:text-primary">
                                <BsArrowRight size={25} />
                                Meus projetos
                            </button>
                        </a>
                    </div>
                    <div className="sm:hidden md:flex items-center gap-4 justify-center">
                        <a href="#about">
                            <button class="flex text-center items-center lg:text-[16px] gap-1.5 font-medium py-3 px-5 text-gray-400 bg-none ease-in duration-300 hover:translate-y-1">
                                <BsMouse
                                    className="fill-primary"
                                    size={25}
                                />
                                Deslizar para baixo
                                <BsArrowDownShort
                                    className="fill-primary"
                                    size={25}
                                />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
