import { motion } from "motion/react";
import { useInView } from "./useInView";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const [ref, isInView] = useInView();

  const projects = [
    {
      title: "Smart Home Energy Monitor",
      description:
        "IoT device using ESP32 to monitor and optimize household energy consumption with real-time data visualization",
      tags: ["IoT", "ESP32", "Python", "MQTT"],
      image: "bg-gradient-to-br from-cyan-500 to-teal-600",
    },
    {
      title: "Autonomous Line Following Robot",
      description:
        "Arduino-based robot with PID control for precise line tracking and obstacle avoidance capabilities",
      tags: ["Arduino", "C++", "Control Systems"],
      image: "bg-gradient-to-br from-amber-600 to-orange-600",
    },
    {
      title: "Solar MPPT Charge Controller",
      description:
        "Maximum Power Point Tracking controller for solar panels with 95% efficiency and LCD display",
      tags: ["Power Electronics", "Embedded C", "PCB Design"],
      image: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
    {
      title: "FPGA Digital Synthesizer",
      description:
        "Verilog-based audio synthesizer on FPGA with multiple waveforms and MIDI input support",
      tags: ["FPGA", "Verilog", "Digital Design"],
      image: "bg-gradient-to-br from-red-500 to-orange-600",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-12 text-center text-amber-900 font-orbitron">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-amber-50 border-2 border-amber-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:border-cyan-500 transition-all"
              >
                <div className={`h-48 ${project.image} flex items-center justify-center border-b-2 border-amber-800`}>
                  <div className="text-white text-6xl opacity-70">⚡</div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-amber-900 font-lcd">{project.title}</h3>
                  <p className="text-stone-700 mb-4 font-bodega">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-cyan-100 border border-cyan-600 text-cyan-900 rounded text-sm font-fixedsys"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-cyan-700 hover:text-cyan-900 hover:underline font-fixedsys"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-cyan-700 hover:text-cyan-900 hover:underline font-fixedsys"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
