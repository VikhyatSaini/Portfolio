import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importing Icons
import { 
  FaJava, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaReact, 
  FaNodeJs, FaGitAlt, FaGithub, FaDocker
} from 'react-icons/fa';
import { 
  SiCplusplus, SiC, SiJavascript, SiExpress, SiSpringboot, SiFlask,
  SiMysql, SiMongodb, SiSqlite, SiPostman, SiApachemaven, SiJira, SiVercel, SiSelenium
} from 'react-icons/si';
import { FiUsers, FiRefreshCw, FiZap, FiCpu } from 'react-icons/fi';

const skillsData = {
  "Languages": [
    { name: 'Java', icon: FaJava, color: 'text-red-500', glow: 'shadow-red-500/50', border: 'group-hover:border-red-500/50', bg: 'bg-red-500/10' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-500', glow: 'shadow-blue-500/50', border: 'group-hover:border-blue-500/50', bg: 'bg-blue-500/10' },
    { name: 'Python', icon: FaPython, color: 'text-yellow-400', glow: 'shadow-yellow-400/50', border: 'group-hover:border-yellow-400/50', bg: 'bg-yellow-400/10' },
    { name: 'C', icon: SiC, color: 'text-blue-600', glow: 'shadow-blue-600/50', border: 'group-hover:border-blue-600/50', bg: 'bg-blue-600/10' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-300', glow: 'shadow-yellow-300/50', border: 'group-hover:border-yellow-300/50', bg: 'bg-yellow-400/10' },
    { name: 'PHP', icon: FaPhp, color: 'text-indigo-400', glow: 'shadow-indigo-400/50', border: 'group-hover:border-indigo-400/50', bg: 'bg-indigo-500/10' },
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-500', glow: 'shadow-orange-500/50', border: 'group-hover:border-orange-500/50', bg: 'bg-orange-500/10' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-400', glow: 'shadow-blue-400/50', border: 'group-hover:border-blue-400/50', bg: 'bg-blue-500/10' }
  ],
  "Frameworks": [
    { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-500', glow: 'shadow-green-500/50', border: 'group-hover:border-green-500/50', bg: 'bg-green-500/10' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600', glow: 'shadow-green-600/50', border: 'group-hover:border-green-600/50', bg: 'bg-green-600/10' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-800 dark:text-gray-200', glow: 'shadow-gray-400/50', border: 'group-hover:border-gray-400/50', bg: 'bg-gray-500/10' },
    { name: 'Flask', icon: SiFlask, color: 'text-gray-900 dark:text-white', glow: 'shadow-gray-500/50', border: 'group-hover:border-gray-500/50', bg: 'bg-gray-500/10' },
    { name: 'React.js', icon: FaReact, color: 'text-cyan-400', glow: 'shadow-cyan-400/50', border: 'group-hover:border-cyan-400/50', bg: 'bg-cyan-400/10' }
  ],
  "Tools & Database": [
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', glow: 'shadow-green-500/50', border: 'group-hover:border-green-500/50', bg: 'bg-green-600/10' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600 dark:text-blue-400', glow: 'shadow-blue-500/50', border: 'group-hover:border-blue-500/50', bg: 'bg-blue-500/10' },
    { name: 'SQLite', icon: SiSqlite, color: 'text-sky-500', glow: 'shadow-sky-500/50', border: 'group-hover:border-sky-500/50', bg: 'bg-sky-500/10' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-500', glow: 'shadow-blue-500/50', border: 'group-hover:border-blue-500/50', bg: 'bg-blue-500/10' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600', glow: 'shadow-orange-600/50', border: 'group-hover:border-orange-600/50', bg: 'bg-orange-600/10' },
    { name: 'GitHub', icon: FaGithub, color: 'text-gray-900 dark:text-white', glow: 'shadow-gray-500/50', border: 'group-hover:border-gray-500/50', bg: 'bg-gray-500/10' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-500', glow: 'shadow-orange-500/50', border: 'group-hover:border-orange-500/50', bg: 'bg-orange-500/10' },
    { name: 'Maven', icon: SiApachemaven, color: 'text-red-600', glow: 'shadow-red-600/50', border: 'group-hover:border-red-600/50', bg: 'bg-red-600/10' },
    { name: 'Jira', icon: SiJira, color: 'text-blue-500', glow: 'shadow-blue-500/50', border: 'group-hover:border-blue-500/50', bg: 'bg-blue-500/10' },
    { name: 'Vercel', icon: SiVercel, color: 'text-black dark:text-white', glow: 'shadow-gray-400/50', border: 'group-hover:border-gray-400/50', bg: 'bg-gray-500/10' },
    { name: 'Selenium', icon: SiSelenium, color: 'text-green-400', glow: 'shadow-green-400/50', border: 'group-hover:border-green-400/50', bg: 'bg-green-400/10' }
  ],
  "Soft Skills": [
    { name: 'Problem-Solving', icon: FiZap, color: 'text-yellow-400', glow: 'shadow-yellow-400/50', border: 'group-hover:border-yellow-400/50', bg: 'bg-yellow-400/10' },
    { name: 'Team Player', icon: FiUsers, color: 'text-purple-400', glow: 'shadow-purple-400/50', border: 'group-hover:border-purple-400/50', bg: 'bg-purple-500/10' },
    { name: 'Adaptability', icon: FiRefreshCw, color: 'text-emerald-400', glow: 'shadow-emerald-400/50', border: 'group-hover:border-emerald-400/50', bg: 'bg-emerald-500/10' }
  ]
};

const categories = Object.keys(skillsData);

// Advanced Stagger Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8, rotateX: -15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    rotateX: 0,
    transition: { type: "spring", stiffness: 150, damping: 12, mass: 0.8 }
  },
  exit: { opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2 } }
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Languages');

  return (
    <section id="skills" className="py-24 px-4 md:px-8 lg:px-12 min-h-screen bg-[#f4f7f9] dark:bg-[#0B1120] relative overflow-hidden transition-colors duration-500 perspective-1000">
      
      {/* High-Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKSIvPjwvc3ZnPg==')] opacity-50 dark:opacity-20 z-0"></div>

      {/* Massive Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-[150px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1], rotate: [0, -90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 -right-32 w-[700px] h-[700px] bg-gradient-to-tl from-[#10b981] to-teal-400 rounded-full blur-[150px] pointer-events-none z-0"
      />

      <div className="max-w-[1300px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md mb-6 shadow-sm">
              <FiCpu className="text-[#10b981] animate-pulse" size={16} />
              <span className="text-xs font-black tracking-[0.2em] text-gray-800 dark:text-gray-300 uppercase">
                Technical Arsenal
              </span>
            </div>
            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6 drop-shadow-sm">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-teal-400 to-blue-500">Skills</span>
            </h2>
          </motion.div>

          {/* Premium Animated Tabs */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 md:gap-3 bg-white/40 dark:bg-[#1e293b]/40 backdrop-blur-xl p-2 rounded-2xl border border-white/50 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] max-w-fit mx-auto"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative px-6 py-3 rounded-xl text-sm md:text-base font-bold transition-all duration-500 ${
                  activeTab === category 
                    ? 'text-white shadow-lg' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
                }`}
              >
                {activeTab === category && (
                  <motion.div 
                    layoutId="activeSkillTab"
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

        {/* Dynamic Skills Grid */}
        <div className="min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
            >
              {skillsData[activeTab].map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    whileHover={{ y: -10 }}
                    className={`group relative bg-white/70 dark:bg-[#1e293b]/50 backdrop-blur-md border-2 border-gray-100/50 dark:border-white/5 p-6 rounded-[2rem] transition-all duration-300 flex flex-col items-center justify-center gap-5 shadow-sm hover:shadow-2xl dark:shadow-none cursor-pointer overflow-hidden ${skill.border}`}
                  >
                    {/* Glowing Backlight Effect (Activates on Hover) */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 pointer-events-none`}></div>
                    <div className={`absolute -inset-1 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 ${skill.bg}`}></div>

                    {/* Highly Animated Icon Container */}
                    <motion.div 
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ repeat: Infinity, duration: 4 + Math.random(), ease: "easeInOut" }}
                      className={`w-20 h-20 rounded-2xl ${skill.bg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500 relative z-10 border border-white/50 dark:border-white/10 shadow-inner`}
                    >
                      <IconComponent className={`text-5xl ${skill.color} drop-shadow-lg group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-500`} />
                    </motion.div>

                    {/* Skill Text */}
                    <h3 className={`text-gray-800 dark:text-gray-200 font-extrabold text-lg tracking-wider relative z-10 transition-colors duration-300 ${skill.color.replace('text-', 'group-hover:text-')}`}>
                      {skill.name}
                    </h3>

                    {/* Cyber-Line Accent at the bottom */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-500 ease-out" style={{ color: 'inherit' }}>
                       <div className={`w-full h-full ${skill.bg.replace('/10', '/50')}`}></div>
                    </div>

                    {/* Tech Crosshairs */}
                    <div className="absolute top-3 left-3 w-2 h-2 border-t-2 border-l-2 border-gray-300 dark:border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3 w-2 h-2 border-t-2 border-r-2 border-gray-300 dark:border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;
//done