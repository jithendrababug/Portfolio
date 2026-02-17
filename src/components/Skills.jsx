import AnimateOnScroll from "./AnimateOnScroll";

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
    },
    {
      title: "Backend",
      skills: ["Java", "Spring Boot", "Python"],
    },
    {
      title: "Mobile",
      skills: ["Flutter"],
    },
    {
      title: "Database",
      skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, index) => (
            <AnimateOnScroll key={group.title} delay={index * 0.08}>
              <div className="group p-8 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur border border-black/10 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-blue-600/10 transition">
                <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-300">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-blue-600/10 text-blue-700 dark:text-blue-200 border border-blue-600/10
                                 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}