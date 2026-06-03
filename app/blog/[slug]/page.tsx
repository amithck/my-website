import { Metadata } from "next";
import Link from "next/link";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import { siteMetadata } from "@/data/portfolio";
import { marked } from "marked";
import { slugify } from "@/utils/helpers";

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${post.title} | Blog | ${siteMetadata.title}`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      url: `${siteMetadata.siteUrl}/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return (
      <main className="pt-24 pb-12">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const htmlContent = await marked(post.content);

  return (
    <main className="pt-24 pb-12">
      <div className="container-narrow max-w-3xl">
        {/* Header */}
        <Link
          href="/blog"
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
          Back to blog
        </Link>

        {/* Title & Meta */}
        <article>
          <header className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {post.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-600 dark:text-slate-400 pb-6 border-b border-slate-200 dark:border-slate-800">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{post.readingTime} min read</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose dark:prose-invert prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
                Tags:
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tags/${encodeURIComponent(slugify(tag))}`}
                    className="badge badge-secondary hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Related Posts */}
        {/* TODO: Implement related posts logic */}
      </div>
    </main>
  );
}
