interface SectionLabelProps {
  index: string;
  title: string;
}

export default function SectionLabel({ index, title }: SectionLabelProps) {
  return (
    <div className="section-label">
      <p className="section-label__eyebrow">
        <span className="section-label__rule" aria-hidden="true" />
        <span className="section-label__eyebrow-text">{index}</span>
        <span className="section-label__rule" aria-hidden="true" />
      </p>
      <h2 className="section-label__title">{title}</h2>
    </div>
  );
}
