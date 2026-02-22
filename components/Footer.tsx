import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-paper border-t border-ink">
      <div className="max-w-7xl mx-auto border-x border-ink">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-ink flex flex-col justify-between">
            <div>
              <h4 className="font-mono font-bold text-lg uppercase mb-2">Flax Community</h4>
              <p className="font-serif text-sm opacity-60">
                Empowering Engineers in the AI Era.<br/>
                &copy; 2026. All rights reserved.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-ink border-dashed">
              <p className="font-mono text-xs uppercase tracking-widest opacity-50">
                Where Intelligence Meets Reality
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10 flex flex-col md:items-end justify-center">
            <Link 
              to="/ai-impact-contributors"
              className="px-8 py-3 bg-ink text-paper font-mono uppercase text-sm border border-ink hover:bg-paper hover:text-ink transition-all mb-8 w-full md:w-auto inline-block text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              Become a Contributor →
            </Link>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-2 font-mono text-sm uppercase items-start md:items-center">
              <Link to="/" className="hover:underline decoration-1 underline-offset-4">Home</Link>
              <span className="hidden md:inline opacity-30">/</span>
              <Link to="/ai-impact-contributors" className="hover:underline decoration-1 underline-offset-4">AI Impact</Link>
              <span className="hidden md:inline opacity-30">/</span>
              <a href="mailto:hello@flax.community" className="hover:underline decoration-1 underline-offset-4">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
