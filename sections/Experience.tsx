import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { PROFESSIONAL_HISTORY } from '../constants';
import { ChevronRight } from 'lucide-react';

const ROW_GRID = 'grid grid-cols-1 md:grid-cols-[1.25fr_1.4fr_1.3fr] gap-x-8 gap-y-1 items-baseline';

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-[#FAFAFA]">
      <div className="mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] mb-6 text-gray-400">
            Track record
          </h2>
          <h3 className="font-mono text-2xl md:text-3xl font-bold tracking-tight">
            Hands-on in e-commerce, energy, tech and logistics
          </h3>
          <p className="font-sans text-gray-500 text-base font-light mt-4 max-w-2xl">
            Where I've done the work.
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl">
        <div className={`hidden md:grid md:grid-cols-[1.25fr_1.4fr_1.3fr] gap-x-8 pb-3 border-b border-gray-300 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400`}>
          <span>Company</span>
          <span>Role</span>
          <span>Sector</span>
        </div>

        <ul>
          {PROFESSIONAL_HISTORY.map((role, index) => (
            <motion.li
              key={role.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={
                role.featuredNote
                  ? `${ROW_GRID} -mx-3.5 py-6 pl-[11px] pr-3.5 border-l-[3px] border-matrix-green bg-[#F0FFF4] border-b border-b-gray-200`
                  : `${ROW_GRID} py-6 border-b border-gray-200`
              }
            >
              <h4 className="font-mono text-base md:text-[17px] font-bold text-off-black tracking-tight">
                {role.company}
              </h4>
              <p className="font-sans text-sm text-gray-500">{role.role}</p>
              <p className="font-sans text-sm text-off-black mt-1 md:mt-0">{role.sector}</p>
            </motion.li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-sans text-sm text-gray-500 leading-relaxed">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mr-3">Training</span>
            Lean Six Sigma Green Belt · Supply Chain Management Specialization (Rutgers University)
          </p>
          <Link
            to="/certificates"
            className="inline-flex items-center font-mono text-xs font-bold text-off-black uppercase tracking-[0.2em] hover:text-matrix-green transition-colors group no-underline"
          >
            Verify certificates <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
