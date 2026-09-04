import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CursorContext = createContext({
  position: { x: 0, y: 0 },
  variant: 'default',
  label: '',
  setCursorVariant: () => {},
});

export function CursorProvider({ children }) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [variant, setVariant] = useState('default');
  const [label, setLabel] = useState('');
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [isTouch]);

  const setCursorVariant = useCallback((newVariant, newLabel = '') => {
    setVariant(newVariant);
    setLabel(newLabel);
  }, []);

  return (
    <CursorContext.Provider value={{ position, variant, label, setCursorVariant, isTouch }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  return useContext(CursorContext);
}

export default CursorContext;
