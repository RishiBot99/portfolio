import { motion } from "motion/react";
import { useInView } from "./useInView";
import { Zap, Cpu, Rocket, Music, Camera, Bike } from "lucide-react";

export function InterestsSection() {
  const [ref, isInView] = useInView();

  const interests = [
    {
      icon: Zap,
      title: "Renewable Energy",
      description: "Solar panel optimization and energy storage systems",
      color: "from-amber-600 to-orange-500",
    },
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "Microcontroller projects and real-time systems",
      color: "from-cyan-500 to-teal-600",
    },
    {
      icon: Rocket,
      title: "Space Technology",
      description: "Satellite systems and aerospace electronics",
      color: "from-red-500 to-orange-600",
    },
    {
      icon: Music,
      title: "Audio Electronics",
      description: "Analog synthesizers and guitar effect pedals",
      color: "from-amber-700 to-yellow-500",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing circuits, nature, and engineering moments",
      color: "from-stone-600 to-amber-500",
    },
    {
      icon: Bike,
      title: "Cycling",
      description: "Electric bike modifications and touring",
      color: "from-cyan-600 to-blue-500",
    },
  ];

  return (
    <section id="interests" className="py-20 bg-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-12 text-center text-amber-900 font-orbitron">Interests</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative overflow-hidden rounded-lg border-2 border-amber-900 shadow-lg hover:shadow-2xl hover:border-cyan-500 transition-all"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-90`}
                />
                <div className="relative p-6 text-white">
                  <interest.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl mb-2 font-lcd">{interest.title}</h3>
                  <p className="text-sm text-white/95 font-bodega">{interest.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
