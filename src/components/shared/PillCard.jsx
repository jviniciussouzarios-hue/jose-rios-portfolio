import { motion } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';

/**
 * Pill Card — Layout inspirado no vídeo (Frame 12s):
 * - Esquerda: Título em destaque, subtags com "+" e descrição técnica
 * - Direita: Mídia em formato cápsula stadium (rounded-full) com zoom suave
 */
export default function PillCard({ id, title, subtags = [], description, image, index = 0 }) {
  const { setCursorVariant } = useCursor();

  return (
    <motion.div
      className="py-10 md:py-14 border-b border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setCursorVariant('view', 'EXPLORE')}
      onMouseLeave={() => setCursorVariant('default')}
    >
      {/* Left Column: Title, Subtags, Description */}
      <div className="flex-1 w-full lg:max-w-xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono text-accent-lime font-bold tracking-wider">
            [{id}]
          </span>
          <div className="flex flex-wrap gap-2">
            {subtags.map((subtag, i) => (
              <span
                key={i}
                className="text-[11px] font-mono font-medium tracking-wider text-white/50 uppercase"
              >
                {subtag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight text-white mb-4 group-hover:text-accent-lime transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm md:text-base text-gray-muted leading-relaxed max-w-lg">
          {description}
        </p>
      </div>

      {/* Right Column: Pill Capsule Image (Stadium rounded-full) */}
      {image && (
        <div className="w-full lg:w-auto flex-shrink-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:w-80 xl:w-96 h-36 md:h-44 rounded-full overflow-hidden border border-white/15 shadow-2xl transition-all duration-500 group-hover:border-accent-lime group-hover:shadow-[0_10px_30px_rgba(214,255,63,0.15)]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none" />
            <div className="absolute inset-0 border border-white/10 rounded-full pointer-events-none" />
          </div>
        </div>
      )}
    </motion.div>
  );
}
