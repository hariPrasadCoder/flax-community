import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { AvatarGroup, CommunityNetwork } from '../components/AvatarGroup';
import { ArrowRight, Users, MessageSquare, Award, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 bg-paper overflow-hidden">
      
      {/* Crosshatch pattern */}
      <div className="absolute inset-0 crosshatch-pattern pointer-events-none"></div>
      
      {/* Flax purple accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-flax via-flax-light to-flax"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div>
            {/* Community Badge with Avatars */}
            <div className="mb-8 flex items-center gap-4">
              <AvatarGroup count={4} size="sm" showPlus={false} />
              <span className="font-mono text-xs uppercase tracking-widest text-flax">
                Join 25 Senior Engineers
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] mb-6 text-ink">
              A Community of<br/>
              <span className="italic flax-underline">AI Builders</span>
            </h1>

            {/* Subhead */}
            <p className="font-mono text-sm md:text-base max-w-lg leading-relaxed mb-8 text-ink/70">
              Real conversations with senior engineers about how they work, lead, and ship in the AI era. Learn from peers. Share your story. Grow together.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-6 mb-8 py-4 border-y border-ink/10">
              <div className="text-center">
                <span className="block font-serif text-2xl font-bold text-flax">25</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink/50">Contributors</span>
              </div>
              <div className="w-px h-8 bg-ink/10"></div>
              <div className="text-center">
                <span className="block font-serif text-2xl font-bold text-ink">4</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink/50">Disciplines</span>
              </div>
              <div className="w-px h-8 bg-ink/10"></div>
              <div className="text-center">
                <span className="block font-serif text-2xl font-bold text-ink">1</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink/50">Community</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/ai-impact-contributors">
                <Button variant="flax" size="lg">
                  Join the Community
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Who's Inside
              </Button>
            </div>
          </div>
          
          {/* Right: Community Network Visualization */}
          <div className="hidden lg:block relative h-[400px]">
            <CommunityNetwork className="absolute inset-0" />
            
            {/* Floating avatars around the network */}
            <div className="absolute top-8 left-12 animate-float">
              <div className="w-14 h-14 bg-flax rounded-full flex items-center justify-center text-paper font-mono font-bold border-4 border-paper shadow-lg">
                DE
              </div>
            </div>
            <div className="absolute top-20 right-8 animate-float-delayed">
              <div className="w-12 h-12 bg-ink rounded-full flex items-center justify-center text-paper font-mono font-bold border-4 border-paper shadow-lg">
                ML
              </div>
            </div>
            <div className="absolute bottom-24 left-8 animate-float-delayed-2">
              <div className="w-11 h-11 bg-flax-light rounded-full flex items-center justify-center text-paper font-mono font-bold border-4 border-paper shadow-lg">
                AE
              </div>
            </div>
            <div className="absolute bottom-12 right-16 animate-float">
              <div className="w-12 h-12 bg-ink/80 rounded-full flex items-center justify-center text-paper font-mono font-bold border-4 border-paper shadow-lg">
                PI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CommunityWall: React.FC = () => {
  // Placeholder contributors - would be real data
  const contributors = [
    { initials: 'AK', role: 'Data Engineer', company: 'Series B Startup' },
    { initials: 'SJ', role: 'ML Engineer', company: 'Big Tech' },
    { initials: 'MP', role: 'Analytics Lead', company: 'Fintech' },
    { initials: 'RK', role: 'Platform Eng', company: 'Healthcare AI' },
    { initials: 'LT', role: 'Staff Engineer', company: 'E-commerce' },
    { initials: 'NB', role: 'AI/ML Lead', company: 'Autonomous' },
    { initials: '??', role: 'Could be you', company: 'Your Company', isPlaceholder: true },
    { initials: '??', role: 'Could be you', company: 'Your Company', isPlaceholder: true },
  ];

  return (
    <Section id="community" className="bg-flax-muted/30 border-t-2 border-ink">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-flax block mb-3">
            <Users className="inline w-4 h-4 mr-2" />
            The Community
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
            Engineers Just Like You
          </h2>
          <p className="font-mono text-sm text-ink/60 max-w-lg mx-auto">
            Senior engineers from Data, ML, Analytics, and Platform — sharing real stories about working in the AI era.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contributors.map((person, i) => (
            <div 
              key={i}
              className={`group p-6 text-center border-2 transition-all duration-300 ${
                person.isPlaceholder 
                  ? 'border-dashed border-flax/40 bg-paper hover:border-flax hover:bg-flax-muted/50' 
                  : 'border-ink bg-paper hover:bg-ink hover:text-paper'
              }`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center font-mono font-bold text-lg ${
                person.isPlaceholder 
                  ? 'bg-flax-muted text-flax border-2 border-dashed border-flax/40 group-hover:bg-flax group-hover:text-paper group-hover:border-solid' 
                  : 'bg-flax text-paper group-hover:bg-paper group-hover:text-flax'
              } transition-colors`}>
                {person.initials}
              </div>
              <span className="block font-mono text-sm font-semibold mb-1">
                {person.role}
              </span>
              <span className="block font-mono text-xs opacity-50">
                {person.company}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/ai-impact-contributors">
            <Button variant="flax" className="group">
              Claim Your Spot
              <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

const WhyJoin: React.FC = () => {
  const reasons = [
    { 
      icon: MessageSquare,
      title: "Share Your Story",
      description: "20-minute conversation about how AI has changed your work. No prep needed." 
    },
    { 
      icon: Users,
      title: "Join Your Peers",
      description: "Connect with 25 senior engineers who are figuring this out alongside you." 
    },
    { 
      icon: Award,
      title: "Get Recognized",
      description: "Earn your AI Impact Contributor badge. Share it on LinkedIn." 
    },
  ];

  return (
    <Section className="bg-paper border-t-2 border-ink">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-flax block mb-3">Why Join</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">
            Built by engineers,<br/>for engineers.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div 
              key={i}
              className="group p-8 bg-paper border-2 border-ink hover:border-flax transition-all duration-300"
            >
              <div className="w-12 h-12 bg-flax-muted border border-flax/20 flex items-center justify-center mb-6 group-hover:bg-flax transition-colors">
                <reason.icon className="w-6 h-6 text-flax group-hover:text-paper transition-colors" />
              </div>
              
              <h3 className="font-serif text-xl font-bold mb-3 text-ink">{reason.title}</h3>
              <p className="font-mono text-sm text-ink/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const CommunityQuote: React.FC = () => {
  return (
    <Section className="bg-ink text-paper border-t-2 border-ink">
      <div className="max-w-3xl mx-auto text-center">
        <Sparkles className="w-8 h-8 text-flax mx-auto mb-6" />
        
        <blockquote className="font-serif text-2xl md:text-3xl italic leading-relaxed mb-8">
          "The best engineers are adapting to AI right now. We're capturing how — and building a community around it."
        </blockquote>
        
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-flax rounded-full flex items-center justify-center text-paper font-mono font-bold">
            HP
          </div>
          <div className="text-left">
            <span className="block font-mono text-sm font-semibold">Hari Prasad</span>
            <span className="block font-mono text-xs opacity-60">Founder, Flax Community</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

const FinalCTA: React.FC = () => {
  return (
    <Section className="bg-paper border-t-2 border-ink">
      <div className="max-w-3xl mx-auto">
        <div className="bg-flax text-paper p-8 md:p-12 text-center relative overflow-hidden">
          
          {/* Decorative avatars in corners */}
          <div className="absolute top-4 left-4 opacity-20">
            <div className="w-10 h-10 bg-paper/20 rounded-full"></div>
          </div>
          <div className="absolute top-8 right-12 opacity-20">
            <div className="w-8 h-8 bg-paper/20 rounded-full"></div>
          </div>
          <div className="absolute bottom-6 left-16 opacity-20">
            <div className="w-6 h-6 bg-paper/20 rounded-full"></div>
          </div>
          <div className="absolute bottom-4 right-4 opacity-20">
            <div className="w-12 h-12 bg-paper/20 rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <AvatarGroup count={5} size="lg" showPlus={true} className="justify-center mb-6" />
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Join 25 Senior Engineers
            </h2>
            
            <p className="font-mono text-sm opacity-80 max-w-md mx-auto mb-8">
              Edition 1 is limited. Grab your spot and become part of the community shaping how engineers work with AI.
            </p>
            
            <Link to="/ai-impact-contributors">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-paper text-flax border-paper hover:bg-ink hover:text-paper hover:border-ink shadow-[3px_3px_0px_0px_#18181B]"
              >
                Become a Contributor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const HomePage: React.FC = () => {
  return (
    <main className="bg-paper">
      <Hero />
      <CommunityWall />
      <WhyJoin />
      <CommunityQuote />
      <FinalCTA />
    </main>
  );
};
