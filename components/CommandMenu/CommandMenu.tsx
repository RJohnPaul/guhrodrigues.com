"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

import { useHooks } from "@/contexts/Provider";

import {
  Code2,
  Github,
  Home,
  Instagram,
  LinkIcon,
  Linkedin,
  MessageCircle,
  LayoutGrid,
  User,
} from "lucide-react";

import toast from "react-hot-toast";
import { ToastMessage } from "../Elements/Toast";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/CommandMenu/components/CommandMenuComponents";

type Groups = Array<{
  heading: string;
  actions: Array<{
    name: string;
    icon: JSX.Element;
    onSelect: () => void | Promise<void | boolean>;
  }>;
}>;

const CommandMenu = () => {
  const { showCommandMenu, setShowCommandMenu } = useHooks();

  const router = useRouter();

  const openLink = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);

  const forwardToRoute = (route: string) => {
    router.push(route);
    setShowCommandMenu(false);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowCommandMenu((prevState) => !prevState);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setShowCommandMenu]);

  const groups: Groups = [
    {
      heading: "Navegação",
      actions: [
        {
          name: "Início",
          icon: <Home />,
          onSelect: () => forwardToRoute("/"),
        },
        {
          name: "Sobre",
          icon: <User />,
          onSelect: () => forwardToRoute("/about"),
        },
        {
          name: "Projetos",
          icon: <LayoutGrid />,
          onSelect: () => forwardToRoute("/projects"),
        },
        {
          name: "Contato",
          icon: <MessageCircle />,
          onSelect: () => forwardToRoute("/contact"),
        },
      ],
    },
    {
      heading: "Redes sociais",
      actions: [
        {
          name: "GitHub",
          icon: <Github />,
          onSelect: () => openLink("https://github.com/guhrodriguess"),
        },
        {
          name: "LinkedIn",
          icon: <Linkedin />,
          onSelect: () => openLink("https://linkedin.com/in/guhrodrigues"),
        },
        {
          name: "Instagram",
          icon: <Instagram />,
          onSelect: () => openLink("https://instagram.com/guhrodrrigues"),
        },
      ],
    },
    {
      heading: "Sugestões",
      actions: [
        {
          name: "Copiar link",
          icon: <LinkIcon />,
          onSelect: async () => {
            setShowCommandMenu(false);

            try {
              await navigator.clipboard.writeText(window.location.href);
              toast.success(
                <ToastMessage
                  title="Copiado"
                  message="Link copiado com sucesso."
                />,
              );
            } catch {
              toast.error(
                <ToastMessage
                  title="Não copiado"
                  message="Erro ao copiar link."
                />,
              );
            }
          },
        },
        {
          name: "Código fonte",
          icon: <Code2 />,
          onSelect: () =>
            openLink("https://github.com/guhrodriguess/guhrodrigues.com"),
        },
      ],
    },
  ];

  return (
    <CommandDialog open={showCommandMenu} onOpenChange={setShowCommandMenu}>
      <CommandInput placeholder="Comece a digitar para buscar..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        {groups.map((group) => (
          <CommandGroup key={group.heading} heading={group.heading}>
            {group.actions.map((action) => (
              <CommandItem key={action.name} onSelect={action.onSelect}>
                {action.icon}
                {action.name}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
};

export { CommandMenu };
