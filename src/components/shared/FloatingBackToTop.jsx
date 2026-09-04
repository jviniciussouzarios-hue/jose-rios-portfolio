import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Floating Back-to-Top button — Yellow/Lime circular button pinned at bottom-right,
 * exactly as seen in the UNIFEX reference video.
 */
export default function FloatingBackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.12, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed bottom-8 right-8 z-[900] w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent-lime text-bg-dark shadow-[0_10px_30px_rgba(214,255,63,0.35)] flex items-center justify-center transition-shadow hover:shadow-[0_15px_40px_rgba(214,255,63,0.5)] cursor-pointer"
          aria-label="Back to top"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-bg-dark stroke-[2.5]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
