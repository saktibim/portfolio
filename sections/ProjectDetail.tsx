import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import Button from '../components/Button';
import Section from '../components/Section';
import { ArrowLeft, Download, FileSpreadsheet, CheckCircle2 } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      {/* Detail Header - Slim Premium Glass */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-between items-center">
          <motion.button
            whileHover={{ x: -5 }}
            onClick={onBack}
            className="flex items-center text-[10px] font-mono font-bold uppercase tracking-[0.2em] hover:text-matrix-green transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-3 group-hover:text-matrix-green" />
            RETURN_TO_BASE
          </motion.button>
          <div className="font-mono text-[9px] font-bold text-gray-300 hidden md:block tracking-widest uppercase">
            OBJECT_ID: {project.id.toUpperCase()} // STATUS: ALPHA
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-32">
        <Section borderTop={false} className="py-0">

          <div className="max-w-4xl mx-auto">
            {/* Project Hero Title Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="text-matrix-green p-3 bg-gray-50 rounded-lg">
                  {React.cloneElement(project.icon as React.ReactElement<any>, { size: 40, strokeWidth: 1.5 })}
                </div>
                <div className="h-px bg-gray-100 flex-grow"></div>
              </div>

              <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-off-black leading-tight tracking-tight">
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[9px] font-mono font-bold tracking-[0.15em] uppercase border border-gray-100 text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Content Architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="lg:col-span-8 space-y-20"
              >
                {/* Mission / Challenge */}
                <div className="group">
                  <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-matrix-green mb-8">
                    01 // THE_CHALLENGE
                  </h3>
                  <p className="font-sans text-lg text-gray-500 leading-relaxed font-light italic border-l-2 border-gray-50 pl-8">
                    "{project.content.problem}"
                  </p>
                </div>

                {/* Technical Overview */}
                <div>
                  <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-matrix-green mb-8">
                    02 // SYSTEMS_ARCHITECTURE
                  </h3>
                  <p className="font-sans text-lg text-gray-600 leading-relaxed font-light">
                    {project.content.solution}
                  </p>
                </div>

                {/* Impact Metrics */}
                <div className="bg-gray-50/50 border border-gray-100 p-10 md:p-14 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-matrix-green/20 font-bold uppercase tracking-widest">
                    ROI_CONFIRMED // IMPACT_VERIFIED
                  </div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-off-black mb-10 flex items-center gap-4">
                    <CheckCircle2 className="w-4 h-4 text-matrix-green" />
                    Key Performance Indicators
                  </h3>
                  <ul className="space-y-6">
                    {project.content.impact.map((item, idx) => (
                      <li key={idx} className="flex items-start group/li">
                        <div className="w-1.5 h-1.5 bg-matrix-green rounded-full mr-6 mt-2.5 transition-transform group-hover/li:scale-150"></div>
                        <p className="font-sans text-gray-600 text-base leading-relaxed font-light">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>

              {/* Deployment Hub Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="lg:col-span-4"
              >
                <div className="sticky top-32 bg-off-black text-[#F0F0F0] p-10 border-l-8 border-matrix-green shadow-2xl overflow-hidden relative group">
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-matrix-green/5 blur-3xl rounded-full"></div>

                  <FileSpreadsheet className="w-12 h-12 text-matrix-green mb-8 group-hover:scale-110 transition-transform duration-500" />
                  <h4 className="font-mono text-2xl font-bold mb-4 tracking-tighter">
                    Artifact Hub
                  </h4>
                  <p className="font-sans text-xs text-gray-400 mb-10 leading-relaxed font-light tracking-wide">
                    Access the foundational models and sanitized logic frameworks used in this deployment.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-matrix-green text-off-black font-mono text-[10px] font-bold uppercase py-4 tracking-[0.2em] hover:bg-white transition-colors flex items-center justify-center gap-3"
                  >
                    <Download className="w-3.5 h-3.5" />
                    GET_ARTIFACT
                  </motion.button>

                  <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-2">
                    <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                      FORMAT: .XLSX // .PBIX
                    </p>
                    <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                      METADATA: SANITIZED_DATASET
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </Section>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;