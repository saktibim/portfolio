import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  href,
  ...props
}) => {
  const baseStyle = "font-mono text-sm uppercase tracking-widest px-8 py-4 transition-all duration-300 border border-off-black relative overflow-hidden inline-block text-center cursor-pointer";

  const variants = {
    primary: "bg-matrix-green text-off-black border-matrix-green font-bold hover:shadow-[0_0_25px_rgba(0,255,65,0.3)]",
    outline: "bg-transparent text-off-black border-off-black/10 hover:border-off-black hover:bg-off-black hover:text-white",
    text: "border-transparent px-0 hover:text-matrix-green underline decoration-matrix-green underline-offset-8 bg-transparent"
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="relative z-10 block"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <motion.button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
};

export default Button;