import React from 'react'

// Image
import avatar from '../../public/assets/img/avatar.png'

// Icons
import { FaWhatsapp } from 'react-icons/fa'
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'
import { UilMessage } from '@iconscout/react-unicons'

// TypeWriter
import TypeWriter from 'typewriter-effect'

// Home
const Home = () => {
    return (
        <section
            className="w-full md:h-screen sm:h-[70vh] grid grid-cols-1 md:grid-cols-9 sm:text-center sm:items-center md:text-start"
            id="home"
        >
            <div className="md:col-span-5 lg:ml-12 xl:ml-36 2xl:ml-36 flex items-center justify-center p-8">
                <div className="flex flex-col items-end sm:hidden md:flex">
                    <nav className="flex flex-col items-center gap-7">
                        <a
                            href="https://wa.me/5511986319802"
                            className="block text-gray-400"
                            target="_blank">
                            <FaWhatsapp className="scale-150" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/guhrodrigues/"
                            className="block text-gray-400"
                            target="_blank">
                            <FiLinkedin className="scale-150" />
                        </a>
                        <a
                            href="https://github.com/projects-gustavo"
                            className="block text-gray-400"
                            target="_blank">
                            <FiGithub className="scale-150" />
                        </a>
                        <a
                            href="https://www.instagram.com/gustavinrm/"
                            className="block text-gray-400"
                            target="_blank">
                            <FiInstagram className="scale-150" />
                        </a>
                    </nav>
                </div>
                <div className="flex flex-col gap-4 md:ml-12 lg:ml-12 xl:ml-12 2xl:-mr-36">
                    <h1 className="text-white">
                        <span className="font-medium ml-1.5">Olá! Meu nome é</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-7xl">
                            Gustavo Rodrigues
                        </span>
                    </h1>
                    <p className="md:text-[17px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] ml-1 text-gray-400">
                        <TypeWriter
                            options={{
                                strings: ['Desenvolvedor Front-end.'],
                                autoStart: true,
                                loop: true,
                                skipAddStyles: true,
                            }}
                        />
                    </p>
                    <div className="flex sm:justify-center md:justify-start">
                        <a href="#projects">
                            <button className="flex text-center items-center text-[18px] font-medium border-2 gap-2 border-primary bg-transparent py-3 px-6 text-primary rounded-[0.5rem] hover:bg-gradient-to-r from-primary to-secondary hover:text-black duration-300">
                                Portfólio
                                <UilMessage />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:col-span-3 flex items-center justify-start relative sm:hidden md:grid">
                <img
                    src={avatar}
                    className="sm:w-[310px] sm:h-[310px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px] 2xl:w-[600px] 2xl:h-[600px] object-cover"
                />
            </div>
        </section>
    )
}

export default Home