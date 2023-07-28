// React Hooks
import { useContext } from "react";

// React Router
import { NavLink } from "react-router-dom";

// Context
import AppContext from "@/contexts/AppContext";

// Data
import { LinksMenu } from "@/data/menu";

// LinksMenuNav Component
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
                    ? "flex flex-col justify-center w-full h-screen left-0 z-[-1] top-0 bg-background/80 backdrop-blur-lg"
                    : "-bottom-full md:flex"
            } sm:fixed md:static gap-8 items-center duration-300`}
        >
            {LinksMenu.map(({ id, path, name }) => (
                <li key={id} className="text-gray-400">
                    <NavLink
                        to={path}
                        onClick={handleCloseMenu}
                        className={({ isActive }) =>
                            isActive
                                ? "active"
                                : "relative pb-1.5 after:content-[''] after:w-0 after:h-[1px] after:block after:bg-primary after:left-[40%] after:-translate-x-[30%] after:absolute after:bottom-0 after:duration-300 md:hover:after:w-[50%]"
                        }
                    >
                        {name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}
