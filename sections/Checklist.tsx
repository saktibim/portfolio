import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { CHECKLIST_META } from '../checklist-meta';
import { openCalendly, trackEvent, useUpworkMode } from '../contact';

const INSTAGRAM_URL = 'https://www.instagram.com/opswithbima/';

// The page teases the checklist; the how-to (fixes, formulas, score guide) stays in the PDF.
const LEAKS = [
  {
    title: 'Slow products hold your cash',
    text: "Products that haven't sold in months sit on the shelf, and your money sits there with them.",
  },
  {
    title: 'Fast products run out',
    text: 'Best-sellers go out of stock when reordering is a guess instead of a number.',
  },
  {
    title: 'Costs hide in the price',
    text: 'Freight, duties and fees are easy to forget, so the margin you think you have is not the margin you get.',
  },
];

const INSIDE = [
  { title: 'Dead stock', text: 'The 90-day test for products tying up cash.' },
  { title: 'Reorder amounts', text: 'Why the same order for everything costs you.' },
  { title: 'Safety stock', text: 'A simple formula for supplier delays.' },
  { title: 'Reorder points', text: 'Order at a set number, not when it looks low.' },
  { title: 'ABC check', text: 'Which products deserve a look every week.' },
  { title: 'Real lead time', text: 'Plan with what suppliers actually deliver.' },
  { title: 'Peak season', text: 'When the big order has to go out.' },
  { title: 'Landed cost', text: 'Price from what a product really costs you.' },
];

const setMeta = (selector: string, attr: string, value: string) => {
  const el = document.querySelector<HTMLElement>(selector);
  const previous = el?.getAttribute(attr) ?? null;
  el?.setAttribute(attr, value);
  return () => {
    if (el && previous !== null) el.setAttribute(attr, previous);
  };
};

