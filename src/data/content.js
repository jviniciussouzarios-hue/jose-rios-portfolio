/* ═══════════════════════════════════════════════
   CONTENT DATA — José Rios Portfolio
   Todo o conteúdo textual centralizado aqui.
   Para alterar textos, edite APENAS este arquivo.
   ═══════════════════════════════════════════════ */

export const personalInfo = {
  fullName: "José Rios",
  roleTitle: "Analista de Transporte Jr & Desenvolvedor",
  tagline: "DEVELOPER & ANALYST",
  email: "jviniciussouzarios@gmail.com",
  linkedin: "https://linkedin.com/in/joserios",
  github: "https://github.com/JViniciusRios",
  credentials: [
    { label: "Six Sigma", sublabel: "Green Belt" },
    { label: "Data & IT", sublabel: "Especialização DNC" },
  ],
  skills: [
    "Power BI",
    "Snowflake SQL",
    "PHP",
    "Python",
    "JavaScript ES6",
    "Power Query",
    "DAX",
    "Power Platform",
  ],
  bioShort:
    "Sou um profissional focado em transformar dados complexos e regras de negócio em soluções digitais simples e eficientes. Com forte base em Gestão de TI e Ciência de Dados, crio desde dashboards analíticos até sistemas web e automações cloud.",
  bioLong:
    "Trabalho ativamente com Power BI, Snowflake SQL, PHP, Python e JavaScript ES6, sempre buscando a melhoria contínua e a eficiência operacional.",
  profileImage: "assets/img/jose_rios_profile.jpg",
  presentationVideo: "assets/video/jose_rios_apresentacao.mp4",
  cvFile: "assets/files/Jose_Rios_CV.pdf",
};

export const navigation = [
  { label: "Início", target: "#home" },
  { label: "Sobre", target: "#about" },
  { label: "Serviços", target: "#services" },
  { label: "Trabalhos", target: "#works" },
  { label: "Contato", target: "#contact" },
];

export const heroData = {
  backgroundWord: "DEVELOPER",
  introText:
    "OLÁ, EU SOU JOSÉ RIOS, ANALISTA DE TRANSPORTE JR E DESENVOLVEDOR.",
  statBadges: [
    { value: "98%", label: "Taxa de Satisfação" },
    { value: "25+", label: "Projetos Entregues" },
  ],
};

export const aboutData = {
  headline:
    "DEDICADO A OTIMIZAR PROCESSOS E CRIAR SOLUÇÕES ATRAVÉS DE DADOS E CÓDIGO. MEU TRABALHO FALA POR SI — EXPLORE OS RESULTADOS.",
  paragraphs: [
    "Sou um profissional focado em transformar dados complexos e regras de negócio em soluções digitais simples e eficientes. Com forte base em Gestão de TI e Ciência de Dados, crio desde dashboards analíticos até sistemas web e automações cloud.",
    "Trabalho ativamente com Power BI, Snowflake SQL, PHP, Python e JavaScript ES6, sempre buscando a melhoria contínua e a eficiência operacional.",
  ],
  experienceStat: {
    value: "10",
    label: "Constante Evolução Profissional",
  },
};

export const servicesData = [
  {
    id: 1,
    title: "DATA ANALYSIS & BI",
    description:
      "Modelagem de dados robusta, Power Query, DAX avançado e dashboards interativos para tomada de decisão.",
    tags: ["POWER BI", "DAX", "POWER QUERY"],
    image: "assets/img/service_data_bi.jpg",
  },
  {
    id: 2,
    title: "WEB & SYSTEMS DEV",
    description:
      "Desenvolvimento e refatoração de aplicações escaláveis em PHP, Python e módulos JS ES6.",
    tags: ["BACKEND", "FRONTEND", "API"],
    image: "assets/img/service_web_dev.jpg",
  },
  {
    id: 3,
    title: "PROCESS AUTOMATION",
    description:
      "Workflows automatizados via Power Platform, gerenciamento de servidores e integrações de API.",
    tags: ["POWER AUTOMATE", "SERVER MGMT", "API"],
    image: "assets/img/service_automation.jpg",
  },
];

export const worksData = [
  {
    id: "01",
    title: "Dashboard Operacional de Veículos (CDNE)",
    category: "Data & BI",
    year: "2026",
    tags: ["DASHBOARD", "POWER BI"],
    details:
      "Sistema de rastreamento de status de veículos para múltiplos centros de distribuição regionais. Foco estritamente operacional e de eficiência.",
    thumbnail: "assets/img/work_cdne_dashboard.jpg",
  },
  {
    id: "02",
    title: "Gestão e Migração de Servidores",
    category: "Web Dev & IT",
    year: "2026",
    tags: ["BACKEND", "DEVOPS"],
    details:
      "Scripts backend para automação de processos, migração de banco de dados e ajustes de layout, coordenados em equipe.",
    thumbnail: "assets/img/work_server_migration.jpg",
  },
];

export const awardsData = [
  {
    index: "01",
    name: "Six Sigma Green Belt",
    category: "Melhoria de Processos",
    year: "2025",
  },
  {
    index: "02",
    name: "Especialização DNC",
    category: "Data & IT",
    year: "2025",
  },
  {
    index: "03",
    name: "Certificação Power BI Avançado",
    category: "Data & BI",
    year: "2024",
  },
  {
    index: "04",
    name: "Reconhecimento Interno - Automação",
    category: "Process Automation",
    year: "2026",
  },
];

export const testimonialsData = [
  {
    name: "Raphael",
    role: "Manager",
    quote:
      "Profissionalismo ímpar no suporte, direcionamento e otimização de nossos processos de transporte.",
    avatar: "assets/img/testimonial_raphael.jpg",
  },
  {
    name: "Bottura",
    role: "Colleague",
    quote:
      "Parceria técnica fundamental nas migrações de servidor e ajustes de layout de banco de dados.",
    avatar: "assets/img/testimonial_bottura.jpg",
  },
];

export const contactData = {
  sectionTitle: "LET'S CREATE",
  email: "jviniciussouzarios@gmail.com",
  linkedin: "https://linkedin.com/in/joserios",
  github: "https://github.com/JViniciusRios",
};

export const footerData = {
  bigName: "JOSÉ RIOS.",
  quickLinks: [
    { label: "Home", target: "#home" },
    { label: "About Me", target: "#about" },
    { label: "Services", target: "#services" },
    { label: "Portfolio", target: "#works" },
    { label: "Contact", target: "#contact" },
  ],
  credit: "JOSÉ RIOS PORTFOLIO",
  copyright: `© ${new Date().getFullYear()} José Rios. All rights reserved.`,
};
