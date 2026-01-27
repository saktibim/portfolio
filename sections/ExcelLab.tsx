import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { PROJECTS } from '../constants';

import { Link } from 'react-router-dom';

const ExcelLab: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <Section id="lab" className="bg-white">
      {/* Header Area */}
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-12 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 mb-6">
            03 // PORTFOLIO_LAB
          </h2>
          <h3 className="font-mono text-2xl md:text-3xl font-bold tracking-tight text-off-black">
            End-To-End Systems<br /> & Dashboards
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-sans text-gray-500 max-w-sm text-right font-light leading-relaxed hidden md:block"
        >
          A selection of automated supply chain audits,
          real-time ERP integrations, and business intelligence suites.
        </motion.p>
      </div>

      {/* Projects Collection */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {PROJECTS.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="no-underline group relative flex flex-col h-full"
          >
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="flex flex-col border border-gray-100 bg-gray-50/20 p-10 transition-all duration-500 hover:border-matrix-green hover:bg-white hover:shadow-[0_20px_40px_rgba(0,255,65,0.08)] cursor-pointer h-full"
            >
              {/* Project ID Tag */}
              <div className="font-mono text-[9px] font-bold text-gray-300 absolute top-8 right-10 tracking-[0.2em] uppercase">
                ID::{project.id.slice(0, 4)}
              </div>

              {/* Visual Icon */}
              <div className="mb-10 text-off-black group-hover:text-matrix-green transition-colors duration-500">
                {React.cloneElement(project.icon as React.ReactElement, { size: 32, strokeWidth: 1.5 })}
              </div>

              {/* Project Identity */}
              <h4 className="font-mono text-xl font-bold text-off-black mb-6 leading-tight min-h-[50px] flex items-center group-hover:text-matrix-green transition-colors">
                {project.title}
              </h4>

              {/* Technical Labels */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[8px] font-mono font-bold tracking-widest uppercase border border-gray-100 text-gray-400 group-hover:border-matrix-green/30 group-hover:text-off-black transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Narrative */}
              <p className="font-sans text-[14px] text-gray-500 leading-relaxed font-light mb-10 h-full">
                {project.description}
              </p>

              {/* Interaction Layer */}
              <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-off-black uppercase tracking-[0.2em] group-hover:text-matrix-green transition-colors">
                  DEPLOY_CASE_STUDY
                </span>
                <div className="w-8 h-px bg-gray-200 group-hover:bg-matrix-green group-hover:w-12 transition-all duration-500"></div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </Section>
  );
};

export default ExcelLab;
