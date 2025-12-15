import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">The AI Shortcut Trap</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          We are redefining how students interact with AI to foster genuine learning rather than dependency.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold text-indigo-900 mb-6">Why ThinkDSA?</h3>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-slate-900">Weakened Logical Reasoning</h4>
                <p className="text-slate-600">Heavy reliance on direct code generation bypasses the critical process of structured thinking.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-slate-900">Poor Algorithmic Thinking</h4>
                <p className="text-slate-600">Students may get the right answer, but skip developing essential long-term problem-solving ability.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl">
          <img 
            src="https://picsum.photos/600/400" 
            alt="Cognitive Learning Illustration" 
            className="rounded-2xl shadow-lg mix-blend-overlay opacity-80"
          />
        </div>
      </div>

      <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white text-center">
        <h3 className="text-3xl font-bold mb-8">Project Objectives</h3>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <div className="text-indigo-400 mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Problem Analysis</h4>
            <p className="text-slate-400 text-sm">Help learners analyze complex problems and build robust approaches before writing code.</p>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <div className="text-purple-400 mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Adaptive Reasoning</h4>
            <p className="text-slate-400 text-sm">Provide AI-generated hints that encourage deep logical reasoning without giving away the answer.</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <div className="text-blue-400 mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Platform Integration</h4>
            <p className="text-slate-400 text-sm">Integrate reasoning-based learning directly into workflow to enhance educational value.</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <div className="text-green-400 mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Community Strategy</h4>
            <p className="text-slate-400 text-sm">Foster a community for users to share strategies and create a knowledge base.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
