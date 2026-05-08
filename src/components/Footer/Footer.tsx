import Image from 'next/image';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Github } from 'lucide-react';

const linkClass =
  'text-[var(--cream)] hover:text-[var(--accent)] hover:scale-110 transition-all';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <path
      d="M6.94 17h2.12V10.5H6.94V17zM8 9.44a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46zM11.06 17h2.12v-3.13c0-.75.27-1.26.95-1.26.68 0 .97.51.97 1.26V17h2.12v-3.36c0-1.67-.89-2.44-2.08-2.44-1.01 0-1.46.56-1.71.95v-0.81h-2.12c.03.53 0 5.66 0 5.66z"
      fill="currentColor"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] px-6 lg:px-12 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div className="flex flex-col items-center">
            <h5 className="label-mono mb-4">// contact</h5>
            <div className="flex space-x-5">
              <a href="mailto:michaelmw17@outlook.com" className={linkClass} aria-label="Email">
                <EnvelopeIcon className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/michael-watt-6a76961b3/"
                className={linkClass}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h5 className="label-mono mb-4">// location</h5>
            <div className="flex items-center gap-2 text-[var(--cream)] font-mono text-sm">
              <span>Sydney, NSW</span>
              <a
                href="https://www.google.com/maps/place/Sydney+NSW/"
                className={linkClass}
                aria-label="Google Maps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h5 className="label-mono mb-4">// follow</h5>
            <div className="flex space-x-5">
              <a
                href="https://github.com/Michaelmw17/"
                className={linkClass}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/michael-watt-6a76961b3/"
                className={linkClass}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-12 pt-8 border-t border-[var(--border)] gap-3">
          <div className="inline-flex items-center justify-center bg-[var(--accent)] rounded-md p-1.5">
            <Image
              src="/images/android-chrome-192x192-removebg-preview.svg"
              alt="Logo"
              width={32}
              height={32}
              className="h-7"
            />
          </div>
          <span className="font-mono text-[12px] text-[var(--cream)]">
            <span className="text-[var(--accent)]">›</span> &copy; {new Date().getFullYear()} michael watt — all rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
