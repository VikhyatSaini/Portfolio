import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiBookOpen, FiBriefcase, FiAward, FiStar, FiCode, FiTerminal, FiCheckCircle, FiMapPin, FiCpu, FiLayers, FiCalendar } from 'react-icons/fi';
const tabs = [
  { id: 'Education', icon: <FiBookOpen /> },
  { id: 'Projects', icon: <FiCode /> },
  { id: 'Training', icon: <FiTerminal /> },
  { id: 'Achievements', icon: <FiStar /> },
  { id: 'Certificates', icon: <FiAward /> }
];

// Helper to map tech stack names to specific brand colors for visual pop
const getTechColor = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes("react") || t.includes("jwt")) return "text-cyan-500 bg-cyan-500/10 border-cyan-500/20";
  if (t.includes("node") || t.includes("spring boot")) return "text-green-500 bg-green-500/10 border-green-500/20";
  if (t.includes("mongo")) return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
  if (t.includes("python")) return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20";
  if (t.includes("php") || t.includes("flask")) return "text-indigo-500 bg-indigo-500/10 border-indigo-500/20";
  if (t.includes("mysql") || t.includes("sql") || t.includes("sqlite") || t.includes("java")) return "text-blue-500 bg-blue-500/10 border-blue-500/20";
  if (t.includes("gemini") || t.includes("streamlit")) return "text-purple-500 bg-purple-500/10 border-purple-500/20";
  return "text-gray-600 dark:text-gray-300 bg-gray-500/10 border-gray-500/20";
};

// Premium Spring physics variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  exit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 18 }
  },
  exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } }
};

