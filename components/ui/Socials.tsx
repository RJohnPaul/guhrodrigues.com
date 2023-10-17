import { socials } from "@/data/socials";
import { Button } from "@/components/utils/Button";

export function Socials() {
  return (
    <div className="mb-6 mt-4 flex flex-wrap gap-3">
      {socials.map(({ id, href, icon, name }) => (
        <a key={id} href={href} target="_blank" rel="noreferrer">
          <Button variant="dark" size="social">
            {icon}
            <span>{name}</span>
          </Button>
        </a>
      ))}
    </div>
  );
}
