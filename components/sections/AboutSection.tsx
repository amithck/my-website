"use client";

import { portfolioData } from "@/data/portfolio";

export default function AboutSection() {
  const { bio } = portfolioData.personalInfo;
  const { education } = portfolioData;

  return (
    <section
      id="about"
      className="section bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800"
    >
      <div className="container-narrow">
        <h2 className="section-title">About Me</h2>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {bio}
            </p>

            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Currently a <strong>graduate student in Artificial Intelligence </strong> 
              at the University of Maryland, College Park, I focus on research in machine 
              learning and computer vision. My interests span distributed systems, system design, 
              and AI-driven applications.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              I completed my Bachelor of Engineering in Computer Science at
              Bangalore Institute of Technology (CGPA: 8.25/10) and have
              published research on crowd monitoring using deep learning.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Beyond code, I&apos;m interested in exploring how engineering can
              address societal challenges. Feel free to reach out.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-[#e85d3f] mb-5">Education / 02 records</h3>
            <div className="border-t border-[#cbd0c7] dark:border-slate-700">
                {education.map((edu) => (
                  <div key={`${edu.school}-${edu.degree}`} className="py-6 border-b border-[#cbd0c7] dark:border-slate-700">
                    <p className="text-xl font-bold tracking-tight text-[#142326] dark:text-white">
                      {edu.degree} in {edu.field}
                    </p>
                    <p className="text-sm text-[#e85d3f] mt-2">
                      {edu.school}
                    </p>
                    <p className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-3">
                      {edu.startDate} — {edu.endDate}
                    </p>
                    {edu.gpa && (
                      <p className="font-mono text-xs text-slate-600 dark:text-slate-300 mt-3">
                        <span className="font-medium">{edu.degree.includes('Master') ? 'GPA' : 'CGPA'}:</span>{' '}
                        {edu.gpa}
                      </p>
                    )}
                  </div>
                ))}
            </div>

            <div className="mt-12">
              <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-[#e85d3f] mb-5">Working interests</h3>
              <ul className="border-t border-[#cbd0c7] dark:border-slate-700">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#e85d3f]">01</span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Backend systems & microservices architecture
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#e85d3f]">02</span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Distributed systems at scale
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#e85d3f]">03</span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Computer vision & machine learning
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#e85d3f]">04</span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Cloud infrastructure & DevOps
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