const CareerSnapshot = () => {
  const [activeTab, setActiveTab] = useState('Education');

  const renderContent = () => {
    switch (activeTab) {
      case 'Education':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col gap-6">
            {[
              { degree: "B.Tech - Computer Science", school: "Lovely Professional University", location: "Phagwara, Punjab", date: "2023 - Present", score: "CGPA: 7.82", highlight: true },
              { degree: "Intermediate (PCM)", school: "Delhi Public School", location: "Lucknow, UP", date: "2020 - 2021", score: "92.6%", highlight: false },
              { degree: "Matriculation", school: "Delhi Public School", location: "Lucknow, UP", date: "2018 - 2019", score: "92.4%", highlight: false }
            ].map((edu, idx) => (
              <motion.div 
                key={idx} variants={cardVariants}
                className="relative bg-white/70 dark:bg-[#1e293b]/50 backdrop-blur-xl border-2 border-gray-100/50 dark:border-white/5 p-6 md:p-8 rounded-[2rem] flex flex-col md:flex-row justify-between md:items-center gap-6 group hover:border-[#10b981]/50 dark:hover:border-[#10b981]/50 transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden"
              >
                {/* Glowing Side Accent Line */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${edu.highlight ? 'bg-gradient-to-b from-[#10b981] to-teal-500' : 'bg-gray-200 dark:bg-gray-700 group-hover:bg-[#10b981]'} transition-colors duration-500`}></div>
                
                {/* Ambient Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#10b981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
                
                <div className="relative z-10 flex-grow pr-4">
                  <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#10b981] group-hover:to-teal-500 transition-all duration-300">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-gray-600 dark:text-gray-400 text-sm font-medium mb-4">
                    <span className="flex items-center gap-1.5"><FiBookOpen className="text-blue-500" /> {edu.school}</span>
                    <span className="hidden md:inline text-gray-300 dark:text-gray-600">•</span>
                    <span className="flex items-center gap-1.5"><FiMapPin className="text-red-400" /> {edu.location}</span>
                  </div>

                  <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#10b981]/10 to-teal-500/10 text-[#10b981] text-xs font-black uppercase tracking-widest rounded-lg border border-[#10b981]/20 shadow-sm">
                    {edu.score}
                  </span>
                </div>
                
                <div className="text-left md:text-right relative z-10 shrink-0">
                  <span className="inline-flex items-center justify-center text-xs md:text-sm font-black text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-white/5 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 shadow-inner group-hover:bg-[#10b981]/10 group-hover:text-[#10b981] group-hover:border-[#10b981]/20 transition-all duration-300">
                    <FiCalendar className="mr-2" size={14} /> {edu.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );

      case 'Projects':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "FedEx-Clone Parcel Delivery", tech: ["Java", "Spring Boot", "React.js"], desc: "Robust parcel delivery backend featuring Spring Security, JWT auth, and optimized JPA queries." },
              { title: "Volunteer Registration System", tech: ["Node.js", "Express", "MongoDB"], desc: "Automated event registration system with JWT authentication and Nodemailer integrations." },
              { title: "Virtual Stylist with AI", tech: ["Python", "Flask", "Gemini 2.0"], desc: "AI-powered virtual stylist generating personalized outfit recommendations via user prompts." }
            ].map((project, idx) => (
              <motion.div 
                key={idx} variants={cardVariants}
                className={`relative bg-white/70 dark:bg-[#1e293b]/50 backdrop-blur-xl border-2 border-gray-100/50 dark:border-white/5 p-6 md:p-8 rounded-[2rem] hover:border-[#10b981]/50 dark:hover:border-[#10b981]/50 transition-all duration-500 shadow-sm hover:shadow-2xl group overflow-hidden ${idx === 2 ? 'md:col-span-2 xl:col-span-1' : ''}`}
              >
                {/* Glowing Top Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10b981] to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 mb-4">
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white group-hover:text-[#10b981] transition-colors mb-4 flex items-center gap-3">
                    <FiLayers className="text-blue-500 group-hover:scale-110 transition-transform" /> {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className={`px-3 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-lg border shadow-sm ${getTechColor(t)}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="relative z-10 text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">
                  {project.desc}
                </p>

                {/* Tech Crosshairs */}
                <div className="absolute bottom-6 right-6 w-3 h-3 border-b-2 border-r-2 border-gray-300 dark:border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        );

      case 'Training':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col gap-6">
            <motion.div variants={cardVariants} className="relative bg-white/70 dark:bg-[#1e293b]/50 backdrop-blur-xl border-2 border-gray-100/50 dark:border-white/5 p-8 md:p-10 rounded-[2.5rem] hover:border-[#10b981]/50 dark:hover:border-[#10b981]/50 transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden group">
              {/* Massive ambient background icon */}
              <div className="absolute -right-10 -bottom-10 text-gray-100 dark:text-white/5 group-hover:text-[#10b981]/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none z-0">
                <FiCode size={250} />
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-green-500/20 dark:to-teal-500/20 text-blue-600 dark:text-green-400 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:text-white group-hover:from-[#10b981] group-hover:to-teal-500 shadow-inner transition-all duration-500 shrink-0 border border-blue-200 dark:border-green-500/30">
                  <FiTerminal size={28} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#10b981] group-hover:to-blue-500 transition-all duration-300">
                    Java with Spring Boot
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-[10px] font-black uppercase tracking-widest rounded-lg border border-gray-200 dark:border-white/10">Programming Pathshala</span>
                    <span className="text-gray-400 dark:text-gray-600 text-xs font-bold uppercase tracking-widest"><FiCalendar className="inline mr-1 mb-0.5" /> August 2025</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-6 border-t border-gray-100 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 rounded-2xl p-6 border group-hover:border-[#10b981]/20 transition-colors">
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed font-medium">
                  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-extrabold uppercase tracking-widest text-xs block mb-2">Capstone Project: FedEx-Clone System</strong> 
                  Engineered a comprehensive suite of RESTful APIs managing delivery core functions. Built with Java, Spring Boot 3.5, and integrated strict JWT/Spring Security RBAC.
                </p>
              </div>
            </motion.div>
          </motion.div>
        );

      case 'Achievements':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="grid grid-cols-1 gap-6">
            {[
              { title: "Solved 100+ algorithmic problems on LeetCode", icon: FiCode, color: "text-yellow-500" },
              { title: "Secured a 1400+ Contest Rating on LeetCode", icon: FiActivity, color: "text-blue-500" },
              { title: "5-Star Rating in Java & Problem Solving on HackerRank", icon: FiStar, color: "text-emerald-500" },
              { title: "Earned 11+ MongoDB Skill Certificates", icon: FiAward, color: "text-green-500" }
            ].map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <motion.div 
                  key={idx} variants={cardVariants}
                  className="relative bg-white/70 dark:bg-[#1e293b]/50 backdrop-blur-xl border-2 border-gray-100/50 dark:border-white/5 p-6 md:p-8 rounded-[2rem] flex items-center gap-6 hover:border-[#10b981]/50 dark:hover:border-[#10b981]/50 transition-all duration-500 shadow-sm hover:shadow-2xl group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#10b981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className={`relative z-10 w-16 h-16 rounded-2xl bg-white dark:bg-[#0B1120] border border-gray-100 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#10b981] group-hover:text-white shadow-lg transition-all duration-500 ${achievement.color}`}>
                    <Icon size={28} className={idx === 2 ? "fill-current" : ""} />
                  </div>
                  <h3 className="relative z-10 text-gray-900 dark:text-white font-extrabold text-lg md:text-xl leading-snug group-hover:text-[#10b981] transition-colors duration-300">
                    {achievement.title}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        );

      case 'Certificates':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Python Certificate", issuer: "HackerRank", color: "text-green-500" },
              { title: "Java Programming", issuer: "NeoColab", color: "text-yellow-500" },
              { title: "Cloud Computing", issuer: "NPTEL", color: "text-blue-500" }
            ].map((cert, idx) => (
              <motion.div 
                key={idx} variants={cardVariants}
                className="relative bg-white/70 dark:bg-[#1e293b]/50 backdrop-blur-xl border-2 border-gray-100/50 dark:border-white/5 p-6 rounded-[2rem] flex items-center gap-5 hover:border-[#10b981]/50 dark:hover:border-[#10b981]/50 transition-all duration-500 shadow-sm hover:shadow-2xl group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#10b981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className={`relative z-10 w-12 h-12 rounded-xl bg-white dark:bg-[#0B1120] border border-gray-100 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner ${cert.color}`}>
                  <FiCheckCircle size={24} />
                </div>
                <div className="relative z-10 flex-grow">
                  <h3 className="text-gray-900 dark:text-white font-extrabold text-base md:text-lg group-hover:text-[#10b981] transition-colors leading-tight mb-1">{cert.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs font-black uppercase tracking-widest">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="resume" className="py-24 px-4 md:px-8 lg:px-12 min-h-screen bg-[#f4f7f9] dark:bg-[#0B1120] relative overflow-hidden flex flex-col justify-center transition-colors duration-500">
      
      {/* High-Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKSIvPjwvc3ZnPg==')] opacity-50 dark:opacity-20 z-0 pointer-events-none"></div>

      {/* Massive Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-[#10b981] to-teal-500 rounded-full blur-[150px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1], rotate: [0, -90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-tl from-blue-500 to-indigo-500 rounded-full blur-[150px] pointer-events-none z-0"
      />
      
      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        
        {/* Header & Global CTA */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md mb-6 shadow-sm">
               <FiCpu className="text-blue-500 animate-pulse" size={16} />
               <span className="text-xs font-black tracking-[0.2em] text-gray-800 dark:text-gray-300 uppercase">Executive Summary</span>
             </div>
             <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight drop-shadow-sm">
               My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-teal-400 to-blue-500">Resume</span>
             </h2>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
            href="/resume.pdf" 
            download 
            className="group relative flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#10b981] to-teal-500 text-white text-sm md:text-base font-extrabold uppercase tracking-widest rounded-2xl transition-all duration-500 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1 overflow-hidden"
          >
            {/* Massive Hover Glow inside button */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0"></div>
            <FiDownload size={22} className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300 drop-shadow-md" /> 
            <span className="relative z-10 drop-shadow-md">Download Full CV</span>
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Animated Glassmorphism Sidebar Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:col-span-4 bg-white/40 dark:bg-[#1e293b]/40 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[2.5rem] p-3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible sticky top-32 z-20 scrollbar-hide shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex items-center gap-4 px-6 py-4 rounded-[1.5rem] text-left font-extrabold text-sm md:text-base transition-colors duration-500 whitespace-nowrap lg:whitespace-normal group"
              >
                {/* Fluid Background Indicator */}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="resumeTabPremiumIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-teal-500 rounded-[1.5rem] shadow-lg shadow-emerald-500/20"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                
                <span className={`relative z-10 transition-colors duration-500 ${activeTab === tab.id ? 'text-white drop-shadow-md' : 'text-gray-400 dark:text-gray-500 group-hover:text-[#10b981] dark:group-hover:text-[#10b981]'}`}>
                  {React.cloneElement(tab.icon, { size: 20 })}
                </span>
                <span className={`relative z-10 tracking-wide transition-colors duration-500 ${activeTab === tab.id ? 'text-white drop-shadow-md' : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'}`}>
                  {tab.id}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Dynamic Content Area */}
          <div className="lg:col-span-8 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

// FiActivity needs to be imported for the achievements tab since it wasn't there before
import { FiActivity } from 'react-icons/fi';

export default CareerSnapshot;

//done but certificates need adding