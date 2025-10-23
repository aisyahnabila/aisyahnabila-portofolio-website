import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    try {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.log('Scroll error:', error);
    }
  };

  return (
    <footer className="bg-card border-t py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">
              Your Portfolio
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Web Developer & System Analyst passionate about creating innovative 
              solutions and optimizing systems for better performance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Social Links & Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors cursor-pointer">
                <Github className="h-5 w-5" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
            </div>
            <div className="text-muted-foreground space-y-1">
              <p>your.email@example.com</p>
              <p>Available for remote work</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-center sm:text-left">
            © {currentYear} Your Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>and modern web technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}