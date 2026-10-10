import { motion } from "framer-motion";
import { useInView } from "./useInView";
import { Link } from "react-router-dom";
import { interests } from "../data/interests";

export function InterestsSection() {
  const [ref, isInView] = useInView();

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
              <Link key={interest.id} to={`/interest/${interest.id}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative h-64 overflow-hidden rounded-lg border-2 border-amber-900 shadow-lg group cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-90 transition-opacity group-hover:opacity-100`} />
                  <div className="relative p-6 text-white h-full flex flex-col justify-between">
                    <div>
                      <interest.icon className="w-12 h-12 mb-4" />
                      <h3 className="text-xl mb-2 font-lcd">{interest.title}</h3>
                      <p className="text-sm text-white/90 font-bodega">{interest.description}</p>
                    </div>
                    <span className="text-xs font-fixedsys opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to read more →
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}