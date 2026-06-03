"use client";

import { portfolioData } from "@/data/portfolio";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section bg-white dark:bg-slate-950">
      <div className="container-narrow">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <div key={idx} className="card card-p">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="badge badge-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
