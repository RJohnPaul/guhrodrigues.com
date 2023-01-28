import React from 'react'

// Icons
import { FaWhatsapp } from 'react-icons/fa'
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'

// ScrollToTop
import ScrollToTop from 'react-scroll-to-top'

// Footer
const Footer = () => {
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
        <footer className="bg-backgroundSecondary p-8 xl:p-20 sm:mt-12 lg:mt-52">
            <ScrollToTop
                smooth top="20"
                className="flex justify-center items-center bg-gradient-to-r from-primary to-secondary shadow-none"
                color="#000"
                width="20px"
                height="20px"
            />
            <p className="text-center text-white mb-4 font-medium">Entre em contato</p>
            <div className="flex items-center justify-center border-b border-neutral-800 pb-8">
                {socials.map(({ id, href, icon }) => (
                    <nav
                        key={id}
                        className="flex items-center bg-backgroundSecondary"
                    >
                        <ul className="px-2">
                            <a
                                href={href}
                                className="block p-4 rounded-xl text-white bg-backgroundPrimary hover:bg-gradient-to-r from-primary to-secondary hover:text-black duration-300"
                                target="_blank">
                                <div className="scale-150">
                                    {icon}
                                </div>
                            </a>
                        </ul>
                    </nav>
                ))}
            </div>
            <div className="mt-10">
                <p className="text-color text-center font-medium">
                    2023 © <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary">Gustavo Rodrigues</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer
