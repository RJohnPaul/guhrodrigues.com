import { useHooks } from "@/contexts/Provider";
import { useEffect } from "react";

export function useHandleScroll() {
  const { position, visible, setVisible, setPosition } = useHooks();

  useEffect(() => {
    const handleScroll = () => {
      let scrolling = window.scrollY;

      setVisible(position > scrolling);
      setPosition(scrolling);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [position]);

  return { visible };
}
