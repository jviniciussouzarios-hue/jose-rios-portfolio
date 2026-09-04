import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Recognition/Awards Section — Inspirada exatamente no vídeo (Frame 22s):
 * - Fundo Dark com transição
 * - Tabela com colunas: Nº, Instituição, Certificação/Título, Ano
 * - Preview de imagem flutuante/lateral na esquerda que se altera conforme a linha em foco (hover)
 */
export default function Awards() {
  const { content } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeAward = content.recognition.items[activeIndex] || content.recognition.items[0];

  return (
    <section
      id="recognition"
      className="section-dark relative py-24 md:py-36 bg-[#0a0a0a] text-white transition-colors duration-700 overflow-hidden"
      data-section-theme="dark"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent-lime block mb-2">
              {content.recognition.sectionBadge}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
              {content.recognition.title}
            </h2>
          </div>
          <p className="text-sm text-gray-muted max-w-xs">
            {content.recognition.subtitle}
          </p>
        </div>

        {/* Two Columns: Left Image Preview + Right Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Dynamic Preview Image (Matches Frame 22s) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-32">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/5 aspect-[4/3] shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeAward.index}
                  src={activeAward.image}
                  alt={activeAward.role}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono text-accent-lime uppercase tracking-widest block">
                  [{activeAward.index}] {activeAward.institution}
                </span>
                <span className="font-display text-sm tracking-wide block mt-0.5">
                  {activeAward.role}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Table Rows */}
          <div className="lg:col-span-8">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 py-3 border-b border-white/15 text-xs font-mono text-gray-muted uppercase tracking-wider">
              <span className="col-span-1">{content.recognition.tableHeaders.number}</span>
              <span className="col-span-4">{content.recognition.tableHeaders.institution}</span>
              <span className="col-span-5">{content.recognition.tableHeaders.role}</span>
              <span className="col-span-2 text-right">{content.recognition.tableHeaders.year}</span>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-white/10">
              {content.recognition.items.map((award, i) => {
                const isActive = activeIndex === i;
                return (
                  <motion.div
                    key={award.index}
                    className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 py-5 md:py-6 items-center cursor-pointer transition-all duration-300 relative group px-2 rounded-xl ${
                      isActive ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'
                    }`}
                    onMouseEnter={() => setActiveIndex(i)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    {/* Active Accent Bar on Left */}
                    {isActive && (
                      <motion.div
                        layoutId="active-bar"
                        className="absolute left-0 top-2 bottom-2 w-1 bg-accent-lime rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}

                    {/* Number */}
                    <span className="md:col-span-1 text-xs font-mono text-accent-lime font-bold">
                      {award.index}
                    </span>

                    {/* Institution */}
                    <span className="md:col-span-4 text-sm font-semibold uppercase tracking-wider text-white/90 group-hover:text-white">
                      {award.institution}
                    </span>

                    {/* Certification / Role */}
                    <span className="md:col-span-5 text-base md:text-lg font-display text-white group-hover:text-accent-lime transition-colors">
                      {award.role}
                    </span>

                    {/* Year */}
                    <span className="md:col-span-2 text-xs md:text-sm font-mono text-gray-muted md:text-right">
                      {award.year}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
