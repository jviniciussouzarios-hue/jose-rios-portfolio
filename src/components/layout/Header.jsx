import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import MagneticButton from '../shared/MagneticButton';
import { useMediaQuery } from '../../hooks/useScrollUtils';

/**
 * Header fixo inspirado no UNIFEX com:
 * - Logo José Rios
 * - Navegação ativa
 * - Seletor bilíngue PT / EN elegante
 * - Ícones sociais
 * - Botão Download CV
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const isMobile = useMediaQuery('(max-width: 900px)');
  const { language, setLanguage, content } = useLanguage();

  const navItems = [
    { label: content.nav.home, target: '#home' },
    { label: content.nav.about, target: '#about' },
    { label: content.nav.services, target: '#services' },
    { label: content.nav.works, target: '#works' },
    { label: content.nav.recognition, target: '#recognition' },
    { label: content.nav.contact, target: '#contact' },
  ];

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver para seção ativa
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (target) => {
    setMobileOpen(false);
    const el = document.querySelector(target);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled
            ? 'bg-bg-dark/90 backdrop-blur-xl border-b border-white/10 shadow-lg py-3'
            : 'bg-white/80 backdrop-blur-md border-b border-black/5 py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2 group"
          >
            <motion.span
              className="w-3.5 h-3.5 bg-accent-lime shadow-[0_0_12px_rgba(214,255,63,0.8)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
            />
            <span
              className={`font-display text-sm tracking-widest transition-colors duration-300 ${
                scrolled ? 'text-white' : 'text-bg-dark'
              }`}
            >
              JOSÉ RIOS
            </span>
          </a>

          {/* Desktop Nav */}
          {!isMobile && (
            <nav className="flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.target}
                  href={item.target}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.target);
                  }}
                  className={`relative text-xs font-semibold uppercase tracking-widest transition-colors duration-300 hover:text-accent-lime ${
                    scrolled ? 'text-white/70' : 'text-bg-dark/70'
                  } ${
                    activeSection === item.target
                      ? scrolled
                        ? '!text-white font-bold'
                        : '!text-bg-dark font-bold'
                      : ''
                  }`}
                >
                  {item.label}
                  {activeSection === item.target && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent-lime"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>
          )}

          {/* Right Side: Language Switcher, Socials & Download CV */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Language Switcher PT / EN */}
            <div
              className={`flex items-center p-0.5 rounded-full border text-[11px] font-bold transition-all duration-300 ${
                scrolled
                  ? 'border-white/20 bg-white/5'
                  : 'border-bg-dark/20 bg-black/5'
              }`}
            >
              <button
                type="button"
                onClick={() => setLanguage('pt')}
                className={`relative px-2.5 py-1 rounded-full uppercase tracking-wider transition-colors duration-200 ${
                  language === 'pt'
                    ? 'text-bg-dark font-extrabold'
                    : scrolled
                    ? 'text-white/60 hover:text-white'
                    : 'text-bg-dark/60 hover:text-bg-dark'
                }`}
              >
                {language === 'pt' && (
                  <motion.span
                    layoutId="lang-active"
                    className="absolute inset-0 bg-accent-lime rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                PT
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`relative px-2.5 py-1 rounded-full uppercase tracking-wider transition-colors duration-200 ${
                  language === 'en'
                    ? 'text-bg-dark font-extrabold'
                    : scrolled
                    ? 'text-white/60 hover:text-white'
                    : 'text-bg-dark/60 hover:text-bg-dark'
                }`}
              >
                {language === 'en' && (
                  <motion.span
                    layoutId="lang-active"
                    className="absolute inset-0 bg-accent-lime rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                EN
              </button>
            </div>

            {/* Social Icons (Desktop) */}
            {!isMobile && (
              <div className="flex items-center gap-2">
                <a
                  href={content.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors duration-300 hover:text-accent-lime hover:scale-110 ${
                    scrolled ? 'text-white/70' : 'text-bg-dark/70'
                  }`}
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href={content.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors duration-300 hover:text-accent-lime hover:scale-110 ${
                    scrolled ? 'text-white/70' : 'text-bg-dark/70'
                  }`}
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            )}

            {/* Download CV */}
            {!isMobile && (
              <MagneticButton
                href={content.personalInfo.cvFile}
                download
                className={`px-5 py-2.5 rounded-full text-xs font-bold border transition-all duration-300 shadow-sm ${
                  scrolled
                    ? 'bg-accent-lime text-bg-dark border-accent-lime hover:bg-white hover:border-white'
                    : 'bg-bg-dark text-white border-bg-dark hover:bg-accent-lime hover:text-bg-dark hover:border-accent-lime'
                }`}
              >
                {content.nav.downloadCv}
              </MagneticButton>
            )}

            {/* Mobile Hamburger */}
            {isMobile && (
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`flex flex-col gap-1.5 p-2 transition-colors ${
                  scrolled ? 'text-white' : 'text-bg-dark'
                }`}
                aria-label="Menu"
              >
                <motion.span
                  className="block w-6 h-[2px] bg-current origin-center"
                  animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-6 h-[2px] bg-current"
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block w-6 h-[2px] bg-current origin-center"
                  animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            )}
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[999] bg-bg-dark/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.target}
                href={item.target}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.target);
                }}
                className="font-display text-2xl md:text-3xl text-white uppercase tracking-wider hover:text-accent-lime transition-colors"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-6 flex flex-col items-center gap-4"
            >
              <MagneticButton
                href={content.personalInfo.cvFile}
                download
                className="px-8 py-3 rounded-full bg-accent-lime text-bg-dark text-sm font-bold shadow-lg"
              >
                {content.nav.downloadCv}
              </MagneticButton>

              {/* Social icons in mobile menu */}
              <div className="flex items-center gap-6 mt-4">
                <a
                  href={content.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-accent-lime transition-colors"
                >
                  GitHub
                </a>
                <span className="text-white/30">•</span>
                <a
                  href={content.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-accent-lime transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
