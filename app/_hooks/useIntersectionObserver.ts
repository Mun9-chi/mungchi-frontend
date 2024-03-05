import { useEffect, useRef } from 'react';

const useIntersectionObserver = (onIntersecting: () => void) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onIntersecting();
      }
    });

    intersectionObserver.observe(ref.current);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [onIntersecting]);

  return ref;
};

export default useIntersectionObserver;
