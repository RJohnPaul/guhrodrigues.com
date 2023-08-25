import { useState, useEffect } from "react";

import LinksMenuNav from "./LinksMenuNav.tsx";
import MobileButton from "./MobileButton.tsx";

import logo from "@/assets/images/logo.svg";

export default function Header() {
    const [position, setPosition] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            let scrolling = window.scrollY;

            setVisible(position > scrolling);
            setPosition(scrolling);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [position]);

    return (
        <header
            className={`flex w-full h-[80px] z-50 fixed bg-background ${
                visible ? "md:top-0" : "md:-top-20"
            } top-0 duration-500`}
        >
            <nav className="max-w-5xl w-full mx-auto px-6 justify-between flex items-center">
                <img src={logo} width={25} loading="lazy" alt="Logo" />

                <LinksMenuNav />

                <MobileButton />
            </nav>
        </header>
    );
}
