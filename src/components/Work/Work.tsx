export default function Work() {
  const jobs = [
    {
      company: "Greenstone Financial Services",
      title: "Frontend Developer",
      date: "Nov 2022 - Current",
      details: [
        "Collaboration with marketing and product teams to deliver new features across 14 C# MVC-based insurance brands.",
        "Applying Canva design to code and follow clean code practices to ensure maintainable, scalable code.",
        "Build reusable UI components and responsive layouts, integrated with Kontent.ai.",
        "Consistently meet sprint deadlines while contributing across multiple streams, including projects, CRO initiatives, BAU, and test automation."
      ],
      direction: "right"
    },
    {
      company: "Forexco",
      title: "Junior Full Stack Developer",
      date: "Nov 2021 - Jan 2022",
      details: [
        "Built out TypeScript and Nest.js components for new fintech features in a React application.",
        "Helped make decisions about UX and UI when there was no designer available.",
        "Worked with the product team to add new features."
      ],
      direction: "left"
    },
    {
      company: "Entain",
      title: "Full Stack Developer Internship",
      date: "July 2021 - October 2021",
      details: [
        "Made Vue.js components for several micro-frontend brands, such as Betstar, Neds, and Ladbrokes.",
        "Participated in Agile sprints, daily standups, and QA testing cycles.",
        "Created internal documents in Confluence and helped stakeholders with demos."
      ],
      direction: "right"
    },
    {
      company: "JDP Electrical Services",
      title: "Web Developer",
      date: "2020 - 2021",
      details: [
        "Built and launched a single-page website on AWS, overseeing the entire development lifecycle development to deployment."
      ],
      direction: "left"
    }
  ];

  return (
    <section className="py-12 px-2 md:px-0 scroll-mt-32" id="work">
      <h2 className="text-3xl font-bold text-center mb-10 text-black drop-shadow-md">Work Experience</h2>
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline vertical line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent -translate-x-1/2" />
        <ul className="space-y-12">
          {jobs.map((job, idx) => {
            const isRight = idx % 2 === 0;
            return (
              <li
                key={job.company + job.date}
                className={`relative flex w-full items-center justify-between flex-col md:flex-row`}
              >
                <div className={`w-full md:w-1/2 flex justify-center mb-4 md:mb-0 ${isRight ? "md:order-2 md:justify-end" : "md:order-1 md:justify-start"}`}> 
                  {isRight ? (
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl px-10 py-6 max-w-md w-full text-left border border-gray-100 dark:border-gray-700 md:ml-8">
                      <div className="mb-2">
                        <span className="font-semibold text-lg text-gray-900 dark:text-white block">{job.company}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 block mt-1">{job.date}</span>
                      </div>
                      <div className="font-medium text-gray-700 dark:text-gray-200 mb-1">{job.title}</div>
                      <ul className="list-disc ml-5 text-sm text-gray-600 dark:text-gray-300">
                        {job.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
                {/* Timeline dot */}
                {isRight ? (
                  <div className="absolute left-1/2 top-0 md:top-1/2 w-5 h-5 bg-white border-4 border-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 md:translate-y-0 z-10 shadow" />
                ) : (
                  <div className="absolute left-1/2 md:top-1/2 top-0 w-5 h-5 bg-white border-4 border-cyan-400 rounded-full -translate-x-1/2 translate-y-2 md:-translate-y-1/2 z-10 shadow" />
                )}
                <div className={`w-full md:w-1/2 flex justify-center ${!isRight ? "md:order-1 md:justify-start" : "md:order-2 md:justify-end"}`}> 
                  {!isRight ? (
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl px-10 py-6 max-w-md w-full text-left border border-gray-100 dark:border-gray-700 md:mr-8">
                      <div className="mb-2">
                        <span className="font-semibold text-lg text-gray-900 dark:text-white block">{job.company}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 block mt-1">{job.date}</span>
                      </div>
                      <div className="font-medium text-gray-700 dark:text-gray-200 mb-1">{job.title}</div>
                      <ul className="list-disc ml-5 text-sm text-gray-600 dark:text-gray-300">
                        {job.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
