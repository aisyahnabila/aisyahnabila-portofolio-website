import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Projects() {
  const projects = [
    {
      title: "Enterprise Dashboard",
      description: "A comprehensive business intelligence dashboard for tracking KPIs, analytics, and system performance. Built with React, TypeScript, and real-time data visualization.",
      image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg0NTcwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
      liveLink: "#",
      githubLink: "#",
      category: "Web Development"
    },
    {
      title: "System Analysis Platform",
      description: "A comprehensive platform for analyzing business processes, identifying bottlenecks, and optimizing workflows. Features automated reporting and recommendation engines.",
      image: "https://images.unsplash.com/photo-1728044849277-9cb3cd94e729?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMHN5c3RlbXxlbnwxfHx8fDE3NTg0NzU5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "Django", "Vue.js", "MySQL", "Docker"],
      liveLink: "#",
      githubLink: "#",
      category: "System Analysis"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with inventory management, payment processing, and advanced analytics. Supports multiple vendors and real-time order tracking.",
      image: "https://images.unsplash.com/photo-1657812159075-7f0abd98f7b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NTg0NzMxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Next.js", "Stripe", "MongoDB", "AWS", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
      category: "Web Development"
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10"></div>
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development
            and system analysis. Each project solved real business challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/50 via-primary/50 to-accent/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <Card className="relative h-full bg-card/50 backdrop-blur-md border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Shine effect overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-10"></div>

                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <motion.div
                    className="absolute top-4 left-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground backdrop-blur-sm border border-primary/20 shadow-lg">
                      {project.category}
                    </Badge>
                  </motion.div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="outline" className="text-xs bg-muted/30 hover:bg-muted hover:border-primary/30 transition-all duration-200">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border/50 hover:border-primary/50 hover:bg-primary/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="relative group border-2 border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </Button>
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}