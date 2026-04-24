import React, { useState, useEffect } from 'react';

const codeSnippet = `import React from 'react';

const KrishPortfolio = () => {
  return (
    <div className="portfolio">
      <Header title="Krish Trambadiya" />
      <Stack techs={['MongoDB', 'Express', 'React', 'Node']} />
      <Experience years={2} role="Full Stack Developer" />
      <Projects count={10} featured="VirtueView" />
    </div>
  );
};

export default KrishPortfolio;`;

const CodeEditor = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    let typingInterval;
    
    // Start typing after initial load delay
    const startTyping = setTimeout(() => {
      typingInterval = setInterval(() => {
        if (i <= codeSnippet.length) {
          setTypedText(codeSnippet.slice(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          // Loop animation
          setTimeout(() => {
            setTypedText('');
            setIsTyping(true);
            i = 0;
            typingInterval = setInterval(() => {
               if (i <= codeSnippet.length) {
                setTypedText(codeSnippet.slice(0, i));
                i++;
               } else {
                 clearInterval(typingInterval);
                 setIsTyping(false);
               }
            }, 50);
          }, 3000);
        }
      }, 30); // Typing speed
    }, 1500);

    return () => {
      clearTimeout(startTyping);
      clearInterval(typingInterval);
    };
  }, []);

  // Simple syntax highlighting via regex replacements
  const highlightCode = (code) => {
    let highlighted = code
      // Keywords
      .replace(/\b(import|from|const|return|export default)\b/g, '<span style="color: var(--syntax-keyword)">$1</span>')
      // Component Names / Tags
      .replace(/(<\/?)([A-Z][a-zA-Z0-9]*)/g, '$1<span style="color: var(--syntax-tag)">$2</span>')
      .replace(/(<\/?)(div|span|p|a|h[1-6])/g, '$1<span style="color: var(--syntax-keyword)">$2</span>')
      // Strings
      .replace(/(['"].*?['"])/g, '<span style="color: var(--syntax-string)">$1</span>')
      // Attributes
      .replace(/(\s)([a-zA-Z\-]+)(=)/g, '$1<span style="color: var(--syntax-attr)">$2</span>$3');
      
    return highlighted;
  };

  return (
    <div style={editorContainerStyle}>
      {/* Window Chrome */}
      <div style={editorChromeStyle}>
        <div style={chromeDotsStyle}>
          <div style={{...dotStyle, background: '#FF5F56'}}></div>
          <div style={{...dotStyle, background: '#FFBD2E'}}></div>
          <div style={{...dotStyle, background: '#27C93F'}}></div>
        </div>
        <div style={chromeTitleStyle}>KrishPortfolio.jsx</div>
      </div>
      
      {/* Editor Content */}
      <div style={editorBodyStyle}>
        <div style={lineNumbersStyle}>
          {[...Array(14)].map((_, i) => <div key={i}>{i + 1}</div>)}
        </div>
        <div style={codeAreaStyle}>
          <pre style={{ margin: 0 }}>
            <code dangerouslySetInnerHTML={{ __html: highlightCode(typedText) }} />
            {isTyping && <span className="blinking-cursor" style={cursorStyle}>|</span>}
          </pre>
        </div>
      </div>
    </div>
  );
};

const editorContainerStyle = {
  width: '550px',
  height: '350px',
  background: 'var(--editor-bg)',
  borderRadius: '8px',
  boxShadow: '0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px var(--glass-border), inset 0 1px 0 rgba(255,255,255,0.1)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transform: 'rotateY(-20deg) rotateX(5deg)', // The dramatice angle
  transformStyle: 'preserve-3d',
  position: 'relative',
  zIndex: 10,
  // Cool blue-white light emission
  filter: 'drop-shadow(0 0 30px rgba(156, 220, 254, 0.15))',
};

const editorChromeStyle = {
  height: '36px',
  background: 'var(--editor-chrome)',
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px',
  borderBottom: '1px solid rgba(0,0,0,0.4)',
  position: 'relative',
};

const chromeDotsStyle = {
  display: 'flex',
  gap: '8px',
};

const dotStyle = {
  width: '12px',
  height: '12px',
  borderRadius: '50%',
};

const chromeTitleStyle = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  color: 'var(--text-muted)',
  fontSize: '0.8rem',
  fontFamily: 'sans-serif',
};

const editorBodyStyle = {
  display: 'flex',
  flex: 1,
  padding: '16px 0',
  fontFamily: "'Fira Code', 'Consolas', monospace",
  fontSize: '14px',
  lineHeight: '1.6',
};

const lineNumbersStyle = {
  padding: '0 16px',
  color: '#5a5a5a',
  textAlign: 'right',
  userSelect: 'none',
};

const codeAreaStyle = {
  flex: 1,
  color: 'var(--syntax-text)',
  position: 'relative',
};

const cursorStyle = {
  animation: 'blink 1s step-end infinite',
  fontWeight: 'bold',
  color: 'var(--syntax-text)'
};

const cursorCss = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;
document.head.insertAdjacentHTML('beforeend', `<style>${cursorCss}</style>`);

export default CodeEditor;
