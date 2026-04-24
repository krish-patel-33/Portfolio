import React from 'react';

const Navigation = () => {
  return (
    <nav style={navStyle}>
      <div style={brandContainerStyle}>
        <div style={badgeStyle}>
          <span style={dotStyle}></span> SYSTEM ONLINE
        </div>
        <h1 style={brandStyle}>
          <span style={{ color: '#E84C1E', marginRight: '8px' }}>●</span>
          KRISH TRAMBADIYA
        </h1>
      </div>
      <div style={linksContainerStyle}>
        <a href="#work" style={linkStyle}>WORK</a>
        <a href="#tech" style={linkStyle}>TECH STACK</a>
        <a href="#experience" style={linkStyle}>EXPERIENCE</a>
        <a href="#contact" style={linkStyle}>LET'S CONNECT</a>
        <a href="/Resume_Krish_Trambadiya.pdf" download target="_blank" rel="noreferrer" style={resumeButtonStyle}>RESUME</a>
      </div>
    </nav>
  );
};

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  padding: '40px 60px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  zIndex: 100,
};

const brandContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const badgeStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '0.75rem',
  letterSpacing: '2px',
  color: 'var(--text-muted)',
  fontFamily: 'monospace',
};

const dotStyle = {
  width: '6px',
  height: '6px',
  backgroundColor: '#22c55e',
  borderRadius: '50%',
  boxShadow: '0 0 10px #22c55e',
  animation: 'pulse 2s infinite',
};

const brandStyle = {
  fontSize: '1.3rem',
  fontWeight: 600,
  letterSpacing: '0.15em',
  color: '#FFFFFF',
  textShadow: '0 0 20px rgba(0,0,0,0.8)',
};

const linksContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '32px',
};

const linkStyle = {
  color: 'var(--text-light)',
  textDecoration: 'none',
  fontSize: '0.85rem',
  fontWeight: 600,
  letterSpacing: '1px',
  transition: 'color 0.3s',
};

const resumeButtonStyle = {
  textDecoration: 'none',
  background: 'transparent',
  border: '2px solid var(--accent-orange)',
  color: 'var(--accent-orange)',
  padding: '10px 24px',
  fontSize: '0.85rem',
  fontWeight: 700,
  letterSpacing: '1px',
  cursor: 'pointer',
  borderRadius: '2px',
  transition: 'all 0.3s',
};

// Add keyframes inline or in css
const pulseAnimation = `
@keyframes pulse {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}
`;

document.head.insertAdjacentHTML('beforeend', `<style>${pulseAnimation}</style>`);

export default Navigation;
