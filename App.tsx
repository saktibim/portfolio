import { Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Hero from './sections/Hero';
import Services from './sections/Services';
import DashboardShowcase from './sections/DashboardShowcase';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import ExcelLab from './sections/ExcelLab';
import Footer from './sections/Footer';
import ProjectDetail from './sections/ProjectDetail';
import AllProjects from './sections/AllProjects';
import Certificates from './sections/Certificates';
import { Menu, X } from 'lucide-react';
import { PROJECTS } from './constants';
import { openCalendly, trackEvent, useUpworkMode } from './contact';

const SITE_TITLE = 'Bima Sekti · Inventory & Supply Chain Specialist (ex-HPE)';

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
  useEffect(() => {
    document.title = SITE_TITLE;
  }, []);

  return (
    <>
      <Hero />
      <DashboardShowcase />
      <Services />
      <Experience />
      <ExcelLab />
      <Skills />
    </>
  );
};

const ProjectDetailWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    if (!project) return;
    document.title = `${project.title} · Bima Sekti`;
    trackEvent('case_study_viewed', { project_id: project.id });
  }, [project]);

  if (!project) return <div className="pt-40 px-6 text-center font-mono">Project not found</div>;

  return <ProjectDetail project={project} onBack={() => navigate('/')} />;
};

const NAV_LINKS = [
  { to: '/#services', label: 'Services' },
  { to: '/#experience', label: 'Experience' },
  { to: '/#lab', label: 'Portfolio' },
  { to: '/certificates', label: 'Certificates' },
];

function App() {
  const upwork = useUpworkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname, hash]);

  return (
    <div className="min-h-screen bg-white text-off-black selection:bg-matrix-green selection:text-black font-sans">
      <ScrollToTop />
      {/* Navigation / Header - Premium Glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="font-mono font-bold text-xl tracking-tighter hover:text-matrix-green transition-colors cursor-pointer group no-underline text-off-black"
          >
            opswithbima<span className="text-matrix-green group-hover:animate-pulse">.com</span>
          </Link>

          <div className="hidden md:flex items-center gap-10 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-off-black transition-colors relative group no-underline text-gray-500">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-matrix-green transition-all group-hover:w-full" />
              </Link>
            ))}
            {!upwork && (
              <button
                onClick={() => openCalendly('nav')}
                className="bg-off-black text-white px-4 py-2.5 hover:bg-matrix-green hover:text-off-black transition-colors uppercase tracking-[0.15em]"
              >
                Book a call
              </button>
            )}
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-off-black"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-6 flex flex-col gap-5 font-mono text-sm font-bold uppercase tracking-[0.15em]">
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="no-underline text-off-black">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/project/:id" element={<ProjectDetailWrapper />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </main>

      <Footer />

      {/* Mobile sticky CTA */}
      {!upwork && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur border-t border-gray-100">
          <button
            onClick={() => openCalendly('mobile_sticky')}
            className="w-full bg-matrix-green text-off-black font-mono text-xs font-bold uppercase tracking-[0.15em] py-4"
          >
            Book a free call
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
