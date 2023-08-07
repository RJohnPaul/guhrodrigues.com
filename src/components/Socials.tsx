import { socials } from "@/data/socials";

export default function Socials() {
    return (
        <div className="md:hidden space-y-2">
            {socials.map(({ id, href, name }) => (
                <li key={id} className="text-neutral-500 font-medium">
                    <a href={href} target="_blank">
                        {name}
                    </a>
                </li>
            ))}
        </div>
    );
}
