import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiFolder, FiCalendar, FiLayers, FiArrowRight, FiX, FiCode, FiTerminal, FiExternalLink } from 'react-icons/fi';

const projectsData = [
  
  {
    title: "Volunteer Registration System",
    date: "Nov 2025",
    category: "Backend & Node.js",
    shortDesc: "Automated event registration system with JWT authentication and Nodemailer integrations.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
    githubLink: "https://github.com/VikhyatSaini/volunteer-registration-system", 
    liveLink: "https://volunteer-registration-system-rally.vercel.app/",
    bullets: [
      "Eliminated manual email follow-ups by designing an automated notification system using Nodemailer, saving an estimated 40% of administrative work hours per event.",
      "Reduced scheduling conflicts and double-booking errors by 95% through strict Mongoose schema validation enforcing real-time event capacity limits.",
      "Improved volunteer onboarding speed by 300% by replacing manual approval workflows with a secure, self-service JWT authentication system enabling instant profile creation."
    ]
  },
  {
    title: "Virtual Stylist with AI",
    date: "Apr 2025",
    category: "AI & Python",
    shortDesc: "AI-powered virtual stylist generating personalized outfit recommendations via Gemini 2.0.",
    techStack: ["Python", "Flask", "Gemini 2.0", "SQLite", "SQLAlchemy"],
    githubLink: "https://github.com/VikhyatSaini/VirtualStylist",
    liveLink: "https://virtualstylist.onrender.com",
    bullets: [
      "Built an AI-powered virtual stylist using Gemini 2.0 and Flask that generates personalized outfit recommendations based on user prompts, preferences, and occasions.",
      "Enhanced recommendation accuracy and user satisfaction by analyzing outfit preferences and personal styles using GenAI, improving engagement by 50%.",
      "Implemented a lightweight SQLite + SQLAlchemy backend to store user profiles and past interactions, enabling more accurate personalization and smoother conversational flow."
    ]
  },
  {
    title: "FedEx-Clone Parcel Delivery System",
    date: "Aug 2025",
    category: "Java Spring Boot",
    shortDesc: "Robust parcel delivery backend featuring Spring Security, JWT auth, and optimized JPA queries.",
    techStack: ["Java", "Spring Boot", "React.js", "Maven", "REST APIs"],
    githubLink: "https://github.com/VikhyatSaini/Zeno-Delivery", 
    bullets: [
      "Engineered a suite of RESTful APIs handling core functionalities, achieving >99.9% uptime during testing.",
      "Implemented role-based access control for 3 distinct user roles (customers, drivers, administrators) using Spring Security and JWT.",
      "Reduced average MySQL query latency by 15% through optimized schema design and Spring Data JPA integrations."
    ]
  }
];

const categories = ["All Projects", "Java Spring Boot", "Backend & Node.js", "AI & Python"];

