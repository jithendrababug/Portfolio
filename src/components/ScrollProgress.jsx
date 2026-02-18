import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      const next = height > 0 ? (scrollTop / height) * 100 : 0;
      setP(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[999] h-[3px] w-full bg-transparent">
      <div
        className="h-full rounded-r-full bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 transition-[width] duration-75"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}
