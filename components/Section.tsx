import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'white' | 'light' | 'dark' | 'yellow';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  bg = 'white',
  maxWidth = 'lg'
}) => {
  const bgs = {
    white: "bg-white",
    light: "bg-brand-light",
    dark: "bg-brand-black text-white",
    yellow: "bg-brand-yellow text-brand-black",
  };

  const maxW = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-screen-2xl",
    full: "max-w-full"
  };

  return (
    <section id={id} className={`py-24 md:py-32 ${bgs[bg]} ${className}`}>
      <div className={`container mx-auto px-6 md:px-12 ${maxW[maxWidth]}`}>
        {children}
      </div>
    </section>
  );
};