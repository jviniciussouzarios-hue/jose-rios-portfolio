import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

/**
 * About Section — Inspirado na seção About do vídeo:
 * - Coluna Esquerda: Foto de perfil com cantos arredondados (rounded-3xl)
 * - Coluna Direita: 3 parágrafos narrativos, skills pills e indicador circular de experiência
 */
export default function About() {
  const { content } = useLanguage();

  return (
    <section
      id="about"
      className="section-light relative py-20 md:py-32 px-6 md:px-10 border-t border-black/10"
      data-section-theme="light"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait Photo */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sticky top-28">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-neutral-100 aspect-[3/4] max-w-md mx-auto lg:max-w-none group">
                <img
                  src={content.personalInfo.profileImage}
                  alt={content.personalInfo.fullName}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                {/* Overlay details */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-display text-2xl tracking-wide block">
                    {content.personalInfo.fullName}
                  </span>
                  <span className="text-xs text-accent-lime font-mono uppercase tracking-wider block mt-1">
                    {content.personalInfo.roleTitle}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Paragraphs, Circular Metric, Skills */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-black/5 text-xs font-bold uppercase tracking-widest text-bg-dark">
              {content.about.sectionBadge}
            </div>

            <div className="space-y-6">
              {content.about.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  className="text-base md:text-lg text-bg-dark/80 leading-relaxed font-normal"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Circular Metric Meter */}
            <motion.div
              className="flex items-center gap-6 p-6 rounded-2xl bg-black/[0.03] border border-black/5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative w-24 h-24 flex-shrink-0">
                <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#E5E5E5" strokeWidth="6" />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#D6FF3F"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                    whileInView={{ strokeDashoffset: 2 * Math.PI * 50 * 0.15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-display text-2xl text-bg-dark">
                  {content.about.experienceStat.value}
                  <span className="text-sm font-bold text-accent-lime -ml-0.5">{content.about.experienceStat.unit}</span>
                </div>
              </div>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-bg-dark/70 leading-relaxed">
                {content.about.experienceStat.label}
              </p>
            </motion.div>

            {/* Skills Pills */}
            <div className="pt-4 border-t border-black/10">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-muted block mb-4">
                {content.about.skillsTitle}
              </span>
              <div className="flex flex-wrap gap-2">
                {content.about.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 rounded-full border border-bg-dark/15 text-xs font-semibold uppercase tracking-wider text-bg-dark hover:bg-bg-dark hover:text-white transition-all duration-300 shadow-sm"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
