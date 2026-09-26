"use client";

import { portfolioData } from "@/data/portfolio";

export default function ActivitiesSection() {
  const { activities } = portfolioData;

  if (!activities || activities.length === 0) {
    return null;
  }

  return (
    <section id="activities" className="section bg-slate-50 dark:bg-slate-900/50">
      <div className="container-narrow">
        <h2 className="section-title">Activities</h2>

        <div className="border-t border-[#cbd0c7] dark:border-slate-700">
          {activities.map((activity, idx) => (
            <article key={idx} className="grid lg:grid-cols-[7rem_1fr] gap-6 lg:gap-12 py-8 border-b border-[#cbd0c7] dark:border-slate-700 group">
              <div className="font-mono text-xs text-[#e85d3f]">0{idx + 1}<br /><span className="text-slate-500">{activity.startDate}</span></div>
              <div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#142326] dark:text-white group-hover:text-[#e85d3f] transition-colors">
                    {activity.role}
                  </h3>
                  <p className="text-[#e85d3f] font-medium mt-1">
                    {activity.organization}
                  </p>
                </div>
                <div className="font-mono text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {activity.startDate} — {activity.endDate}
                </div>
              </div>

              {activity.location && (
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {activity.location}
                </p>
              )}

              <ul className="space-y-2">
                {activity.description.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-slate-700 dark:text-slate-300 text-sm flex items-start gap-3"
                  >
                    <span className="text-[#e85d3f] mt-1">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
