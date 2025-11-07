import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Send, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
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
            Ready to start your next project? Let's discuss how I can help bring your
            ideas to life or optimize your existing systems.
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
                I'm always interested in hearing about new opportunities, challenging
                projects, or just having a conversation about technology and innovation.
                Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, color: "primary", label: "Email", value: "aisyahnabilaz514@gmail.com", link: "mailto:aisyahnabilaz514@gmail.com" },
                { icon: MessageCircle, color: "secondary", label: "WhatsApp", value: "+62 851-5650-5772", link: "https://wa.me/6285156505772" },
                { icon: MapPin, color: "accent", label: "Location", value: "Available for remote work worldwide", link: null }
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
                      <div className={`relative flex items-center justify-center w-14 h-14 bg-${item.color}/10 rounded-xl border border-${item.color}/20 group-hover:border-${item.color}/40 transition-all duration-300 group-hover:scale-110`}>
                        <item.icon className={`h-6 w-6 text-${item.color}`} />
                        <div className={`absolute -inset-1 bg-gradient-to-r from-${item.color}/0 to-${item.color}/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300`}></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{item.label}</h4>
                        <span className="text-muted-foreground hover:text-primary transition-colors">{item.value}</span>
                      </div>
                    </a>
                  ) : (
                    <>
                      <div className={`relative flex items-center justify-center w-14 h-14 bg-${item.color}/10 rounded-xl border border-${item.color}/20 group-hover:border-${item.color}/40 transition-all duration-300 group-hover:scale-110`}>
                        <item.icon className={`h-6 w-6 text-${item.color}`} />
                        <div className={`absolute -inset-1 bg-gradient-to-r from-${item.color}/0 to-${item.color}/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300`}></div>
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
                      placeholder="Project inquiry, collaboration, etc."
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
                      placeholder="Tell me about your project or how I can help..."
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
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
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
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}