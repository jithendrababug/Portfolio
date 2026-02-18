import AnimateOnScroll from "./AnimateOnScroll";

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
            I’m a full-stack software developer focused on building scalable,
            reliable, and user-focused applications. My work combines strong
            backend architecture with modern, intuitive frontend design to
            deliver complete, production-ready solutions.
            <br />
            <br />
            I have developed real-world applications using Java, React,
            PostgreSQL, and Flutter, gaining experience in system design,
            performance optimization, and clean engineering practices.
            <br />
            <br />
            My goal is to contribute to meaningful software products while
            continuously growing as an engineer and solving impactful technical
            challenges.
          </p>
        </AnimateOnScroll>

        {/* cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 items-stretch">
          {highlights.map((item, index) => (
            <AnimateOnScroll key={index} delay={index * 0.08}>
              <div
                className="
                  h-full p-6 rounded-2xl
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

                <p className="text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}