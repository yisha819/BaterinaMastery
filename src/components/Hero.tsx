import { useEffect, useState } from 'react';
import { heroPhrases } from '../data/portfolio';
import { useTilt } from '../hooks/useTilt';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const tiltRef = useTilt<HTMLSpanElement>();
  const typewriterText = useTypewriter(heroPhrases);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setShow(true), 50);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className={`section hero${show ? ' show' : ''}`}>
      <h2 className="title">
        Hi, I'm{' '}
        <span className="highlight" ref={tiltRef}>
          Ayisha Baterina
        </span>
      </h2>
      <p className="subtitle">
        <span id="typewriter">{typewriterText}</span>
        <span className="typewriter-cursor">|</span>
      </p>
    </section>
  );
}
