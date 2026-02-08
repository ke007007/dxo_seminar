import React from 'react';
import { ArrowRight, Apple } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'minimal';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  // Removed strong shadows, kept subtle transition and interaction
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-bold tracking-wide transition-all duration-300 ease-out rounded-full active:scale-[0.98] relative overflow-hidden group";
  
  const variants = {
    primary: "bg-brand-black text-white hover:bg-gray-800",
    secondary: "bg-brand-yellow text-brand-black hover:bg-[#ffdb33]",
    outline: "bg-transparent text-brand-black border border-brand-black hover:bg-brand-black hover:text-white",
    minimal: "bg-transparent text-brand-tealDark hover:opacity-70 px-0 py-2"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <span className="flex items-center gap-2 relative z-10">
        {children}
        {variant !== 'minimal' && (
          <div className="relative w-4 h-4">
             <ArrowRight className="absolute inset-0 w-4 h-4 transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-2" />
             <Apple className="absolute inset-0 w-4 h-4 transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
          </div>
        )}
        {variant === 'minimal' && <span className="text-xl">→</span>}
      </span>
    </button>
  );
};