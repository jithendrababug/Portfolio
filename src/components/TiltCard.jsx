import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), {
    stiffness: 220,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), {
    stiffness: 220,
    damping: 20,
  });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();

    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    const cx = rect.width / 2;
    const cy = rect.height / 2;

    x.set(px - cx);
    y.set(py - cy);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
