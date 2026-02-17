import AnimateOnScroll from "./AnimateOnScroll";

export default function Experience() {
  const experiences = [
    {
      role: "Intern",
      organization: "Nextskill Technologies Pvt Ltd., Coimbatore",
      year: "Jul 2024 – Aug 2024",
      details:
        "Completed a one-month Frontend Web Development internship training. Built responsive websites using HTML, CSS, and JavaScript, strengthened UI/UX understanding, and practiced collaborative development.",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-indigo-300 dark:to-blue-200">
              Experience
            </span>
          </h2>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Practical exposure through internship training and real-world learning.
          </p>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-8">
          {experiences.map((exp, index) => (
            <AnimateOnScroll key={exp.role} delay={index * 0.06}>
              <div className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur p-7 shadow-sm
                              hover:shadow-xl hover:shadow-blue-600/10 transition
                              dark:border-white/10 dark:bg-white/5">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-gray-700 dark:text-gray-300">
                      {exp.organization}
                    </p>
                  </div>

                  <span className="inline-flex w-fit rounded-full border border-black/10 bg-white/70 px-3 py-1 text-sm font-medium text-gray-700
                                   dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
                    {exp.year}
                  </span>
                </div>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.details}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}