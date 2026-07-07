import type { CSSProperties } from 'react';
import SectionLabel from './SectionLabel';
import LocationBadge from './LocationBadge';
import ConnectorArrow from './ConnectorArrow';
import { experience } from '../data/experience';
import { useReveal } from '../hooks/useReveal';

export default function Experience() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section experience" id="experience" ref={ref}>
      <SectionLabel index="Where I've Worked" title="Here's the journey so far" />
      <div className="exp-flow">
        {experience.map((role, i) => (
          <div className="exp-flow__item" key={`${role.company}-${role.period}`}>
            <article
              className="exp-card"
              style={{ '--card-accent': role.color, '--rotate': i % 2 === 0 ? '-2.5deg' : '2.5deg' } as CSSProperties}
            >
              <span className="exp-card__number">{i + 1}</span>
              <div className="exp-card__head">
                <p className="exp-card__period">{role.period}</p>
                <LocationBadge label={role.location} size="sm" />
              </div>
              <h3 className="exp-card__role">
                {role.title}
                {'\u00A0'}
                <span className="exp-card__at">{'\u00A0·\u00A0'}{role.company}</span>
              </h3>
              <p className="exp-card__blurb">{role.blurb}</p>
              {role.highlight && <p className="exp-card__highlight">{role.highlight}</p>}
              <ul className="exp-card__tags">
                {role.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
            {i < experience.length - 1 && (
              <span className="exp-flow__connector">
                <ConnectorArrow flip={i % 2 === 1} />
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
