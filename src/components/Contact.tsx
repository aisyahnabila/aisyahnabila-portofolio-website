import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Send, Sparkles, MessageCircle, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const CONTACT_EMAIL = "aisyahnabilaz514@gmail.com";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const subject = (formData.get("subject") as string).trim();
    const message = (formData.get("message") as string).trim();

    const mailtoSubject = subject || `Portfolio contact from ${name}`;
    const mailtoBody = `${message}\n\n— ${name} (${email})`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10"></div>
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
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
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I am open to entry-level System Analyst opportunities and collaborative
            projects in business system development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                If you are looking for someone who can connect business requirements
                with practical technical delivery, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail, label: "Email", value: "aisyahnabilaz514@gmail.com", link: "mailto:aisyahnabilaz514@gmail.com",
                  iconWrap: "bg-primary/10 border-primary/20 group-hover:border-primary/40",
                  iconColor: "text-primary",
                  glow: "from-primary/0 to-primary/20"
                },
                {
                  icon: MessageCircle, label: "WhatsApp", value: "+62 851-5650-5772", link: "https://wa.me/6285156505772",
                  iconWrap: "bg-secondary/10 border-secondary/20 group-hover:border-secondary/40",
                  iconColor: "text-secondary",
                  glow: "from-secondary/0 to-secondary/20"
                },
                {
                  icon: MapPin, label: "Location", value: "Open to on-site, hybrid, and remote opportunities", link: null,
                  iconWrap: "bg-accent/10 border-accent/20 group-hover:border-accent/40",
                  iconColor: "text-accent",
                  glow: "from-accent/0 to-accent/20"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {item.link ? (
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
                  ) : (
                    <>
                      <div className={`relative flex items-center justify-center w-14 h-14 rounded-xl border transition-all duration-300 group-hover:scale-110 ${item.iconWrap}`}>
                        <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                        <div className={`absolute -inset-1 bg-gradient-to-r ${item.glow} rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300`}></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{item.label}</h4>
                        <span className="text-muted-foreground">{item.value}</span>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <Card className="relative bg-card/50 backdrop-blur-md border-border/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-2xl pointer-events-none"></div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="bg-muted/50 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        className="bg-muted/50 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Job opportunity or collaboration"
                      className="bg-muted/50 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about the role, project, or collaboration details..."
                      className="bg-muted/50 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-all duration-300"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>

                  {submitted && (
                    <p role="status" className="flex items-center gap-2 text-sm text-secondary">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      Your email client should now open with your message ready to send.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}