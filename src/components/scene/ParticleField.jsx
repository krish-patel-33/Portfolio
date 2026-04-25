import React, { useMemo } from 'react';

const ParticleField = () => {
  // Generate random particles once
  const particles = useMemo(() => {
    const chars = ['{', '}', '=>', ';', '</', '()', '[]'];
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      char: chars[Math.floor(Math.random() * chars.length)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${15 + Math.random() * 20}s`,
      animationDelay: `-${Math.random() * 20}s`,
      opacity: 0.1 + Math.random() * 0.3,
      fontSize: `${0.6 + Math.random() * 0.8}rem`,
      translateZ: `${-200 + Math.random() * 400}px`, // Depth distribution
    }));
  }, []);

  return (
    <div style={containerStyle}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            ...particleStyle,
            left: p.left,
            top: p.top,
            opacity: p.opacity,
            fontSize: p.fontSize,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            transform: `translateZ(${p.translateZ})`,
          }}
        >
          {p.char}
        </div>
      ))}
    </div>
  );
};

const containerStyle = {
  position: 'absolute',
  inset: '-20%', // Make it larger than container so particles flow smoothly in and out
  pointerEvents: 'none',
  transformStyle: 'preserve-3d',
  zIndex: 0,
};

const particleStyle = {
  position: 'absolute',
  color: 'var(--accent-orange)',
  fontFamily: 'monospace',
  animationName: 'drift-up',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
};

const driftCss = `
  @keyframes drift-up {
    0% { transform: translateY(100vh) rotate(0deg); }
    100% { transform: translateY(-100vh) rotate(360deg); }
  }
`;

document.head.insertAdjacentHTML('beforeend', `<style>${driftCss}</style>`);

export default ParticleField;
