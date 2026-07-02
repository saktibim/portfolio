import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { ArrowLeft, ExternalLink, Award, ShieldCheck } from 'lucide-react';

const Certificates: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-32 pb-32 min-h-screen bg-white">
      <Section id="certificates-catalog" borderTop={false}>
        {/* Page Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <Link
                to="/"
                className="flex items-center text-[10px] font-mono font-bold uppercase tracking-[0.2em] hover:text-matrix-green transition-colors group no-underline text-gray-400"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-3 group-hover:text-matrix-green" />
                RETURN_TO_HOME
              </Link>
            </div>
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 mb-6">
              00 // CREDENTIAL_REGISTRY
            </h2>
            <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-tight text-off-black">
              Verified Certifications
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-sans text-gray-500 max-w-sm text-right font-light leading-relaxed hidden md:block"
          >
            An official register of professional credentials, validating supply chain strategy, logistics planning, and lean operations competency.
          </motion.p>
        </div>

        {/* Info Banner for Recruiters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 p-6 bg-gray-50 border-l-4 border-matrix-green flex items-start gap-4"
        >
          <ShieldCheck className="w-6 h-6 text-matrix-green flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-mono text-xs font-bold text-off-black uppercase tracking-wider mb-1">RECRUITER NOTE</h3>
            <p className="font-sans text-sm text-gray-600 font-light">
              All credentials are fully verified. You can click on "Verify / View Certificate" to view the digital copy or official registry link. You are welcome to copy these links directly into your systems.
            </p>
          </div>
        </motion.div>

        {/* Certificate Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="flex flex-col border border-gray-100 bg-gray-50/20 p-10 transition-all duration-500 hover:border-matrix-green hover:bg-white hover:shadow-[0_20px_40px_rgba(0,255,65,0.08)] h-full relative"
            >
              <div className="font-mono text-[9px] font-bold text-gray-300 absolute top-8 right-10 tracking-[0.2em] uppercase">
                COMPLETED::{cert.date}
              </div>

              {/* Award Icon */}
              <div className="mb-8 text-matrix-green">
                <Award className="w-10 h-10 stroke-[1.25]" />
              </div>

              {/* Title & Issuer */}
              <h3 className="font-mono text-lg font-bold text-off-black mb-2 leading-tight">
                {cert.title}
              </h3>
              <p className="font-mono text-xs text-gray-500 mb-6 uppercase tracking-wider">
                ISSUED BY: {cert.issuer}
              </p>

              {/* Credential ID */}
              {cert.credentialId && (
                <div className="mb-6 p-3 bg-gray-50 font-mono text-[10px] text-gray-500 border border-gray-100/50">
                  <span className="text-gray-400">CREDENTIAL ID:</span> {cert.credentialId}
                </div>
              )}

              {/* Skills Validated */}
              {cert.skills && (
                <div className="mb-8 flex-grow">
                  <h4 className="font-mono text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3">Validated Skills</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[8px] font-mono font-bold tracking-wider uppercase border border-gray-100 text-gray-500 bg-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Button */}
              {cert.verificationUrl && (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between no-underline text-off-black hover:text-matrix-green group transition-colors"
                >
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-matrix-green">
                    VERIFY_CREDENTIAL
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-matrix-green transition-colors" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </div>
  );
};

export default Certificates;
