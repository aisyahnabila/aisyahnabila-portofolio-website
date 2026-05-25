import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Technical Writer (System Analyst Support)",
      company: "PT Sistem Informatika Semen Indonesia",
      location: "Indonesia",
      period: "Nov 2025 - Present",
      description: [
        "Developed Project Charter, Blueprint, and Technical Specification documentation.",
        "Conducted requirement discussions with stakeholders to define system needs.",
        "Managed MoM, Issue Log, Change Request, and BAPP documentation.",
        "Delivered user training sessions and user guides to support adoption."
      ],
      technologies: ["ITIL Workflow", "ClickUp", "System Documentation", "Stakeholder Communication"]
    },
    {
      title: "Internship Web Developer",
      company: "Dinas Sosial Provinsi Jawa Timur",
      location: "Surabaya, Indonesia",
      period: "Jul 2024 - Sep 2024",
      description: [
        "Developed a web-based inventory management information system using Laravel.",
        "Reduced manual data entry errors by 30% through automated reporting and database validation.",
        "Produced requirement analysis artifacts including Use Case, BPMN, and ERD.",
        "Built inventory stock in/out and reporting features."
      ],
      technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Scrum"]
    },
    {
      title: "Odoo Engineer Intern",
      company: "PT Insan Sejahtera Engineering",
      location: "Indonesia",
      period: "Feb 2024 - Jul 2024",
      description: [
        "Developed a production monitoring app using Power Apps integrated with SQL Server and PLC data.",
        "Contributed technical documentation for international system demonstrations.",
        "Simulated Odoo ERP integration across Inventory, Purchase, Manufacturing, and Sales.",
        "Supported workflow improvements for industry case simulations."
      ],
      technologies: ["Odoo ERP", "Power Apps", "Power BI", "SQL Server", "PLC Integration"]
    },
    {
      title: "Independent Study - Data Analyst for Business",
      company: "MSIB Kampus Merdeka",
      location: "Indonesia",
      period: "Mar 2024 - May 2024",
      description: [
        "Analyzed 6 years of export-import data to identify demand trends and key market patterns.",
        "Delivered business recommendations using Tableau-based visualizations.",
        "Supported logistics and market strategy insights through data-driven analysis."
      ],
      technologies: ["Tableau", "Business Analysis", "Data Visualization", "Demand Trend Analysis"]
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
            Internship and project-based experiences in system analysis support,
            documentation, and business-focused technical implementation.
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
      </div>
    </section>
  );
}