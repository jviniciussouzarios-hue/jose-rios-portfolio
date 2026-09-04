# ⚡ José Rios — Interactive Portfolio

> Portfólio reativo moderno, minimalista e de alta performance desenvolvido com **React 18 + Vite**, **Framer Motion**, **GSAP ScrollTrigger**, **Lenis Smooth Scroll** e **TailwindCSS**. Inspirado na estética visual e interações da agência **UNIFEX**, com transições dinâmicas entre temas claro e escuro e suporte bilíngue nativo.

[![Deploy to GitHub Pages](https://github.com/jviniciussouzarios-hue/jose-rios-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/jviniciussouzarios-hue/jose-rios-portfolio/actions)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-D6FF3F?labelColor=0A0A0A)](LICENSE)

---

## 🌟 Destaques & Funcionalidades

- **🌐 Sistema Bilíngue Nativo (PT-BR / EN):** Alternância instantânea de idioma com persistência no navegador (`localStorage`), cobrindo 100% dos textos, rótulos e seções.
- **🎨 Design Dinâmico com Transição de Tema:** Alternância visual fluida entre seções claras (`#F7F7F8`) e escuras (`#0A0A0A`) conforme a rolagem da página.
- **📜 Smooth Scroll & ScrollTrigger:** Rolagem suave com **Lenis** e revelação de texto palavra-a-palavra com **GSAP ScrollTrigger**.
- **🎯 Cursor Customizado Magnético:** Cursor interativo com variantes para links, botões magnéticos e cards com visualizador dinâmico.
- **🚀 Botão Flutuante 'Voltar ao Topo':** Botão circular neon lime fixo no canto inferior direito para retorno ágil ao topo da página.
- **🧩 100% Modular e Desacoplado:** Todos os textos, projetos, certificações e links estão centralizados em `src/data/translations.js`.
- **📱 Totalmente Responsivo:** Layout adaptado com precisão para computadores, tablets e smartphones (menu overlay fullscreen).
- **🤖 Deploy Automatizado:** Fluxo de CI/CD configurado no GitHub Actions para publicação contínua no **GitHub Pages**.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Finalidade |
|---|---|---|
| **Frontend Framework** | React 18 | Componentização reativa e modular |
| **Build Tool** | Vite | Compilação ultra rápida e Hot Module Replacement (HMR) |
| **Estilização** | TailwindCSS + CSS Variables | Design system responsivo com cores dinâmicas |
| **Animações** | Framer Motion | Entradas de tela, modais, transições e microinterações |
| **Scroll Trigger** | GSAP 3 | Efeitos de revelação tipográfica vinculados ao scroll |
| **Smooth Scrolling** | Lenis (@studio-freight) | Sensação de rolagem premium cinematográfica |
| **Tipografia** | Archivo Black & Inter | Combinação de display bold com corpo legível |
| **Hospedagem** | GitHub Pages & GitHub Actions | Deploy contínuo e estático gratuito |

---

## 📁 Estrutura de Pastas

```text
jose-rios-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline de deploy automático no GitHub Pages
├── public/
│   ├── assets/
│   │   ├── img/                # Fotos de perfil, thumbnails de projetos e avatares
│   │   ├── video/              # Vídeo de apresentação
│   │   └── files/              # Currículo em PDF (Jose_Rios_CV.pdf)
│   └── favicon.svg             # Ícone do site
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx      # Navbar com seletor PT/EN e botão Download CV
│   │   │   └── Footer.jsx      # Rodapé com marquee gigante e links rápidos
│   │   ├── sections/
│   │   │   ├── LoadingScreen.jsx # Tela de carregamento com contador 0-100%
│   │   │   ├── Hero.jsx        # Headline principal, métricas e statement gigante
│   │   │   ├── About.jsx       # Bio narrativa, foto de perfil e indicador de experiência
│   │   │   ├── Services.jsx    # Seção escura com pill cards arredondados
│   │   │   ├── Works.jsx       # Projetos em destaque com cards e tags
│   │   │   ├── Awards.jsx      # Tabela de certificações com preview dinâmico ao passar o mouse
│   │   │   ├── ClientLogos.jsx # Grid minimalista 4x2 com stack tecnológica
│   │   │   ├── Testimonials.jsx# Depoimentos e feedback de lideranças
│   │   │   └── Contact.jsx     # Contato direto, formulário e cartão de perfil
│   │   └── shared/
│   │       ├── CustomCursor.jsx     # Cursor neon interativo
│   │       ├── FloatingBackToTop.jsx # Botão flutuante para voltar ao topo
│   │       ├── MagneticButton.jsx   # Botão com efeito magnético no cursor
│   │       ├── PillCard.jsx         # Card estilo cápsula Unifex
│   │       └── SectionTitleDuo.jsx  # Título duplo com animação marquee
│   ├── context/
│   │   ├── LanguageContext.jsx # Gerenciamento do idioma (PT / EN)
│   │   ├── ThemeContext.jsx    # Alternância de tema por seção
│   │   ├── CursorContext.jsx   # Controle das variantes do cursor
│   │   └── SmoothScrollContext.jsx # Inicialização do Lenis Scroll
│   ├── data/
│   │   ├── translations.js     # Banco de dados de textos em Português e Inglês
│   │   └── content.js          # Configurações legadas e metadados
│   ├── App.jsx                 # Composição principal das seções
│   ├── index.css               # Estilos globais e tokens de cores
│   └── main.jsx                # Ponto de entrada do React
├── package.json                # Dependências e scripts do projeto
├── tailwind.config.js          # Configurações de tema e fontes
└── vite.config.js              # Configuração do Vite e base path do GitHub Pages
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior instalado.
- [Git](https://git-scm.com/) instalado no seu sistema.

### 1. Clonar o repositório
```bash
git clone https://github.com/JViniciusRios/jose-rios-portfolio.git
cd jose-rios-portfolio
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse no seu navegador: `http://localhost:5173/jose-rios-portfolio/`

### 4. Gerar build de produção
```bash
npm run build
```
Os arquivos otimizados para produção serão gerados na pasta `dist/`.

---

## ✏️ Como Personalizar os Seus Dados

Para atualizar seus dados, você **não precisa mexer em código complexo**:

1. Abra o arquivo `src/data/translations.js`.
2. Edite os textos nas seções `pt` (Português) e `en` (Inglês):
   - **Informações Pessoais:** Nome, cargo, e-mail, telefone, links de LinkedIn e GitHub.
   - **Sobre Mim:** Sua trajetória profissional e conquistas.
   - **Serviços & Projetos:** Seus projetos reais com títulos, tags e descrições.
   - **Certificações:** Seus cursos, pós-graduações e reconhecimentos.
3. Para trocar as imagens, basta substituir os arquivos na pasta `public/assets/img/`:
   - `jose_rios_profile.jpg`: Sua foto de perfil principal.
   - `Jose_Rios_CV.pdf`: Seu currículo em PDF na pasta `public/assets/files/`.

---

## 📦 Publicação no GitHub Pages

O projeto já inclui um workflow automatizado em `.github/workflows/deploy.yml`.

1. Crie o repositório no seu GitHub com o nome `jose-rios-portfolio`.
2. No repositório, vá em **Settings** → **Pages**.
3. Em **Source**, selecione **GitHub Actions**.
4. Sempre que você fizer um `git push` na branch `main`, o GitHub criará e publicará seu site automaticamente em:
   `https://jviniciusrios.github.io/jose-rios-portfolio/`

---

## 📄 Licença

Distribuído sob a licença MIT.

---

**Desenvolvido com dedicação por [José Rios](https://github.com/JViniciusRios)**
