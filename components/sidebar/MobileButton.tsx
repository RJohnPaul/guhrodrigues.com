"use client";

import { Equal, X } from "lucide-react";

import { useHooks } from "@/context/Provider";

import { Button } from "../utils/Button";

export function MobileButton() {
  const { showMenu, setShowMenu } = useHooks();

  const handleMenu = () => {
    setShowMenu((prevstate) => !prevstate);

    if (!showMenu) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleMenu}>
      {showMenu ? <X className="h-6 w-6" /> : <Equal className="h-6 w-6" />}
    </Button>
  );
}
