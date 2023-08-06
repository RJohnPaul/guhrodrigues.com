import { useContext } from "react";

import { NavLink } from "react-router-dom";

import AppContext from "@/contexts/AppContext";

import { LinksMenu } from "@/data/menu";

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
                    ? "flex flex-col w-full h-screen justify-center left-0 z-[-1] top-0 bg-background/80 backdrop-blur-lg"
                    : "-bottom-full"
            } sm:fixed md:static flex gap-8 items-center duration-300`}
        >
            {LinksMenu.map(({ id, path, name }) => (
                <li key={id} className="text-neutral-400">
                    <NavLink
                        to={path}
                        onClick={handleCloseMenu}
                        className={({ isActive }) =>
                            isActive
                                ? "relative pb-1.5 text-primary after:content-[''] md:after:w-5 after:h-[1px] after:block after:bg-primary after:left-[40%] after:-translate-x-[30%] after:absolute after:bottom-0 duration-300"
                                : "relative pb-1.5 after:content-[''] after:w-0 after:h-[1px] after:block after:bg-primary after:left-[40%] after:-translate-x-[30%] after:absolute after:bottom-0 after:duration-300 md:hover:after:w-5"
                        }
                    >
                        {name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}
