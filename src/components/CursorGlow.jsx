import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${pos.x - 300}px, ${pos.y - 300}px)`,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.25), transparent 60%)",
        }}
      />
    </div>
  );
}
