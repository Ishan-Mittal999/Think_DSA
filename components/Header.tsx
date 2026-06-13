import React from 'react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setView(ViewState.HOME)}
        >
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            T
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            ThinkDSA
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => setView(ViewState.HOME)}
            className={`text-sm font-medium transition-colors ${currentView === ViewState.HOME ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
          >
            Home
          </button>
          <button 
            onClick={() => setView(ViewState.ABOUT)}
            className={`text-sm font-medium transition-colors ${currentView === ViewState.ABOUT ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
          >
            Mission
          </button>
          <button 
            onClick={() => setView(ViewState.TEAM)}
            className={`text-sm font-medium transition-colors ${currentView === ViewState.TEAM ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
          >
            Team
          </button>
        </nav>

        <button
          onClick={() => setView(ViewState.PLAYGROUND)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Start Learning
        </button>
      </div>
    </header>
  );
};

export default Header;
