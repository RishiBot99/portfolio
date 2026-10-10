import { motion } from "motion/react";
import { useInView } from "./useInView";
import { Users, Award, Presentation, BookOpen } from "lucide-react";

export function LeadershipSection() {
  const [ref, isInView] = useInView();

  const experiences = [
    {
      icon: BookOpen,
      role: "Treasurer",
      organization: "Society of Asian Students and Engineers (SASE) Student Branch",
      period: "May 2025 - Present",
      description:
        "Manage fundraising, project costs, events, travel, and raised $14000+ for the 2025-2026 budget, Organized mulitple trips for SASE National Conference and increased fundraising through % nights, food stalls, event tabling, and school funding",
    },
    {
      icon: Presentation,
      role: "Public Relations Chair",
      organization: "Institute of Electrical and Electronics Engineers (IEEE) Student Branch",
      period: "May 2026 - Present",
      description:
        "Organize outreach events at KU reaching over 1000 people across the university recruiting 40+ students, Reach out to company representatives to raise over $1000 for the KU Branch, improving events and projects, Manage Social Media and connections towards companies and communicate with hundreds of students",
    },
    {
      icon: Users,
      role: "Logistics",
      organization: "Association of Computing Machinery (ACM) Student Branch",
      period: "May 2026 - Present",
      description:
        "Budgeted and organized trips to hackathons and conferences for groups of over 10 students, and working on providing company tours",
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-12 text-center text-amber-900 font-orbitron">Leadership</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role + exp.organization}
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:border-cyan-500 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 border-2 border-cyan-600 rounded-lg">
                    <exp.icon className="w-8 h-8 text-cyan-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl text-amber-900 font-lcd">{exp.role}</h3>
                      <span className="text-sm text-stone-600 font-fixedsys">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-orange-700 mb-2 font-fixedsys">
                      {exp.organization}
                    </p>
                    <p className="text-stone-700 font-bodega">
                      {exp.description}
                    </p>
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
