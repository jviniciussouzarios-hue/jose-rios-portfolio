import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Tech Stack & Partners Grid — Inspirado no grid minimalista do vídeo (Frame 19s):
 * - Fundo Light
 * - Grid 4x2 com divisórias sutis
 * - Logos tecnológicos de alta qualidade
 */
const techStack = [
  {
    name: 'Power BI',
    category: 'Analytics & DAX',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor">
        <path d="M18 6h5v20h-5zM11 12h5v14h-5zM4 18h5v8H4z" fill="#F2C811" />
      </svg>
    ),
  },
  {
    name: 'Snowflake',
    category: 'Cloud Data Warehouse',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l1.7 3.5L17 4.2l-1.3 3.7 3.7-1.3-1.3 3.7L22 12l-3.9 1.7 1.3 3.7-3.7-1.3 1.3 3.7-3.3-1.3L12 22l-1.7-3.5L7 19.8l1.3-3.7-3.7 1.3 1.3-3.7L2 12l3.9-1.7L4.6 6.6l3.7 1.3-1.3-3.7 3.3 1.3L12 2z" fill="#29B5E8" />
      </svg>
    ),
  },
  {
    name: 'Python',
    category: 'Automation & Data',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.9 2c-5.1 0-4.8 2.2-4.8 2.2l.01 2.3h4.9v.7H5.2S2 6.8 2 12c0 5.1 2.8 5 2.8 5h1.7v-2.3c0-2.6 2.3-2.6 2.3-2.6h4.8c2.4 0 2.4-2.3 2.4-2.3V4.3C16 2 11.9 2 11.9 2zm-1.4 1.4c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM12.1 22c5.1 0 4.8-2.2 4.8-2.2l-.01-2.3h-4.9v-.7h6.8s3.2.4 3.2-4.8c0-5.1-2.8-5-2.8-5h-1.7v2.3c0 2.6-2.3 2.6-2.3 2.6H10.4c-2.4 0-2.4 2.3-2.4 2.3v2.5c0 2.3 4.1 2.3 4.1 2.3zm1.4-1.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#3776AB" />
      </svg>
    ),
  },
  {
    name: 'PHP 8+',
    category: 'Backend & APIs',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4 13.5l1.2-6h3.1c1.5 0 2.4.7 2.1 2.1-.3 1.6-1.5 2.4-3.1 2.4h-1.4L9 15.5H8zm5.5 0l1.2-6h3.1c1.5 0 2.4.7 2.1 2.1-.3 1.6-1.5 2.4-3.1 2.4h-1.4l-.9 1.5h-1zm-3.6-3.8h.9c.7 0 1.2-.4 1.3-1 .1-.5-.2-.9-.8-.9h-.9l-.5 1.9zm5.5 0h.9c.7 0 1.2-.4 1.3-1 .1-.5-.2-.9-.8-.9h-.9l-.5 1.9z" fill="#777BB4" />
      </svg>
    ),
  },
  {
    name: 'React',
    category: 'Modern Frontend',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <path d="M12 5.5c-4.14 0-7.5 2.91-7.5 6.5s3.36 6.5 7.5 6.5 7.5-2.91 7.5-6.5-3.36-6.5-7.5-6.5zm0 11.5c-3.31 0-6-2.24-6-5s2.69-5 6-5 6 2.24 6 5-2.69 5-6 5z" fill="#61DAFB" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: 'MySQL',
    category: 'Relational DB',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C7 3 3 5.5 3 8.5v7C3 18.5 7 21 12 21s9-2.5 9-5.5v-7C21 5.5 17 3 12 3zm0 2c4.4 0 7 2 7 3.5S16.4 12 12 12s-7-2-7-3.5S7.6 5 12 5z" fill="#4479A1" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    category: 'Containers & DevOps',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.5 10.5c-.3-.2-1.5-.7-2.7-.2-.2-.8-.7-1.5-1.5-1.9-.8-.5-1.8-.4-2.6 0l-.2.1v-2h-3v2h-1v-2H9v2H8v-2H5v2H2.5C1.1 8.5 0 9.6 0 11c0 4.4 3.6 8 8 8h10.5c3 0 5.5-2.5 5.5-5.5 0-1.2-.5-2.2-1.5-3z" fill="#2496ED" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    category: 'ES6+ & Async',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M8.5 17.5c-.8 0-1.4-.3-1.8-.8l1.1-1.3c.3.3.6.5 1 .5.5 0 .8-.2.8-.7V8.5h1.9v6.8c0 1.4-.9 2.2-2.2 2.2zm7.2 0c-1.6 0-2.6-.9-2.6-2.3 0-1.5 1-2.2 2.4-2.7l.6-.2c.5-.2.7-.4.7-.7 0-.4-.3-.6-.8-.6-.6 0-1 .2-1.4.6l-1.1-1.2c.7-.7 1.6-1 2.5-1 1.6 0 2.6.9 2.6 2.3 0 1.4-1 2.1-2.3 2.6l-.6.2c-.5.2-.8.4-.8.8 0 .4.4.6.9.6.6 0 1.1-.3 1.5-.7l1.1 1.2c-.8.8-1.7 1.1-2.7 1.1z" fill="#000000" />
      </svg>
    ),
  },
];

export default function ClientLogos() {
  const { content } = useLanguage();

  return (
    <section
      id="stack"
      className="section-light relative py-20 md:py-28 px-6 md:px-10 bg-[#f7f7f8] text-bg-dark border-t border-black/10 transition-colors duration-700"
      data-section-theme="light"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-gray-muted block mb-2">
            {content.clients.badge}
          </span>
          <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-bg-dark">
            {content.clients.title}
          </h3>
        </div>

        {/* 4x2 Minimal Grid with Thin Dividing Lines */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-black/10 rounded-2xl overflow-hidden bg-white shadow-sm">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="p-6 md:p-8 border border-black/5 flex flex-col items-center justify-center gap-3 text-center group hover:bg-black/[0.02] transition-all duration-300"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="transform transition-transform duration-300 group-hover:scale-115">
                {tech.icon}
              </div>
              <div>
                <span className="font-display text-sm md:text-base text-bg-dark block tracking-wide">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-gray-muted uppercase tracking-wider block mt-0.5">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
