import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  ctaText: string;
}

export interface Achievement {
  title?: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  headline: string;
  context: string;
  techStack: string[];
  achievements: Achievement[];
}

export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  icon: ReactNode;
  content: {
    problem: string;
    solution: string;
    impact: string[];
  };
  excelUrl: string;
}
