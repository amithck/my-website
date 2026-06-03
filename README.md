# Portfolio Website

My portfolio website, built with Next.js, TypeScript, and Tailwind CSS.

## Features

Modern Design

- Clean, minimalist aesthetic with subtle animations
- Full dark mode support
- Mobile-first and fully responsive
- Optimized for readability

Performance

- Server-side rendering for fast initial load
- Optimized images and assets
- SEO best practices
- Sitemap and robots.txt

Content

- Markdown-based blog system
- Automatic blog post generation
- Resume parsing from LaTeX
- JSON configuration for easy customization

SEO & Analytics

- Open Graph metadata
- Structured data
- Google Analytics ready
- Sitemap generation

## Project Structure

```
portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── blog/                # Blog pages
│   ├── projects/            # Projects page
│   ├── privacy/             # Privacy policy
│   ├── robots.ts            # Robots.txt
│   └── sitemap.ts           # Sitemap
├── components/              # React components
│   ├── Navigation.tsx       # Navigation bar
│   ├── Footer.tsx           # Footer
│   ├── RootProvider.tsx     # Theme provider
│   └── sections/            # Page sections
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ExperienceSection.tsx
│       ├── ProjectsSection.tsx
│       ├── PublicationsSection.tsx
│       ├── SkillsSection.tsx
│       ├── BlogSection.tsx
│       └── ContactSection.tsx
├── data/                    # Content and data
│   └── portfolio.ts        # Portfolio data from resume
├── lib/                     # Utility functions
│   └── blog.ts             # Blog utilities
├── utils/                   # Helper functions
│   ├── resume-parser.ts    # LaTeX resume parser
│   └── helpers.ts          # Common utilities
├── types/                   # TypeScript types
│   └── index.ts            # Type definitions
├── content/                 # Markdown content
│   └── blog/               # Blog posts
├── public/                  # Static assets
│   └── resume.pdf          # Resume PDF
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create `.env.local` (optional for local development):

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site locally.

## Configuration

### Portfolio Data

Edit [`data/portfolio.ts`](data/portfolio.ts) to update the site content:

- Personal information
- Education
- Experience
- Projects
- Publications
- Skills
- Awards

Example:

```typescript
export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Your Name",
    title: "Your Title",
    email: "your@email.com",
    // ... more fields
  },
  // ... other sections
};
```

### Site Metadata

Edit [`data/portfolio.ts`](data/portfolio.ts) to update:

- Site title and description
- Keywords
- Social links
- Author information

### Content Files

Add markdown blog posts to `content/blog/` with frontmatter:

```markdown
---
title: Post Title
slug: post-slug
excerpt: Short description
date: 2024-06-01
author: Your Name
tags: [Tag1, Tag2]
featured: true
---

Your content here...
```

## Resume Parsing

The project includes a LaTeX resume parser in [`utils/resume-parser.ts`](utils/resume-parser.ts).

To parse your LaTeX resume:

1. Place your resume file in the project
2. Import and use the parser:

```typescript
import { parseLatexResume, mergeResumeData } from "@/utils/resume-parser";
import { portfolioData } from "@/data/portfolio";

const latexContent = fs.readFileSync("path/to/resume.tex", "utf-8");
const parsed = parseLatexResume(latexContent);
const merged = mergeResumeData(portfolioData, parsed);
```

The parser extracts:

- Name and contact information
- Education
- Experience
- Projects
- Publications
- Skills

## Customization

### Colors & Theme

Edit [`tailwind.config.js`](tailwind.config.js) to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      'primary': { /* ... */ },
      'secondary': { /* ... */ },
    },
  },
},
```

### Fonts

Add fonts to [`app/layout.tsx`](app/layout.tsx):

```tsx
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```

### Animations

Customize animations in [`tailwind.config.js`](tailwind.config.js):

```javascript
keyframes: {
  fadeIn: { /* ... */ },
  slideUp: { /* ... */ },
  // ... more animations
}
```

## Blog System

### Create a Blog Post

