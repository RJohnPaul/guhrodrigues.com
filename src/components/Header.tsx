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
            className={`flex w-full z-50 fixed sm:bg-background md:bg-background/60 md:backdrop-blur-[5px] ${
                pageScrolled ? "sm:h-20 md:h-[70px]" : "h-20"
            } md:ease-in-out md:duration-300`}
        >
            <nav className="max-w-[1250px] w-full sm:px-6 xl:px-3 justify-between mx-auto right-0 left-0 top-0 flex items-center gap-10">
                <div className="text-center">
                    <h1 className="sm:text-md md:text-xl font-semibold relative text-primary">
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
