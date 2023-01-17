import React from 'react'
import avatar from '../../public/assets/img/avatar.png'
import { RiSendPlane2Line } from 'react-icons/ri'
import TypeWriter from 'typewriter-effect'

const Home = () => {
    return (
        <section className="w-full md:h-screen sm:h-[70vh] grid grid-cols-1 md:grid-cols-9 sm:text-center sm:items-center md:text-start" id="home">
            <div className="md:col-span-5 lg:ml-12 xl:ml-12 2xl:ml-12 flex items-center justify-center p-8">
                <div className="flex flex-col gap-4 xl:ml-12 2xl:-mr-10">
                    <h1 className="text-white xl:ml-12 2xl:ml-12">
                        <span className="font-medium">Olá! Meu nome é</span><br></br>
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary 
                        sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-7xl">Gustavo Rodrigues</span>
                    </h1>
                    <p className="md:text-[17px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] ml-1 xl:ml-12 2xl:ml-12">
                        <TypeWriter options={{
                            strings: ['Desenvolvedor Front-end.'],
                            autoStart: true,
                            loop: true,
                            skipAddStyles: true,
                        }} />
                    </p>
                    <div className="xl:ml-12 2xl:ml-12 flex sm:justify-center md:justify-start">
                        <a href="#projects">
                            <button className="relative inline-flex items-center gap-[0.5rem] bg-gradient-to-r from-primary to-secondary 
                            text-black 2xl:text-[1.2rem] py-[0.8rem] px-[1.4rem] rounded-[0.8rem] isolate">
                                Portfólio
                                <RiSendPlane2Line />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:col-span-3 flex items-center justify-start relative sm:hidden md:grid" id="img">
                <img src={avatar} className="sm:w-[310px] sm:h-[310px] md:w-[400px] md:h-[400px] lg:w-[450px] 
                lg:h-[450px] xl:w-[600px] xl:h-[600px] 2xl:w-[600px] 2xl:h-[600px] object-cover xl:-mt-28" />
            </div>
        </section>
    )
}

export default Home