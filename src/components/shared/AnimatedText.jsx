import { motion } from 'framer-motion';

/**
 * Componente que anima texto palavra por palavra ou caractere por caractere.
 * @param {string} text - Texto a ser animado
 * @param {'word'|'char'} mode - Modo de split
 * @param {string} className - Classes CSS adicionais
 * @param {number} delay - Delay inicial em segundos
 */
export default function AnimatedText({
  text,
  mode = 'word',
  className = '',
  delay = 0,
  once = true,
  staggerDelay = 0.04,
}) {
  const items = mode === 'word' ? text.split(' ') : text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block"
          style={{ marginRight: mode === 'word' ? '0.3em' : '0' }}
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  );
}
