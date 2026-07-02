import { ReactNode } from 'react';

export interface Skill {
  id: string;
  category: string;
  title: string;
  tools: string[];
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

export interface ProjectArticleBlock {
  type: 'text' | 'image' | 'youtube';
  content?: string;
  url?: string;
  alt?: string;
}

export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  icon: ReactNode;
  content: {
    problem?: string;
    solution?: string;
    impact?: string[];
    article?: {
      title: string;
      blocks: ({
        type: 'text';
        content: string;
      } | {
        type: 'image';
        url: string;
        alt: string;
      } | {
        type: 'youtube';
        url: string;
      })[];
    };
  };
  excelUrl: string;
  hubConfig?: {
    title: string;
    description: string;
    buttonText: string;
    format: string;
    metadata: string;
  };
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  skills?: string[];
}

