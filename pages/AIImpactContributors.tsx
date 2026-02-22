import React from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Check, ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 flex flex-col items-center justify-center text-center bg-paper overflow-hidden border-b border-ink">
      
      {/* Background Dot Pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.03 }}>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Edition Badge */}
        <div className="mb-8 flex justify-center gap-3">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] border border-ink px-4 py-2 inline-block bg-ink text-paper">
            Edition 1
          </span>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] border border-ink px-4 py-2 inline-block hover:bg-ink hover:text-paper transition-colors">
            25 Spots Only
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-[0.95] mb-8 uppercase text-ink">
          AI Impact<br />
          <span className="italic font-normal">Contributors</span>
        </h1>

        {/* Info Bar */}
        <div className="w-full border-y border-ink py-4 mb-10 max-w-3xl mx-auto bg-paper">
          <p className="font-mono text-[10px] md:text-sm uppercase tracking-wider flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0">
            <span>Senior Engineers</span>
            <span className="hidden md:inline mx-4 opacity-30">////</span>
            <span>Data & AI</span>
            <span className="hidden md:inline mx-4 opacity-30">////</span>
            <span>Real Stories</span>
          </p>
        </div>

        {/* Description */}
        <p className="font-serif text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
          A limited spotlight on senior Data/AI engineers shaping how teams work in the age of AI.
        </p>
        <p className="font-mono text-sm max-w-xl mx-auto leading-relaxed mb-10 opacity-70">
          We're documenting stories from <strong className="text-ink">25 Senior Engineers</strong> on how they work, lead, and ship as AI becomes part of everyday engineering.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="primary" 
            size="lg"
            data-cal-namespace="flax-community"
            data-cal-link="hari-prasad/flax"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Grab Your Spot
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See Details
          </Button>
        </div>
      </div>

      {/* Handwritten Annotation */}
      <div className="absolute bottom-8 left-8 hidden lg:block hand-drawn">
        <div className="relative">
          <svg className="w-10 h-10 text-ink transform -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M20,80 C50,70 80,40 65,10" />
            <path d="M55,20 L65,10 L75,25" />
          </svg>
          <p className="font-hand text-lg leading-tight absolute -top-4 left-12 w-40 transform rotate-3">
            20 min chat, that's it!
          </p>
        </div>
      </div>
    </section>
  );
};

