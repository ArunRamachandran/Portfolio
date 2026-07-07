export default function ConnectorArrow({ flip }: { flip?: boolean }) {
  return (
    <svg
      className={`connector${flip ? ' connector--flip' : ''}`}
      viewBox="0 0 90 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="connector__path"
        d="M2 6C22 2 28 30 46 24C60 19.5 58 6 76 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle className="connector__dot" cx="76" cy="10" r="3" fill="currentColor" />
    </svg>
  );
}
