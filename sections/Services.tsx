import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Button from '../components/Button';
import { SERVICES } from '../constants';
import { openCalendly, useUpworkMode } from '../contact';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  const upwork = useUpworkMode();

  return (
    <Section id="services" className="bg-white">
      <div className="mb-16 max-w-3xl">
        <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 mb-6">
          How I can help
        </h2>
        <h3 className="font-mono text-3xl md:text-4xl font-bold tracking-tight text-off-black mb-6">
          Fixed-scope projects for teams that have outgrown spreadsheets
        </h3>
        <p className="font-sans text-lg text-gray-600 font-light leading-relaxed">
          Each project works on your real data and ends with something your team keeps using.
          Price is fixed and agreed before we start.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col border border-gray-100 bg-gray-50/30 p-8 hover:border-matrix-green/60 transition-colors"
          >
            <h4 className="font-mono text-lg font-bold text-off-black mb-3">{service.name}</h4>
            <p className="font-sans text-sm text-gray-500 italic leading-relaxed mb-6">"{service.pain}"</p>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">You get</p>
            <ul className="space-y-3 mb-8 flex-grow">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start text-sm text-gray-700 font-light">
                  <Check className="w-4 h-4 text-matrix-green mr-3 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-off-black pt-4 border-t border-gray-100">
              {service.timeline}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-off-black text-white p-8 md:p-10">
        <div>
          <p className="font-mono text-lg font-bold mb-2">Looking to hire for a role instead?</p>
          <p className="font-sans text-sm text-gray-400 font-light">
            I'm also open to remote or on-site roles: Inventory Analyst, Supply / Demand Planner, Procurement Specialist.
          </p>
        </div>
        {!upwork && (
          <Button
            variant="primary"
            onClick={() => openCalendly('services')}
            className="border-none flex-shrink-0"
          >
            Book a free call
          </Button>
        )}
      </div>
    </Section>
  );
};

export default Services;
