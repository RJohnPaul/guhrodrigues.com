import { socials } from "@/data/socials";

import { Button } from "@/components/elements/Button";

const Socials = () => {
  return (
    <div className="mb-6 mt-4 flex flex-wrap gap-3">
      {socials.map(({ href, icon, name }) => (
        <a key={name} href={href} target="_blank" rel="noopener noreferrer">
          <Button variant="dark" size="lg" className="px-3 py-2">
            {icon}
            <span>{name}</span>
          </Button>
        </a>
      ))}
    </div>
  );
};

export { Socials };
