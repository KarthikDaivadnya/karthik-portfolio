export interface Project {
  slug: string;
  name: string;
  tag: string;
  description: string;
  features: string[];
  tech: string[];
  github: string;
  liveDemo: string | null; // null = not deployed yet, rendered honestly as "Ask for a demo"
}

export interface TimelineItem {
  date: string;
  title: string;
  org: string;
  description?: string;
}

export interface SkillGroup {
  category: string;
  icon: string; // lucide icon name
  skills: string[];
}
