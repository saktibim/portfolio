import React from 'react';
import Button from '../components/Button';
import Section from '../components/Section';
import { CV_URL, HEADLINE_STATS, PHOTO_URL } from '../constants';
import { openCalendly, trackEvent, useUpworkMode } from '../contact';

const Hero: React.FC = () => {
  const upwork = useUpworkMode();

  return (
    <Section borderTop={false} className="pt-32 md:pt-40 pb-16 md:pb-24 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-matrix-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-matrix-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl relative z-10 animate-fade-in">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 border border-matrix-green/40 bg-matrix-green/5 font-mono text-[10px] font-bold tracking-[0.15em] text-off-black uppercase">
            <span className="w-1.5 h-1.5 bg-matrix-green rounded-full animate-pulse" />
            Available now · Remote worldwide
          </span>
          <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase">
            Jakarta · GMT+7
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {PHOTO_URL && (
            // The photo file has its own gold ring and white margin; zoom slightly to crop the margin
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={PHOTO_URL}
                alt="Bima Sekti"
                width={160}
                height={160}
                className="w-full h-full object-cover scale-[1.14]"
              />
            </div>
          )}
          <div>
            <h1 className="font-mono text-3xl md:text-5xl font-bold leading-tight mb-6 text-off-black tracking-tight">
              I help growing businesses stop stockouts, fix inventory data and cut{' '}
              <span className="relative inline-block">
                <span className="relative z-10">procurement waste.</span>
                <span className="absolute bottom-1 left-0 w-full h-[0.3em] bg-matrix-green -z-0" />
              </span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mb-10 font-light">
              Hi, I'm Bima, a supply chain and inventory specialist with 9 years of experience, including{' '}
              <span className="font-semibold text-off-black">4.5 years running materials & order management at Hewlett Packard Enterprise</span>.
              I bring enterprise discipline (<span className="font-semibold text-off-black">SAP MM/SD, Lean Six Sigma Green Belt, Power BI</span>)
              to teams that still run on spreadsheets.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          {upwork ? (
            <Button variant="primary" href="#lab" className="px-8 py-4 text-sm font-bold tracking-wide shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              See my work
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => openCalendly('hero')}
              className="px-8 py-4 text-sm font-bold tracking-wide shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            >
              Book a free call
            </Button>
          )}
          <Button variant="outline" href="#services" className="px-8 py-4 text-sm font-bold tracking-wide border-off-black text-off-black">
            How I can help
          </Button>
          {CV_URL && (
            <Button
              variant="text"
              href={CV_URL}
              onClick={() => trackEvent('cv_downloaded')}
              className="py-4 text-sm font-bold"
            >
              Download CV
            </Button>
          )}
        </div>

        {/* Proof: real results from employment */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 mb-12">
          {HEADLINE_STATS.map((stat) => (
            <div key={stat.label} className="bg-white p-5 md:p-6">
              <p className="font-mono text-2xl md:text-3xl font-bold text-off-black mb-2">{stat.value}</p>
              <p className="font-sans text-sm text-gray-600 leading-snug mb-2">{stat.label}</p>
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">{stat.source}</p>
            </div>
          ))}
        </div>

        {/* Social Proof Logos */}
        <div className="pt-8 border-t border-gray-100">
          <p className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-[0.3em] mb-6">
            Experience at
          </p>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
            <span className="font-sans font-bold text-lg tracking-tight text-[#01A982]">HEWLETT PACKARD ENTERPRISE</span>
            <div className="flex items-baseline opacity-70">
              <span className="font-sans italic font-black text-2xl tracking-tighter text-[#D40511]">DHL</span>
              <span className="font-sans italic font-bold text-[9px] ml-1 text-gray-400">SUPPLY CHAIN</span>
            </div>
            <span className="font-sans font-extrabold text-xl tracking-tight text-[#1e3a8a] opacity-70">YUSEN LOGISTICS</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
