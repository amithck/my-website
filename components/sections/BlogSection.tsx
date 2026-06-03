import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import { slugify } from "@/utils/helpers";

export default async function BlogSection() {
  const posts = await getAllBlogPosts();
  const recentPosts = posts.slice(0, 2);

  return (
    <section id="blog" className="section bg-slate-50 dark:bg-slate-900/50">
      <div className="container-narrow">
        <h2 className="section-title">Latest Blog Posts</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {recentPosts.map((post) => (
            <article
              key={post.slug}
              className="card card-hover card-p h-full flex flex-col group"
            >
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-3">
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span>{post.readingTime} min read</span>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 transition-colors">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group-hover:text-blue-600 dark:group-hover:text-blue-400 block"
                >
                  {post.title}
                </Link>
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
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
