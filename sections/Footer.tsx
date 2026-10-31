import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Linkedin, ExternalLink } from 'lucide-react';
import { CONTACT_EMAIL, LINKEDIN_URL } from '../constants';
import { openCalendly, useUpworkMode } from '../contact';

const Footer: React.FC = () => {
  const upwork = useUpworkMode();

  return (
    <footer id="contact" className="bg-off-black text-[#F0F0F0] pt-24 md:pt-32 pb-28 lg:pb-16 px-6 md:px-12 border-t-8 border-matrix-green relative overflow-hidden">
      {/* Decorative background grid line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 pointer-events-none hidden xl:block"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          <div className="lg:col-span-2">
            <h2 className="font-mono text-3xl md:text-4xl font-bold mb-8 leading-tight tracking-tighter">
              Let's find where your stock and purchasing are leaking money.
            </h2>
            {upwork ? (
              <p className="font-sans text-gray-400 max-w-md leading-relaxed font-light">
                Send me a message on Upwork with a short description of your situation. I reply within 24 hours (GMT+7).
              </p>
            ) : (
              <>
                <p className="font-sans text-gray-400 mb-10 max-w-md leading-relaxed font-light">
                  Book a free call and tell me what's going wrong. You'll leave with at least one concrete fix, whether we work together or not.
                  I'm also open to remote and on-site roles.
                </p>
                <div className="flex flex-wrap gap-5">
                  <Button onClick={() => openCalendly('footer')} variant="primary" className="border-none shadow-[0_0_20px_rgba(0,255,65,0.1)]">
                    Book a free call
                  </Button>
                  <Button href={`mailto:${CONTACT_EMAIL}`} variant="outline" className="border-white/10 text-white hover:border-white hover:bg-white hover:text-black">
                    Email me
                  </Button>
                </div>
              </>
            )}
          </div>

          <div>
            <h3 className="font-mono text-[10px] font-bold text-matrix-green mb-8 uppercase tracking-[0.25em]">
              Availability
            </h3>
            <ul className="space-y-4 font-mono text-xs text-gray-400">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-matrix-green rounded-full mr-4 animate-pulse"></span>
                Available now
              </li>
              <li>Remote worldwide · GMT+7</li>
              <li>Projects, part-time or full-time</li>
            </ul>
          </div>

          {!upwork && (
            <div>
              <h3 className="font-mono text-[10px] font-bold text-matrix-green mb-8 uppercase tracking-[0.25em]">
                Contact
              </h3>
              <ul className="space-y-6 font-mono text-xs">
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-400 hover:text-white transition-colors no-underline">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <motion.a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-400 hover:text-white transition-colors group"
                  >
                    <Linkedin className="w-4 h-4 mr-3 text-gray-600 group-hover:text-matrix-green transition-colors" />
                    LinkedIn <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="border-t border-white/5 pt-12 font-mono text-[9px] font-bold text-gray-600 uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} Bima Sekti · opswithbima</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
