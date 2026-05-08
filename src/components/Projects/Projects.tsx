import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  contributors: string;
  liveUrl?: string;
  liveLabel?: string;
  liveStatus?: string;
  codeUrl?: string;
  image?: { src: string; alt: string };
  initials?: string;
};

const projects: Project[] = [
  {
    title: 'Tee Shop',
    description:
      'A solo e-commerce build exploring Next.js 16, Stripe payments, and Neon Postgres. Real-time inventory tracking and database-backed order management. Currently in active development.',
    contributors: 'Solo project.',
    liveStatus: 'In active development — beta',
    codeUrl: 'https://github.com/Michaelmw17/tee-shop',
    initials: 'TS',
  },
  {
    title: 'JDP Electrical Services',
    description:
      'Created a ReactJS Single Page Application with a landing page, deployed through AWS Web Services. Liaised weekly with the client to develop the frontend experience. Solo developed the website from design, deployment, and domain transfer.',
    contributors: 'Solo project.',
    liveUrl: 'https://www.jdpelectrical.com.au/',
    liveLabel: 'JDP Electrical Services App (Live)',
    codeUrl: 'https://github.com/Michaelmw17/computing-machine',
    image: { src: '/images/JDP-BRANDING-04.png', alt: 'JDP Logo' },
  },
  {
    title: 'Business Advertisement Portal',
    description:
      'Advertisement portal made by 4 students as part of a full stack web development certification at the University of Sydney. The site was designed to help small-to-medium enterprises (SMEs) promote their products for free during the COVID-19 recession, when many paid channels were inaccessible.',
    contributors: 'With — Aman, Felipe, Prabh.',
    liveStatus: 'App link no longer live',
    codeUrl: 'https://github.com/prabhm512/business-advertisement-portal',
    image: {
      src: '/images/Project/Images/202a200d-dc06-4960-a219-348c189ab453_200x200.png',
      alt: 'BAP logo',
    },
  },
  {
    title: 'Basket News',
    description:
      'Basket News is a web app for NBA fans to view player statistics and news archives in one place. Built with React, it aggregates up-to-date stats and news for easy access.',
    contributors: 'With — Andre Grech, Rachelle Barredo.',
    liveUrl: 'https://agr2020xman.github.io/Project_1-Basketball-News/',
    liveLabel: 'Basket News App (Live)',
    codeUrl: 'https://github.com/AGr2020Xman/Project_1-Basketball-News',
    image: {
      src: '/images/Project/Images/basketball-removebg-preview.png',
      alt: 'Basketball avatar',
    },
  },
  {
    title: 'Eco Getaway',
    description:
      'Eco Getaway is an app that advertises low environmental impact holiday accommodation. Users can sign in, register, and view a gallery of eco-friendly getaways. Built as a solo project to promote sustainable travel.',
    contributors: 'Solo project.',
    liveStatus: 'App link no longer live',
    codeUrl: 'https://github.com/Michaelmw17/environmental-build',
    image: { src: '/images/Project/Images/EcoGetawayLogo.jpg', alt: 'Eco Logo' },
  },
];

export default function Projects() {
  return (
    <section
      className="anchor-section section-shell bg-[var(--ink)] px-6 lg:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <div id="projects" className="anchor-target mb-12">
          <div className="label-mono mb-3">{"// projects"}</div>
          <h2 className="serif-display text-3xl md:text-5xl">Projects</h2>
          <div className="h-px w-full bg-[var(--border)] mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-16 mt-20">
          {projects.map((p) => (
            <article
              key={p.title}
              className="relative bg-[var(--surface)] border border-[var(--border)] rounded-lg px-7 pt-12 pb-6 flex flex-col h-full hover:border-[var(--accent-line)] transition-colors"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 md:left-auto md:right-7 md:translate-x-0">
                {p.image ? (
                  <Image
                    className="object-contain w-20 h-20 rounded-full bg-[var(--accent)] p-2"
                    alt={p.image.alt}
                    src={p.image.src}
                    width={200}
                    height={200}
                  />
                ) : (
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[var(--accent)] font-mono font-medium text-[var(--ink)] text-2xl">
                    {p.initials ?? p.title.slice(0, 2).toUpperCase()}
                  </div>
                )}
              </div>

              <h3 className="serif-display text-2xl md:text-3xl text-[var(--cream)] mb-3 mt-2 md:mt-0 text-center md:text-left">
                {p.title}
              </h3>
              <p className="text-[var(--cream)] text-sm md:text-base leading-relaxed mb-5 flex-1">
                {p.description}
              </p>

              <div className="flex flex-col gap-1.5 pt-4 border-t border-[var(--border)] font-mono text-[12px]">
                <span className="text-[var(--cream)]">{p.contributors}</span>
                {p.liveUrl && p.liveLabel && (
                  <a
                    href={p.liveUrl}
                    className="text-[var(--accent)] hover:underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    → {p.liveLabel}
                  </a>
                )}
                {p.liveStatus && (
                  <span className="text-[var(--cream)]">{p.liveStatus}</span>
                )}
                {p.codeUrl && (
                  <a
                    href={p.codeUrl}
                    className="text-[var(--accent)] hover:underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    → View Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
