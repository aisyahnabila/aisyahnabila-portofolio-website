import { useState, useEffect } from 'react';
import { useReducedMotion } from 'motion/react';
import { CanvasCursor } from './components/CanvasCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperiencePage } from './components/ExperiencePage';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const EXPERIENCE_HASH = '#experience-page';

export default function App() {
  const [isDark, setIsDark] = useState(true); // Default: dark mode
  const [page, setPage] = useState<'home' | 'experience'>(() =>
    window.location.hash === EXPERIENCE_HASH ? 'experience' : 'home'
  );
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onHashChange = () => {
      setPage(window.location.hash === EXPERIENCE_HASH ? 'experience' : 'home');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Handles both in-page section links (home page) and the dedicated Experience
  // page. When navigating to a home-page section from the Experience page, it
  // switches back to home first, then scrolls once that content has mounted.
  const navigateTo = (sectionId: string) => {
    if (sectionId === 'experience') {
      window.location.hash = EXPERIENCE_HASH;
      setPage('experience');
      window.scrollTo(0, 0);
      return;
    }

    if (page === 'experience') {
      window.location.hash = '';
      setPage('home');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        });
      });
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Cek localStorage, jika tidak ada maka default dark mode
    const savedMode = localStorage.getItem('darkMode');
    const isDarkMode = savedMode === null ? true : savedMode === 'true';
    
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const applyTheme = (newDarkMode: boolean) => {
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const newDarkMode = !isDark;

    // The View Transitions API snapshots the page before and after the DOM update,
    // then lets us wipe between the two real snapshots — so the old (dark) and new
    // (light) themes are both genuinely visible, split by the diagonal line, instead
    // of a solid color sliding over an already-swapped page.
    const doc = document as Document & { startViewTransition?: (cb: () => void) => void };

    if (shouldReduceMotion || typeof doc.startViewTransition !== 'function') {
      applyTheme(newDarkMode);
      return;
    }

    doc.startViewTransition(() => {
      applyTheme(newDarkMode);
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <CanvasCursor />
      <Header isDark={isDark} toggleTheme={toggleTheme} page={page} onNavigate={navigateTo} />
      {page === 'experience' ? (
        <ExperiencePage onBack={() => navigateTo('home')} />
      ) : (
        <main>
          <Hero />
          <About onViewDetails={() => navigateTo('experience')} />
          <Skills />
          <Projects />
          <Contact />
        </main>
      )}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}