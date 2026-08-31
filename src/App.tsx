import { useState, useEffect } from 'react';
import { useReducedMotion } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(true); // Default: dark mode
  const shouldReduceMotion = useReducedMotion();

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
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}