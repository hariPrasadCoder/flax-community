import React from 'react';

const placeholderAvatars = [
  { initials: 'JK', color: 'bg-flax' },
  { initials: 'SM', color: 'bg-ink' },
  { initials: 'AR', color: 'bg-flax-light' },
  { initials: 'PL', color: 'bg-ink/80' },
  { initials: 'MK', color: 'bg-flax' },
  { initials: 'TS', color: 'bg-ink' },
  { initials: 'RJ', color: 'bg-flax-light' },
  { initials: 'NP', color: 'bg-ink/80' },
  { initials: 'KW', color: 'bg-flax' },
  { initials: 'AL', color: 'bg-ink' },
  { initials: 'DM', color: 'bg-flax-light' },
  { initials: 'YS', color: 'bg-ink/80' },
  { initials: '?', color: 'bg-flax/50' },
  { initials: '?', color: 'bg-flax/50' },
  { initials: '?', color: 'bg-flax/50' },
];

const Avatar: React.FC<{ initials: string; color: string; size?: 'md' | 'lg' }> = ({ 
  initials, 
  color, 
  size = 'lg' 
}) => {
  const sizeClasses = size === 'lg' ? 'w-20 h-20 text-2xl' : 'w-14 h-14 text-lg';
  const isPlaceholder = initials === '?';
  
  return (
    <div 
      className={`${sizeClasses} ${color} rounded-full flex items-center justify-center font-mono font-bold text-paper flex-shrink-0 border-4 border-paper shadow-lg ${isPlaceholder ? 'border-dashed border-flax/40' : ''}`}
    >
      {initials}
    </div>
  );
};

export const AvatarMarquee: React.FC = () => {
  // Double the avatars for seamless loop
  const avatars = [...placeholderAvatars, ...placeholderAvatars];
  
  return (
    <div className="relative w-full overflow-hidden py-8 bg-flax-muted/30">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-flax-muted/30 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-flax-muted/30 to-transparent z-10 pointer-events-none"></div>
      
      {/* Marquee track */}
      <div className="flex gap-6 animate-marquee">
        {avatars.map((avatar, i) => (
          <Avatar key={i} initials={avatar.initials} color={avatar.color} />
        ))}
      </div>
      
      {/* Label */}
      <div className="text-center mt-6">
        <span className="font-mono text-xs uppercase tracking-widest text-ink/50">
          12 Featured • 13 Spots Remaining
        </span>
      </div>
    </div>
  );
};
