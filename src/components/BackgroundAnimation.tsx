import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  y: number;          // Vertical position (0-100vh)
  size: number;       // Size in pixels
  color: string;      // Color from the EE theme
  duration: number;   // Speed of travel
  delay: number;      // Staggered start time
}

export function BackgroundAnimation() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Electrical Engineering themed colors (Copper, Gold, Cyan, Slate)
    const colors = ["#B87333", "#DAA520", "#00ced1", "#94a3b8", "#fbbf24"];
    
    const newParticles: Particle[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      y: Math.random() * 100,             // Random height
      size: Math.random() * 6 + 4,        // Small (4px to 10px)
      color: colors[i % colors.length],
      duration: Math.random() * 10 + 15,  // Slow (15s to 25s across screen)
      delay: Math.random() * 20,          // Staggered start
    }));
    setParticles(newParticles);
  }, []);

  return (
    // Fixed container, z-index -1 puts it behind EVERYTHING
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-background">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: "-10vw", y: `${p.y}vh`, opacity: 0 }}
          animate={{ 
            x: "110vw",   // Move from left to right
            opacity: [0, 0.15, 0.15, 0] // Fade in at start, fade out at end
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-sm shadow-sm"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            // Makes them look a bit more "electronic" (blurred drift)
            filter: "blur(1px)",
          }}
        />
      ))}
      
      {/* Optional: Add a subtle grid overlay to look like engineering paper */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, 
          backgroundSize: '24px 24px' 
        }} 
      />
    </div>
  );
}