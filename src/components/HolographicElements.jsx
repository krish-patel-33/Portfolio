import React from 'react';

const HolographicElements = ({ tilt }) => {
  return (
    <>
      {/* React Logo - Top Right */}
      <div style={{ ...itemStyle, top: '-50px', right: '-80px', transform: 'translateZ(100px)' }}>
        <div style={reactLogoContainerStyle}>
          <div style={reactCoreStyle}></div>
          <div style={{ ...reactEllipseStyle, transform: 'rotate(0deg)' }}></div>
          <div style={{ ...reactEllipseStyle, transform: 'rotate(60deg)' }}></div>
          <div style={{ ...reactEllipseStyle, transform: 'rotate(120deg)' }}></div>
        </div>
      </div>

      {/* Node.js Terminal - Mid Right */}
      <div style={{ ...itemStyle, top: '150px', right: '-120px', transform: 'translateZ(50px)', animationDelay: '0.5s' }}>
        <div style={nodeTerminalStyle}>
          <div style={nodeTerminalHeaderStyle}>node server.js</div>
          <div style={nodeTerminalContentStyle}>
            &gt; Server running on port 5000<br/>
            &gt; MongoDB Connected...<br/>
            <span className="blink-terminal">_</span>
          </div>
        </div>
      </div>

      {/* MongoDB Document - Bottom Center */}
      <div style={{ ...itemStyle, bottom: '-80px', left: '100px', transform: 'translateZ(150px)', animationDelay: '1s' }}>
        <div style={mongoCardStyle}>
          <span style={{color: '#E06C75'}}>&#123;</span><br/>
          &nbsp;&nbsp;<span style={{color: '#98C379'}}>"_id"</span>: <span style={{color: '#D19A66'}}>"60d5ecb..."</span>,<br/>
          &nbsp;&nbsp;<span style={{color: '#98C379'}}>"name"</span>: <span style={{color: '#98C379'}}>"Krish"</span>,<br/>
          &nbsp;&nbsp;<span style={{color: '#98C379'}}>"stack"</span>: [<span style={{color: '#98C379'}}>"MERN"</span>]<br/>
          <span style={{color: '#E06C75'}}>&#125;</span>
        </div>
      </div>

      {/* JWT Token - Mid Left */}
      <div style={{ ...itemStyle, top: '100px', left: '-150px', transform: 'translateZ(80px)', animationDelay: '1.5s', opacity: 0.6 }}>
        <div style={jwtTokenStyle}>
          eyJhbGciOiJIUzI1NiIsInR5c...
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

// React Logo Styles
const reactLogoContainerStyle = {
  width: '80px',
  height: '80px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: 'spin 15s linear infinite',
};

const reactCoreStyle = {
  width: '16px',
  height: '16px',
  backgroundColor: '#61DAFB',
  borderRadius: '50%',
  boxShadow: '0 0 15px #61DAFB',
};

const reactEllipseStyle = {
  position: 'absolute',
  width: '100%',
  height: '35%',
  border: '2px solid #61DAFB',
  borderRadius: '50%',
  boxShadow: 'inset 0 0 10px rgba(97,218,251,0.2), 0 0 10px rgba(97,218,251,0.2)',
};

// Node Terminal Styles
const nodeTerminalStyle = {
  background: 'rgba(20, 20, 20, 0.8)',
  border: '1px solid #333',
  borderRadius: '4px',
  width: '180px',
  overflow: 'hidden',
  backdropFilter: 'blur(5px)',
};

const nodeTerminalHeaderStyle = {
  background: '#333',
  padding: '4px 8px',
  fontSize: '0.6rem',
  color: '#aaa',
  fontFamily: 'monospace',
};

const nodeTerminalContentStyle = {
  padding: '8px',
  color: '#22c55e',
  fontFamily: 'monospace',
  fontSize: '0.65rem',
  lineHeight: '1.4',
};

// Mongo Card Styles
const mongoCardStyle = {
  background: 'rgba(30, 30, 30, 0.9)',
  border: '1px solid rgba(80, 200, 120, 0.3)',
  borderRadius: '8px',
  padding: '12px',
  fontFamily: 'monospace',
  fontSize: '0.75rem',
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  backdropFilter: 'blur(10px)',
};

// JWT Token
const jwtTokenStyle = {
  fontFamily: 'monospace',
  color: '#A09E9C',
  fontSize: '0.8rem',
  letterSpacing: '1px',
  wordBreak: 'break-all',
  width: '100px',
  lineHeight: '1.2',
  textShadow: '0 0 5px rgba(255,255,255,0.2)',
};

const styles = `
  @keyframes float-antigravity {
    0% { transform: translateY(0) translateZ(inherit); }
    100% { transform: translateY(-20px) translateZ(inherit); }
  }
  @keyframes spin {
    100% { transform: rotate(360deg); }
  }
  .blink-terminal {
    animation: blink 1s step-end infinite;
  }
`;

document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);

export default HolographicElements;
