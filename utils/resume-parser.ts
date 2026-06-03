/**
 * LaTeX Resume Parser
 * Extracts structured data from LaTeX resume files
 */

import { PortfolioData, PersonalInfo, ExperienceEntry, ProjectEntry, PublicationEntry, SkillCategory } from '@/types';

interface ParsedResume {
  personalInfo: Partial<PersonalInfo>;
  education: any[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  publications: PublicationEntry[];
  skills: SkillCategory[];
}

/**
 * Parse name and contact info from the HEADING section
 */
function parseHeading(latexContent: string): Partial<PersonalInfo> {
  const info: Partial<PersonalInfo> = {};

  // Extract name
  const nameMatch = latexContent.match(/\\Huge[^}]*\scshape\s([^\\]+)/);
  if (nameMatch) {
    info.name = nameMatch[1].trim();
  }

  // Extract location
  const locationMatch = latexContent.match(/\\begin{center}[\s\S]*?\n\s*(.+?)\s*\\\\[\s\S]*?$/m);
  if (locationMatch) {
    const lines = locationMatch[1].split('\\\\');
    if (lines.length > 0) {
      info.location = lines[0].trim();
    }
  }

  // Extract email
  const emailMatch = latexContent.match(/\\href{mailto:([^}]+)}/);
  if (emailMatch) {
    info.email = emailMatch[1].trim();
  }

  // Extract phone
  const phoneMatch = latexContent.match(/\\faPhone\\\s+([0-9\s]+)\s*~?/);
  if (phoneMatch) {
    info.phone = phoneMatch[1].trim();
  }

  // Extract social links
  info.socials = {
    email: info.email || '',
  };

  const githubMatch = latexContent.match(/github\.com\/([^\}\"]+)/);
  if (githubMatch) {
    info.socials.github = `https://github.com/${githubMatch[1]}`;
  }

  const linkedinMatch = latexContent.match(/linkedin\.com\/in\/([^\}\"]+)/);
  if (linkedinMatch) {
    info.socials.linkedin = `https://linkedin.com/in/${linkedinMatch[1]}`;
  }

  return info;
}

/**
 * Parse experience sections
 */
function parseExperience(latexContent: string): ExperienceEntry[] {
  const experiences: ExperienceEntry[] = [];

  // Match all resumeSubheading entries in EXPERIENCE section
  const expSectionMatch = latexContent.match(/%-----------EXPERIENCE-----------[\s\S]*?\\resumeSubHeadingListEnd/);
  if (!expSectionMatch) return experiences;

  const expSection = expSectionMatch[0];

  // Find all \resumeSubheading commands
  const headingPattern = /\\resumeSubheading\s*\{([^}]+)\}\s*\{([^}]+)\}\s*\{([^}]+)\}\s*\{([^}]+)\}([\s\S]*?)(?=\\resume|\\vspace|\[end\]|$)/g;

  let match;
  while ((match = headingPattern.exec(expSection)) !== null) {
    const company = match[1].trim();
    const dateRange = match[2].trim();
    const position = match[3].trim();
    const location = match[4].trim();
    const itemsSection = match[5];

    // Parse date range
    const dates = dateRange.split(' -- ');
    const startDate = dates[0]?.trim() || '';
    const endDate = dates[1]?.trim() || 'Present';

    // Extract bullet points
    const description: string[] = [];
    const itemPattern = /\\resumeItem\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/g;
    let itemMatch;
    while ((itemMatch = itemPattern.exec(itemsSection)) !== null) {
      let item = itemMatch[1]
        .replace(/\{\\textit\{([^}]+)\}\}/g, '$1')
        .replace(/\\textsuperscript\{([^}]+)\}/g, (_, content) => content)
        .replace(/\\cite\{[^}]+\}/g, '')
        .replace(/~(?=\S)/g, ' ')
        .trim();

      if (item) {
        description.push(item);
      }
    }

    if (company && position) {
      experiences.push({
        company,
        position,
        location,
        startDate,
        endDate,
        description,
      });
    }
  }

  return experiences;
}

/**
 * Parse projects section
 */
