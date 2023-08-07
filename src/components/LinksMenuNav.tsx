import { useContext } from "react";

import { NavLink } from "react-router-dom";

import AppContext from "@/contexts/AppContext";

import Socials from "./Socials";

export default function LinksMenuNav() {
    const { showMenu, setShowMenu } = useContext(AppContext);

    const handleCloseMenu = () => {
        setShowMenu(false);
        document.body.style.overflow = "auto";
    };

    return (
        <ul
            className={`${
                showMenu
                    ? "flex w-full left-0 z-[-1] bg-background"
                    : "-left-full"
            } h-screen md:h-auto sm:fixed md:static flex sm:flex-col md:flex-row md:items-center gap-4 md:gap-8 top-[70px] md:top-0 p-6 md:p-0 duration-300`}
        >
            <li className="text-neutral-400 text-4xl md:text-base">
                <NavLink
                    to="/"
                    onClick={handleCloseMenu}
                    className={({ isActive }) =>
                        isActive
                            ? "relative md:pb-1.5 text-primary after:content-[''] md:after:w-5 after:h-[1px] after:block after:bg-primary after:left-[40%] after:-translate-x-[30%] after:absolute after:bottom-0"
                            : "relative md:pb-1.5 after:content-[''] after:w-0 after:h-[1px] after:block after:bg-primary after:left-[40%] after:-translate-x-[30%] after:absolute after:bottom-0 after:duration-300 md:hover:after:w-5"
                    }
                >
                    Início
                </NavLink>
            </li>
            <li className="text-neutral-400 text-4xl md:text-base">
                <NavLink
                    to="/about"
                    onClick={handleCloseMenu}
                    className={({ isActive }) =>
                        isActive
                            ? "relative md:pb-1.5 text-primary after:content-[''] md:after:w-5 after:h-[1px] after:block after:bg-primary after:left-[40%] after:-translate-x-[30%] after:absolute after:bottom-0"
                            : "relative md:pb-1.5 after:content-[''] after:w-0 after:h-[1px] after:block after:bg-primary after:left-[40%] after:-translate-x-[30%] after:absolute after:bottom-0 after:duration-300 md:hover:after:w-5"
                    }
                >
                    Sobre
                </NavLink>
            </li>
            <li className="text-neutral-400 text-4xl md:text-base">
                <NavLink
                    to="/projects"
                    onClick={handleCloseMenu}
                    className={({ isActive }) =>
                        isActive
                            ? "relative md:pb-1.5 text-primary after:content-[''] md:after:w-5 after:h-[1px] after:block after:bg-primary after:left-[40%] after:-translate-x-[30%] after:absolute after:bottom-0"
                            : "relative md:pb-1.5 after:content-[''] after:w-0 after:h-[1px] after:block after:bg-primary after:left-[40%] after:-translate-x-[30%] after:absolute after:bottom-0 after:duration-300 md:hover:after:w-5"
                    }
                >
                    Projetos
                </NavLink>
            </li>
            <li className="md:hidden text-neutral-400 text-4xl md:text-base">
                <NavLink
                    to="/contact"
                    onClick={handleCloseMenu}
                    className={({ isActive }) =>
                        isActive
                            ? "relative md:pb-1.5 text-primary after:content-[''] md:after:w-5 after:h-[1px] after:block after:bg-primary after:left-[40%] after:-translate-x-[30%] after:absolute after:bottom-0"
                            : "relative md:pb-1.5 after:content-[''] after:w-0 after:h-[1px] after:block after:bg-primary after:left-[40%] after:-translate-x-[30%] after:absolute after:bottom-0 after:duration-300 md:hover:after:w-5"
                    }
                >
                    Contato
                </NavLink>
            </li>

            <span className="block md:hidden h-0.5 w-full bg-neutral-800 my-4" />

            <Socials />
        </ul>
    );
}
