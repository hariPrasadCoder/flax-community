import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Users, Lightbulb, Zap, MessageSquare, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  // Network animation - representing community connections
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }
    
    const nodes: Node[] = [];
    const nodeCount = 50;
    const centerX = width / 2;
    const centerY = height / 2;

    const initNodes = () => {
      nodes.length = 0;
      for (let i = 0; i < nodeCount; i++) {
        const angle = (Math.PI * 2 * i) / nodeCount + Math.random() * 0.5;
        const distance = 80 + Math.random() * 350;
        nodes.push({
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          vx: Math.cos(angle) * 0.15,
          vy: Math.sin(angle) * 0.15,
          radius: 2 + Math.random() * 3,
          alpha: 0.2 + Math.random() * 0.4,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw connections
      nodes.forEach((node, i) => {
        nodes.forEach((other, j) => {
          if (i >= j) return;
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(74, 66, 216, ${0.08 * (1 - dist / 180)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        if (node.x < 0 || node.x > width) node.vx *= -0.5;
        if (node.y < 0 || node.y > height) node.vy *= -0.5;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 66, 216, ${node.alpha})`;
        ctx.fill();
      });
      
      requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    initNodes();
    draw();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-background"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />

      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-50"
        style={{
          background: `radial-gradient(600px circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(74, 66, 216, 0.03), transparent 40%)`
        }}
      />

      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-blob opacity-30 mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-blob animation-delay-4000 opacity-20 mix-blend-screen" />

      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <Section className="pt-40 md:pt-48 pb-20 text-center z-20 relative">
        
        <div className="inline-flex items-center justify-center p-[1px] mb-8 overflow-hidden rounded-full relative group cursor-default opacity-0 animate-fade-in-up">
           <div className="inline-flex h-full w-full items-center justify-center rounded-full bg-surface/80 px-4 py-1.5 text-xs font-mono text-gray-400 backdrop-blur-sm border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse"></span>
              A community for builders, not followers
           </div>
        </div>

        <div className="relative mb-8 max-w-5xl mx-auto">
           <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight text-white leading-[1.1] md:leading-[1.05] opacity-0 animate-fade-in-up delay-100">
             Empowering Engineers
             <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600">
               in the AI Era
             </span>
           </h1>
        </div>

        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12 font-light leading-relaxed opacity-0 animate-fade-in-up delay-200">
          Real conversations with senior engineers about how they work, lead, and ship as AI becomes part of everyday engineering.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-300">
          <Link to="/ai-impact-contributors">
            <Button 
              className="h-14 px-10 text-base bg-white text-black hover:bg-gray-100 font-semibold"
            >
               Become a Contributor
            </Button>
          </Link>
          <Button 
            variant="outline"
            className="h-14 px-10 text-base"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
             Learn More
          </Button>
        </div>

      </Section>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-background relative border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
            AI is Changing How
            <br />
            <span className="text-gray-600">Engineers Work.</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mt-8 leading-relaxed">
            Build faster. Ship more. Collaborate differently. But the playbook hasn't been written yet. We're documenting it — one story at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
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
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-surface/30 border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 text-gray-500 group-hover:text-white group-hover:bg-white/10 transition-colors">
                <item.icon size={18} />
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="border-l-2 border-primary/50 pl-8 py-2">
          <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-2">
            The best engineers are adapting.
          </p>
          <p className="text-2xl md:text-3xl text-primary font-medium">
            We're capturing how.
          </p>
        </div>
      </div>
    </Section>
  );
};

const FeaturedCampaign: React.FC = () => {
  return (
    <Section className="bg-background relative">
      <div className="max-w-5xl mx-auto">
        
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface via-surface to-primary/5 p-8 md:p-12">
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-mono mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse"></span>
              Limited Edition • Only 25 Spots
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              AI Impact Contributors
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">
              A spotlight on senior Data/AI engineers shaping how teams work in the age of AI. Share your story. Get featured. Earn your badge.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {['Data Engineering', 'ML/AI Engineering', 'Analytics Engineering', 'Platform/Infra'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
            
            <Link to="/ai-impact-contributors">
              <Button showArrow className="bg-white text-black hover:bg-gray-100">
                Grab Your Spot
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
    <>
      <Hero />
      <About />
      <FeaturedCampaign />
    </>
  );
};
