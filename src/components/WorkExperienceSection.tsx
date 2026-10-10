import { motion } from "framer-motion";
import { useInView } from "./useInView";
import { Briefcase, FileText, Factory, Microscope } from "lucide-react";

export function WorkExperienceSection() {
  const [ref, isInView] = useInView();

  // The 3 items (Industry + Research)
  const experiences = [
    {
      icon: Factory,
      title: "KUbeSat Power Team Lead",
      company: "KUbeSat @The University of Kansas",
      description: "Organized Power Budget for 3U Cubesat, Created professional Critical Design Reviews for the development of the KUbeSat2 Power Generation and Distribution System",
    },
    {
      icon: Microscope,
      title: "Undergraduate Researcher",
      company: "University Power Lab",  
      description: "Published research on wireless power transfer efficiency and coil optimization.",
    },
    {
      icon: FileText,
      title: "Personal Tutor",
      company: "PeerTutors",
      description: "Drafted technical specifications and schematics for renewable energy startups.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-12 text-center text-amber-900 font-orbitron">Work Experience</h2>

          {/* 3 ITEM GRID - Perfectly balanced on desktop */}
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-amber-50 border-2 border-amber-800 p-8 rounded-lg shadow-md hover:border-cyan-500 transition-all flex flex-col"
              >
                <div className="p-3 bg-cyan-100 border border-cyan-600 rounded-lg w-fit mb-6">
                  <exp.icon className="w-8 h-8 text-cyan-700" />
                </div>
                
                <h3 className="text-xl text-amber-900 font-lcd mb-1">{exp.title}</h3>
                <p className="text-orange-700 font-fixedsys text-sm mb-1">{exp.company}</p>
                <p className="text-stone-500 font-fixedsys text-xs mb-4">{exp.description}</p>
                
                <p className="text-stone-700 font-bodega leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}