import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noBorder?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, noBorder = false }) => {
  return (
    <section 
      id={id} 
      className={`py-12 md:py-16 px-6 ${!noBorder ? 'border-t border-ink' : ''} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};
