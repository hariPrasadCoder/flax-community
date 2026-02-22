import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Users, Lightbulb, Zap, MessageSquare, Terminal, Globe, Cpu, ArrowRight, Check } from 'lucide-react';
import Particles from '../components/Particles';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-dark">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Floating Particles */}
      <Particles particleCount={60} className="z-[2] opacity-60" />

      {/* Ambient Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-primary/8 rounded-full blur-[150px] pointer-events-none" />

      {/* HUD Elements */}
      <div className="absolute top-32 left-10 hidden lg:flex flex-col gap-4 opacity-30">
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-brand-accent">
          <Terminal size={12} />
          <span>COMMUNITY_ACTIVE</span>
        </div>
        <div className="w-px h-20 bg-gradient-to-b from-brand-accent to-transparent" />
      </div>

      <div className="absolute top-32 right-10 hidden lg:flex flex-col gap-4 items-end opacity-30">
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-brand-accent">
          <span>25_CONTRIBUTORS</span>
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
          <div className="inline-flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md group cursor-default">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary">
              <Cpu size={12} />
            </span>
            <span className="text-xs font-mono tracking-wider text-brand-text uppercase">
              A Community for <span className="text-brand-accent">Builders</span>
            </span>
          </div>
        </motion.div>

        {/* Main Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16 relative"
        >
          {/* Decorative Brackets */}
          <span className="absolute -left-8 top-0 text-6xl font-thin text-white/5 hidden md:block font-mono">{'{'}</span>
          <span className="absolute -right-8 top-0 text-6xl font-thin text-white/5 hidden md:block font-mono">{'}'}</span>

          <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] mb-8 tracking-tight font-display text-white">
            Empowering Engineers <br />
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary blur-2xl opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-accent to-white font-semibold">
                in the AI Era
              </span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-text/80 mb-12 max-w-xl mx-auto leading-relaxed font-light tracking-wide">
            Real conversations with senior engineers about how they work, lead, and ship as AI becomes part of everyday engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/ai-impact-contributors">
              <Button size="lg">
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
        </motion.div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  const features = [
    { 
      icon: Zap, 
      title: "Ship Faster",
      text: "How top engineers are 10x-ing output with AI tooling — without sacrificing quality." 
    },
    { 
      icon: Users, 
      title: "Lead Differently",
      text: "New collaboration patterns for teams where AI is a force multiplier." 
    },
    { 
      icon: MessageSquare, 
      title: "Real Stories",
      text: "Not theory. Real workflows, real decisions, real results from senior engineers." 
    },
    { 
      icon: Lightbulb, 
      title: "Set the Standard",
      text: "The engineers who adapt first will define how the industry works for the next decade." 
    }
  ];

  return (
    <Section id="about" className="bg-brand-dark relative border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
              The New Era
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white leading-tight">
              AI is Changing How <br />
              <span className="text-white/40">Engineers Work.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-text max-w-sm leading-relaxed"
          >
            Build faster. Ship more. Collaborate differently. The playbook hasn't been written yet. We're documenting it — one story at a time.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-brand-card/60 border border-white/5 p-8 hover:border-brand-primary/30 transition-all duration-300 group tech-corner"
            >
              <div className="w-12 h-12 rounded-sm bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary/20 transition-colors">
                <item.icon size={24} />
              </div>
              <h3 className="text-white text-xl font-semibold mb-3 font-display">{item.title}</h3>
              <p className="text-brand-text/80 leading-relaxed text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 border-l-2 border-brand-primary pl-8 py-2"
        >
          <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-2 font-display">
            The best engineers are adapting.
          </p>
          <p className="text-2xl md:text-3xl text-brand-accent font-medium font-display">
            We're capturing how.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

const FeaturedCampaign: React.FC = () => {
  const roles = ['Data Engineering', 'ML/AI Engineering', 'Analytics Engineering', 'Platform/Infra'];
  
  return (
    <Section className="bg-brand-dark relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-brand-card via-brand-card to-brand-primary/10 p-8 md:p-12 tech-corner">
          
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1.5 rounded-sm bg-brand-primary/20 border border-brand-primary/30 text-brand-accent text-xs font-mono tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-2 animate-pulse"></span>
                Edition 1 • 25 Spots
              </div>
              
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                AI Impact <br />Contributors
              </h2>
              
              <p className="text-brand-text max-w-lg mb-8 leading-relaxed">
                A spotlight on senior Data/AI engineers shaping how teams work in the age of AI. Share your story. Get featured. Earn your badge.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {roles.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 text-xs font-mono text-brand-text uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link to="/ai-impact-contributors">
                <Button size="lg" className="group">
                  Grab Your Spot
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="hidden md:flex justify-center">
              <div className="relative">
                {/* Badge Preview */}
                <div className="w-48 h-48 bg-gradient-to-br from-brand-primary/20 via-brand-card to-brand-secondary/20 border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-sm bg-brand-primary/20 flex items-center justify-center">
                      <Cpu className="w-8 h-8 text-brand-accent" />
                    </div>
                    <span className="text-[10px] font-mono text-brand-text uppercase tracking-widest block">AI Impact</span>
                    <span className="text-sm font-semibold text-white">Contributor</span>
                  </div>
                </div>
                {/* Glow */}
                <div className="absolute -inset-8 bg-brand-primary/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedCampaign />
    </>
  );
};
