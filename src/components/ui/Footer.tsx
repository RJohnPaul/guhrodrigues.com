import { socials } from "@/data/socials";

import { Button } from "@/components/utils/Button";
import { Typography } from "@/components/utils/Typography";

export function Footer() {
  return (
    <footer className="max-w-5xl w-full mx-auto p-6">
      <div className="flex items-center sm:justify-center md:justify-between">
        <div className="flex gap-3">
          {socials.map(({ id, icon, href }) => (
            <a key={id} href={href} target="_blank">
              <Button variant="dark" size="icon">
                {icon}
              </Button>
            </a>
          ))}
        </div>
        <Typography variant="muted" size="sm" className="sm:hidden md:block">
          {new Date().getFullYear()} © Gustavo Rodrigues
        </Typography>
      </div>
    </footer>
  );
}
