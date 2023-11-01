import type { Metadata } from "next";
import { Poppins, Kanit } from "next/font/google";
import "@/styles/globals.css";

import { Provider } from "@/context/Provider";

import { Texture } from "@/components/ui/Texture";
import { Blur } from "@/components/ui/Blur";
import { AnimateEnter } from "@/components/utils/AnimateEnter";
import { Sidebar } from "@/components/sidebar/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-default",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  authors: [{ name: "Gustavo Rodrigues", url: "https://guhrodrigues.com" }],
  category: "developer",
  creator: "Gustavo Rodrigues",
  description:
    "Criando experiências digitais que combinem perfeitamente a estética elegante com a funcionalidade excepcional. Minha paixão é transformar código em experiências incríveis, garantindo que cada projeto conte uma história única e envolvente na web.",
  title: {
    default: "Gustavo Rodrigues — Transformando código em experiências únicas",
    template: "%s — Gustavo Rodrigues",
  },
  icons: {
    apple: "/favicon.ico",
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "Design",
    "Frontend",
    "Developer",
    "Software",
    "Gustavo Rodrigues",
    "guhrodrigues.com",
    "Brazil",
    "Vercel",
    "FullStack",
    "Tech",
  ],
  openGraph: {
    description:
      "Criando experiências digitais que combinem perfeitamente a estética elegante com a funcionalidade excepcional. Minha paixão é transformar código em experiências incríveis, garantindo que cada projeto conte uma história única e envolvente na web.",
    images: [
      {
        alt: "Gustavo Rodrigues",
        height: 1080,
        url: "https://i.imgur.com/8EtjFM3.png",
        width: 1920,
      },
    ],
    locale: "pt-BR",
    siteName: "Gustavo Rodrigues — Transformando código em experiências únicas",
    title: "Gustavo Rodrigues — Transformando código em experiências únicas",
    type: "website",
    url: "https://guhrodrigues.com",
  },
  publisher: "Gustavo Rodrigues",
  twitter: {
    card: "summary_large_image",
    site: "@guhrodrrigues",
    title: "Gustavo Rodrigues — Transformando código em experiências únicas",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${kanit.variable} bg-background font-poppins outline-none`}
      >
        <AnimateEnter className="mx-auto flex max-w-6xl flex-col px-8 lg:flex-row lg:gap-10 lg:py-24">
          <Provider>
            <Sidebar />
            {children}
          </Provider>
        </AnimateEnter>
        <Texture />
        <Blur />
      </body>
    </html>
  );
}
