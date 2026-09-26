import { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts, getAllBlogTags } from "@/lib/blog";
import { siteMetadata } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Blog | " + siteMetadata.title,
  description:
    "Articles on backend systems, research, and software engineering",
  openGraph: {
    type: "website",
    url: `${siteMetadata.siteUrl}/blog`,
    title: "Blog",
    description:
      "Articles on backend systems, research, and software engineering",
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const tags = await getAllBlogTags();

  return (
    <main className="blog-page pt-24 pb-12">
      <div className="container-narrow">
        {/* Header */}
        <div className="blog-index-header mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors"
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

          <div className="blog-signal-line"><span /> FIELD NOTES / {String(posts.length).padStart(2, "0")} ARTICLES / {String(tags.length).padStart(2, "0")} TAGS</div>
          <h1 className="blog-display text-5xl sm:text-7xl font-bold text-slate-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Thoughts on backend systems, research, and software engineering.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="blog-index-list border-t border-[#cbd0c7] dark:border-slate-700">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="blog-index-row py-8 border-b border-[#cbd0c7] dark:border-slate-700">
                  {/* Meta */}
                  <div className="blog-index-meta flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <span className="blog-row-number">0{index + 1}</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span>{post.readingTime} min read</span>
                  </div>

                  {/* Title */}
                  <h2 className="blog-row-title text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 group-hover:text-[#e85d3f] transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge badge-secondary text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">
              No blog posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
