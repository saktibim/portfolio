import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { PROFESSIONAL_HISTORY } from '../constants';
import { ChevronRight } from 'lucide-react';

// "08/2024 — 08/2025" -> "2024–2025" (single year if both ends match)
const toYears = (period: string) => {
  const years = period.match(/\d{4}/g) ?? [];
  const first = years[0];
  const last = years[years.length - 1];
  return first === last ? first : `${first}–${last}`;
};

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
          <h3 className="font-mono text-2xl md:text-3xl font-bold tracking-tight">9 years of real supply chain work</h3>
          <p className="font-sans text-gray-500 text-base font-light mt-4 max-w-2xl">
            The case studies above use practice data. This is the real work behind them.
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl">
        <ul className="border-t border-gray-200">
          {PROFESSIONAL_HISTORY.map((role, index) => (
            <motion.li
              key={role.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={
                role.featuredNote
                  ? 'my-3 bg-white border-2 border-matrix-green p-5 md:p-7 shadow-[0_20px_40px_rgba(0,255,65,0.08)]'
                  : 'border-b border-gray-200 py-6 md:py-7'
              }
            >
              {role.featuredNote && (
                <span className="inline-block mb-4 px-3 py-1 bg-matrix-green text-off-black font-mono text-[10px] font-bold uppercase tracking-[0.15em]">
                  ★ {role.featuredNote}
                </span>
              )}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-2 items-baseline">
                <p className="md:col-span-2 font-mono text-[11px] font-bold text-gray-400 tracking-[0.1em]">
                  {toYears(role.period)}
                </p>
                <div className="md:col-span-4">
                  <h4 className="font-mono text-base md:text-lg font-bold text-off-black tracking-tight">
                    {role.company}
                  </h4>
                  <p className="font-sans text-sm text-gray-500 mt-1">{role.role}</p>
                </div>
                <p className="md:col-span-6 font-sans text-[15px] text-gray-700 leading-relaxed mt-1 md:mt-0">
                  {role.highlight}
                </p>
              </div>
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
