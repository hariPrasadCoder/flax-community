import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'AI Impact Contributors', href: '/ai-impact-contributors' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-brand-dark/50 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/images/logo.svg" alt="Flax" className="w-8 h-8" />
            <span className="text-xl font-bold font-display tracking-tight text-white">
              Flax Community
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.href}
                className={`text-sm transition-colors font-medium ${
                  location.pathname === link.href 
                    ? 'text-white' 
                    : 'text-brand-text hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link to="/ai-impact-contributors">
              <Button size="sm">
                Become a Contributor
              </Button>
            </Link>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-dark/98 backdrop-blur-xl pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-8 items-center text-center pt-12">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.href}
                className="text-2xl font-medium text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-full max-w-xs h-px bg-white/10 my-4" />
            <Link to="/ai-impact-contributors" className="w-full max-w-xs">
              <Button 
                className="w-full"
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
