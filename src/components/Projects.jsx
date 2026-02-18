import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

// ✅ CHANGE THESE FILENAMES to match your real files in: src/assets/projects/
import iotImg from "../assets/projects/iot.png";
import drainageImg from "../assets/projects/drainage.png";
import portfolioImg from "../assets/projects/portfolio.png";

function PhoneFrame({ src, alt }) {
  return (
    <div className="relative mx-auto w-full max-w-[330px]">
      {/* glow */}
      <div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-r from-blue-500/20 via-indigo-500/15 to-sky-400/20 blur-2xl opacity-70" />

      {/* phone body */}
      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
        {/* notch */}
        <div className="absolute left-1/2 top-3 z-10 h-5 w-28 -translate-x-1/2 rounded-full bg-black/35" />

        {/* screen */}
        <div className="aspect-[9/19] w-full overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* subtle shine */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.14),transparent_42%)]" />
      </div>
    </div>
  );
}

function LaptopFrame({ src, alt }) {
  return (
    <div className="relative w-full">
      {/* glow */}
      <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-r from-blue-500/18 via-indigo-500/14 to-sky-400/18 blur-2xl opacity-70" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
        {/* Keep SAME HEIGHT always */}
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* subtle shine */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.14),transparent_45%)]" />
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "IoT Dashboard",
      kind: "laptop", // laptop | phone
      image: iotImg,
      description:
        "Production-style IoT dashboard with sensor cards, alerts, and data-driven UI — built for real monitoring workflows.",
      tags: ["React", "PostgreSQL", "API", "Cloud"],
      live: "https://jithendrababug.github.io/IoT-Dashboard/",
      code: "https://github.com/jithendrababug/IoT-Dashboard",
    },
    {
      title: "Flutter Drainage Monitoring",
      kind: "laptop",
      image: drainageImg,
      description:
        "Mobile IoT app for drainage monitoring and blockage detection with real-time sensor data views and admin login.",
      tags: ["Flutter", "IoT", "Realtime", "UI"],
      live: null,
      code: "https://github.com/jithendrababug/Application-for-Drainage-Monitoring-and-Blockage-Detection-using-Flutter",
    },
    {
      title: "Portfolio Website",
      kind: "laptop",
      image: portfolioImg,
      description:
        "Modern responsive portfolio built with React + Tailwind + motion — focused on clarity, speed, and premium UI.",
      tags: ["React", "Tailwind", "Framer Motion"],
      live: "https://jithendrababug.github.io/Portfolio",
      code: "#", // put your repo link here
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const card = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            <span className="text-gray-900 dark:text-white">Featured </span>
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-indigo-300 dark:to-sky-200">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A few polished builds that reflect my focus on clean UI, real-world
            workflows, and production-minded code.
          </p>
        </AnimateOnScroll>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 space-y-10"
        >
          {projects.map((p, idx) => {
            const isReverse = idx % 2 === 1;

            return (
              <motion.article
                key={p.title}
                variants={card}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01]"
              >
                {/* top glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/15 via-indigo-500/12 to-sky-400/15 blur-2xl" />
                </div>

                <div
                  className={`relative grid gap-10 p-8 md:p-10 md:grid-cols-2 items-center ${
                    isReverse ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* media */}
                  <div className="w-full">
                    {p.kind === "phone" ? (
                      <PhoneFrame src={p.image} alt={p.title} />
                    ) : (
                      <LaptopFrame src={p.image} alt={p.title} />
                    )}
                  </div>

                  {/* content */}
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                        {p.title}
                      </h3>

                      <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {p.description}
                    </p>

                    {/* tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-sm border border-white/10 bg-white/5 text-gray-700 dark:text-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* actions */}
                    <div className="mt-7 flex flex-wrap gap-3">
                      {p.live ? (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition"
                        >
                          Live Demo <span className="transition group-hover:translate-x-0.5">→</span>
                        </a>
                      ) : null}

                      {p.code ? (
                        <a
                          href={p.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-gray-900 dark:text-white hover:bg-white/10 transition"
                        >
                          Source Code
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
