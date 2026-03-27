import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiTerminal, FiCode, FiLayout, FiDatabase, FiLock, 
  FiCalendar, FiCheckCircle, FiAward, FiExternalLink, FiX 
} from 'react-icons/fi';
import { SiSpringboot } from 'react-icons/si';

const curriculumData = [
  {
    id: "01",
    title: "Advanced Java & Core Concepts",
    icon: FiCode,
    topics: ["Collections Framework", "Java Streams & Lambdas", "Advanced Exception Handling"],
    accent: "from-blue-500 to-cyan-400"
  },
  {
    id: "02",
    title: "Spring Boot Fundamentals",
    icon: FiTerminal,
    topics: ["Dependency Injection (IoC)", "Spring Beans & Autowiring", "Application Properties & Context"],
    accent: "from-green-500 to-emerald-400"
  },
  {
    id: "03",
    title: "RESTful API Architecture",
    icon: FiLayout,
    topics: ["Controllers & Request Routing", "Data Transfer Objects (DTOs)", "Global Exception Handling"],
    accent: "from-[#10b981] to-teal-500"
  },
  {
    id: "04",
    title: "Spring Security & JWT",
    icon: FiLock,
    topics: ["Role-Based Access Control (RBAC)", "JWT Token Generation/Validation", "Authentication Filters"],
    accent: "from-purple-500 to-indigo-500"
  },
  {
    id: "05",
    title: "Spring Data JPA & MySQL",
    icon: FiDatabase,
    topics: ["Entity Mapping (Hibernate)", "Repository Interfaces", "Schema Design & Query Optimization"],
    accent: "from-blue-600 to-indigo-600"
  }
];

const Training = () => {
  const [isCertOpen, setIsCertOpen] = useState(false);
  
  // Adjusted to a generic/expected name for your Spring Boot cert
  const certUrl = "/certificates/java-training.pdf"; 

  return (
    <section id="training" className="py-24 px-4 md:px-8 lg:px-12 min-h-screen bg-[#f4f7f9] dark:bg-[#0B1120] relative overflow-hidden transition-colors duration-500">
      
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKSIvPjwvc3ZnPg==')] opacity-40 z-0"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981]/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
            <span className="text-[#10b981] text-xs font-black uppercase tracking-[0.3em] mb-3 block">Professional Training</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
              Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#10b981]">Dashboard</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Main Course Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-5 space-y-6 lg:sticky lg:top-32"
          >
            <div className="relative bg-white dark:bg-[#1e293b]/80 backdrop-blur-2xl border-2 border-gray-100 dark:border-white/5 rounded-[2.5rem] p-8 md:p-10 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-[#10b981] to-teal-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-500">
                    <SiSpringboot size={35} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white leading-tight">Java with Spring Boot</h3>
                    <p className="text-[#10b981] text-xs font-black uppercase tracking-widest">Programming Pathshala</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-sm font-bold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/5">
                    <FiCalendar className="text-green-500" />
                    <span>August 2025</span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-sm font-black text-gray-800 dark:text-white uppercase tracking-widest">
                      <FiAward className="text-[#10b981]" />Project
                    </h4>
                    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-[#0B1120] dark:to-[#0B1120] p-6 rounded-3xl border border-gray-100 dark:border-white/5 shadow-inner">
                      <p className="text-lg font-black text-gray-900 dark:text-white mb-2">FedEx-Clone Parcel Delivery</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                        Engineered a suite of RESTful APIs (99.9% uptime), implemented JWT RBAC for multiple user roles, and reduced MySQL query latency by 15% using Spring Data JPA.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {/* TRIGGER BUTTON */}
                    <button 
                      onClick={() => setIsCertOpen(true)}
                      className="flex items-center justify-center gap-2 py-4 bg-[#10b981] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20"
                    >
                      <FiAward size={16} /> View Certificate
                    </button>
                    
                    <a 
                      href="https://github.com/VikhyatSaini/Zeno-Delivery" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-[1.02] transition-transform shadow-xl"
                    >
                      <FiExternalLink size={16} /> Project Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Curriculum List */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em] mb-4 ml-4">Detailed Modules</h3>
            
            {curriculumData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white/70 dark:bg-[#1e293b]/50 backdrop-blur-xl border border-gray-100 dark:border-white/5 p-6 rounded-[2rem] hover:shadow-2xl transition-all duration-500"
                >
                  <div className={`absolute top-6 bottom-6 left-0 w-1.5 rounded-r-full bg-gradient-to-b ${item.accent}`}></div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pl-4">
                    <div className="flex items-center gap-5">
                      <div className="text-4xl font-black text-gray-100 dark:text-white/5 select-none">{item.id}</div>
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-[#0B1120] flex items-center justify-center text-gray-800 dark:text-white group-hover:bg-[#10b981] group-hover:text-white transition-colors duration-500 shadow-inner">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-gray-900 dark:text-white group-hover:text-green-500 transition-colors">{item.title}</h4>
                        <p className="text-[10px] font-bold text-gray-400 uppercase mt-1">Backend Component</p>
                      </div>
                    </div>

                    <ul className="flex flex-wrap md:flex-col gap-2 md:gap-1.5 md:items-end">
                      {item.topics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] md:text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-white/5 px-3 py-1 rounded-full border border-gray-100 dark:border-white/5">
                          <FiCheckCircle className="text-[#10b981]" /> {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- CERTIFICATE MODAL --- */}
      <AnimatePresence>
        {isCertOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-gray-900/90 backdrop-blur-xl"
            onClick={() => setIsCertOpen(false)} 
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative w-full max-w-6xl h-[90vh] bg-white dark:bg-[#0B1120] rounded-[2.5rem] shadow-[0_0_60px_rgba(16,185,129,0.4)] overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-8 py-5 border-b border-gray-100 dark:border-white/10 bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#10b981]/10 rounded-lg">
                    <FiAward className="text-[#10b981]" size={20} />
                  </div>
                  <h3 className="font-black text-gray-900 dark:text-white uppercase tracking-widest text-sm">Training Credential</h3>
                </div>
                <button 
                  onClick={() => setIsCertOpen(false)}
                  className="p-2.5 bg-gray-100 dark:bg-white/5 hover:bg-red-500 dark:hover:bg-red-500 text-gray-500 dark:text-gray-400 hover:text-white rounded-full transition-all duration-300"
                >
                  <FiX size={20} />
                </button>
              </div>
              
              {/* PDF Container */}
              <div className="flex-grow bg-gray-100 dark:bg-black/40 flex items-center justify-center p-4">
                <iframe
                  src={`${certUrl}#view=FitH&toolbar=0`}
                  className="w-full h-full rounded-xl border-none shadow-2xl"
                  title="Java Spring Boot Training Certificate"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-6 text-center bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-white/10">
                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">
                  Java with Spring Boot • Programming Pathshala • August 2025
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Training;

//done but training certificate is not final yet, so I have added a placeholder link. Please update the certUrl variable with the actual path to your certificate PDF once it's ready.