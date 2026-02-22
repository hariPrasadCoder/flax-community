import React from 'react';

// Simple hand-drawn style person outline - like Notion's illustrations
export const PersonOutline: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 60 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Head */}
    <circle cx="30" cy="18" r="12" />
    {/* Body */}
    <path d="M30 30 L30 60" />
    {/* Arms */}
    <path d="M30 40 L15 55" />
    <path d="M30 40 L45 55" />
    {/* Legs */}
    <path d="M30 60 L20 85" />
    <path d="M30 60 L40 85" />
  </svg>
);

// Person waving - friendly gesture
export const PersonWaving: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 70 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Head */}
    <circle cx="30" cy="18" r="12" />
    {/* Body */}
    <path d="M30 30 L30 60" />
    {/* Left arm down */}
    <path d="M30 40 L15 55" />
    {/* Right arm waving up */}
    <path d="M30 40 L50 25" />
    {/* Hand wave lines */}
    <path d="M52 20 L58 18" opacity="0.5" />
    <path d="M54 25 L60 25" opacity="0.5" />
    {/* Legs */}
    <path d="M30 60 L20 85" />
    <path d="M30 60 L40 85" />
  </svg>
);

// Group of 3 people - community feel
export const PeopleGroup: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 140 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Person 1 - left */}
    <g opacity="0.6">
      <circle cx="25" cy="25" r="10" />
      <path d="M25 35 L25 60" />
      <path d="M25 45 L15 55" />
      <path d="M25 45 L35 55" />
      <path d="M25 60 L18 80" />
      <path d="M25 60 L32 80" />
    </g>
    
    {/* Person 2 - center (larger, foreground) */}
    <g>
      <circle cx="70" cy="20" r="12" />
      <path d="M70 32 L70 62" />
      <path d="M70 42 L55 55" />
      <path d="M70 42 L85 55" />
      <path d="M70 62 L60 85" />
      <path d="M70 62 L80 85" />
    </g>
    
    {/* Person 3 - right */}
    <g opacity="0.6">
      <circle cx="115" cy="25" r="10" />
      <path d="M115 35 L115 60" />
      <path d="M115 45 L105 55" />
      <path d="M115 45 L125 55" />
      <path d="M115 60 L108 80" />
      <path d="M115 60 L122 80" />
    </g>
  </svg>
);

// Person with laptop - working engineer
export const PersonWorking: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Head */}
    <circle cx="40" cy="15" r="10" />
    {/* Body sitting */}
    <path d="M40 25 L40 50" />
    {/* Arms reaching to laptop */}
    <path d="M40 35 L25 45 L25 50" />
    <path d="M40 35 L55 45 L55 50" />
    {/* Laptop */}
    <rect x="20" y="50" width="40" height="5" rx="1" />
    <path d="M25 50 L30 40 L50 40 L55 50" />
    {/* Legs */}
    <path d="M40 50 L30 70 L30 85" />
    <path d="M40 50 L50 70 L50 85" />
  </svg>
);

// Two people talking - conversation
export const PeopleTalking: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Person 1 */}
    <g>
      <circle cx="30" cy="22" r="11" />
      <path d="M30 33 L30 60" />
      <path d="M30 42 L18 52" />
      <path d="M30 42 L45 38" /> {/* Arm pointing to other person */}
      <path d="M30 60 L22 82" />
      <path d="M30 60 L38 82" />
    </g>
    
    {/* Person 2 */}
    <g>
      <circle cx="90" cy="22" r="11" />
      <path d="M90 33 L90 60" />
      <path d="M90 42 L75 38" /> {/* Arm pointing back */}
      <path d="M90 42 L102 52" />
      <path d="M90 60 L82 82" />
      <path d="M90 60 L98 82" />
    </g>
    
    {/* Speech/conversation lines between them */}
    <g opacity="0.4">
      <path d="M48 30 L52 28" />
      <path d="M55 32 L60 30" />
      <path d="M65 28 L70 30" />
    </g>
  </svg>
);
