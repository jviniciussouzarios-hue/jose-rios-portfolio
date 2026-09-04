import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';
import MagneticButton from '../shared/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero Section — Inspirada exatamente no design UNIFEX visto no vídeo:
 * - Top Offerings (esquerda) & Key Metrics (direita)
 * - Título central com tipografia bold e botão "VIEW PROJECTS"
 * - Statement tipográfico gigante com reveal palavra a palavra via ScrollTrigger
 */
export default function Hero() {
  const { content, language } = useLanguage();
  const heroRef = useRef(null);
  const statementRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.6], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.2]);

  // GSAP Word-by-word scroll reveal para o statement gigante
  useEffect(() => {
    const el = statementRef.current;
    if (!el) return;

    const words = el.querySelectorAll('.statement-word');
    gsap.set(words, { opacity: 0.15 });

    const trigger = gsap.to(words, {
      opacity: 1,
      stagger: 0.04,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top 75%',
        end: 'bottom 45%',
        scrub: 0.8,
      },
    });

    return () => {
      trigger.scrollTrigger?.kill();
    };
  }, [language]);

  const statementWords = content.hero.statementHeadline.split(' ');

  const scrollToWorks = (e) => {
    e.preventDefault();
    const worksEl = document.querySelector('#works');
    worksEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="section-light relative pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-10 overflow-hidden"
      data-section-theme="light"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Hero Row: Offerings (Left) & Metrics (Right) */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16 md:mb-24"
        >
          {/* Left: Offerings checklist */}
          <motion.div
            className="md:col-span-4 space-y-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-[11px] font-bold tracking-widest text-bg-dark uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
              {content.hero.badge}
            </div>
            {content.hero.offerings.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-bg-dark/80">
                <span className="w-4 h-4 rounded-full bg-accent-lime flex items-center justify-center text-[10px] text-bg-dark font-black flex-shrink-0">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Center / Title Callout */}
          <motion.div
            className="md:col-span-5 text-center flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight text-bg-dark leading-tight mb-6">
              <span className="text-outline-dark block">{content.hero.titleLine1}</span>
              <span className="block mt-1">{content.hero.titleLine2}</span>
            </h1>

            <MagneticButton
              href="#works"
              onClick={scrollToWorks}
              className="px-8 py-3.5 rounded-full bg-bg-dark text-white font-bold text-xs uppercase tracking-widest hover:bg-accent-lime hover:text-bg-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {content.hero.viewProjects} ↓
            </MagneticButton>
          </motion.div>

          {/* Right: Key Stats */}
          <motion.div
            className="md:col-span-3 flex flex-col md:items-end gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <span className="font-display text-4xl md:text-5xl lg:text-6xl text-bg-dark leading-none block">
                {content.hero.stats[0].value}
              </span>
              <p className="text-[11px] md:text-xs text-gray-muted uppercase tracking-wider font-semibold mt-1">
                {content.hero.stats[0].label}
              </p>
            </div>
            <div className="pt-2 border-t border-black/10 w-full md:w-auto md:text-right">
              <span className="font-display text-2xl md:text-3xl text-bg-dark block">
                {content.hero.stats[1].value}
              </span>
              <p className="text-[11px] md:text-xs text-gray-muted uppercase tracking-wider font-semibold mt-1">
                {content.hero.stats[1].label}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Big Statement Section with Scroll Reveal */}
        <div ref={statementRef} className="pt-12 md:pt-20 border-t border-black/10">
          <p className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[5rem] uppercase leading-[1.08] tracking-tight text-bg-dark">
            {statementWords.map((word, i) => (
              <span key={`${word}-${i}`} className="statement-word inline-block mr-[0.25em]">
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
