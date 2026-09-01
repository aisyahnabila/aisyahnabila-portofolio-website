import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface AboutProps {
  onViewDetails: () => void;
}

export function About({ onViewDetails }: AboutProps) {
  const experiences = [
    {
      title: "Technical Writer",
      company: "PT Sistem Informatika Semen Indonesia",
      location: "Gresik, Indonesia",
      period: "Nov 2025 - May 2026",
    },
    {
      title: "Internship Web Developer",
      company: "Dinas Sosial Provinsi Jawa Timur",
      location: "Surabaya, Indonesia",
      period: "Jul 2024 - Sep 2024",
    },
    {
      title: "Odoo Engineer Intern",
      company: "PT Insan Sejahtera Engineering",
      location: "Sidoarjo, Indonesia",
      period: "Feb 2024 - Jul 2024",
    },
    {
      title: "Independent Study - Data Analyst for Business",
      company: "MSIB Kampus Merdeka",
      location: "Surabaya, Indonesia",
      period: "Mar 2024 - May 2024",
    },
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              Experience
            </h2>
            <button
              type="button"
              onClick={onViewDetails}
              className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              View Details
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="grid gap-4"
                style={{ gridTemplateColumns: 'minmax(0, 7.5rem) 1fr' }}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <span className="text-sm text-muted-foreground pt-0.5">
                  {exp.period}
                </span>
                <div>
                  <h3 className="font-bold text-foreground leading-snug">
                    {exp.title}
                  </h3>
                  <p className="font-semibold text-foreground/90">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {exp.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
