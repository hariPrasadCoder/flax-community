import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-paper border-b-2 border-ink">
        <div className="max-w-6xl mx-auto px-6 h-14 flex justify-between items-center">
          
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <img src="/images/logo.svg" alt="Flax" className="w-7 h-7" />
              <span className="font-mono font-semibold text-sm tracking-tight uppercase">
                Flax Community
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-mono text-xs uppercase tracking-wider hover:text-flax transition-colors ${location.pathname === '/' ? 'text-flax' : 'text-ink'}`}
            >
              Home
            </Link>
            <Link 
              to="/ai-impact-contributors" 
              className={`font-mono text-xs uppercase tracking-wider hover:text-flax transition-colors ${location.pathname === '/ai-impact-contributors' ? 'text-flax' : 'text-ink'}`}
            >
              AI Impact
            </Link>
            <button 
              className="px-5 py-2 text-xs font-mono font-semibold uppercase bg-flax text-paper border-2 border-flax hover:bg-paper hover:text-flax transition-colors cursor-pointer"
              data-tally-open="Np6voW"
              data-tally-layout="modal"
              data-tally-auto-close="4000"
            >
              Join →
            </button>
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
        <div className="fixed inset-0 z-40 bg-paper pt-16 px-6 md:hidden">
          <div className="flex flex-col gap-6 pt-8 border-t-2 border-ink">
            <Link 
              to="/" 
              className="font-serif text-2xl font-bold border-b border-ink/20 pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/ai-impact-contributors" 
              className="font-serif text-2xl font-bold border-b border-ink/20 pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AI Impact Contributors
            </Link>
            <Link 
              to="/ai-impact-contributors"
              className="mt-4 px-6 py-4 text-base font-mono font-semibold uppercase bg-flax text-paper text-center"
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
