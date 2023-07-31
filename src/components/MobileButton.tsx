import { useContext } from "react";

import AppContext from "@/contexts/AppContext";

import { Equal, X } from "lucide-react";

export default function MobileButton() {
    const { showMenu, setShowMenu } = useContext(AppContext);

    const handleMenu = () => {
        setShowMenu(!showMenu);
        if (!showMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    return (
        <button
            onClick={handleMenu}
            className="text-primary transition-transform active:scale-75 sm:flex md:hidden"
        >
            {showMenu ? <X size={26} /> : <Equal size={26} />}
        </button>
    );
}
