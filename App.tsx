import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Experience from './sections/Experience';
import ExcelLab from './sections/ExcelLab';
import Footer from './sections/Footer';
import ProjectDetail from './sections/ProjectDetail';
import { Database, Sigma, TrendingUp, Crosshair } from 'lucide-react';
import { PROJECTS } from './constants';

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleProjectClick = (id: string) => {
    setSelectedProjectId(id);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedProjectId(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white text-off-black selection:bg-matrix-green selection:text-black font-sans">
      {/* Navigation / Header - Premium Glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

          <div className="flex items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => { setSelectedProjectId(null); window.scrollTo(0, 0); }}
              className="font-mono font-bold text-xl tracking-tighter hover:text-matrix-green transition-colors cursor-pointer group"
            >
              opswithbima<span className="text-matrix-green group-hover:animate-pulse">.com</span>
            </motion.div>

            {/* Technical Badges - Refined */}
            <div className="hidden xl:flex items-center gap-4">
              {/* Badge 1: ERP Core */}
              <motion.a
                href="#experience"
                whileHover={{ y: -2 }}
                className="flex items-center gap-2 px-3 py-1.5 border border-off-black/5 bg-off-black text-[#F0F0F0] font-mono text-[9px] font-bold tracking-[0.15em] hover:shadow-[0_8px_16px_rgba(0,255,65,0.15)] transition-all no-underline overflow-hidden relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-matrix-green opacity-0 group-hover:opacity-10 transition-opacity"
                />
                <Database className="w-3.5 h-3.5 text-matrix-green" />
                <span>SAP SD/MM</span>
              </motion.a>

              {/* Badge 2: Optimization Standard */}
              <motion.a
                href="#services"
                whileHover={{ y: -2 }}
                className="flex items-center gap-2 px-3 py-1.5 border border-off-black/5 bg-off-black text-[#F0F0F0] font-mono text-[9px] font-bold tracking-[0.15em] hover:shadow-[0_8px_16px_rgba(0,255,65,0.15)] transition-all no-underline overflow-hidden relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-matrix-green opacity-0 group-hover:opacity-10 transition-opacity"
                />
                <div className="relative w-4 h-4 flex items-center justify-center">
                  <Crosshair className="absolute w-full h-full text-matrix-green opacity-60 stroke-[1.5]" />
                  <Sigma className="relative w-2.5 h-2.5 text-matrix-green stroke-[2.5]" />
                </div>
                <span>SIX SIGMA : GREENBELT</span>
              </motion.a>

              {/* Badge 3: Analytics Engine */}
              <motion.a
                href="#lab"
                whileHover={{ y: -2 }}
                className="flex items-center gap-2 px-3 py-1.5 border border-off-black/5 bg-off-black text-[#F0F0F0] font-mono text-[9px] font-bold tracking-[0.15em] hover:shadow-[0_8px_16px_rgba(0,255,65,0.15)] transition-all no-underline overflow-hidden relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-matrix-green opacity-0 group-hover:opacity-10 transition-opacity"
                />
                <TrendingUp className="w-3.5 h-3.5 text-matrix-green" />
                <span>EXCEL / PBI : ARCHITECT</span>
              </motion.a>
            </div>
          </div>

          <div className="hidden md:flex gap-10 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
            <a href="#services" className="hover:text-off-black transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-matrix-green transition-all group-hover:w-full" />
            </a>
            <a href="#experience" className="hover:text-off-black transition-colors relative group">
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-matrix-green transition-all group-hover:w-full" />
            </a>
            <a href="#lab" className="hover:text-off-black transition-colors relative group">
              The Lab
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-matrix-green transition-all group-hover:w-full" />
            </a>
          </div>
        </div>
      </nav>

      <main className="relative">
        <AnimatePresence mode="wait">
          {selectedProjectId ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {(() => {
                const project = PROJECTS.find(p => p.id === selectedProjectId);
                return project ? <ProjectDetail project={project} onBack={handleBack} /> : null;
              })()}
            </motion.div>
          ) : (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <Services />
              <Experience />
              <ExcelLab onProjectClick={handleProjectClick} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
