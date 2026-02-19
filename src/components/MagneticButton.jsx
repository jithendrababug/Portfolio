import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({
  children,
  className = "",
  strength = 40,
  ...props
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 20,
    mass: 0.5,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 20,
    mass: 0.5,
  });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX / strength);
    y.set(distanceY / strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div
        whileTap={{ scale: 0.96 }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
