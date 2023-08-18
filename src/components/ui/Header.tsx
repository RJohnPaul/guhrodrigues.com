import { useContext, useEffect } from "react";
import AppContext from "@/contexts/AppContext";

import { Link } from "react-router-dom";

import LinksMenuNav from "./LinksMenuNav.tsx";
import MobileButton from "./MobileButton.tsx";
import ContactButton from "./ContactButton.tsx";

import logo from "@/assets/images/logo.svg";

export default function Header() {
    const { pageScrolled, setPageScrolled } = useContext(AppContext);

    useEffect(() => {
        const handlePageScrolled = () => {
            if (window.scrollY > 20) {
                setPageScrolled(true);
            } else {
                setPageScrolled(false);
            }
        };

        window.addEventListener("scroll", handlePageScrolled);
    }, []);

    return (
        <header
            className={`flex w-full h-[70px] z-50 fixed top-0 bg-background md:border-b ${
                pageScrolled
                    ? "md:border-neutral-800 md:bg-background/60 md:backdrop-blur-[5px]"
                    : "border-transparent"
            }`}
        >
            <nav className="max-w-5xl w-full mx-auto px-6 justify-between top-0 flex items-center gap-10">
                <Link to="/">
                    <img src={logo} width={25} loading="lazy" alt="Logo" />
                </Link>

                <LinksMenuNav />

                <ContactButton />

                <MobileButton />
            </nav>
        </header>
    );
}
