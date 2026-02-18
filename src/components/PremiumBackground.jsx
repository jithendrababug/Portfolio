export default function PremiumBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      {/* LIGHT MODE (premium) */}
      <div className="absolute inset-0 dark:hidden">
        {/* soft base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fbfdff] via-white to-[#eef4ff]" />

        {/* luminous blobs */}
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-500/12 blur-3xl animate-[float1_10s_ease-in-out_infinite]" />
        <div className="absolute -bottom-48 -right-48 h-[640px] w-[640px] rounded-full bg-indigo-500/10 blur-3xl animate-[float2_12s_ease-in-out_infinite]" />

        {/* premium “sheen” */}
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_25%_15%,rgba(59,130,246,0.14),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(99,102,241,0.12),transparent_55%),radial-gradient(circle_at_55%_80%,rgba(59,130,246,0.10),transparent_60%)] animate-[bgDrift_16s_ease-in-out_infinite]" />

        {/* ultra subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.35) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "radial-gradient(ellipse at 50% 15%, black 60%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 15%, black 60%, transparent 100%)",
          }}
        />

        {/* noise */}
        <div className="absolute inset-0 opacity-[0.05] bg-noise" />
      </div>

      {/* DARK MODE (keep as your current premium) */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute inset-0 bg-gradient-to-br from-[#05070b] via-[#070b14] to-[#0b1326]" />

        <div className="absolute inset-0 opacity-55 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_65%_80%,rgba(59,130,246,0.12),transparent_55%)] animate-[bgDrift_14s_ease-in-out_infinite]" />

        <div
          className="absolute inset-0 opacity-[0.11]"
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

        <div className="absolute inset-0 opacity-[0.06] bg-noise" />

        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-400/14 blur-3xl animate-[float1_10s_ease-in-out_infinite]" />
        <div className="absolute -bottom-48 -right-48 h-[640px] w-[640px] rounded-full bg-indigo-400/14 blur-3xl animate-[float2_12s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}
