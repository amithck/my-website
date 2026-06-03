"use client";

import { portfolioData } from "@/data/portfolio";

export default function AboutSection() {
  const { bio } = portfolioData.personalInfo;
  const { education } = portfolioData;
  const edu = education[0];

  return (
    <section
      id="about"
      className="section bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800"
    >
      <div className="container-narrow">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {bio}
            </p>

            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Currently at <strong>F5 Networks</strong>, I work on network
              defense and cloud infrastructure, designing microservices that
              handle millions of requests daily. My interests span distributed
              systems, system design, and computer vision applications.
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

          {/* Education & Stats */}
          <div className="space-y-8">
            {/* Education Card */}
            <div className="card card-p">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                Education
              </h3>
              {edu && (
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    {edu.degree} in {edu.field}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {edu.school}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                    {edu.startDate} — {edu.endDate}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                      <span className="font-medium">CGPA:</span> {edu.gpa}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Highlights */}
            <div className="card card-p">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                Expertise
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg leading-none mt-0.5">
                    →
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Backend systems & microservices architecture
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg leading-none mt-0.5">
                    →
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Distributed systems at scale
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg leading-none mt-0.5">
                    →
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Computer vision & machine learning
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg leading-none mt-0.5">
                    →
                  </span>
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
