import { Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Experience from './sections/Experience';
import ExcelLab from './sections/ExcelLab';
import LeadMagnet from './sections/LeadMagnet';
import Footer from './sections/Footer';
import ProjectDetail from './sections/ProjectDetail';
import ServiceDetail from './sections/ServiceDetail';
import { Database, Sigma, TrendingUp, Crosshair } from 'lucide-react';
import { PROJECTS, SERVICES, CALENDLY_URL } from './constants';

declare global {
  interface Window {
    Calendly: any;
  }
}

// Scroll into view on route change + handle hashes
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

const Home = () => {
  const navigate = useNavigate();


  const handleServiceClick = (id: string) => {
    const service = SERVICES.find(s => s.id === id);
    if (service?.content) {
      navigate(`/service/${id}`);
    } else {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      } else {
        window.open(CALENDLY_URL, '_blank');
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services onServiceClick={handleServiceClick} />
      <Experience />
      <ExcelLab />
      <LeadMagnet />
    </motion.div>
  );
};

const ProjectDetailWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <div>Project not found</div>;

  return <ProjectDetail project={project} onBack={() => navigate('/')} />;
};

const ServiceDetailWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <div>Service not found</div>;

  return <ServiceDetail service={service} onBack={() => navigate('/')} />;
};

function App() {
  return (
    <div className="min-h-screen bg-white text-off-black selection:bg-matrix-green selection:text-black font-sans">
      <ScrollToTop />
      {/* Navigation / Header - Premium Glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="font-mono font-bold text-xl tracking-tighter hover:text-matrix-green transition-colors cursor-pointer group no-underline text-off-black"
            >
              opswithbima<span className="text-matrix-green group-hover:animate-pulse">.com</span>
            </Link>

            {/* Technical Badges - Refined */}
            <div className="hidden xl:flex items-center gap-4">
              <Link
                to="/#experience"
                className="flex items-center gap-2 px-3 py-1.5 border border-off-black/5 bg-off-black text-[#F0F0F0] font-mono text-[9px] font-bold tracking-[0.15em] hover:shadow-[0_8px_16px_rgba(0,255,65,0.15)] transition-all no-underline overflow-hidden relative group"
              >
                <motion.div className="absolute inset-0 bg-matrix-green opacity-0 group-hover:opacity-10 transition-opacity" />
                <Database className="w-3.5 h-3.5 text-matrix-green" />
                <span>SAP SD/MM</span>
              </Link>

              <Link
                to="/#services"
                className="flex items-center gap-2 px-3 py-1.5 border border-off-black/5 bg-off-black text-[#F0F0F0] font-mono text-[9px] font-bold tracking-[0.15em] hover:shadow-[0_8px_16px_rgba(0,255,65,0.15)] transition-all no-underline overflow-hidden relative group"
              >
                <motion.div className="absolute inset-0 bg-matrix-green opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative w-4 h-4 flex items-center justify-center">
                  <Crosshair className="absolute w-full h-full text-matrix-green opacity-60 stroke-[1.5]" />
                  <Sigma className="relative w-2.5 h-2.5 text-matrix-green stroke-[2.5]" />
                </div>
                <span>SIX SIGMA : GREENBELT</span>
              </Link>

              <Link
                to="/#lab"
                className="flex items-center gap-2 px-3 py-1.5 border border-off-black/5 bg-off-black text-[#F0F0F0] font-mono text-[9px] font-bold tracking-[0.15em] hover:shadow-[0_8px_16px_rgba(0,255,65,0.15)] transition-all no-underline overflow-hidden relative group"
              >
                <motion.div className="absolute inset-0 bg-matrix-green opacity-0 group-hover:opacity-10 transition-opacity" />
                <TrendingUp className="w-3.5 h-3.5 text-matrix-green" />
                <span>EXCEL / PBI : ARCHITECT</span>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex gap-10 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
            <Link to="/#services" className="hover:text-off-black transition-colors relative group no-underline text-gray-500">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-matrix-green transition-all group-hover:w-full" />
            </Link>
            <Link to="/#experience" className="hover:text-off-black transition-colors relative group no-underline text-gray-500">
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-matrix-green transition-all group-hover:w-full" />
            </Link>
            <Link to="/#lab" className="hover:text-off-black transition-colors relative group no-underline text-gray-500">
              The Lab
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-matrix-green transition-all group-hover:w-full" />
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetailWrapper />} />
          <Route path="/service/:id" element={<ServiceDetailWrapper />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
