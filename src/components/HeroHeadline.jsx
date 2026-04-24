import React, { useEffect, useState } from 'react';
import { ArrowRight, Code } from 'lucide-react';

const HeroHeadline = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={headlineStyle}>
        <div style={getStaggerStyle(loaded, 0)}>Building</div>
        <div style={{ ...getStaggerStyle(loaded, 1), color: 'var(--accent-orange)' }}>Digital</div>
        <div style={getStaggerStyle(loaded, 2)}>Experiences.</div>
      </h1>
      
      <p style={{...subtextStyle, ...getStaggerStyle(loaded, 3)}}>
        MERN Stack Developer architecting scalable, high-performance web applications.
      </p>

      <div style={{...buttonsContainerStyle, ...getStaggerStyle(loaded, 4)}}>
        <button style={primaryButtonStyle}>
          Explore Work <ArrowRight size={18} />
        </button>
        <a href="https://github.com/krish-patel-33" target="_blank" rel="noreferrer" style={secondaryButtonStyle}>
          View GitHub <Code size={18} />
        </a>
      </div>
    </div>
  );
};

const getStaggerStyle = (loaded, index) => ({
  opacity: loaded ? 1 : 0,
  transform: loaded ? 'translateY(0)' : 'translateY(40px)',
  filter: loaded ? 'blur(0)' : 'blur(10px)',
  transition: `all 0.8s cubic-bezier(0.25, 1, 0.5, 1) ${index * 0.1}s`,
});

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  zIndex: 10,
};

const headlineStyle = {
  fontSize: 'clamp(4rem, 8vw, 7rem)', // Massive, commands the left half
  fontWeight: 900,
  lineHeight: '1.05',
  letterSpacing: '-2px',
  display: 'flex',
  flexDirection: 'column',
};

const subtextStyle = {
  fontSize: '1.2rem',
  color: 'var(--text-muted)',
  maxWidth: '80%',
  lineHeight: '1.6',
  fontWeight: 300,
  letterSpacing: '0.5px',
};

const buttonsContainerStyle = {
  display: 'flex',
  gap: '20px',
  marginTop: '10px',
};

const primaryButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  background: 'var(--accent-orange)',
  color: '#fff',
  border: 'none',
  padding: '16px 32px',
  fontSize: '1rem',
  fontWeight: 700,
  borderRadius: '2px',
  cursor: 'pointer',
  transition: 'all 0.3s',
  boxShadow: '0 10px 30px rgba(255, 90, 31, 0.3)',
};

const secondaryButtonStyle = {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  background: 'transparent',
  color: 'var(--text-light)',
  border: '1px solid var(--glass-border)',
  padding: '16px 32px',
  fontSize: '1rem',
  fontWeight: 600,
  borderRadius: '2px',
  cursor: 'pointer',
  transition: 'all 0.3s',
};

// Add raw CSS for button hovers since style objects don't support pseudo-classes simply
const css = `
  button:hover { transform: translateY(-3px); }
  button:active { transform: translateY(0); }
`;
document.head.insertAdjacentHTML('beforeend', `<style>${css}</style>`);

export default HeroHeadline;
