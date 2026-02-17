import { motion, useReducedMotion } from "framer-motion";

export default function AnimateOnScroll({
  children,
  delay = 0,
  y = 18,
  duration = 0.6,
  once = true,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}