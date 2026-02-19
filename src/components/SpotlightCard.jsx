import { useRef } from "react";

export default function SpotlightCard({
  children,
  className = "",
  spotlightClassName = "",
}) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`relative overflow-hidden ${className}`}
    >
      {/* spotlight */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 ${spotlightClassName}`}
        style={{
          background:
            "radial-gradient(600px circle at var(--mx) var(--my), rgba(59,130,246,0.18), transparent 40%)",
        }}
      />
      {children}
    </div>
  );
}
