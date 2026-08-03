import { useEffect, useRef } from 'react';

const REVEAL_SELECTOR = '.section-title, .info-card, .skill-card, .photo-placeholder';

export function useRevealOnScroll(): React.RefObject<HTMLDivElement | null> {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add('reveal');
        }
      },
      { threshold: 0.15 },
    );

    const targets = container.querySelectorAll(REVEAL_SELECTOR);
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
