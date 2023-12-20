import type { Metadata } from "next";
import { Poppins, Kanit } from "next/font/google";

import "@/styles/globals.css";

import { cn } from "@/lib/utils";

import { Provider } from "@/contexts/Provider";

import { AnimateEnter } from "@/components/Elements/AnimateEnter";
import { CommandMenu } from "@/components/CommandMenu";
import { Sidebar } from "@/components/Sidebar";
import { Toast } from "@/components/Elements/Toast";
import { Texture } from "@/components/Elements/Texture";

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
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "Resend",
    "Radix",
    "Design",
    "Frontend",
    "Developer",
    "Software",
    "Gustavo Rodrigues",
    "guhrodrigues.com",
    "Brazil",
    "Vercel",
    "FullStack",
    "Technology",
    "Desenvolvedor Web",
    "Desenvolvedor Front-end",
    "Desenvolvedor FullStack",
    "São Paulo",
  ],
  openGraph: {
    description:
      "Criando experiências digitais que combinem perfeitamente a estética elegante com a funcionalidade excepcional. Minha paixão é transformar código em experiências incríveis, garantindo que cada projeto conte uma história única e envolvente na web.",
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://i.imgur.com/wWEktB3.png",
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
