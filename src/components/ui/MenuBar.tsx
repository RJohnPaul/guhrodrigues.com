import { Link } from "react-router-dom";

import { useHooks } from "@/hooks/Provider";

import { navLinks } from "@/data/header";

export default function MenuBar() {
  const { showMenu, setShowMenu } = useHooks();

  const handleCloseMenu = () => {
    setShowMenu(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div
      className={`fixed right-0 z-50 w-32 mx-6 p-1 my-[70px] flex flex-col bg-background border border-neutral-800 rounded-lg duration-150 ${
        showMenu
          ? "top-0 visible opacity-100 scale-100"
          : "invisible opacity-0 scale-90"
      }`}
    >
      {navLinks.map(({ id, path, name, icon }) => (
        <Link
          key={id}
          to={path}
          className="px-2 py-2.5 flex items-center gap-4 text-sm text-primary"
          onClick={handleCloseMenu}
        >
          <span>{icon}</span>

          {name}
        </Link>
      ))}
    </div>
  );
}
