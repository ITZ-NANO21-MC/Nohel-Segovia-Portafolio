import type { LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
};

export type StatCard = {
  value: string;
  label: string;
  icon: LucideIcon;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  status: 'Production Ready' | 'In Development' | 'Archived';
  stack: { name: string; icon: React.ReactNode }[];
  metrics: { label: string; value: string }[];
  demoUrl?: string;
  codeUrl?: string;
  image: {
    id: string;
  };
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  level: 'Avanzado' | 'Intermedio' | 'Básico';
  progress: number;
  icon: React.ReactNode;
};

export type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  institution: string;
};

export type BlogArticle = {
  id: string;
  title: string;
  description: string;
  imageUrlId: string;
  link: string;
};
