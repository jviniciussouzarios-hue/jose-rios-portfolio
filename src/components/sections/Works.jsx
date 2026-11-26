import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useSmoothScroll } from '../../context/SmoothScrollContext';
import { useCursor } from '../../context/CursorContext';
import { useMediaQuery } from '../../hooks/useScrollUtils';

/**
 * Works Section — Inspirada exatamente no vídeo (Frames 16s & 20s):
 * - Fundo Light com transição marcante
 * - Texto gigante "WORKS" em background
 * - Badge circular "Discover Our Projects >"
 * - Cards com cabeçalho de tags, ícone de seta diagonal e imagem arredondada
 */
const caseStudies = {
  "01": {
    "pt": [
      "Organizar escalas de transporte exige conciliar disponibilidade de pessoas, veículos e restrições de jornada.",
      "Planejamento multi-CD com alocação de recursos, folgas, pernoites, plantões e visualização temporal. Validações impedem combinações incompatíveis e ajudam a identificar capacidade insuficiente.",
      "Backend modular em PHP e persistência MySQL; regras de negócio separadas da interface, cálculo de janelas temporais e validação de vínculos por unidade. Testes de regressão e trilhas de auditoria apoiam mudanças controladas.",
      "Reduzir retrabalho de planejamento e tornar decisões de alocação rastreáveis.",
      [
        "Demanda e recursos",
        "Motor de regras",
        "Escala e auditoria"
      ]
    ],
    "en": [
      "Transport scheduling requires balancing people, vehicles and working-time constraints.",
      "Multi-site planning combines resource allocation, rest periods, overnight routes, standby staff and timeline visualization. Validation identifies incompatible assignments and capacity gaps.",
      "Modular PHP backend and MySQL persistence; business rules separated from presentation, time-window calculations and site-specific assignment checks. Regression tests and audit trails support controlled changes.",
      "Reduce planning rework and make allocation decisions traceable.",
      [
        "Demand and resources",
        "Rules engine",
        "Schedule and audit"
      ]
    ]
  },
  "02": {
    "pt": [
      "Informações distribuídas em diferentes fontes e etapas de consulta aumentavam o tempo necessário para analisar a operação.",
      "Aprimoramento visual dos dashboards, reorganização de KPIs, filtros e alertas, com evolução da camada de dados para facilitar a identificação de desvios e reduzir o tempo de análise. A próxima etapa amplia essas capacidades em uma aplicação web.",
      "Power BI, DAX e SQL na camada analítica, com Snowflake como fonte de dados e revisão de relacionamentos e consultas. A evolução web utiliza React/Vite, PHP e MySQL, com integração direta ao Snowflake planejada, sessões e proteção CSRF.",
      "Redução do tempo de análise operacional, maior clareza visual e acesso mais ágil aos indicadores. Percentuais e tempos internos não são divulgados.",
      [
        "Fontes de dados",
        "Normalização e API",
        "Cockpit operacional"
      ]
    ],
    "en": [
      "Information spread across sources and multiple query steps increased the time needed to analyze operations.",
      "Visual dashboard enhancements, reorganized KPIs, filters and alerts, and improvements to the data layer to identify deviations and reduce analysis time. The next stage extends these capabilities into a web application.",
      "Power BI, DAX and SQL in the analytics layer, with Snowflake as a data source and improvements to relationships and queries. The web evolution uses React/Vite, PHP and MySQL, with planned direct Snowflake integration, sessions and CSRF protection.",
      "Reduced operational analysis time, clearer visuals and faster access to indicators. Internal timings and percentages are not disclosed.",
      [
        "Data sources",
        "Normalization and API",
        "Operational cockpit"
      ]
    ]
  },
  "03": {
    "pt": [
      "Sistemas legados de fretes extras precisam evoluir sem perder funcionalidades utilizadas na operação.",
      "Gestão de registros de frete, ocorrências, cancelamentos, permissões e indicadores de custos e receitas, com modernização progressiva da experiência.",
      "PHP e MySQL com isolamento de persistência, autenticação por sessão, proteção CSRF e validação de operações. A evolução prioriza paridade funcional e testes antes do redesenho completo.",
      "Melhorar rastreabilidade financeira e reduzir riscos de manutenção do legado.",
      [
        "Registros de frete",
        "Validação e persistência",
        "Indicadores financeiros"
      ]
    ],
    "en": [
      "Legacy spot freight systems must evolve without losing operational functionality.",
      "Freight records, incidents, cancellations, permissions and cost/revenue indicators, with progressive experience modernization.",
      "PHP and MySQL with isolated persistence, session authentication, CSRF protection and operation validation. Development prioritizes functional parity and tests before full redesign.",
      "Improve financial traceability and reduce legacy maintenance risks.",
      [
        "Freight records",
        "Validation and storage",
        "Financial indicators"
      ]
    ]
  },
  "04": {
    "pt": [
      "Conhecimento operacional disperso em documentos torna consultas e recuperação de informações mais trabalhosas.",
      "Base de conhecimento em desenvolvimento para organizar documentos e preparar consultas assistidas por inteligência artificial.",
      "Backend PHP e MySQL com perfis de acesso e ingestão de documentos em evolução. A arquitetura pretendida utiliza recuperação de contexto (RAG) e modelos de linguagem locais; a integração completa ainda é objetivo de desenvolvimento.",
      "Facilitar acesso ao conhecimento e preservar controle sobre informações corporativas.",
      [
        "Documentos",
        "Recuperação de contexto",
        "Resposta assistida"
      ]
    ],
    "en": [
      "Operational knowledge scattered across documents makes information retrieval cumbersome.",
      "Knowledge base under development to organize documents and prepare AI-assisted queries.",
      "PHP/MySQL backend with access profiles and evolving document ingestion. The intended architecture uses retrieval-augmented generation (RAG) and local language models; full integration remains a development goal.",
      "Make knowledge easier to access while retaining control over corporate information.",
      [
        "Documents",
        "Context retrieval",
        "Assisted response"
      ]
    ]
  },
  "05": {
    "pt": [
      "Comunicações de jornada baseadas em planilhas exigem conferência manual e controle de mensagens repetidas.",
      "Fluxo de notificações via WhatsApp que filtra registros elegíveis, organiza envios e controla tentativas e reenvios.",
      "Integração OpenWA com dados de planilhas Excel, seleção de registros e controle de duplicidade. A conexão e o envio foram validados em teste; operação em escala exige monitoramento e respeito às regras da plataforma.",
      "Diminuir trabalho repetitivo e melhorar consistência da comunicação.",
      [
        "Planilha de origem",
        "Filtros e controle",
        "Notificação"
      ]
    ],
    "en": [
      "Spreadsheet-based working-time communications require manual checks and duplicate-message control.",
      "WhatsApp notification workflow that filters eligible records, organizes sends and controls attempts and retries.",
      "OpenWA integration with Excel data, record selection and duplicate prevention. Connection and sending were validated in a test; scaled operation requires monitoring and platform compliance.",
      "Reduce repetitive work and improve communication consistency.",
      [
        "Source spreadsheet",
        "Filters and control",
        "Notification"
      ]
    ]
  },
  "06": {
    "pt": [
      "Modernizar infraestrutura exige preservar aplicações e dados durante mudanças de ambiente.",
      "Trabalho de migração e organização de servidores, aplicações web e rotinas de manutenção.",
      "Contexto técnico de Linux, Apache, PHP e bancos relacionais. A abordagem envolve inventário de dependências, preparação do ambiente, backups, validação de aplicações e planejamento de recuperação. Métricas de disponibilidade não são divulgadas.",
      "Apoiar continuidade operacional e manutenção mais previsível.",
      [
        "Inventário e backup",
        "Ambiente de destino",
        "Validação e recuperação"
      ]
    ],
    "en": [
      "Infrastructure modernization requires preserving applications and data during environment changes.",
      "Server and web application migration and maintenance organization.",
      "Technical context includes Linux, Apache, PHP and relational databases. The approach involves dependency inventory, environment preparation, backups, application validation and recovery planning. Availability metrics are not disclosed.",
      "Support operational continuity and more predictable maintenance.",
      [
        "Inventory and backup",
        "Target environment",
        "Validation and recovery"
      ]
    ]
  }
};

