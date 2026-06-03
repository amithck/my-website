import fs from 'fs';
import path from 'path';
import { parseFrontmatter, slugify, calculateReadingTime } from '@/utils/helpers';
import { BlogPost } from '@/types';

const blogsDirectory = path.join(process.cwd(), 'content/blog');

/**
 * Get all blog posts from the file system
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(blogsDirectory);
  const posts: BlogPost[] = [];

  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    const filePath = path.join(blogsDirectory, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data, content: markdownContent } = parseFrontmatter(content);

    const normalizedTitle =
      data.title || file.replace(/\.md$/, '').replace(/[-_]+/g, ' ');

    const post: BlogPost = {
      id: file.replace('.md', ''),
      slug: data.slug || slugify(normalizedTitle),
      title: normalizedTitle,
      excerpt:
        data.excerpt ||
        markdownContent
          .replace(/[#*_`\[\]()]/g, '')
          .replace(/\n+/g, ' ')
          .trim()
          .slice(0, 160) + '...',
      content: markdownContent,
      date: data.date || new Date().toISOString(),
      updated: data.updated,
      tags: Array.isArray(data.tags) ? data.tags : [],
      author: data.author || 'Amith C Kowshik',
      featured: Boolean(data.featured),
      readingTime: calculateReadingTime(markdownContent),
    };

    posts.push(post);
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}

/**
 * Get featured blog posts
 */
export async function getFeaturedBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter((post) => post.featured).slice(0, limit);
}

/**
 * Get blog posts by tag
 */
export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter((post) => post.tags.includes(tag));
}

/**
 * Get all unique tags from blog posts
 */
export async function getAllBlogTags(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  const tags = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}
