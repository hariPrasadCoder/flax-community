import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getCalApi } from "@calcom/embed-react";
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AIImpactContributors } from './pages/AIImpactContributors';

function App() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "flax-community", origin: "https://app.cal.com" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-white overflow-x-hidden">
        <Navbar />
        <main className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ai-impact-contributors" element={<AIImpactContributors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
