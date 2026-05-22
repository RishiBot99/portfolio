import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  name: string;
  title: string;
  bio: string;
}

export function Header({ name = "", title = "", bio = "" }: HeaderProps) {
  const [displayedName, setDisplayedName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < name.length) {
      const timeout = setTimeout(() => {
        setDisplayedName((prev) => prev + name[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, name]);

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-amber-800 via-red-600 to-cyan-500 bg-clip-text text-transparent font-orbitron">
            {displayedName}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block ml-1"
            >
              |
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: name.length * 0.15 + 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-amber-900 mb-6 font-fixedsys"
          >
            {title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: name.length * 0.15 + 0.8, duration: 0.8 }}
            className="text-base md:text-lg text-stone-700 max-w-2xl mx-auto mb-8 font-bodega"
          >
            {bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: name.length * 0.15 + 1.3, duration: 0.8 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="#"
              className="p-3 bg-amber-100 border-2 border-amber-800 rounded-lg shadow-lg hover:shadow-xl hover:bg-cyan-100 hover:border-cyan-600 transition-all"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-amber-900" />
            </a>
            <a
              href="#"
              className="p-3 bg-amber-100 border-2 border-amber-800 rounded-lg shadow-lg hover:shadow-xl hover:bg-cyan-100 hover:border-cyan-600 transition-all"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-amber-900" />
            </a>
            <a
              href="#"
              className="p-3 bg-amber-100 border-2 border-amber-800 rounded-lg shadow-lg hover:shadow-xl hover:bg-cyan-100 hover:border-cyan-600 transition-all"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-amber-900" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: name.length * 0.15 + 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-amber-700"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
