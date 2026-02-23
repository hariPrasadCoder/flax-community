import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AIImpactContributors } from './pages/AIImpactContributors';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-paper text-ink font-serif selection:bg-ink selection:text-paper">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-impact-contributors" element={<AIImpactContributors />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
