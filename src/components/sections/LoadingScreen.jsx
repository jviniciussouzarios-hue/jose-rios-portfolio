import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Tela de carregamento: fundo preto, contador 0-100% em lime,
 * nome revela top-to-bottom, depois curtain wipe.
 */
export default function LoadingScreen({ onComplete }) {
  const [counter, setCounter] = useState(0);
  const [phase, setPhase] = useState('counting'); // counting -> reveal -> done

  useEffect(() => {
    if (phase !== 'counting') return;

    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase('reveal');
          setTimeout(() => {
            setPhase('done');
            onComplete?.();
          }, 1200);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [phase, onComplete]);

  const nameLetters = 'JOSÉ RIOS'.split('');

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="loading-screen"
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          {/* Name Letters */}
          <div className="loading-name flex">
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: '100%', opacity: 0 }}
                animate={
                  phase === 'reveal' || counter >= 60 + i * 4
                    ? { y: '0%', opacity: 1 }
                    : { y: '100%', opacity: 0 }
                }
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>

          {/* Counter */}
          <motion.div
            className="loading-counter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {counter}%
          </motion.div>

          {/* Progress Line */}
          <div className="absolute bottom-0 left-0 h-[2px] bg-accent-lime transition-all duration-100 ease-out"
            style={{ width: `${counter}%` }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
