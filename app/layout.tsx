import type { Metadata } from "next";
import { Poppins, Kanit } from "next/font/google";

import "@/styles/globals.css";

import { cn } from "@/lib/utils";

import { Provider } from "@/contexts/Provider";

import { AnimateEnter } from "@/components/elements/AnimateEnter";
import { CommandMenu } from "@/components/command";
import { Sidebar } from "@/components/sidebar";
import { Toast } from "@/components/elements/Toast";
import { Texture } from "@/components/elements/Texture";

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
  title: "Gustavo Rodrigues",
  description:
    "Criando experiências digitais que combinem perfeitamente a estética elegante com a funcionalidade excepcional. Minha paixão é transformar código em experiências incríveis, garantindo que cada projeto conte uma história única e envolvente na web.",
  icons: {
    apple: "/favicon.svg",
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  keywords: [
    "Gustavo Rodrigues",
    "guhrodrigues.com",
    "Technology",
    "Desenvolvedor Web",
    "Desenvolvedor Front-end",
    "Desenvolvedor FullStack",
    "Web Developer",
    "Front-end Developer",
    "FullStack Developer",
    "Frontend",
    "FullStack",
    "Developer",
    "Software",
    "São Paulo",
    "Design",
    "Brazil",
    "Vercel",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "Resend",
    "Radix UI",
  ],
  openGraph: {
    description:
      "Criando experiências digitais que combinem perfeitamente a estética elegante com a funcionalidade excepcional. Minha paixão é transformar código em experiências incríveis, garantindo que cada projeto conte uma história única e envolvente na web.",
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://i.imgur.com/7t6GRBW.png",
        alt: "Gustavo Rodrigues",
      },
    ],
    locale: "pt-BR",
    title: "Gustavo Rodrigues – Transformando código em experiências únicas",
    type: "website",
    url: "https://guhrodrigues.com",
  },
  publisher: "Gustavo Rodrigues",
  twitter: {
    card: "summary_large_image",
    site: "@guhrodrrigues",
    title: "Gustavo Rodrigues – Transformando código em experiências únicas",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;

  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen bg-background font-poppins outline-none",
          poppins.variable,
          kanit.variable,
        )}
      >
        <AnimateEnter className="mx-auto flex max-w-6xl flex-col px-8 lg:flex-row lg:gap-10 lg:py-24">
          <Provider>
            <CommandMenu />
            <Sidebar />
            {children}
          </Provider>
        </AnimateEnter>
        <Toast />
        <Texture />
      </body>
    </html>
  );
};

export default RootLayout;
