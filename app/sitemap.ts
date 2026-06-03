import { MetadataRoute } from 'next';
import { siteMetadata } from '@/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteMetadata.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteMetadata.siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteMetadata.siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteMetadata.siteUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Add blog posts (when implemented)
  // const blogPosts = await getAllBlogPosts();
  // routes.push(...blogPosts.map(post => ({
  //   url: `${siteMetadata.siteUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updated || post.date),
  //   changeFrequency: 'never' as const,
  //   priority: 0.6,
  // })));

  return routes;
}
