"use client";

import { portfolioData } from "@/data/portfolio";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section bg-white dark:bg-slate-950">
      <div className="container-narrow">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {skills.map((category, idx) => (
            <div key={idx} className="border-t-2 border-[#142326] dark:border-slate-300 pt-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[#e85d3f] mb-5">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="text-sm text-slate-700 dark:text-slate-300">
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
