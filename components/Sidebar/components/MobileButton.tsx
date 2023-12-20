"use client";

import { Equal, X } from "lucide-react";

import { useHooks } from "@/contexts/Provider";

import { Button } from "@/components/Elements/Button";

const MobileButton = () => {
  const { showMenu, setShowMenu } = useHooks();

  const handleMenu = () => {
    if (!showMenu) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }

    setShowMenu((prevstate) => !prevstate);
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleMenu}>
      {showMenu ? <X className="h-7 w-7" /> : <Equal className="h-7 w-7" />}
    </Button>
  );
};

export { MobileButton };
