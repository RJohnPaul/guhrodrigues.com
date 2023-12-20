import { socials } from "@/data/socials";

import { Button } from "@/components/Button";

const Socials = () => {
  return (
    <div className="mb-6 mt-4 flex flex-wrap gap-3">
      {socials.map(({ href, icon, name }) => (
        <a key={name} href={href} target="_blank" rel="noreferrer">
          <Button variant="dark" size="social">
            {icon}
            <span>{name}</span>
          </Button>
        </a>
      ))}
    </div>
  );
};

export { Socials };
