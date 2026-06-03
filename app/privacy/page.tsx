import { Metadata } from "next";
import Link from "next/link";
import { siteMetadata } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Privacy Policy | " + siteMetadata.title,
  description: "Privacy policy and data handling practices",
  robots: {
    index: false,
  },
};

export default function PrivacyPage() {
  return (
    <main className="pt-24 pb-12">
      <div className="container-narrow max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to home
        </Link>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
          Privacy Policy
        </h1>

        <div className="prose dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              1. Introduction
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              This privacy policy explains how I collect, use, and protect your
              personal information when you visit this website or interact with
              me through various channels.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              2. Information Collection
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              When you use the contact form or reach out to me, I collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
              <li>Your name</li>
              <li>Email address</li>
              <li>Message content</li>
              <li>Subject matter</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              3. Use of Information
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              I use the information you provide solely to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
              <li>Respond to your inquiries</li>
              <li>Follow up on opportunities or collaborations</li>
              <li>Maintain communication records</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              4. Data Protection
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              Your data is treated with confidentiality and is not shared with
              third parties without your consent, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              5. Cookies
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              This website uses minimal cookies for functionality and analytics
              purposes. You can disable cookies in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              6. Third-Party Links
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              This website contains links to external sites. I&apos;m not
              responsible for the privacy practices of these external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              7. Changes to Policy
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              I may update this privacy policy from time to time. Changes will
              be posted on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              8. Contact
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              If you have questions about this privacy policy, please contact me
              at{" "}
              <a
                href="mailto:amith.kowshik@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                amith.kowshik@gmail.com
              </a>
            </p>
          </section>

          <p className="text-sm text-slate-600 dark:text-slate-400 pt-8 border-t border-slate-200 dark:border-slate-800">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </main>
  );
}
