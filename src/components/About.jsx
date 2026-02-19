import AnimateOnScroll from "./AnimateOnScroll";
import TiltCard from "./TiltCard";

export default function About() {
  const highlights = [
    {
      title: "Full Stack Development",
      description:
        "Designing complete applications from refined frontend interfaces to robust backend systems.",
    },
    {
      title: "Backend Engineering",
      description:
        "Building scalable and maintainable backend architectures using Java, APIs, and databases.",
    },
    {
      title: "Modern Frontend",
      description:
        "Creating fast, responsive, and premium user interfaces with React and Tailwind.",
    },
    {
      title: "Real-world Systems",
      description:
        "Hands-on experience building dashboards, IoT platforms, and production-style applications.",
    },
  ];

  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-4xl md:text-5xl font-semibold text-center text-slate-900 dark:text-white">
            About Me
          </h2>

          <p className="mt-6 max-w-4xl mx-auto text-center text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            I am a Full-Stack Software Developer with strong expertise in backend engineering and modern frontend development. I specialize in building scalable, reliable, and production-ready applications using Java, React, PostgreSQL, and Flutter.
            <br />
            <br />
            I have developed multiple real-world applications including IoT monitoring systems, full-stack dashboards, and mobile applications. Through these projects, I gained hands-on experience in system architecture, API development, database design, and responsive user interface engineering.
            <br />
            <br />
            I focus on writing clean, maintainable code and building efficient software systems that solve real-world problems. I am continuously improving my technical skills and actively seeking opportunities to contribute to impactful software products in a professional engineering environment.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6 mt-16 items-stretch">
          {highlights.map((item, index) => (
            <AnimateOnScroll key={index} delay={index * 0.08}>
              <TiltCard className="h-full">
                <div
                  className="
                    group h-full p-7 rounded-2xl
                    border border-black/10 dark:border-white/10
                    bg-white/60 dark:bg-white/5
                    backdrop-blur-xl
                    shadow-sm hover:shadow-xl hover:shadow-blue-600/10
                    transition-all duration-500
                    hover:-translate-y-1 hover:scale-[1.01]
                  "
                >
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </TiltCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
