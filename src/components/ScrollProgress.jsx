import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {

  // Track scroll progress
  const { scrollYProgress } = useScroll();

  // Smooth spring animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <>
      {/* main progress line */}
      <motion.div
        style={{ scaleX }}
        className="
          fixed top-0 left-0 right-0 z-[9999]
          h-[3px]
          origin-left
          bg-gradient-to-r
          from-blue-500
          via-indigo-500
          to-sky-400
        "
      />

      {/* glow layer */}
      <motion.div
        style={{ scaleX }}
        className="
          fixed top-0 left-0 right-0 z-[9998]
          h-[6px]
          origin-left
          bg-gradient-to-r
          from-blue-500
          via-indigo-500
          to-sky-400
          blur-md
          opacity-50
        "
      />

      {/* ultra thin highlight line */}
      <motion.div
        style={{ scaleX }}
        className="
          fixed top-0 left-0 right-0 z-[9999]
          h-[1px]
          origin-left
          bg-white/80 dark:bg-white/40
        "
      />
    </>
  );
}
