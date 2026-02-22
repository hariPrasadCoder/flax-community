import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { ArrowRight, Zap, Users, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 px-6 bg-paper overflow-hidden">
      
      {/* Subtle crosshatch pattern - unique to Flax */}
      <div className="absolute inset-0 crosshatch-pattern pointer-events-none"></div>
      
      {/* Flax purple accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-flax via-flax-light to-flax"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Badge with Flax purple */}
        <div className="mb-10 flex justify-center">
          <span className="font-mono text-xs uppercase tracking-widest px-4 py-2 bg-flax-muted text-flax border border-flax/20 inline-block">
            ✦ A Community for Builders
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.1] mb-8 text-ink">
          Empowering Engineers<br/>
          in the <span className="italic flax-underline">AI Era</span>
        </h1>

        {/* Subhead */}
        <p className="text-center font-mono text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-12 text-ink/70">
          Real conversations with senior engineers about how they work, lead, and ship as AI becomes part of everyday engineering. No theory — just real stories.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/ai-impact-contributors">
            <Button variant="flax" size="lg">
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
        
        {/* Handwritten note */}
        <p className="hidden md:block text-center font-hand text-xl text-flax mt-6 transform rotate-[-2deg]">
          Only 25 spots! →
        </p>
      </div>

    </section>
  );
};

const About: React.FC = () => {
  const features = [
    { 
      icon: Zap,
      title: "Ship Faster",
      description: "How top engineers are 10x-ing output with AI tooling — without sacrificing quality." 
    },
    { 
      icon: Users,
      title: "Lead Differently",
      description: "New collaboration patterns for teams where AI is a force multiplier." 
    },
    { 
      icon: MessageSquare,
      title: "Real Stories",
      description: "Not theory. Real workflows, real decisions, real results from senior engineers." 
    },
  ];

  return (
    <Section id="about" className="bg-paper border-t-2 border-ink">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-flax block mb-3">Why This Matters</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink leading-tight">
              AI is changing how<br/>engineers work.
            </h2>
          </div>
          <p className="font-mono text-sm text-ink/60 max-w-sm leading-relaxed">
            The playbook hasn't been written yet. We're documenting it — one story at a time.
          </p>
        </div>

        {/* Feature Cards - different layout from MRP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="group p-8 bg-paper border-2 border-ink hover:border-flax hover:bg-flax-muted/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-flax/10 border border-flax/20 flex items-center justify-center mb-6 group-hover:bg-flax group-hover:border-flax transition-colors">
                <feature.icon className="w-6 h-6 text-flax group-hover:text-paper transition-colors" />
              </div>
              
              <h3 className="font-serif text-xl font-bold mb-3 text-ink">{feature.title}</h3>
              <p className="font-mono text-sm text-ink/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const FeaturedCampaign: React.FC = () => {
  return (
    <Section className="bg-flax-muted/50 border-t-2 border-ink">
      <div className="max-w-5xl mx-auto">
        <div className="bg-paper border-2 border-ink p-8 md:p-12 relative overflow-hidden">
          
          {/* Purple accent corner with Edition 1 badge */}
          <div className="absolute top-0 right-0 w-28 h-28 bg-flax flex items-start justify-end p-3">
            <span className="text-paper font-mono text-xs uppercase tracking-widest">
              Edition 1
            </span>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            
            <div className="md:col-span-3">
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-flax mb-4">
                Featured Campaign
              </span>
              
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-ink leading-tight">
                AI Impact Contributors
              </h3>
              
              <p className="font-mono text-sm text-ink/70 mb-6 leading-relaxed">
                A limited spotlight on senior Data/AI engineers shaping how teams work in the age of AI. 
                Share your story. Get featured. Earn your badge.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Data Engineering', 'ML/AI', 'Software', 'Platform'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-ink/5 border border-ink/10 font-mono text-xs text-ink/80">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link to="/ai-impact-contributors">
                <Button variant="flax" className="group">
                  Grab Your Spot 
                  <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="md:col-span-2 flex justify-center">
              {/* Badge Preview - unique design */}
              <div className="relative">
                <div className="w-40 h-48 bg-ink text-paper p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 border-2 border-flax rounded-full flex items-center justify-center mb-4">
                    <span className="text-flax text-lg">✦</span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-60 mb-2">Badge</span>
                  <span className="font-serif text-lg font-bold leading-tight">AI Impact</span>
                  <span className="font-serif italic">Contributor</span>
                </div>
                {/* Offset shadow */}
                <div className="absolute -bottom-2 -right-2 w-full h-full bg-flax -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Stats: React.FC = () => {
  const stats = [
    { value: "25", label: "Contributors", sub: "Edition 1" },
    { value: "30", label: "Minutes", sub: "Per conversation" },
    { value: "1", label: "Badge", sub: "LinkedIn-ready" },
  ];

  return (
    <Section className="bg-paper border-t-2 border-ink">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-flax block mb-3">The Format</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">
            Simple. Authentic. Impactful.
          </h2>
        </div>
        
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className="text-center p-6 md:p-8 border-2 border-ink hover:bg-ink hover:text-paper transition-colors duration-300 group"
            >
              <span className="block font-serif text-4xl md:text-5xl font-bold text-flax group-hover:text-flax-light transition-colors mb-2">
                {stat.value}
              </span>
              <span className="block font-mono text-sm uppercase tracking-wider mb-1">
                {stat.label}
              </span>
              <span className="block font-mono text-xs opacity-50">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export const HomePage: React.FC = () => {
  return (
    <main className="bg-paper">
      <Hero />
      <About />
      <FeaturedCampaign />
      <Stats />
    </main>
  );
};
