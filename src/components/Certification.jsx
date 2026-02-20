import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Certifications() {
  // ✅ Keep ONLY relative paths (no BASE_URL here)
  const certifications = [
    {
      title: "Frontend Web Development",
      issuer: "Nextskill Technologies",
      date: "August 2024",
      file: "certificates/Intern.pdf",
    },
    {
      title: "My SQL",
      issuer: "Guvi",
      date: "August 2024",
      file: "certificates/MySQL.png",
    },
    {
      title: "GIT",
      issuer: "Guvi",
      date: "August 2024",
      file: "certificates/GIT.png",
    },
    {
      title: "ChatGPT",
      issuer: "Guvi",
      date: "December 2024",
      file: "certificates/Chatgpt.png",
    },
    {
      title: "AI for Beginners",
      issuer: "HP Life",
      date: "June 2025",
      file: "certificates/HPLife.pdf",
    },
    {
      title: "Google AI Essentials",
      issuer: "Google (Coursera)",
      date: "July 2025",
      file: "certificates/GoogleAI.pdf",
    },
    {
      title: "MS Excel",
      issuer: "Guvi",
      date: "July 2025",
      file: "certificates/MSExcel.png",
    },
    {
      title: "Python",
      issuer: "Guvi",
      date: "July 2025",
      file: "certificates/Python.png",
    },
    {
      title: "Agile Project Management",
      issuer: "HP Life",
      date: "August 2025",
      file: "certificates/Agile.pdf",
    },
    {
      title: "HTML & CSS",
      issuer: "Guvi",
      date: "August 2025",
      file: "certificates/HTMLCSS.png",
    },
    {
      title: "UI / UX for Beginners",
      issuer: "Great Learning",
      date: "August 2025",
      file: "certificates/UIUX.pdf",
    },
  ];

  // ✅ Works for BOTH:
  // Local:    /certificates/Intern.pdf
  // GitHub:   /Portfolio/certificates/Intern.pdf
  const toPublicUrl = (filePath) => `${import.meta.env.BASE_URL}${filePath}`;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  const card = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-indigo-300 dark:to-blue-200">
              Certifications
            </span>
          </h2>

          <p className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Certifications demonstrating continuous learning and upskilling.
          </p>
        </AnimateOnScroll>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={card}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
              className="group relative rounded-2xl border border-black/10 bg-white/60 backdrop-blur p-7 shadow-sm
                         hover:shadow-xl hover:shadow-blue-600/10 transition
                         dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {cert.title}
              </h3>

              <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium">
                {cert.issuer}
              </p>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {cert.date}
              </p>

              <a
                href={toPublicUrl(cert.file)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg
                           bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/15
                           hover:bg-blue-700 transition"
              >
                View Certificate <span className="ml-2">↗</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}