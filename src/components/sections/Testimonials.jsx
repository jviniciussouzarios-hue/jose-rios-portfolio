import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Testimonials Section — Bilíngue, visual clean com aspas e avatares.
 */
export default function Testimonials() {
  const { content } = useLanguage();

  return (
    <section
      className="section-light relative py-20 md:py-32 px-6 md:px-10 bg-[#f7f7f8] text-bg-dark border-t border-black/10"
      data-section-theme="light"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-gray-muted block mb-2">
            {content.testimonials.sectionBadge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-bg-dark">
            {content.testimonials.title}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {content.testimonials.items.map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl p-8 md:p-10 relative border border-black/5 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div>
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-full bg-accent-lime/30 flex items-center justify-center mb-6">
                  <svg
                    className="w-5 h-5 text-bg-dark"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-bg-dark/80 mb-8 italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-black/5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-bg-dark/10 flex-shrink-0 border border-black/10">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-display text-sm tracking-wide text-bg-dark">{testimonial.name}</p>
                  <p className="text-xs text-gray-muted uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
