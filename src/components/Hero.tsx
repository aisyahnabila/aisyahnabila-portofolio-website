import { useEffect, useMemo, useState } from "react";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import profileImage from "../assets/animation_profile.jpg";
import realPhoto from "../assets/photo-profile.png";
import { HeroBackgroundPattern } from "./HeroBackgroundPattern";

const WHATSAPP_URL = `https://wa.me/6285156505772?text=${encodeURIComponent(
  "Hi Aisyah, I'd like to schedule a 15-minute chat about a project."
)}`;

const EASE = [0.16, 1, 0.3, 1] as const;
const PIXEL_GRID = 8;
const PIXEL_TILE_COUNT = PIXEL_GRID * PIXEL_GRID;
const PIXEL_FLASH_DURATION_MS = 320;
const PIXEL_FLASH_PEAK = 0.35;
const PIXEL_SWAP_DELAY_S = (PIXEL_FLASH_DURATION_MS * PIXEL_FLASH_PEAK) / 1000;
// SVG masks anti-alias each shape independently, so edge-to-edge rects can leave a
// hairline translucent gap between them. A tiny overlap closes it without any visible distortion.
const PIXEL_MASK_OVERLAP = 0.004;

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
  const [isHovering, setIsHovering] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const showRealPhoto = isHovering || isTapped;

  // Touch devices fire a synthetic mouseenter on tap but rarely a timely mouseleave,
  // so mixing hover state with tap state leaves the photo stuck after the first tap.
  // Only trust real hover on devices whose primary pointer can actually hover.
  const [supportsHover, setSupportsHover] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
  );
  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setSupportsHover(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  const pixelDelays = useMemo(
    () => Array.from({ length: PIXEL_TILE_COUNT }, () => Math.random() * 0.3),
    []
  );

  // Grid cell coordinates as fractions (0-1) of the masked element's own box —
  // used with maskContentUnits="objectBoundingBox" so the mask always lines up
  // exactly with the single underlying photo, regardless of its rendered size.
  const pixelCells = useMemo(
    () =>
      pixelDelays.map((delay, i) => {
        const row = Math.floor(i / PIXEL_GRID);
        const col = i % PIXEL_GRID;
        const x0 = Math.max(0, col / PIXEL_GRID - PIXEL_MASK_OVERLAP);
        const y0 = Math.max(0, row / PIXEL_GRID - PIXEL_MASK_OVERLAP);
        const x1 = Math.min(1, (col + 1) / PIXEL_GRID + PIXEL_MASK_OVERLAP);
        const y1 = Math.min(1, (row + 1) / PIXEL_GRID + PIXEL_MASK_OVERLAP);
        return { delay, x: x0, y: y0, width: x1 - x0, height: y1 - y0 };
      }),
    [pixelDelays]
  );

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

          {/* Right Side - Profile Photo (circular avatar; hover on desktop / tap on mobile reveals the real photo) */}
          <motion.div
            className="flex flex-col items-center gap-3 justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            {/* Hidden SVG defs: two grid masks (reveal + flash) shared by the layers below.
                Using a mask keeps the real photo as a single, un-duplicated <img> — no
                per-tile image copies, so there's nothing to leave seams between. */}
            <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
              <defs>
                <mask id="hero-pixel-reveal" maskContentUnits="objectBoundingBox">
                  {pixelCells.map(({ delay, x, y, width, height }, i) => (
                    <rect
                      key={i}
                      x={x}
                      y={y}
                      width={width}
                      height={height}
                      fill="white"
                      style={{
                        opacity: showRealPhoto ? 1 : 0,
                        transitionProperty: 'opacity',
                        transitionDuration: '1ms',
                        transitionTimingFunction: 'linear',
                        transitionDelay: shouldReduceMotion ? '0ms' : `${delay + PIXEL_SWAP_DELAY_S}s`,
                      }}
                    />
                  ))}
                </mask>
                <mask id="hero-pixel-flash" maskContentUnits="objectBoundingBox">
                  {pixelCells.map(({ delay, x, y, width, height }, i) => (
                    <rect
                      key={i}
                      x={x}
                      y={y}
                      width={width}
                      height={height}
                      fill="white"
                      style={{
                        opacity: 0,
                        animationName: shouldReduceMotion ? 'none' : (showRealPhoto ? 'pixel-flash-in' : 'pixel-flash-out'),
                        animationDuration: `${PIXEL_FLASH_DURATION_MS}ms`,
                        animationTimingFunction: 'ease-in-out',
                        animationDelay: `${delay}s`,
                        animationFillMode: 'both',
                      }}
                    />
                  ))}
                </mask>
              </defs>
            </svg>

            {/* Stationary hit-test area — hover/tap listeners live here, never moves, so the
                bounce animation below can't make hover flicker on and off at the edges */}
            <div
              className="relative flex items-center justify-center cursor-pointer select-none"
              style={{ width: 'min(64vw, 280px)', height: 'min(64vw, 280px)' }}
              onMouseEnter={() => {
                if (supportsHover) setIsHovering(true);
              }}
              onMouseLeave={() => {
                if (!supportsHover) return;
                setIsHovering(false);
                setIsTapped(false);
              }}
              onClick={() => setIsTapped((v) => !v)}
            >
              {/* Purely visual bounce — decoupled from the hit-test area above */}
              <motion.div
                className="relative w-full h-full"
                animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={shouldReduceMotion ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Circular frame — solid border, no gradient */}
                <div
                  className={`relative w-full h-full rounded-full overflow-hidden border-4 shadow-lg transition-colors duration-500 ${showRealPhoto ? 'border-primary' : 'border-primary/60'}`}
                >
                  {/* Base layer: illustrated avatar, always underneath */}
                  <img
                    src={profileImage}
                    alt="Aisyah Nabila - illustrated avatar"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: '50% 15%' }}
                  />

                  {/* Opaque backing so the transparent edges of the photo cutout don't let the illustration bleed through */}
                  <div
                    className="absolute inset-0 bg-background pointer-events-none"
                    style={{ maskImage: 'url(#hero-pixel-reveal)', WebkitMaskImage: 'url(#hero-pixel-reveal)' }}
                  />

                  {/* Real photo — a single image, revealed tile-by-tile through the mask (no duplicated/clipped copies) */}
                  <img
                    src={realPhoto}
                    alt="Aisyah Nabila - System Analyst"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    style={{
                      objectPosition: '50% 8%',
                      maskImage: 'url(#hero-pixel-reveal)',
                      WebkitMaskImage: 'url(#hero-pixel-reveal)',
                    }}
                  />

                  {/* Flash overlay: a blank block pulses over each tile right as it swaps */}
                  <div
                    className="absolute inset-0 bg-background pointer-events-none"
                    style={{ maskImage: 'url(#hero-pixel-flash)', WebkitMaskImage: 'url(#hero-pixel-flash)' }}
                  />
                </div>
              </motion.div>
            </div>
            <span className="text-xs text-muted-foreground md:hidden">Tap the photo to reveal</span>
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
