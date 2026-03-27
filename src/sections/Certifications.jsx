import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiX, FiBriefcase, FiCalendar, FiArrowRight, FiShield, FiExternalLink, FiMaximize2 } from 'react-icons/fi';

const certificationsData = [
  {
    title: "The Bits and Bytes of Computer Networking",
    category: "Networking",
    issuer: "Google",
    platform: "Coursera",
    date: "September 2024",
    description: "Completed a comprehensive course on computer networking fundamentals including network models, protocols, cloud networking, and troubleshooting.",
    skills: ["Computer Networking", "TCP/IP", "DNS", "HTTP", "Troubleshooting"],
    image: "/images/networking-thumb.jpg",
    pdfUrl: "/certificates/bits-bytes-networking.pdf"
  },
  {
    title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    category: "Artificial Intelligence",
    issuer: "Infosys",
    platform: "Springboard",
    date: "August 2025",
    description: "Learned advanced prompt engineering techniques for ChatGPT and large language models, including AI workflows and generative AI applications.",
    skills: ["Prompt Engineering", "Generative AI", "LLMs", "ChatGPT"],
    image: "/images/genai-thumb.jpg",
    pdfUrl: "/certificates/chatgpt-infosys.pdf"
  },
  {
    title: "Cloud Computing",
    category: "Cloud",
    issuer: "NPTEL (IIT Kharagpur)",
    platform: "SWAYAM",
    date: "April 2025",
    description: "Completed a 12-week NPTEL course covering cloud architecture, virtualization, distributed systems, and cloud service models with Elite certification.",
    skills: ["Cloud Computing", "Virtualization", "Distributed Systems", "IaaS", "PaaS", "SaaS"],
    image: "/images/cloud-thumb.jpg",
    pdfUrl: "/certificates/cloud-computing.pdf"
  },
  {
    title: "Computer Communications (Specialization)",
    category: "Networking",
    issuer: "University of Colorado",
    platform: "Coursera",
    date: "December 2024",
    description: "Completed a specialization covering network fundamentals, LAN protocols, packet switching, TCP/IP, and advanced networking concepts.",
    skills: ["Networking", "TCP/IP", "Packet Switching", "LAN", "Protocol Design"],
    image: "/images/comms-thumb.jpg",
    pdfUrl: "/certificates/computer-communications.pdf"
  },
  {
    title: "Digital Systems: From Logic Gates to Processors",
    category: "Core CS",
    issuer: "Universitat Autònoma de Barcelona",
    platform: "Coursera",
    date: "October 2024",
    description: "Studied digital electronics fundamentals including logic gates, combinational and sequential circuits, and processor architecture.",
    skills: ["Digital Logic", "Computer Architecture", "Logic Gates", "Processors"],
    image: "/images/digital-thumb.jpg",
    pdfUrl: "/certificates/digital-systems.pdf"
  },
  {
    title: "Fundamentals of Network Communication",
    category: "Networking",
    issuer: "University of Colorado",
    platform: "Coursera",
    date: "October 2024",
    description: "Learned core networking concepts including OSI layers, data transmission, routing, and communication protocols.",
    skills: ["Networking Basics", "OSI Model", "Routing", "Protocols"],
    image: "/images/fundamentals-network-thumb.jpg",
    pdfUrl: "/certificates/network-fundamentals.pdf"
  },
  {
    title: "Build Generative AI Apps and Solutions with No-Code Tools",
    category: "Artificial Intelligence",
    issuer: "Infosys",
    platform: "Springboard",
    date: "December 2025",
    description: "Learned to build AI-powered applications using no-code tools, focusing on generative AI solutions and real-world use cases.",
    skills: ["Generative AI", "No-Code Tools", "AI Applications"],
    image: "/images/genai-nocode-thumb.jpg",
    pdfUrl: "/certificates/genai-nocode.pdf"
  },
  {
    title: "Code Off Duty Hackathon",
    category: "Hackathon",
    issuer: "Coding Wise",
    platform: "Offline Event",
    date: "March 2024",
    description: "Participated in a web development hackathon, demonstrating creativity, teamwork, and problem-solving in building innovative solutions.",
    skills: ["Web Development", "Teamwork", "Problem Solving", "Innovation"],
    image: "/images/hackathon-thumb.jpg",
    pdfUrl: "/certificates/hackathon.pdf"
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    category: "Core CS",
    issuer: "Infosys",
    platform: "Springboard",
    date: "August 2025",
    description: "Gained understanding of formal languages, automata theory, and computational models used in compiler design and theory of computation.",
    skills: ["Automata Theory", "Formal Languages", "Computation Theory"],
    image: "/images/automata-thumb.jpg",
    pdfUrl: "/certificates/automata.pdf"
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    category: "Core CS",
    issuer: "IBM",
    platform: "Coursera",
    date: "September 2024",
    description: "Learned fundamentals of computer hardware, operating systems, memory management, and system processes.",
    skills: ["Operating Systems", "Computer Hardware", "Memory Management"],
    image: "/images/os-thumb.jpg",
    pdfUrl: "/certificates/hardware-os.pdf"
  },
  {
    title: "Python (Basic)",
    category: "Programming",
    issuer: "HackerRank",
    platform: "HackerRank",
    date: "November 2025",
    description: "Successfully passed the HackerRank Python certification test, demonstrating knowledge of Python fundamentals, data structures, and problem-solving techniques.",
    skills: ["Python", "Data Structures", "Problem Solving"],
    image: "/images/python-thumb.jpg",
    pdfUrl: "/certificates/python-basic.pdf"
  },
  {
    title: "Java (Basic)",
    category: "Programming",
    issuer: "HackerRank",
    platform: "HackerRank",
    date: "January 2026",
    description: "Earned the HackerRank Java certification by demonstrating proficiency in core Java concepts, object-oriented programming, and problem-solving.",
    skills: ["Java", "OOP", "Problem Solving"],
    image: "/images/java-thumb.jpg",
    pdfUrl: "/certificates/java-basic.pdf"
  },
  {
    title: "Problem Solving (Intermediate)",
    category: "Programming",
    issuer: "HackerRank",
    platform: "HackerRank",
    date: "January 2026",
    description: "Demonstrated strong problem-solving skills including data structures, algorithms, and optimization techniques through HackerRank certification.",
    skills: ["Algorithms", "Data Structures", "Problem Solving"],
    image: "/images/problem-solving-thumb.jpg",
    pdfUrl: "/certificates/problem-solving.pdf"
  },
  {
    title: "Object Oriented Programming",
    category: "Programming",
    issuer: "NeoColab",
    platform: "iamneo",
    date: "December 2024",
    description: "Completed a 72-hour course covering object-oriented programming concepts including classes, inheritance, polymorphism, and encapsulation.",
    skills: ["OOP", "Java", "Programming Concepts"],
    image: "/images/oops-thumb.jpg",
    pdfUrl: "/certificates/oops.pdf"
  },
  {
    title: "Data Structures and Algorithms",
    category: "Programming",
    issuer: "NeoColab",
    platform: "iamneo",
    date: "December 2024",
    description: "Completed a 72-hour course focused on data structures and algorithms including arrays, linked lists, trees, sorting, and searching techniques.",
    skills: ["DSA", "Algorithms", "Problem Solving"],
    image: "/images/dsa-thumb.jpg",
    pdfUrl: "/certificates/dsa.pdf"
  },
  {
    title: "Responsive Web Design",
    category: "Web Development",
    issuer: "freeCodeCamp",
    platform: "freeCodeCamp",
    date: "October 2023",
    description: "Completed 300+ hours of training in responsive web design, covering HTML, CSS, Flexbox, Grid, and accessibility principles.",
    skills: ["HTML", "CSS", "Responsive Design", "Flexbox", "Grid"],
    image: "/images/web-thumb.jpg",
    pdfUrl: "/certificates/responsive-web.pdf"
  },
  {
    title: "Java Spring Boot Training",
    category: "Backend Development",
    issuer: "Programming Pathshala",
    platform: "Programming Pathshala",
    date: "July 2025",
    description: "Completed hands-on training in Spring Boot, building REST APIs, backend services, and understanding enterprise Java development.",
    skills: ["Spring Boot", "Java", "REST APIs", "Backend Development"],
    image: "/images/springboot-thumb.jpg",
    pdfUrl: "/certificates/springboot.pdf"
  },
  {
    title: "Peer-to-Peer Protocols and Local Area Networks",
    category: "Networking",
    issuer: "University of Colorado",
    platform: "Coursera",
    date: "October 2024",
    description: "Learned concepts of peer-to-peer networking, LAN technologies, and communication protocols used in modern networks.",
    skills: ["Networking", "LAN", "P2P", "Protocols"],
    image: "/images/lan-thumb.jpg",
    pdfUrl: "/certificates/p2p-lan.pdf"
  },
  {
    title: "Packet Switching Networks and Algorithms",
    category: "Networking",
    issuer: "University of Colorado",
    platform: "Coursera",
    date: "December 2024",
    description: "Studied packet switching techniques, routing algorithms, and network performance optimization.",
    skills: ["Packet Switching", "Routing", "Networking"],
    image: "/images/packet-thumb.jpg",
    pdfUrl: "/certificates/packet-switching.pdf"
  },
  {
    title: "TCP/IP and Advanced Topics",
    category: "Networking",
    issuer: "University of Colorado",
    platform: "Coursera",
    date: "December 2024",
    description: "Gained in-depth knowledge of TCP/IP protocols, congestion control, and advanced networking topics.",
    skills: ["TCP/IP", "Networking", "Protocols"],
    image: "/images/tcp-thumb.jpg",
    pdfUrl: "/certificates/tcp.pdf"
  },
  {
    title: "Java Programming",
    category: "Programming",
    issuer: "Lovely Professional University",
    platform: "iamneo",
    date: "May 2025",
    description: "Completed a 72-hour Java Programming course covering core Java concepts, object-oriented programming, and application development using the iamneo platform.",
    skills: ["Java", "OOP", "Programming Fundamentals"],
    image: "/images/java-programming-thumb.jpg",
    pdfUrl: "/certificates/java-programming.pdf"
  }
];

