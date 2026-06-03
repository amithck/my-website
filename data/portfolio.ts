import { PortfolioData, SiteMetadata } from '@/types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Amith C Kowshik',
    title: 'Software Development Engineer II',
    location: 'Bangalore, Karnataka',
    email: 'amith.kowshik@gmail.com',
    phone: '+91 95915 09497',
    tagline: 'Backend Developer',
    bio: 'Backend engineer at F5 Networks with expertise in distributed systems, microservices, and ML-driven insights. AI Enthusiast. CGPA 8.25/10.',
    socials: {
      github: 'https://github.com/amithck',
      linkedin: 'https://linkedin.com/in/amithkowshik',
      email: 'amith.kowshik@gmail.com',
    },
  },
  education: [
    {
      school: 'Bangalore Institute of Technology',
      degree: 'Bachelor of Engineering',
      field: 'Computer Science',
      startDate: 'Dec 2020',
      endDate: 'Jun 2024',
      location: 'Bangalore, India',
      gpa: '8.25/10',
      highlights: [],
    },
  ],
  experience: [
    {
      company: 'F5 Networks',
      position: 'Software Development Engineer II',
      startDate: 'Jul 2024',
      endDate: 'Present',
      location: 'Bangalore',
      description: [
        'Engineered network defense and private cloud products using Golang microservices',
        'Delivered a managed DDoS protection platform for enterprise customers',
        'Processes millions of requests per day with >99.99% uptime',
        'Implemented monitoring and observability tools (30% faster incident detection)',
        'Automated monitoring pipelines (20% reduction in false positives)',
      ],
      technologies: ['Golang', 'Microservices', 'System Design', 'Kubernetes', 'Cloud Infrastructure'],
      highlights: ['99.99% uptime', '30% improvement in incident detection'],
    },
    {
      company: 'F5 Networks',
      position: 'Technical Intern',
      startDate: 'Feb 2024',
      endDate: 'May 2024',
      location: 'Bangalore',
      description: [
        'Created ML-driven cost forecasting proof of concept',
        'Reduced RMSE and MAE by 20-25%',
        'Achieved 20-30% improvement in prediction efficiency',
      ],
      technologies: ['Python', 'Machine Learning', 'Time Series', 'Data Analysis'],
      highlights: ['20-25% RMSE improvement', 'Enhanced financial planning accuracy'],
    },
    {
      company: 'Fidelity Investments',
      position: 'Software Development Engineer Intern',
      startDate: 'May 2023',
      endDate: 'Jul 2023',
      location: 'Bangalore',
      description: [
        'Built internal dashboard for 30+ application status monitoring',
        'Integrated quick-access links and data views for critical information',
        'Supported 5+ engineering teams with access to application information',
      ],
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
      highlights: ['30+ applications tracked', '5+ teams supported'],
    },
  ],
  activities: [
    {
      organization: 'Diminished 7th — Music Club, Bangalore Institute of Technology',
      role: 'President & Band Lead',
      startDate: 'Jun 2022',
      endDate: 'Jun 2024',
      location: 'Bangalore, India',
      description: [
        'Served as President and Band Lead of the college music club, overseeing club operations, organizing performances, and leading the band across college events and cultural fests.',
      ],
    },
  ],
  projects: [
    {
      id: 'crowd-control-monitoring',
      title: 'Crowd Control and Monitoring using Deep Learning',
      description: 'Deep learning-based crowd monitoring system using YOLOv8-Pose for human pose detection, social distancing analysis, and crowd-density estimation.',
      longDescription:
        'Designed a comprehensive crowd monitoring system using YOLOv8-Pose for real-time human detection. Integrated homography techniques to transform 2D pose to 3D coordinates. Generated color-coded density maps and violation alerts. Achieved 98.7% accuracy and won 1st Prize in National Level Project Competition.',
      technologies: ['YOLOv8-Pose', 'Computer Vision', 'Python', 'OpenCV', 'Deep Learning'],
      highlights: [
        '98.7% accuracy on crowd monitoring',
        '1st Prize National Level Project Competition 2024',
        'Published in IEEE Xplore (DOI: 10.1109/NMITCON62075.2024.10698968)',
      ],
      links: {
        paper: 'https://doi.org/10.1109/NMITCON62075.2024.10698968',
      },
      featured: true,
      year: '2024',
    },
    {
      id: 'rental-system',
      title: 'On-The-Go Rental System',
      description: 'Full-stack bike rental platform with modular Django architecture, payment processing, and automated testing.',
      longDescription:
        'Built a scalable bike rental platform supporting user management, bike administration, rental workflows, and payment processing. Architected with four modular Django applications. Containerized with Docker Compose for reproducible deployments. Implemented comprehensive end-to-end payment management and automated tests.',
      technologies: ['Django', 'Docker', 'MySQL', 'Python', 'REST API'],
      highlights: ['Modular architecture', 'Docker Compose deployment', 'End-to-end payment workflows'],
      featured: true,
      year: '2023',
    },
  ],
  publications: [
    {
      id: 'nmitcon-2024',
      title: 'Crowd Control and Monitoring using Deep Learning',
      authors: ['Amith C Kowshik'],
      venue: 'National Conference on Emerging Trends in Computing (NMITCON)',
      year: 2024,
      doi: '10.1109/NMITCON62075.2024.10698968',
      url: 'https://doi.org/10.1109/NMITCON62075.2024.10698968',
      abstract:
        'This paper presents a deep learning-based approach for crowd monitoring and control using YOLOv8-Pose for real-time human detection and pose estimation. Our system integrates homography techniques for 3D coordinate transformation and generates real-time density maps.',
    },
  ],
  skills: [
    {
      name: 'Programming Languages',
      skills: ['Golang', 'Python', 'TypeScript', 'JavaScript', 'C', 'C++', 'Java'],
    },
    {
      name: 'Backend & Frameworks',
      skills: ['Node.js', 'Django', 'REST APIs', 'Microservices', 'System Design'],
    },
    {
      name: 'Frontend',
      skills: ['React', 'Angular', 'Tailwind CSS', 'Next.js'],
    },
    {
      name: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'Redis'],
    },
    {
      name: 'Cloud & DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    },
    {
      name: 'Monitoring',
      skills: ['Prometheus', 'Grafana', 'Alertmanager'],
    },
    {
      name: 'AI/ML',
      skills: ['Deep Learning', 'Computer Vision', 'Time Series Analysis', 'Predictive Analysis'],
    },
  ],
  awards: [
    {
      id: 'competition-2024',
      title: '1st Prize - National Level Project Competition',
      issuer: 'Department of Computer Science, Bangalore Institute of Technology',
      date: 'Apr 2024',
      description: 'Awarded for Crowd Control and Monitoring using Deep Learning project.',
    },
  ],
};

/**
 * Site metadata for SEO and general configuration
 */
export const siteMetadata: SiteMetadata = {
  title: 'Amith C Kowshik - Backend Engineer & Researcher',
  description: 'Backend developer at F5 Networks with expertise in distributed systems and AI-driven insights. Published researcher in computer vision.',
  author: 'Amith C Kowshik',
  siteUrl: process.env.SITE_URL || 'https://portfolio.example.com',
  locale: 'en-US',
  keywords: [
    'backend developer',
    'golang',
    'microservices',
    'computer vision',
    'machine learning',
    'system design',
    'researcher',
    'Bangalore',
  ],
};
