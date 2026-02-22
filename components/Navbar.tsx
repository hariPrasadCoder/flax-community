import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'AI Impact Contributors', href: '/ai-impact-contributors' },
  ];

  return (
    <>
      <nav className="fixed top-4 md:top-6 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none max-w-full">
        <div className={`
          pointer-events-auto
          flex items-center justify-between 
          transition-all duration-500 ease-out
          w-full
          ${isScrolled 
            ? 'max-w-[calc(100%-2rem)] md:max-w-[700px] bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 py-2.5 px-4 rounded-full' 
            : 'max-w-7xl py-3 md:py-4 px-4 md:px-6 bg-transparent border-transparent'
          }
        `}>
          
          <Link to="/" className="flex items-center gap-2 group relative z-10 flex-shrink-0">
            <img src="/images/flax_logo.svg" alt="Flax" className="w-7 h-7" />
            <span className="text-base md:text-lg font-semibold tracking-tight text-white transition-opacity">
              Flax Community
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.href}
                className={`px-3 py-2 text-sm transition-colors font-medium whitespace-nowrap ${
                  location.pathname === link.href 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 ml-auto">
            <Link to="/ai-impact-contributors">
              <Button 
                variant="primary" 
                className="!px-5 !py-2 !text-xs !h-9 whitespace-nowrap"
              >
                Become a Contributor
              </Button>
            </Link>
          </div>

          <button 
            className="md:hidden text-white p-2 pointer-events-auto flex-shrink-0 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl pt-24 px-4 md:hidden overflow-y-auto">
          <div className="flex flex-col gap-6 items-center text-center min-h-full justify-center pb-20">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.href}
                className="text-2xl sm:text-3xl font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-full max-w-xs h-px bg-white/10 my-4" />
            <Link to="/ai-impact-contributors" className="w-full max-w-xs">
              <Button 
                fullWidth 
                variant="primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Become a Contributor
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
