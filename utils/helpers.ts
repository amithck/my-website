/**
 * Format date string
 */
export function formatDate(date: string | Date, format: 'short' | 'long' = 'long'): string {
  const d = typeof date === 'string' ? new Date(date) : date;

  if (format === 'short') {
    return d.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  }

  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Calculate reading time in minutes
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Slugify string for URLs
 */
export function slugify(str?: string | null): string {
  if (!str) {
    return '';
  }

  return str
    .toString()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Generate excerpt from content
 */
export function generateExcerpt(content: string, length: number = 150): string {
  // Remove markdown formatting
  const plain = content
    .replace(/[#*_`\[\]()]/g, '')
    .replace(/\n\n+/g, ' ')
    .trim();

  if (plain.length <= length) {
    return plain;
  }

  return plain.substring(0, length).trim() + '...';
}

/**
 * Check if color scheme prefers dark mode
 */
export function prefersDarkMode(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Parse frontmatter from markdown
 */
export function parseFrontmatter(content: string): { data: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content };
  }

  const frontmatterStr = match[1];
  const contentStr = match[2];

  const data: Record<string, any> = {};

  // Simple YAML-like parsing
  frontmatterStr.split(/\r?\n/).forEach((line) => {
    const [key, value] = line.split(':').map((s) => s.trim());
    if (key && value) {
      // Handle arrays
      if (value.startsWith('[')) {
        data[key] = value
          .slice(1, -1)
          .split(',')
          .map((s) => s.trim());
      } else if (value === 'true') {
        data[key] = true;
      } else if (value === 'false') {
        data[key] = false;
      } else if (!isNaN(Number(value))) {
        data[key] = Number(value);
      } else {
        data[key] = value.replace(/^["']|["']$/g, '');
      }
    }
  });

  return { data, content: contentStr };
}

/**
 * Group array by key
 */
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result, item) => {
    const group = String(item[key]);
    if (!result[group]) {
      result[group] = [];
    }
    result[group].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

/**
 * Sort items by date (newest first)
 */
export function sortByDate<T extends { date?: string | Date }>(items: T[], descending = true): T[] {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.date || 0).getTime();
    const dateB = new Date(b.date || 0).getTime();
    return descending ? dateB - dateA : dateA - dateB;
  });
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}

/**
 * Convert seconds to time string
 */
export function secondsToTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const parts = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (secs > 0 || parts.length === 0) parts.push(`${secs}s`);

  return parts.join(' ');
}

/**
 * Validate email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Get domain from URL
 */
export function getDomain(url: string): string {
  try {
    const domain = new URL(url).hostname;
    return domain.replace(/^www\./, '');
  } catch {
    return url;
  }
}