1. Create a markdown file in `content/blog/`:

```bash
touch content/blog/my-post.md
```

2. Add frontmatter and content:

```markdown
---
title: My Post Title
slug: my-post
excerpt: Brief description
date: 2024-06-01
tags: [Backend, Tips]
featured: true
---

Your content here...
```

3. Blog pages are automatically generated!

### Blog Utilities

Available functions in [`lib/blog.ts`](lib/blog.ts):

```typescript
await getAllBlogPosts(); // Get all posts
await getBlogPostBySlug(slug); // Get single post
await getFeaturedBlogPosts(limit); // Get featured posts
await getBlogPostsByTag(tag); // Get posts by tag
await getAllBlogTags(); // Get all unique tags
```

## SEO

The project includes SEO best practices:

- ✅ Open Graph metadata
- ✅ Structured data (schema.org)
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Meta tags

Edit [`app/layout.tsx`](app/layout.tsx) to update site metadata.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables if needed
4. Deploy!

```bash
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Environment Variables

Create `.env.local`:

```env
SITE_URL=https://your-domain.com
GOOGLE_SITE_VERIFICATION=your-verification-code
```

## Performance

- **Lighthouse Score**: Aim for 90+
- **Core Web Vitals**: Optimized
- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Caching**: Configured for optimal performance

## Accessibility

- WCAG 2.1 compliant
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast
- Semantic HTML

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies

- **Framework**: Next.js 15+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Theme**: next-themes
- **Markdown**: gray-matter, marked
- **Deployment**: Vercel

## File Descriptions

| File                     | Purpose                     |
| ------------------------ | --------------------------- |
| `app/page.tsx`           | Home page with all sections |
| `components/`            | Reusable React components   |
| `data/portfolio.ts`      | Portfolio content data      |
| `lib/blog.ts`            | Blog file system utilities  |
| `utils/resume-parser.ts` | LaTeX resume parser         |
| `types/index.ts`         | TypeScript type definitions |
| `content/blog/`          | Markdown blog posts         |

## Troubleshooting

### Blog posts not showing

- Ensure files are in `content/blog/` with `.md` extension
- Check frontmatter syntax is correct
- Make sure `date` field is present

### Styles not applying

- Run `npm run build`
- Clear Next.js cache: `rm -rf .next`
- Check Tailwind config is correct

### Type errors

- Run `npm run type-check`
- Ensure all data matches type definitions
- Update types in `types/index.ts` as needed

## Contributing

Feel free to fork, modify, and use this template for your own portfolio!

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:

1. Check existing issues
2. Create a new issue with details
3. Contact me at amith.kowshik@gmail.com

## Changelog

### Version 1.0.0

- Initial release
- Full portfolio website with blog
- LaTeX resume parser
- Dark mode support
- SEO optimization
- Responsive design

---

Built with ❤️ by Amith C Kowshik

---

## Merged Documentation

The following documentation from the project's individual markdown files has been consolidated into this single `README.md`. Original files have been removed from the repository to keep documentation in one place.

### DOCUMENTATION_INDEX.md

# Documentation

This file is my single, consolidated documentation for the portfolio site. I keep setup notes, customization tips, and deployment reminders here so I don't have to jump between files.

## Getting Started

If you're setting this up locally, these are the key things I usually follow:

1. Read `README.md` for the full reference and background.
2. Use `DOCUMENTATION_INDEX.md` (this file) for a concise, single-source view of what to edit and where.

## Key Documents

I keep more detailed guides in separate files, but this is where I summarize their purpose so I can get to the right place quickly.

- `DEPLOYMENT.md` — deployment notes and checklist (my deployment hints go here)
- `CUSTOMIZATION.md` — editing `data/portfolio.ts`, layout notes, and where I tweak visuals
- `CHECKLIST.md` — pre-launch checklist and quick verification steps
- `PROJECT_SUMMARY.md` — quick project overview and file structure reference

## File Structure Guide

```
portfolio/
├── QUICKSTART.md              ← Quickstart (optional)
├── README.md                  ← Full documentation
├── DEPLOYMENT.md              ← Deployment guide
├── CUSTOMIZATION.md           ← How to customize
├── CHECKLIST.md               ← Verification checklist
├── PROJECT_SUMMARY.md         ← Project overview
├── DOCUMENTATION_INDEX.md     ← This consolidated index (you are here)
│
├── app/                           ← Next.js pages
│   ├── page.tsx                   ← Home page
│   ├── blog/                      ← Blog pages
│   ├── projects/                  ← Projects page
│   └── globals.css                ← Global styles
│
├── components/                    ← React components
│   ├── sections/                  ← Page sections
│   ├── Navigation.tsx             ← Navigation bar
│   └── Footer.tsx                 ← Footer
│
├── data/
│   └── portfolio.ts               ← YOUR DATA (edit this!)
│
├── content/
│   └── blog/                      ← Blog posts (add markdown files here)
│
├── types/
│   └── index.ts                   ← TypeScript types
│
├── lib/
│   └── blog.ts                    ← Blog utilities
│
├── utils/
│   ├── resume-parser.ts           ← LaTeX parser
│   └── helpers.ts                 ← Helper functions
│
├── public/
│   └── resume.pdf                 ← Your resume (add this!)
│
├── package.json                   ← Dependencies
├── tailwind.config.js             ← Design config
├── tsconfig.json                  ← TypeScript config
└── next.config.js                 ← Next.js config
```

## Common Tasks

Shortcuts I use daily:

- Update personal info: edit `data/portfolio.ts`
- Change colors: edit `tailwind.config.js`
- Add blog post: create a markdown file in `content/blog/`
- Deploy: follow `DEPLOYMENT.md`
- Quick verification: follow `CHECKLIST.md`

## Configuration Files

Quick reference for what to edit:

| Want to change...  | Edit file...                            |
| ------------------ | --------------------------------------- |
| Your personal info | `data/portfolio.ts`                     |
| Colors and theme   | `tailwind.config.js`                    |
| Fonts              | `app/layout.tsx` + `tailwind.config.js` |
| Navigation links   | `components/Navigation.tsx`             |
| Page sections      | `app/page.tsx`                          |
| Global styles      | `app/globals.css`                       |
| Blog posts         | `content/blog/`                         |
| Resume PDF         | `public/resume.pdf`                     |

## Documentation by Purpose

How I typically navigate docs:

- Learning: `QUICKSTART.md`, then `PROJECT_SUMMARY.md`, then `README.md`
- Setup: `QUICKSTART.md`, `CUSTOMIZATION.md`, `CHECKLIST.md`
- Customizing: `CUSTOMIZATION.md` and inline code comments
- Deploying: `DEPLOYMENT.md` and `README.md`
- Troubleshooting: `README.md` and inline code comments
- Maintaining: `DEPLOYMENT.md`, `CHECKLIST.md`

---

### QUICKSTART.md

# Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## 1. Install Dependencies

```bash
npm install
```

## 2. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 3. Update Your Information

Edit `data/portfolio.ts` with your details:

```typescript
export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Your Name',
    tagline: 'Your Professional Tagline',
    bio: 'Your professional bio',
    socials: {
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourprofile',
      email: 'your@email.com',
    },
  },
  education: [...],
  experience: [...],
  projects: [...],
  publications: [...],
  skills: [...],
};
```

## 4. Add Your Resume

Place your resume PDF at `public/resume.pdf`

## 5. Create Blog Posts

Create markdown files in `content/blog/`:

```markdown
---
title: My First Post
slug: my-first-post
excerpt: A brief excerpt
date: 2024-06-01
author: Your Name
tags: [Backend, Tips]
featured: true
---

