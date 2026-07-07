interface LocationBadgeProps {
  label: string;
  size?: 'sm' | 'md';
}

export default function LocationBadge({ label, size = 'md' }: LocationBadgeProps) {
  return (
    <span className={`location-badge location-badge--${size}`}>
      <svg
        className="location-badge__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21s-7-6.4-7-11.5A7 7 0 0 1 19 9.5C19 14.6 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.3" />
      </svg>
      {label}
    </span>
  );
}
