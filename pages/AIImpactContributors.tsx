import React, { useEffect, useRef } from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Award, Clock, Users, Shield, Sparkles, CheckCircle, Database, Brain, BarChart3, Server } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      containerRef.current.style.setProperty('--cursor-x', clientX + 'px');
      containerRef.current.style.setProperty('--cursor-y', clientY + 'px');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background"
    >
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-50"
        style={{
          background: `radial-gradient(600px circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(74, 66, 216, 0.04), transparent 40%)`
        }}
      />

      <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px] pointer-events-none animate-blob opacity-40 mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none animate-blob animation-delay-4000 opacity-30 mix-blend-screen" />

      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <Section className="pt-32 md:pt-40 pb-16 text-center z-20 relative">
        
        {/* Badge indicator */}
        <div className="inline-flex items-center justify-center p-[1px] mb-8 overflow-hidden rounded-full relative group cursor-default opacity-0 animate-fade-in-up">
           <div className="inline-flex h-full w-full items-center justify-center rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 text-xs font-mono text-primary backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              Edition 1 • Limited to 25 Engineers
           </div>
        </div>

        <div className="relative mb-6 max-w-4xl mx-auto">
           <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] md:leading-[1.05] opacity-0 animate-fade-in-up delay-100">
             AI Impact Contributors
           </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 font-light leading-relaxed opacity-0 animate-fade-in-up delay-200">
          A limited spotlight on senior Data/AI engineers shaping how teams work in the age of AI.
        </p>
        
        <p className="text-lg text-secondary max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up delay-200">
          We're documenting stories from <span className="text-white font-semibold">25 Senior Engineers</span> in Data/AI on how they work, lead, and ship as AI becomes part of everyday engineering.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-300">
          <Button 
            className="h-14 px-10 text-base bg-white text-black hover:bg-gray-100 font-semibold shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            data-cal-namespace="flax-community"
            data-cal-link="hari-prasad/flax"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
             Grab Your Spot
          </Button>
          <Button 
            variant="outline"
            className="h-14 px-10 text-base"
            onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
          >
             See Details
          </Button>
        </div>

        {/* Limited spots indicator */}
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-500 opacity-0 animate-fade-in-up delay-500">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-surface border-2 border-background flex items-center justify-center text-xs text-gray-400">
                {i + 1}
              </div>
            ))}
          </div>
          <span className="ml-2">Spots filling for Edition 1</span>
        </div>

      </Section>
    </div>
  );
};

const WhoWeFeature: React.FC = () => {
  const roles = [
    { icon: Database, title: "Data Engineering", description: "Building pipelines, orchestrating data flows, scaling infrastructure" },
    { icon: Brain, title: "ML/AI Engineering", description: "Deploying models, MLOps, production AI systems" },
    { icon: BarChart3, title: "Analytics Engineering", description: "dbt, data modeling, business intelligence at scale" },
    { icon: Server, title: "Platform / Infra for Data & AI", description: "Enabling teams with tooling, infrastructure, and platforms" },
  ];

  return (
    <Section id="details" className="bg-background relative border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary uppercase tracking-wider mb-4 block">Who We're Featuring</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Senior Engineers / Staff / Principal / Leads
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((role, i) => (
            <div 
              key={i} 
              className="bg-surface/40 border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary/20 transition-colors">
                <role.icon size={24} />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">{role.title}</h3>
              <p className="text-gray-400 leading-relaxed">{role.description}</p>
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
    <Section className="bg-background relative">
      <div className="max-w-4xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-wider mb-4 block">What We're Collecting</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
              A Short, Real Story
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              No scripts. No marketing fluff. Just authentic insights from builders who are figuring out this new era alongside everyone else.
            </p>
            
            <div className="space-y-4">
              {topics.map((topic, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{topic}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-surface/60 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-white font-medium">Format: 20-minute conversation</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-white font-medium">Option: Anonymous is totally fine</span>
              </div>
              <div className="h-px bg-white/10 my-6" />
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-gray-300">Receive an <span className="text-white font-semibold">AI Impact Contributor badge</span> to share on LinkedIn</span>
              </div>
            </div>
            
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl -z-10" />
          </div>
          
        </div>

      </div>
    </Section>
  );
};

const TheBadge: React.FC = () => {
  return (
    <Section className="bg-background relative">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="relative inline-block mb-8">
          {/* Badge preview */}
          <div className="relative">
            <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 via-surface to-violet-500/20 border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <Award className="w-16 h-16 text-primary mx-auto mb-2" />
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">AI Impact</span>
                <span className="block text-sm font-semibold text-white">Contributor</span>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
          </div>
        </div>
        
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
          Get Featured, Get Recognized
        </h2>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
          If you're featured, you'll receive an <span className="text-white font-semibold">AI Impact Contributor badge</span> to share on LinkedIn — a mark of engineers shaping how we work in the AI era.
        </p>

      </div>
    </Section>
  );
};

const CTA: React.FC = () => {
  return (
    <Section className="bg-background relative border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface border border-white/10 text-sm text-gray-400 mb-8">
          <Users className="w-4 h-4 mr-2 text-primary" />
          Only 25 spots for Edition 1
        </div>
        
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          If This Resonates,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400">Grab Your Spot.</span>
        </h2>
        
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          20 minutes. Your story. A public collection of real insights from builders setting the standard for this new era.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            className="h-16 px-12 text-lg bg-white text-black hover:bg-gray-100 font-semibold shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            data-cal-namespace="flax-community"
            data-cal-link="hari-prasad/flax"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
             Claim a Spot (Edition 1)
          </Button>
        </div>
        
        <p className="mt-6 text-sm text-gray-600">
          We're featuring only 25 engineers. Spots are limited.
        </p>

      </div>
    </Section>
  );
};

export const AIImpactContributors: React.FC = () => {
  return (
    <>
      <Hero />
      <WhoWeFeature />
      <WhatWeCollect />
      <TheBadge />
      <CTA />
    </>
  );
};
