import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="sticky top-0 w-full z-50 border-b border-ink bg-paper">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center border-x border-ink">
          
          <div className="flex items-center gap-4">
            <Link to="/" className="font-mono font-bold text-xl tracking-tighter uppercase hover:opacity-70 transition-opacity">
              FLAX_COMMUNITY
            </Link>
            <Link 
              to="/ai-impact-contributors" 
              className="hidden sm:inline-block font-mono text-[10px] border border-ink px-2 py-1 uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors"
            >
              [ AI IMPACT ]
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`font-mono text-xs uppercase tracking-widest hover:underline decoration-1 underline-offset-4 ${location.pathname === '/' ? 'underline' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/ai-impact-contributors" 
              className={`font-mono text-xs uppercase tracking-widest hover:underline decoration-1 underline-offset-4 ${location.pathname === '/ai-impact-contributors' ? 'underline' : ''}`}
            >
              AI Impact Contributors
            </Link>
            <Link 
              to="/ai-impact-contributors"
              className="px-6 py-2 text-sm font-mono font-bold uppercase bg-ink text-paper border border-ink hover:bg-paper hover:text-ink transition-colors"
            >
              Contribute →
            </Link>
          </div>

          <button 
            className="md:hidden text-ink p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-paper pt-20 px-6 md:hidden border-x border-ink max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 pt-8">
            <Link 
              to="/" 
              className="font-serif text-3xl font-bold uppercase border-b border-ink pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/ai-impact-contributors" 
              className="font-serif text-3xl font-bold uppercase border-b border-ink pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AI Impact Contributors
            </Link>
            <Link 
              to="/ai-impact-contributors"
              className="mt-4 px-8 py-4 text-lg font-mono font-bold uppercase bg-ink text-paper border border-ink text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Become a Contributor →
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
