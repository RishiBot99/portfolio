// src/pages/ProjectDetail.tsx
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Settings } from "lucide-react";
import { projects } from "../data/projects";

export function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find((p) => p.id === projectId);

  if (!project) return <div className="py-20 text-center">Project not found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="pt-32 pb-20 max-w-4xl mx-auto px-6"
    >
      <button 
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-cyan-600 hover:text-cyan-400 mb-8 font-fixedsys transition-colors"
      >
        <ArrowLeft className="w-5 h-5" /> Back to Portfolio
      </button>

      <h1 className="text-4xl md:text-6xl font-orbitron text-amber-900 mb-6">{project.title}</h1>

      {/* GALLERY SECTION - Now using project.images (plural) */}
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {project.images && project.images.length > 0 ? (
          project.images.map((img, idx) => (
            <img 
              key={idx} 
              src={img} 
              alt={`${project.title} screenshot ${idx + 1}`}
              className="rounded-lg border-2 border-amber-800 shadow-lg object-cover w-full h-64 bg-stone-200" 
              // Added bg-stone-200 so it's visible even if image is missing
            />
          ))
        ) : (
          <div className={`w-full h-64 ${project.image} rounded-lg flex items-center justify-center text-white text-4xl`}>
             ⚡ No Photos Yet
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-lcd text-amber-800 mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6" /> Overview
          </h2>
          <p className="text-stone-700 font-bodega text-lg leading-relaxed mb-6">
            {project.fullDescription}
          </p>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-800 h-fit">
          <h2 className="text-xl font-lcd text-amber-800 mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5" /> Components
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map(tool => (
              <span key={tool} className="px-3 py-1 bg-cyan-100 border border-cyan-600 text-cyan-900 text-xs font-fixedsys rounded">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}