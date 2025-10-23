import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Senior Web Developer & System Analyst",
      company: "TechCorp Solutions",
      location: "Remote",
      period: "2022 - Present",
      description: [
        "Lead development of enterprise web applications serving 10,000+ users",
        "Conducted comprehensive system analysis resulting in 40% performance improvement",
        "Collaborated with stakeholders to gather requirements and design optimal solutions",
        "Mentored junior developers and established coding standards"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "System Design"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      location: "San Francisco, CA",
      period: "2020 - 2022",
      description: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Designed and implemented RESTful APIs for mobile and web clients",
        "Optimized database queries reducing response time by 60%",
        "Participated in agile development cycles and code reviews"
      ],
      technologies: ["Vue.js", "Python", "Django", "MySQL", "Docker"]
    },
    {
      title: "System Analyst",
      company: "Business Solutions Group",
      location: "New York, NY",
      period: "2018 - 2020",
      description: [
        "Analyzed business processes and identified automation opportunities",
        "Created detailed system documentation and workflow diagrams",
        "Coordinated with IT teams to implement system improvements",
        "Trained end users on new systems and processes"
      ],
      technologies: ["Business Analysis", "Process Optimization", "SQL", "Visio", "Documentation"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My journey in web development and system analysis, working with diverse teams 
            to deliver impactful solutions.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground mb-2">
                      {exp.title}
                    </CardTitle>
                    <h3 className="text-lg font-semibold text-primary">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground flex items-start gap-3">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-secondary font-medium">Available for new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}