// Helper to map tech stack names to specific brand colors
const getTechColor = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes("spring boot")) return "text-green-600 bg-green-500/10 border-green-500/20";
  if (t.includes("java") && !t.includes("javascript")) return "text-red-500 bg-red-500/10 border-red-500/20";
  if (t.includes("react")) return "text-cyan-500 bg-cyan-500/10 border-cyan-500/20";
  if (t.includes("node") || t.includes("express")) return "text-green-500 bg-green-500/10 border-green-500/20";
  if (t.includes("mongo")) return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
  if (t.includes("python")) return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20";
  if (t.includes("flask")) return "text-gray-800 dark:text-gray-200 bg-gray-500/10 border-gray-500/20";
  if (t.includes("sqlite") || t.includes("sqlalchemy") || t.includes("sql") || t.includes("mysql")) return "text-blue-500 bg-blue-500/10 border-blue-500/20";
  if (t.includes("gemini")) return "text-purple-500 bg-purple-500/10 border-purple-500/20";
  if (t.includes("maven")) return "text-red-600 bg-red-600/10 border-red-600/20";
  if (t.includes("nodemailer")) return "text-teal-500 bg-teal-500/10 border-teal-500/20";
  return "text-gray-600 dark:text-gray-300 bg-gray-500/10 border-gray-500/20"; // Default
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter(project => 
    activeFilter === "All Projects" || project.category === activeFilter
  );

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-4 md:px-8 lg:px-12 min-h-screen bg-[#f4f7f9] dark:bg-[#0B1120] relative overflow-hidden transition-colors duration-500">
      
      {/* High-Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKSIvPjwvc3ZnPg==')] opacity-50 dark:opacity-20 z-0 pointer-events-none"></div>

      {/* Massive Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-[#10b981] to-teal-500 rounded-full blur-[150px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1], rotate: [0, -90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-[-10%] w-[700px] h-[700px] bg-gradient-to-tl from-blue-500 to-indigo-500 rounded-full blur-[150px] pointer-events-none z-0"
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md mb-6 shadow-sm">
              <FiCode className="text-blue-500 animate-pulse" size={16} />
              <span className="text-xs font-black tracking-[0.2em] text-gray-800 dark:text-gray-300 uppercase">
                Architecture & Code
              </span>
            </div>
            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight drop-shadow-sm">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-teal-400 to-blue-500">Projects</span>
            </h2>
          </motion.div>

          {/* Premium Animated Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 md:gap-3 bg-white/40 dark:bg-[#1e293b]/40 backdrop-blur-xl p-2 rounded-2xl border border-white/50 dark:border-white/10 shadow-lg"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative px-6 py-3 rounded-xl text-sm md:text-base font-bold transition-all duration-500 ${
                  activeFilter === category 
                    ? 'text-white shadow-md' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
                }`}
              >
                {activeFilter === category && (
                  <motion.div 
                    layoutId="projectTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-blue-500 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 tracking-wide">{category}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid xl:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20, filter: "blur(10px)", transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: index * 0.05 }}
                key={project.title}
                className="group relative bg-white/70 dark:bg-[#1e293b]/50 backdrop-blur-xl border-2 border-gray-100/50 dark:border-white/5 p-8 md:p-10 rounded-[2.5rem] hover:border-[#10b981]/50 dark:hover:border-[#10b981]/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl dark:shadow-none flex flex-col h-full"
              >
                {/* Glowing Top Border Accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#10b981] via-teal-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Ambient Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Top Bar: Folder Icon & Links */}
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-100/50 dark:border-emerald-500/20 flex items-center justify-center text-[#10b981] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm shrink-0">
                    <FiFolder size={28} />
                  </div>
                  <div className="flex flex-wrap justify-end gap-2">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#10b981] to-teal-500 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300 text-xs md:text-sm font-bold shadow-sm"
                      >
                        <FiExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10 hover:border-gray-300 transition-all duration-300 text-xs md:text-sm font-bold shadow-sm"
                    >
                      <FiGithub size={16} /> Code
                    </a>
                  </div>
                </div>

                {/* Project Title & Meta */}
                <div className="mb-6 relative z-10">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#10b981] group-hover:to-blue-500 transition-all duration-500">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    <span className="flex items-center gap-2"><FiLayers className="text-blue-500" /> {project.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                    <span className="flex items-center gap-2"><FiCalendar className="text-[#10b981]" /> {project.date}</span>
                  </div>
                </div>

                {/* Short Description & Read More Button */}
                <div className="flex-grow mb-8 relative z-10 flex flex-col justify-start">
                  <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6 font-medium">
                    {project.shortDesc}
                  </p>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-3 text-[#10b981] font-bold text-sm w-fit group/btn hover:text-blue-500 transition-colors duration-300 px-4 py-2 rounded-lg bg-[#10b981]/10 hover:bg-blue-500/10"
                  >
                    View Architecture Details 
                    <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Tech Stack Footer (Color Coded) */}
                <div className="pt-6 border-t border-gray-100 dark:border-white/10 mt-auto relative z-10">
                  <div className="flex flex-wrap gap-2.5">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg border shadow-sm transition-transform hover:scale-105 ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Crosshairs Background */}
                <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-gray-300 dark:border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* --- CINEMATIC MODAL FOR DETAILED BULLET POINTS --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-gray-900/60 dark:bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative w-full max-w-4xl bg-white dark:bg-[#0B1120] border-2 border-gray-100 dark:border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-y-auto max-h-[90vh]"
            >
              {/* Modal Gradient Accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#10b981] via-teal-400 to-blue-500"></div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 p-3 text-gray-400 hover:text-white bg-gray-100 dark:bg-white/5 hover:bg-red-500 dark:hover:bg-red-500 rounded-full transition-all duration-300 shadow-sm"
              >
                <FiX size={24} />
              </button>

              {/* Modal Header */}
              <div className="mb-10 pr-16">
                <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  <span className="flex items-center gap-2"><FiLayers className="text-blue-500" /> {selectedProject.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 hidden sm:block"></span>
                  <span className="flex items-center gap-2"><FiCalendar className="text-[#10b981]" /> {selectedProject.date}</span>
                </div>
              </div>

              {/* Detailed Architecture Bullets */}
              <div className="mb-12 bg-gray-50 dark:bg-[#1e293b]/50 p-6 md:p-8 rounded-3xl border border-gray-200 dark:border-white/5">
                <h4 className="flex items-center gap-3 text-xl font-black text-gray-900 dark:text-gray-100 mb-8 pb-4 border-b border-gray-200 dark:border-white/10">
                  <FiTerminal className="text-[#10b981]" size={24} /> System Architecture & Implementation
                </h4>
                <ul className="space-y-6">
                  {selectedProject.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed font-medium">
                      <div className="mt-1.5 w-8 h-8 rounded-full bg-[#10b981]/10 flex items-center justify-center shrink-0 border border-[#10b981]/30">
                        <span className="text-[#10b981] text-xs font-black">{i + 1}</span>
                      </div>
                      <span className="pt-0.5">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                {selectedProject.liveLink && (
                  <a 
                    href={selectedProject.liveLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#10b981] to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white rounded-xl font-bold transition-all duration-500 shadow-lg shadow-emerald-500/25 hover:-translate-y-1 hover:shadow-emerald-500/40"
                  >
                    <FiExternalLink size={22} /> View Live Demo
                  </a>
                )}
                <a 
                  href={selectedProject.githubLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-500 hover:-translate-y-1 ${
                    selectedProject.liveLink 
                      ? "bg-white dark:bg-transparent border-2 border-gray-200 dark:border-white/10 text-gray-800 dark:text-white hover:border-[#10b981] dark:hover:border-[#10b981]" 
                      : "bg-gradient-to-r from-[#10b981] to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
                  }`}
                >
                  <FiGithub size={22} /> View Source Repository
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;

//done