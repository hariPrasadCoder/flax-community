import React from 'react';

// Human silhouette SVG avatar
const HumanAvatar: React.FC<{ color: string; isPlaceholder?: boolean }> = ({ color, isPlaceholder }) => (
  <div className={`w-20 h-20 rounded-full flex-shrink-0 border-4 border-paper shadow-lg overflow-hidden ${isPlaceholder ? 'border-dashed border-flax/40' : ''} ${color}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Head */}
      <circle cx="50" cy="35" r="18" fill="currentColor" className="text-paper/90" />
      {/* Body/Shoulders */}
      <ellipse cx="50" cy="85" rx="32" ry="28" fill="currentColor" className="text-paper/90" />
    </svg>
  </div>
);

const avatars = [
  { color: 'bg-flax', isPlaceholder: false },
  { color: 'bg-ink', isPlaceholder: false },
  { color: 'bg-flax-light', isPlaceholder: false },
  { color: 'bg-ink/80', isPlaceholder: false },
  { color: 'bg-flax', isPlaceholder: false },
  { color: 'bg-ink', isPlaceholder: false },
  { color: 'bg-flax-light', isPlaceholder: false },
  { color: 'bg-ink/80', isPlaceholder: false },
  { color: 'bg-flax', isPlaceholder: false },
  { color: 'bg-ink', isPlaceholder: false },
  { color: 'bg-flax-light', isPlaceholder: false },
  { color: 'bg-ink/80', isPlaceholder: false },
  { color: 'bg-flax/30', isPlaceholder: true },
  { color: 'bg-flax/30', isPlaceholder: true },
  { color: 'bg-flax/30', isPlaceholder: true },
];

export const AvatarMarquee: React.FC = () => {
  // Double for seamless loop
  const allAvatars = [...avatars, ...avatars];
  
  return (
    <div className="relative w-full overflow-hidden py-8 bg-flax-muted/30">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-flax-muted/30 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-flax-muted/30 to-transparent z-10 pointer-events-none"></div>
      
      {/* Marquee track */}
      <div className="flex gap-6 animate-marquee">
        {allAvatars.map((avatar, i) => (
          <HumanAvatar key={i} color={avatar.color} isPlaceholder={avatar.isPlaceholder} />
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
