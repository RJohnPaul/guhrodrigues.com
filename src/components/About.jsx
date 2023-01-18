import React from 'react'
import { RiDownload2Fill } from 'react-icons/ri'
import about from '../../public/assets/img/about.jpg'
import curriculo from '../../public/assets/docs/curriculo.pdf'

const About = () => {
    return (
        <section className="w-full md:h-screen p-2 flex items-center py-16" id="about">
            <div className="sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1000px] 2xl:max-w-[1050px] m-auto md:grid grid-cols-3 gap-8 shadow-xl rounded-[45px] bg-backgroundSecondary p-5">
                <div className="w-full h-auto m-auto flex items-center justify-center p-4 hover:scale-110 ease-in duration-300">
                    <img src={about} className="rounded-xl" alt="Gustavo" />
                </div>
                <div className="col-span-2">
                    <h1 className="py-4 text-4xl text-center mb-1">Sobre</h1>
                    <p className="py-1">
                        Meu nome é Gustavo Rodrigues Martins, nasci em 2005 e sou estudante da Etec MCM,
                        na qual faço curso de técnico em informática para internet.
                    </p>
                    <p className="py-1">
                        Desde os meus 10 anos eu me interesso pela tecnologia, e com isso, em 2015 iniciei meus estudos
                        em edição de vídeos e edição de imagens. <br></br>
                        Meu interesse na programação veio aos 15 anos, logo após entrar na Etec.
                    </p>
                    <p className="py-1">
                        Sou uma pessoa muito focada e determinada quando quero algo,
                        e a cada dia venho me dedicando e estudando mais essa área. <br></br>
                        Com isso, espero arrumar o meu primeiro emprego.
                    </p>
                    <div className="mt-5 flex text-center justify-center">
                        <a href={curriculo} download="Gustavo Rodrigues.pdf">
                            <button class="flex text-center items-center relative font-medium border-2 border-primary bg-transparent py-2.5 px-3 
                          text-primary rounded-lg hover:bg-gradient-to-r from-primary to-secondary 
                          hover:text-black duration-300">
                                <RiDownload2Fill className="mr-1" /> 
                                Download C.V
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
