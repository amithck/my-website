/**
 * Portfolio Data Schema
 */

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  tagline: string;
  bio: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    scholar?: string;
    email: string;
  };
}

export interface EducationEntry {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  gpa?: string;
  highlights?: string[];
}

export interface ExperienceEntry {
  company: string;
  position: string;
  startDate: string;
  endDate: string | 'Present';
  location: string;
  description: string[];
  technologies?: string[];
  highlights?: string[];
}

export interface ActivityEntry {
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  description: string[];
}

export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  highlights?: string[];
  links?: {
    github?: string;
    paper?: string;
    demo?: string;
    link?: string;
  };
  featured: boolean;
  startDate?: string;
  endDate?: string;
  year?: string;
}

export interface PublicationEntry {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  url?: string;
  paper?: string;
  abstract?: string;
  highlights?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface AwardEntry {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  url?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  updated?: string;
  tags: string[];
  author: string;
  featured: boolean;
  readingTime: number;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  publications: PublicationEntry[];
  skills: SkillCategory[];
  awards: AwardEntry[];
  activities: ActivityEntry[];
}

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  locale: string;
  keywords: string[];
}
