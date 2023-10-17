import { User2, Braces, Mail } from "lucide-react";

import { NavLinksProps } from "@/types";

export const navLinks: NavLinksProps[] = [
  {
    id: 1,
    path: "/about",
    name: "Sobre",
    icon: <User2 size={16} />,
  },
  {
    id: 2,
    path: "/projects",
    name: "Projetos",
    icon: <Braces size={16} />,
  },
  {
    id: 3,
    path: "/contact",
    name: "Contato",
    icon: <Mail size={16} />,
  },
];
