import { NavLink } from "react-router-dom";

import { navLinks } from "@/data/header";

export default function LinksMenuNav() {
  return (
    <ul className="sm:hidden md:flex items-center gap-4 md:gap-2 top-0 p-6 md:p-0 duration-300">
      {navLinks.map(({ id, path, name }) => (
        <li key={id} className="text-sm font-medium">
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive
                ? "text-primary md:bg-neutral-800 py-2 px-3 md:rounded-md"
                : "text-neutral-400 hover:text-primary duration-300 py-2 px-3 rounded-md hover:bg-neutral-900"
            }
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
