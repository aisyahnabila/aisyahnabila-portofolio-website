import { Mail, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { EMAIL, EMAIL_MAILTO, PHONE_DISPLAY, WHATSAPP_URL } from "../lib/contact";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10"></div>
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column — reserved for a campaign/call-to-action treatment */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's work together.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Open to entry-level System Analyst roles and collaborative projects —
              I connect business requirements with practical technical delivery,
              from documentation to QA. Feel free to reach out.
            </p>
          </motion.div>

          {/* Right column — direct contact methods */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                icon: Mail, label: "Email", value: EMAIL, link: EMAIL_MAILTO,
                iconWrap: "bg-primary/10 border-primary/20 group-hover:border-primary/40",
                iconColor: "text-primary",
                glow: "from-primary/0 to-primary/20"
              },
              {
                icon: MessageCircle, label: "WhatsApp", value: PHONE_DISPLAY, link: WHATSAPP_URL,
                iconWrap: "bg-secondary/10 border-secondary/20 group-hover:border-secondary/40",
                iconColor: "text-secondary",
                glow: "from-secondary/0 to-secondary/20"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group flex items-center gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <a
                  href={item.link}
                  target={item.label === "Email" ? "_self" : "_blank"}
                  rel={item.label === "Email" ? "" : "noopener noreferrer"}
                  className="flex items-center gap-4 flex-1"
                >
                  <div className={`relative flex items-center justify-center w-14 h-14 rounded-xl border transition-all duration-300 group-hover:scale-110 ${item.iconWrap}`}>
                    <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                    <div className={`absolute -inset-1 bg-gradient-to-r ${item.glow} rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300`}></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{item.label}</h4>
                    <span className="text-muted-foreground hover:text-primary transition-colors">{item.value}</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
