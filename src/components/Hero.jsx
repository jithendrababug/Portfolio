import { motion, useReducedMotion } from "framer-motion";
import profilePic from "../assets/Jithendra Babu G.jpeg";
import Resume from "../assets/JithendraBabuG.pdf";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduceMotion
        ? {}
        : { staggerChildren: 0.14, delayChildren: 0.06 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 22 },
    show: reduceMotion
      ? { opacity: 1, y: 0 }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
        },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT */}
        <div>
          {/* badge */}
          <motion.div
            variants={item}
            className="
              inline-flex items-center gap-2 px-4 py-2 rounded-full
              border border-black/10 dark:border-white/10
              bg-white/70 dark:bg-white/5 backdrop-blur-xl
              text-sm font-medium
              text-slate-700 dark:text-blue-200
              shadow-sm
            "
          >
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Available for Full-Time Software Developer Roles
          </motion.div>

          {/* headline */}
          <motion.h1
            variants={item}
            className="
              mt-6 text-[2.5rem] md:text-[3.6rem] lg:text-[4rem]
              font-semibold leading-[1.1]
              tracking-tight
              text-slate-900 dark:text-white
            "
          >
            Full-Stack Software Developer
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 dark:from-blue-300 dark:via-indigo-300 dark:to-sky-200 bg-clip-text text-transparent">
              Crafting scalable systems & premium digital experiences
            </span>
          </motion.h1>

          {/* supporting text */}
          <motion.p
            variants={item}
            className="
              mt-6 text-lg leading-relaxed max-w-xl
              text-slate-600 dark:text-slate-300
            "
          >
            Specialized in building reliable backend systems and refined user
            interfaces using{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              Java
            </span>
            ,{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              React
            </span>
            ,{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              PostgreSQL
            </span>
            , and{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              Flutter
            </span>
            . Focused on solving real-world problems through clean architecture
            and production-ready engineering.
          </motion.p>

          {/* buttons */}
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <MagneticButton strength={28}>
              <a
                href="#projects"
                className="
                  inline-block
                  px-7 py-3 rounded-xl font-semibold text-white
                  bg-blue-600 hover:bg-blue-700
                  shadow-[0_20px_60px_-15px_rgba(59,130,246,0.6)]
                  transition-all
                "
              >
                View Projects
              </a>
            </MagneticButton>

            <MagneticButton strength={30}>
              <a
                href={Resume}
                download
                className="
                  inline-block
                  px-7 py-3 rounded-xl font-semibold
                  border border-black/10 dark:border-white/15
                  bg-white/70 dark:bg-white/5
                  text-slate-800 dark:text-white
                  hover:bg-white dark:hover:bg-white/10
                  backdrop-blur-xl transition
                "
              >
                Download Resume
              </a>
            </MagneticButton>
          </motion.div>

          {/* stats */}
          <motion.div
            variants={item}
            className="mt-12 grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { k: "4+", v: "Projects Built" },
              { k: "1+", v: "Internship" },
              { k: "2025", v: "Graduate" },
            ].map((s) => (
              <div
                key={s.v}
                className="
                  rounded-2xl p-5
                  border border-black/10 dark:border-white/10
                  bg-white/60 dark:bg-white/5
                  backdrop-blur-xl shadow-sm
                "
              >
                <div className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {s.k}
                </div>

                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>

          {/* footer */}
          <motion.div
            variants={item}
            className="mt-8 text-sm text-slate-500 dark:text-slate-400"
          >
            Based in India • Open to global opportunities
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={item}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px]">
            {/* glow */}
            <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-blue-500/30 via-indigo-500/25 to-sky-400/25 blur-3xl" />

            {/* glass */}
            <div className="absolute inset-0 rounded-full border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl" />

            {/* image */}
            <img
              src={profilePic}
              alt="Jithendra Babu"
              className="
                relative z-10 w-full h-full object-cover rounded-full
                border border-black/10 dark:border-white/15
                shadow-[0_40px_120px_-20px_rgba(0,0,0,0.35)]
              "
              loading="eager"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
