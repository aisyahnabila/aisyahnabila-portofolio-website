import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import profileImage from "../assets/animation_profile.jpg";
import { HeroBackgroundPattern } from "./HeroBackgroundPattern";

const WHATSAPP_URL = `https://wa.me/6285156505772?text=${encodeURIComponent(
  "Hi Aisyah, I'd like to schedule a 15-minute chat about a project."
)}`;

const EASE = [0.16, 1, 0.3, 1] as const;

const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const textItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-[#0a0e27] dark:via-[#0f172a] dark:to-[#000000]">
      {/* Backdrop: real BPMN/ERD notation instead of generic floating icons */}
      <HeroBackgroundPattern />

      {/* Main Content Container — padded to clear the fixed header */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        style={{ paddingTop: 'clamp(96px, 13vw, 150px)', paddingBottom: 'clamp(64px, 8vw, 96px)' }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side - Text Content */}
          <motion.div
            className="text-left order-2 lg:order-1 space-y-6 lg:space-y-8"
            variants={textContainer}
            initial="hidden"
            animate="show"
          >
            <div className="space-y-4">
              <motion.p variants={textItem} className="text-sm sm:text-base font-medium tracking-wide text-muted-foreground uppercase">
                System Analyst | QA | Technical Writer
              </motion.p>

              <motion.h1
                variants={textItem}
                className="font-bold text-slate-900 dark:text-white leading-tight"
                style={{ fontSize: 'clamp(2.25rem, 1.1rem + 4.5vw, 4.5rem)' }}
              >
                Aisyah Nabila
              </motion.h1>

              <motion.p variants={textItem} className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                I sit between the people who want it fast and the developers who need it exact —
                turning rough requests into BPMN flows, ERD models, and specs a team can build from,
                then confirming it works through UAT before release.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div variants={textItem} className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToProjects}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold rounded-xl shadow-xl transition-colors duration-200"
              >
                View 3 Case Studies
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')}
                className="border-2 border-border text-foreground hover:bg-muted px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold rounded-xl transition-colors duration-200"
              >
                Book a 15-Min Project Chat
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Photo (transparent cutout, natural proportions, no crop) */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            <div className="relative flex items-center justify-center" style={{ width: 'min(58vw, 260px)' }}>
              {/* Soft backdrop shape — keeps a transparent cutout from floating in empty space */}
              <div
                aria-hidden="true"
                className="absolute rounded-full"
                style={{
                  inset: '-6%',
                  background: 'radial-gradient(circle, var(--secondary) 0%, transparent 72%)',
                  opacity: 0.18,
                  filter: 'blur(4px)',
                }}
              />
              <motion.img
                src={profileImage}
                alt="Aisyah Nabila - System Analyst"
                className="relative w-full"
                style={{ display: 'block', height: 'auto' }}
                animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={shouldReduceMotion ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Social Icons & Scroll cue */}
        <motion.div
          className="hidden md:flex justify-center items-center gap-6 mt-12 flex-col"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex justify-center gap-2">
            {[
              { icon: Linkedin, url: "https://linkedin.com/in/aisyah-nabila-zahra-0a6046226/", label: "LinkedIn" },
              { icon: Mail, url: "mailto:aisyahnabilaz514@gmail.com", label: "Email" },
              { icon: Github, url: "https://github.com/aisyahnabila", label: "GitHub" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target={social.icon === Mail ? "_self" : "_blank"}
                rel={social.icon === Mail ? "" : "noopener noreferrer"}
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-muted"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={shouldReduceMotion ? undefined : { duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
