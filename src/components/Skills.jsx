import AnimateOnScroll from "./AnimateOnScroll";
import SpotlightCard from "./SpotlightCard";

export default function Skills() {
  const skillGroups = [
    { title: "Frontend", skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind"] },
    { title: "Backend", skills: ["Java", "Spring Boot", "Python"] },
    { title: "Mobile", skills: ["Flutter"] },
    { title: "Database", skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB"] },
    { title: "Tools", skills: ["Git", "GitHub", "Postman", "VS Code"] },
  ];

  return (
    <section id="skills" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">
            Skills
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, index) => (
            <AnimateOnScroll key={group.title} delay={index * 0.08}>
              <SpotlightCard
                className="
                  group p-8 rounded-2xl
                  bg-white/60 dark:bg-white/5 backdrop-blur-xl
                  border border-black/10 dark:border-white/10
                  shadow-sm hover:shadow-2xl hover:shadow-blue-600/10
                  transition-all duration-500
                  hover:-translate-y-1 hover:scale-[1.01]
                "
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                      {group.title}
                    </h3>

                    {/* tiny premium accent */}
                    <span className="text-xs px-2.5 py-1 rounded-full border border-black/10 dark:border-white/10
                                     bg-white/60 dark:bg-white/5 text-slate-600 dark:text-slate-300">
                      {group.skills.length} skills
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-4 py-2 rounded-xl
                          bg-blue-600/10 text-blue-800
                          dark:bg-blue-400/10 dark:text-blue-200
                          border border-blue-600/10 dark:border-blue-300/10
                          transition-all duration-300
                          hover:bg-blue-600 hover:text-white hover:border-blue-600
                          dark:hover:bg-blue-500 dark:hover:text-white
                          cursor-default
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
