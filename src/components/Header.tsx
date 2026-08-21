import { Button } from "./ui/button";
import { Moon, Sun, Menu, X, Code } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Header akan muncul glassmorphism setelah scroll 100px
      setIsScrolled(window.scrollY > 100);

      // Detect active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100; // offset untuk header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    try {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId); // Set active saat diklik
      }
      setIsMenuOpen(false);
    } catch (error) {
      console.log('Scroll error:', error);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 sm:top-4 w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className={`relative pointer-events-auto w-full max-w-5xl flex justify-between items-center px-4 sm:px-6 py-3 transition-all duration-500 ${isScrolled
          ? 'bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50 border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:rounded-full rounded-2xl'
          : 'bg-transparent border border-transparent sm:rounded-full rounded-2xl'
          }`}>
          <motion.button
            type="button"
            aria-label="Go to home section"
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-lg border border-primary/20">
                <Code className="h-5 w-5 text-primary" />
                <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Aisyah Nabila
                </span>
              </div>
            </div>
          </motion.button>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-full px-2 py-2 border border-border/50">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm transition-colors rounded-full ${activeSection === item.id
                    ? 'text-white bg-primary'
                    : 'text-foreground hover:text-primary'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection !== item.id && (
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                aria-pressed={isDark}
                className="w-11 h-11 p-0 rounded-full bg-muted/50 hover:bg-muted border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                {isDark ? <Sun className="h-4 w-4 text-secondary" /> : <Moon className="h-4 w-4 text-primary" />}
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.div
              className="md:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="w-11 h-11 p-0 rounded-full bg-muted/50 hover:bg-muted border border-border/50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 bg-background/95 backdrop-blur-xl border border-border shadow-2xl rounded-2xl overflow-hidden pointer-events-auto"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col gap-1 p-3">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left px-4 py-3 rounded-lg transition-colors ${activeSection === item.id
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 10 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}