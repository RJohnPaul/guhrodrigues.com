import React from 'react'
import html from '../../public/assets/img/html.png'
import css from '../../public/assets/img/css.png'
import javascript from '../../public/assets/img/javascript.png'
import php from '../../public/assets/img/php.png'
import react from '../../public/assets/img/react.png'
import tailwind from '../../public/assets/img/tailwind.png'
import bootstrap from '../../public/assets/img/bootstrap.png'
import mysql from '../../public/assets/img/mysql.png'

const Skills = () => {
    return (
        <section className="w-full lg:h-screen p-2" id="skills">
            <div className="max-w-[1000px] mx-auto flex justify-center flex-col h-full">
                <div className="pb-8 text-center mt-12">
                    <h1 className="text-4xl font-bold inline">Habilidades</h1>
                    <p className="py-3">Tecnologias que tenho conhecimento</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 text-white">
                    <div className="p-6 shadow-2xl shadow-orange-500 rounded-xl ease-in duration-300 bg-backgroundSecondary">
                        <div className="grid grid-cols-1 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={html} width="64px" height="64px" alt="Imagem do HTML" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-2xl shadow-blue-500 rounded-xl ease-in duration-300 bg-backgroundSecondary">
                        <div className="grid grid-cols-1 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={css} width="64px" height="64px" alt="Imagem do CSS" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-2xl shadow-yellow-300 rounded-xl ease-in duration-300 bg-backgroundSecondary">
                        <div className="grid grid-cols-1 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={javascript} width="64px" height="64px" alt="Imagem do JavaScript" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-2xl shadow-indigo-300 rounded-xl ease-in duration-300 bg-backgroundSecondary">
                        <div className="grid grid-cols-1 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={php} width="64px" height="64px" alt="Imagem do PHP" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>PHP</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-2xl shadow-cyan-400 rounded-xl ease-in duration-300 bg-backgroundSecondary">
                        <div className="grid grid-cols-1 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={react} width="64px" height="64px" alt="Imagem do React" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-2xl shadow-cyan-600 rounded-xl ease-in duration-300 bg-backgroundSecondary">
                        <div className="grid grid-cols-1 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={tailwind} width="64px" height="64px" alt="Imagem do Tailwind" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-2xl shadow-violet-500 rounded-xl ease-in duration-300 bg-backgroundSecondary">
                        <div className="grid grid-cols-1 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={bootstrap} width="64px" height="64px" alt="Imagem do Bootstrap" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Bootstrap</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-2xl shadow-sky-700 rounded-xl ease-in duration-300 bg-backgroundSecondary">
                        <div className="grid grid-cols-1 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={mysql} width="64px" height="64px" alt="Imagem do MySQL" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>MySQL</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills