import { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';

const SmoothScrollContext = createContext({ lenis: null });

export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export default SmoothScrollContext;
