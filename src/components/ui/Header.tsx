// React Hooks
import { useContext, useEffect } from "react";

// React Router
import { Link } from "react-router-dom";

// Context
import AppContext from "@/contexts/AppContext";

// Header Components
import LinksMenuNav from "./LinksMenuNav.tsx";
import MobileButton from "./MobileButton";
import ContactButton from "./ContactButton";

// Header
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
        <header className="flex w-full z-50 fixed">
            <nav
                className={`fixed max-w-[1250px] w-full sm:px-6 xl:px-3 ${
                    pageScrolled ? "sm:py-5 md:py-3" : "py-5"
                } justify-between mx-auto right-0 left-0 sm:bg-background md:bg-background/60 md:backdrop-blur-[5px] top-0 xl:static flex flex-row items-center gap-10 z-50 md:ease-in-out md:duration-300`}
            >
                <div className="text-center">
                    <Link to="/">
                        <h1 className="sm:text-md md:text-xl font-semibold relative text-primary">
                            Gustavo
                        </h1>
                    </Link>
                </div>

                <LinksMenuNav />

                <ContactButton />

                <MobileButton />
            </nav>
        </header>
    );
}
