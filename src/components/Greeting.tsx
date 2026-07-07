import { useEffect, useState } from 'react';

const greetings = ['Hey', 'Hello', 'Hola', 'Bonjour', 'Ciao', 'Hallo', 'Namaste', 'こんにちは', 'Olá', 'Привет'];

export default function Greeting() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % greetings.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="greeting">
      <span className="greeting__wave" aria-hidden="true">
        👋
      </span>
      <span className="greeting__word" key={index}>
        {greetings[index]},
      </span>
      <span aria-hidden="true">I'm</span>
    </p>
  );
}
