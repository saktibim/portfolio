import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import Section from '../components/Section';
import { ArrowLeft, Download, FileSpreadsheet, CheckCircle2, Info } from 'lucide-react';
import Button from '../components/Button';
import { openCalendly, useUpworkMode } from '../contact';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const upwork = useUpworkMode();
  const renderTextWithFormatting = (text: string) => {
    return text.split('\n').map((line, lineIndex) => {
      if (!line.trim()) return null;
      
      // Handle headings
      if (line.startsWith('### ')) {
        return (
          <h3 key={lineIndex} className="font-mono text-xl font-bold text-off-black mt-12 mb-6 tracking-tight">
            {line.replace('### ', '')}
          </h3>
        );
      }
      
      // Handle list items
      if (line.startsWith('- ')) {
        const content = line.substring(2);
        const parts = content.split(/(\*\*.*?\*\*)/g);
        return (
          <div key={lineIndex} className="flex items-start mb-4 ml-4">
            <div className="w-1.5 h-1.5 bg-matrix-green rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
            <span className="font-sans text-gray-600 leading-relaxed font-light">
              {parts.map((part, i) => 
                part.startsWith('**') && part.endsWith('**') 
                  ? <strong key={i} className="font-medium text-off-black">{part.slice(2, -2)}</strong> 
                  : part
              )}
            </span>
          </div>
        );
      }

      // Handle normal paragraphs with bold parsing
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={lineIndex} className="font-sans text-gray-600 text-lg leading-relaxed font-light mb-6">
          {parts.map((part, i) => 
            part.startsWith('**') && part.endsWith('**') 
              ? <strong key={i} className="font-medium text-off-black">{part.slice(2, -2)}</strong> 
              : part
          )}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Detail Header - Slim Premium Glass */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-between items-center">
          <motion.button
            whileHover={{ x: -5 }}
            onClick={onBack}
            className="flex items-center text-[10px] font-mono font-bold uppercase tracking-[0.2em] hover:text-matrix-green transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-3 group-hover:text-matrix-green" />
            Back
          </motion.button>
          {!upwork && (
            <button
              onClick={() => openCalendly('project_nav')}
              className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] bg-matrix-green text-off-black px-4 py-2 hover:bg-off-black hover:text-white transition-colors"
            >
              Book a free call
            </button>
          )}
        </div>
      </nav>

      <div className="pt-32 pb-32">
        <Section borderTop={false} className="py-0">

          <div className="max-w-4xl mx-auto">
            {/* Project Hero Title Group */}
            <div className="mb-16">
              <div className="flex items-center gap-6 mb-10">
                <div className="text-matrix-green p-3 bg-gray-50 rounded-lg">
                  {React.cloneElement(project.icon as React.ReactElement<any>, { size: 40, strokeWidth: 1.5 })}
                </div>
                <div className="h-px bg-gray-100 flex-grow"></div>
              </div>

              <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-off-black leading-normal md:leading-snug tracking-tight">
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[9px] font-mono font-bold tracking-[0.15em] uppercase border border-gray-100 text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.isSample && (
                <div className="mt-10 flex items-start gap-4 border border-gray-200 bg-gray-50 p-5">
                  <Info className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    <span className="font-semibold text-off-black">Practice project with sample data.</span>{' '}
                    The company and numbers below are illustrative, built to show the method and the working file.
                    My real, measured results (HPE, DHL, Yusen) are in my track record on the homepage.
                  </p>
                </div>
              )}
            </div>

            {/* Content Architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

              <div className={`${project.excelUrl ? 'lg:col-span-8' : 'lg:col-span-12'} space-y-20`}>
                {project.content.article ? (
                  <div className="article-content">
                    {project.content.article.blocks.map((block: any, idx: number) => {
                      if (block.type === 'text') {
                        return (
                          <div key={idx} className="mb-8">
                            {renderTextWithFormatting(block.content)}
                          </div>
                        );
                      }
                      if (block.type === 'image') {
                        return (
                          <div key={idx} className="my-12">
                            <div className="border border-gray-100 bg-gray-50/50 p-2 rounded-lg">
                              <img src={block.url} alt={block.alt} className="w-full h-auto rounded shadow-sm opacity-90 hover:opacity-100 transition-opacity" />
                            </div>
                            {block.alt && <p className="text-center text-[10px] font-mono text-gray-400 mt-4 uppercase tracking-widest">{block.alt}</p>}
                          </div>
                        );
                      }
                      if (block.type === 'video') {
                        return (
                          <figure key={idx} className="my-12">
                            <video
                              src={block.url}
                              controls
                              playsInline
                              preload="metadata"
                              className="w-full h-auto rounded-lg shadow-xl bg-off-black"
                            />
                            {block.caption && (
                              <figcaption className="text-center text-[10px] font-mono text-gray-400 mt-4 uppercase tracking-widest">
                                {block.caption}
                              </figcaption>
                            )}
                          </figure>
                        );
                      }
                      if (block.type === 'youtube') {
                        return (
                          <div key={idx} className="my-12 aspect-video w-full">
                            <iframe 
                              className="w-full h-full rounded-lg shadow-xl" 
                              src={block.url} 
                              title="YouTube video player" 
                              frameBorder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen
                            ></iframe>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                ) : (
                  <>
                    {/* Mission / Challenge */}
                    <div className="group">
                      <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-matrix-green mb-8">
                        The problem
                      </h3>
                      <p className="font-sans text-lg text-gray-500 leading-relaxed font-light italic border-l-2 border-gray-50 pl-8">
                        "{project.content.problem}"
                      </p>
                    </div>

                    {/* Technical Overview */}
                    <div>
                      <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-matrix-green mb-8">
                        What I built
                      </h3>
                      <p className="font-sans text-lg text-gray-600 leading-relaxed font-light">
                        {project.content.solution}
                      </p>
                    </div>

                    {/* Impact Metrics */}
                    <div className="bg-gray-50/50 border border-gray-100 p-10 md:p-14 relative overflow-hidden group">
                      <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-off-black mb-10 flex items-center gap-4">
                        <CheckCircle2 className="w-4 h-4 text-matrix-green" />
                        {project.isSample ? 'What it gives the business' : 'Results'}
                      </h3>
                      <ul className="space-y-6">
                        {project.content.impact?.map((item, idx) => (
                          <li key={idx} className="flex items-start group/li">
                            <div className="w-1.5 h-1.5 bg-matrix-green rounded-full mr-6 mt-2.5 transition-transform group-hover/li:scale-150"></div>
                            <p className="font-sans text-gray-600 text-base leading-relaxed font-light">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {/* What this means for you */}
                <div className="border-2 border-off-black p-8 md:p-10">
                  <p className="font-mono text-lg font-bold text-off-black mb-3">Have the same problem in your business?</p>
                  <p className="font-sans text-gray-600 font-light leading-relaxed mb-6">
                    I can build this on your real data, usually in 1–3 weeks, and hand it over so your team keeps using it.
                  </p>
                  {upwork ? (
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-off-black">
                      Message me on Upwork to discuss your case.
                    </p>
                  ) : (
                    <Button variant="primary" onClick={() => openCalendly('project_detail')}>
                      Book a free call
                    </Button>
                  )}
                </div>

              </div>

              {/* Deployment Hub Sidebar */}
              {project.excelUrl && (
              <div className="lg:col-span-4">
                <div className="sticky top-32 bg-off-black text-[#F0F0F0] p-10 border-l-8 border-matrix-green shadow-2xl overflow-hidden relative group">
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-matrix-green/5 blur-3xl rounded-full"></div>

                  <FileSpreadsheet className="w-12 h-12 text-matrix-green mb-8 group-hover:scale-110 transition-transform duration-500" />
                  <h4 className="font-mono text-2xl font-bold mb-4 tracking-tighter">
                    {project.hubConfig ? project.hubConfig.title : "Open the file"}
                  </h4>
                  <p className="font-sans text-xs text-gray-400 mb-10 leading-relaxed font-light tracking-wide">
                    {project.hubConfig ? project.hubConfig.description : "See the working Excel dashboard and formulas behind this project (sample data)."}
                  </p>

                  <motion.a
                    href={project.excelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-matrix-green text-off-black font-mono text-[10px] font-bold uppercase py-4 tracking-[0.2em] hover:bg-white transition-colors flex items-center justify-center gap-3 no-underline"
                  >
                    <Download className="w-3.5 h-3.5" />
                    {project.hubConfig ? project.hubConfig.buttonText : "Open dashboard"}
                  </motion.a>

                  <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-2">
                    <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                      FORMAT: {project.hubConfig ? project.hubConfig.format : ".XLSX // .PBIX"}
                    </p>
                    <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                      DATA: {project.hubConfig ? project.hubConfig.metadata : "SAMPLE DATASET"}
                    </p>
                  </div>
                </div>
              </div>
              )}

            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default ProjectDetail;