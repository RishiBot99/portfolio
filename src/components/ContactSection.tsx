import { motion } from "motion/react";
import { useInView } from "./useInView";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export function ContactSection() {
  const [ref, isInView] = useInView();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-100 via-orange-100 to-red-100">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl mb-8 text-amber-900 font-orbitron">Get In Touch</h2>
          <p className="text-lg text-stone-800 mb-12 max-w-2xl mx-auto font-bodega">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "your.email@university.edu",
                href: "mailto:your.email@university.edu",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "/in/yourname",
                href: "https://linkedin.com/in/yourname",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "@yourname",
                href: "https://github.com/yourname",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "University City, State",
                href: "#",
              },
            ].map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 bg-amber-50 border-2 border-amber-800 rounded-lg shadow-md hover:shadow-xl hover:border-cyan-500 transition-all"
              >
                <contact.icon className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                <p className="text-sm text-stone-600 mb-1 font-fixedsys">
                  {contact.label}
                </p>
                <p className="text-sm break-all text-amber-900 font-bodega">{contact.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:your.email@university.edu"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-cyan-500 border-2 border-cyan-800 text-amber-900 rounded-lg shadow-lg hover:bg-cyan-400 transition-all font-lcd"
          >
            Send Me a Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
