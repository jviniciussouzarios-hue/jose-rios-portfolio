import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Footer — Nome gigante com marquee, quick links bilíngues e copyright.
 */
export default function Footer() {
  const { content } = useLanguage();

  const handleNavClick = (target) => {
    const el = document.querySelector(target);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="section-dark relative pt-16 pb-12 overflow-hidden bg-[#070707] text-white border-t border-white/10">
      {/* Big Name Marquee */}
      <div className="overflow-hidden mb-16 select-none pointer-events-none">
        <motion.div
          className="marquee-track animate-marquee whitespace-nowrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="inline-flex items-baseline mr-12">
              <span className="font-display text-[14vw] md:text-[11vw] text-outline-white uppercase tracking-tight opacity-40 hover:opacity-100 transition-opacity">
                {content.footer.bigName}
              </span>
              <span className="font-display text-[14vw] md:text-[11vw] text-accent-lime ml-1">
                .
              </span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Footer Content Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-10 items-center">
          {/* Profile Mini info */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex-shrink-0 border border-white/15">
              <img
                src={content.personalInfo.profileImage}
                alt={content.personalInfo.fullName}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-display text-sm text-white tracking-wide">
                {content.personalInfo.fullName}
              </p>
              <p className="text-xs text-gray-muted">{content.personalInfo.roleTitle}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {content.footer.quickLinks.map((link, i) => (
              <a
                key={i}
                href={link.target}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.target);
                }}
                className="text-xs font-semibold uppercase tracking-wider text-white/60 hover:text-accent-lime transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-muted font-mono">{content.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
