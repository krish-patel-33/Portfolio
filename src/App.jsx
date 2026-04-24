import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CursorManager from './components/CursorManager';
import Metrics from './components/Metrics';
import Experience from './components/Experience';
import SelectedWork from './components/SelectedWork';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CursorManager />
      <Navigation />
      <main style={{ position: 'relative', overflowX: 'hidden' }}>
        <Hero />
        
        {/* Scroll Content that layers over the Hero section when scrolling down */}
        <div style={{ position: 'relative', zIndex: 10, background: 'var(--bg-dark)' }}>
          <Metrics />
          <Experience />
          <SelectedWork />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
