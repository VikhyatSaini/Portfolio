import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiTrendingUp, FiAward, FiTarget, FiActivity, FiLayers, FiCode } from 'react-icons/fi';
import { SiLeetcode, SiHackerrank, SiMongodb } from 'react-icons/si';

const achievementsData = [
  {
    platform: "HackerRank",
    icon: SiHackerrank,
    color: "text-green-500",
    gradient: "from-green-500 to-emerald-400",
    bg: "bg-green-500/10",
    border: "group-hover:border-green-500/50",
    glow: "group-hover:shadow-green-500/20",
    stats: [
      { label: "Problem Solving", value: "5 Stars", icon: FiStar },
      { label: "Java", value: "5 Stars", icon: FiStar }
    ],
    description: "Verified 5-star proficiency in Java and algorithmic problem-solving, indicating a strong capability for writing efficient and robust backend code."
  },
  {
    platform: "LeetCode",
    icon: SiLeetcode,
    color: "text-yellow-500",
    gradient: "from-yellow-500 to-orange-400",
    bg: "bg-yellow-500/10",
    border: "group-hover:border-yellow-500/50",
    glow: "group-hover:shadow-yellow-500/20",
    stats: [
      { label: "Total Solved", value: "100+", icon: FiTarget },
      { label: "Contest Rating", value: "1400+", icon: FiActivity }
    ],
    description: "Active participant in competitive programming. Consistently tackling complex algorithmic challenges to enhance practical grips on data structures and logic optimization."
  },
  {
    platform: "MongoDB",
    icon: SiMongodb,
    color: "text-emerald-500",
    gradient: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50",
    glow: "group-hover:shadow-emerald-500/20",
    stats: [
      { label: "Certificates", value: "11+", icon: FiAward },
      { label: "Focus", value: "NoSQL", icon: FiCode }
    ],
    description: "Completed 11+ targeted certifications in MongoDB, building a practical foundation for designing scalable NoSQL database schemas and executing complex queries."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15 }
  }
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-4 md:px-8 lg:px-12 min-h-screen bg-[#f4f7f9] dark:bg-[#0B1120] relative overflow-hidden flex flex-col justify-center transition-colors duration-500">
      
      {/* High-Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKSIvPjwvc3ZnPg==')] opacity-50 dark:opacity-20 z-0 pointer-events-none"></div>

      {/* Massive Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-yellow-500 to-green-500 rounded-full blur-[150px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1], rotate: [0, -90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-tl from-[#10b981] to-teal-500 rounded-full blur-[150px] pointer-events-none z-0"
      />

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md mb-6 shadow-sm">
              <FiTrendingUp className="text-[#10b981] animate-pulse" size={16} />
              <span className="text-xs font-black tracking-[0.2em] text-gray-800 dark:text-gray-300 uppercase">
                Milestones & Metrics
              </span>
            </div>
            <h2 className="font-sans text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight drop-shadow-sm">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-teal-400 to-blue-500">Achievements</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mt-4 text-base md:text-lg leading-relaxed font-medium">
              A track record of consistent problem-solving, algorithmic mastery, and continuous learning across leading developer platforms.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Achievements Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {achievementsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                className={`group relative bg-white/70 dark:bg-[#1e293b]/50 backdrop-blur-xl border-2 border-gray-100/50 dark:border-white/5 p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl flex flex-col h-full ${item.border} ${item.glow}`}
              >
                {/* Glowing Top Border Accent */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20`}></div>

                {/* Ambient Card Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bg.replace('10', '5')} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`}></div>

                {/* Header: Platform Logo & Name */}
                <div className="flex items-center gap-5 mb-8 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${item.bg} border border-white/50 dark:border-white/10 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-500 shadow-inner shrink-0`}>
                    <IconComponent size={32} className="drop-shadow-sm" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white leading-tight">
                      {item.platform}
                    </h3>
                    <p className={`text-xs font-black uppercase tracking-widest mt-1 ${item.color}`}>
                      Verified Profile
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                  {item.stats.map((stat, i) => {
                    const StatIcon = stat.icon;
                    return (
                      <div key={i} className="bg-white/50 dark:bg-[#0B1120]/50 border border-gray-100 dark:border-white/5 p-4 rounded-2xl shadow-sm hover:scale-[1.02] transition-transform">
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
                          <StatIcon size={14} className={item.color} />
                          <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                        </div>
                        <p className={`text-lg md:text-xl font-extrabold text-gray-900 dark:text-white`}>
                          {stat.value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Description */}
                <div className="mt-auto relative z-10 pt-6 border-t border-gray-100 dark:border-white/10">
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tech Crosshairs Background */}
                <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-gray-300 dark:border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;

//done