/* ═══════════════════════════════════════════════
   BILINGUAL TRANSLATIONS — José Rios Portfolio
   Português (PT-BR) & English (EN)
   ═══════════════════════════════════════════════ */


// Original conceptual illustrations; no internal screenshots or operational data.
function projectIllustration(kind) {
  const ink = '#a8b8cf', lime = '#d6ff3f', blue = '#263c61';
  const rect = (x,y,w,h,fill=blue,rx=7) => '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+rx+'" fill="'+fill+'"/>';
  const line = (x,y,w) => rect(x,y,w,5,ink,2);
  let art = '';
  if (kind === 'schedule') {
    for(let i=0;i<6;i++){art+=line(120,100+i*39,65); for(let j=0;j<8;j++)art+=rect(210+j*46,89+i*39,40,28,(i+j)%5===0?lime:blue,4);}
  } else if(kind==='tower'){
    art+= '<path d="M135 275 L210 155 L300 230 L405 115 L515 245" fill="none" stroke="'+lime+'" stroke-width="5" stroke-dasharray="9 7"/>';
    for(const [x,y] of [[135,275],[210,155],[300,230],[405,115],[515,245]])art+='<circle cx="'+x+'" cy="'+y+'" r="11" fill="'+lime+'"/>';
    art+=rect(120,315,440,25);
  } else if(kind==='freight'){
    for(let i=0;i<6;i++)art+=rect(135+i*70,310-[85,130,105,190,155,215][i],43,[85,130,105,190,155,215][i],i===5?lime:blue);
  } else if(kind==='flow'){
    for(let i=0;i<3;i++){art+=rect(120,90+i*78,170,58);art+=line(140,110+i*78,100);art+=line(140,124+i*78,65);}
    art+='<path d="M290 120 L390 205 M290 198 L390 205 M290 276 L390 205" stroke="'+ink+'" stroke-width="3"/><circle cx="430" cy="205" r="58" fill="'+lime+'"/><path d="M405 205h50m-25-25v50" stroke="#142238" stroke-width="5"/>';
  } else if(kind==='pallet'){
    for(let i=0;i<3;i++)for(let j=0;j<3;j++){art+=rect(145+j*125,85+i*75,105,62,(i+j)%3===0?lime:blue);art+=rect(151+j*125,140+i*75,93,5,ink,2);}
  } else {
    for(let i=0;i<4;i++){art+=rect(130+(i%2)*100,85+i*60,280,45,i%2?blue:lime,12);art+=rect(150+(i%2)*100,103+i*60,170,5,i%2?ink:'#263c61',2);}
  }
  const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"><rect width="640" height="400" fill="#101b30"/>'+rect(30,25,580,350,'#182945',15)+rect(48,43,544,24,'#263c61')+rect(48,82,45,270,'#101b30')+art+'<text x="320" y="365" text-anchor="middle" font-family="sans-serif" font-size="10" letter-spacing="2" fill="#a8b8cf">CONCEPT ILLUSTRATION</text></svg>';
  return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
}

