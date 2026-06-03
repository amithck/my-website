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

        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div key={idx} className="card card-hover card-p">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
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
                    <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="badge badge-secondary text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
