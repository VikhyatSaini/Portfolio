import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiHome, FiCpu, FiLayers, FiAward, FiFileText, FiMail, FiTrendingUp, FiBookOpen, FiTerminal, FiUser } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/', icon: <FiHome /> },
  { name: 'Skills', path: '/skills', icon: <FiCpu /> },
  { name: 'Projects', path: '/projects', icon: <FiLayers /> },
  { name: 'Certifications', path: '/certifications', icon: <FiAward /> },
  { name: 'Achievements', path: '/achievements', icon: <FiTrendingUp /> },
  { name: 'Education', path: '/education', icon: <FiBookOpen /> },
  { name: 'Training', path: '/training', icon: <FiTerminal /> },
  { name: 'Resume', path: '/resume', icon: <FiFileText /> },
  { name: 'Contact', path: '/contact', icon: <FiMail /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll for background blur effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu AND scroll to top smoothly on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
        ? 'bg-white/80 dark:bg-[#0a0f18]/80 backdrop-blur-2xl border-b border-gray-200/50 dark:border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.05)]' 
        : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1500px] mx-auto flex items-center justify-between px-6 md:px-10">
        
        {/* LEFT: Premium Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group relative z-[110]">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-gradient-to-br from-[#10b981] to-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 border border-white/20"
          >
            <span className="text-xl font-black font-sans">V</span>
          </motion.div>
          <span className="text-xl font-serif font-extrabold tracking-tighter text-gray-900 dark:text-white uppercase hidden sm:block">
            Vikhyat <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-teal-500">Saini</span>
          </span>
        </Link>

        {/* CENTER: Sleek Desktop Navigation */}
        <nav className="hidden xl:block">
          <ul className="flex items-center gap-1.5 bg-gray-100/60 dark:bg-white/5 p-1.5 rounded-full border border-gray-200/50 dark:border-white/5 shadow-inner backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name} className="relative">
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 rounded-full z-10 ${
                      isActive 
                        ? 'text-[#10b981] dark:text-[#10b981]' 
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-white dark:bg-[#1e293b] rounded-full shadow-sm border border-gray-200/50 dark:border-white/5"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                      {link.icon}
                    </span>
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* RIGHT: Controls */}
        <div className="flex items-center gap-4 relative z-[110]">
          <div className="bg-gray-100/80 dark:bg-white/5 p-1.5 rounded-full shadow-inner border border-gray-200/50 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 transition-colors cursor-pointer">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md transition-colors flex items-center justify-center"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Frosted Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-900/40 dark:bg-black/60 backdrop-blur-sm z-[90] xl:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sliding Glass Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-full left-0 w-full bg-white/95 dark:bg-[#0a0f18]/95 backdrop-blur-2xl border-b border-gray-200 dark:border-white/10 shadow-2xl xl:hidden z-[95] overflow-hidden rounded-b-3xl"
            >
              <div className="grid grid-cols-2 gap-3 p-6 max-h-[75vh] overflow-y-auto">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      transition={{ delay: i * 0.04, type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex flex-col items-center justify-center gap-3 p-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                          isActive
                          ? 'bg-emerald-50 dark:bg-[#10b981]/10 text-[#10b981] border-emerald-200 dark:border-[#10b981]/30 shadow-sm'
                          : 'bg-gray-50 dark:bg-white/5 text-gray-500 border-transparent hover:border-gray-200 dark:hover:border-white/10 hover:text-gray-900 dark:hover:text-white'
                        }`}
                      >
                        <span className={`p-3 rounded-full ${isActive ? 'bg-[#10b981] text-white shadow-md shadow-emerald-500/30' : 'bg-white dark:bg-[#1e293b] shadow-sm'}`}>
                          {React.cloneElement(link.icon, { size: 18 })}
                        </span>
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;