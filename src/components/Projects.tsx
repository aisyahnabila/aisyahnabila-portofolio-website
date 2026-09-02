import { useState } from "react";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { ProjectModal, type Project } from "./ProjectModal";
import { getTechInfo } from "../lib/techIcons";

const projects: Project[] = [
  {
    title: "Tally Reporting System",
    description: "Supported workflow and requirement analysis for a reporting system involving survey, dashboard, and finance processes across multiple user roles.",
    image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg0NTcwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Laravel", "PHP", "Blade", "MVC", "System Analysis"],
    status: "In Progress",
  },
  {
    title: "Litera - Digital Publishing Ecosystem",
    description: "A digital publishing platform consisting of a mobile app for readers and writers, as well as a web dashboard for administrators and editors.",
    image: new URL("../assets/Litera.jpg", import.meta.url).href,
    technologies: ["Laravel", "PHP", "Tailwind CSS", "JavaScript", "React Native"],
    status: "Completed",
    notionLink: "https://www.notion.so/Litera-Digital-Book-Platform-2a998004415e812f8325ca5759f11f50?source=copy_link",
  },
  {
    title: "Careventory - Consumable Inventory Management System",
    description: "Built an integrated inventory management system with digital transaction logging and reporting to improve tracking accuracy.",
    image: new URL("../assets/Careventory.jpg", import.meta.url).href,
    technologies: ["Laravel", "PHP", "Tailwind CSS", "JavaScript"],
    status: "Completed",
    notionLink: "https://www.notion.so/Careventory-Web-Based-Inventory-Management-System-2a998004415e81eeac84e83d4674f029?source=copy_link",
    githubLink: "https://github.com/aisyahnabila/Careventory_V3.git",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className="h-full flex flex-col cursor-pointer rounded-xl border border-dashed border-foreground/20 overflow-hidden transition-colors duration-200 hover:bg-muted/50 dark:hover:bg-muted/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.status === "In Progress" && (
                      <Badge variant="outline" className="text-xs shrink-0">
                        In Progress
                      </Badge>
                    )}
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => {
                      const { icon: Icon, color } = getTechInfo(tech);
                      return (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 rounded-md border border-border/50 px-2 py-1 text-xs text-foreground"
                        >
                          <Icon className="h-4 w-4 shrink-0" style={{ color }} />
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex justify-end border-t border-border/50 pt-4 mt-auto">
                    <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      View Details &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
