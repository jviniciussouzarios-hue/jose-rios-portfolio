import { motion, useSpring } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';

/**
 * Cursor customizado — círculo lime que segue o mouse com spring easing.
 */
export default function CustomCursor() {
  const { position, variant, label, isTouch } = useCursor();

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(position.x - 8, springConfig);
  const y = useSpring(position.y - 8, springConfig);

  // Atualizar springs quando posição muda
  x.set(position.x - (variant === 'view' ? 40 : 8));
  y.set(position.y - (variant === 'view' ? 40 : 8));

  if (isTouch) return null;

  return (
    <motion.div
      className={`custom-cursor ${variant === 'view' ? 'expanded' : ''}`}
      style={{ x, y }}
    >
      {variant === 'view' && label && (
        <span className="custom-cursor-label">{label}</span>
      )}
    </motion.div>
  );
}
