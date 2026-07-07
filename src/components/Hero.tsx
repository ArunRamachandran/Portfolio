import profilePhoto from '../assets/arun.jpg';
import LocationBadge from './LocationBadge';
import Greeting from './Greeting';

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__intro">
        <Greeting />
        <h1 className="hero__name">
          <span className="hero__name-line">Arun</span>
          <span className="hero__name-line hero__name-line--accent">Ramachandran</span>
        </h1>
        <p className="hero__tagline">
          I design and build <em>beautifully simple</em> things.
        </p>
        <p className="hero__sub">
          Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
        </p>
        <div className="hero__actions">
          <LocationBadge label="Berlin, Germany" />
          <a className="hero__link" href="#experience">
            See where I've worked ↓
          </a>
        </div>
      </div>
      <div className="hero__photo-wrap">
        <img className="hero__photo" src={profilePhoto} alt="Arun Ramachandran" />
      </div>
    </header>
  );
}
