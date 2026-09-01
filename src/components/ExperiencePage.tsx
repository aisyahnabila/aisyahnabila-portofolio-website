import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";

interface ExperiencePageProps {
  onBack: () => void;
}

export function ExperiencePage({ onBack }: ExperiencePageProps) {
  const experiences = [
    {
      title: "Technical Writer",
      company: "PT Sistem Informatika Semen Indonesia",
      location: "Gresik, Indonesia",
      period: "Nov 2025 - May 2026",
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
      location: "Sidoarjo, Indonesia",
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
      location: "Surabaya, Indonesia",
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
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8" style={{ paddingTop: 'clamp(96px, 13vw, 150px)' }}>
      <div className="max-w-3xl mx-auto">
        <motion.button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Experience
          </h1>
          <p className="text-muted-foreground">
            Where I've worked and what I did there.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting timeline line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Timeline dot */}
                <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-foreground" aria-hidden="true" />

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <span>{exp.period}</span>
                </div>

                <h2 className="text-xl font-bold text-foreground">
                  {exp.title}
                </h2>
                <h3 className="font-semibold text-foreground/90">
                  {exp.company}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
