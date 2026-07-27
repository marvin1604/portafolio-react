export type Locale = "it" | "en";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  name: string;
  eyebrow: string;
  description: string;
  status: string;
  technologies: string[];
  demoUrl?: string;
  repositoryUrl: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface PortfolioContent {
  localeName: string;
  navigation: NavigationItem[];
  actions: {
    downloadCv: string;
    viewProjects: string;
    viewDemo: string;
    viewCode: string;
    switchLanguage: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    facts: string[];
  };
  experience: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Experience[];
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Project[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    principles: string[];
  };
  skills: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: SkillGroup[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    locationLabel: string;
    location: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    availability: string;
    rights: string;
  };
  metadata: {
    title: string;
    description: string;
  };
}
