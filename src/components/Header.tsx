import { useContext, useEffect } from "react";
import AppContext from "@/contexts/AppContext";

import LinksMenuNav from "./LinksMenuNav.tsx";
import MobileButton from "./MobileButton";
import ContactButton from "./ContactButton";

export default function Header() {
    const { pageScrolled, setPageScrolled } = useContext(AppContext);

    useEffect(() => {
        const handlePageScrolled = () => {
            if (window.scrollY >= 90) {
                setPageScrolled(true);
            } else {
                setPageScrolled(false);
            }
        };
        window.addEventListener("scroll", handlePageScrolled);
    }, []);

    return (
        <header
            className={`flex w-full h-[70px] z-50 fixed sm:bg-background md:backdrop-blur-[5px] ${
                pageScrolled
                    ? "md:border-b border-neutral-800 md:bg-background/60"
                    : undefined
            }`}
        >
            <nav className="max-w-5xl w-full mx-auto px-6 justify-between top-0 flex items-center gap-10">
                <div className="text-center">
                    <h1 className="text-lg font-semibold relative text-primary">
                        Gustavo
                    </h1>
                </div>

                <LinksMenuNav />

                <ContactButton />

                <MobileButton />
            </nav>
        </header>
    );
}
