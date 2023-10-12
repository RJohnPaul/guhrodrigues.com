import { Clock } from '../ui/Clock'
import { Typography } from '../utils/Typography'

export function SidebarFooter() {
  return (
    <div className="hidden lg:flex justify-between items-center gap-2">
      <Typography variant="muted" className="text-xs font-medium">
        © {new Date().getFullYear()} —{' '}
        <a
          href="https://github.com/guhrodriguess/guhrodrigues.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="hover:text-foreground duration-300">
            Gustavo Rodrigues
          </span>
        </a>
      </Typography>

      <Clock />
    </div>
  )
}
