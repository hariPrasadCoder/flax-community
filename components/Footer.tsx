import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Final CTA */}
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight">
            Ready to Share Your <br />
            <span className="text-gradient">AI Story?</span>
          </h2>
          <Link to="/ai-impact-contributors">
            <Button 
              size="lg" 
              className="px-12 h-16"
            >
              Become a Contributor
            </Button>
          </Link>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo.svg" alt="Flax" className="w-7 h-7" />
            <span className="text-xl font-bold font-display tracking-tight text-white">
              Flax Community
            </span>
          </Link>
          
          <div className="flex gap-8 text-sm text-brand-text/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/ai-impact-contributors" className="hover:text-white transition-colors">AI Impact Contributors</Link>
            <a href="mailto:hello@flax.community" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-sm text-brand-text/40">
            © 2026 Flax Community
          </div>
        </div>
      </div>
    </footer>
  );
};
