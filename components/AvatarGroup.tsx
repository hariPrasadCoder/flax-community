import React from 'react';

interface AvatarGroupProps {
  count?: number;
  size?: 'sm' | 'md' | 'lg';
  showPlus?: boolean;
  className?: string;
}

// Generates placeholder avatar with initials
const Avatar: React.FC<{ index: number; size: 'sm' | 'md' | 'lg' }> = ({ index, size }) => {
  const initials = ['AK', 'SJ', 'MP', 'RK', 'LT', 'NB', 'CM', 'DW', 'EV', 'JH', 'KS', 'YZ'];
  const colors = [
    'bg-flax', 'bg-ink', 'bg-flax-light', 'bg-ink/80', 'bg-flax/80',
    'bg-ink/60', 'bg-flax-light/80', 'bg-ink/70', 'bg-flax/70'
  ];
  
  const sizeClasses = {
    sm: 'w-8 h-8 text-[10px]',
    md: 'w-10 h-10 text-xs',
    lg: 'w-12 h-12 text-sm',
  };

  return (
    <div 
      className={`${sizeClasses[size]} ${colors[index % colors.length]} rounded-full flex items-center justify-center text-paper font-mono font-semibold border-2 border-paper`}
    >
      {initials[index % initials.length]}
    </div>
  );
};

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ 
  count = 5, 
  size = 'md', 
  showPlus = true,
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-[10px]',
    md: 'w-10 h-10 text-xs',
    lg: 'w-12 h-12 text-sm',
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex -space-x-3">
        {[...Array(count)].map((_, i) => (
          <Avatar key={i} index={i} size={size} />
        ))}
        {showPlus && (
          <div className={`${sizeClasses[size]} bg-flax-muted text-flax rounded-full flex items-center justify-center font-mono font-semibold border-2 border-paper`}>
            +
          </div>
        )}
      </div>
    </div>
  );
};

// Animated connection lines between nodes
export const CommunityNetwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg className={`w-full h-full ${className}`} viewBox="0 0 400 300" fill="none">
      {/* Connection lines */}
      <g stroke="#453DC8" strokeWidth="1" opacity="0.3">
        <line x1="100" y1="80" x2="200" y2="150" className="animate-pulse" />
        <line x1="200" y1="150" x2="300" y2="100" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <line x1="200" y1="150" x2="150" y2="220" className="animate-pulse" style={{ animationDelay: '1s' }} />
        <line x1="200" y1="150" x2="280" y2="230" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
        <line x1="100" y1="80" x2="50" y2="150" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
        <line x1="300" y1="100" x2="350" y2="180" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
      </g>
      
      {/* Nodes (people) */}
      <g>
        {/* Center node - larger */}
        <circle cx="200" cy="150" r="20" fill="#453DC8" />
        <text x="200" y="155" textAnchor="middle" fill="white" fontSize="12" fontFamily="monospace">You</text>
        
        {/* Surrounding nodes */}
        <circle cx="100" cy="80" r="14" fill="#18181B" />
        <circle cx="300" cy="100" r="14" fill="#18181B" />
        <circle cx="150" cy="220" r="14" fill="#6B63E8" />
        <circle cx="280" cy="230" r="14" fill="#18181B" />
        <circle cx="50" cy="150" r="12" fill="#6B63E8" opacity="0.7" />
        <circle cx="350" cy="180" r="12" fill="#453DC8" opacity="0.7" />
      </g>
    </svg>
  );
};

// Scrolling avatar marquee
export const AvatarMarquee: React.FC = () => {
  const avatars = [...Array(12)].map((_, i) => i);
  
  return (
    <div className="overflow-hidden py-4">
      <div className="flex animate-marquee space-x-4">
        {[...avatars, ...avatars].map((i, idx) => (
          <Avatar key={idx} index={i} size="lg" />
        ))}
      </div>
    </div>
  );
};
