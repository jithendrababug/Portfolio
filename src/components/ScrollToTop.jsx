import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={scrollUp}
          initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? {} : { opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 rounded-full border border-white/10 bg-black/70 text-white shadow-lg backdrop-blur
                     px-4 py-3 hover:bg-black/80 active:scale-95
                     dark:bg-white/10 dark:hover:bg-white/15"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}