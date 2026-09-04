import { motion } from 'framer-motion';

/**
 * Título duplicado: outline + sólido, com marquee infinito.
 * Usado em SERVICES e WORKS.
 */
export default function SectionTitleDuo({ text, className = '' }) {
  return (
    <div className={`overflow-hidden py-8 ${className}`}>
      <motion.div
        className="marquee-track animate-marquee whitespace-nowrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="inline-flex items-center gap-8 mr-8">
            <span className="font-display text-[8vw] md:text-[6vw] text-outline uppercase tracking-tight">
              {text}
            </span>
            <span className="font-display text-[8vw] md:text-[6vw] uppercase tracking-tight">
              {text}
            </span>
            <span className="w-4 h-4 rounded-full bg-accent-lime inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
