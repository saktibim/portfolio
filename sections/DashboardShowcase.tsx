import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Animated mock dashboards that play like a short product video.
// All numbers are illustrative sample data, not client results.

const RED = '#FF4D4D';
const AMBER = '#FFB020';
const GREEN = '#00FF41';

const CountUp: React.FC<{ to: number; decimals?: number; prefix?: string; suffix?: string; delay?: number }> = ({
  to, decimals = 0, prefix = '', suffix = '', delay = 0,
}) => {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);
  useEffect(() => {
    if (reduce) return;
    const controls = animate(0, to, { duration: 1.6, delay, ease: 'easeOut', onUpdate: setValue });
    return () => controls.stop();
  }, [to, delay, reduce]);
  const formatted = value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return <>{prefix}{formatted}{suffix}</>;
};

const Kpi: React.FC<{ label: string; delay: number; children: React.ReactNode; accent?: string }> = ({ label, delay, children, accent }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white/[0.04] border border-white/10 p-3 md:p-4"
  >
    <p className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-gray-500 mb-1.5">{label}</p>
    <p className="font-mono text-lg md:text-2xl font-bold" style={{ color: accent || '#F0F0F0' }}>{children}</p>
  </motion.div>
);

const Window: React.FC<{ file: string; children: React.ReactNode }> = ({ file, children }) => (
  <div className="bg-[#0B0B0B] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35),0_0_60px_rgba(0,255,65,0.06)]">
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="ml-3 font-mono text-[10px] text-gray-500">{file}</span>
      </div>
      <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-gray-500 border border-white/10 px-2 py-0.5">
        Illustrative · sample data
      </span>
    </div>
    <div className="p-4 md:p-6">{children}</div>
  </div>
);

/* ---------- Slide 1: Inventory health ---------- */
const SKU_RISK = [
  { sku: 'SKU-A104', risk: 42, status: 'REORDER NOW' },
  { sku: 'SKU-B221', risk: 36, status: 'REORDER NOW' },
  { sku: 'SKU-A087', risk: 24, status: 'WATCH' },
  { sku: 'SKU-C310', risk: 18, status: 'WATCH' },
  { sku: 'SKU-B019', risk: 7, status: 'HEALTHY' },
  { sku: 'SKU-C155', risk: 3, status: 'HEALTHY' },
];
const riskColor = (risk: number) => (risk >= 30 ? RED : risk >= 15 ? AMBER : GREEN);

const InventoryDashboard: React.FC = () => (
  <Window file="inventory_health.pbix">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-5">
      <Kpi label="Stock value" delay={0.1}><CountUp to={248600} prefix="$" /></Kpi>
      <Kpi label="SKUs at risk" delay={0.2} accent={RED}><CountUp to={6} delay={0.2} /></Kpi>
      <Kpi label="In-stock rate" delay={0.3} accent={GREEN}><CountUp to={97.8} decimals={1} suffix="%" delay={0.3} /></Kpi>
      <Kpi label="Days of cover" delay={0.4}><CountUp to={34} delay={0.4} /></Kpi>
    </div>
    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-gray-500 mb-3">Stockout probability · next 30 days</p>
    <div className="space-y-2.5">
      {SKU_RISK.map((row, i) => (
        <div key={row.sku} className="grid grid-cols-[64px_1fr_44px] md:grid-cols-[80px_1fr_48px_104px] items-center gap-3">
          <span className="font-mono text-[10px] md:text-[11px] text-gray-400">{row.sku}</span>
          <div className="h-2.5 bg-white/5 overflow-hidden">
            <motion.div
              className="h-full"
              style={{ backgroundColor: riskColor(row.risk) }}
              initial={{ width: 0 }}
              animate={{ width: `${(row.risk / 50) * 100}%` }}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.9, ease: 'easeOut' }}
            />
          </div>
          <span className="font-mono text-[10px] md:text-[11px] text-gray-300 text-right">{row.risk}%</span>
          <motion.span
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 + i * 0.12 }}
            className="hidden md:inline-block font-mono text-[9px] font-bold tracking-[0.1em] px-2 py-0.5 text-center"
            style={{ color: riskColor(row.risk), border: `1px solid ${riskColor(row.risk)}55` }}
          >
            {row.status}
          </motion.span>
        </div>
      ))}
    </div>
  </Window>
);

