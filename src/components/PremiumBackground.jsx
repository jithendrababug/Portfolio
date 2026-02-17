export default function PremiumBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7fbff] via-white to-[#eef4ff] dark:from-[#05070b] dark:via-[#070b14] dark:to-[#0b1326]" />

      {/* Animated gradient drift (subtle premium motion) */}
      <div className="absolute inset-0 opacity-60 dark:opacity-50 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_65%_80%,rgba(59,130,246,0.12),transparent_55%)] animate-[bgDrift_14s_ease-in-out_infinite]" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.11]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.65) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.65) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          maskImage:
            "radial-gradient(ellipse at 50% 20%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 20%, black 60%, transparent 100%)",
        }}
      />

      {/* Noise texture (huge premium feel) */}
      <div className="absolute inset-0 opacity-[0.045] dark:opacity-[0.06] bg-noise" />

      {/* Soft blobs (kept subtle) */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-500/16 blur-3xl animate-[float1_10s_ease-in-out_infinite] dark:bg-blue-400/14" />
      <div className="absolute -bottom-48 -right-48 h-[640px] w-[640px] rounded-full bg-indigo-500/12 blur-3xl animate-[float2_12s_ease-in-out_infinite] dark:bg-indigo-400/14" />
    </div>
  );
}