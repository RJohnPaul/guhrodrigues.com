// Data
import { socials } from "../../data/footer";

// React Router
import { Link } from "react-router-dom";

// Icon
import { Mail } from "lucide-react";

// Footer
export default function Footer() {
    return (
        <footer className="p-6">
            <div className="text-center flex items-center sm:justify-center md:justify-between max-w-[1250px] w-full mx-auto px-3">
                <div className="flex gap-3">
                    <Link to="/contact">
                        <button className="sm:flex md:hidden flex-row items-center justify-center text-sm text-primary bg-gradient-to-br from-black via-black to-zinc-700 border border-zinc-700 rounded-full p-2 duration-300">
                            <Mail size={18} />
                        </button>
                    </Link>
                    {socials.map(({ id, icon, href }) => (
                        <a key={id} href={href} target="_blank">
                            <button className="flex flex-row items-center justify-center text-sm text-primary bg-gradient-to-br from-black via-black to-zinc-700 border border-zinc-700 rounded-full p-2 duration-300">
                                {icon}
                            </button>
                        </a>
                    ))}
                </div>
                <p className="sm:hidden md:block text-primary text-sm gap-2.5 font-medium">
                    {new Date().getFullYear()} © Gustavo Rodrigues
                </p>
            </div>
        </footer>
    );
}
