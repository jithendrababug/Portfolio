import { motion, useReducedMotion } from "framer-motion";
import profilePic from "../assets/Jithendra Babu G.jpeg";
import Resume from "../assets/JithendraBabuG.pdf";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduceMotion ? {} : { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: reduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center"
      >
        {/* LEFT */}
        <div>
          {/* badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       border border-white/10 bg-white/5 backdrop-blur
                       text-sm text-blue-200 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Open to Full-Time Software Developer Opportunities
          </motion.div>

          {/* headline */}
          <motion.h1
            variants={item}
            className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white"
          >
            <span className="text-white">
              Full-Stack <span className="text-white/80">Software Developer</span>
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-sky-200 bg-clip-text text-transparent">
              Building scalable apps & modern digital experiences
            </span>
          </motion.h1>

          {/* supporting text */}
          <motion.p
            variants={item}
            className="mt-6 text-[1.05rem] leading-relaxed text-white/70 max-w-xl"
          >
            Focused on reliable backend systems and clean user interfaces using{" "}
            <span className="text-white/90 font-medium">Java</span>,{" "}
            <span className="text-white/90 font-medium">React</span>,{" "}
            <span className="text-white/90 font-medium">PostgreSQL</span> and{" "}
            <span className="text-white/90 font-medium">Flutter</span>. I enjoy solving real-world
            problems and improving every day as an engineer.
          </motion.p>

          {/* buttons */}
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <motion.a
              whileHover={reduceMotion ? {} : { y: -2, scale: 1.02 }}
              whileTap={reduceMotion ? {} : { scale: 0.98 }}
              href="#projects"
              className="px-7 py-3 rounded-xl font-semibold text-white
                         bg-blue-600 hover:bg-blue-700
                         shadow-[0_20px_60px_-20px_rgba(59,130,246,0.7)]
                         transition"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={reduceMotion ? {} : { y: -2, scale: 1.02 }}
              whileTap={reduceMotion ? {} : { scale: 0.98 }}
              href={Resume}
              download
              className="px-7 py-3 rounded-xl font-semibold
                         border border-white/15 bg-white/5 text-white/90
                         hover:bg-white/10 transition backdrop-blur"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* stats row (premium anchor) */}
          <motion.div
            variants={item}
            className="mt-10 grid grid-cols-3 gap-6 max-w-xl"
          >
            {[
              { k: "4+", v: "Projects Built" },
              { k: "1+", v: "Internship" },
              { k: "2025", v: "Graduate" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4"
              >
                <div className="text-2xl font-semibold text-white">{s.k}</div>
                <div className="text-sm text-white/60">{s.v}</div>
              </div>
            ))}
          </motion.div>

          {/* footer line */}
          <motion.div variants={item} className="mt-8 text-sm text-white/50">
            Based in India • Available for full-time opportunities
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div variants={item} className="flex justify-center lg:justify-end">
          <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px]">
            {/* outer glow */}
            <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-blue-500/25 via-indigo-500/20 to-sky-400/20 blur-3xl" />

            {/* glass ring */}
            <div className="absolute inset-0 rounded-full border border-white/10 bg-white/5 backdrop-blur" />

            {/* subtle shine */}
            <div className="pointer-events-none absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute -top-10 left-1/2 h-40 w-72 -translate-x-1/2 rotate-12 bg-white/10 blur-2xl" />
            </div>

            {/* image */}
            <img
              src={profilePic}
              alt="Jithendra Babu G"
              className="relative z-10 w-full h-full object-cover rounded-full
                         border border-white/15 shadow-[0_30px_120px_-40px_rgba(0,0,0,0.8)]"
              loading="eager"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}