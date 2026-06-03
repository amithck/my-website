import { MetadataRoute } from 'next';
import { siteMetadata } from '@/data/portfolio';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: ['/admin', '/private'],
    },
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
  };
}
