import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp, FiHeart, FiCode, FiArrowRight } from 'react-icons/fi';

const socialLinks = [
  { 
    icon: <FiGithub size={22} />, 
    url: "https://github.com/VikhyatSaini", 
    name: "GitHub",
    color: "from-gray-800 to-black dark:from-gray-600 dark:to-white",
    shadow: "shadow-gray-500/20"
  },
  { 
    icon: <FiLinkedin size={22} />, 
    url: "https://www.linkedin.com/in/vikhyatsaini/", 
    name: "LinkedIn",
    color: "from-[#0A66C2] to-[#004182]",
    shadow: "shadow-[#0A66C2]/30"
  },
  { 
    icon: <FiTwitter size={22} />, 
    url: "https://x.com/VikhyatSai51229", 
    name: "X (Twitter)",
    color: "from-gray-800 to-black dark:from-gray-200 dark:to-white", // Sleek monochrome for X
    shadow: "shadow-gray-500/20"
  },
  { 
    icon: <FiMail size={22} />, 
    url: "mailto:sainivikhyat045@gmail.com", 
    name: "Email",
    color: "from-[#10b981] to-teal-600",
    shadow: "shadow-emerald-500/30"
  }
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Contact', path: '/contact' },
];

// Sleek Staggered Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#f4f7f9]/80 dark:bg-[#0a0f18]/80 backdrop-blur-2xl border-t border-gray-200/50 dark:border-white/5 overflow-hidden transition-colors duration-500 z-10 pt-20 pb-8">
      
      {/* Sleek Cinematic Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] left-[10%] w-[400px] h-[400px] bg-[#10b981] rounded-full blur-[130px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.1, 0.03] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[140px] pointer-events-none z-0"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* TOP SECTION: Animated Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16"
        >
          
          {/* Brand & Bio (Spans 5 columns) */}
          <motion.div variants={itemVariants} className="md:col-span-12 lg:col-span-5 flex flex-col items-start">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 group mb-6">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 border border-white/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 -ml-4 w-8"></div>
                <span className="text-2xl font-black font-sans relative z-10">V</span>
              </motion.div>
              <span className="text-3xl font-serif font-extrabold tracking-tighter text-gray-900 dark:text-white uppercase">
                Vikhyat <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-teal-400 to-blue-500">Saini</span>
              </span>
            </Link>
            
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed font-medium max-w-md mb-8">
              A passionate Full Stack Developer and Software Engineer dedicated to building scalable, high-performance applications and crafting exceptional digital experiences.
            </p>
            
            {/* Sleek Social Icons */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-11 h-11 flex items-center justify-center rounded-xl bg-white dark:bg-[#1e293b]/40 text-gray-600 dark:text-gray-300 border border-gray-200/80 dark:border-white/10 hover:border-transparent hover:text-white hover:bg-gradient-to-br ${social.color} transition-all duration-300 shadow-sm hover:shadow-lg ${social.shadow} group backdrop-blur-md`}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links (Spans 3 columns) */}
          <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-3 lg:pl-10">
            <h3 className="text-gray-900 dark:text-white text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2">
              <FiCode className="text-[#10b981]" size={16} /> Quick Explore
            </h3>
            <ul className="flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-gray-500 dark:text-gray-400 hover:text-[#10b981] dark:hover:text-[#10b981] text-sm font-semibold transition-all duration-300 flex items-center gap-3 group w-max"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-[#10b981] group-hover:to-teal-500 group-hover:w-3 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sleek CTA Card (Spans 4 columns) */}
          <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-4">
            <div className="relative bg-white/50 dark:bg-[#1e293b]/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-white/5 shadow-xl overflow-hidden group">
              
              {/* Card border hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <h3 className="relative z-10 text-gray-900 dark:text-white text-2xl font-black mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#10b981] group-hover:to-teal-500 transition-all duration-300">
                Let's build together.
              </h3>
              
              <p className="relative z-10 text-gray-500 dark:text-gray-400 text-sm font-medium mb-8 leading-relaxed">
                Currently open for new opportunities, freelance projects, and exciting technical collaborations.
              </p>
              
              <Link 
                to="/contact" 
                onClick={scrollToTop}
                className="relative z-10 inline-flex items-center justify-center gap-3 w-full bg-gray-900 dark:bg-white hover:bg-gradient-to-r hover:from-[#10b981] hover:to-teal-500 text-white dark:text-gray-900 hover:text-white font-black uppercase tracking-widest py-3.5 px-6 rounded-xl transition-all duration-500 shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-1 text-[11px]"
              >
                <FiMail size={16} /> Say Hello <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </motion.div>

        {/* BOTTOM SECTION: Copyright & Back to Top */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="pt-6 border-t border-gray-200/80 dark:border-gray-800/60 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          
          <div className="text-gray-500 dark:text-gray-500 text-[11px] md:text-xs font-bold flex items-center gap-1.5 uppercase tracking-widest">
            © {new Date().getFullYear()} Vikhyat Saini. Built with <FiHeart className="text-red-500 fill-red-500 animate-pulse mx-0.5" size={14} />
          </div>

          <motion.button 
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-[#10b981] dark:hover:text-[#10b981] transition-colors"
          >
            Back to top 
            <span className="w-8 h-8 rounded-lg bg-white dark:bg-[#1e293b]/50 border border-gray-200 dark:border-white/5 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-[#10b981] group-hover:to-teal-400 group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
              <FiArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </motion.button>
          
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;