import { useRef } from "react";

export default function SpotlightCard({
  children,
  className = "",
  as: Tag = "div",
}) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    el.style.setProperty("--sx", `${x}px`);
    el.style.setProperty("--sy", `${y}px`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    // Move spotlight away smoothly
    el.style.setProperty("--sx", `-999px`);
    el.style.setProperty("--sy", `-999px`);
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`spotlight-card ${className}`}
    >
      {children}
    </Tag>
  );
}
