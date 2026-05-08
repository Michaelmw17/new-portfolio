const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Greenstone Financial Services',
    period: 'Nov 2022 - Current',
    highlights:
      'Collaboration with marketing and product teams to deliver new features across 14 C# MVC-based insurance brands. Applying Canva design to code and follow clean code practices to ensure maintainable, scalable code. Built reusable UI components and responsive layouts, integrated with Kontent.ai. Consistently meet sprint deadlines while contributing across multiple streams, including projects, CRO initiatives, BAU, and test automation.',
  },
  {
    role: 'Junior Full Stack Developer',
    company: 'Forexco',
    period: 'Nov 2021 - Jan 2022',
    highlights:
      'Built out TypeScript and Nest.js components for new fintech features in a React application. Helped make decisions about UX and UI when there was no designer available. Worked with the product team to add new features.',
  },
  {
    role: 'Full Stack Developer Internship',
    company: 'Entain',
    period: 'July 2021 - October 2021',
    highlights:
      'Made Vue.js components for several micro-frontend brands, such as Betstar, Neds, and Ladbrokes. Participated in Agile sprints, daily standups, and QA testing cycles. Created internal documents in Confluence and helped stakeholders with demos.',
  },
  {
    role: 'Web Developer',
    company: 'JDP Electrical Services',
    period: '2020 - 2021',
    highlights:
      'Built and launched a single-page website on AWS, overseeing the entire development lifecycle development to deployment.',
  },
];

const Work = () => {
  return (
    <section
      className="anchor-section section-shell bg-[var(--ink)] px-6 lg:px-12"
    >
      <div className="max-w-3xl mx-auto">
        <div id="work" className="anchor-target mb-12">
          <div className="label-mono mb-3">// experience</div>
          <h2 className="serif-display text-3xl md:text-5xl">Work Experience</h2>
          <div className="h-px w-full bg-[var(--border)] mt-6" />
        </div>

        <ol className="space-y-8 md:space-y-10">
          {experiences.map((exp) => (
            <li key={exp.company} className="relative pl-6 border-l border-[var(--border)]">
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--ink)]"
              />
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4">
                <h3 className="text-[var(--cream)] text-base md:text-lg font-medium">
                  {exp.role}
                </h3>
                <span className="font-mono text-[11px] text-[var(--cream)] uppercase tracking-wider">
                  {exp.period}
                </span>
              </div>
              <p className="font-mono text-[12px] text-[var(--accent)] mt-0.5 mb-2">
                {exp.company}
              </p>
              <p className="text-sm text-[var(--cream)] leading-relaxed">
                {exp.highlights}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Work;
