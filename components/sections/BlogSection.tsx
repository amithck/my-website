import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import { slugify } from "@/utils/helpers";

export default async function BlogSection() {
  const posts = await getAllBlogPosts();
  const recentPosts = posts.slice(0, 2);

  return (
    <section id="blog" className="section bg-white dark:bg-slate-950">
      <div className="container-narrow">
        <h2 className="section-title">Latest Blog Posts</h2>

        <div className="border-t border-[#cbd0c7] dark:border-slate-700 mb-12">
          {recentPosts.map((post) => (
            <article
              key={post.slug}
              className="grid md:grid-cols-[8rem_1fr_auto] gap-5 md:gap-10 py-7 border-b border-[#cbd0c7] dark:border-slate-700 group"
            >
              <div className="font-mono text-xs text-slate-500 dark:text-slate-400">
                <span className="text-[#e85d3f] block mb-1">NOTE</span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
              </div>

              <div>
              <h3 className="text-2xl font-bold tracking-tight text-[#142326] dark:text-white mb-2 transition-colors">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group-hover:text-[#e85d3f] block"
                >
                  {post.title}
                </Link>
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-3">
                <span className="font-mono text-xs text-slate-500">{post.readingTime} min read</span>
                <div className="flex flex-wrap md:justify-end gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tags/${encodeURIComponent(slugify(tag))}`}
                    className="badge badge-secondary text-xs hover:text-blue-600 dark:hover:text-blue-300"
                  >
                    {tag}
                  </Link>
                ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/blog" className="btn btn-outline">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
