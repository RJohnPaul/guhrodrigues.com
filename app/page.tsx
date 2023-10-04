import { LatestProjects } from '@/components/ui/LatestProjects'
import { AnimateEnter } from '@/components/utils/AnimateEnter'
import { Button } from '@/components/utils/Button'
import { Divider } from '@/components/utils/Divider'
import { Title } from '@/components/utils/Title'
import { Typography } from '@/components/utils/Typography'
import Link from 'next/link'

export default function Home() {
  return (
    <AnimateEnter>
      <section>
        <Title variant="title">Gustavo Rodrigues</Title>
        <Typography className="leading-relaxed my-6">
          Como desenvolvedor web, meu objetivo é criar experiências digitais que
          combinem perfeitamente a estética elegante com a funcionalidade
          excepcional. Minha paixão é transformar ideias em interfaces de
          usuário intuitivas e visualmente atraentes, garantindo que cada
          projeto conte uma história única e envolvente na web.
        </Typography>
      </section>
      <Divider />
      <section>
        <LatestProjects />
      </section>
      <Divider />
      <section className="flex flex-col gap-4 p-5 bg-neutral-900 border border-neutral-800 rounded-lg my-6">
        <Title variant="title" size="xl">
          Vamos trabalhar juntos!
        </Title>
        <Typography className="leading-relaxed">
          Caso se interessou pelo meu trabalho ou queira dar um feedback sobre
          este website, vamos trocar um papo.
        </Typography>
        <Link href="/contact">
          <Button>Contate-me</Button>
        </Link>
      </section>
    </AnimateEnter>
  )
}
