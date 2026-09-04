import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import MagneticButton from '../shared/MagneticButton';

/**
 * Contact Section — Inspirada exatamente no vídeo (Frames 20s-26s):
 * - Fundo Dark profundo (#0a0a0a)
 * - Título gigante "LET'S CREATE SOMETHING MEANINGFUL"
 * - Coluna Esquerda: Contato direto + Mini Author Card com foto e links sociais
 * - Coluna Direita: Formulário de contato minimalista com botão neon lime largo "SUBMIT MESSAGE"
 */
export default function Contact() {
  const { content } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('submitting');
    // Simulação de envio ou integração
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="section-dark relative py-24 md:py-36 bg-[#0a0a0a] text-white transition-colors duration-700"
      data-section-theme="dark"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Headline */}
        <div className="mb-16 md:mb-24 pb-8 border-b border-white/10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent-lime block mb-4">
            {content.contact.sectionBadge}
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[1.05]">
            {content.contact.title}
            <span className="text-accent-lime">.</span>
          </h2>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Direct Info + Mini Profile Card */}
          <div className="lg:col-span-5 space-y-10">
            {/* Status Live */}
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-lime animate-pulse shadow-[0_0_8px_#D6FF3F]" />
              <span className="text-xs font-mono uppercase tracking-wider text-white/80">
                {content.contact.availableStatus}
              </span>
            </div>

            {/* Direct Contacts */}
            <div className="space-y-6">
              <div>
                <p className="text-[11px] font-mono text-gray-muted uppercase tracking-widest mb-1.5">
                  {content.contact.emailLabel}
                </p>
                <a
                  href={`mailto:${content.personalInfo.email}`}
                  className="text-lg sm:text-xl md:text-2xl font-display text-white hover:text-accent-lime transition-colors duration-300 break-all"
                >
                  {content.personalInfo.email}
                </a>
              </div>

              <div>
                <p className="text-[11px] font-mono text-gray-muted uppercase tracking-widest mb-1.5">
                  {content.contact.phoneLabel}
                </p>
                <a
                  href="https://wa.me/5511987654321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-display text-white hover:text-accent-lime transition-colors duration-300"
                >
                  {content.personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Mini Author Profile Card (As seen in Frame 26s) */}
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-5">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-800 flex-shrink-0 border border-white/15">
                <img
                  src={content.personalInfo.profileImage}
                  alt={content.personalInfo.fullName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-display text-base text-white tracking-wide truncate">
                  {content.personalInfo.fullName}
                </p>
                <p className="text-xs text-gray-muted truncate mt-0.5">
                  {content.personalInfo.roleTitle}
                </p>

                {/* Social Icon Pills */}
                <div className="flex items-center gap-2 mt-3">
                  <a
                    href={content.personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-accent-lime hover:text-bg-dark text-white/80 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={content.personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-accent-lime hover:text-bg-dark text-white/80 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${content.personalInfo.email}`}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-accent-lime hover:text-bg-dark text-white/80 transition-all duration-300"
                    aria-label="Email"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-[11px] font-mono text-gray-muted uppercase tracking-wider mb-2">
                  {content.contact.formNamePlaceholder}
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white text-base focus:outline-none focus:border-accent-lime transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-muted uppercase tracking-wider mb-2">
                  {content.contact.formEmailPlaceholder}
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white text-base focus:outline-none focus:border-accent-lime transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-muted uppercase tracking-wider mb-2">
                  {content.contact.formMessagePlaceholder}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="..."
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white text-base focus:outline-none focus:border-accent-lime transition-colors resize-none"
                />
              </div>

              {/* Submit Message Neon Lime Button (Signature from Frame 26s) */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 md:py-5 rounded-full bg-accent-lime text-bg-dark font-display text-sm md:text-base uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(214,255,63,0.3)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)] disabled:opacity-50 cursor-pointer"
              >
                {status === 'submitting'
                  ? content.contact.submitting
                  : content.contact.submitButton}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-semibold text-accent-lime text-center"
                >
                  ✓ {content.contact.successMessage}
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
