import type { CSSProperties } from 'react';
import { SiGithub, SiStackoverflow } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import SectionLabel from './SectionLabel';
import { useReveal } from '../hooks/useReveal';

const links = [
  {
    label: 'Email',
    href: 'mailto:arunk.ramachandran6@gmail.com',
    icon: <MdEmail size={22} />,
    color: '#E8794E',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ArunRamachandran?tab=repositories',
    icon: <SiGithub size={20} />,
    color: '#ffffff',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arun-ramachandran/',
    icon: <FaLinkedin size={20} />,
    color: '#2D9CFF',
  },
  {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/users/4869449/arun-ramachandran',
    icon: <SiStackoverflow size={20} />,
    color: '#F48024',
  },
];

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="contact__inner">
        <SectionLabel index="Get In Touch" title="Let's build something" />
        <p className="contact__body">
          Building something and think I could help, or just want to talk about design systems or frontend? Or do you have an exciting opportunity to work with? I'm always happy to chat. I'll even buy the coffee.
        </p>
        <ul className="contact__links">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="contact__link"
                style={{ '--link-color': link.color } as CSSProperties}
              >
                <span className="contact__link-icon">{link.icon}</span>
                <span className="contact__link-label">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Arun Ramachandran</p>
        </footer>
      </div>
    </section>
  );
}
