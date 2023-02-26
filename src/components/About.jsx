import React from 'react'

// Icon
import { RiDownload2Fill } from 'react-icons/ri'

// Assets
import about from '/assets/img/about.jpg'
import curriculo from '/assets/docs/curriculo.pdf'

// About
const About = () => {
    const info = [
        {
            id: 1,
            count: "02",
            text: "Anos de experiência"
        },
        {
            id: 2,
            count: "10",
            text: "Projetos concluídos"
        },
        {
            id: 3,
            count: "250",
            text: "Commits no GitHub"
        },
    ];

    return (
        <section
            className="w-full md:h-screen p-2 flex items-center py-16"
            id="about"
        >
            <div className="sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1000px] 2xl:max-w-[1050px] m-auto gap-8 p-5">
                <h1 className="text-4xl text-center">Sobre</h1>
                <p className="text-gray-400 py-3 mb-2 text-center">Introdução</p>
                <div className="md:grid lg:grid-cols-5">
                    <div className="w-full h-auto sm:col-span-3 lg:col-span-2 m-auto flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                        <img
                            src={about}
                            className="rounded-2xl flex w-[320px]"
                            alt="Gustavo"
                        />
                    </div>
                    <div className="col-span-3 flex flex-col mt-5">
                        <p className="lg:text-md sm:text-center lg:text-start text-gray-300 leading-7">
                            Meu nome é Gustavo Rodrigues, tenho 17 anos e nasci na região do Grande ABC. Sou desenvolvedor web e estudante de técnico em informática para internet. Iniciei na programação
                            em 2021, logo após eu entrar no curso técnico. Sou uma pessoa dedicada e que busca sempre mais conhecimento.
                        </p>
                        <div className="flex mt-5 justify-center items-center gap-7">
                            {info.map(({id, text, count}) => (
                                <div key={id}>
                                    <h3 className="md:text-4xl text-2xl text-center font-semibold text-white">
                                        {count}
                                        <span className="text-white text-transparent bg-clip-text bg-gradient-to-l from-primary to-secondary">+</span>
                                    </h3>
                                    <span className="md:text-base text-xs flex text-center text-gray-400">{text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 flex text-center sm:justify-center">
                            <a
                                href={curriculo}
                                download="Gustavo Rodrigues.pdf"
                            >
                                <button class="flex text-center items-center font-medium border-2 gap-1 border-primary bg-transparent py-3 px-3.5 text-primary rounded-lg hover:bg-primary hover:text-white duration-300">
                                    Download C.V
                                    <RiDownload2Fill />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