/* ---------- Slide 2: Demand planning ---------- */
const ACTUAL = [820, 860, 790, 910, 980, 1040, 990, 1080, 1150, 1120];
const FORECAST = [800, 850, 830, 890, 960, 1010, 1020, 1060, 1130, 1150, 1210, 1260];
const toPath = (values: number[], total: number) => {
  const min = 700, max = 1300, w = 300, h = 120;
  return values
    .map((v, i) => `${i === 0 ? 'M' : 'L'}${((i / (total - 1)) * w).toFixed(1)},${(h - ((v - min) / (max - min)) * h).toFixed(1)}`)
    .join(' ');
};

const DemandDashboard: React.FC = () => (
  <Window file="demand_plan.xlsx">
    <div className="grid grid-cols-3 gap-2 md:gap-3 mb-5">
      <Kpi label="Forecast accuracy" delay={0.1} accent={GREEN}><CountUp to={91.4} decimals={1} suffix="%" /></Kpi>
      <Kpi label="Forecast bias" delay={0.2}><CountUp to={2.1} decimals={1} prefix="−" suffix="%" delay={0.2} /></Kpi>
      <Kpi label="Next 4 wks (units)" delay={0.3}><CountUp to={12480} delay={0.3} /></Kpi>
    </div>
    <div className="flex items-center gap-5 mb-3 font-mono text-[9px] uppercase tracking-[0.15em] text-gray-500">
      <span className="flex items-center gap-2"><span className="w-4 h-0.5 bg-gray-300" />Actual</span>
      <span className="flex items-center gap-2"><span className="w-4 h-0.5" style={{ backgroundColor: GREEN }} />Forecast</span>
    </div>
    <svg viewBox="0 0 300 130" className="w-full h-auto" role="img" aria-label="Actual vs forecast demand, sample data">
      {[0, 30, 60, 90, 120].map((y) => (
        <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      ))}
      <motion.path
        d={toPath(FORECAST, FORECAST.length)}
        fill="none" stroke={GREEN} strokeWidth="1.6" strokeDasharray="0" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ delay: 0.5, duration: 2, ease: 'easeInOut' }}
      />
      <motion.path
        d={toPath(ACTUAL, FORECAST.length)}
        fill="none" stroke="#D4D4D4" strokeWidth="1.6" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ delay: 0.8, duration: 1.8, ease: 'easeInOut' }}
      />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}>
        <line x1={(9 / 11) * 300} x2={(9 / 11) * 300} y1="0" y2="120" stroke="rgba(255,255,255,0.25)" strokeDasharray="2 2" strokeWidth="0.6" />
        <text x={(9 / 11) * 300 + 4} y="10" fill="#9CA3AF" fontSize="6" fontFamily="JetBrains Mono, monospace">TODAY</text>
      </motion.g>
    </svg>
  </Window>
);

/* ---------- Slide 3: Supplier scorecard ---------- */
const SUPPLIERS = [
  { name: 'Supplier A', otif: 94, delay: 0.3 },
  { name: 'Supplier B', otif: 89, delay: 0.6 },
  { name: 'Supplier C', otif: 78, delay: 1.2 },
  { name: 'Supplier D', otif: 71, delay: 1.9 },
  { name: 'Supplier E', otif: 63, delay: 2.9 },
];
const otifColor = (v: number) => (v >= 80 ? GREEN : v >= 65 ? AMBER : RED);
const otifLabel = (v: number) => (v >= 80 ? 'PREFERRED' : v >= 65 ? 'WATCH' : 'CRITICAL');

