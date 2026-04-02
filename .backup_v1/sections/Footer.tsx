import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-off-black text-[#F0F0F0] pt-32 pb-16 px-6 md:px-12 border-t-8 border-matrix-green relative overflow-hidden">
      {/* Decorative background grid line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 pointer-events-none hidden xl:block"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">

          <div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-4xl font-bold mb-10 leading-[0.9] tracking-tighter"
            >
              Let's optimize<br />
              your operations.
            </motion.h2>
            <p className="font-sans text-gray-400 mb-12 max-w-sm leading-relaxed font-light">
              Available for remote contracts and specialized consulting projects.
              Built for precision, scalability, and performance.
            </p>
            <div className="flex flex-wrap gap-5">
              <Button variant="primary" className="border-none shadow-[0_0_20px_rgba(0,255,65,0.1)]">
                <Mail className="w-4 h-4 mr-3 inline" />
                INIT_CONTACT
              </Button>
              <Button variant="outline" className="border-white/10 text-white hover:border-white hover:bg-white hover:text-black">
                <Download className="w-4 h-4 mr-3 inline" />
                GET_RESUME
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[10px] font-bold text-matrix-green mb-8 uppercase tracking-[0.25em]">
              GLOBAL_STATUS
            </h3>
            <ul className="space-y-6 font-mono text-xs text-gray-400">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-matrix-green rounded-full mr-4 animate-pulse"></span>
                MODE: REMOTE_SYNC
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[10px] font-bold text-matrix-green mb-8 uppercase tracking-[0.25em]">
              NETWORKS
            </h3>
            <ul className="space-y-6 font-mono text-xs">
              <li>
                <motion.a
                  href="https://www.linkedin.com/in/bimasekti/"
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-400 hover:text-white transition-colors group"
                >
                  <Linkedin className="w-4 h-4 mr-4 text-gray-600 group-hover:text-matrix-green transition-colors" />
                  LINKEDIN_PROFILE <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="mailto:opswithbima@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-400 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mr-4 text-gray-600 group-hover:text-matrix-green transition-colors" />
                  opswithbima@gmail.com
                </motion.a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center font-mono text-[9px] font-bold text-gray-600 uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} opswithbima // BYPASSING_COMPLEXITY</p>
          <p className="mt-4 md:mt-0 flex items-center gap-4">
            <span className="w-8 h-px bg-white/5"></span>
            BUILT_WITH_REACT_VITE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
