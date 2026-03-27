import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <-- Imported new premium Footer

import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements'; 
import Education from './sections/Education';
import Training from './sections/Training';
import CareerSnapshot from './sections/CareerSnapshot';
import Contact from './sections/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      {/* Global Wrapper updated for the new premium Light/Dark mode colors */}
      <div className="min-h-screen bg-[#f4f7f9] dark:bg-[#0B1120] text-gray-900 dark:text-white transition-colors duration-500 font-sans selection:bg-[#10b981] selection:text-white flex flex-col relative">
        
        {/* Global Components - These stay on every page */}
        <Navbar />
        
        {/* Main Content Area - Routes control which component is visible */}
        <main className="flex-grow pt-20 relative z-10"> 
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/achievements" element={<Achievements />} /> 
            <Route path="/education" element={<Education />} />
            <Route path="/training" element={<Training />} />
            <Route path="/resume" element={<CareerSnapshot />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Global Footer - Upgraded to premium glassmorphism design */}
        <Footer />

        {/* Global Chatbot - Stays active and remembers chat history across pages */}
        <Chatbot />

      </div>
    </Router>
  );
}

export default App;