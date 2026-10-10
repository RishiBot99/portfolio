import { motion } from "motion/react";
import { useInView } from "./useInView"; // Ensure this path matches your folder
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects"; // Import the data we just created

export function ProjectsSection() {
  const [ref, isInView] = useInView();

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
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-amber-50 border-2 border-amber-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:border-cyan-500 transition-all flex flex-col"
              >
                {/* Clickable Image Area */}
                <Link to={`/project/${project.id}`} className="h-48 relative overflow-hidden block">
                  <div className={`w-full h-full ${project.image} flex items-center justify-center border-b-2 border-amber-800 transition-transform duration-500 group-hover:scale-110`}>
                    <div className="text-white text-6xl opacity-70">⚡</div>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-amber-100 text-amber-900 px-4 py-2 rounded-lg font-lcd flex items-center gap-2">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="mb-3 text-amber-900 font-lcd text-xl">{project.title}</h3>
                  <p className="text-stone-700 mb-4 font-bodega flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-cyan-100 border border-cyan-600 text-cyan-900 rounded text-xs font-fixedsys">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-amber-200">
                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} className="text-cyan-700 hover:text-cyan-900 flex items-center gap-1 font-fixedsys text-sm">
                          <Github className="w-4 h-4" /> Code
                        </a>
                      )}
                    </div>
                    <Link to={`/project/${project.id}`} className="text-amber-900 font-lcd text-sm hover:underline flex items-center gap-1">
                      Case Study <ArrowRight className="w-4 h-4" />
                    </Link>
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