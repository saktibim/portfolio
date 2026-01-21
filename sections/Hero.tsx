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

        <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-10 text-off-black tracking-tighter">
          I solve operational<br />
          complexity with <span className="relative inline-block">
            <span className="relative z-10 text-off-black">data.</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
              className="absolute bottom-2 left-0 w-full h-[0.3em] bg-matrix-green -z-0 origin-left"
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-sans text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mb-14 font-light"
        >
          I'm <span className="font-semibold text-off-black">Bima</span>, an Operations Manager and System Architect.
          I specialize in building <span className="text-off-black font-medium">high-performance</span> supply chains and
          <span className="text-off-black font-medium text-matrix-green underline decoration-matrix-green/30 decoration-4 underline-offset-4"> analytics engines.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <Button variant="primary" href="#blog" className="px-8 py-4 text-sm font-bold tracking-wide">
            EXPLORE THE LAB
          </Button>
          <Button variant="outline" href="mailto:opswithbima@gmail.com" className="px-8 py-4 text-sm font-bold tracking-wide border-off-black text-off-black hover:bg-off-black hover:text-white transition-all">
            WORK WITH ME
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