import React from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Check, Database, Brain, BarChart3, Server } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 px-6 bg-paper overflow-hidden">
      
      {/* Crosshatch pattern */}
      <div className="absolute inset-0 crosshatch-pattern pointer-events-none"></div>
      
      {/* Flax purple accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-flax via-flax-light to-flax"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Badges */}
        <div className="mb-10 flex justify-center gap-3 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest px-4 py-2 bg-flax text-paper">
            Edition 1
          </span>
          <span className="font-mono text-xs uppercase tracking-widest px-4 py-2 bg-flax-muted text-flax border border-flax/20">
            25 Spots Only
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.1] mb-6 text-ink">
          AI Impact<br/>
          <span className="italic flax-underline">Contributors</span>
        </h1>

        {/* Subhead */}
        <p className="font-serif text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4 text-ink/80">
          A limited spotlight on senior Data/AI engineers shaping how teams work in the age of AI.
        </p>
        
        <p className="font-mono text-sm max-w-xl mx-auto leading-relaxed mb-12 text-ink/60">
          We're documenting stories from <strong className="text-flax">25 Senior Engineers</strong> on how they work, lead, and ship.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="flax" 
            size="lg"
            data-tally-open="Np6voW"
            data-tally-layout="modal"
            data-tally-auto-close="4000"
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

    </section>
  );
};

const WhoWeFeature: React.FC = () => {
  const roles = [
    { icon: Database, title: "Data Engineering", description: "Pipelines, orchestration, scaling" },
    { icon: Brain, title: "ML/AI Engineering", description: "Models, MLOps, production AI" },
    { icon: BarChart3, title: "Analytics Engineering", description: "dbt, modeling, BI at scale" },
    { icon: Server, title: "Platform / Infra", description: "Tooling, infrastructure, platforms" },
  ];

  return (
    <Section id="details" className="bg-paper border-t-2 border-ink">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-flax block mb-3">Who We're Featuring</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink leading-tight">
            Senior Engineers / Staff /<br/>Principal / Leads
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {roles.map((role, i) => (
            <div 
              key={i}
              className="group p-6 bg-paper border-2 border-ink hover:bg-flax hover:border-flax transition-all duration-300"
            >
              <div className="w-10 h-10 bg-flax-muted border border-flax/20 flex items-center justify-center mb-4 group-hover:bg-paper group-hover:border-paper transition-colors">
                <role.icon className="w-5 h-5 text-flax group-hover:text-flax transition-colors" />
              </div>
              
              <h3 className="font-mono text-sm font-semibold mb-2 text-ink group-hover:text-paper uppercase tracking-wider transition-colors">
                {role.title}
              </h3>
              <p className="font-mono text-xs text-ink/60 group-hover:text-paper/70 transition-colors">
                {role.description}
              </p>
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
    <Section className="bg-flax-muted/30 border-t-2 border-ink">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left: Topics */}
          <div className="bg-paper border-2 border-ink p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-flax block mb-4">What We're Collecting</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-6">
              A Short, Real Story
            </h2>
            <p className="font-mono text-sm text-ink/70 mb-8 leading-relaxed">
              No scripts. No marketing fluff. Just authentic insights from builders figuring out this new era.
            </p>
            
            <div className="space-y-4">
              {topics.map((topic, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 bg-flax flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-paper" />
                  </div>
                  <span className="font-mono text-sm text-ink/80">{topic}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Logistics */}
          <div className="bg-ink text-paper p-8 relative">
            {/* Purple corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-flax"></div>
            
            <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-6">Program Details</span>
            
            <div className="space-y-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-flax-light block mb-2">Format</span>
                <span className="font-serif text-2xl font-bold">20-minute conversation</span>
              </div>
              
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-flax-light block mb-2">Privacy</span>
                <span className="font-serif text-2xl font-bold">Anonymous is fine</span>
              </div>
              
              <div className="pt-6 border-t border-paper/20">
                <span className="font-mono text-xs uppercase tracking-widest text-flax-light block mb-2">Recognition</span>
                <span className="font-serif text-xl font-bold">AI Impact Contributor Badge</span>
                <p className="font-mono text-sm mt-2 opacity-60">Share on LinkedIn. Join the community.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const TheBadge: React.FC = () => {
  return (
    <Section className="bg-paper border-t-2 border-ink">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Badge */}
        <div className="inline-block relative mb-12">
          <div className="w-48 h-56 bg-ink text-paper p-6 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 border-2 border-flax rounded-full flex items-center justify-center mb-4">
              <span className="text-flax text-xl">✦</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-50 mb-2">Official Badge</span>
            <span className="font-serif text-xl font-bold leading-tight">AI Impact</span>
            <span className="font-serif text-lg italic">Contributor</span>
            <div className="w-12 h-px bg-flax mt-4 mb-2"></div>
            <span className="font-mono text-[9px] uppercase tracking-widest opacity-40">Edition 1 • 2026</span>
          </div>
          {/* Offset shadow */}
          <div className="absolute -bottom-3 -right-3 w-full h-full bg-flax -z-10"></div>
        </div>
        
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">
          Get Featured, Get Recognized
        </h2>
        <p className="font-mono text-sm text-ink/70 max-w-lg mx-auto leading-relaxed">
          Receive an <strong className="text-flax">AI Impact Contributor badge</strong> to share on LinkedIn — a mark of engineers shaping how we work in the AI era.
        </p>
      </div>
    </Section>
  );
};

const FinalCTA: React.FC = () => {
  return (
    <Section className="bg-flax text-paper border-t-2 border-ink">
      <div className="max-w-3xl mx-auto text-center">
        
        <span className="inline-block font-mono text-xs uppercase tracking-widest px-4 py-2 bg-paper/10 border border-paper/20 mb-8">
          Only 25 Spots for Edition 1
        </span>
        
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 leading-tight">
          If This Resonates,<br/>
          <span className="italic">Grab Your Spot.</span>
        </h2>
        
        <p className="font-mono text-sm max-w-lg mx-auto mb-10 opacity-80 leading-relaxed">
          20 minutes. Your story. A public collection of real insights from builders setting the standard for this new era.
        </p>
        
        <Button 
          variant="outline"
          size="lg"
          className="!bg-paper !text-ink !border-paper hover:!bg-ink hover:!text-paper shadow-[3px_3px_0px_0px_#18181B]"
          data-tally-open="Np6voW"
          data-tally-layout="modal"
          data-tally-auto-close="4000"
        >
          Claim a Spot (Edition 1)
        </Button>
        
        <p className="font-mono text-xs mt-6 opacity-50 uppercase tracking-widest">
          First come, first served.
        </p>
      </div>
    </Section>
  );
};

export const AIImpactContributors: React.FC = () => {
  return (
    <main className="bg-paper">
      <Hero />
      <WhoWeFeature />
      <WhatWeCollect />
      <TheBadge />
      <FinalCTA />
    </main>
  );
};
