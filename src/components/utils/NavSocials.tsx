import { socials } from "@/data/socials";

export default function NavSocials() {
  return (
    <div className="md:hidden space-y-2">
      {socials.map(({ id, href, name }) => (
        <span key={id} className="block font-medium text-neutral-500">
          <a href={href} target="_blank">
            {name}
          </a>
        </span>
      ))}
    </div>
  );
}
