import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, 
  FiCheckCircle, FiAlertCircle, FiSend, FiMessageSquare, 
  FiUser, FiAtSign 
} from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Make sure to replace these with your actual EmailJS credentials if you haven't already
    const serviceID = 'service_v3vjz99'; 
    const templateID = 'template_v5qxwnp'; 
    const publicKey = 'SwU8EX-8oI4ALVIAT'; 

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
          setIsSubmitting(false);
          setStatus('success');
          formRef.current.reset();
          setTimeout(() => setStatus(null), 5000);
      }, (error) => {
          setIsSubmitting(false);
          setStatus('error');
          console.error("EmailJS Error:", error.text);
      });
  };

  // Premium Spring physics variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 15 }
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-12 min-h-screen bg-[#f4f7f9] dark:bg-[#0B1120] relative overflow-hidden flex flex-col justify-center transition-colors duration-500">
      
      {/* High-Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKSIvPjwvc3ZnPg==')] opacity-50 dark:opacity-20 z-0 pointer-events-none"></div>

      {/* Massive Glowing Orbs */}
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

      <div className="max-w-[1300px] mx-auto w-full relative z-10">
        
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
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]"></span>
              </span>
              <span className="text-xs font-black tracking-[0.2em] text-gray-800 dark:text-gray-300 uppercase">
                Direct Line
              </span>
            </div>
            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 drop-shadow-sm">
              Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-teal-400 to-blue-500">Together</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl text-base md:text-lg leading-relaxed font-medium">
              Have a project idea, an internship opportunity, or just want to chat? Drop a message below and I'll get back to you quickly.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Premium Bento Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5"
          >
            {/* Email Card */}
            <motion.a 
              variants={itemVariants}
              href="mailto:sainivikhyat045@gmail.com"
              className="relative bg-white/70 dark:bg-[#1e293b]/50 backdrop-blur-xl border-2 border-gray-100/50 dark:border-white/5 p-6 rounded-3xl flex items-center gap-5 group hover:border-[#10b981]/50 dark:hover:border-[#10b981]/50 transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#10b981]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#10b981] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
              
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center text-[#10b981] group-hover:scale-110 group-hover:bg-[#10b981] group-hover:text-white transition-all duration-500 shrink-0 shadow-inner">
                <FiMail size={24} />
              </div>
              <div className="relative z-10 overflow-hidden">
                <span className="text-[10px] md:text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-1">Email Address</span>
                <span className="text-sm md:text-base font-extrabold text-gray-900 dark:text-white truncate block group-hover:text-[#10b981] transition-colors">sainivikhyat045@gmail.com</span>
              </div>
            </motion.a>

            {/* Phone Card */}
            <motion.a 
              variants={itemVariants}
              href="tel:+917007957913"
              className="relative bg-white/70 dark:bg-[#1e293b]/50 backdrop-blur-xl border-2 border-gray-100/50 dark:border-white/5 p-6 rounded-3xl flex items-center gap-5 group hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>

              <div className="relative z-10 w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shrink-0 shadow-inner">
                <FiPhone size={24} />
              </div>
              <div className="relative z-10">
                <span className="text-[10px] md:text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-1">Phone / WhatsApp</span>
                <span className="text-sm md:text-base font-extrabold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">+91 7007957913</span>
              </div>
            </motion.a>

            {/* Location Card */}
            <motion.div 
              variants={itemVariants}
              className="relative bg-white/70 dark:bg-[#1e293b]/50 backdrop-blur-xl border-2 border-gray-100/50 dark:border-white/5 p-6 rounded-3xl flex items-center gap-5 group hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden sm:col-span-2 lg:col-span-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-1.5 h-full bg-purple-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>

              <div className="relative z-10 w-16 h-16 rounded-2xl bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 flex items-center justify-center text-purple-500 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 shrink-0 shadow-inner">
                <FiMapPin size={24} />
              </div>
              <div className="relative z-10">
                <span className="text-[10px] md:text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-1">Location</span>
                <span className="text-sm md:text-base font-extrabold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors">Lucknow, Uttar Pradesh</span>
              </div>
            </motion.div>

            {/* Socials Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/70 dark:bg-[#1e293b]/50 backdrop-blur-xl border-2 border-gray-100/50 dark:border-white/5 p-6 rounded-3xl flex flex-col gap-4 sm:col-span-2 lg:col-span-1 shadow-sm"
            >
              <span className="text-[10px] md:text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block ml-2">Social Profiles</span>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/vikhyatsaini/" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-3 py-4 bg-white dark:bg-[#0B1120]/50 rounded-2xl border border-gray-100 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:text-white hover:border-[#0a66c2] dark:hover:border-[#0a66c2] hover:bg-[#0a66c2] dark:hover:bg-[#0a66c2] transition-all text-sm font-bold group shadow-sm hover:shadow-lg">
                  <FiLinkedin size={18} className="group-hover:scale-110 transition-transform" /> LinkedIn
                </a>
                <a href="https://github.com/VikhyatSaini" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-3 py-4 bg-white dark:bg-[#0B1120]/50 rounded-2xl border border-gray-100 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:text-white hover:border-gray-800 dark:hover:border-white/30 hover:bg-gray-800 dark:hover:bg-white/10 transition-all text-sm font-bold group shadow-sm hover:shadow-lg">
                  <FiGithub size={18} className="group-hover:scale-110 transition-transform" /> GitHub
                </a>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="lg:col-span-7 relative bg-white/70 dark:bg-[#1e293b]/50 backdrop-blur-2xl border-2 border-gray-100/50 dark:border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-xl dark:shadow-[0_0_50px_rgba(0,0,0,0.2)] overflow-hidden"
          >
            {/* Form Top Gradient Accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#10b981] via-teal-400 to-blue-500"></div>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name Input */}
                <div className="space-y-2 group relative">
                  <label htmlFor="user_name" className="text-[10px] md:text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-2 group-focus-within:text-[#10b981] transition-colors">Your Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#10b981] transition-colors">
                      <FiUser size={18} />
                    </div>
                    <input 
                      type="text" 
                      name="user_name" 
                      id="user_name" 
                      required 
                      placeholder="John Doe"
                      className="w-full pl-12 pr-5 py-4 bg-white dark:bg-[#0B1120]/50 border-2 border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 rounded-2xl focus:outline-none focus:border-[#10b981] dark:focus:border-[#10b981] focus:ring-4 focus:ring-[#10b981]/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all font-medium text-sm md:text-base shadow-sm"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2 group relative">
                  <label htmlFor="user_email" className="text-[10px] md:text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-2 group-focus-within:text-[#10b981] transition-colors">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#10b981] transition-colors">
                      <FiAtSign size={18} />
                    </div>
                    <input 
                      type="email" 
                      name="user_email" 
                      id="user_email" 
                      required 
                      placeholder="john@example.com"
                      className="w-full pl-12 pr-5 py-4 bg-white dark:bg-[#0B1120]/50 border-2 border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 rounded-2xl focus:outline-none focus:border-[#10b981] dark:focus:border-[#10b981] focus:ring-4 focus:ring-[#10b981]/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all font-medium text-sm md:text-base shadow-sm"
                    />
                  </div>
                </div>

              </div>

              {/* Message Input */}
              <div className="space-y-2 group relative">
                <label htmlFor="message" className="text-[10px] md:text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-2 group-focus-within:text-[#10b981] transition-colors">Your Message</label>
                <div className="relative">
                  <div className="absolute top-5 left-0 pl-5 flex items-start pointer-events-none text-gray-400 group-focus-within:text-[#10b981] transition-colors">
                    <FiMessageSquare size={18} />
                  </div>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows="6" 
                    required 
                    placeholder="Tell me about your project, internship opportunity, or just say hi..."
                    className="w-full pl-12 pr-5 py-4 bg-white dark:bg-[#0B1120]/50 border-2 border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 rounded-2xl focus:outline-none focus:border-[#10b981] dark:focus:border-[#10b981] focus:ring-4 focus:ring-[#10b981]/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all resize-none font-medium text-sm md:text-base shadow-sm"
                  ></textarea>
                </div>
              </div>

              {/* Status Notifications */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, height: 0, y: 10 }} animate={{ opacity: 1, height: 'auto', y: 0 }} exit={{ opacity: 0, height: 0, y: -10 }} className="overflow-hidden">
                    <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-400/10 border border-emerald-200 dark:border-emerald-400/20 p-4 rounded-xl text-sm font-bold mb-2 shadow-sm">
                      <FiCheckCircle size={20} className="shrink-0" />
                      <span>Message sent successfully! I'll be in touch soon.</span>
                    </div>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, height: 0, y: 10 }} animate={{ opacity: 1, height: 'auto', y: 0 }} exit={{ opacity: 0, height: 0, y: -10 }} className="overflow-hidden">
                    <div className="flex items-center gap-3 text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-400/10 border border-red-200 dark:border-red-400/20 p-4 rounded-xl text-sm font-bold mb-2 shadow-sm">
                      <FiAlertCircle size={20} className="shrink-0" />
                      <span>Oops! Something went wrong with EmailJS. Please try again or email me directly.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group relative w-full py-5 bg-gradient-to-r from-[#10b981] to-teal-500 text-white font-extrabold rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest text-sm md:text-base flex items-center justify-center gap-3 mt-6 overflow-hidden hover:-translate-y-1"
              >
                {/* Button Inner Sweep Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0"></div>
                
                {isSubmitting ? (
                  <span className="relative z-10 flex items-center gap-3 animate-pulse">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  <span className="relative z-10 flex items-center gap-3 drop-shadow-md">
                    <FiSend className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" size={20} /> 
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

//done