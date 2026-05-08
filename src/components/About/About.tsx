import Image from 'next/image';

export default function About() {
  return (
    <section
      className="anchor-section section-shell bg-[var(--ink)] px-6 lg:px-12"
    >
      <div className="max-w-3xl mx-auto">
        <div id="about" className="anchor-target mb-12">
          <div className="label-mono mb-3">{"// about"}</div>
          <h2 className="serif-display text-3xl md:text-5xl">About</h2>
          <div className="h-px w-full bg-[var(--border)] mt-6" />
        </div>

        <div className="flex flex-col items-center gap-10 md:gap-12">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full border border-[var(--accent)] opacity-40" />
            <Image
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
              src="/images/cropped_image.png"
              alt="Michael Watt"
              width={192}
              height={192}
              priority
            />
          </div>

          <div className="space-y-5 text-center text-[var(--cream)] text-base md:text-[17px] leading-relaxed max-w-2xl">
            <p>
              I am a frontend developer at Greenstone Financial Services with an
              extensive background in JavaScript, CSS3, C#, React.js, TypeScript,
              Vue.js, Node.js, jQuery, Handlebars.js, Next.js, SASS, Bootstrap,
              HTML5, Tailwind, API&#39;s, Nest.js, MySQL, AWS, MongoDB, Go,
              Heroku, Postman, Playwright + Jest Testing, Figma, Webpack, VS Code,
              CMS, Jira, and Agile development. I specialise in translating UI/UX
              wireframes into responsive, mobile-first designs and building
              scalable, maintainable solutions.
            </p>
            <p>
              At Greenstone, I collaborate with cross-functional teams to deliver
              new features and improvements across multiple insurance brands. My
              journey includes a Full Stack Web Development course at the
              University of Sydney, developing a SPA app for a local business (JDP
              Electrical Services), a remote internship with Entain, and a Junior
              Full Stack Developer role at Forexco. I am passionate about
              problem-solving, proactive in implementing system improvements, and
              always eager to learn and grow. Currently, I am open to new
              opportunities where I can bring my technical expertise, creativity,
              and positive attitude to a forward-thinking team.
            </p>
            <p>
              Outside of work, I enjoy surfing, playing golf, watching Movies & UFC, and
              playing games with friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
