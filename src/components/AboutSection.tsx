import { motion } from "motion/react";
import { useInView } from "./useInView";
import { Code, Cpu, Lightbulb, Target } from "lucide-react";

export function AboutSection() {
  const [ref, isInView] = useInView();

  const skills = [
    {
      icon: Cpu,
      title: "Circuit Design",
      description: "Analog and digital circuit design with hands-on PCB experience",
    },
    {
      icon: Code,
      title: "Embedded Systems",
      description: "C/C++ programming for microcontrollers and FPGA development",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical approach to complex engineering challenges",
    },
    {
      icon: Target,
      title: "Project Management",
      description: "Leading technical teams and delivering results on time",
    },
  ];

  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-12 text-center text-amber-900 font-orbitron">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-stone-800 mb-4 font-bodega">
                I'm a passionate electrical engineering student with a focus on
                power systems, embedded development, and innovative circuit
                design. My journey in engineering has been driven by curiosity
                and a desire to solve real-world problems through technology.
              </p>
              <p className="text-lg text-stone-800 font-bodega">
                When I'm not designing circuits or coding microcontrollers, you
                can find me leading student organizations, conducting research,
                or mentoring fellow students in their engineering journey.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-amber-600 via-orange-500 to-cyan-400 rounded-lg shadow-2xl flex items-center justify-center border-4 border-amber-900">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Cpu className="w-32 h-32 text-white" />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-800 rounded-lg shadow-md hover:shadow-xl hover:border-cyan-500 transition-all"
              >
                <skill.icon className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="mb-2 text-amber-900 font-lcd">{skill.title}</h3>
                <p className="text-sm text-stone-700 font-bodega">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
