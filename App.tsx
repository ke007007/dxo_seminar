import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { ProgramDetails } from './components/ProgramDetails';
import { Instructor } from './components/Instructor';
import { Overview } from './components/Overview';
import { NextSteps } from './components/NextSteps';
import { Closing } from './components/Closing';

function App() {
  return (
    <div className="bg-white min-h-screen text-brand-black font-sans antialiased selection:bg-brand-yellow selection:text-brand-black">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 h-16 flex justify-between items-center">
          <div className="font-bold tracking-tight text-lg">
            手放す経営ラボラトリー
          </div>
          <button 
            onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })} 
            className="text-xs font-bold bg-brand-yellow text-brand-black px-6 py-3 rounded-full hover:bg-[#E6C200] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            ENTRY
          </button>
        </div>
      </header>

      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <ProgramDetails />
        <Instructor />
        <Overview />
        <NextSteps />
        <Closing />
      </main>
      
      <footer className="bg-brand-black text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center md:text-left md:flex md:justify-between md:items-center">
          <div>
             <p className="font-bold text-lg mb-2">手放す経営ラボラトリー</p>
             <p className="text-xs text-gray-500">© 2024 TEBANASU LAB. All Rights Reserved.</p>
          </div>
          <div className="flex gap-6 mt-8 md:mt-0 justify-center md:justify-end">
             <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">運営会社</a>
             <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">お問い合わせ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;