const categories = ["All", ...new Set(certificationsData.map(cert => cert.category))];

// Elegant minimalist tech colors - Added slight background tints to make them pop more
const getTechColor = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes("cloud") || t.includes("network") || t.includes("tcp")) return "text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50 bg-blue-50 dark:bg-blue-900/10";
  if (t.includes("html") || t.includes("web")) return "text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-900/50 bg-orange-50 dark:bg-orange-900/10";
  if (t.includes("ai") || t.includes("llm") || t.includes("chatgpt")) return "text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/50 bg-purple-50 dark:bg-purple-900/10";
  if (t.includes("algorithm") || t.includes("dsa") || t.includes("logic")) return "text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900/50 bg-indigo-50 dark:bg-indigo-900/10";
  return "text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30";
};

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedCert ? 'hidden' : 'auto';
  }, [selectedCert]);

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  const filteredCerts = certificationsData.filter(cert => 
    activeFilter === "All" || cert.category === activeFilter
  );

  return (
    <section id="certifications" className="py-24 px-4 md:px-8 lg:px-12 min-h-screen bg-[#fafafa] dark:bg-[#06090e] transition-colors duration-500 flex flex-col items-center relative overflow-hidden">
      
      {/* 1. VIBRANT BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKSIvPjwvc3ZnPg==')] opacity-40 dark:opacity-10 z-0 pointer-events-none"></div>
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-[#10b981] to-teal-500 rounded-full blur-[150px] pointer-events-none z-0"
      />
      
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1], rotate: [0, -90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-tl from-blue-500 to-purple-500 rounded-full blur-[150px] pointer-events-none z-0"
      />

      <div className="max-w-[1300px] w-full relative z-10">
        
        {/* 2. REFINED HEADER WITH GRADIENT TEXT */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8 border-b border-gray-200 dark:border-white/10 pb-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="font-sans text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-teal-400 to-blue-500">Certifications</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-base max-w-lg font-medium leading-relaxed">
              Verified credentials and professional training across Full Stack Development, Cloud Architecture, and Computer Science fundamentals.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                  activeFilter === category 
                    ? 'text-white shadow-lg shadow-emerald-500/25' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-white/10'
                }`}
              >
                {activeFilter === category && (
                  <motion.div 
                    layoutId="activeMinimalTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-teal-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className={`relative z-10 ${activeFilter === category ? '' : ''}`}>{category}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* 3. GRID LAYOUT */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                key={cert.title}
                onClick={() => setSelectedCert(cert)}
                className="group flex flex-col bg-white/80 dark:bg-[#0d131f]/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl dark:hover:shadow-emerald-500/5 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer relative"
              >
                {/* Glowing Top Border Accent on Hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#10b981] to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>

                {/* Image Banner */}
                <div className="relative h-40 w-full overflow-hidden bg-gray-100 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    onError={(e) => { e.target.src = "https://via.placeholder.com/600x400/eeeeee/999999?text=Credential" }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/60 backdrop-blur-sm text-gray-900 dark:text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {cert.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[#10b981] text-xs font-bold uppercase tracking-wider">
                      {cert.issuer}
                    </p>
                    <span className="text-gray-400 dark:text-gray-500 text-xs font-medium">{cert.date}</span>
                  </div>
                  
                  <h3 className="font-extrabold text-xl text-gray-900 dark:text-white leading-snug mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#10b981] group-hover:to-teal-500 transition-colors duration-300 line-clamp-1">
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-5 leading-relaxed font-medium">
                    {cert.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pb-4">
                    {cert.skills.slice(0, 3).map((skill, i) => (
                      <span key={i} className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded border ${getTechColor(skill)}`}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center text-sm font-bold text-gray-900 dark:text-white group-hover:text-[#10b981] transition-colors">
                    View Details 
                    <FiArrowRight className="ml-2 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- REFINED SPLIT-SCREEN MODAL --- */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            
            {/* Animated Backdrop Effect */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gray-900/80 dark:bg-black/90 backdrop-blur-xl cursor-pointer z-0 overflow-hidden"
              onClick={handleCloseModal}
            >
              {/* Floating Animated Orbs in the Modal Background */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], x: [0, 50, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-[#10b981] rounded-full blur-[120px] pointer-events-none mix-blend-screen"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1], x: [0, -50, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[10%] right-[20%] w-[35vw] h-[35vw] bg-blue-600 rounded-full blur-[130px] pointer-events-none mix-blend-screen"
              />
            </motion.div>

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative bg-white dark:bg-[#0a0f18] border border-gray-200 dark:border-gray-800 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row z-10 w-full max-w-5xl max-h-[90vh] lg:max-h-[80vh]"
            >
              {/* DETAILS MODE */}
              <div className="flex flex-col lg:flex-row w-full h-full overflow-y-auto lg:overflow-hidden">
                
                {/* Left Side: Image Showcase AND Button */}
                <div className="lg:w-1/2 relative bg-gray-50 dark:bg-[#06090e] p-8 flex flex-col items-center justify-center gap-8 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800 shrink-0 lg:shrink overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-[#10b981]/20 to-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>
                  
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="max-w-full max-h-[30vh] lg:max-h-[45vh] object-contain rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 relative z-10 transform hover:scale-105 transition-transform duration-500"
                  />

                  {/* Left Side Button: Open Certificate */}
                  <a 
                    href={selectedCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 w-full max-w-xs bg-gradient-to-r from-[#10b981] to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:-translate-y-1 text-sm md:text-base"
                  >
                    <FiExternalLink size={18} /> Open Certificate
                  </a>
                </div>

                {/* Right Side: Content */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col relative overflow-y-auto bg-white dark:bg-[#0a0f18]">
                  <button onClick={handleCloseModal} className="absolute top-6 right-6 p-2 bg-gray-100 dark:bg-white/5 hover:bg-red-500 hover:text-white rounded-full transition-colors sm:block text-gray-500 dark:text-gray-400 z-20 hidden">
                    <FiX size={20} />
                  </button>

                  <div className="mb-4 mt-2 sm:mt-0">
                    <span className="text-[#10b981] bg-[#10b981]/10 px-3 py-1.5 w-max rounded-lg text-[10px] font-bold uppercase tracking-widest border border-[#10b981]/20">
                      {selectedCert.category}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-tight pr-8">
                    {selectedCert.title}
                  </h2>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 dark:bg-[#06090e] p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1 flex items-center gap-1.5"><FiShield className="text-[#10b981]" /> Issuer</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-200">{selectedCert.issuer}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-[#06090e] p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1 flex items-center gap-1.5"><FiCalendar className="text-[#10b981]" /> Date</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-200">{selectedCert.date}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Credential Overview</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                      {selectedCert.description}
                    </p>
                  </div>

                  <div className="mb-8 pb-4 sm:pb-0">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Related Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill, i) => (
                        <span key={i} className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-md border ${getTechColor(skill)}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Close button for Mobile (since main action is on the left now) */}
                  <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 sm:hidden">
                    <button onClick={handleCloseModal} className="w-full px-6 py-3.5 bg-gray-100 hover:bg-gray-200 dark:bg-[#06090e] dark:hover:bg-gray-800 border border-transparent dark:border-gray-800 text-gray-900 dark:text-white font-bold rounded-xl transition-colors">
                      Close
                    </button>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
    </section>
  );
};

export default Certifications;