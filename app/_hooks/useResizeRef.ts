import { useEffect, useRef } from 'react';

type Params = {
  onResize: (rect: DOMRect) => void;
};

const useResizeRef = ({ onResize }: Params) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const [entry] = entries;
      onResize(entry.target.getBoundingClientRect());
    });

    if (ref.current) resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [onResize]);

  return ref;
};

export default useResizeRef;
