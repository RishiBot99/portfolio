import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { interests } from "../data/interests";

export function InterestDetail() {
  const { interestId } = useParams();
  const navigate = useNavigate();
  
  const interest = interests.find((i) => i.id === interestId);

  if (!interest) return <div className="py-20 text-center">Interest not found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="pt-32 pb-20 max-w-4xl mx-auto px-6 min-h-screen"
    >
      <button 
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-cyan-600 hover:text-cyan-400 mb-8 font-fixedsys transition-colors"
      >
        <ArrowLeft className="w-5 h-5" /> Back to Portfolio
      </button>

      <div className="flex items-center gap-4 mb-6">
         <div className={`p-4 rounded-xl bg-gradient-to-br ${interest.color} text-white shadow-lg`}>
            <interest.icon className="w-10 h-10" />
         </div>
         <h1 className="text-4xl md:text-6xl font-orbitron text-amber-900">{interest.title}</h1>
      </div>

      <div className="bg-amber-100/50 border-2 border-amber-800 p-8 rounded-2xl shadow-inner mb-12">
        <p className="text-stone-800 font-bodega text-xl leading-relaxed italic">
          "{interest.fullContent}"
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {interest.images.map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            className="rounded-lg border-2 border-amber-800 shadow-md object-cover w-full h-80" 
            alt="Gallery"
          />
        ))}
      </div>
    </motion.div>
  );
}