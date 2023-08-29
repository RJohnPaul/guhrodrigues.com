import { Equal, X } from "lucide-react";
import { useHooks } from "@/contexts/Provider";

export default function MobileButton() {
  const { showMenu, setShowMenu } = useHooks();

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
      className="text-neutral-400 transition-transform active:scale-75 sm:flex md:hidden"
    >
      {showMenu ? <X size={26} /> : <Equal size={26} />}
    </button>
  );
}
