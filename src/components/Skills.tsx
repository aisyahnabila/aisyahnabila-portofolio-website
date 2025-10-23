import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Code, Server, Database, LineChart, Wrench, Sparkles } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "blue",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-500",
      hoverBorder: "hover:border-blue-500/30",
      glowColor: "from-blue-500/50 to-blue-500/30",
      icon: Code,
      skills: [
        "React", "TypeScript", "Next.js", "Vue.js", "HTML5", "CSS3", 
        "Tailwind CSS", "SASS", "JavaScript ES6+", "Responsive Design"
      ]
    },
    {
      title: "Backend Development",
      color: "emerald",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      textColor: "text-emerald-500",
      hoverBorder: "hover:border-emerald-500/30",
      glowColor: "from-emerald-500/50 to-emerald-500/30",
      icon: Server,
      skills: [
        "Node.js", "Python", "Express.js", "Django", "REST APIs", 
        "GraphQL", "Microservices", "Server Architecture", "API Design"
      ]
    },
    {
      title: "Database & Storage",
      color: "purple",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      textColor: "text-purple-500",
      hoverBorder: "hover:border-purple-500/30",
      glowColor: "from-purple-500/50 to-purple-500/30",
      icon: Database,
      skills: [
        "PostgreSQL", "MySQL", "MongoDB", "Redis", "Database Design", 
        "Query Optimization", "Data Modeling", "Cloud Storage"
      ]
    },
    {
      title: "System Analysis",
      color: "orange",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      textColor: "text-orange-500",
      hoverBorder: "hover:border-orange-500/30",
      glowColor: "from-orange-500/50 to-orange-500/30",
      icon: LineChart,
      skills: [
        "Business Process Analysis", "Requirements Gathering", "System Design", 
        "UML Diagrams", "Workflow Optimization", "Technical Documentation", 
        "Stakeholder Communication", "Gap Analysis"
      ]
    },
    {
      title: "Tools & Technologies",
      color: "cyan",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      textColor: "text-cyan-500",
      hoverBorder: "hover:border-cyan-500/30",
      glowColor: "from-cyan-500/50 to-cyan-500/30",
      icon: Wrench,
      skills: [
        "Git", "Docker", "AWS", "Linux", "Figma", "Jira", "Agile/Scrum", 
        "CI/CD", "Testing Frameworks", "Performance Monitoring"
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 -z-10"></div>
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 mb-4">
            <Sparkles className="h-4 w-4 text-emerald-500" />
            <span className="text-emerald-600 dark:text-emerald-400 tracking-wider uppercase text-sm font-medium">What I Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4 py-4">
            Here are the technologies and skills I use to bring ideas to life and 
            optimize systems for better performance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Glowing border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.glowColor} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`}></div>
              
              <Card className={`relative h-full bg-white dark:bg-slate-900/90 backdrop-blur-md border-2 border-slate-200 dark:border-slate-700 ${category.hoverBorder} hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg ${category.bgColor} border ${category.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className={`h-5 w-5 ${category.textColor}`} />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary"
                          className={`text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700 ${category.hoverBorder} transition-all duration-200 cursor-default px-3 py-1`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-purple-500/20 rounded-full blur-xl"></div>
            <div className="relative p-6 sm:p-8 bg-white dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-xl">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center justify-center gap-2 flex-wrap">
                <Sparkles className="h-5 w-5 text-emerald-500" />
                <span>Always Learning</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl px-2">
                Technology evolves rapidly, and I'm committed to continuous learning. 
                Currently exploring cloud architecture, AI/ML integration, and advanced 
                system optimization techniques.
              </p>
            </div>
          </div>
        </motion.div>
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