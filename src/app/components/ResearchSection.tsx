import { motion } from "motion/react";
import { useInView } from "./useInView";
import { FileText, BookOpen } from "lucide-react";

export function ResearchSection() {
  const [ref, isInView] = useInView();

  const research = [
    {
      title: "Optimization of Wireless Power Transfer Efficiency",
      authors: "Your Name, Dr. Advisor Name",
      publication: "IEEE Student Conference 2024",
      abstract:
        "Investigated resonant inductive coupling techniques to improve WPT efficiency over varying distances. Achieved 15% improvement through coil geometry optimization.",
      tags: ["Wireless Power", "Electromagnetics", "Optimization"],
    },
    {
      title: "Machine Learning for Predictive Maintenance in Power Grids",
      authors: "Your Name, Research Team",
      publication: "Under Review - Energy Systems Journal",
      abstract:
        "Developed LSTM-based model to predict equipment failures in distribution networks, reducing downtime by 30% in simulation studies.",
      tags: ["Machine Learning", "Power Systems", "Data Analytics"],
    },
    {
      title: "Low-Power IoT Sensor Network for Smart Agriculture",
      authors: "Your Name, Dr. Co-Investigator",
      publication: "Undergraduate Research Symposium 2023",
      abstract:
        "Designed energy-efficient sensor nodes with solar harvesting, achieving 2-year battery life. Deployed pilot network across 10-acre farm.",
      tags: ["IoT", "Energy Harvesting", "Agriculture"],
    },
  ];

  return (
    <section id="research" className="py-20 bg-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-12 text-center text-amber-900 font-orbitron">Research</h2>
          <div className="space-y-8">
            {research.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-amber-50 border-2 border-amber-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-cyan-500 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 border-2 border-cyan-600 rounded-lg">
                    <FileText className="w-6 h-6 text-cyan-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2 text-amber-900 font-lcd">{paper.title}</h3>
                    <p className="text-sm text-stone-600 mb-1 font-fixedsys">
                      {paper.authors}
                    </p>
                    <p className="text-sm text-orange-700 mb-3 font-fixedsys">
                      {paper.publication}
                    </p>
                    <p className="text-stone-700 mb-4 font-bodega">
                      {paper.abstract}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {paper.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-cyan-100 border border-cyan-600 text-cyan-900 rounded text-sm font-fixedsys"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-900 hover:underline font-fixedsys"
                    >
                      <BookOpen className="w-4 h-4" />
                      Read Paper
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
