import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { CursorProvider } from './context/CursorContext';
import { SmoothScrollProvider } from './context/SmoothScrollContext';

import CustomCursor from './components/shared/CustomCursor';
import FloatingBackToTop from './components/shared/FloatingBackToTop';
import LoadingScreen from './components/sections/LoadingScreen';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Works from './components/sections/Works';
import Awards from './components/sections/Awards';
import ClientLogos from './components/sections/ClientLogos';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

/**
 * App — Composição principal do portfólio de José Rios:
 * - Sistema Bilíngue (LanguageProvider: PT / EN)
 * - Transição suave de temas por seção (ThemeProvider)
 * - Custom Cursor (CursorProvider)
 * - Smooth scroll com Lenis (SmoothScrollProvider)
 * - Botão flutuante "Voltar ao topo" (FloatingBackToTop)
 */
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <CursorProvider>
          <SmoothScrollProvider>
            {/* Custom Cursor */}
            <CustomCursor />

            {/* Floating Back to Top Button */}
            <FloatingBackToTop />

            {/* Loading Screen */}
            {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

            {/* Main Content */}
            <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
              <Header />
              <main>
                <Hero />
                <About />
                <Services />
                <Works />
                <Awards />
                <ClientLogos />
                <Contact />
              </main>
              <Footer />
            </div>
          </SmoothScrollProvider>
        </CursorProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
