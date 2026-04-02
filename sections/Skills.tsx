import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { SKILLS } from '../constants';
import { Database, TrendingUp, Sigma } from 'lucide-react';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'tech': return <Database className="w-6 h-6 text-matrix-green" />;
      case 'ops-excellence': return <TrendingUp className="w-6 h-6 text-matrix-green" />;
      case 'strategic': return <Sigma className="w-6 h-6 text-matrix-green" />;
      default: return null;
    }
  };

  return (
    <Section id="skills" className="bg-white">
      <div className="mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 mb-6"
        >
          01 // CORE_COMPETENCIES
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-mono text-3xl md:text-4xl font-bold tracking-tight text-off-black"
        >
          Technical Skills &<br />Domain Expertise
        </motion.h3>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {SKILLS.map((skill) => (
          <motion.div 
            key={skill.id}
            variants={itemVariants}
            className="border border-gray-100 p-8 hover:border-matrix-green/50 transition-colors bg-gray-50/30 flex flex-col h-full"
          >
            <div className="mb-6">
              {getIcon(skill.id)}
            </div>
            <h4 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-3">
              {skill.category}
            </h4>
            <h5 className="font-sans font-bold text-lg text-off-black leading-snug mb-6">
              {skill.title}
            </h5>
            <ul className="space-y-3 mt-auto">
              {skill.tools.map((tool) => (
                <li key={tool} className="flex items-center text-sm text-gray-600 font-light">
                  <span className="w-1.5 h-1.5 bg-matrix-green/50 mr-3"></span>
                  {tool}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
