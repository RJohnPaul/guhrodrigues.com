// Icons
import { Github, Linkedin, Instagram } from "lucide-react";

// Types
import { FooterProps } from "@/types";

// Data
export const socials: FooterProps[] = [
    {
        id: 1,
        href: "https://github.com/guhrodriguess",
        icon: <Github size={18} />,
    },
    {
        id: 2,
        href: "https://www.linkedin.com/in/guhrodrigues",
        icon: <Linkedin size={18} />,
    },
    {
        id: 3,
        href: "https://www.instagram.com/gustavinrm",
        icon: <Instagram size={18} />,
    },
];
