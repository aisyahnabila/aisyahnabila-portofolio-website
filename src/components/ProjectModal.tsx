import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, X } from "lucide-react";
import { getTechInfo } from "../lib/techIcons";

export interface Project {
  title: string;
  description: string;
  image: string;
  gallery?: string[];
  technologies: string[];
  status: string;
  category?: string;
  year?: string;
  featured?: boolean;
  notionLink?: string;
  githubLink?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [project]);

  const images = project ? [project.image, ...(project.gallery ?? [])] : [];

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="fixed inset-0 z-50 m-auto w-full max-w-4xl h-fit border border-border rounded-lg bg-background shadow-lg p-0 overflow-hidden"
      >
        {project && (
          <div className="overflow-y-auto custom-scrollbar" style={{ maxHeight: '85vh' }}>
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-background/95 backdrop-blur-sm">
              <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                Project Overview
              </span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Close
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-6">
              <div>
                <div className="rounded-lg overflow-hidden border border-border/50">
                  <img
                    src={images[activeImage]}
                    alt={project.title}
                    className="w-full aspect-video object-cover"
                  />
                </div>

                {images.length > 1 && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-2">
                      Gallery Views
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {images.map((src, i) => (
                        <button
                          key={src}
                          type="button"
                          onClick={() => setActiveImage(i)}
                          className={`rounded-md overflow-hidden border transition-colors ${
                            i === activeImage ? 'border-primary' : 'border-border/50'
                          }`}
                        >
                          <img
                            src={src}
                            alt=""
                            className="object-cover"
                            style={{ width: 64, height: 64 }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {project.category && (
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  )}
                  {project.year && (
                    <Badge variant="outline" className="text-xs">
                      {project.year}
                    </Badge>
                  )}
                  {project.featured && (
                    <Badge className="text-xs bg-primary text-primary-foreground border-transparent">
                      Featured Project
                    </Badge>
                  )}
                  {project.status === "In Progress" && (
                    <Badge variant="outline" className="text-xs">
                      In Progress
                    </Badge>
                  )}
                </div>

                <DialogTitle className="text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </DialogTitle>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="border-t border-border/50 pt-4">
                  <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-3">
                    Technical Architecture &amp; Stack
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.technologies.map((tech) => {
                      const { icon: Icon, color, description } = getTechInfo(tech);
                      return (
                        <div
                          key={tech}
                          className="flex items-center gap-3 rounded-lg border border-border/50 px-3 py-2"
                        >
                          <Icon className="h-5 w-5 shrink-0" style={{ color }} />
                          <div>
                            <p className="text-sm font-medium text-foreground leading-tight">
                              {tech}
                            </p>
                            {description && (
                              <p className="text-xs text-muted-foreground leading-tight">
                                {description}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {(project.notionLink || project.githubLink) && (
                  <div className="flex gap-3 pt-6">
                    {project.notionLink && (
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.notionLink, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Notion Page
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
