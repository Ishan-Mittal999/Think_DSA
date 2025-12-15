import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DSAPlayground from './components/DSAPlayground';
import About from './components/About';
import Team from './components/Team';
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <>
            <Hero setView={setCurrentView} />
            <div className="py-20 bg-white">
              <About />
            </div>
          </>
        );
      case ViewState.PLAYGROUND:
        return <DSAPlayground />;
      case ViewState.ABOUT:
        return <About />;
      case ViewState.TEAM:
        return <Team />;
      default:
        return <Hero setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header currentView={currentView} setView={setCurrentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      
      {currentView !== ViewState.PLAYGROUND && (
        <footer className="bg-slate-900 text-slate-400 py-8 text-center border-t border-slate-800">
           <div className="container mx-auto px-4">
             <div className="flex justify-center items-center gap-2 mb-4">
               <span className="font-bold text-white text-lg">ThinkDSA</span>
               <span className="text-slate-600">|</span>
               <span className="text-sm">3rd Semester Project</span>
             </div>
             <p className="text-xs">&copy; {new Date().getFullYear()} ThinkDSA Team. All rights reserved.</p>
           </div>
        </footer>
      )}
    </div>
  );
}

export default App;