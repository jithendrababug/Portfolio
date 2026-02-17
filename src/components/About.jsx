import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
  const highlights = [
    {
      title: "Full Stack Development",
      description:
        "Building complete applications from frontend UI to backend systems.",
    },
    {
      title: "Backend Systems",
      description:
        "Developing scalable backend using Java, Spring Boot, and databases.",
    },
    {
      title: "Modern Frontend",
      description: "Creating responsive interfaces using React and Tailwind.",
    },
    {
      title: "Real-world Projects",
      description:
        "Hands-on experience building dashboards, IoT systems, and applications.",
    },
  ];

  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>

          {/* ✅ Centered container + justified text */}
          <p className="text-[1.05rem] md:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-justify leading-8">
            I recently graduated with a B.Tech in Information Technology and am
            beginning my professional journey in software development. I enjoy
            building practical applications that combine strong backend logic
            with clean, intuitive user interfaces.
            <br />
            <br />
            I have hands-on experience developing full-stack and real-time
            applications using technologies like Java, React, PostgreSQL, and
            Flutter. Through personal projects and internships, I’ve developed a
            strong foundation in writing maintainable code, designing scalable
            systems, and solving real-world technical problems.
            <br />
            <br />
            I’m committed to continuous learning, improving my engineering
            skills, and contributing to meaningful software projects in a
            professional environment.
          </p>
        </AnimateOnScroll>

        {/* ✅ Equal-height cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12 items-stretch">
          {highlights.map((item, index) => (
            <AnimateOnScroll key={index} delay={index * 0.08}>
              <div className="h-full min-h-[140px] flex flex-col justify-start p-6 rounded-xl bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
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