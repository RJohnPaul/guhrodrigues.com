import React from 'react'

// Image
import avatar from '../../public/assets/img/avatar.png'

// Icons
import { FaWhatsapp } from 'react-icons/fa'
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'
import { BsFillMouse2Fill } from 'react-icons/bs';

// TypeWriter
import TypeWriter from 'typewriter-effect'

// Home
const Home = () => {
    const socials = [
        {
            id: 1,
            href: 'https://wa.me/5511986319802',
            icon: <FaWhatsapp />,
        },
        {
            id: 2,
            href: 'https://www.linkedin.com/in/guhrodrigues/',
            icon: <FiLinkedin />,
        },
        {
            id: 3,
            href: 'https://github.com/projects-gustavo',
            icon: <FiGithub />,
        },
        {
            id: 4,
            href: 'https://www.instagram.com/gustavinrm/',
            icon: <FiInstagram />,
        },
    ]

    return (
        <section
            className="w-full md:h-screen sm:h-[70vh] grid grid-cols-1 md:grid-cols-9 sm:text-center sm:items-center md:text-start"
            id="home"
        >
            <div className="md:col-span-5 lg:ml-12 xl:ml-36 2xl:ml-36 flex items-center justify-center p-8">
                <div className="flex flex-col sm:hidden md:flex">
                    {socials.map(({ id, href, icon }) => (
                        <nav
                            key={id}
                            className="flex flex-col items-center"
                        >
                            <ul className="py-3.5">
                                <a
                                    href={href}
                                    className="block text-gray-400"
                                    target="_blank">
                                    <div className="scale-150">
                                        {icon}
                                    </div>
                                </a>
                            </ul>
                        </nav>
                    ))}
                </div>
                <div className="flex flex-col gap-4 md:ml-12 lg:ml-12 xl:ml-12 2xl:-mr-36">
                    <h1 className="text-white">
                        <span className="font-normal lg:text-[22px] ml-1.5">Olá! Meu nome é</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-7xl">
                            Gustavo Rodrigues
                        </span>
                    </h1>
                    <p className="md:text-[17px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] ml-1 text-gray-400">
                        <TypeWriter
                            options={{
                                strings: ['Desenvolvedor Web.'],
                                autoStart: true,
                                loop: true,
                                skipAddStyles: true,
                            }}
                        />
                    </p>
                    <div className="flex sm:justify-center md:justify-start">
                        <a href="#projects">
                            <button class="flex text-center items-center lg:text-[16px] gap-4 font-medium py-3 px-8 rounded-[1.3rem] duration-300 border border-primary text-black bg-gradient-to-r from-primary to-secondary hover:bg-none hover:text-primary">
                                <BsFillMouse2Fill size={15} />
                                Meus Projetos
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