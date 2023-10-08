import { socials } from '@/data/socials'
import { Button } from '@/components/utils/Button'

export function Socials() {
  return (
    <div className="flex flex-wrap gap-3 mt-4 mb-6">
      {socials.map(({ id, href, icon, name }) => (
        <a key={id} href={href} target="_blank" rel="noreferrer">
          <Button variant="dark" size="social">
            {icon}
            <span>{name}</span>
          </Button>
        </a>
      ))}
    </div>
  )
}
