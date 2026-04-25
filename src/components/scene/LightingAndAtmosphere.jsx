import React from 'react';

const LightingAndAtmosphere = () => {
  return (
    <>
      <div style={primaryGlowStyle}></div>
      <div style={secondaryGlowStyle}></div>
    </>
  );
};

const primaryGlowStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '600px',
  height: '600px',
  background: 'radial-gradient(circle, rgba(255, 90, 31, 0.15) 0%, rgba(20, 5, 2, 0) 70%)',
  filter: 'blur(60px)',
  zIndex: 0,
  pointerEvents: 'none',
  animation: 'pulse-glow 5s ease-in-out infinite alternate',
};

const secondaryGlowStyle = {
  position: 'absolute',
  top: '40%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  height: '400px',
  background: 'radial-gradient(circle, rgba(156, 220, 254, 0.08) 0%, transparent 70%)',
  filter: 'blur(40px)',
  zIndex: 0,
  pointerEvents: 'none',
};

const glowCss = `
  @keyframes pulse-glow {
    0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.8; }
    100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
  }
`;
document.head.insertAdjacentHTML('beforeend', `<style>${glowCss}</style>`);

export default LightingAndAtmosphere;
