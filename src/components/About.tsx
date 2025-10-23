import { Card, CardContent } from "./ui/card";
import { Code, Database, Users, Lightbulb, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const features = [
    {
      icon: Code,
      title: "Development",
      description: "Full-stack web development with modern frameworks",
      color: "primary"
    },
    {
      icon: Database,
      title: "Analysis",
      description: "System analysis and process optimization",
      color: "secondary"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working with cross-functional teams",
      color: "accent"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Creative problem-solving and optimization",
      color: "primary"
    }
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10"></div>
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary tracking-wider uppercase">Who I Am</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate web developer and system analyst with expertise in creating 
            scalable web applications and optimizing business processes through technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl blur-xl"></div>
              <div className="relative p-8 bg-card/50 backdrop-blur-md rounded-2xl border border-border/50">
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-secondary" />
                  My Journey
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  With several years of experience in web development and system analysis, 
                  I've had the opportunity to work on diverse projects ranging from small 
                  business websites to enterprise-level applications.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  My dual expertise allows me to not only build robust applications but also 
                  analyze and improve existing systems, ensuring they meet both technical 
                  requirements and business objectives.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm constantly learning new technologies and methodologies to stay current 
                  with industry trends and deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                {/* Glowing border effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-${feature.color}/50 to-${feature.color}/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`}></div>
                
                <Card className="relative h-full bg-card/50 backdrop-blur-md border-border/50 group-hover:border-${feature.color}/30 transition-all duration-300">
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-2xl"></div>
                  
                  <CardContent className="p-6 text-center relative">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-${feature.color}/10 rounded-xl border border-${feature.color}/20 mx-auto mb-3`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className={`h-8 w-8 text-${feature.color}`} />
                    </motion.div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

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
      `}</style>
    </section>
  );
}