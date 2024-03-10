import { useEffect, useRef } from 'react';

type Params = {
  onIntersecting: () => void;
};

const useIntersectionEffect = ({ onIntersecting }: Params) => {
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

export default useIntersectionEffect;
