import { useEffect, useState } from 'react';

interface TypewriterState {
  phraseIndex: number;
  charIndex: number;
  deleting: boolean;
}

export function useTypewriter(phrases: string[], startDelay = 1000): string {
  const [started, setStarted] = useState(false);
  const [state, setState] = useState<TypewriterState>({
    phraseIndex: 0,
    charIndex: 0,
    deleting: false,
  });

  useEffect(() => {
    const timeout = window.setTimeout(() => setStarted(true), startDelay);
    return () => window.clearTimeout(timeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started || phrases.length === 0) return;

    const currentPhrase = phrases[state.phraseIndex];

    let delay: number;
    let next: TypewriterState;

    if (!state.deleting && state.charIndex === currentPhrase.length) {
      delay = 2000;
      next = { ...state, deleting: true };
    } else if (state.deleting && state.charIndex === 0) {
      delay = 500;
      next = {
        phraseIndex: (state.phraseIndex + 1) % phrases.length,
        charIndex: 0,
        deleting: false,
      };
    } else {
      delay = state.deleting ? 50 : 100;
      next = {
        ...state,
        charIndex: state.charIndex + (state.deleting ? -1 : 1),
      };
    }

    const timeout = window.setTimeout(() => setState(next), delay);
    return () => window.clearTimeout(timeout);
  }, [started, state, phrases]);

  return started ? phrases[state.phraseIndex].slice(0, state.charIndex) : '';
}
