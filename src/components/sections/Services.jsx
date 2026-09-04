import { useLanguage } from '../../context/LanguageContext';
import SectionTitleDuo from '../shared/SectionTitleDuo';
import PillCard from '../shared/PillCard';

/**
 * Services Section — Fundo Dark com transição marcante,
 * título marquee infinito e lista de cards estilo Unifex.
 */
export default function Services() {
  const { content } = useLanguage();

  return (
    <section
      id="services"
      className="section-dark relative py-24 md:py-36 bg-[#0a0a0a] text-white transition-colors duration-700"
      data-section-theme="dark"
    >
      {/* Marquee Header */}
      <div className="mb-12 md:mb-16">
        <SectionTitleDuo text={content.services.title} />
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent-lime block mb-2">
              {content.services.sectionBadge}
            </span>
            <p className="text-base text-gray-muted">
              {content.services.subtitle}
            </p>
          </div>
          <span className="text-xs font-mono text-white/40">
            [ 01 — 0{content.services.items.length} ]
          </span>
        </div>

        <div>
          {content.services.items.map((service, i) => (
            <PillCard
              key={service.id}
              id={service.id}
              title={service.title}
              subtags={service.subtags}
              description={service.description}
              image={service.image}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
