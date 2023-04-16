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

  return <progress max="210" value="0"></progress>;
};

export default ScrollProgress;
