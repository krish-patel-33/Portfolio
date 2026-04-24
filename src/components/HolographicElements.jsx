import React from 'react';

const HolographicElements = ({ tilt }) => {
  return (
    <>
      {/* 1. JWT Token - Top Center (Furthest Back) */}
      <div style={{ ...itemStyle, top: '-30px', left: '50%', transform: 'translateZ(-50px) translateX(-50%)', opacity: 0.6, animationDelay: '1.5s', zIndex: -1 }}>
        <div style={jwtTokenWrapper}>
          <div style={jwtLabelStyle}>JWT BEARER TOKEN</div>
          <div style={jwtTokenStyle}>
            eyJhbGciOiJIUzI1NiJ9.<br/>
            eyJ1c2VySWQiOiI2MGQ1.<br/>
            SflKxwRJSMeKKF2QT4fw...
          </div>
        </div>
      </div>

      {/* 2. Node.js Terminal - Mid Right (Slightly in front) */}
      <div style={{ ...itemStyle, top: '100px', right: '-160px', transform: 'translateZ(60px)', animationDelay: '0.5s' }}>
        <div style={nodeTerminalStyle}>
          <div style={nodeTerminalHeaderStyle}>bash - node server.js</div>
          <div style={nodeTerminalContentStyle}>
            <span style={{color: '#5C6370'}}>[nodemon] server restarting...</span><br/>
            <span style={{color: '#98C379'}}>✓</span> <span style={{color: '#ABB2BF'}}>Express running on port 5000</span><br/>
            <span style={{color: '#98C379'}}>✓</span> <span style={{color: '#ABB2BF'}}>MongoDB Connected: cluster0</span><br/>
            <span style={{color: '#98C379'}}>✓</span> <span style={{color: '#ABB2BF'}}>JWT middleware loaded</span><br/>
            <span style={{color: '#ABB2BF'}}>&gt; waiting for requests...</span>
            <span className="blink-terminal" style={{color: '#ABB2BF'}}>_</span>
          </div>
        </div>
      </div>

      {/* 3. MongoDB Document - Bottom Left (Most Forward) */}
      <div style={{ ...itemStyle, bottom: '-50px', left: '-50px', transform: 'translateZ(150px)', animationDelay: '1s' }}>
        <div style={mongoCardStyle}>
          <span style={{color: '#ABB2BF'}}>&#123;</span><br/>
          &nbsp;&nbsp;<span style={{color: '#61AFEF'}}>"_id"</span>: <span style={{color: '#98C379'}}>"60d5ecb..."</span>,<br/>
          &nbsp;&nbsp;<span style={{color: '#61AFEF'}}>"user"</span>: <span style={{color: '#98C379'}}>"Krish"</span>,<br/>
          &nbsp;&nbsp;<span style={{color: '#61AFEF'}}>"role"</span>: <span style={{color: '#98C379'}}>"admin"</span>,<br/>
          &nbsp;&nbsp;<span style={{color: '#61AFEF'}}>"stack"</span>: [<span style={{color: '#98C379'}}>"MERN"</span>],<br/>
          &nbsp;&nbsp;<span style={{color: '#61AFEF'}}>"verified"</span>: <span style={{color: '#D19A66'}}>true</span><br/>
          <span style={{color: '#ABB2BF'}}>&#125;</span>
        </div>
      </div>
    </>
  );
};

const itemStyle = {
  position: 'absolute',
  animation: 'float-antigravity 6s ease-in-out infinite alternate',
  filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
};

// Node Terminal Styles
const nodeTerminalStyle = {
  background: 'rgba(20, 20, 20, 0.95)',
  border: '1px solid #333',
  borderRadius: '6px',
  width: '240px',
  overflow: 'hidden',
  backdropFilter: 'blur(8px)',
  boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
};

const nodeTerminalHeaderStyle = {
  background: '#333',
  padding: '6px 10px',
  fontSize: '0.65rem',
  color: '#ABB2BF',
  fontFamily: 'monospace',
};

const nodeTerminalContentStyle = {
  padding: '10px',
  fontFamily: "'Fira Code', 'Consolas', monospace",
  fontSize: '0.65rem',
  lineHeight: '1.5',
};

// Mongo Card Styles
const mongoCardStyle = {
  background: '#1E1E1E', // VS code dark
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '8px',
  padding: '16px',
  fontFamily: "'Fira Code', 'Consolas', monospace",
  fontSize: '0.75rem',
  boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
  backdropFilter: 'blur(10px)',
  lineHeight: '1.4'
};

// JWT Token
const jwtTokenWrapper = {
  background: 'rgba(20, 20, 20, 0.6)',
  border: '1px solid rgba(232, 76, 30, 0.2)',
  borderRadius: '6px',
  padding: '12px',
  backdropFilter: 'blur(4px)',
};

const jwtLabelStyle = {
  fontSize: '0.6rem',
  color: '#E84C1E', // Orange
  fontWeight: 700,
  letterSpacing: '1px',
  marginBottom: '6px',
  textTransform: 'uppercase',
  textAlign: 'center'
};

const jwtTokenStyle = {
  fontFamily: "'Fira Code', 'Consolas', monospace",
  color: '#ABB2BF',
  fontSize: '0.75rem',
  letterSpacing: '1px',
  wordBreak: 'break-all',
  width: '130px',
  lineHeight: '1.3',
  opacity: 0.8,
  textAlign: 'center'
};

const styles = `
  @keyframes float-antigravity {
    0% { transform: translateY(0) translateZ(inherit) translateX(inherit); }
    100% { transform: translateY(-20px) translateZ(inherit) translateX(inherit); }
  }
  .blink-terminal {
    animation: blink 1s step-end infinite;
  }
`;

// Inject keyframes strictly if not present to avoid duplication leaks
if (typeof document !== 'undefined' && !document.getElementById('holo-animations-new')) {
  const styleTag = document.createElement('style');
  styleTag.id = 'holo-animations-new';
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);
}

export default HolographicElements;
