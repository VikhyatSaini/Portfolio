import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend, FiTrash2, FiChevronRight } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const mainMenuOptions = [
    { label: "💻 Tech Skills", value: "skills" },
    { label: "🚀 Projects", value: "projects" },
    { label: "🎓 Education", value: "education" },
    { label: "🏆 Achievements", value: "achievements" },
    { label: "📬 Contact Info", value: "contact" }
  ];

  // Initial greeting with menu options
  const initialMessage = { 
    text: portfolioData.chatbotData?.greetings || "👋 Hi! I'm Vikhyat's AI assistant. Please select an option below to learn more about him:", 
    isBot: true,
    options: mainMenuOptions
  };
  
  const [messages, setMessages] = useState([initialMessage]);

  // Scroll to bottom whenever messages update or bot is typing
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  // Advanced Regex Keyword Matching Logic
  const generateBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    const botData = portfolioData.chatbotData || {};
    
    if (/(hello|hi|hey|greetings|morning|afternoon|evening)/i.test(lowerInput)) return botData.greetings;
    if (/(about|who is|background|profile|intro|summary)/i.test(lowerInput)) return botData.about;
    if (/(skill|tech|stack|language|framework|tool|database|know|proficient)/i.test(lowerInput)) return botData.skills;
    if (/(project|work|portfolio|build|built|github|repo|code)/i.test(lowerInput)) return botData.projects;
    if (/(education|study|cgpa|lpu|college|school|degree|b\.tech|btech|marks|grade)/i.test(lowerInput)) return botData.education;
    if (/(training|experience|intern|bootcamp|summer)/i.test(lowerInput)) return botData.experience_training;
    if (/(achieve|cert|hackerrank|leetcode|badge|course|coursera|nptel|infosys)/i.test(lowerInput)) return botData.achievements_certs;
    if (/(contact|email|hire|phone|call|whatsapp|reach|connect|number)/i.test(lowerInput)) return botData.contact;
    if (/(resume|cv|download|document)/i.test(lowerInput)) return `You can view and download Vikhyat's full resume by clicking the "Resume" tab in the top navigation bar!`;
    
    return `I'm still learning! However, I can easily help you with specific topics. Please choose from the menu below:`;
  };

  const handleSendMessage = (text = inputValue, displayLabel = null) => {
    if (!text.trim()) return;

    // Add User Message (use displayLabel if provided, else the raw text)
    setMessages(prev => [...prev, { text: displayLabel || text, isBot: false }]);
    setInputValue("");
    setIsTyping(true);

    // Simulate Bot Thinking (Delay)
    setTimeout(() => {
      const response = generateBotResponse(text);
      // Append bot response and attach the main menu options again for easy navigation
      setMessages(prev => [...prev, { 
        text: response, 
        isBot: true,
        options: mainMenuOptions 
      }]);
      setIsTyping(false);
    }, 1000); 
  };

  const handleClearChat = () => {
    setMessages([initialMessage]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mb-6 w-[340px] sm:w-[380px] bg-white/90 dark:bg-[#0a0f18]/90 backdrop-blur-2xl rounded-[2rem] shadow-[0_10px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_50px_rgba(16,185,129,0.15)] overflow-hidden border border-gray-200/50 dark:border-gray-800 flex flex-col h-[580px] relative"
          >
            {/* Top Gradient Accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#10b981] via-teal-400 to-blue-500"></div>

            {/* Header */}
            <div className="bg-gray-50/80 dark:bg-[#06090e]/80 p-4 pt-5 border-b border-gray-200/50 dark:border-gray-800 flex justify-between items-center z-10 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 bg-gradient-to-br from-[#10b981] to-blue-500 text-white rounded-full flex items-center justify-center shadow-inner">
                    <FaRobot size={22} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-[#0B1120] rounded-full animate-pulse"></span>
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 dark:text-white text-sm">Vikhyat's Assistant</h3>
                  <p className="text-xs text-[#10b981] font-bold tracking-widest uppercase mt-0.5">Menu Mode</p>
                </div>
              </div>
              <div className="flex gap-2 text-gray-500 dark:text-gray-400">
                <button onClick={handleClearChat} className="p-2 hover:bg-white dark:hover:bg-white/10 hover:text-red-500 rounded-full transition-colors" title="Clear Chat">
                  <FiTrash2 size={16} />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white rounded-full transition-colors">
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-5 scrollbar-hide z-10">
              <AnimatePresence>
                {messages.map((msg, idx) => {
                  const isLastMessage = idx === messages.length - 1;
                  return (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      key={idx} 
                      className={`flex flex-col ${msg.isBot ? 'items-start' : 'items-end'}`}
                    >
                      <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] font-medium leading-relaxed ${
                        msg.isBot 
                          ? 'bg-gray-100/80 dark:bg-[#1e293b]/60 text-gray-800 dark:text-gray-200 rounded-tl-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm' 
                          : 'bg-gradient-to-r from-[#10b981] to-teal-500 text-white rounded-tr-sm shadow-md shadow-emerald-500/20'
                      }`}>
                        {/* Smart Text Formatting for \n (new lines) */}
                        {msg.text.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i !== msg.text.split('\n').length - 1 && <br className="my-1.5" />}
                          </React.Fragment>
                        ))}
                      </div>

                      {/* Render Menu Options ONLY if it's the bot's message AND it's the last message */}
                      {msg.isBot && msg.options && isLastMessage && !isTyping && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex flex-col gap-2 mt-3 w-[85%]"
                        >
                          {msg.options.map((opt, i) => (
                            <button
                              key={i}
                              onClick={() => handleSendMessage(opt.value, opt.label)}
                              className="flex items-center justify-between text-left w-full px-4 py-2.5 bg-white dark:bg-[#0B1120] hover:bg-emerald-50 dark:hover:bg-[#10b981]/10 text-gray-700 dark:text-gray-300 hover:text-[#10b981] dark:hover:text-[#10b981] text-xs font-bold border border-gray-200/50 dark:border-gray-700/50 rounded-xl transition-colors shadow-sm group"
                            >
                              {opt.label}
                              <FiChevronRight className="text-gray-400 group-hover:text-[#10b981] transition-colors" />
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100/80 dark:bg-[#1e293b]/60 border border-gray-200/50 dark:border-gray-700/50 px-4 py-4 rounded-2xl rounded-tl-sm flex gap-1.5 w-16 items-center justify-center shadow-sm">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }} className="w-1.5 h-1.5 bg-[#10b981] rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.2 }} className="w-1.5 h-1.5 bg-[#10b981] rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.4 }} className="w-1.5 h-1.5 bg-[#10b981] rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area (Kept as a fallback, but users will primarily use the menu) */}
            <div className="p-4 bg-gray-50/80 dark:bg-[#06090e]/80 border-t border-gray-200/50 dark:border-gray-800 z-10 backdrop-blur-md">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                className="flex items-center gap-2 bg-white dark:bg-[#0a0f18] border border-gray-200 dark:border-gray-700 rounded-full pl-5 pr-2 py-2 focus-within:border-[#10b981] focus-within:ring-2 focus-within:ring-[#10b981]/20 transition-all shadow-inner"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Or type a question..."
                  className="flex-1 bg-transparent text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none font-medium"
                />
                <button 
                  type="submit" 
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 rounded-full bg-[#10b981] text-white flex items-center justify-center hover:bg-teal-500 disabled:opacity-50 disabled:hover:bg-[#10b981] transition-colors shadow-md shrink-0"
                >
                  <FiSend size={16} className="-ml-0.5 mt-0.5" />
                </button>
              </form>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-blue-500 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all z-50 relative border border-white/20"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
              <FiX size={28} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
              <FiMessageSquare size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default Chatbot;


//done but responses are not good