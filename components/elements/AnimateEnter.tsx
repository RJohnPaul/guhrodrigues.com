"use client";

import { LazyMotion, domAnimation, motion } from "framer-motion";

const animation = {
  hide: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

type AnimateEnterProps = {
  children: React.ReactNode;
  className?: string;
};

const AnimateEnter = (props: AnimateEnterProps) => {
  const { className, children } = props;

  return (
    <LazyMotion features={domAnimation}>
      <motion.main
        className={className}
        initial="hide"
        animate="show"
        variants={animation}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.main>
    </LazyMotion>
  );
};

export { AnimateEnter };
