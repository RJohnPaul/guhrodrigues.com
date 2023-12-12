import { Typography } from "../utils/Typography";
import { Clock } from "../ui/Clock";
import { CommandMenuButton } from "../command/CommandMenuButton";

export function SidebarFooter() {
  return (
    <div className="hidden items-center justify-between gap-2 lg:flex">
      <Typography variant="muted" className="text-xs font-medium">
        © {new Date().getFullYear()} —{" "}
        <a
          href="https://github.com/guhrodriguess/guhrodrigues.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="duration-300 hover:text-foreground">
            Gustavo Rodrigues
          </span>
        </a>
      </Typography>
      <div className="flex items-center gap-1">
        <CommandMenuButton />
        <Clock />
      </div>
    </div>
  );
}
