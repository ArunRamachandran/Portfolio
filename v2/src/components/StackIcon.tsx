import type { ComponentType } from 'react';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiFigma,
  SiStorybook,
  SiWebpack,
  SiJest,
  SiCypress,
  SiDocker,
  SiJenkins,
  SiRedux,
  SiGraphql,
  SiNginx,
} from 'react-icons/si';
import { MdAccessibility, MdDesignServices } from 'react-icons/md';
import { FaAws } from 'react-icons/fa';
import { TbBrandVscode, TbBrandAzure } from 'react-icons/tb';

const icons: Record<string, { icon: ComponentType<{ size?: number; color?: string }>; color: string }> = {
  JavaScript: { icon: SiJavascript, color: '#F0DB4F' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  React: { icon: SiReact, color: '#61DAFB' },
  'Node.js': { icon: SiNodedotjs, color: '#3C873A' },
  Redux: { icon: SiRedux, color: '#764ABC' },
  GraphQL: { icon: SiGraphql, color: '#E10098' },
  'Design System': { icon: MdDesignServices, color: '#B4502B' },
  Git: { icon: SiGit, color: '#F05032' },
  GitHub: { icon: SiGithub, color: '#181717' },
  Figma: { icon: SiFigma, color: '#F24E1E' },
  Storybook: { icon: SiStorybook, color: '#FF4785' },
  VSCode: { icon: TbBrandVscode, color: '#007ACC' },
  Webpack: { icon: SiWebpack, color: '#8DD6F9' },
  Jest: { icon: SiJest, color: '#C21325' },
  Cypress: { icon: SiCypress, color: '#69D3A3' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  Jenkins: { icon: SiJenkins, color: '#D24939' },
  AWS: { icon: FaAws, color: '#FF9900' },
  Azure: { icon: TbBrandAzure, color: '#0078D4' },
  Nginx: { icon: SiNginx, color: '#009639' },
  Accessibility: { icon: MdAccessibility, color: '#7C5CFC' },
};

export default function StackIcon({ name }: { name: string }) {
  const entry = icons[name];
  if (!entry) return null;
  const Icon = entry.icon;
  return <Icon size={20} color={entry.color} />;
}
