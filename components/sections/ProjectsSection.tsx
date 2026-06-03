"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function ProjectsSection() {
  const featured = portfolioData.projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section bg-white dark:bg-slate-950">
      <div className="container-narrow">
        <div className="mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my work in backend systems,
            computer vision, and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((project) => (
            <div key={project.id} className="card card-hover card-p group">
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                {project.year && (
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {project.year}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="space-y-1 mb-4 text-sm">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-slate-600 dark:text-slate-400 flex items-start gap-2"
                    >
                      <span className="text-blue-600 dark:text-blue-400">
                        ✓
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6 py-4 border-t border-slate-200 dark:border-slate-700">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="badge badge-primary text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.links && Object.keys(project.links).length > 0 && (
                <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
                    >
                      Code
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                  {project.links.paper && (
                    <a
                      href={project.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
                    >
                      Paper
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
                    >
                      Demo
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link href="/projects" className="btn btn-outline">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
