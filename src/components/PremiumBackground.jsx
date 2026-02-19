export default function PremiumBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* LIGHT MODE (UPGRADED / NOT WHITE-PLAIN) */}
      <div className="absolute inset-0 dark:hidden">
        {/* Base (slightly tinted, not white-flat) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f6f9ff] via-[#f8fbff] to-[#f3f7ff]" />

        {/* Mesh glows (stronger) */}
        <div className="absolute -top-[20%] -right-[10%] h-[700px] w-[700px] rounded-full bg-blue-500/22 blur-[140px]" />
        <div className="absolute -bottom-[22%] -left-[12%] h-[760px] w-[760px] rounded-full bg-indigo-500/20 blur-[160px]" />
        <div className="absolute top-[18%] left-[28%] h-[520px] w-[520px] rounded-full bg-sky-400/14 blur-[140px]" />

        {/* Premium sheen / depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_75%_30%,rgba(99,102,241,0.16),transparent_58%),radial-gradient(circle_at_55%_85%,rgba(14,165,233,0.12),transparent_60%)]" />

        {/* Light rays (subtle) */}
        <div className="absolute -top-40 left-1/2 h-[520px] w-[1200px] -translate-x-1/2 rotate-[-8deg] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-3xl opacity-60" />
        <div className="absolute top-10 left-1/2 h-[420px] w-[1050px] -translate-x-1/2 rotate-[10deg] bg-gradient-to-r from-transparent via-indigo-500/08 to-transparent blur-3xl opacity-60" />

        {/* Grid (fade it out towards bottom, premium) */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.35) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at 50% 28%, black 55%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 28%, black 55%, transparent 100%)",
          }}
        />

        {/* Vignette (makes it feel expensive) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(15,23,42,0.06)_100%)]" />

        {/* Noise (inline, no index.css needed) */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
            backgroundSize: "220px 220px",
          }}
        />
      </div>

      {/* DARK MODE (keep your premium dark, unchanged feel) */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute inset-0 bg-gradient-to-br from-[#05070b] via-[#070b14] to-[#0b1326]" />
        <div className="absolute -top-[20%] -right-[10%] h-[700px] w-[700px] rounded-full bg-blue-500/20 blur-[160px]" />
        <div className="absolute -bottom-[22%] -left-[12%] h-[760px] w-[760px] rounded-full bg-indigo-500/18 blur-[170px]" />
      </div>
    </div>
  );
}
