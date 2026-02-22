import React from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { AvatarGroup } from '../components/AvatarGroup';
import { Check, Database, Brain, BarChart3, Server, Users, MessageSquare, Award, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 bg-paper overflow-hidden">
      
      {/* Crosshatch pattern */}
      <div className="absolute inset-0 crosshatch-pattern pointer-events-none"></div>
      
      {/* Flax purple accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-flax via-flax-light to-flax"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Community Avatars */}
        <div className="mb-8 flex justify-center">
          <div className="flex flex-col items-center gap-3">
            <AvatarGroup count={5} size="lg" showPlus={true} />
            <span className="font-mono text-xs uppercase tracking-widest text-ink/60">
              Join these engineers
            </span>
          </div>
        </div>

        {/* Badges */}
        <div className="mb-8 flex justify-center gap-3 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest px-4 py-2 bg-flax text-paper">
            Edition 1
          </span>
          <span className="font-mono text-xs uppercase tracking-widest px-4 py-2 bg-flax-muted text-flax border border-flax/20">
            20 / 25 Spots Left
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] mb-6 text-ink">
          Become an<br/>
          <span className="italic flax-underline">AI Impact Contributor</span>
        </h1>

        {/* Subhead */}
        <p className="font-serif text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4 text-ink/80">
          Join a community of senior Data/AI engineers sharing how they work in the age of AI.
        </p>
        
        <p className="font-mono text-sm max-w-xl mx-auto leading-relaxed mb-10 text-ink/60">
          Share your story. Connect with peers. Get recognized.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="flax" 
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
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            How It Works
          </Button>
        </div>
      </div>

      {/* Floating avatars */}
      <div className="absolute bottom-16 left-12 hidden lg:block animate-float">
        <div className="w-12 h-12 bg-flax rounded-full flex items-center justify-center text-paper font-mono font-bold border-4 border-paper shadow-lg">
          DE
        </div>
      </div>
      <div className="absolute top-32 right-16 hidden lg:block animate-float-delayed">
        <div className="w-10 h-10 bg-ink rounded-full flex items-center justify-center text-paper font-mono font-bold border-4 border-paper shadow-lg">
          ML
        </div>
      </div>
    </section>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    { 
      number: "01",
      icon: MessageSquare,
      title: "Have a Chat",
      description: "20-minute conversation about how AI has changed your work. Casual, no prep needed." 
    },
    { 
      number: "02",
      icon: Users,
      title: "Get Featured",
      description: "Your story becomes part of a public collection helping other engineers navigate AI." 
    },
    { 
      number: "03",
      icon: Award,
      title: "Join the Community",
      description: "Receive your badge, connect with peers, and be part of something bigger." 
    },
  ];

  return (
    <Section id="how-it-works" className="bg-paper border-t-2 border-ink">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-flax block mb-3">How It Works</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">
            Three simple steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <div 
              key={i}
              className={`group p-8 bg-paper border-2 border-ink ${i > 0 ? 'md:-ml-[2px]' : ''} ${i > 0 ? '-mt-[2px] md:mt-0' : ''} hover:bg-flax hover:border-flax hover:text-paper transition-all duration-300 relative`}
            >
              {/* Step number */}
              <span className="absolute top-4 right-4 font-mono text-4xl font-bold text-ink/10 group-hover:text-paper/20 transition-colors">
                {step.number}
              </span>
              
              <div className="w-12 h-12 bg-flax-muted border border-flax/20 flex items-center justify-center mb-6 group-hover:bg-paper group-hover:border-paper transition-colors">
                <step.icon className="w-6 h-6 text-flax group-hover:text-flax transition-colors" />
              </div>
              
              <h3 className="font-serif text-xl font-bold mb-3">{step.title}</h3>
              <p className="font-mono text-sm opacity-70 leading-relaxed">
                {step.description}
              </p>
              
              {/* Arrow to next step */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-flax" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const WhoWeFeature: React.FC = () => {
  const roles = [
    { icon: Database, title: "Data Engineering", count: "~8 spots" },
    { icon: Brain, title: "ML/AI Engineering", count: "~8 spots" },
    { icon: BarChart3, title: "Analytics Engineering", count: "~5 spots" },
    { icon: Server, title: "Platform / Infra", count: "~4 spots" },
  ];

  return (
    <Section className="bg-flax-muted/30 border-t-2 border-ink">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-flax block mb-3">Who's Joining</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink leading-tight">
              Senior Engineers from<br/>across the data stack
            </h2>
          </div>
          <p className="font-mono text-sm text-ink/60 max-w-xs">
            Staff, Principal, and Lead engineers shaping how teams work with AI.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {roles.map((role, i) => (
            <div 
              key={i}
              className="group p-6 bg-paper border-2 border-ink hover:bg-flax hover:border-flax transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto bg-flax-muted border border-flax/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-paper group-hover:border-paper transition-colors">
                <role.icon className="w-7 h-7 text-flax group-hover:text-flax transition-colors" />
              </div>
              
              <h3 className="font-mono text-sm font-semibold mb-2 text-ink group-hover:text-paper uppercase tracking-wider transition-colors">
                {role.title}
              </h3>
              <span className="font-mono text-xs text-flax group-hover:text-paper/80 transition-colors">
                {role.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const WhatWeAsk: React.FC = () => {
  const topics = [
    "How your workflow has changed with AI",
    "How you collaborate across teams",
    "How you make decisions and move fast",
    "How you keep quality high while shipping faster",
  ];

  return (
    <Section className="bg-paper border-t-2 border-ink">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left: Topics */}
          <div className="bg-paper border-2 border-ink p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-flax block mb-4">The Conversation</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-6">
              We'll ask about...
            </h2>
            
            <div className="space-y-4">
              {topics.map((topic, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-flax flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-paper" />
                  </div>
                  <span className="font-mono text-sm text-ink/80">{topic}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-ink/10">
              <p className="font-mono text-xs text-ink/50 italic">
                No prep needed. Just show up and share your experience.
              </p>
            </div>
          </div>
          
          {/* Right: What You Get */}
          <div className="bg-ink text-paper p-8 relative">
            {/* Purple corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-flax"></div>
            
            <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-6">What You Get</span>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-flax rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-paper" />
                </div>
                <div>
                  <span className="font-serif text-xl font-bold block mb-1">AI Impact Badge</span>
                  <span className="font-mono text-sm opacity-70">Share on LinkedIn. Show you're part of the community.</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-flax rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-paper" />
                </div>
                <div>
                  <span className="font-serif text-xl font-bold block mb-1">Community Access</span>
                  <span className="font-mono text-sm opacity-70">Connect with other senior engineers navigating AI.</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-flax rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-paper" />
                </div>
                <div>
                  <span className="font-serif text-xl font-bold block mb-1">Your Story Featured</span>
                  <span className="font-mono text-sm opacity-70">Help other engineers learn from your experience.</span>
                </div>
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
    <Section className="bg-flax-muted/30 border-t-2 border-ink">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left: Badge */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-52 h-60 bg-ink text-paper p-6 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 border-2 border-flax rounded-full flex items-center justify-center mb-4">
                  <span className="text-flax text-2xl">✦</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-50 mb-2">Official Badge</span>
                <span className="font-serif text-2xl font-bold leading-tight">AI Impact</span>
                <span className="font-serif text-lg italic">Contributor</span>
                <div className="w-12 h-px bg-flax mt-4 mb-2"></div>
                <span className="font-mono text-[9px] uppercase tracking-widest opacity-40">Edition 1 • 2026</span>
              </div>
              {/* Offset shadow */}
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-flax -z-10"></div>
            </div>
          </div>
          
          {/* Right: Text */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-flax block mb-3">Recognition</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
              Get your badge.<br/>Join the community.
            </h2>
            <p className="font-mono text-sm text-ink/70 leading-relaxed mb-6">
              Every contributor receives the AI Impact Contributor badge — a mark of engineers who are shaping how we work with AI. Share it on LinkedIn and connect with fellow contributors.
            </p>
            
            <div className="flex items-center gap-4">
              <AvatarGroup count={4} size="sm" showPlus={false} />
              <span className="font-mono text-xs text-ink/60">
                Join these contributors
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const FinalCTA: React.FC = () => {
  return (
    <Section className="bg-flax text-paper border-t-2 border-ink">
      <div className="max-w-3xl mx-auto text-center">
        
        <AvatarGroup count={6} size="lg" showPlus={true} className="justify-center mb-8" />
        
        <span className="inline-block font-mono text-xs uppercase tracking-widest px-4 py-2 bg-paper/10 border border-paper/20 mb-6">
          20 / 25 Spots Remaining
        </span>
        
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Ready to join?
        </h2>
        
        <p className="font-mono text-sm max-w-lg mx-auto mb-10 opacity-80 leading-relaxed">
          20 minutes. Your story. A community of engineers shaping the future of work.
        </p>
        
        <Button 
          variant="primary"
          size="lg"
          className="bg-paper text-flax border-paper hover:bg-ink hover:text-paper hover:border-ink shadow-[3px_3px_0px_0px_#18181B]"
          data-cal-namespace="flax-community"
          data-cal-link="hari-prasad/flax"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
        >
          Grab Your Spot Now
        </Button>
        
        <p className="font-mono text-xs mt-6 opacity-50 uppercase tracking-widest">
          Edition 1 • Limited spots • First come, first served
        </p>
      </div>
    </Section>
  );
};

export const AIImpactContributors: React.FC = () => {
  return (
    <main className="bg-paper">
      <Hero />
      <HowItWorks />
      <WhoWeFeature />
      <WhatWeAsk />
      <TheBadge />
      <FinalCTA />
    </main>
  );
};
