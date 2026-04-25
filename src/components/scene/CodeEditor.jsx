import React, { useState, useEffect } from 'react';

const codeSnippet = `// middleware/authMiddleware.js
const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization
                     ?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ 
        message: "Unauthorized" 
      });
    }
    const decoded = jwt.verify(
      token, 
      process.env.JWT_SECRET
    );
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ 
      message: "Token expired" 
    });
  }
};`;

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
            }, 30);
          }, 3000);
        }
      }, 15); // Typing speed
    }, 1500);

    return () => {
      clearTimeout(startTyping);
      clearInterval(typingInterval);
    };
  }, []);

  const highlightCode = (code) => {
    if (!code) return '';

    // First replace html entities
    let highlighted = code
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // 1. Comments (gray, italic)
    highlighted = highlighted.replace(/(\/\/.*)/g, '<span style="color: #5C6370; font-style: italic;">$1</span>');

    // 2. Strings (green)
    highlighted = highlighted.replace(/(["'].*?["'])/g, '<span style="color: #98C379;">$1</span>');

    // 3. Keywords (orange)
    highlighted = highlighted.replace(/\b(const|async|try|catch|return|if)\b/g, '<span style="color: #E84C1E;">$1</span>');

    // 4. Functions (yellow)
    highlighted = highlighted.replace(/\b(verifyToken|verify|next)(?=\s*\()/g, '<span style="color: #E5C07B;">$1</span>');

    // 5. Properties (light blue)
    highlighted = highlighted.replace(/\.(headers|authorization|user|status|json|env|JWT_SECRET)\b/g, '.<span style="color: #61AFEF;">$1</span>');

    // 6. Numbers (orange)
    highlighted = highlighted.replace(/\b(\d+)\b/g, '<span style="color: #D19A66;">$1</span>');

    // 7. Base Objects (white)
    highlighted = highlighted.replace(/\b(jwt|process|req|res)\b/g, '<span style="color: #ABB2BF;">$1</span>');

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
          {[...Array(23)].map((_, i) => <div key={i}>{i + 1}</div>)}
        </div>
        <div style={codeAreaStyle}>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            <code style={{ color: '#ABB2BF' }} dangerouslySetInnerHTML={{ __html: highlightCode(typedText) }} />
            {isTyping && <span className="blinking-cursor" style={cursorStyle}>|</span>}
          </pre>
        </div>
      </div>
    </div>
  );
};

const editorContainerStyle = {
  width: '550px',
  height: '420px', // slightly taller to fit 23 lines
  background: '#1E1E1E', // standard vs code dark
  borderRadius: '8px',
  boxShadow: '0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px var(--glass-border), inset 0 1px 0 rgba(255,255,255,0.1)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transform: 'rotateY(-20deg) rotateX(5deg)',
  transformStyle: 'preserve-3d',
  position: 'relative',
  zIndex: 10,
  filter: 'drop-shadow(0 0 30px rgba(156, 220, 254, 0.15))',
};

const editorChromeStyle = {
  height: '36px',
  background: '#252526', // VS Code titlebar
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px',
  borderBottom: '1px solid #111',
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
  color: '#858585',
  fontSize: '0.8rem',
  fontFamily: 'sans-serif',
};

const editorBodyStyle = {
  display: 'flex',
  flex: 1,
  padding: '16px 0',
  fontFamily: "'Fira Code', 'Consolas', monospace",
  fontSize: '0.85rem',
  lineHeight: '1.5',
};

const lineNumbersStyle = {
  padding: '0 16px',
  color: '#858585', // dark gray
  textAlign: 'right',
  userSelect: 'none',
  minWidth: '40px',
};

const codeAreaStyle = {
  flex: 1,
  color: '#ABB2BF',
  position: 'relative',
  paddingRight: '16px',
};

const cursorStyle = {
  animation: 'blink 1s step-end infinite',
  fontWeight: 'bold',
  color: '#ABB2BF'
};

const cursorCss = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;
// Clean injection trick
if (typeof document !== 'undefined' && !document.getElementById('code-cursor-css')) {
  const style = document.createElement('style');
  style.id = 'code-cursor-css';
  style.textContent = cursorCss;
  document.head.appendChild(style);
}

export default CodeEditor;
