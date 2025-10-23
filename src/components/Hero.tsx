import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code, Database, Cpu, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import profileImage from "figma:asset/44a7ed3e2fe6c72ade9f68d206e281d71bbeb1be.png";

export function Hero() {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#0f172a] to-[#000000]"></div>
        <div className="absolute inset-0 opacity-30">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Side - Text Content with glassmorphism */}
          <motion.div 
            className="text-left order-2 lg:order-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="block">HAY! I'M</span>
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent animate-gradient-x">
                  Aisyah Nabila
                  <span className="absolute -inset-1 bg-gradient-to-r from-secondary/20 via-primary/20 to-accent/20 blur-2xl -z-10"></span>
                </span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                I'M A <span className="text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">WEB DEVELOPER</span> &
                <br />
                <span className="text-secondary drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">SYSTEM ANALYST</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-300 max-w-2xl leading-relaxed"
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
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                onClick={scrollToContact}
                className="group relative bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl border-0 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
              >
                <span className="relative z-10">Let's Work Together</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToProjects}
                className="border-2 border-white/80 bg-white/5 text-white hover:bg-white hover:text-slate-900 hover:border-white backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              >
                <span className="font-bold">View Portfolio</span>
              </Button>
            </motion.div>

            {/* Statistics with glassmorphism */}
            <motion.div 
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { value: "50+", label: "Projects", color: "secondary" },
                { value: "5+", label: "Years Exp", color: "primary" },
                { value: "100%", label: "Satisfaction", color: "accent" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="px-6 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300">
                    <div className={`text-3xl font-bold text-${stat.color} drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]`}>{stat.value}</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
                  </div>
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-${stat.color}/0 to-${stat.color}/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300 -z-10`}></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Photo with 3D effects */}
          <motion.div 
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
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
                <div className="absolute -inset-2 bg-gradient-to-r from-secondary via-primary to-accent rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 animate-gradient-xy transition-opacity duration-500"></div>
                
                {/* Glass frame */}
                <div className="relative p-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Professional developer portrait"
                    className="w-80 h-96 sm:w-96 sm:h-[28rem] lg:w-[22rem] lg:h-[32rem] object-cover rounded-[1.5rem] shadow-2xl"
                  />
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                </div>

                {/* Floating code tag badge */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 px-6 py-3 bg-gradient-to-r from-secondary to-accent rounded-xl backdrop-blur-md border border-white/20 shadow-xl"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-black" />
                    <span className="font-mono font-bold text-black">&lt;/&gt;</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative particles around photo */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-secondary to-primary rounded-full"
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex justify-center gap-4 mb-6 p-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
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
                className={`text-white/80 hover:text-${social.color} transition-all duration-300 cursor-pointer p-2 rounded-full hover:bg-white/10`}
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
            <ArrowDown className="h-6 w-6 text-white/70 mx-auto" />
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