export const translations = {
  pt: {
    meta: {
      title: "José Rios | Analista de Transporte Pleno & Desenvolvedor",
      description: "Portfólio profissional de José Rios — Analista de Transporte Pleno na Martin Brower, Cientista de Dados, Especialista em SQL, Snowflake, Python, PHP, Power BI e Six Sigma Green Belt.",
    },
    personalInfo: {
      fullName: "José Rios",
      fullNameExtended: "José Vinicius de Souza Rios",
      roleTitle: "Analista de Transporte Pleno & Desenvolvedor",
      tagline: "DATA SCIENCE & SOFTWARE DEV",
      email: "jviniciussouzarios@gmail.com",
      phone: "+55 (11) 93452-2514",
      whatsappNumber: "5511934522514",
      whatsappUrl: "https://wa.me/5511934522514?text=Ol%C3%A1%20Jos%C3%A9%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!",
      location: "São Paulo, Brasil",
      linkedin: "https://linkedin.com/in/jviniciusrios",
      github: "https://github.com/jviniciussouzarios-hue",
      profileImage: "assets/img/jose_rios_profile.png",
      cvFile: "assets/files/Jose_Rios_CV.pdf",
    },
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      works: "Trabalhos",
      recognition: "Certificações",
      contact: "Contato",
      downloadCv: "DOWNLOAD CV",
    },
    hero: {
      offerings: [
        "SQL, Snowflake & Bancos de Dados",
        "Python, Ciência de Dados & ML",
        "Desenvolvimento PHP & Power BI / DAX",
      ],
      stats: [
        { value: "7+", label: "Anos de Experiência" },
      ],
      badge: "DISPONÍVEL PARA PROJETOS & PARCERIAS",
      titleLine1: "DADOS, TECNOLOGIA & OPERAÇÕES",
      titleLine2: "SOLUÇÕES PARA RESULTADOS REAIS.",
      viewProjects: "VER PROJETOS",
      statementHeadline:
        "ANALISTA DE TRANSPORTE PLENO NA MARTIN BROWER E CIENTISTA DE DADOS COM MAIS DE 7 ANOS DE TRAJETÓRIA. UNINDO SQL, SNOWFLAKE, PYTHON, PHP E SIX SIGMA GREEN BELT PARA RESOLVER DESAFIOS LOGÍSTICOS E OPERACIONAIS REAIS.",
    },
    about: {
      sectionBadge: "QUEM SOU",
      title: "SOBRE MIM",
      paragraphs: [
        "Minha trajetória profissional de mais de 7 anos é marcada pela evolução constante e pela busca incessante por eficiência operacional. Iniciei minha carreira como jovem aprendiz nas áreas financeira e de qualidade, atuei no Grupo Carrefour em prevenção de perdas e análises com relatórios executivos, e hoje atuo como Analista de Transporte Pleno na Martin Brower, aplicando tecnologia para solucionar desafios logísticos de alta complexidade.",
        "Cientista de Dados formado pela Escola DNC, graduando em Gestão em Tecnologia da Informação e certificado Six Sigma Green Belt (Six Sigma Academy Amsterdam). Possuo domínio prático no ecossistema completo de dados: consultas avançadas em SQL, modelagem relacional, Snowflake Data Cloud, análise estatística com Python (Pandas), além de Power Platform (Power BI, PowerApps, PowerAutomate) e desenvolvimento de sistemas corporativos modulares em PHP.",
        "Sou movido por construir soluções que unem o melhor da tecnologia com o impacto financeiro e operacional do negócio: desde a engenharia de dados e queries otimizadas sem gargalos, até painéis de BI em tempo real e automações autônomas que erradicam processos manuais repetitivos.",
      ],
      experienceStat: {
        value: "7",
        unit: "+",
        label: "Anos de Trajetória e Evolução Profissional",
      },
      skillsTitle: "STACK DE COMPETÊNCIAS",
      skills: [
        "SQL & Modelagem de Dados",
        "Snowflake Data Cloud",
        "Python (Pandas / Stats)",
        "PHP (Backend & Web)",
        "Power BI & DAX Avançado",
        "Bancos de Dados & MySQL",
        "Six Sigma Green Belt",
        "Machine Learning (DNC)",
        "Power Platform (Apps / Automate)",
        "Google Cloud & Gen AI",
        "Logística & Transporte (Martin Brower)",
        "Git & CI/CD",
        "React & Vite",
        "TDD & Arquitetura de Software",
        "Integração de APIs & Automação",
        "RAG & Engenharia de Conhecimento",
      ],
    },
    services: {
      sectionBadge: "ESPECIALIDADES",
      title: "SERVICES",
      subtitle: "Competências aplicadas à eficiência do negócio",
      items: [
        {
          id: "01",
          title: "BANCO DE DADOS, SQL & SNOWFLAKE",
          subtags: ["+ SNOWFLAKE DATA CLOUD", "+ SQL / MYSQL", "+ PIPELINES & ETL"],
          description:
            "Modelagem relacional e dimensional, queries analíticas otimizadas de alta performance, data warehouses e integração de bases para garantir velocidade, integridade e governança.",
          image: "assets/img/service_data_bi.jpg",
        },
        {
          id: "02",
          title: "CIÊNCIA DE DADOS & PYTHON",
          subtags: ["+ PYTHON & PANDAS", "+ MACHINE LEARNING", "+ ANÁLISE ESTATÍSTICA"],
          description:
            "Limpeza e tratamento de dados complexos (wrangling), modelos de clusterização, regressão e classificação, além de automações com scripts Python para redução de esforço manual.",
          image: "assets/img/service_web_dev.jpg",
        },
        {
          id: "03",
          title: "DESENVOLVIMENTO PHP, POWER BI & PROCESSOS",
          subtags: ["+ PHP MODULAR / ES6", "+ POWER BI / DAX", "+ SIX SIGMA GREEN BELT"],
          description:
            "Criação de sistemas e portais web com PHP modular, dashboards executivos para acompanhamento de KPIs logísticos e aplicação de metodologias de melhoria contínua de processos.",
          image: "assets/img/service_automation.jpg",
        },
      ],
    },
    works: {
      sectionBadge: "PORTFÓLIO",
      giantWord: "WORKS",
      discoverBadge: "Projetos em Destaque",
      items: [
        {
          id: "01",
          title: "MBEscala",
          category: "Planejamento logístico",
          tags: ["PHP","MYSQL","JAVASCRIPT","TDD"],
          details: "Cockpit multi-CD para planejamento de escalas, alocação de motoristas e veículos, gestão de folgas e validação de jornadas. Integra regras operacionais, auditoria e testes automatizados.",
          thumbnail: projectIllustration("schedule"),
          link: "#",
        },
        {
          id: "02",
          title: "MBControlTower 2.0",
          category: "Engenharia de dados",
          tags: ["REACT","PHP","MYSQL","POWER BI","SNOWFLAKE"],
          details: "Plataforma em desenvolvimento que transforma painéis de transporte em um sistema operacional web, centralizando informações de rotas, entregas e alertas. Integração com Snowflake prevista na evolução do projeto.",
          thumbnail: projectIllustration("tower"),
          link: "#",
        },
        {
          id: "03",
          title: "MBFreteSpot",
          category: "Modernização de sistemas",
          tags: ["PHP","MYSQL","JAVASCRIPT","CSRF"],
          details: "Modernização de uma aplicação legada de fretes extras, com gestão de registros, ocorrências, permissões e indicadores de custos e receitas. Evolução em andamento com foco em segurança e paridade funcional.",
          thumbnail: projectIllustration("freight"),
          link: "#",
        },
        {
          id: "04",
          title: "MB Flow",
          category: "Inteligência artificial",
          tags: ["PHP","MYSQL","RAG","LLM"],
          details: "Plataforma em desenvolvimento para centralizar conhecimento operacional e documentos. Arquitetura preparada para consultas assistidas por IA, com modelos locais e recuperação de informações como objetivos de evolução.",
          thumbnail: projectIllustration("flow"),
          link: "#",
        },
        {
          id: "05",
          title: "MBFimDeJornada",
          category: "Automação operacional",
          tags: ["OPENWA","EXCEL","API"],
          details: "Automação de notificações operacionais via WhatsApp a partir de planilhas, com filtros de elegibilidade e controle de reenvios. Integração validada em teste de envio.",
          thumbnail: projectIllustration("message"),
          link: "#",
        },
        {
          id: "06",
          title: "Migração & Infraestrutura de Servidores",
          category: "DevOps & Cloud",
          tags: ["BACKEND", "LINUX", "APACHE / PHP"],
          details:
            "Modernização estrutural completa de servidores de produção, migração de bases relacionais sem downtime e automação de rotinas de backup criptografado.",
          thumbnail: "assets/img/work_server_migration.jpg",
          link: "#",
        },
      ],
    },
    recognition: {
      sectionBadge: "CERTIFICAÇÕES & CREDENCIAIS",
      title: "CERTIFICATIONS",
      subtitle: "Licenças Oficiais & Competências Chave",
      tableHeaders: {
        number: "Nº",
        institution: "Instituição / Emissor",
        role: "Certificação / Credencial",
        year: "Ano",
      },
      items: [
        {
          index: "01",
          institution: "Escola DNC",
          role: "Cientista de Dados (Big Data, Python & ML)",
          year: "2026",
          image: "assets/img/service_data_bi.jpg",
        },
        {
          index: "02",
          institution: "Six Sigma Academy Amsterdam",
          role: "Certificação Lean Six Sigma Green Belt",
          year: "2024",
          image: "assets/img/service_automation.jpg",
        },
        {
          index: "03",
          institution: "Google Cloud Skills Boost",
          role: "Large Language Models & Generative AI",
          year: "2025",
          image: "assets/img/work_cdne_dashboard.jpg",
        },
        {
          index: "04",
          institution: "Google",
          role: "Project Execution & Foundations of PM",
          year: "2026",
          image: "assets/img/work_server_migration.jpg",
        },
        {
          index: "05",
          institution: "Escola DNC",
          role: "Clusterização, Classificação & Regressão em ML",
          year: "2026",
          image: "assets/img/service_web_dev.jpg",
        },
        {
          index: "06",
          institution: "Udemy / Escola DNC",
          role: "Power BI Avançado & Análise com SQL",
          year: "2024/2025",
          image: "assets/img/service_data_bi.jpg",
        },
      ],
    },
    clients: {
      badge: "STACK & TECNOLOGIAS",
      title: "Ferramentas & Tecnologias Aplicadas",
    },
    contact: {
      sectionBadge: "VAMOS CONVERSAR",
      title: "VAMOS CONVERSAR DIRETAMENTE",
      availableStatus: "Disponível para projetos e parcerias profissionais",
      emailLabel: "E-MAIL DIRETO",
      phoneLabel: "WHATSAPP & TELEFONE",
      socialLabel: "REDE PROFISSIONAL",
      whatsappCardTitle: "WhatsApp",
      whatsappCardSubtitle: "Conversa direta e resposta ágil",
      whatsappButton: "CONVERSAR NO WHATSAPP",
      emailCardTitle: "E-mail Profissional",
      emailCardSubtitle: "Propostas, projetos e parcerias",
      emailButton: "ENVIAR E-MAIL",
      linkedinCardTitle: "LinkedIn",
      linkedinCardSubtitle: "Conexões profissionais e histórico",
      linkedinButton: "CONECTAR NO LINKEDIN",
      githubCardTitle: "GitHub",
      githubCardSubtitle: "Repositórios e códigos-fonte",
      githubButton: "VER PERFIL GITHUB",
    },
    footer: {
      bigName: "JOSÉ RIOS.",
      quickLinks: [
        { label: "Início", target: "#home" },
        { label: "Sobre", target: "#about" },
        { label: "Serviços", target: "#services" },
        { label: "Trabalhos", target: "#works" },
        { label: "Certificações", target: "#recognition" },
        { label: "Contato", target: "#contact" },
      ],
      copyright: `© ${new Date().getFullYear()} José Rios. Todos os direitos reservados.`,
      backToTop: "Voltar ao topo",
    },
  },

  en: {
    meta: {
      title: "José Rios | Transport Analyst & Software/Data Developer",
      description: "Professional portfolio of José Rios — Mid-level Transport Analyst at Martin Brower, Data Scientist, SQL & Snowflake Specialist, Python, PHP, Power BI, and Six Sigma Green Belt.",
    },
    personalInfo: {
      fullName: "José Rios",
      fullNameExtended: "José Vinicius de Souza Rios",
      roleTitle: "Transportation Analyst & Developer",
      tagline: "DATA SCIENCE & SOFTWARE DEV",
      email: "jviniciussouzarios@gmail.com",
      phone: "+55 (11) 93452-2514",
      whatsappNumber: "5511934522514",
      whatsappUrl: "https://wa.me/5511934522514?text=Hello%20Jose%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
      location: "São Paulo, Brazil",
      linkedin: "https://linkedin.com/in/jviniciusrios",
      github: "https://github.com/jviniciussouzarios-hue",
      profileImage: "assets/img/jose_rios_profile.png",
      cvFile: "assets/files/Jose_Rios_CV.pdf",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      works: "Works",
      recognition: "Certifications",
      contact: "Contact",
      downloadCv: "DOWNLOAD CV",
    },
    hero: {
      offerings: [
        "SQL, Snowflake & Databases",
        "Python, Data Science & ML",
        "PHP Web Dev & Power BI / DAX",
      ],
      stats: [
        { value: "7+", label: "Years of Experience" },
      ],
      badge: "AVAILABLE FOR WORK & PARTNERSHIPS",
      titleLine1: "DATA, SOFTWARE & OPERATIONS",
      titleLine2: "SOLUTIONS FOR MEASURABLE IMPACT.",
      viewProjects: "VIEW PROJECTS",
      statementHeadline:
        "LOGISTICS TRANSPORTATION ANALYST AT MARTIN BROWER & DATA SCIENTIST WITH OVER 7 YEARS OF EXPERIENCE. SPECIALIZED IN SQL, SNOWFLAKE, PYTHON, PHP, ADVANCED POWER BI, AND SIX SIGMA GREEN BELT, BRIDGING COMPLEX DATA INTO STRATEGIC OPERATIONAL WINS.",
    },
    about: {
      sectionBadge: "ABOUT ME",
      title: "ABOUT ME",
      paragraphs: [
        "My 7+ years professional career is defined by continuous growth and a relentless drive for operational efficiency. Starting as a financial and quality apprentice, advancing through Carrefour Group in loss prevention and analytics, I currently work as a Mid-level Transportation Analyst at Martin Brower, applying data intelligence to tackle complex supply chain and logistics challenges.",
        "Certified Data Scientist by Escola DNC, pursuing a degree in Information Technology Management, and Six Sigma Green Belt certified (Six Sigma Academy Amsterdam). I bring practical mastery in hands-on enterprise technologies: advanced SQL queries, relational modeling, Snowflake Data Cloud, statistical analysis with Python (Pandas), along with Power Platform (Power BI, PowerApps, PowerAutomate) and modular backend PHP systems.",
        "I am passionate about building robust systems that link engineering with measurable business performance: from scalable relational databases and zero-bottleneck ETL pipelines in Snowflake/MySQL, to modular PHP web systems and real-time executive Power BI dashboards driving swift decision making.",
      ],
      experienceStat: {
        value: "7",
        unit: "+",
        label: "Years of Experience and Continuous Growth",
      },
      skillsTitle: "CORE COMPETENCIES",
      skills: [
        "SQL & Data Modeling",
        "Snowflake Data Cloud",
        "Python (Pandas / Stats)",
        "PHP (Backend & Web)",
        "Power BI & Advanced DAX",
        "Databases & MySQL",
        "Six Sigma Green Belt",
        "Machine Learning (DNC)",
        "Power Platform (Apps / Automate)",
        "Google Cloud & Gen AI",
        "Logistics & Transport (Martin Brower)",
        "Git & CI/CD",
        "React & Vite",
        "TDD & Software Architecture",
        "API Integration & Automation",
        "RAG & Knowledge Engineering",
      ],
    },
    services: {
      sectionBadge: "EXPERTISE",
      title: "SERVICES",
      subtitle: "Technical competencies delivering business impact",
      items: [
        {
          id: "01",
          title: "DATABASES, SQL & SNOWFLAKE",
          subtags: ["+ SNOWFLAKE DATA CLOUD", "+ SQL / MYSQL", "+ PIPELINES & ETL"],
          description:
            "Relational and dimensional modeling, high-performance analytical queries, scalable cloud data warehouses, and automated ETL pipelines ensuring integrity, security, and velocity.",
          image: "assets/img/service_data_bi.jpg",
        },
        {
          id: "02",
          title: "DATA SCIENCE & PYTHON",
          subtags: ["+ PYTHON & PANDAS", "+ MACHINE LEARNING", "+ STATISTICAL ANALYSIS"],
          description:
            "End-to-end processing of complex raw datasets (wrangling), clustering, classification and regression predictive models, and Python scripts eliminating repetitive overhead.",
          image: "assets/img/service_web_dev.jpg",
        },
        {
          id: "03",
          title: "PHP DEVELOPMENT, POWER BI & PROCESSES",
          subtags: ["+ MODULAR PHP / ES6", "+ POWER BI / DAX", "+ SIX SIGMA GREEN BELT"],
          description:
            "Architecture of custom web portals in modular PHP, executive KPI tracking dashboards with optimized DAX formulas, and process optimization driven by Six Sigma methodologies.",
          image: "assets/img/service_automation.jpg",
        },
      ],
    },
    works: {
      sectionBadge: "PORTFOLIO",
      giantWord: "WORKS",
      discoverBadge: "Featured Projects",
      items: [
        {
          id: "01",
          title: "MBEscala",
          category: "Logistics planning",
          tags: ["PHP","MYSQL","JAVASCRIPT","TDD"],
          details: "Multi-site scheduling cockpit for driver and vehicle allocation, rest periods and working-hour validation, combining business rules, auditing and automated tests.",
          thumbnail: projectIllustration("schedule"),
          link: "#",
        },
        {
          id: "02",
          title: "MBControlTower 2.0",
          category: "Data engineering",
          tags: ["REACT","PHP","MYSQL","POWER BI","SNOWFLAKE"],
          details: "Web platform under development that turns transportation dashboards into an operational system for routes, deliveries and alerts. Snowflake integration is planned as the project evolves.",
          thumbnail: projectIllustration("tower"),
          link: "#",
        },
        {
          id: "03",
          title: "MBFreteSpot",
          category: "Legacy modernization",
          tags: ["PHP","MYSQL","JAVASCRIPT","CSRF"],
          details: "Ongoing modernization of a legacy spot freight application, covering records, incidents, permissions, cost and revenue indicators, with emphasis on security and functional parity.",
          thumbnail: projectIllustration("freight"),
          link: "#",
        },
        {
          id: "04",
          title: "MB Flow",
          category: "Artificial intelligence",
          tags: ["PHP","MYSQL","RAG","LLM"],
          details: "Knowledge platform under development for operational documents, designed toward AI-assisted queries, local language models and retrieval-augmented generation.",
          thumbnail: projectIllustration("flow"),
          link: "#",
        },
        {
          id: "05",
          title: "MBFimDeJornada",
          category: "Operational automation",
          tags: ["OPENWA","EXCEL","API"],
          details: "WhatsApp operational notification automation using spreadsheets, eligibility filters and duplicate-send controls. Messaging integration validated in a send test.",
          thumbnail: projectIllustration("message"),
          link: "#",
        },
        {
          id: "06",
          title: "Server Migration & Infrastructure DevOps",
          category: "DevOps & Cloud",
          tags: ["BACKEND", "LINUX", "APACHE / PHP"],
          details:
            "Complete modernization of mission-critical production servers, zero-downtime database migration, and automated encrypted backup routines.",
          thumbnail: "assets/img/work_server_migration.jpg",
          link: "#",
        },
      ],
    },
    recognition: {
      sectionBadge: "CERTIFICATIONS & CREDENTIALS",
      title: "CERTIFICATIONS",
      subtitle: "Official Licenses & Core Competencies",
      tableHeaders: {
        number: "No.",
        institution: "Issuing Organization",
        role: "Certification / Credential",
        year: "Year",
      },
      items: [
        {
          index: "01",
          institution: "Escola DNC",
          role: "Data Scientist (Big Data, Python & ML)",
          year: "2026",
          image: "assets/img/service_data_bi.jpg",
        },
        {
          index: "02",
          institution: "Six Sigma Academy Amsterdam",
          role: "Lean Six Sigma Green Belt Certification",
          year: "2024",
          image: "assets/img/service_automation.jpg",
        },
        {
          index: "03",
          institution: "Google Cloud Skills Boost",
          role: "Large Language Models & Generative AI",
          year: "2025",
          image: "assets/img/work_cdne_dashboard.jpg",
        },
        {
          index: "04",
          institution: "Google",
          role: "Project Execution & Foundations of PM",
          year: "2026",
          image: "assets/img/work_server_migration.jpg",
        },
        {
          index: "05",
          institution: "Escola DNC",
          role: "Clustering, Classification & Regression in ML",
          year: "2026",
          image: "assets/img/service_web_dev.jpg",
        },
        {
          index: "06",
          institution: "Udemy / Escola DNC",
          role: "Advanced Power BI & SQL Analytics",
          year: "2024/2025",
          image: "assets/img/service_data_bi.jpg",
        },
      ],
    },
    clients: {
      badge: "TECH STACK",
      title: "Applied Tools & Engineering Stack",
    },
    contact: {
      sectionBadge: "GET IN TOUCH",
      title: "LET'S CONNECT DIRECTLY",
      availableStatus: "Available for projects and professional collaborations",
      emailLabel: "DIRECT EMAIL",
      phoneLabel: "WHATSAPP & PHONE",
      socialLabel: "PROFESSIONAL NETWORK",
      whatsappCardTitle: "WhatsApp",
      whatsappCardSubtitle: "Instant message & quick response",
      whatsappButton: "CHAT ON WHATSAPP",
      emailCardTitle: "Business Email",
      emailCardSubtitle: "Proposals, projects and partnerships",
      emailButton: "SEND DIRECT EMAIL",
      linkedinCardTitle: "LinkedIn",
      linkedinCardSubtitle: "Professional networking and background",
      linkedinButton: "CONNECT ON LINKEDIN",
      githubCardTitle: "GitHub",
      githubCardSubtitle: "Repositories and open-source code",
      githubButton: "VIEW GITHUB PROFILE",
    },
    footer: {
      bigName: "JOSÉ RIOS.",
      quickLinks: [
        { label: "Home", target: "#home" },
        { label: "About", target: "#about" },
        { label: "Services", target: "#services" },
        { label: "Works", target: "#works" },
        { label: "Certifications", target: "#recognition" },
        { label: "Contact", target: "#contact" },
      ],
      copyright: `© ${new Date().getFullYear()} José Rios. All rights reserved.`,
      backToTop: "Back to top",
    },
  },
};
