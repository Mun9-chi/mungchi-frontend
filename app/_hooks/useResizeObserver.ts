import { useEffect, useRef } from 'react';

export const useResizeObserver = (onResize: (rect: DOMRect) => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const [entry] = entries;
      onResize(entry.target.getBoundingClientRect());
    });

    if (ref.current) resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, []);

  return ref;
};
