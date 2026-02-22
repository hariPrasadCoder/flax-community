import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { ArrowDownRight, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 flex flex-col items-center justify-center text-center bg-paper overflow-hidden border-b border-ink">
      
      {/* Background Dot Pattern */}
      <div className="absolute top-0 left-0 w-full h-full dot-pattern pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.03 }}>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Top Badge */}
        <div className="mb-8">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] border border-ink px-4 py-2 inline-block hover:bg-ink hover:text-paper transition-colors">
            A Community for Builders
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-[0.95] mb-8 uppercase text-ink">
          Empowering<br />
          Engineers in the<br />
          <span className="italic font-normal">AI Era.</span>
        </h1>

        {/* Info Bar */}
        <div className="w-full border-y border-ink py-4 mb-10 max-w-3xl mx-auto bg-paper">
          <p className="font-mono text-[10px] md:text-sm uppercase tracking-wider flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0">
            <span>Real Stories</span>
            <span className="hidden md:inline mx-4 opacity-30">////</span>
            <span>Senior Engineers</span>
            <span className="hidden md:inline mx-4 opacity-30">////</span>
            <span>Data & AI</span>
          </p>
        </div>

        {/* Description */}
        <p className="font-mono text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-10 opacity-80">
          Real conversations with senior engineers about how they work, lead, and ship as AI becomes part of everyday engineering. No theory — just real workflows and decisions.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/ai-impact-contributors">
            <Button variant="primary" size="lg">
              Become a Contributor
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Handwritten Annotation */}
      <div className="absolute bottom-8 right-8 hidden lg:block hand-drawn">
        <div className="relative">
          <svg className="w-10 h-10 text-ink transform rotate-[160deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M60,80 C30,70 10,40 25,10" />
            <path d="M15,20 L25,10 L35,25" />
          </svg>
          <p className="font-hand text-lg leading-tight absolute -top-8 -left-24 w-32 transform -rotate-6">
            25 spots only!
          </p>
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  const features = [
    { 
      number: "01",
      title: "SHIP FASTER",
      description: "How top engineers are 10x-ing output with AI tooling — without sacrificing quality or burning out." 
    },
    { 
      number: "02",
      title: "LEAD DIFFERENTLY",
      description: "New collaboration patterns for teams where AI is a force multiplier, not just another tool." 
    },
    { 
      number: "03",
      title: "REAL STORIES",
      description: "Not theory. Real workflows, real decisions, real results from senior engineers in the trenches." 
    },
  ];

  return (
    <Section id="about" className="bg-paper" noBorder>
      <div className="border border-ink">
        <div className="border-b border-ink p-6 md:p-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase">Why This Matters</h2>
          <p className="font-mono text-sm mt-2 opacity-70">AI is changing how engineers work. We're documenting it.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((feature, i) => (
            <div 
              key={i}
              className={`p-6 md:p-8 ${i < features.length - 1 ? 'border-b md:border-b-0 md:border-r border-ink' : ''} flex flex-col gap-4 hover:bg-ink hover:text-paper transition-colors duration-300 group`}
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-xl font-bold">({feature.number})</span>
                <ArrowDownRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 tracking-tight leading-none">{feature.title}</h3>
                <p className="font-mono text-sm leading-relaxed opacity-90 max-w-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const FeaturedCampaign: React.FC = () => {
  return (
    <Section className="bg-paper">
      <div className="border border-ink">
        <article className="hover:bg-ink/5 transition-colors">
          <Link to="/ai-impact-contributors" className="block p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              <div>
                <div className="flex gap-3 mb-6">
                  <span className="inline-block px-3 py-1 border border-ink font-mono text-xs uppercase bg-ink text-paper">
                    Edition 1
                  </span>
                  <span className="inline-block px-3 py-1 border border-ink font-mono text-xs uppercase">
                    25 Spots
                  </span>
                </div>
                
                <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight uppercase">
                  AI Impact<br />Contributors
                </h3>
                
                <p className="font-mono text-sm mb-6 opacity-70">
                  A limited spotlight on senior Data/AI engineers shaping how teams work in the age of AI.
                </p>
                
                <p className="font-serif text-base leading-relaxed mb-8">
                  Share your story. Get featured. Earn your badge. We're documenting stories from 25 Senior Engineers on how they work, lead, and ship.
                </p>
                
                <span className="font-mono text-sm uppercase tracking-widest border-t border-ink pt-4 inline-flex items-center gap-2 opacity-70 group-hover:opacity-100">
                  Grab Your Spot <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              
              <div className="hidden md:flex justify-center items-center">
                <div className="relative">
                  {/* Badge Preview */}
                  <div className="w-48 h-48 border-2 border-ink flex flex-col items-center justify-center text-center p-6 bg-paper">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2 opacity-60">Badge</span>
                    <span className="font-serif text-2xl font-bold uppercase leading-tight">AI Impact</span>
                    <span className="font-serif text-lg italic">Contributor</span>
                    <div className="w-12 h-px bg-ink mt-4 mb-2"></div>
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">Edition 1</span>
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-ink"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-ink"></div>
                </div>
              </div>
            </div>
          </Link>
        </article>
      </div>
    </Section>
  );
};

const Metrics: React.FC = () => {
  const stats = [
    { value: "25", label: "Contributors", description: "Spots for Edition 1" },
    { value: "20", label: "Minutes", description: "Per conversation" },
    { value: "∞", label: "Value", description: "Real stories, real impact" },
  ];

  return (
    <Section className="bg-paper">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase mb-4">The Format</h2>
        <p className="font-mono text-sm uppercase tracking-wider opacity-70">Simple. Authentic. Impactful.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {stats.map((stat, i) => (
          <div 
            key={i}
            className={`p-6 md:p-8 border border-ink ${i > 0 ? 'md:-ml-px' : ''} ${i > 0 ? '-mt-px md:mt-0' : ''} bg-paper flex flex-col items-center text-center hover:bg-ink hover:text-paper transition-colors duration-300 group`}
          >
            <span className="font-mono text-5xl md:text-6xl font-bold mb-4 group-hover:text-paper transition-colors">
              {stat.value}
            </span>
            <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 uppercase tracking-tight">
              {stat.label}
            </h3>
            <p className="font-mono text-xs md:text-sm opacity-80 group-hover:opacity-90 leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export const HomePage: React.FC = () => {
  return (
    <main className="border-x border-ink max-w-7xl mx-auto bg-paper">
      <Hero />
      <About />
      <FeaturedCampaign />
      <Metrics />
    </main>
  );
};
