import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import MagneticButton from '../shared/MagneticButton';

/**
 * Contact Section — Redesenhada com canais diretos de alta conversão:
 * - WhatsApp (+55 11 93452-2514) com botão de conversa imediata
 * - E-mail direto (jviniciussouzarios@gmail.com)
 * - LinkedIn com acesso direto ao perfil profissional
 * - GitHub com repositórios
 * - Mini Profile Card de José Rios
 */
export default function Contact() {
  const { content } = useLanguage();
  const contact = content.contact;
  const personal = content.personalInfo;

  return (
    <section
      id="contact"
      className="section-dark relative py-24 md:py-36 bg-[#0a0a0a] text-white transition-colors duration-700"
      data-section-theme="dark"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Headline */}
        <div className="mb-16 md:mb-20 pb-8 border-b border-white/10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent-lime block mb-4">
            {contact.sectionBadge}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[1.08]">
            {contact.title}
            <span className="text-accent-lime">.</span>
          </h2>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info + Mini Profile Card */}
          <div className="lg:col-span-5 space-y-8">
            {/* Status Live */}
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-lime animate-pulse shadow-[0_0_8px_#D6FF3F]" />
              <span className="text-xs font-mono uppercase tracking-wider text-white/80">
                {contact.availableStatus}
              </span>
            </div>

            {/* Headline Note */}
            <p className="text-sm md:text-base text-gray-muted leading-relaxed">
              Fique à vontade para entrar em contato para novas oportunidades, projetos de dados, consultorias em BI ou desenvolvimento de sistemas. Escolha o canal de sua preferência:
            </p>

            {/* Mini Author Profile Card */}
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-5 hover:border-accent-lime/40 transition-colors duration-300">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-800 flex-shrink-0 border border-white/15">
                <img
                  src={personal.profileImage}
                  alt={personal.fullName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.retried) {
                      e.currentTarget.dataset.retried = 'true';
                      e.currentTarget.src = e.currentTarget.src.endsWith('.png')
                        ? e.currentTarget.src.replace('.png', '.jpg')
                        : e.currentTarget.src.replace('.jpg', '.png');
                    }
                  }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-display text-lg text-white tracking-wide truncate">
                  {personal.fullName}
                </p>
                <p className="text-xs text-accent-lime uppercase font-mono tracking-wider truncate mt-0.5">
                  {personal.roleTitle}
                </p>
                <p className="text-xs text-gray-muted truncate mt-1">
                  📍 {personal.location}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Direct Action Cards */}
          <div className="lg:col-span-7 space-y-5">
            {/* 1. WhatsApp Card (Destaque Principal Neon) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-2 border-accent-lime/60 shadow-[0_0_30px_rgba(214,255,63,0.12)] hover:shadow-[0_0_40px_rgba(214,255,63,0.25)] hover:border-accent-lime transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-lime/20 text-accent-lime flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {/* WhatsApp Icon */}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.124.553 4.195 1.604 6.017L.068 23.932l6.046-1.586a11.966 11.966 0 0 0 5.917 1.554h.005c6.645 0 12.03-5.385 12.03-12.031A12.003 12.003 0 0 0 12.031 0zm0 21.99a9.96 9.96 0 0 1-5.08-1.39l-.365-.216-3.774.99.1-3.68-.236-.376A9.97 9.97 0 0 1 2.034 12.03C2.034 6.517 6.518 2.034 12.03 2.034c2.67 0 5.18 1.04 7.07 2.929a9.948 9.948 0 0 1 2.93 7.068c0 5.514-4.485 9.959-9.999 9.959zm5.474-7.487c-.3-.15-1.774-.875-2.05-.975-.274-.1-.474-.15-.674.15-.2.3-.774.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.49-1.282-1.144-1.503-1.637-1.703-1.937-.2-.3-.02-.463.13-.612.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.583-.492-.505-.675-.514l-.575-.01c-.2 0-.525.075-.8.375s-1.05 1.025-1.05 2.5 1.075 2.898 1.225 3.1c.15.2 2.115 3.23 5.125 4.53.716.31 1.275.495 1.71.634.72.228 1.374.196 1.892.118.577-.086 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-display text-lg sm:text-xl text-white block group-hover:text-accent-lime transition-colors">
                      {contact.whatsappCardTitle}
                    </span>
                    <p className="text-xs text-gray-muted mt-0.5">
                      {contact.whatsappCardSubtitle}
                    </p>
                    <p className="text-base sm:text-lg font-mono font-bold text-accent-lime mt-1">
                      {personal.phone}
                    </p>
                  </div>
                </div>

                <a
                  href={personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-accent-lime text-bg-dark font-display text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(214,255,63,0.3)] text-center flex-shrink-0"
                >
                  {contact.whatsappButton} ↗
                </a>
              </div>
            </motion.div>

            {/* 2. E-mail Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/30 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-accent-lime group-hover:text-bg-dark transition-all">
                    {/* Mail Icon */}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-display text-lg text-white block">
                      {contact.emailCardTitle}
                    </span>
                    <p className="text-xs text-gray-muted mt-0.5">
                      {contact.emailCardSubtitle}
                    </p>
                    <p className="text-sm sm:text-base font-mono text-white/90 break-all mt-1">
                      {personal.email}
                    </p>
                  </div>
                </div>

                <a
                  href={`mailto:${personal.email}`}
                  className="px-6 py-3 rounded-full bg-white/10 text-white font-display text-xs uppercase tracking-widest hover:bg-white hover:text-bg-dark transition-all duration-300 text-center flex-shrink-0"
                >
                  {contact.emailButton} ↗
                </a>
              </div>
            </motion.div>

            {/* 3. LinkedIn Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/30 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#0A66C2] group-hover:text-white transition-all">
                    {/* LinkedIn Icon */}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-display text-lg text-white block">
                      {contact.linkedinCardTitle}
                    </span>
                    <p className="text-xs text-gray-muted mt-0.5">
                      {contact.linkedinCardSubtitle}
                    </p>
                    <p className="text-xs font-mono text-gray-muted mt-1">
                      linkedin.com/in/jviniciusrios
                    </p>
                  </div>
                </div>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white/10 text-white font-display text-xs uppercase tracking-widest hover:bg-white hover:text-bg-dark transition-all duration-300 text-center flex-shrink-0"
                >
                  {contact.linkedinButton} ↗
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
