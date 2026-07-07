import SectionLabel from './SectionLabel';
import StackIcon from './StackIcon';
import { stack } from '../data/stack';
import { useReveal } from '../hooks/useReveal';

export default function TechStack() {
  const ref = useReveal<HTMLDivElement>();
  const mid = Math.ceil(stack.length / 2);
  const left = stack.slice(0, mid);
  const right = stack.slice(mid);

  return (
    <section className="section stack" id="stack" ref={ref}>
      <div className="stack-scene">
        <div className="stack-scene__pills stack-scene__pills--left">
          {left.map((item, i) => (
            <div className="tool-pill" key={item.name} style={{ '--pill-delay': `${i * 0.4}s` } as any}>
              <span className="tool-pill__icon">
                <StackIcon name={item.name} />
              </span>
              <span className="tool-pill__label">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="stack-scene__center">
          <SectionLabel index="Tools I Use" title="What I build with" />
          <p className="stack-scene__desc">
            A toolkit built for speed, consistency and craft — the technologies I reach for most.
          </p>
        </div>

        <div className="stack-scene__pills stack-scene__pills--right">
          {right.map((item, i) => (
            <div className="tool-pill" key={item.name} style={{ '--pill-delay': `${i * 0.4 + 0.2}s` } as any}>
              <span className="tool-pill__icon">
                <StackIcon name={item.name} />
              </span>
              <span className="tool-pill__label">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
