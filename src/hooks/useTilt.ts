import { useEffect, useRef } from 'react';

export function useTilt<T extends HTMLElement>(): React.RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { offsetWidth: width, offsetHeight: height } = element;
      const x = event.offsetX;
      const y = event.offsetY;
      const xRotation = (y / height - 0.5) * 20;
      const yRotation = (x / width - 0.5) * -20;
      element.style.transform = `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.1)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
}
