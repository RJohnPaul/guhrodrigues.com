import type { Metadata } from 'next'
import { Poppins, Kanit } from 'next/font/google'
import '@/styles/globals.css'

import { Provider } from '@/context/Provider'
import { AnimateEnter } from '@/components/utils/AnimateEnter'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { Container } from '@/components/ui/Container'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-default',
})

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-title',
})

export const metadata: Metadata = {
  authors: [{ name: 'Gustavo Rodrigues', url: 'https://guhrodrigues.com' }],
  category: 'developer',
  creator: 'Gustavo Rodrigues',
  description: 'Desenvolvedor Web',
  title: 'Gustavo Rodrigues',
  icons: {
    apple: '/favicon.svg',
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'Framer Motion',
    'Design',
    'Frontend',
    'Developer',
    'Software',
    'Gustavo Rodrigues',
    'guhrodrigues.com',
    'Brazil',
  ],
  openGraph: {
    description: 'Design Engineer.',
    images: [
      {
        alt: 'Gustavo Rodrigues',
        height: 1080,
        url: 'https://i.imgur.com/3KqVuYV.png',
        width: 1920,
      },
    ],
    locale: 'pt-BR',
    siteName: 'Gustavo Rodrigues',
    title: 'Gustavo Rodrigues',
    type: 'website',
    url: 'https://guhrodrigues.com',
  },
  publisher: 'Gustavo Rodrigues',
  twitter: {
    card: 'summary_large_image',
    site: '@guhrdss',
    title: 'Gustavo Rodrigues',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${kanit.variable}`}>
        <AnimateEnter>
          <Provider>
            <Header />
            <Container>{children}</Container>
            <Footer />
          </Provider>
        </AnimateEnter>
      </body>
    </html>
  )
}
