"use client";

import { Command } from "lucide-react";

import { useHooks } from "@/contexts/Provider";

import { cn } from "@/lib/utils";

import { Button } from "@/components/elements/Button";

type CommandMenuButtonProps = {
  className?: string;
  iconClassName?: string;
};

const CommandMenuButton = (props: CommandMenuButtonProps) => {
  const { setShowCommandMenu } = useHooks();

  const { className, iconClassName } = props;

  return (
    <Button
      onClick={() => setShowCommandMenu(true)}
      variant="ghost"
      size="icon"
      className={className}
    >
      <Command className={cn("h-4 w-4", iconClassName)} />
    </Button>
  );
};

export { CommandMenuButton };
