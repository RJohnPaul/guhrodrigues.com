"use client";

import { Command } from "lucide-react";

import { useHooks } from "@/context/Provider";

import { cn } from "@/lib/utils";

import { Button } from "@/components/utils/Button";

export function CommandMenuButton({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  const { setShowCommandMenu } = useHooks();

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
}
