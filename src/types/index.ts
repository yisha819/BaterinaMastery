export interface Project {
  title: string;
  description: string;
  url: string;
}

export interface Seminar {
  date: string;
  title: string;
  meta: string;
}

export interface Education {
  badge: string;
  school: string;
  degree: string;
  major?: string;
  location: string;
  highlight?: string;
}

export interface TechnicalProgressionItem {
  title: string;
  role: string;
  meta?: string;
  body?: string;
  bulletPoints?: string[];
}

export interface SkillCard {
  title: string;
  className: 'accent-blue' | 'accent-green' | 'accent-orange';
  details: { label: string; text: string }[];
}
