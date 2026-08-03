import type { Education, Project, Seminar, SkillCard, TechnicalProgressionItem } from '../types';

export const navLinks = [
  'Home',
  'About',
  'Education',
  'Experience',
  'Skills',
  'Projects',
  'Contact',
];

export const heroPhrases = [
  '3rd Year IT Student',
  'Web Technology Major',
  'Technical Problem Solver',
];

export const education: Education[] = [
  {
    badge: 'Expected Graduation: Sept 2026',
    school: 'University of the Cordilleras',
    degree: 'Bachelor of Science in Information Technology',
    major: '(Major in Web Technology)',
    location: 'Governor Pack Road, Baguio City',
    highlight: '★ Dean’s Lister (2023 – Present)',
  },
  {
    badge: 'Graduated: May 2023',
    school: 'H.O.P.E Christian Academy Inc.',
    degree: 'Science, Technology, Engineering, and Mathematics Strand',
    major: '(STEM)',
    location: 'Taroy, Poblacion, La Trinidad, Benguet',
    highlight: '★ Graduated with Honors',
  },
  {
    badge: 'Graduated: March 2016',
    school: 'H.O.P.E Christian Academy Inc.',
    degree: 'Junior High School Curriculum',
    location: 'Taroy, Poblacion, La Trinidad, Benguet',
  },
];

export const technicalProgression: TechnicalProgressionItem[] = [
  {
    title: 'Cisco Networking Academy',
    role: 'CCNA: Introduction to Networks Certificate',
    meta: 'Issued: Feb 2025',
    body: 'Acquired fundamental expertise in physical cabling, IP addressing schemes, subnetting, and switch/router initial settings.',
  },
  {
    title: 'Systems Operations',
    role: 'University & Independent Development',
    bulletPoints: [
      '• Architected and deployed production-ready full-stack applications with modular database schemas.',
      '• Structured complex programmatic solutions using API integration, Git controls, and command-line automation.',
    ],
  },
];

export const seminars: Seminar[] = [
  {
    date: 'March 14, 2026',
    title: 'Practical Data Analytics & Visualization',
    meta: 'Python-based Data Science bootcamp specializing in analytical modeling • Baguio City',
  },
  {
    date: 'August 22, 2025',
    title: 'DECODE 2025: University Capture the Flag',
    meta: 'Intensive cybersecurity competition focusing on server defense and cryptography • Baguio City',
  },
  {
    date: 'November 09, 2024',
    title: 'Google Developer Group (GDG) Seminar',
    meta: 'Engineering workshops covering modern Artificial Intelligence models and emerging web platforms • University of the Cordilleras',
  },
  {
    date: 'December 2024',
    title: 'DevFest Baguio 2024',
    meta: 'Engaged in tech panels addressing cloud computing, AI, and developer tools',
  },
];

export const skillCards: SkillCard[] = [
  {
    title: 'Systems & Backend Development',
    className: 'accent-blue',
    details: [
      {
        label: 'Software Engineering:',
        text: 'Advanced development in Python, C#, and SQL; practical full-stack deployment using React and Laravel.',
      },
      {
        label: 'Technical Environments:',
        text: 'Deep familiarity with Linux system administration, advanced CLI navigation, and repository controls (GitHub).',
      },
      {
        label: 'Ecosystem Tools:',
        text: 'Package and dependency orchestration using NPM and Composer inside continuous integration workflows.',
      },
    ],
  },
  {
    title: 'Intelligent Data & Security',
    className: 'accent-green',
    details: [
      {
        label: 'Data & Research Operations:',
        text: 'Practical logic engineering, Python data visualization, and structured data analytics workflows.',
      },
      {
        label: 'Secure Infrastructures:',
        text: 'Cisco routers and LAN switches configuration (CCNA 1 & 2); secure routing protocols.',
      },
      {
        label: 'Information Defense:',
        text: 'Solid foundation in active cybersecurity operations, cryptography, and secure API data interfaces.',
      },
    ],
  },
  {
    title: 'Core Research Methodologies',
    className: 'accent-orange',
    details: [
      {
        label: 'Structured Logic:',
        text: 'Exceptional proficiency in programmatic problem-solving, architectural design, and optimization models.',
      },
      {
        label: 'Collaborative Operations:',
        text: 'Team coordination, task prioritization, and structured technical documentation inside development cycles.',
      },
      {
        label: 'Information Integrity:',
        text: 'High-fidelity data compilation, reporting, and technical synthesis using advanced productivity tools.',
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Company Website',
    description: 'Responsive website for a local business built with HTML and CSS.',
    url: 'https://yisha819.github.io/sinks/',
  },
  {
    title: 'API Integrated App',
    description: 'Web application that fetches and displays third-party API data.',
    url: 'https://yisha819.github.io/api-call/',
  },
  {
    title: 'Login System',
    description: 'A secure corporate login interface tailored for system access.',
    url: 'https://yisha819.github.io/sinkssys/',
  },
  {
    title: 'ValleyCare:Queueing and Appointment System',
    description:
      'A system we created as our Capstone Project for a clinic in La Trinidad we partnered with.',
    url: 'https://valleycare.vercel.app/dashboard',
  },
];
