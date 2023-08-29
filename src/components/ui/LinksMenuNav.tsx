import { useHooks } from "@/contexts/Provider";

import { NavLink } from "react-router-dom";

import { navLinks } from "@/data/header";

import NavSocials from "@/components/utils/NavSocials";

export default function LinksMenuNav() {
  const { showMenu, setShowMenu } = useHooks();

  const handleCloseMenu = () => {
    setShowMenu(false);
    document.body.style.overflow = "auto";
  };

  return (
    <ul
      className={`${
        showMenu ? "flex w-full left-0 z-[-1] bg-background" : "-left-full"
      } h-screen md:h-auto sm:fixed md:static flex sm:flex-col md:flex-row md:items-center gap-4 md:gap-2 top-[70px] md:top-0 p-6 md:p-0 duration-300`}
    >
      {navLinks.map(({ id, path, name }) => (
        <li
          key={id}
          className="text-4xl font-semibold md:font-medium md:text-sm"
        >
          <NavLink
            to={path}
            onClick={handleCloseMenu}
            className={({ isActive }) =>
              isActive
                ? "text-primary md:bg-neutral-800 md:py-2 md:px-3 md:rounded-md"
                : "text-neutral-400 md:duration-500 md:py-2 md:px-3 md:rounded-md md:hover:bg-neutral-900"
            }
          >
            {name}
          </NavLink>
        </li>
      ))}

      <span className="block md:hidden h-0.5 w-full bg-neutral-800 my-4" />

      <NavSocials />
    </ul>
  );
}
