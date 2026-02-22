import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-white/5 relative">
      
      {/* Final CTA */}
      <Section className="!py-0 mb-20">
        <div className="text-center">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Engineers Building
            <br />
            <span className="text-gray-600">The Future of AI.</span>
          </h2>
          
          <div className="mt-12">
            <Link to="/ai-impact-contributors">
              <Button 
                className="!text-lg !px-12 !py-6 !h-auto !rounded-full bg-white text-black hover:bg-gray-100 font-semibold shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] transition-all duration-300"
              >
                Join the Community
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Footer Links */}
      <div className="container mx-auto px-6 max-w-7xl pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src="/images/flax_logo.svg" alt="Flax" className="w-6 h-6" />
          <span className="text-white font-semibold text-lg">Flax Community</span>
        </div>
         
        <div className="flex gap-8 text-sm text-gray-500">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/ai-impact-contributors" className="hover:text-white transition-colors">AI Impact Contributors</Link>
          <a href="mailto:hello@flax.community" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-xs text-gray-600">
            © 2026 Flax Community
        </div>
      </div>
    </footer>
  );
};