function ProjectDetail({ project, language, onClose }) {
  const dialog = useRef(null);
  const { lenis } = useSmoothScroll();
  const pt = language === 'pt';
  const data = caseStudies[project.id][language] || caseStudies[project.id].pt;
  const labels = pt ? ['O desafio','A solução','Arquitetura técnica','Impacto esperado'] : ['The challenge','The solution','Technical architecture','Expected impact'];
  useEffect(() => {
    const node = dialog.current;
    const previous = document.activeElement;
    const scroll = lenis?.current;
    const overflow = document.body.style.overflow;
    node.showModal();
    scroll?.stop();
    document.body.style.overflow = 'hidden';
    return () => { node.close(); document.body.style.overflow = overflow; scroll?.start(); previous?.focus(); };
  }, [lenis]);
  return (
    <dialog ref={dialog} aria-labelledby="project-detail-title" onCancel={e=>{e.preventDefault();onClose();}} onClick={e=>{if(e.target===e.currentTarget)onClose();}} className="fixed inset-0 m-auto w-[calc(100%-1rem)] max-w-4xl max-h-[94dvh] p-0 rounded-3xl bg-[#0a0a0a] text-white backdrop:bg-black/80 overflow-y-auto overscroll-contain" data-lenis-prevent>
      <div className="sticky top-0 z-20 flex items-center justify-between gap-4 px-5 md:px-8 py-4 bg-[#0a0a0a] border-b border-white/10">
        <span className="text-xs font-mono tracking-widest text-accent-lime">{pt?'ESTUDO DE PROJETO':'PROJECT CASE STUDY'} / {project.id}</span>
        <button autoFocus type="button" onClick={onClose} className="rounded-full px-4 py-2 bg-accent-lime text-black font-bold text-sm">{pt?'Fechar':'Close'} ×</button>
      </div>
      <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="p-5 md:p-10">
        <p className="text-xs uppercase tracking-widest text-white/60 mb-3">{project.category}</p>
        <h2 id="project-detail-title" className="font-display text-3xl md:text-5xl mb-5">{project.title}</h2>
        <p className="text-base md:text-lg leading-relaxed text-white/80 mb-6">{project.details}</p>
        <figure className="mb-8"><img src={project.thumbnail} alt={pt?'Ilustração conceitual do projeto':'Conceptual project illustration'} className="w-full rounded-2xl aspect-video object-contain bg-[#142238]"/><figcaption className="text-xs text-white/60 mt-2">{pt?'Imagem ilustrativa, não representa uma tela interna.':'Illustrative image, not an internal screenshot.'}</figcaption></figure>
        <div className="grid md:grid-cols-2 gap-4 mb-8">{labels.map((label,i)=><section key={label} className="rounded-2xl bg-white/5 border border-white/10 p-5"><span className="text-accent-lime text-xs font-mono">0{i+1}</span><h3 className="font-bold text-xl mt-2 mb-3">{label}</h3><p className="text-sm leading-relaxed text-white/80">{data[i]}</p></section>)}</div>
        <section className="rounded-2xl bg-[#182945] p-5 md:p-8 mb-8">
          <h3 className="font-bold text-xl mb-5">{pt?'Fluxo conceitual da solução':'Conceptual solution flow'}</h3>
          <div className="flex flex-col md:flex-row items-stretch gap-3">{data[4].map((step,i)=><div key={step} className="flex-1 flex flex-col md:flex-row items-center gap-3">{i>0&&<span aria-hidden="true" className="text-accent-lime text-xl"><span className="md:hidden">↓</span><span className="hidden md:inline">→</span></span>}<div className="flex-1 w-full rounded-xl border border-white/20 bg-black/20 p-4 text-center"><svg viewBox="0 0 48 48" className="w-12 h-12 mx-auto mb-3" aria-hidden="true"><rect x="6" y="8" width="36" height="32" rx="6" fill="none" stroke="#d6ff3f" strokeWidth="2"/>{i===0?<path d="M13 16h22M13 24h22M13 32h15" stroke="#d6ff3f" strokeWidth="3"/>:i===1?<path d="M13 24h22M24 13v22" stroke="#d6ff3f" strokeWidth="3"/>:<path d="m13 28 8 7 14-20" fill="none" stroke="#d6ff3f" strokeWidth="3"/>}</svg><span className="text-sm font-bold">{step}</span></div></div>)}</div>
        </section>
        <h3 className="font-bold text-xl mb-3">{pt?'Tecnologias e competências':'Technologies and skills'}</h3>
        <div className="flex flex-wrap gap-2 mb-8">{project.tags.map(tag=><span key={tag} className="rounded-full border border-white/20 px-3 py-2 text-xs">{tag}</span>)}</div>
        <p className="text-xs leading-relaxed text-white/60 border-t border-white/10 pt-4">{pt?'Apresentação pública em nível conceitual. Não inclui código proprietário, dados operacionais, credenciais ou endereços internos.':'Public conceptual presentation. No proprietary code, operational data, credentials or internal addresses are included.'}</p>
      </motion.div>
    </dialog>
  );
}

export default function Works() {
  const { content, language } = useLanguage();
  const [selected, setSelected] = useState(null);
  const project = content.works.items.find(item => item.id === selected);
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
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={(language === 'pt' ? 'Ver detalhes: ' : 'View details: ') + project.title}
              onClick={() => { setCursorVariant('default'); setSelected(project.id); }}
              onKeyDown={e => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setCursorVariant('default'); setSelected(project.id); } }}
              className="cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-black bg-white rounded-3xl p-6 md:p-7 border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
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
      {project && <ProjectDetail project={project} language={language} onClose={() => setSelected(null)} />}
    </section>
  );
}