const Checklist: React.FC = () => {
  const upwork = useUpworkMode();

  // Page-specific title and description for visitors who arrive via client-side navigation.
  // The static tags for link previews are written at build time (see vite.config.ts).
  useEffect(() => {
    const previousTitle = document.title;
    document.title = CHECKLIST_META.title;
    const restoreDescription = setMeta('meta[name="description"]', 'content', CHECKLIST_META.description);
    return () => {
      document.title = previousTitle;
      restoreDescription();
    };
  }, []);

  const trackDownload = (source: string) => {
    const utmSource = new URLSearchParams(window.location.search).get('utm_source') ?? '';
    trackEvent('checklist_download', { source, utm_source: utmSource });
  };

  return (
    <div className="pt-24 md:pt-28 bg-white">
      <Section id="checklist-hero" borderTop={false} className="!py-12 md:!py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-6 px-3 py-1 border border-matrix-green bg-matrix-green/10 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-off-black">
              Free checklist
            </span>
            <h1 className="font-mono text-3xl md:text-5xl font-bold leading-tight mb-6 text-off-black tracking-tight">
              The Inventory{' '}
              <span className="bg-[linear-gradient(transparent_62%,#00FF41_62%_90%,transparent_90%)] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                Money Leak
              </span>{' '}
              Checklist
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mb-10 font-light">
              8 quick checks to find where your stock is quietly eating your cash. Takes 10 minutes.
            </p>

            <Button
              href={CHECKLIST_META.pdfPath}
              onClick={() => trackDownload('hero_button')}
              variant="primary"
              className="shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            >
              <span className="inline-flex items-center gap-3">
                <Download className="w-4 h-4" aria-hidden="true" />
                Download the free checklist (PDF)
              </span>
            </Button>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mt-5">
              Free · One page · No sign-up
            </p>
            {/* Email sign-up can go here later */}
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a
              href={CHECKLIST_META.pdfPath}
              onClick={() => trackDownload('preview_image')}
              className="block max-w-xs mx-auto lg:max-w-sm border border-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white"
            >
              <img
                src="/checklist-preview.png"
                alt="Preview of the Inventory Money Leak Checklist, a one-page PDF with 8 checks"
                width={CHECKLIST_META.imageWidth}
                height={CHECKLIST_META.imageHeight}
                className="block w-full h-auto"
              />
            </a>
          </motion.div>
        </div>
      </Section>

      <Section id="checklist-why" className="bg-[#FAFAFA] !py-16 md:!py-24">
        <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] mb-6 text-gray-400">
          Why it matters
        </h2>
        <h3 className="font-mono text-2xl md:text-3xl font-bold tracking-tight mb-4">
          Stock leaks cash in three quiet ways
        </h3>
        <p className="font-sans text-gray-500 font-light mb-10 max-w-2xl">
          For online sellers and small businesses that order stock from suppliers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {LEAKS.map((leak, i) => (
            <div key={leak.title} className="p-6 bg-white border border-gray-200">
              <p className="font-mono text-xs font-bold text-[#047857] mb-3">0{i + 1}</p>
              <p className="font-sans font-bold text-[15px] text-off-black leading-snug mb-2">{leak.title}</p>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">{leak.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="checklist-inside" className="!py-16 md:!py-24">
        <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] mb-6 text-gray-400">
          Inside the PDF
        </h2>
        <h3 className="font-mono text-2xl md:text-3xl font-bold tracking-tight mb-4">
          8 checks, each with a quick fix
        </h3>
        <p className="font-sans text-gray-500 font-light mb-10 max-w-2xl">
          Tick what you already do. For the rest, the PDF gives you the fix, the formula and a worked example,
          plus a score that tells you where to start.
        </p>

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 list-none p-0 mb-12">
          {INSIDE.map((item, i) => (
            <li key={item.title} className="flex gap-4 pb-6 border-b border-gray-200">
              <span className="font-mono text-xs font-bold text-[#047857] mt-1">0{i + 1}</span>
              <div>
                <p className="font-sans font-bold text-[15px] text-off-black leading-snug">{item.title}</p>
                <p className="font-sans text-sm text-gray-600 leading-relaxed mt-1">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="p-6 md:p-8 bg-[#FAFAFA] border border-gray-200 max-w-2xl mb-12">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
            A taste of one check
          </p>
          <p className="font-sans font-bold text-[16px] text-off-black leading-snug mb-3">
            My top products have safety stock for supplier delays.
          </p>
          <p className="font-sans text-sm text-gray-600 leading-relaxed">
            <span className="font-mono text-[12px] font-bold text-off-black bg-gray-100 px-1.5 py-0.5 mr-2">
              daily sales × delay days
            </span>
            e.g. 20 × 5 = 100 units. A spare tire, not a second car.
          </p>
        </div>

        <Button
          href={CHECKLIST_META.pdfPath}
          onClick={() => trackDownload('inside_button')}
          variant="primary"
          className="shadow-[4px_4px_0px_rgba(0,0,0,1)]"
        >
          <span className="inline-flex items-center gap-3">
            <Download className="w-4 h-4" aria-hidden="true" />
            Get all 8 checks (PDF)
          </span>
        </Button>
      </Section>

      {!upwork && (
        <section className="bg-off-black text-[#F0F0F0] px-6 md:px-12 py-16 md:py-20 border-t-8 border-matrix-green">
          <div className="max-w-7xl mx-auto lg:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-mono text-2xl md:text-3xl font-bold tracking-tight mb-3">
                Ticked fewer than 6?
              </h2>
              <p className="font-sans text-gray-400 font-light leading-relaxed">
                Book a free 15-min stock check. We'll find your biggest leak together.
              </p>
            </div>
            <Button
              onClick={() => openCalendly('checklist')}
              variant="primary"
              className="border-none shadow-[0_0_20px_rgba(0,255,65,0.1)] self-start md:self-auto"
            >
              Book a free call
            </Button>
          </div>
        </section>
      )}

      {!upwork && (
        <p className="text-center font-sans text-sm text-gray-500 py-10 px-6">
          Follow{' '}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-off-black hover:text-matrix-green transition-colors"
          >
            @opswithbima
          </a>{' '}
          on Instagram for weekly inventory fixes.
        </p>
      )}
    </div>
  );
};

export default Checklist;
