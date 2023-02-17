import React, { useState } from 'react'

// Icons
import { RiCloseLine, RiMenu3Fill } from 'react-icons/ri'

// Header
const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className="fixed flex items-center justify-between w-full py-4 h-[9vh] z-50 border-b border-backgroundSecondary">
            <div className="xl:w-1/3 2xl:w-[35.7%] text-center 2xl:mr-12">
                <a
                    href="#home"
                    className="sm:text-[1.8rem] lg:text-3xl xl:text-4xl 2xl:text-[2.5rem] font-signature font-semibold relative p-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Gustavo
                </a>
            </div>
            <nav className={`fixed w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "drop-shadow-2xl left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50 xl:ml-12 2xl:ml-12`}>
                <li>
                    <a href="#home">Início</a>
                </li>
                <li>
                    <a href="#about">Sobre</a>
                </li>
                <li>
                    <a href="#skills">Habilidades</a>
                </li>
                <li>
                    <a href="#projects">Projetos</a>
                </li>
            </nav>
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="text-color xl:hidden text-[18px] p-2">
                {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
            </button>
        </header>
    )
}

export default Header
