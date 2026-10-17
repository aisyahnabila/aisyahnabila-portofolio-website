import { motion } from "motion/react";

const skillCategories = [
  {
    title: "System Analysis",
    skills: [
      "Requirements Gathering", "Business Process Modeling", "Use Case Diagram", "BPMN", "ERD"
    ]
  },
  {
    title: "Quality Assurance",
    skills: [
      "Manual Testing", "Functional Testing", "Regression Testing",
      "System Integration Testing (SIT)", "User Acceptance Testing (UAT)", "Bug Reporting"
    ]
  },
  {
    title: "Technical Writing",
    skills: [
      "Technical Specifications", "System Blueprint", "User Guides",
      "Project Documentation", "Issue Logs", "Change Requests"
    ]
  },
  {
    title: "Web Development & API",
    skills: [
      "PHP", "Laravel", "JavaScript", "REST API", "Tailwind CSS"
    ]
  },
  {
    title: "Database & Data Validation",
    skills: [
      "MySQL", "PostgreSQL", "SQL Server", "Data Validation"
    ]
  },
  {
    title: "Tools & Reporting",
    skills: [
      "ClickUp", "Draw.io", "Visual Paradigm", "Tableau", "Power BI", "Microsoft Office"
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3/12">
            Core capabilities in system analysis, testing support, and technical implementation for business-focused solutions.
          </p>
        </motion.div>

        <div>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={[
                index > 0 ? 'pt-8' : '',
                index < skillCategories.length - 1 ? 'border-b border-border/50 pb-8' : '',
              ].join(' ').trim()}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4">
                {category.title}
              </p>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-dashed border-foreground/30 text-sm text-foreground transition-colors duration-200 hover:bg-muted/50 dark:hover:bg-muted/50"
                  >
                    <span
                      className="rounded-full bg-primary shrink-0"
                      style={{ width: 6, height: 6 }}
                    />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
