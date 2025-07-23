import Image from "next/image";

export default function About() {
  return (
    <section className="relative -mt-24 z-20 flex flex-col items-center justify-center" id="about">
      {/* Wave SVG at the top */}
      <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full mx-auto mt-10">
        <div className="w-full overflow-hidden leading-none h-20">
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="#05fdfd"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(5,253,253,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(5,253,253,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        <div className="px-8 py-4 md:px-14 md:py-10">
          <h2 className="font-bold text-3xl md:text-4xl text-center mb-6">About</h2>
          <p className="text-gray-700 text-lg text-center mb-4">
            I am a frontend developer at Greenstone Financial Services with an extensive background in JavaScript, CSS3, C#, React.js, TypeScript, Vue.js, Node.js, jQuery, Handlebars.js, Next.js, SASS, Bootstrap, HTML5, Tailwind, API&#39;s, Nest.js, MySQL, AWS, MongoDB, Go, Heroku, Postman, Jest Testing, Figma, Webpack, VS Code, CMS, Jira, and Agile development. I specialize in translating UI/UX wireframes into responsive, mobile-first designs and building scalable, maintainable solutions.
          </p>
          <p className="text-gray-700 text-lg text-center mb-6">
            At Greenstone, I collaborate with cross-functional teams to deliver new features and improvements across multiple insurance brands. My journey includes a Full Stack Web Development course at the University of Sydney, developing a SPA app for a local business (JDP Electrical Services), a remote internship with Entain, and a Junior Full Stack Developer role at Forexco. I am passionate about problem-solving, proactive in implementing system improvements, and always eager to learn and grow. Currently, I am open to new opportunities where I can bring my technical expertise, creativity, and positive attitude to a forward-thinking team.
          </p>
          <p className="text-gray-700 text-lg text-center mb-6">
            Outside of work, I enjoy surfing, playing golf, watching UFC, and playing games with friends.
          </p>
          <div className="flex justify-center">
            <Image
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-md"
              src="/images/cropped_image.png"
              alt="Profile"
              width={192}
              height={192}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
