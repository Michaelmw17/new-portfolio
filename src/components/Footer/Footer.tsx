import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-transparent text-gray-600 dark:text-gray-900 px-6 lg:px-8 py-10 border-t border-gray-200 dark:border-gray-300 mt-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 divide-y-2 md:divide-x-2 md:divide-y-0 divide-gray-200 dark:divide-gray-800">
          {/* Contact */}
          <div className="py-4 md:py-0 md:px-8 flex flex-col items-center md:items-center justify-center">
            <h5 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-900 text-center">Contact</h5>
            <div className="flex space-x-4 justify-center">
              <a href="mailto:michaelmw17@outlook.com" className="text-[#05fdfd] hover:text-cyan-400 transition-colors" aria-label="Email">
                <EnvelopeIcon className="h-7 w-7" />
              </a>
              <a href="https://linkedin.com/in/michael-watt-6a76961b3/" className="group text-[#05fdfd] hover:text-cyan-400 transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" fill="none" className="transition-colors" />
                  <path d="M6.94 17h2.12V10.5H6.94V17zM8 9.44a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46zM11.06 17h2.12v-3.13c0-.75.27-1.26.95-1.26.68 0 .97.51.97 1.26V17h2.12v-3.36c0-1.67-.89-2.44-2.08-2.44-1.01 0-1.46.56-1.71.95v-0.81h-2.12c.03.53 0 5.66 0 5.66z" fill="currentColor" className="transition-colors" />
                </svg>
              </a>
            </div>
          </div>
          {/* Location */}
          <div className="py-4 md:py-0 md:px-8 flex flex-col items-center md:items-center justify-center">
            <h5 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-900 text-center">Location</h5>
            <div className="flex items-center justify-center">
              <span className="font-normal text-base text-center">Sydney, NSW</span>
              <a href="https://www.google.com/maps/place/Sydney+NSW/data=!4m2!3m1!1s0x6b129838f39a743f:0x3017d681632a850?sa=X&ved=2ahUKEwj56oj83KzsAhWBA3IKHZFTBkAQ8gEwH3oECDAQBA" className="text-[#05fdfd] hover:text-cyan-400 transition-colors" aria-label="Google Maps" target="_blank" rel="noopener noreferrer">
                <MapPinIcon className="h-7 w-7 ml-1" />
              </a>
            </div>
          </div>
          {/* Follow */}
          <div className="py-4 md:py-0 md:px-8 flex flex-col items-center md:items-center justify-center">
            <h5 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-900 text-center">Follow</h5>
            <div className="flex space-x-4 justify-center">
              <a href="https://github.com/Michaelmw17/" className="text-[#05fdfd] hover:text-cyan-400 transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github className="h-7 w-7" />
              </a>
              <a href="https://linkedin.com/in/michael-watt-6a76961b3/" className="group text-[#05fdfd] hover:text-cyan-400 transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" fill="none" className="transition-colors" />
                  <path d="M6.94 17h2.12V10.5H6.94V17zM8 9.44a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46zM11.06 17h2.12v-3.13c0-.75.27-1.26.95-1.26.68 0 .97.51.97 1.26V17h2.12v-3.36c0-1.67-.89-2.44-2.08-2.44-1.01 0-1.46.56-1.71.95v-0.81h-2.12c.03.53 0 5.66 0 5.66z" fill="currentColor" className="transition-colors" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-center">
            <img src="/images/android-chrome-192x192-removebg-preview.svg" alt="Logo" className="h-8 mb-2" />
            <span className="text-sm text-gray-500 dark:text-gray-900 text-center">&copy; {new Date().getFullYear()} Michael Watt | All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
