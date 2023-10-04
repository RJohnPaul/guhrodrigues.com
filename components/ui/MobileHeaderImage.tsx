import Link from 'next/link'
import Image from 'next/image'

import logo from '@/assets/images/logo.svg'

export function MobileHeaderImage() {
  return (
    <Link href="/">
      <div className="p-3 my-2 rounded-full border bg-background border-neutral-800 lg:hidden">
        <Image
          src={logo}
          alt="Gustavo"
          className="w-5 scale-100 group-hover:scale-105 ease-in-out duration-300"
        />
      </div>
    </Link>
  )
}
