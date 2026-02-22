import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Award, Clock, Users, Shield, Sparkles, Check, Database, Brain, BarChart3, Server, Terminal, Globe } from 'lucide-react';
import Particles from '../components/Particles';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-dark">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Floating Particles */}
      <Particles particleCount={40} className="z-[2] opacity-50" />

      {/* Ambient Glows */}
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-brand-secondary/8 rounded-full blur-[120px] pointer-events-none" />

      {/* HUD Elements */}
      <div className="absolute top-32 left-10 hidden lg:flex flex-col gap-4 opacity-30">
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-brand-accent">
          <Terminal size={12} />
          <span>EDITION_01</span>
        </div>
        <div className="w-px h-20 bg-gradient-to-b from-brand-accent to-transparent" />
      </div>

      <div className="absolute top-32 right-10 hidden lg:flex flex-col gap-4 items-end opacity-30">
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-brand-accent">
          <span>SPOTS_LIMITED</span>
          <Globe size={12} />
        </div>
        <div className="w-px h-20 bg-gradient-to-b from-brand-accent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-3 pl-3 pr-4 py-2 rounded-sm bg-brand-primary/10 border border-brand-primary/30 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span className="text-xs font-mono tracking-widest text-brand-accent uppercase">
              Edition 1 • Limited to 25 Engineers
            </span>
          </div>
        </motion.div>

        {/* Main Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight font-display text-white">
            AI Impact Contributors
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 mb-4 font-light">
            A limited spotlight on senior Data/AI engineers shaping how teams work in the age of AI.
          </p>
          
          <p className="text-lg text-brand-text mb-12 max-w-2xl mx-auto leading-relaxed">
            We're documenting stories from <span className="text-white font-semibold">25 Senior Engineers</span> in Data/AI on how they work, lead, and ship as AI becomes part of everyday engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg"
              className="shadow-[0_0_30px_rgba(255,255,255,0.15)]"
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
        </motion.div>

        {/* Spots indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 text-sm text-brand-text/60"
        >
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-brand-card border border-white/10 flex items-center justify-center text-xs text-brand-text/60 font-mono">
                {i + 1}
              </div>
            ))}
          </div>
          <span className="font-mono text-xs tracking-wider uppercase">Spots filling for Edition 1</span>
        </motion.div>
      </div>
    </section>
  );
};

const WhoWeFeature: React.FC = () => {
  const roles = [
    { icon: Database, title: "Data Engineering", description: "Building pipelines, orchestrating data flows, scaling infrastructure" },
    { icon: Brain, title: "ML/AI Engineering", description: "Deploying models, MLOps, production AI systems" },
    { icon: BarChart3, title: "Analytics Engineering", description: "dbt, data modeling, business intelligence at scale" },
    { icon: Server, title: "Platform / Infra", description: "Enabling teams with tooling, infrastructure, and platforms" },
  ];

  return (
    <Section id="details" className="bg-brand-dark relative border-t border-white/5">
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
              Who We're Featuring
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white">
              Senior Engineers / Staff / <br />
              <span className="text-white/40">Principal / Leads</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-brand-card/60 border border-white/5 p-8 hover:border-brand-primary/30 transition-all duration-300 group tech-corner"
            >
              <div className="w-12 h-12 rounded-sm bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary/20 transition-colors">
                <role.icon size={24} />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2 font-display">{role.title}</h3>
              <p className="text-brand-text/70 text-sm leading-relaxed">{role.description}</p>
            </motion.div>
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

  const logistics = [
    { icon: Clock, label: "Format", value: "20-minute conversation" },
    { icon: Shield, label: "Privacy", value: "Anonymous is totally fine" },
    { icon: Award, label: "Recognition", value: "AI Impact Contributor badge for LinkedIn" },
  ];

  return (
    <Section className="bg-brand-dark relative">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
            What We're Collecting
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
            A Short, Real Story
          </h2>
          <p className="text-brand-text mb-8 leading-relaxed">
            No scripts. No marketing fluff. Just authentic insights from builders who are figuring out this new era alongside everyone else.
          </p>
          
          <div className="space-y-4">
            {topics.map((topic, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-6 h-6 rounded-sm bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-brand-accent" />
                </div>
                <span className="text-white/80">{topic}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-brand-card border border-white/10 p-8 tech-corner">
            <h3 className="font-mono text-xs tracking-widest uppercase text-brand-primary mb-8">
              Program Details
            </h3>
            
            <div className="space-y-6">
              {logistics.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-brand-text/60 uppercase tracking-wider block mb-1">{item.label}</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative glow */}
          <div className="absolute -inset-4 bg-brand-primary/5 rounded blur-2xl -z-10" />
        </motion.div>
      </div>
    </Section>
  );
};

const TheBadge: React.FC = () => {
  return (
    <Section className="bg-brand-dark relative border-t border-white/5">
      <div className="text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative inline-block mb-12"
        >
          {/* Badge */}
          <div className="relative w-56 h-56 bg-gradient-to-br from-brand-primary/20 via-brand-card to-brand-secondary/20 border border-white/10 flex items-center justify-center">
            {/* Tech corners */}
            <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-white/20" />
            <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-white/20" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-white/20" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-white/20" />
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-sm bg-brand-primary/20 flex items-center justify-center">
                <Award className="w-10 h-10 text-brand-accent" />
              </div>
              <span className="text-[10px] font-mono text-brand-text uppercase tracking-widest block mb-1">AI Impact</span>
              <span className="text-lg font-semibold text-white font-display">Contributor</span>
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute -inset-12 bg-brand-primary/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4">
            Get Featured, Get Recognized
          </h2>
          <p className="text-brand-text max-w-xl mx-auto leading-relaxed">
            If you're featured, you'll receive an <span className="text-white font-semibold">AI Impact Contributor badge</span> to share on LinkedIn — a mark of engineers shaping how we work in the AI era.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

const CTA: React.FC = () => {
  return (
    <Section className="bg-brand-dark relative border-t border-white/5">
      <div className="text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 py-2 rounded-sm bg-brand-card border border-white/10 text-sm text-brand-text mb-8"
        >
          <Users className="w-4 h-4 mr-2 text-brand-primary" />
          <span className="font-mono text-xs tracking-wider uppercase">Only 25 spots for Edition 1</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight"
        >
          If This Resonates, <br />
          <span className="text-gradient">Grab Your Spot.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-text max-w-xl mx-auto mb-10 leading-relaxed"
        >
          20 minutes. Your story. A public collection of real insights from builders setting the standard for this new era.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg"
            className="h-16 px-12 text-base shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            data-cal-namespace="flax-community"
            data-cal-link="hari-prasad/flax"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Claim a Spot (Edition 1)
          </Button>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-sm text-brand-text/50 font-mono"
        >
          We're featuring only 25 engineers. Spots are limited.
        </motion.p>
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
