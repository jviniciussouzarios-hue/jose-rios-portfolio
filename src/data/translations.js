/* ═══════════════════════════════════════════════
   BILINGUAL TRANSLATIONS — José Rios Portfolio
   Português (PT-BR) & English (EN)
   ═══════════════════════════════════════════════ */

export const translations = {
  pt: {
    meta: {
      title: "José Rios | Desenvolvedor & Analista de Dados",
      description: "Portfólio interativo de José Rios — Desenvolvedor Fullstack, Especialista em Power BI, Snowflake e Automação.",
    },
    personalInfo: {
      fullName: "José Rios",
      roleTitle: "Analista de Transporte Jr & Desenvolvedor",
      tagline: "DEVELOPER & ANALYST",
      email: "jviniciussouzarios@gmail.com",
      phone: "+55 (11) 98765-4321",
      location: "São Paulo, Brasil",
      linkedin: "https://linkedin.com/in/joserios",
      github: "https://github.com/JViniciusRios",
      profileImage: "assets/img/jose_rios_profile.jpg",
      cvFile: "assets/files/Jose_Rios_CV.pdf",
    },
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      works: "Trabalhos",
      recognition: "Reconhecimento",
      contact: "Contato",
      downloadCv: "DOWNLOAD CV",
    },
    hero: {
      offerings: [
        "Estratégia & Arquitetura",
        "Business Intelligence & BI",
        "Desenvolvimento Web & Sistemas",
      ],
      stats: [
        { value: "10+", label: "Anos de Exp. Total" },
        { value: "99.9%", label: "Uptime & Confiabilidade" },
        { value: "98%", label: "Taxa de Satisfação" },
        { value: "25+", label: "Projetos Entregues" },
      ],
      badge: "DISPONÍVEL PARA PROJETOS",
      titleLine1: "TRANSFORMANDO DADOS & CÓDIGO",
      titleLine2: "EM SOLUÇÕES DE IMPACTO.",
      viewProjects: "VER PROJETOS",
      statementHeadline:
        "DEDICADO A TRANSFORMAR SUA VISÃO EM REALIDADE, CRIANDO EXPERIÊNCIAS DIGITAIS ÚNICAS, ALTAMENTE ESTÉTICAS E DE ALTO IMPACTO. MEU TRABALHO FALA MAIS ALTO QUE PALAVRAS — EXPLORE OS RESULTADOS.",
    },
    about: {
      sectionBadge: "QUEM SOU",
      title: "SOBRE MIM",
      paragraphs: [
        "Sou um profissional focado em transformar dados complexos e regras de negócio em soluções digitais simples, eficientes e de alto desempenho. Com sólida experiência analítica e técnica, atuo na intersecção entre inteligência de dados e engenharia de software.",
        "Com um olhar atento a arquitetura de sistemas e metodologias ágeis, transformo desafios operacionais em plataformas intuitivas. Cada dashboard, fluxo de automação e linha de código é estruturado para otimizar tempo, reduzir custos e gerar valor mensurável para os negócios.",
        "Do diagnóstico à implementação e sustentação, colaboro com lideranças e equipes para alinhar visão estratégica e tecnologia de ponta, mantendo padrões elevados de governança, segurança e performance.",
      ],
      experienceStat: {
        value: "10",
        unit: "+",
        label: "Anos de Trajetória e Evolução Profissional Contínua",
      },
      skillsTitle: "STACK DE COMPETÊNCIAS",
      skills: [
        "Power BI",
        "Snowflake SQL",
        "PHP 8+",
        "Python",
        "JavaScript ES6+",
        "React",
        "Power Query / DAX",
        "Docker",
        "MySQL",
        "TailwindCSS",
        "Power Platform",
        "Git & DevOps",
      ],
    },
    services: {
      sectionBadge: "ESPECIALIDADES",
      title: "SERVICES",
      subtitle: "Soluções integradas de ponta a ponta",
      items: [
        {
          id: "01",
          title: "DATA & BUSINESS INTELLIGENCE",
          subtags: ["+ POWER BI / DAX", "+ SNOWFLAKE SQL", "+ ETL PIPELINES"],
          description:
            "Modelagem multidimensional avançada, pipelines de dados limpos, fórmulas DAX de alto desempenho e relatórios executivos para tomadas de decisões críticas com precisão cirúrgica.",
          image: "assets/img/service_data_bi.jpg",
        },
        {
          id: "02",
          title: "FULLSTACK WEB & SYSTEMS",
          subtags: ["+ PHP / PYTHON", "+ REACT / ES6", "+ REST APIS"],
          description:
            "Arquitetura de sistemas robustos, portais corporativos, integrações seguras de APIs e interfaces modulares focadas em experiência do usuário e escalabilidade.",
          image: "assets/img/service_web_dev.jpg",
        },
        {
          id: "03",
          title: "PROCESS AUTOMATION & CLOUD",
          subtags: ["+ POWER PLATFORM", "+ SERVER MIGRATION", "+ DEVOPS"],
          description:
            "Workflows autônomos para erradicação de trabalho manual repetitivo, automação de rotinas de transporte/logística, scripts em nuvem e gerenciamento de infraestrutura.",
          image: "assets/img/service_automation.jpg",
        },
      ],
    },
    works: {
      sectionBadge: "PORTFÓLIO",
      giantWord: "WORKS",
      discoverBadge: "Descubra Nossos Projetos",
      items: [
        {
          id: "01",
          title: "Dashboard Operacional de Frotas (CDNE)",
          category: "Data & BI",
          tags: ["POWER BI", "SNOWFLAKE", "LOGÍSTICA"],
          details:
            "Plataforma analítica em tempo real de rastreamento de status de frotas e indicadores operacionais para múltiplos centros de distribuição regionais, aumentando a pontualidade operacional.",
          thumbnail: "assets/img/work_cdne_dashboard.jpg",
          link: "#",
        },
        {
          id: "02",
          title: "Migração & Infraestrutura de Servidores",
          category: "DevOps & Cloud",
          tags: ["BACKEND", "LINUX", "APACHE / PHP"],
          details:
            "Modernização estrutural completa de servidores de produção, migração de bases relacionais sem downtime e automação de rotinas de backup criptografado.",
          thumbnail: "assets/img/work_server_migration.jpg",
          link: "#",
        },
        {
          id: "03",
          title: "Painel de Escalas & Gestão Operacional",
          category: "Web Application",
          tags: ["PHP MODULAR", "JAVASCRIPT ES6", "MYSQL"],
          details:
            "Sistema inteligente de alocação de equipes e rotas de transporte com validações em tempo real, relatórios gerenciais e controle fino de permissões.",
          thumbnail: "assets/img/service_web_dev.jpg",
          link: "#",
        },
      ],
    },
    recognition: {
      sectionBadge: "TRAJETÓRIA",
      title: "RECOGNITION",
      subtitle: "Certificações, Premiações & Marcos",
      tableHeaders: {
        number: "Nº",
        institution: "Instituição / Emissor",
        role: "Certificação / Reconhecimento",
        year: "Ano",
      },
      items: [
        {
          index: "01",
          institution: "Six Sigma Institute",
          role: "Six Sigma Green Belt",
          year: "2025",
          image: "assets/img/service_automation.jpg",
        },
        {
          index: "02",
          institution: "DNC School",
          role: "Especialização Data & IT Management",
          year: "2025",
          image: "assets/img/service_data_bi.jpg",
        },
        {
          index: "03",
          institution: "Microsoft Certified",
          role: "Power BI Data Analyst Associate",
          year: "2024",
          image: "assets/img/work_cdne_dashboard.jpg",
        },
        {
          index: "04",
          institution: "Corporativo Logística",
          role: "Destaque em Otimização de Processos",
          year: "2026",
          image: "assets/img/work_server_migration.jpg",
        },
        {
          index: "05",
          institution: "Tech Academy",
          role: "Fullstack Architecture & Clean Code",
          year: "2023",
          image: "assets/img/service_web_dev.jpg",
        },
      ],
    },
    clients: {
      badge: "STACK & TECNOLOGIAS",
      title: "Ferramentas & Tecnologias de Alta Performance",
    },
    testimonials: {
      sectionBadge: "DEPOIMENTOS",
      title: "FEEDBACK",
      items: [
        {
          name: "Raphael",
          role: "Gerente de Operações",
          quote:
            "Profissionalismo ímpar no suporte analítico, direcionamento e otimização contínua de nossos processos logísticos e operacionais.",
          avatar: "assets/img/testimonial_raphael.jpg",
        },
        {
          name: "Bottura",
          role: "Especialista em TI",
          quote:
            "Parceria técnica fundamental nas migrações críticas de servidor, integridade de banco de dados e implementação de automações estáveis.",
          avatar: "assets/img/testimonial_bottura.jpg",
        },
      ],
    },
    contact: {
      sectionBadge: "VAMOS CONVERSAR",
      title: "LET'S CREATE SOMETHING MEANINGFUL",
      availableStatus: "Disponível para projetos e parcerias",
      emailLabel: "E-MAIL DIRETO",
      phoneLabel: "TELEFONE / WHATSAPP",
      socialLabel: "CONECTE-SE",
      formTitle: "Envie uma mensagem",
      formNamePlaceholder: "Seu Nome Completo",
      formEmailPlaceholder: "Seu Melhor E-mail",
      formMessagePlaceholder: "Descreva seu projeto ou ideia...",
      submitButton: "ENVIAR MENSAGEM",
      submitting: "ENVIANDO...",
      successMessage: "Obrigado! Sua mensagem foi enviada com sucesso.",
    },
    footer: {
      bigName: "JOSÉ RIOS.",
      quickLinks: [
        { label: "Início", target: "#home" },
        { label: "Sobre", target: "#about" },
        { label: "Serviços", target: "#services" },
        { label: "Trabalhos", target: "#works" },
        { label: "Reconhecimento", target: "#recognition" },
        { label: "Contato", target: "#contact" },
      ],
      copyright: `© ${new Date().getFullYear()} José Rios. Todos os direitos reservados.`,
      backToTop: "Voltar ao topo",
    },
  },

  en: {
    meta: {
      title: "José Rios | Developer & Data Analyst",
      description: "Interactive portfolio of José Rios — Fullstack Developer, Power BI Specialist, Snowflake & Process Automation.",
    },
    personalInfo: {
      fullName: "José Rios",
      roleTitle: "Jr Transport Analyst & Fullstack Developer",
      tagline: "DEVELOPER & ANALYST",
      email: "jviniciussouzarios@gmail.com",
      phone: "+55 (11) 98765-4321",
      location: "São Paulo, Brazil",
      linkedin: "https://linkedin.com/in/joserios",
      github: "https://github.com/JViniciusRios",
      profileImage: "assets/img/jose_rios_profile.jpg",
      cvFile: "assets/files/Jose_Rios_CV.pdf",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      works: "Works",
      recognition: "Recognition",
      contact: "Contact",
      downloadCv: "DOWNLOAD CV",
    },
    hero: {
      offerings: [
        "Creative Strategy & Architecture",
        "Business Intelligence & BI",
        "Web Systems & Fullstack Dev",
      ],
      stats: [
        { value: "10+", label: "Years Total Exp." },
        { value: "99.9%", label: "Uptime & Reliability" },
        { value: "98%", label: "Satisfaction Rate" },
        { value: "25+", label: "Delivered Projects" },
      ],
      badge: "AVAILABLE FOR WORK",
      titleLine1: "TRANSFORMING DATA & CODE",
      titleLine2: "INTO HIGH-IMPACT SOLUTIONS.",
      viewProjects: "VIEW PROJECTS",
      statementHeadline:
        "I AM DEDICATED TO BRINGING YOUR VISION TO LIFE BY CRAFTING UNIQUE, HIGHLY AESTHETIC, AND IMPACTFUL DIGITAL EXPERIENCES. MY WORK SPEAKS LOUDER THAN WORDS—EXPLORE THE RESULTS.",
    },
    about: {
      sectionBadge: "ABOUT ME",
      title: "ABOUT ME",
      paragraphs: [
        "I am a results-driven professional dedicated to transforming complex data pipelines and core business rules into clean, high-performance digital solutions. Combining deep analytical expertise with solid software engineering principles, I bridge the gap between business intelligence and modern web tech.",
        "With a disciplined focus on software architecture and agile methodologies, I turn complex operational bottlenecks into intuitive platforms. Every dashboard, automated workflow, and line of code is structured to optimize time, decrease overhead, and drive measurable growth.",
        "From initial discovery through implementation and long-term scaling, I partner closely with stakeholders to ensure every digital product reflects enterprise-grade governance, rock-solid security, and peak performance standards.",
      ],
      experienceStat: {
        value: "10",
        unit: "+",
        label: "Years of Continuous Growth and Tech Excellence",
      },
      skillsTitle: "CORE COMPETENCIES",
      skills: [
        "Power BI",
        "Snowflake SQL",
        "PHP 8+",
        "Python",
        "JavaScript ES6+",
        "React",
        "Power Query / DAX",
        "Docker",
        "MySQL",
        "TailwindCSS",
        "Power Platform",
        "Git & DevOps",
      ],
    },
    services: {
      sectionBadge: "EXPERTISE",
      title: "SERVICES",
      subtitle: "End-to-end integrated solutions",
      items: [
        {
          id: "01",
          title: "DATA & BUSINESS INTELLIGENCE",
          subtags: ["+ POWER BI / DAX", "+ SNOWFLAKE SQL", "+ ETL PIPELINES"],
          description:
            "Advanced dimensional modeling, clean automated ETL pipelines, optimized DAX calculations, and interactive executive dashboards for razor-sharp decision making.",
          image: "assets/img/service_data_bi.jpg",
        },
        {
          id: "02",
          title: "FULLSTACK WEB & SYSTEMS",
          subtags: ["+ PHP / PYTHON", "+ REACT / ES6", "+ REST APIS"],
          description:
            "Robust web architectures, bespoke corporate portals, secure API integrations, and modular reactive user interfaces built for maintainability and speed.",
          image: "assets/img/service_web_dev.jpg",
        },
        {
          id: "03",
          title: "PROCESS AUTOMATION & CLOUD",
          subtags: ["+ POWER PLATFORM", "+ SERVER MIGRATION", "+ DEVOPS"],
          description:
            "Autonomous workflows eliminating repetitive human bottlenecks, automated logistics pipelines, cloud scripts, and reliable server infrastructure orchestration.",
          image: "assets/img/service_automation.jpg",
        },
      ],
    },
    works: {
      sectionBadge: "PORTFOLIO",
      giantWord: "WORKS",
      discoverBadge: "Discover Our Projects",
      items: [
        {
          id: "01",
          title: "Fleet Operational Command Center (CDNE)",
          category: "Data & BI",
          tags: ["POWER BI", "SNOWFLAKE", "LOGISTICS"],
          details:
            "Real-time fleet tracking and distribution analytics platform across multiple regional hubs, significantly accelerating fleet turnaround times.",
          thumbnail: "assets/img/work_cdne_dashboard.jpg",
          link: "#",
        },
        {
          id: "02",
          title: "Server Migration & Infrastructure DevOps",
          category: "DevOps & Cloud",
          tags: ["BACKEND", "LINUX", "APACHE / PHP"],
          details:
            "Complete modernization of mission-critical production servers, zero-downtime database migration, and automated encrypted backup routines.",
          thumbnail: "assets/img/work_server_migration.jpg",
          link: "#",
        },
        {
          id: "03",
          title: "Operational Schedule & Resource Management",
          category: "Web Application",
          tags: ["MODULAR PHP", "JAVASCRIPT ES6", "MYSQL"],
          details:
            "Intelligent team and route scheduling portal featuring real-time business constraint checks, executive reporting, and granular role management.",
          thumbnail: "assets/img/service_web_dev.jpg",
          link: "#",
        },
      ],
    },
    recognition: {
      sectionBadge: "MILESTONES",
      title: "RECOGNITION",
      subtitle: "Certifications, Awards & Track Record",
      tableHeaders: {
        number: "No.",
        institution: "Issuing Organization",
        role: "Certification / Recognition",
        year: "Year",
      },
      items: [
        {
          index: "01",
          institution: "Six Sigma Institute",
          role: "Six Sigma Green Belt",
          year: "2025",
          image: "assets/img/service_automation.jpg",
        },
        {
          index: "02",
          institution: "DNC School",
          role: "Data & IT Management Specialization",
          year: "2025",
          image: "assets/img/service_data_bi.jpg",
        },
        {
          index: "03",
          institution: "Microsoft Certified",
          role: "Power BI Data Analyst Associate",
          year: "2024",
          image: "assets/img/work_cdne_dashboard.jpg",
        },
        {
          index: "04",
          institution: "Logistics Enterprise",
          role: "Excellence in Process Optimization",
          year: "2026",
          image: "assets/img/work_server_migration.jpg",
        },
        {
          index: "05",
          institution: "Tech Academy",
          role: "Fullstack Architecture & Clean Code",
          year: "2023",
          image: "assets/img/service_web_dev.jpg",
        },
      ],
    },
    clients: {
      badge: "TECH STACK",
      title: "High-Performance Tooling & Frameworks",
    },
    testimonials: {
      sectionBadge: "TESTIMONIALS",
      title: "FEEDBACK",
      items: [
        {
          name: "Raphael",
          role: "Operations Manager",
          quote:
            "Outstanding analytical support, proactive guidance, and seamless optimization of our transport and logistics workflows.",
          avatar: "assets/img/testimonial_raphael.jpg",
        },
        {
          name: "Bottura",
          role: "IT Specialist",
          quote:
            "Invaluable engineering partnership during critical server migrations, database schema updates, and robust workflow automations.",
          avatar: "assets/img/testimonial_bottura.jpg",
        },
      ],
    },
    contact: {
      sectionBadge: "GET IN TOUCH",
      title: "LET'S CREATE SOMETHING MEANINGFUL",
      availableStatus: "Available for new projects & partnerships",
      emailLabel: "DIRECT EMAIL",
      phoneLabel: "PHONE / WHATSAPP",
      socialLabel: "CONNECT",
      formTitle: "Send a message",
      formNamePlaceholder: "Your Full Name",
      formEmailPlaceholder: "Your Business Email",
      formMessagePlaceholder: "Tell me about your project or idea...",
      submitButton: "SUBMIT MESSAGE",
      submitting: "SENDING...",
      successMessage: "Thank you! Your message has been sent successfully.",
    },
    footer: {
      bigName: "JOSÉ RIOS.",
      quickLinks: [
        { label: "Home", target: "#home" },
        { label: "About", target: "#about" },
        { label: "Services", target: "#services" },
        { label: "Works", target: "#works" },
        { label: "Recognition", target: "#recognition" },
        { label: "Contact", target: "#contact" },
      ],
      copyright: `© ${new Date().getFullYear()} José Rios. All rights reserved.`,
      backToTop: "Back to top",
    },
  },
};
