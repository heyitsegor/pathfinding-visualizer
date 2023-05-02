import { useState, useEffect, useRef } from 'react';

const useRefDimensions = () => {
  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const observeSize = (element) => {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const { width, height } = entry.contentRect;
          setDimensions({ width: Math.round(width), height: Math.round(height) });
        });
      });
      resizeObserver.observe(element);
      return () => {
        resizeObserver.unobserve(element);
      };
    };

    if (ref.current) {
      const cleanup = observeSize(ref.current);
      return cleanup;
    }

    return null;
  }, [ref]);

  return [ref, dimensions];
};

export default useRefDimensions;
