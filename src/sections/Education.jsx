import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiMapPin, FiCalendar, FiAward, FiCheckCircle } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: "Bachelor of Technology - CSE",
    school: "Lovely Professional University",
    location: "Phagwara, Punjab",
    date: "Aug 2023 - Present",
    score: "CGPA: 7.82",
    status: "Current",
    color: "text-[#10b981]",
    bg: "bg-[#10b981]/10",
    border: "border-[#10b981]/30",
    glow: "group-hover:shadow-emerald-500/20",
    gradient: "from-[#10b981] to-teal-500",
    description: "Specializing in Computer Science and Engineering with a core focus on Backend Development, Data Structures, and Algorithms. Maintaining a strong academic record while actively building robust backend architectures and RESTful APIs."
  },
  {
    degree: "Intermediate (Class XII) - PCM",
    school: "Delhi Public School",
    location: "Lucknow, Uttar Pradesh",
    date: "Mar 2020 - May 2021",
    score: "Percentage: 92.6%",
    status: "Completed",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    glow: "group-hover:shadow-blue-500/20",
    gradient: "from-blue-500 to-indigo-500",
    description: "Completed higher secondary education with a core focus on Physics, Chemistry, and Mathematics, achieving an outstanding 92.6%. Developed strong analytical and problem-solving fundamentals."
  },
  {
    degree: "Matriculation (Class X)",
    school: "Delhi Public School",
    location: "Lucknow, Uttar Pradesh",
    date: "Mar 2018 - May 2019",
    score: "Percentage: 92.4%",
    status: "Completed",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    glow: "group-hover:shadow-purple-500/20",
    gradient: "from-purple-500 to-pink-500",
    description: "Built a solid academic foundation with excellent performance (92.4%) across all core subjects, sparking an early interest in science, logic, and programming."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 md:px-8 lg:px-12 min-h-screen bg-[#f4f7f9] dark:bg-[#0B1120] relative overflow-hidden flex flex-col justify-center transition-colors duration-500">
      
      {/* High-Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKSIvPjwvc3ZnPg==')] opacity-50 dark:opacity-20 z-0 pointer-events-none"></div>

      {/* Massive Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-[#10b981] to-blue-500 rounded-full blur-[150px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1], rotate: [0, -90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-tl from-purple-500 to-indigo-500 rounded-full blur-[150px] pointer-events-none z-0"
      />

      <div className="max-w-[1200px] w-full mx-auto relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md mb-6 shadow-sm">
              <FaGraduationCap className="text-blue-500 animate-pulse" size={18} />
              <span className="text-xs font-black tracking-[0.2em] text-gray-800 dark:text-gray-300 uppercase">
                Academic Background
              </span>
            </div>
            <h2 className="font-sans text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight drop-shadow-sm">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-teal-400 to-blue-500">Education</span>
            </h2>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Center Glowing Line (Hidden on mobile, visible on md+) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#10b981] via-blue-500 to-purple-500 opacity-20 -translate-x-1/2 rounded-full"></div>
          
          {/* Left Line for Mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#10b981] via-blue-500 to-purple-500 opacity-20 rounded-full"></div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-12 md:gap-24"
          >
            {educationData.map((edu, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  className={`relative flex flex-col md:flex-row items-center justify-between w-full group ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Timeline Dot (Center on Desktop, Left on Mobile) */}
                  <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full border-4 border-white dark:border-[#0B1120] bg-gradient-to-r from-gray-300 to-gray-400 z-20 -translate-x-[9.5px] md:-translate-x-1/2 group-hover:scale-150 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(0,0,0,0.2)] flex items-center justify-center">
                    {/* Inner glowing dot on hover */}
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>

                  {/* Empty Spacer for Desktop Layout */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 pl-16 md:pl-0 relative`}>
                    
                    {/* Connector Line to the dot (Desktop only) */}
                    <div className={`hidden md:block absolute top-1/2 w-8 h-1 ${edu.bg} ${isEven ? '-left-8' : '-right-8'} -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-${isEven ? 'right' : 'left'}`}></div>

                    <div className={`relative bg-white/70 dark:bg-[#1e293b]/50 backdrop-blur-xl border-2 border-gray-100/50 dark:border-white/5 p-8 rounded-[2rem] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl ${edu.glow} z-10`}>
                      
                      {/* Glowing Top Border */}
                      <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      {/* Ambient Hover Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${edu.bg.replace('10', '5')} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                      {/* Header / Status */}
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className={`w-14 h-14 rounded-2xl ${edu.bg} border ${edu.border} flex items-center justify-center ${edu.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner shrink-0`}>
                          <FiBookOpen size={24} />
                        </div>
                        
                        <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border shadow-sm flex items-center gap-1.5 ${edu.status === 'Current' ? 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20' : 'bg-gray-100 dark:bg-white/5 text-gray-500 border-gray-200 dark:border-white/10'}`}>
                          {edu.status === 'Current' ? <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span> : <FiCheckCircle />}
                          {edu.status}
                        </span>
                      </div>

                      {/* Degree & School Info */}
                      <div className="relative z-10 mb-6">
                        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-base font-bold text-gray-700 dark:text-gray-300 mb-4">
                          {edu.school}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-2"><FiCalendar className={edu.color} size={14} /> {edu.date}</span>
                          <span className="flex items-center gap-2"><FiMapPin className={edu.color} size={14} /> {edu.location}</span>
                        </div>
                      </div>

                      {/* Score Highlight */}
                      <div className="mb-6 relative z-10">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${edu.bg} border ${edu.border} shadow-sm`}>
                          <FiAward className={edu.color} size={18} />
                          <span className={`text-sm font-extrabold ${edu.color}`}>
                            {edu.score}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium relative z-10 border-t border-gray-100 dark:border-white/10 pt-5">
                        {edu.description}
                      </p>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Education;

//done