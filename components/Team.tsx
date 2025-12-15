import React from 'react';
import { TeamMember } from '../types';

const Team: React.FC = () => {
  const team: TeamMember[] = [
    { name: 'Ishan Mittal', role: 'CSE - 18', rollNo: '2400320100538' },
    { name: 'Krishna Singhal', role: 'CSE - 18', rollNo: '2400320100622' },
    { name: 'Krish Srivastava', role: 'CSE - 18', rollNo: '2400320100613' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-2">Meet the Minds</h2>
        <p className="text-slate-600">MiniProject / 3rd Semester / BCS554</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {team.map((member, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-24 h-24 mx-auto bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-6">
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
            <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
            <div className="text-sm text-slate-500 bg-slate-50 py-2 rounded-lg">
              Roll No: {member.rollNo}
            </div>
          </div>
        ))}
      </div>

       <div className="mt-20 text-center text-slate-400 text-sm">
        <p>Built with React, Tailwind CSS, and Google Gemini API</p>
        <p className="mt-2">ABES Engineering College</p>
      </div>
    </div>
  );
};

export default Team;