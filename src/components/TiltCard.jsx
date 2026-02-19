import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export default function TiltCard({
  children,
  className = "",
  strength = 10,
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  // tilt motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(y, [-100, 100], [strength, -strength]),
    { stiffness: 220, damping: 22, mass: 0.6 }
  );

  const rotateY = useSpring(
    useTransform(x, [-100, 100], [-strength, strength]),
    { stiffness: 220, damping: 22, mass: 0.6 }
  );

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    const cx = rect.width / 2;
    const cy = rect.height / 2;

    // tilt (only if motion allowed)
    if (!reduceMotion) {
      x.set(px - cx);
      y.set(py - cy);
    }

    // spotlight vars for CSS ::before (in PX)
    el.style.setProperty("--sx", `${px}px`);
    el.style.setProperty("--sy", `${py}px`);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);

    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--sx", `-999px`);
    el.style.setProperty("--sy", `-999px`);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        reduceMotion
          ? { transformPerspective: 1000 }
          : { rotateX, rotateY, transformPerspective: 1000 }
      }
      className={`spotlight-card ${className}`}
    >
      {children}
    </motion.div>
  );
}
