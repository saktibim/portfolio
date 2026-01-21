import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Section from '../components/Section';

const Hero: React.FC = () => {
  return (
    <Section borderTop={false} className="min-h-[90vh] flex flex-col justify-center pt-32 pb-20 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-matrix-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-matrix-green/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block px-3 py-1 mb-8 border border-off-black/10 font-mono text-[10px] font-bold tracking-[0.2em] bg-gray-50/50 text-gray-400 uppercase"
        >
          Operation Architecture // Systems Strategy
        </motion.div>

        <h1 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-off-black tracking-tight">
          Scale your operations<br />
          without the <span className="relative inline-block">
            <span className="relative z-10 text-off-black">chaos.</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
              className="absolute bottom-1 left-0 w-full h-[0.3em] bg-matrix-green -z-0 origin-left"
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-sans text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mb-14 font-light"
        >
          Stop bleeding profit in your supply chain. I build <span className="font-semibold text-off-black">data-driven systems</span> that reclaim lost margins and
          <span className="text-off-black font-medium text-matrix-green underline decoration-matrix-green/30 decoration-4 underline-offset-4"> automate your growth.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <Button variant="primary" href="#contact" className="px-8 py-4 text-sm font-bold tracking-wide shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all">
            BOOK OPERATIONAL AUDIT
          </Button>
          <Button variant="outline" href="#blog" className="px-8 py-4 text-sm font-bold tracking-wide border-off-black text-off-black hover:bg-off-black hover:text-white transition-all">
            VIEW CASE STUDIES
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative technical specs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 right-6 md:right-12 lg:right-24 font-mono text-[10px] text-gray-400 text-right hidden md:block leading-loose"
      >
        <p className="tracking-widest">LOC: 6°12'31.7"S 106°50'44.2"E</p>
        <p className="tracking-widest">REGION: SE-ASIA // JKT</p>
        <p className="tracking-widest">SYSTEM_STATUS: <span className="text-matrix-green">OPTIMAL</span></p>
        <p className="tracking-widest flex items-center justify-end gap-2">
          PING: <span className="inline-block w-8 h-px bg-gray-300"></span> 24MS
        </p>
      </motion.div>
    </Section>
  );
};

export default Hero;