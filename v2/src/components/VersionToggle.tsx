export default function VersionToggle() {
  return (
    <div className="version-toggle" role="group" aria-label="Portfolio version">
      <span className="version-toggle__option version-toggle__option--active">v2</span>
      <a className="version-toggle__option" href="./v1/">
        v1
      </a>
    </div>
  );
}
