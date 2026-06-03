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

        <div className="space-y-8">
          {activities.map((activity, idx) => (
            <div key={idx} className="card card-hover card-p">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {activity.role}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {activity.organization}
                  </p>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
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
                    <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
