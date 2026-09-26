"use client";

import { portfolioData } from "@/data/portfolio";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      className="section bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container-narrow">
        <h2 className="section-title">Experience</h2>

        <div className="border-t border-[#cbd0c7] dark:border-slate-700">
          {experience.map((exp, idx) => (
            <article key={idx} className="group grid lg:grid-cols-[7rem_1fr] gap-6 lg:gap-12 py-8 border-b border-[#cbd0c7] dark:border-slate-700">
              <div className="font-mono text-xs text-[#e85d3f]">0{idx + 1}<br /><span className="text-slate-500">{exp.startDate}</span></div>
              <div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#142326] dark:text-white group-hover:text-[#e85d3f] transition-colors">
                    {exp.position}
                  </h3>
                  <p className="text-[#e85d3f] font-medium mt-1">
                    {exp.company}
                  </p>
                </div>
                <div className="font-mono text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {exp.startDate} — {exp.endDate}
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {exp.location}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-slate-700 dark:text-slate-300 text-sm flex items-start gap-3"
                  >
                    <span className="text-[#e85d3f] mt-1">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4 border-t border-[#cbd0c7] dark:border-slate-700">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="badge badge-secondary text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
