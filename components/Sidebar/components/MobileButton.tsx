"use client";

import { Equal, X } from "lucide-react";

import { useHooks } from "@/contexts/Provider";

import { Button } from "@/components/Button";

const MobileButton = () => {
  const { showMenu, setShowMenu } = useHooks();

  function handleMenu() {
    setShowMenu((prevstate) => !prevstate);

    if (!showMenu) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleMenu}>
      {showMenu ? <X className="h-7 w-7" /> : <Equal className="h-7 w-7" />}
    </Button>
  );
};

export { MobileButton };
