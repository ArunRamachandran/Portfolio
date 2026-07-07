export interface ExperienceEntry {
  company: string;
  title: string;
  period: string;
  location: string;
  blurb: string;
  highlight?: string;
  tags: string[];
  color: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Crayon',
    title: 'Front-End Software Engineer',
    period: 'Nov 2022 — Present',
    location: 'Berlin, Germany',
    blurb: "Co-building Crayon's design system from scratch, now the standard UI foundation across the product org.",
    highlight: '40+ components · 30+ engineers',
    tags: ['React', 'Design Systems'],
    color: '#B4502B',
  },
  {
    company: 'METRO.digital',
    title: 'Full Stack Engineer',
    period: 'May 2021 — Oct 2022',
    location: 'Berlin, Germany',
    blurb: "Shipped customer-facing commerce features for METRO's online store across European and Asian markets.",
    tags: ['React', 'Node.js'],
    color: '#2F6F4E',
  },
  {
    company: 'Teraki',
    title: 'Frontend Web Developer',
    period: 'Nov 2020 — Apr 2021',
    location: 'Berlin, Germany',
    blurb: 'Turned real-time autonomous-driving sensor data into dashboards a human could actually read.',
    tags: ['React', 'Data Viz'],
    color: '#3A5BA0',
  },
  {
    company: 'Wipro Digital · Lloyds Banking Group',
    title: 'Technologist, Front-End Engineer',
    period: 'Nov 2017 — Nov 2020',
    location: 'London, United Kingdom',
    blurb: "Rebuilt credit card journeys for the UK's largest banking group, end to end.",
    tags: ['JavaScript', 'Banking'],
    color: '#8B3A62',
  },
  {
    company: 'JIFFY.ai',
    title: 'JavaScript Developer → Senior Product Engineer',
    period: 'Mar 2015 — Nov 2017',
    location: 'Bengaluru, India',
    blurb: 'Where it started — grew a big-data analytics platform from blank canvas to production.',
    tags: ['JavaScript', 'Startup'],
    color: '#B08900',
  },
];
