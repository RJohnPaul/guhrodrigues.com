// React Hooks
import { useEffect, useRef, useState } from "react";

// React Router
import { NavLink, Link } from "react-router-dom";

// Styles
import "../styles/header.css";

// Icons
import { List, X } from "phosphor-react";
import contactIcon from "../../public/static/contact.json";

// Lottie
import Lottie from "lottie-react";

// Header
export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [shadow, setShadow] = useState(false);
    const contactRef = useRef();

    const handleCloseMenu = () => {
        setShowMenu(false);
        document.body.style.overflow = "auto";
    };

    const handleMenu = () => {
        setShowMenu(!showMenu);
        if (!showMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("scroll", handleShadow);
    }, []);

    return (
        <header className="flex w-full z-50 fixed ">
            <nav
                className={`fixed max-w-[1250px] w-full sm:px-6 xl:px-3 ${
                    shadow ? "sm:py-5 md:py-3" : "py-5"
                } justify-between mx-auto right-0 left-0 sm:bg-background md:bg-background/60 md:backdrop-blur-[5px] top-0 xl:static flex flex-row items-center gap-10 z-50 md:ease-in-out md:duration-300`}
            >
                <div className="text-center">
                    <NavLink to="/" onClick={handleCloseMenu}>
                        <h1 className="sm:text-md md:text-xl font-semibold relative text-primary">
                            Gustavo
                        </h1>
                    </NavLink>
                </div>
                <ul
                    className={`${
                        showMenu
                            ? "flex flex-col justify-center w-full h-screen left-0 z-[-1] top-0 bg-background/80 backdrop-blur-lg"
                            : "-bottom-full md:flex"
                    } sm:fixed md:static gap-8 items-center duration-300`}
                >
                    <li className="text-gray-400 hover:text-primary">
                        <NavLink to="/" onClick={handleCloseMenu}>
                            Início
                        </NavLink>
                    </li>
                    <li className="text-gray-400 hover:text-primary">
                        <NavLink to="/about" onClick={handleCloseMenu}>
                            Sobre
                        </NavLink>
                    </li>
                    <li className="text-gray-400 hover:text-primary">
                        <NavLink to="/projects" onClick={handleCloseMenu}>
                            Projetos
                        </NavLink>
                    </li>
                </ul>
                <div>
                    <Link to="/contact">
                        <button
                            onMouseEnter={() => contactRef.current?.play()}
                            onMouseLeave={() => contactRef.current?.stop()}
                            className="sm:hidden md:flex text-center justify-center items-center bg-primary text-black font-semibold p-3 text-sm gap-1.5 rounded-2xl hover:bg-primary/70 duration-300"
                        >
                            Contato
                            <Lottie
                                lottieRef={contactRef}
                                animationData={contactIcon}
                                style={{ width: 18, height: 18 }}
                                autoplay={false}
                                loop={false}
                            />
                        </button>
                    </Link>
                </div>
                <button
                    onClick={handleMenu}
                    className="text-primary transition-transform active:scale-90 sm:flex md:hidden"
                >
                    {showMenu ? <X size={26} /> : <List size={26} />}
                </button>
            </nav>
        </header>
    );
}
