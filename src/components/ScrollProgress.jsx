// React Hooks
import { useEffect } from "react";

// Gsap Scroll Progress Bar
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollProgress = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 210,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <progress
      max="210"
      value="0"
      className="fixed z-[90] top-0 left-0 appearance-none w-full h-[2px] border-none bg-transparent"
      style={{ WebkitAppearance: "none" }}
    ></progress>
  );
};

export default ScrollProgress;