function parseProjects(latexContent: string): ProjectEntry[] {
  const projects: ProjectEntry[] = [];

  const projSectionMatch = latexContent.match(/%-----------PROJECTS-----------[\s\S]*?\\resumeSubHeadingListEnd/);
  if (!projSectionMatch) return projects;

  const projSection = projSectionMatch[0];

  // Match \resumeProjectHeading entries
  const headingPattern = /\\resumeProjectHeading\s*\{([^}]+)\}\s*\{([^}]+)\}([\s\S]*?)(?=\\resume|\\vspace|$)/g;

  let match;
  let id = 1;
  while ((match = headingPattern.exec(projSection)) !== null) {
    const titleTechSection = match[1];
    const dateInfo = match[2].trim();
    const itemsSection = match[3];

    // Parse title and technologies
    const titleTechMatch = titleTechSection.match(/\\textbf\{([^}]+)\}\s*\$\|\$\s*\\emph\{([^}]+)\}/);
    if (!titleTechMatch) continue;

    const title = titleTechMatch[1].trim();
    const techRaw = titleTechMatch[2].trim();
    const technologies = techRaw.split(',').map((t) => t.trim());

    // Extract description
    const highlights: string[] = [];
    const itemPattern = /\\resumeItem\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/g;
    let itemMatch;
    while ((itemMatch = itemPattern.exec(itemsSection)) !== null) {
      let item = itemMatch[1]
        .replace(/\{\\textit\{([^}]+)\}\}/g, '$1')
        .replace(/\\textsuperscript\{([^}]+)\}/g, (_, content) => content)
        .replace(/\\cite\{[^}]+\}/g, '')
        .replace(/~(?=\S)/g, ' ')
        .trim();

      if (item) {
        highlights.push(item);
      }
    }

    // Parse date
    const dateMatch = dateInfo.match(/(\w+\.?\s+\d{4})\s*--\s*(\w+\.?\s+\d{4})?/);
    const year = dateMatch ? dateMatch[1] : dateInfo;

    projects.push({
      id: `project-${id++}`,
      title,
      description: highlights[0] || '',
      technologies,
      highlights,
      featured: true,
      year,
    });
  }

  return projects;
}

/**
 * Parse skills section
 */
function parseSkills(latexContent: string): SkillCategory[] {
  const skills: SkillCategory[] = [];

  const skillSectionMatch = latexContent.match(/%-----------TECHNICAL SKILLS-----------[\s\S]*?\\end\{itemize\}/);
  if (!skillSectionMatch) return skills;

  const skillSection = skillSectionMatch[0];

  // Look for \textbf{Category}: pattern
  const categoryPattern = /\\textbf\{([^}]+)\}\s*:\s*([^\\]+)(?=\\\\|\\textbf|$)/g;

  let match;
  while ((match = categoryPattern.exec(skillSection)) !== null) {
    const category = match[1].trim();
    const skillsRaw = match[2].trim();

    // Parse individual skills (comma-separated)
    const skillList = skillsRaw
      .split(',')
      .map((skill) => {
        return skill
          .replace(/\{\\textit\{([^}]+)\}\}/g, '$1')
          .replace(/~(?=\S)/g, ' ')
          .trim();
      })
      .filter((skill) => skill.length > 0);

    if (category && skillList.length > 0) {
      skills.push({
        name: category,
        skills: skillList,
      });
    }
  }

  return skills;
}

/**
 * Parse publications section
 */
function parsePublications(latexContent: string): PublicationEntry[] {
  const publications: PublicationEntry[] = [];

  const pubSectionMatch = latexContent.match(/%-----------AWARDS & PUBLICATIONS-----------[\s\S]*?\\end\{document\}/);
  if (!pubSectionMatch) return publications;

  const pubSection = pubSectionMatch[0];

  // Match resumeSubheading entries for awards/publications
  const headingPattern = /\\resumeSubheading\s*\{([^}]+)\}\s*\{([^}]+)\}\s*\{([^}]+)\}\s*\{([^}]+)\}/g;

  let match;
  let id = 1;
  while ((match = headingPattern.exec(pubSection)) !== null) {
    const title = match[1].trim();
    const date = match[2].trim();
    const venue = match[3].trim();
    const details = match[4].trim();

    // Check if it looks like a publication (has DOI or paper link)
    if (venue.includes('IEEE') || details.includes('DOI') || details.includes('10.')) {
      const doiMatch = details.match(/DOI:\s*([^\s]+)/);
      const doi = doiMatch ? doiMatch[1] : undefined;

      publications.push({
        id: `pub-${id++}`,
        title,
        authors: ['Amith C Kowshik'],
        venue,
        year: parseInt(date),
        doi,
        url: doi ? `https://doi.org/${doi}` : undefined,
      });
    }
  }

  return publications;
}

/**
 * Main parser function
 */
export function parseLatexResume(latexContent: string): ParsedResume {
  return {
    personalInfo: parseHeading(latexContent),
    education: [],
    experience: parseExperience(latexContent),
    projects: parseProjects(latexContent),
    publications: parsePublications(latexContent),
    skills: parseSkills(latexContent),
  };
}

/**
 * Merge parsed resume data with existing portfolio data
 * Parsed data takes precedence
 */
export function mergeResumeData(existing: PortfolioData, parsed: ParsedResume): PortfolioData {
  return {
    personalInfo: {
      ...existing.personalInfo,
      ...parsed.personalInfo,
    },
    education: parsed.education.length > 0 ? parsed.education : existing.education,
    experience: parsed.experience.length > 0 ? parsed.experience : existing.experience,
    projects: parsed.projects.length > 0 ? parsed.projects : existing.projects,
    publications: parsed.publications.length > 0 ? parsed.publications : existing.publications,
    skills: parsed.skills.length > 0 ? parsed.skills : existing.skills,
    awards: existing.awards,
  };
}
