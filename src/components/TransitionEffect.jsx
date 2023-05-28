// React Hooks
import { useEffect, useState } from "react";

// Framer Motion
import { motion } from "framer-motion";

// Transition Effect
const TransitionEffect = () => {
  const [loading, setLoading] = useState(true);

  const loadingScroll = () => {
    if (!loading) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    loadingScroll();

    const timeoutId = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 900);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loading && (
        <>
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-[80] bg-primary"
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0%", width: "0%" }}
            exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-[70] bg-secondary"
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0%", width: "0%" }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          />
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-[60] bg-background"
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0%", width: "0%" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          />
        </>
      )}
    </>
  );
};

export default TransitionEffect;
