import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

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
