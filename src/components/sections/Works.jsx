import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useCursor } from '../../context/CursorContext';
import { useMediaQuery } from '../../hooks/useScrollUtils';

/**
 * Works Section — Inspirada exatamente no vídeo (Frames 16s & 20s):
 * - Fundo Light com transição marcante
 * - Texto gigante "WORKS" em background
 * - Badge circular "Discover Our Projects >"
 * - Cards com cabeçalho de tags, ícone de seta diagonal e imagem arredondada
 */
export default function Works() {
  const { content } = useLanguage();
  const { setCursorVariant } = useCursor();
  const containerRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const textX = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section
      id="works"
      ref={containerRef}
      className="section-light relative py-24 md:py-36 bg-[#f7f7f8] text-bg-dark overflow-hidden transition-colors duration-700"
      data-section-theme="light"
    >
      {/* Background Giant Text "WORKS" */}
      <motion.div
        style={{ x: isMobile ? 0 : textX }}
        className="pointer-events-none select-none absolute top-12 left-0 right-0 z-0 opacity-10 whitespace-nowrap overflow-hidden"
      >
        <span className="font-display text-[22vw] uppercase tracking-tighter leading-none block text-bg-dark">
          {content.works.giantWord}
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header with Discover Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gray-muted block mb-3">
              {content.works.sectionBadge}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-bg-dark">
              {content.works.giantWord}
            </h2>
          </div>

          {/* Interactive Circular Badge */}
          <motion.div
            className="flex items-center gap-3 self-start md:self-end"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="w-12 h-12 rounded-full bg-accent-lime flex items-center justify-center shadow-md">
              <svg
                className="w-5 h-5 text-bg-dark stroke-[2.5]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-bg-dark">
              {content.works.discoverBadge}
            </span>
          </motion.div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {content.works.items.map((project, i) => (
            <motion.article
              key={project.id}
              className="bg-white rounded-3xl p-6 md:p-7 border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setCursorVariant('view', 'VIEW')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              {/* Card Header: Category, Tags, Diagonal Arrow */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-mono font-bold text-accent-lime bg-bg-dark px-2 py-0.5 rounded-full">
                      {project.id}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-muted">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-bg-dark tracking-tight mt-2 group-hover:text-black">
                    {project.title}
                  </h3>
                </div>

                {/* Diagonal Arrow Icon in Circle (Signature Unifex) */}
                <div className="w-10 h-10 rounded-full bg-black/5 group-hover:bg-accent-lime transition-colors duration-300 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-bg-dark transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>

              {/* Card Image */}
              <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-neutral-100 mb-6 relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity duration-300" />
              </div>

              {/* Details & Tags */}
              <div>
                <p className="text-xs md:text-sm text-gray-muted leading-relaxed mb-4">
                  {project.details}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-black/5">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/5 text-bg-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
