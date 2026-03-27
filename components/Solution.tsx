import React from 'react';
import { Section } from './Section';
import { Apple } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <Section bg="white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-24 items-start">
           <div>
              <span className="text-lg font-bold tracking-[0.2em] text-brand-tealDark uppercase mb-6 block font-hand">The Solution</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] font-feature-settings relative">
                「組織OSを入れ替える」<br className="md:hidden"/>という発想
                {/* Hand drawn scribble */}
                <svg className="absolute bottom-0 right-0 w-32 h-12 text-brand-yellow -z-10 opacity-50" viewBox="0 0 100 50">
                   <path d="M0,25 Q25,0 50,25 T100,25" fill="none" stroke="currentColor" strokeWidth="10" opacity="0.5" strokeLinecap="round" />
                </svg>
              </h2>
           </div>
           <div className="pt-4 relative">
              {/* Hand drawn quote mark */}
              <span className="absolute -top-8 -left-8 text-6xl text-brand-gray/10 font-serif">“</span>
              <p className="text-brand-black/80 leading-[2.2] text-lg font-medium text-justify font-feature-settings">
                多くの組織改革が失敗するのは、古いOS（ピラミッド型）の上に新しいアプリ（制度）を載せようとするからかもしれません。<br/><br/>
                本ワークショップでは、誰か一人に重圧のかかる経営ではなく「みんなで進む」組織へ移行する具体的プロセスが体験できます。また「手法」の学習だけではなく、まだ見ぬ「自律分散の世界観」に手触り感を持てるようになります。
              </p>
           </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          
          {/* Hand drawn arrow connecting the two */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
             <svg width="100" height="50" viewBox="0 0 100 50">
                <path d="M0,25 Q50,0 90,20" fill="none" stroke="#1d1d1f" strokeWidth="3" markerEnd="url(#arrowhead)" strokeDasharray="6,4" />
                <defs>
                   <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#1d1d1f" />
                   </marker>
                </defs>
             </svg>
          </div>

          {/* OLD */}
          <div className="p-12 md:p-16 flex flex-col items-center justify-center bg-brand-light border-2 border-brand-black/10 relative overflow-hidden group hand-drawn-box transform rotate-1 transition-transform hover:rotate-0">
            <div className="absolute top-6 left-6 text-[12px] font-bold tracking-[0.2em] text-brand-gray uppercase font-hand">Legacy Model</div>
            <div className="w-48 h-48 mb-12 relative opacity-60 group-hover:opacity-100 transition-opacity duration-500">
               <svg viewBox="0 0 100 100" className="w-full h-full text-brand-gray/50">
                  <path d="M50 15 L85 85 L15 85 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="50" cy="35" r="3" fill="currentColor" />
                  <line x1="50" y1="40" x2="50" y2="85" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="35" cy="75" r="2.5" fill="currentColor" />
                  <circle cx="65" cy="75" r="2.5" fill="currentColor" />
                  {/* Apps stacked on top */}
                  <rect x="45" y="5" width="10" height="4" fill="currentColor" opacity="0.5" />
                  <rect x="42" y="0" width="16" height="4" fill="currentColor" opacity="0.3" />
               </svg>
            </div>
            
            <h3 className="text-2xl font-black mb-4">ピラミッド型OS</h3>
            <p className="text-sm text-brand-gray text-center leading-loose font-medium">
              管理と統制。責任の集中。<br/>
              上にアプリ（制度）を足しても重くなるだけ。
            </p>
          </div>

          {/* NEW */}
          <div className="p-12 md:p-16 bg-brand-black text-white flex flex-col items-center justify-center relative shadow-2xl z-10 overflow-hidden hand-drawn-box transform -rotate-1 transition-transform hover:rotate-0 border-2 border-brand-black">
            <div className="absolute top-6 left-6 text-[12px] font-bold tracking-[0.2em] text-brand-yellow uppercase font-hand">Updated Model</div>
            <div className="w-48 h-48 mb-12 relative">
               <svg viewBox="0 0 100 100" className="w-full h-full text-white animate-[spin_60s_linear_infinite]">
                  <circle cx="50" cy="50" r="30" fill="none" stroke="#FFD500" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="50" cy="20" r="4" fill="white" />
                  <circle cx="76" cy="35" r="4" fill="white" />
                  <circle cx="76" cy="65" r="4" fill="white" />
                  <circle cx="50" cy="80" r="4" fill="white" />
                  <circle cx="24" cy="65" r="4" fill="white" />
                  <circle cx="24" cy="35" r="4" fill="white" />
                  <path d="M50 20 L76 35 L76 65 L50 80 L24 65 L24 35 Z" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
               </svg>
               {/* Center Apple Icon */}
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-brand-yellow animate-pulse">
                  <Apple size={28} fill="#FFD500" />
               </div>
            </div>
            
            <h3 className="text-2xl font-black mb-4 text-white flex items-center gap-2">
                自律分散型OS
                <span className="text-brand-yellow text-xs font-hand border border-brand-yellow rounded-full px-2 py-0.5 transform -rotate-6">Enjoy!</span>
            </h3>
            <p className="text-sm text-white/70 text-center leading-loose font-medium">
              経営の重圧を「みんな化」する。<br/>
              生命体のような躍動。
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
};