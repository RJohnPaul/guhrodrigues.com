import { useState, useEffect } from "react";

import { socials } from "@/data/socials";

import { Button } from "@/components/utils/Button";
import { Typography } from "@/components/utils/Typography";

export function Footer() {
  const [date, setDate] = useState<Date>(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <footer className="max-w-5xl w-full mx-auto h-20">
      <div className="flex items-center sm:justify-center md:justify-between h-full px-6">
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
          {date.toLocaleString("pt-BR", {
            hour: "2-digit",
            minute: "numeric",
            second: "numeric",
          })}
        </Typography>
      </div>
    </footer>
  );
}
