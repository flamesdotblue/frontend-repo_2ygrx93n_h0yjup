import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TrustedBy from './components/TrustedBy';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0A0618] text-white">
      {/* Background base gradient to maintain dark futuristic palette across sections */}
      <div className="fixed inset-0 -z-0 bg-gradient-to-b from-[#0A0618] via-[#0A0618] to-[#150032]" />

      <main className="relative">
        <Hero />
        <Features />
        <TrustedBy />
        <FinalCTA />
      </main>

      <footer className="relative border-t border-white/10 py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Fanari Labs. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
