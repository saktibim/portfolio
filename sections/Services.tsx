import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';

interface ServicesProps {
  onServiceClick?: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
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

  return (
    <Section id="services" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] mb-6 text-gray-400">
              01 // CORE_MODULES
            </h2>
            <h3 className="font-mono text-2xl md:text-3xl font-bold mb-8 leading-tight tracking-tight">
              Services & <br />Expertise
            </h3>
            <p className="font-sans text-lg text-gray-500 mb-10 leading-relaxed font-light">
              Scalable operational solutions for growing businesses.
              From interim leadership to custom data visualization tools.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {SERVICES.map((service, index) => {
            const hasDetail = !!service.content;
            const CardContent = (
              <motion.div
                variants={itemVariants}
                className="flex flex-col justify-between border border-gray-100 p-8 hover:border-matrix-green transition-all duration-500 group bg-gray-50/30 relative overflow-hidden h-full min-h-[320px] cursor-pointer"
              >
                <div className="absolute top-0 right-0 p-4 font-mono text-xs opacity-5 group-hover:opacity-10 transition-opacity">
                  #0{index + 1}
                </div>
                <div className="relative z-10">
                  <span className="font-mono text-[10px] text-matrix-green font-bold mb-6 block tracking-widest uppercase">
                    {(index + 1).toString().padStart(2, '0')} // EXEC
                  </span>
                  <h4 className="font-mono text-xl font-bold mb-6 group-hover:text-matrix-green transition-colors leading-tight">
                    {service.title}
                  </h4>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed mb-10 font-light text-wrap">
                    {service.description}
                  </p>
                </div>
                <div
                  className="flex items-center text-[10px] font-bold font-mono group-hover:text-matrix-green transition-colors mt-auto tracking-widest uppercase py-2 border-b border-transparent group-hover:border-matrix-green w-fit"
                >
                  {service.ctaText} <ArrowRight className="ml-3 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );

            return hasDetail ? (
              <Link key={service.id} to={`/service/${service.id}`} className="no-underline">
                {CardContent}
              </Link>
            ) : (
              <div key={service.id} onClick={() => onServiceClick?.(service.id)}>
                {CardContent}
              </div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};

export default Services;
