import { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts, getAllBlogTags } from "@/lib/blog";
import { siteMetadata } from "@/data/portfolio";
import { slugify } from "@/utils/helpers";

export async function generateStaticParams() {
  const tags = await getAllBlogTags();
  return tags.map((tag) => ({ tag: slugify(tag) }));
}

export async function generateMetadata({
  params,
}: {
  params: { tag: string };
}): Promise<Metadata> {
  const currentTag = params.tag.replace(/-/g, " ");
  return {
    title: `${currentTag} | Blog Tags | ${siteMetadata.title}`,
    description: `Posts tagged with ${currentTag}`,
    openGraph: {
      type: "website",
      url: `${siteMetadata.siteUrl}/blog/tags/${params.tag}`,
      title: `${currentTag} | Blog Tags | ${siteMetadata.title}`,
      description: `Posts tagged with ${currentTag}`,
    },
  };
}

export default async function BlogTagPage({
  params,
}: {
  params: { tag: string };
}) {
  const allPosts = await getAllBlogPosts();
  const tag = params.tag;
  const posts = allPosts.filter((post) =>
    post.tags.some((postTag) => slugify(postTag) === tag),
  );

  if (posts.length === 0) {
    return (
      <main className="pt-24 pb-12">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            No posts found
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            There are no blog posts tagged with &quot;{tag.replace(/-/g, " ")}
            &quot;.
          </p>
          <Link href="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="blog-page pt-24 pb-12">
      <div className="container-narrow">
        <div className="blog-index-header mb-12">
          <Link
            href="/blog"
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
            Back to blog
          </Link>

          <div className="blog-signal-line"><span /> FILTER / {String(posts.length).padStart(2, "0")} MATCHES</div>
          <h1 className="blog-display text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Posts tagged with &quot;{tag.replace(/-/g, " ")}&quot;
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Filtered articles related to {tag.replace(/-/g, " ")}.
          </p>
        </div>

        <div className="blog-index-list border-t border-[#cbd0c7] dark:border-slate-700">
          {posts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="blog-index-row py-8 border-b border-[#cbd0c7] dark:border-slate-700">
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
                <h2 className="blog-row-title text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 group-hover:text-[#e85d3f] transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
