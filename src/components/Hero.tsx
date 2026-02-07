import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code, Database, Cpu, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import profileImage from "../assets/animation_profile.png";

export function Hero() {
  const [roleText, setRoleText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const fullRole = "WEB DEVELOPER & SYSTEM ANALYST";

  useEffect(() => {
    // Typing effect untuk role saja
    let roleIndex = 0;
    const roleInterval = setInterval(() => {
      if (roleIndex < fullRole.length) {
        setRoleText(fullRole.slice(0, roleIndex + 1));
        roleIndex++;
      } else {
        clearInterval(roleInterval);
        // Stop cursor blinking setelah selesai
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 50);

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(roleInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToContact = () => {
    try {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.log('Scroll error:', error);
    }
  };

  const scrollToProjects = () => {
    try {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.log('Scroll error:', error);
    }
  };

  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-[800px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-[#0a0e27] dark:via-[#0f172a] dark:to-[#000000]">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30 dark:opacity-30">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-20 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Tech Icons with enhanced animations */}
      <div className="absolute inset-0 z-30 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Code className="h-16 w-16 text-secondary opacity-20 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-16"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Database className="h-12 w-12 text-primary opacity-30 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Cpu className="h-14 w-14 text-accent opacity-25 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 sm:py-16 lg:py-20">

          {/* Left Side - Text Content with glassmorphism */}
          <motion.div
            className="text-left order-2 lg:order-1 space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 sm:space-y-6">

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="relative inline-block text-emerald-600 dark:text-emerald-400 break-words font-extrabold drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                  Aisyah Nabila
                </span>
              </motion.h1>

              <motion.h2
                className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-gray-200 min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {roleText.includes("WEB DEVELOPER") ? (
                  <>
                    <span className="text-blue-600 dark:text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">WEB DEVELOPER</span>
                    {roleText.includes("&") && (
                      <>
                        {" "}& <br />
                        <span className="text-emerald-600 dark:text-secondary drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                          {roleText.split("& ")[1] || ""}
                        </span>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {roleText}
                  </>
                )}
                {roleText.length > 0 && roleText.length < fullRole.length && showCursor && (
                  <span className="inline-block w-0.5 sm:w-1 h-6 sm:h-10 bg-emerald-600 dark:bg-secondary ml-1 animate-pulse"></span>
                )}
              </motion.h2>

              <motion.p
                className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-gray-300 max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                I create robust web applications and analyze complex systems to deliver
                innovative solutions that drive business growth and enhance user experiences.
              </motion.p>
            </div>

            {/* Action Buttons with enhanced hover effects */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                onClick={scrollToContact}
                className="group relative bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-2xl border-0 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
              >
                <span className="relative z-10">Let's Work Together</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button
                variant="outline"
                onClick={scrollToProjects}
                className="border-2 border-slate-800 dark:border-white/80 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 hover:border-slate-900 dark:hover:border-white backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              >
                <span className="font-bold">View Portfolio</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Photo with 3D effects */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group w-[200px] sm:w-[220px] lg:w-[250px]">
              {/* Animated rings around photo */}
              <div className="absolute inset-0 -z-10">
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-secondary/30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ transform: 'translate(-10%, -10%)', width: '120%', height: '120%' }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  style={{ transform: 'translate(-15%, -15%)', width: '130%', height: '130%' }}
                />
              </div>

              {/* Main Photo Container with glassmorphism */}
              <motion.div
                className="relative"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ perspective: 1000 }}
              >
                {/* Holographic border effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-secondary via-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 animate-gradient-xy transition-opacity duration-500"></div>

                {/* Glass frame */}
                <div className="relative p-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Professional developer portrait"
                    className="w-full h-auto aspect-square object-cover rounded-full shadow-xl"
                  />

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                </div>

              </motion.div>

              {/* Decorative particles around photo */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-gradient-to-r from-secondary to-primary rounded-full"
                  style={{
                    left: `${50 + 50 * Math.cos(i * Math.PI / 4)}%`,
                    top: `${50 + 50 * Math.sin(i * Math.PI / 4)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Social Icons & Scroll with glassmorphism */}
        <motion.div
          className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex justify-center gap-4 mb-6 p-3 bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-full border border-slate-200 dark:border-white/10">
            {[
              { icon: Github, color: "secondary", url: "https://github.com/aisyahnabila", label: "GitHub" },
              { icon: Linkedin, color: "primary", url: "https://linkedin.com/in/aisyah-nabila-zahra-0a6046226/", label: "LinkedIn" },
              { icon: Mail, color: "accent", url: "mailto:your.email@example.com", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target={social.icon === Mail ? "_self" : "_blank"}
                rel={social.icon === Mail ? "" : "noopener noreferrer"}
                aria-label={social.label}
                className="text-slate-700 dark:text-white/80 hover:text-emerald-600 dark:hover:text-secondary transition-all duration-300 cursor-pointer p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-6 w-6 text-slate-700 dark:text-white/70 mx-auto" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-35"></div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
        }
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 3s ease infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s linear infinite;
        }
      `}</style>
    </section>
  );
}