import React, { useEffect, useState } from 'react';

const CursorManager = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [laggingPos, setLaggingPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;
    const render = () => {
      setLaggingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  return (
    <>
      <div 
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--accent-orange)',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          mixBlendMode: 'screen'
        }} 
      />
      <div 
        style={{
          position: 'fixed',
          top: laggingPos.y,
          left: laggingPos.x,
          width: '40px',
          height: '40px',
          border: '1px solid var(--accent-orange-glow)',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s',
          zIndex: 9998,
        }} 
      />
    </>
  );
};

export default CursorManager;