const SupplierDashboard: React.FC = () => (
  <Window file="supplier_scorecard.xlsx">
    <div className="grid grid-cols-3 gap-2 md:gap-3 mb-5">
      <Kpi label="Avg OTIF" delay={0.1}><CountUp to={79} suffix="%" /></Kpi>
      <Kpi label="Avg days late" delay={0.2} accent={AMBER}><CountUp to={1.4} decimals={1} delay={0.2} /></Kpi>
      <Kpi label="Critical suppliers" delay={0.3} accent={RED}><CountUp to={1} delay={0.3} /></Kpi>
    </div>
    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-gray-500 mb-3">On-time in-full (OTIF) by supplier</p>
    <div className="space-y-3">
      {SUPPLIERS.map((s, i) => (
        <div key={s.name} className="grid grid-cols-[76px_1fr_40px] md:grid-cols-[90px_1fr_44px_92px] items-center gap-3">
          <span className="font-mono text-[10px] md:text-[11px] text-gray-400">{s.name}</span>
          <div className="h-3 bg-white/5 overflow-hidden relative">
            <motion.div
              className="h-full"
              style={{ backgroundColor: otifColor(s.otif) }}
              initial={{ width: 0 }}
              animate={{ width: `${s.otif}%` }}
              transition={{ delay: 0.5 + i * 0.15, duration: 1, ease: 'easeOut' }}
            />
            <div className="absolute top-0 bottom-0 w-px bg-white/40" style={{ left: '80%' }} />
          </div>
          <span className="font-mono text-[10px] md:text-[11px] text-gray-300 text-right">{s.otif}%</span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6 + i * 0.15 }}
            className="hidden md:inline-block font-mono text-[9px] font-bold tracking-[0.1em] px-2 py-0.5 text-center"
            style={{ color: otifColor(s.otif), border: `1px solid ${otifColor(s.otif)}55` }}
          >
            {otifLabel(s.otif)}
          </motion.span>
        </div>
      ))}
    </div>
    <p className="font-mono text-[9px] text-gray-500 mt-4">Line = 80% target</p>
  </Window>
);

/* ---------- Showcase slider ---------- */
const SLIDES = [
  {
    id: 'inventory',
    eyebrow: 'Inventory Health Check',
    title: 'See stockouts before they happen.',
    body: 'Every SKU scored by stockout risk, with clear reorder signals your team can act on this week.',
    Dashboard: InventoryDashboard,
  },
  {
    id: 'demand',
    eyebrow: 'Demand Planning',
    title: 'Plan from data, not gut feeling.',
    body: 'Actual vs. forecast in one view, with accuracy and bias tracked so the plan gets better every month.',
    Dashboard: DemandDashboard,
  },
  {
    id: 'supplier',
    eyebrow: 'Supplier Scorecard',
    title: 'Know which suppliers you can trust.',
    body: 'On-time, in-full performance ranked automatically, so you negotiate with facts and move volume to reliable partners.',
    Dashboard: SupplierDashboard,
  },
];
const SLIDE_SECONDS = 9;

const DashboardShowcase: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (step: number) => setIndex((i) => (i + step + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    if (!inView || paused) return;
    const timer = setTimeout(() => go(1), SLIDE_SECONDS * 1000);
    return () => clearTimeout(timer);
  }, [index, inView, paused]);

  const slide = SLIDES[index];
  const Dashboard = slide.Dashboard;

  return (
    <section id="showcase" className="bg-off-black text-[#F0F0F0] overflow-hidden">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-matrix-green mb-10">
          What I build
        </p>

        <div className="min-h-[640px] md:min-h-[460px]">
          {inView && (
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) go(1);
                  else if (info.offset.x > 60) go(-1);
                }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center cursor-grab active:cursor-grabbing"
              >
                <div className="lg:col-span-4 select-none">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4"
                  >
                    0{index + 1} · {slide.eyebrow}
                  </motion.p>
                  <motion.h3
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
                    className="font-mono text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-5"
                  >
                    {slide.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                    className="font-sans text-gray-400 font-light leading-relaxed"
                  >
                    {slide.body}
                  </motion.p>
                </div>
                <div className="lg:col-span-8">
                  <Dashboard />
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center gap-3">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                aria-label={`Show ${s.eyebrow}`}
                className="relative h-1 w-12 md:w-16 bg-white/15 overflow-hidden"
              >
                {i === index && inView && (
                  <motion.span
                    key={`${s.id}-${paused}`}
                    className="absolute inset-y-0 left-0 bg-matrix-green"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: paused ? 0 : SLIDE_SECONDS, ease: 'linear' }}
                  />
                )}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => go(-1)} aria-label="Previous dashboard" className="p-3 border border-white/15 hover:border-matrix-green hover:text-matrix-green transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => go(1)} aria-label="Next dashboard" className="p-3 border border-white/15 hover:border-matrix-green hover:text-matrix-green transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
