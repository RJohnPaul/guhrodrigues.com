"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { useHooks } from "@/contexts/Provider";
import { useMenuAnimation } from "@/components/Sidebar/hooks/menuAnimation";

import { navLinks } from "@/data/mobile-menu";

const MobileMenu = () => {
  const { showMenu, setShowMenu } = useHooks();

  const scope = useMenuAnimation(showMenu);

  const handleCloseMenu = () => {
    document.documentElement.style.overflow = "";

    setShowMenu(false);
  };

  return (
    <div
      className={cn(
        "fixed right-0 z-50 mx-9 my-[70px] flex w-32 flex-col rounded-lg border border-neutral-800 bg-background p-1 duration-300",
        {
          "visible top-0 scale-100 opacity-100": showMenu,
          "invisible scale-50 opacity-0": !showMenu,
        },
      )}
      ref={scope}
    >
      <ul
        className={cn({
          "pointer-events-auto": showMenu,
          "pointer-events-none": !showMenu,
        })}
      >
        {navLinks.map(({ path, icon, name }) => (
          <Link
            key={name}
            href={path}
            className="flex items-center gap-4 px-2 py-2.5 text-sm text-primary"
            onClick={handleCloseMenu}
          >
            <span>{icon}</span>

            {name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export { MobileMenu };
