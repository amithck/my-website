import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { name, bio, socials } = portfolioData.personalInfo;

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 mt-auto">
      <div className="container-wide py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
              About
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {bio}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
              Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {socials.github && (
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
              )}
              {socials.linkedin && (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              )}
              {socials.email && (
                <a
                  href={`mailto:${socials.email}`}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Email
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
          {name}
        </div>
      </div>
    </footer>
  );
}
