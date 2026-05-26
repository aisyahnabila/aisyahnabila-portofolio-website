import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

export function Projects() {
  const projects = [
    {
      title: "Tally Reporting System",
      description: "Supported workflow and requirement analysis for a reporting system involving survey, dashboard, and finance processes across multiple user roles.",
      image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg0NTcwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Laravel", "PHP", "Blade", "MVC", "System Analysis"],
      status: "In Progress",
      category: "System Analysis"
    },
    {
      title: "Litera - Digital Publishing Ecosystem",
      description: "A digital publishing platform consisting of a mobile app for readers and writers, as well as a web dashboard for administrators and editors.",
      image: new URL("../assets/Litera.jpg", import.meta.url).href,
      technologies: ["Laravel", "PHP", "Tailwind CSS", "JavaScript", "React Native"],
      status: "Completed",
      notionLink: "https://www.notion.so/Litera-Digital-Book-Platform-2a998004415e812f8325ca5759f11f50?source=copy_link",
      category: "Web and Mobile"
    },
    {
      title: "Careventory - Consumable Inventory Management System",
      description: "Built an integrated inventory management system with digital transaction logging and reporting to improve tracking accuracy.",
      image: new URL("../assets/Careventory.jpg", import.meta.url).href,
      technologies: ["Laravel", "PHP", "Tailwind CSS", "JavaScript"],
      status: "Completed",
      notionLink: "https://www.notion.so/Careventory-Web-Based-Inventory-Management-System-2a998004415e81eeac84e83d4674f029?source=copy_link",
      githubLink: "https://github.com/aisyahnabila/Careventory_V3.git",
      category: "Inventory System"
    },
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
            Selected projects showcasing my work in system analysis support,
            web-based implementation, and process-driven solution delivery.
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

              <Card
                className={
                  project.status === "In Progress"
                    ? "relative h-full bg-card/50 backdrop-blur-md border-border/50 border-l-4 border-l-amber-500/60 overflow-hidden hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300"
                    : "relative h-full bg-card/50 backdrop-blur-md border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-300"
                }
              >
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

                  {/* Status badge moved to header to avoid overlapping the image */}
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    {project.status === "In Progress" && (
                      <Badge className="bg-slate-800 text-slate-100 border border-slate-700/60 shadow-md px-2 py-1 text-xs">
                        In Progress
                      </Badge>
                    )}
                  </div>
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
                    {project.notionLink && project.notionLink !== "#" && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                        onClick={() => window.open(project.notionLink, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Notion Page
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={!project.githubLink || project.githubLink === "#"}
                      className={
                        !project.githubLink || project.githubLink === "#"
                          ? "border-border/50 bg-muted/40 text-muted-foreground/70 cursor-not-allowed opacity-70"
                          : "border-border/50 hover:border-primary/50 hover:bg-primary/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                      }
                      onClick={() => project.githubLink && project.githubLink !== "#" && window.open(project.githubLink, '_blank')}
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