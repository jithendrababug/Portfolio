import AnimateOnScroll from "./AnimateOnScroll";

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution:
        "University College of Engineering, BIT Campus, Tiruchirappalli",
      year: "2021 – 2025",
      details:
        "Final-year student with focus on full-stack development, Java, Spring Boot, and AI-driven solutions.",
    },
    {
      degree: "Higher Secondary (HSC)",
      institution:
        "St. Paul’s Matriculation Higher Secondary School, Kovilpatti",
      year: "2019 – 2021",
      details: "Specialized in Biology and Mathematics.",
    },
    {
      degree: "School Secondary (SSLC)",
      institution:
        "St. Paul’s Matriculation Higher Secondary School, Kovilpatti",
      year: "2018 – 2019",
      details: "Specialized in General.",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-indigo-300 dark:to-blue-200">
              Education
            </span>
          </h2>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Academic background and key learning highlights.
          </p>
        </AnimateOnScroll>

        <div className="mt-12 space-y-6">
          {education.map((edu, index) => (
            <AnimateOnScroll key={edu.degree} delay={index * 0.05}>
              <div className="group relative rounded-2xl border border-black/10 bg-white/60 backdrop-blur p-7 shadow-sm
                              hover:shadow-xl hover:shadow-blue-600/10 transition
                              dark:border-white/10 dark:bg-white/5">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-gray-700 dark:text-gray-300">
                      {edu.institution}
                    </p>
                  </div>

                  <span className="inline-flex w-fit rounded-full border border-black/10 bg-white/70 px-3 py-1 text-sm font-medium text-gray-700
                                   dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
                    {edu.year}
                  </span>
                </div>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}