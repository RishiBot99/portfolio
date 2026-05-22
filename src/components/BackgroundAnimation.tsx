import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface FloatingBlock {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export function BackgroundAnimation() {
  const [blocks, setBlocks] = useState<FloatingBlock[]>([]);

  useEffect(() => {
    const colors = ["#8B4513", "#A0522D", "#D2691E", "#FF8C00", "#FFA500", "#FFD700", "#DC143C", "#FF6347", "#40E0D0", "#00CED1", "#48D1CC"];
    const newBlocks: FloatingBlock[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 20,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
    setBlocks(newBlocks);
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {blocks.map((block) => (
          <motion.div
            key={block.id}
            initial={{ x: `${block.x}vw`, y: `${block.y}vh`, opacity: 0.3 }}
            animate={{
              x: [`${block.x}vw`, `${(block.x + 30) % 100}vw`, `${(block.x - 20) % 100}vw`, `${block.x}vw`],
              y: [`${block.y}vh`, `${(block.y - 40) % 100}vh`, `${(block.y + 20) % 100}vh`, `${block.y}vh`],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: block.duration,
              delay: block.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute"
            style={{
              width: `${block.size}px`,
              height: `${block.size}px`,
              backgroundColor: block.color,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 0.6, scale: 1, rotate: 5 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="fixed bottom-10 right-10 pointer-events-none z-10"
      >
        <svg width="180" height="120" viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="160" height="90" rx="8" fill="#8B4513" stroke="#654321" strokeWidth="2" />
          <rect x="20" y="30" width="140" height="50" rx="4" fill="#D2691E" />
          <circle cx="50" cy="80" r="15" fill="#4A4A4A" />
          <circle cx="130" cy="80" r="15" fill="#4A4A4A" />
          <motion.circle cx="50" cy="80" r="8" fill="#654321" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
          <motion.circle cx="130" cy="80" r="8" fill="#654321" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
          <rect x="70" y="70" width="40" height="20" rx="2" fill="rgba(64, 224, 208, 0.3)" />
          <circle cx="25" cy="35" r="3" fill="#40E0D0" />
          <circle cx="155" cy="35" r="3" fill="#40E0D0" />
          <circle cx="25" cy="95" r="3" fill="#40E0D0" />
          <circle cx="155" cy="95" r="3" fill="#40E0D0" />
          <line x1="30" y1="45" x2="150" y2="45" stroke="#8B4513" strokeWidth="2" />
          <line x1="30" y1="55" x2="120" y2="55" stroke="#8B4513" strokeWidth="2" />
        </svg>
      </motion.div>
    </>
  );
}
