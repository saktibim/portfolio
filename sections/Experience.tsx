import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { PROFESSIONAL_HISTORY } from '../constants';
import { ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-[#FAFAFA]">
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] mb-6 text-gray-400">
            02 // PROFESSIONAL_CHRONOLOGY
          </h2>
          <h3 className="font-mono text-2xl md:text-3xl font-bold tracking-tight">Impact History</h3>
        </motion.div>
      </div>

      <div className="relative max-w-5xl">
        {/* Timeline main vertical line */}
        <div className="absolute left-4 md:left-[2.25rem] top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>

        <div className="space-y-24">
          {PROFESSIONAL_HISTORY.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative pl-6 md:pl-24"
            >
              {/* Timeline Indicator Hub */}
              <div className="absolute left-0 md:left-[1.85rem] top-1.5 flex items-center justify-center">
                <div className="w-3 h-3 bg-white border-2 border-matrix-green rounded-full z-20 shadow-[0_0_8px_rgba(0,255,65,0.4)]"></div>
                <div className="absolute w-6 h-6 bg-matrix-green/10 rounded-full animate-ping opacity-20"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* Meta Info (Tech Stack) */}
                <div className="lg:col-span-3 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {role.techStack.map(tech => (
                      <span key={tech} className="px-2.5 py-1 border border-gray-100 text-[9px] font-mono font-bold text-gray-400 bg-white uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Block */}
                <div className="lg:col-span-9">
                  <div className="group">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 gap-4">
                      <div>
                        <h4 className="font-mono text-2xl md:text-3xl font-bold text-off-black group-hover:text-matrix-green transition-colors tracking-tight">
                          {role.company}
                        </h4>
                        <div className="flex items-center gap-3 mt-2 text-gray-400 font-mono text-[10px] font-bold tracking-[0.1em] uppercase">
                          <span className="text-off-black">{role.role}</span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-10 bg-white/50 border-l border-matrix-green pl-6 py-2">
                      <p className="font-mono text-xs font-bold text-off-black mb-3 uppercase tracking-wide">
                        {role.headline}
                      </p>
                      <p className="font-sans text-gray-500 text-base leading-relaxed font-light italic">
                        "{role.context}"
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                      {role.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start group/ach">
                          <div className="w-5 h-5 rounded-full bg-matrix-green/5 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover/ach:bg-matrix-green/10 transition-colors">
                            <ChevronRight className="w-3 h-3 text-matrix-green" />
                          </div>
                          <div>
                            {achievement.title && achievement.title !== 'Impact' && (
                              <span className="font-mono text-[10px] font-bold text-off-black block mb-1 uppercase tracking-wider">
                                {achievement.title}
                              </span>
                            )}
                            <p className="font-sans text-gray-600 text-[14px] leading-relaxed font-light">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;