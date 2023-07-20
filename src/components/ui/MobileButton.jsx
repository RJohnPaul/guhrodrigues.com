// React Hooks
import { useContext } from "react";

// Context
import AppContext from "../../contexts/AppContext";

// Icons
import { List, X } from "phosphor-react";

// Mobile Button
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
            className="text-primary transition-transform active:scale-90 sm:flex md:hidden"
        >
            {showMenu ? <X size={26} /> : <List size={26} />}
        </button>
    );
}
