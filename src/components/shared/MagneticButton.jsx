import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Botão com efeito magnético — move-se em direção ao cursor no hover.
 */
export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  download,
  strength = 0.3,
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Tag = href ? 'a' : 'button';
  const extraProps = href ? { href, download, target: download ? undefined : '_blank', rel: 'noopener noreferrer' } : { onClick };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.5 }}
      className="inline-block"
    >
      <Tag
        className={`inline-flex items-center justify-center font-body font-semibold uppercase tracking-wider text-sm transition-all duration-300 ${className}`}
        {...extraProps}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
