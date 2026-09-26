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

        <div className="space-y-5">
          {featured.map((project) => (
            <details key={project.id} className="group border-y border-[#cbd0c7] dark:border-slate-700">
              <summary className="list-none cursor-pointer py-7 sm:py-8">
                <div className="grid lg:grid-cols-[5rem_1fr_auto] gap-4 lg:gap-8 items-start">
                  <span className="font-mono text-xs text-[#e85d3f]">{project.year ?? "--"}</span>
                  <div>
                    <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-[#142326] dark:text-white group-hover:text-[#e85d3f] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-3 max-w-3xl">
                      {project.description}
                    </p>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-500 group-open:text-[#e85d3f]">
                    <span className="group-open:hidden">Open +</span>
                    <span className="hidden group-open:inline">Close -</span>
                  </span>
                </div>
              </summary>

              <div className="grid lg:grid-cols-[5rem_1fr] gap-4 lg:gap-8 pb-8">
                <span aria-hidden="true" />
                <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 border-t border-[#cbd0c7] dark:border-slate-700 pt-6">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-[#e85d3f] mb-3">Research note</p>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-7">
                      {project.longDescription || project.description}
                    </p>
                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="space-y-2 mt-6 text-sm">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-slate-700 dark:text-slate-300 flex items-start gap-3">
                            <span className="text-[#e85d3f] font-mono">0{idx + 1}</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-[#e85d3f] mb-3">Field notes</p>
                    <p className="font-mono text-xs text-slate-500 dark:text-slate-400 mb-5">
                      {project.startDate || "No start date"} {project.endDate ? `— ${project.endDate}` : ""}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="badge badge-secondary">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Links */}
              {project.links && Object.keys(project.links).length > 0 && (
                <div className="flex gap-3 pl-[calc(5rem+2rem)] pb-8">
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
            </details>
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
