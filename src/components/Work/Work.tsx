const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Greenstone Financial Services',
    period: 'Nov 2022 - Current',
    highlights: 'Collaboration with marketing and product teams to deliver new features across 14 C# MVC-based insurance brands. Applying Canva design to code and follow clean code practices to ensure maintainable, scalable code. Built reusable UI components and responsive layouts, integrated with Kontent.ai. Consistently meet sprint deadlines while contributing across multiple streams, including projects, CRO initiatives, BAU, and test automation.'
  },
  {
    role: 'Junior Full Stack Developer',
    company: 'Forexco',
    period: 'Nov 2021 - Jan 2022',
    highlights: 'Built out TypeScript and Nest.js components for new fintech features in a React application. Helped make decisions about UX and UI when there was no designer available. Worked with the product team to add new features.'
  },
  {
    role: 'Full Stack Developer Internship',
    company: 'Entain',
    period: 'July 2021 - October 2021',
    highlights: 'Made Vue.js components for several micro-frontend brands, such as Betstar, Neds, and Ladbrokes. Participated in Agile sprints, daily standups, and QA testing cycles. Created internal documents in Confluence and helped stakeholders with demos.'
  },
  {
    role: 'Web Developer',
    company: 'JDP Electrical Services',
    period: '2020 - 2021',
    highlights: 'Built and launched a single-page website on AWS, overseeing the entire development lifecycle development to deployment.'
  }
];

const Work = () => {
  return (
    <div className="py-6 bg-white px-6 scroll-mt-10" id="work">
      <div className="space-y-4 max-w-2xl mx-auto">
        <div>
          <h2 className="text-2xl md:text-4xl mt-10 mb-6 font-bold text-gray-900 text-center md:text-center">Work Experience</h2>
          <div className="h-px w-full bg-gray-200 mt-2" />
        </div>
        <div className="space-y-5">
          {experiences.map((exp) => (
            <div key={exp.company} className="relative">
              <div className="relative pl-4 border-l-2 timeline-line mt-4 mb-4 md:mt-8 md:mb-0">
                <div className="absolute -left-[6px] top-[10px] h-2.5 w-2.5 rounded-full bg-[#05fdfd]" />
                <div className="space-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h4 className="text-md font-medium text-gray-900">{exp.role}</h4>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{exp.highlights}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
