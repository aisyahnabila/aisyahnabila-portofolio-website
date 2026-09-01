import { Button } from "./ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoPortofolio from "../assets/logo_portofolio.png";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  page: 'home' | 'experience';
  onNavigate: (sectionId: string) => void;
}

export function Header({ isDark, toggleTheme, page, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrolledActiveSection, setScrolledActiveSection] = useState('home');

  // The Experience page is a separate view, not a section on the home page —
  // while on it, force that nav item active instead of tracking scroll position.
  const activeSection = page === 'experience' ? 'experience' : scrolledActiveSection;

  useEffect(() => {
    const handleScroll = () => {
      // Header akan muncul glassmorphism setelah scroll 100px
      setIsScrolled(window.scrollY > 100);

      if (page === 'experience') return;

      // Detect active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // offset untuk header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setScrolledActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page]);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-500 ${isScrolled
      ? 'bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50 border-b border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
      : 'bg-transparent border-b border-transparent'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pointer-events-auto w-full flex justify-between items-center py-3">
          <motion.button
            type="button"
            aria-label="Go to home section"
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative flex items-center gap-2 px-2 py-1">
              <span
                className="h-8 w-8 shrink-0 bg-primary"
                style={{
                  WebkitMaskImage: `url(${logoPortofolio})`,
                  maskImage: `url(${logoPortofolio})`,
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                }}
                aria-hidden="true"
              />
              <span className="font-mono font-bold text-primary">
                Aisyah Nabila
              </span>
            </div>
          </motion.button>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 px-2 py-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
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
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                aria-pressed={isDark}
                style={{ width: 44, height: 44 }}
                className="p-0 rounded-full bg-transparent hover:bg-muted/50 dark:hover:bg-muted/50 hover:text-foreground border border-transparent hover:border-border/50 hover:scale-110 transition-all duration-300"
              >
                {isDark ? <Sun className="h-4 w-4 text-primary" /> : <Moon className="h-4 w-4 text-primary" />}
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
                style={{ width: 44, height: 44 }}
                className="p-0 rounded-full bg-transparent hover:bg-muted/50 dark:hover:bg-muted/50 hover:text-foreground border border-transparent hover:border-border/50 transition-all duration-300"
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
                      onClick={() => handleNavClick(item.id)}
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