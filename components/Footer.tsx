import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-paper border-t-2 border-ink">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.svg" alt="Flax" className="w-8 h-8" />
              <span className="font-mono font-semibold tracking-tight uppercase">
                Flax Community
              </span>
            </div>
            <p className="font-mono text-sm opacity-60 leading-relaxed">
              Empowering Engineers<br/>in the AI Era.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest opacity-40 mb-2">Navigate</span>
            <Link to="/" className="font-mono text-sm hover:text-flax-light transition-colors">Home</Link>
            <Link to="/ai-impact-contributors" className="font-mono text-sm hover:text-flax-light transition-colors">AI Impact Contributors</Link>
            <a href="mailto:hello@flax.community" className="font-mono text-sm hover:text-flax-light transition-colors">Contact</a>
          </div>
          
          {/* CTA */}
          <div className="flex flex-col items-start md:items-end">
            <Link 
              to="/ai-impact-contributors"
              className="px-6 py-3 bg-flax text-paper font-mono uppercase text-sm font-semibold hover:bg-flax-light transition-colors mb-4"
            >
              Become a Contributor →
            </Link>
            <p className="font-mono text-xs opacity-40">
              &copy; 2026 Flax Community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
