import Image from 'next/image';

export default function Projects() {
  return (
    <>
      <div className="project-container m-2 scroll-mt-24" id='projects'>
        <h1 className="m-2 mt-10  font-semibold dark:text-white md:mt-16 text-3xl">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-16 mt-10">
          {/* JDP Electrical Services */}
          <div className="max-w-md w-full px-8 py-4 mx-auto bg-white rounded-lg shadow-lg flex flex-col h-full min-h-[180px] border-t border-gray-200">
            <div className="flex flex-col flex-1">
              <div className="flex flex-col flex-1 justify-center">
                <div className="flex justify-center -mt-16 md:justify-end">
                  <div className="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400 bg-white md:mx-auto md:justify-center flex items-center">
                    <Image
                      className="object-cover w-20 h-20 border-2 rounded-full border-[#05fdfd]"
                      alt="JDP Logo"
                      src="/images/apple-touch-icon.png"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-black md:mt-0 md:text-3xl text-center">
                  JDP Electrical Services
                </h2>
                <p className="mt-2 text-black flex-1 flex items-center justify-center">
                  Created a ReactJS Single Page Application with a landing page, deployed through AWS Web Services. Liaised weekly with the client to develop the frontend experience. Solo developed the website from design, deployment, and domain transfer.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start mt-4 pt-3">
              <small>Solo project.</small>
              <a
                href="https://jdp-electrical-services.com.au/"
                className="text-base font-medium text-blue-700 hover:text-[#38bdf8] hover:underline transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                JDP Electrical Services App (Live)
              </a>
              <div className="flex items-center gap-2 mt-1">
                
                <a
                  href="https://github.com/Michaelmw17/computing-machine"
                  className="text-base font-medium text-blue-700 hover:text-[#38bdf8] hover:underline transition-colors"
                  target="_blank" rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-1x" title="github icon"></i> View Code
                </a>
              </div>
            </div>
          </div>
          {/* Business Advertisement Portal */}
          <div className="max-w-md w-full px-8 py-4 mx-auto bg-white rounded-lg shadow-lg flex flex-col h-full min-h-[180px] border-t border-gray-200">
            <div className="flex flex-col flex-1">
              <div className="flex flex-col flex-1 justify-center">
                <div className="flex justify-center -mt-16 md:justify-end">
                  <div className="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400 bg-white md:mx-auto md:justify-center flex items-center">
                    <Image
                      className="object-cover w-20 h-20 border-2 rounded-full border-[#05fdfd]"
                      alt="BAP logo"
                      src="/images/Project/Images/202a200d-dc06-4960-a219-348c189ab453_200x200.png"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-black md:mt-0 md:text-3xl text-center">
                  Business Advertisement Portal
                </h2>
                <p className="mt-2 text-black flex-1 flex items-center justify-center">
                  Advertisement portal made by 4 students as part of a full stack web development certification at the University of Sydney. The site was designed to help small-to-medium enterprises (SMEs) promote their products for free during the COVID-19 recession, when many paid channels were inaccessible.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start mt-4 pt-3">
              <small>With - Aman, Felipe, Prabh.</small>
              <span className="text-gray-400 text-base">App link no longer live</span>
              <div className="flex items-center gap-2 mt-1">
                
                <a
                  href="https://github.com/prabhm512/business-advertisement-portal"
                  className="text-base font-medium text-blue-700 hover:text-[#38bdf8] hover:underline transition-colors"
                  target="_blank" rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-1x" title="github icon"></i> View Code
                </a>
              </div>
            </div>
          </div>
          {/* Basket News */}
          <div className="max-w-md w-full px-8 py-4 mx-auto bg-white rounded-lg shadow-lg flex flex-col h-full min-h-[180px] border-t border-gray-200">
            <div className="flex flex-col flex-1">
              <div className="flex flex-col flex-1 justify-center">
                <div className="flex justify-center -mt-16 md:justify-end">
                  <div className="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400 bg-white md:mx-auto md:justify-center flex items-center">
                    <Image
                      className="object-cover w-20 h-20 border-2 rounded-full border-[#05fdfd]"
                      alt="Basketball avatar"
                      src="/images/Project/Images/basketball-removebg-preview.png"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-black md:mt-0 md:text-3xl text-center">
                  Basket News
                </h2>
                <p className="mt-2 text-black flex-1 flex items-center justify-center">
                  Basket News is a web app for NBA fans to view player statistics and news archives in one place. Built with React, it aggregates up-to-date stats and news for easy access.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start mt-4 pt-3">
              <small>With - Andre Grech, Rachelle Barredo.</small>
              <a
                href="https://agr2020xman.github.io/Project_1-Basketball-News/"
                className="text-base font-medium text-blue-700 hover:text-[#38bdf8] hover:underline transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                Basket News App (Live)
              </a>
              <div className="flex items-center gap-2 mt-1">
                
                <a
                  href="https://github.com/AGr2020Xman/Project_1-Basketball-News"
                  className="text-base font-medium text-blue-700 hover:text-[#38bdf8] hover:underline transition-colors"
                  target="_blank" rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-1x" title="github icon"></i> View Code
                </a>
              </div>
            </div>
          </div>
          {/* Eco Getaway */}
          <div className="max-w-md w-full px-8 py-4 mx-auto bg-white rounded-lg shadow-lg flex flex-col h-full min-h-[180px] border-t border-gray-200">
            <div className="flex flex-col flex-1">
              <div className="flex flex-col flex-1 justify-center">
                <div className="flex justify-center -mt-16 md:justify-end">
                  <div className="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400 bg-white md:mx-auto md:justify-center flex items-center">
                    <Image
                      className="object-cover w-20 h-20 border-2 rounded-full border-[#05fdfd]"
                      alt="Eco Logo"
                      src="/images/Project/Images/EcoGetawayLogo.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-black md:mt-0 md:text-3xl text-center">
                  Eco Getaway
                </h2>
                <p className="mt-2 text-black flex-1 flex items-center justify-center">
                  Eco Getaway is an app that advertises low environmental impact holiday accommodation. Users can sign in, register, and view a gallery of eco-friendly getaways. Built as a solo project to promote sustainable travel.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start mt-4 pt-3">
              <small>Solo project.</small>
              <span className="text-gray-400 text-base">App link no longer live</span>
              <div className="flex items-center gap-2 mt-1">
                
              <a
                href="https://github.com/Michaelmw17/environmental-build"
                className="text-base font-medium text-blue-700 hover:text-[#38bdf8] hover:underline transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-1x" title="github icon"></i> View Code
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
