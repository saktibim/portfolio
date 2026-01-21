import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  borderTop?: boolean;
  borderBottom?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id = '',
  borderTop = true,
  borderBottom = false
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`relative w-full py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${borderTop ? 'border-t border-gray-100' : ''} ${borderBottom ? 'border-b border-gray-100' : ''} ${className}`}
    >
      {/* Decorative vertical guide */}
      <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-px bg-gray-50 hidden xl:block pointer-events-none"></div>

      <div className="relative z-10 w-full">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
