import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', onClick, href }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-blue-600 hover:bg-gray-50 border-2 border-blue-600',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-blue-600'
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
};