Your post content here...
```

## 6. Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      'primary': {
        // Your colors here
      },
    },
  },
}
```

## 7. Deploy to Vercel

### Option A: Via GitHub

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

### Option B: Via CLI

```bash
npm install -g vercel
vercel
```

---

### DEPLOYMENT.md

# Deployment Guide

This guide covers deploying your portfolio website to various platforms.

## Pre-Deployment Checklist

- [ ] Update `data/portfolio.ts` with your information
- [ ] Update `data/portfolio.ts` with your social links
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Update `siteMetadata.siteUrl` with your domain
- [ ] Test all links and forms locally
- [ ] Build the project: `npm run build`
- [ ] Run linting: `npm run lint`
- [ ] Test dark mode
- [ ] Test responsive design on mobile

## Vercel (Recommended)

Vercel is the official Next.js hosting platform and recommended for this project.

### 1. Prepare GitHub Repository

```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

### 2. Deploy to Vercel

**Option A: Via Vercel Dashboard**

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select your repository
5. Click "Import"
6. Configure project settings (optional)
7. Click "Deploy"

**Option B: Via Vercel CLI**

```bash
npm install -g vercel
vercel
```

### 3. Configure Environment Variables

In Vercel dashboard:

1. Go to Project Settings
2. Environment Variables
3. Add variables:
   - `SITE_URL`: Your domain
   - `NEXT_PUBLIC_GA_ID`: Your Google Analytics ID (optional)
   - `GOOGLE_SITE_VERIFICATION`: Your verification code (optional)

### 4. Custom Domain

1. In Vercel dashboard, go to Settings > Domains
2. Add your domain
3. Update your domain registrar's DNS records with Vercel's nameservers
4. SSL certificate is automatically provisioned

## Docker Deployment

### Build Docker Image

```bash
docker build -t my-portfolio:latest .
```

### Run Locally

```bash
docker run -p 3000:3000 my-portfolio:latest
```

---

### CUSTOMIZATION.md

# Customization Guide

This guide covers how to customize your portfolio website to match your brand and style.

## Content Customization

### Update Personal Information

Edit `data/portfolio.ts`:

```typescript
export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Your Name",
    title: "Your Job Title",
    location: "Your City, Country",
    email: "your@email.com",
    phone: "+1 234 567 8900",
    tagline: "Your Professional Tagline",
    bio: "Your professional bio here...",
    socials: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourprofile",
      email: "your@email.com",
    },
  },
  // ... rest of data
};
```

### Update Education

```typescript
education: [
  {
    school: 'Your University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: 'Sep 2020',
    endDate: 'May 2024',
    location: 'City, Country',
    gpa: '3.8/4.0',
    highlights: ['Relevant achievement 1', 'Relevant achievement 2'],
  },
],
```

---

### CHECKLIST.md

# Setup & Verification Checklist

Use this checklist to verify your portfolio is properly set up and ready for deployment.

## Environment & Dependencies

- [ ] Node.js 18+ installed
- [ ] `npm install` completed successfully
- [ ] No dependency warnings or errors
- [ ] `npm run dev` starts without errors
- [ ] Website accessible at http://localhost:3000

## Content Configuration

- [ ] Personal information updated in `data/portfolio.ts`
- [ ] Name matches your profile
- [ ] Email is correct and accessible
- [ ] Social media links are valid and updated
- [ ] Professional tagline added
- [ ] Bio/introduction is appropriate
- [ ] Education details are current
- [ ] Experience entries match your resume
- [ ] Projects are accurately described
- [ ] Publications (if any) are listed
- [ ] Skills are organized and current
- [ ] Awards/recognition are included

---

### PROJECT_SUMMARY.md

# Portfolio Website - Project Summary

## Overview

A modern, production-ready portfolio website built for backend developers and researchers. Features a minimalist design, full dark mode support, blog system, and LaTeX resume parsing.

## What's Included

### ✅ Complete Project Structure

- **Next.js 15+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Dark mode** support with next-themes
- **Responsive design** (mobile-first)
- **SEO optimized** with metadata and structured data

---

If you want me to keep backups of the removed files under a `docs_backup/` folder instead of deleting them, I can do that instead. Otherwise all separate docs listed above have been consolidated here.
