"use client";

import { portfolioData } from "@/data/portfolio";

export default function PublicationsSection() {
  const { publications } = portfolioData;

  if (!publications || publications.length === 0) {
    return null;
  }

  return (
    <section
      id="publications"
      className="section bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container-narrow">
        <h2 className="section-title">Publications</h2>

        <div className="border-t border-[#cbd0c7] dark:border-slate-700">
          {publications.map((pub, idx) => (
            <article key={pub.id} className="grid md:grid-cols-[7rem_1fr_auto] gap-5 md:gap-10 py-8 border-b border-[#cbd0c7] dark:border-slate-700 group">
              <div className="font-mono text-xs text-[#e85d3f]">0{idx + 1}<br /><span className="text-slate-500">{pub.year}</span></div>
              <div>
              {/* Title */}
              {pub.url ? (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group mb-3"
                >
                  <h3 className="text-2xl font-bold tracking-tight text-[#142326] dark:text-white group-hover:text-[#e85d3f] transition-colors">
                    {pub.title}
                  </h3>
                </a>
              ) : (
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  {pub.title}
                </h3>
              )}

              {/* Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-[#e85d3f] mb-3">
                <p>{pub.venue}</p>
                <span className="hidden sm:inline text-slate-400 dark:text-slate-600">
                  •
                </span>
                <p>{pub.year}</p>
                {pub.doi && (
                  <>
                    <span className="hidden sm:inline text-slate-400 dark:text-slate-600">
                      •
                    </span>
                    <p className="font-mono text-xs">{pub.doi}</p>
                  </>
                )}
              </div>

              {/* Authors */}
              {pub.authors && pub.authors.length > 0 && (
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  By {pub.authors.join(", ")}
                </p>
              )}

              {/* Abstract */}
              {pub.abstract && (
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 italic">
                  {pub.abstract}
                </p>
              )}

              <div className="md:col-start-2">
              {pub.url && (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#e85d3f] hover:text-[#142326] transition-colors"
                >
                  Read Publication
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
