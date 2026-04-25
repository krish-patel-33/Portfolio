import React from 'react';
import Navigation from './components/sections/Navigation';
import Hero from './components/sections/Hero';
import CursorManager from './components/effects/CursorManager';
import Metrics from './components/sections/Metrics';
import Experience from './components/sections/Experience';
import SelectedWork from './components/sections/SelectedWork';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

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
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
