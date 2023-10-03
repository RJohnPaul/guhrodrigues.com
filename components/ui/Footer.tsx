import { socials } from '@/data/socials'

import { Button } from '@/components/utils/Button'
import { Clock } from '@/components/utils/Clock'

export function Footer() {
  return (
    <footer className="max-w-[960px] w-full mx-auto h-20">
      <div className="flex items-center sm:justify-center md:justify-between h-full px-6">
        <div className="flex gap-3">
          {socials.map(({ id, href, icon }) => (
            <a key={id} href={href} target="_blank" rel="noreferrer">
              <Button variant="dark" size="icon">
                {icon}
              </Button>
            </a>
          ))}
        </div>

        <Clock />
      </div>
    </footer>
  )
}