const WhoWeFeature: React.FC = () => {
  const roles = [
    { number: "01", title: "DATA ENGINEERING", description: "Building pipelines, orchestrating data flows, scaling infrastructure" },
    { number: "02", title: "ML/AI ENGINEERING", description: "Deploying models, MLOps, production AI systems" },
    { number: "03", title: "ANALYTICS ENGINEERING", description: "dbt, data modeling, business intelligence at scale" },
    { number: "04", title: "PLATFORM / INFRA", description: "Enabling teams with tooling, infrastructure, and platforms" },
  ];

  return (
    <Section id="details" className="bg-paper">
      <div className="border border-ink">
        <div className="border-b border-ink p-6 md:p-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase">Who We're Featuring</h2>
          <p className="font-mono text-sm mt-2 opacity-70">Senior Engineers / Staff / Principal / Leads in:</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, i) => (
            <div 
              key={i}
              className={`p-6 md:p-8 ${i < roles.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-ink' : ''} ${i === 1 ? 'lg:border-r' : ''} flex flex-col gap-4 hover:bg-ink hover:text-paper transition-colors duration-300 group`}
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-lg font-bold">({role.number})</span>
                <ArrowDownRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div>
                <h3 className="text-xl font-serif font-bold mb-2 tracking-tight leading-none">{role.title}</h3>
                <p className="font-mono text-xs leading-relaxed opacity-80">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const WhatWeCollect: React.FC = () => {
  const topics = [
    "How your workflow has changed with AI",
    "How you collaborate across teams",
    "How you make decisions and move fast",
    "How you keep quality high while shipping faster",
  ];

  return (
    <Section className="bg-paper">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        
        {/* Left: Topics */}
        <div className="border border-ink p-8 md:p-10">
          <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-60 block mb-4">What We're Collecting</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase mb-6">A Short, Real Story</h2>
          <p className="font-mono text-sm mb-8 opacity-80 leading-relaxed">
            No scripts. No marketing fluff. Just authentic insights from builders who are figuring out this new era alongside everyone else.
          </p>
          
          <div className="space-y-4">
            {topics.map((topic, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <div className="w-5 h-5 border border-ink flex items-center justify-center flex-shrink-0 group-hover:bg-ink group-hover:text-paper transition-colors">
                  <Check className="w-3 h-3" />
                </div>
                <span className="font-serif text-base">{topic}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right: Logistics */}
        <div className="border border-ink border-l-0 md:border-l border-t-0 md:border-t p-8 md:p-10 bg-ink text-paper">
          <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-60 block mb-4">Program Details</span>
          
          <div className="space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-2">Format</span>
              <span className="font-serif text-2xl font-bold">20-minute conversation</span>
            </div>
            
            <div>
              <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-2">Privacy</span>
              <span className="font-serif text-2xl font-bold">Anonymous is totally fine</span>
            </div>
            
            <div className="pt-6 border-t border-paper/20">
              <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-2">Recognition</span>
              <span className="font-serif text-xl font-bold">AI Impact Contributor badge</span>
              <p className="font-mono text-sm mt-2 opacity-70">Share on LinkedIn. Join the community.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const TheBadge: React.FC = () => {
  return (
    <Section className="bg-paper">
      <div className="text-center">
        <div className="mb-12">
          {/* Badge Preview */}
          <div className="inline-block relative">
            <div className="w-56 h-56 border-2 border-ink flex flex-col items-center justify-center text-center p-8 bg-paper mx-auto">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] mb-3 opacity-50">Official Badge</span>
              <div className="w-16 h-px bg-ink mb-4"></div>
              <span className="font-serif text-3xl font-bold uppercase leading-tight">AI Impact</span>
              <span className="font-serif text-xl italic">Contributor</span>
              <div className="w-16 h-px bg-ink mt-4 mb-3"></div>
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">Edition 1 • 2026</span>
            </div>
            
            {/* Decorative Corners */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-ink"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-ink"></div>
            <div className="absolute -top-2 -left-2 w-2 h-2 border-t-2 border-l-2 border-ink"></div>
            <div className="absolute -bottom-2 -right-2 w-2 h-2 border-b-2 border-r-2 border-ink"></div>
          </div>
        </div>
        
        <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase mb-4">Get Featured, Get Recognized</h2>
        <p className="font-mono text-sm max-w-xl mx-auto leading-relaxed opacity-80">
          If you're featured, you'll receive an <strong>AI Impact Contributor badge</strong> to share on LinkedIn — a mark of engineers shaping how we work in the AI era.
        </p>
      </div>
    </Section>
  );
};

const FinalCTA: React.FC = () => {
  return (
    <Section className="bg-paper">
      <div className="border border-ink p-8 md:p-12 text-center">
        
        <span className="font-mono text-xs uppercase tracking-[0.2em] border border-ink px-4 py-2 inline-block mb-8">
          Only 25 Spots for Edition 1
        </span>
        
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4 leading-tight">
          If This Resonates,<br />
          <span className="italic font-normal">Grab Your Spot.</span>
        </h2>
        
        <p className="font-mono text-sm max-w-lg mx-auto mb-10 opacity-80 leading-relaxed">
          20 minutes. Your story. A public collection of real insights from builders setting the standard for this new era.
        </p>
        
        <Button 
          variant="primary" 
          size="lg"
          className="text-lg"
          data-cal-namespace="flax-community"
          data-cal-link="hari-prasad/flax"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
        >
          Claim a Spot (Edition 1)
        </Button>
        
        <p className="font-mono text-xs mt-6 opacity-50 uppercase tracking-widest">
          Spots are limited. First come, first served.
        </p>
      </div>
    </Section>
  );
};

export const AIImpactContributors: React.FC = () => {
  return (
    <main className="border-x border-ink max-w-7xl mx-auto bg-paper">
      <Hero />
      <WhoWeFeature />
      <WhatWeCollect />
      <TheBadge />
      <FinalCTA />
    </main>
  );
};
