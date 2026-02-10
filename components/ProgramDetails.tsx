import React from 'react';
import { Section } from './Section';

export const ProgramDetails: React.FC = () => {
  return (
    <Section bg="light">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 text-center">
           <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gray mb-6 block">Curriculum</span>
           <h2 className="text-3xl md:text-4xl font-black font-feature-settings">講座の構成</h2>
        </div>

        <div className="relative">
           {/* Vertical Line for Desktop */}
           <div className="hidden md:block absolute left-[26%] top-0 bottom-0 w-[1px] bg-brand-black/10"></div>

           {[
              {
                 step: "01",
                 category: "事前学習",
                 title: "動画1時間×1本",
                 desc: "「進化型組織の前提条件」と「つくり方」を事前にインプット。当日の体験を最大化します。"
              },
              {
                 step: "02",
                 category: "本番ワークショップ",
                 title: "5時間（体験型）",
                 desc: "「RINGOプロセス」の徹底体験。「社長が決めない」のに、現場の意志と助言で組織が動き出す。その時、組織に何が起きるのか？ 従来の意志決定との違いを肌で感じます。",
                 highlight: true
              },
              {
                 step: "03",
                 category: "事後学習",
                 title: "動画1時間×1本",
                 desc: "体験を自社の日常にどう落とし込むか。具体的な導入ステップを解説します。"
              }
           ].map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row mb-12 md:mb-0 ${item.highlight ? 'z-10' : ''}`}>
                 
                 {/* Step Number Column */}
                 <div className="md:w-[26%] md:pr-12 md:text-right mb-4 md:mb-0 relative">
                    <span className="text-[10px] font-bold tracking-[0.1em] text-brand-gray block mb-1">STEP</span>
                    <span className={`text-4xl font-black font-mono ${item.highlight ? 'text-brand-yellow' : 'text-brand-black/20'}`}>0{index + 1}</span>
                    
                    {/* Dot on Line */}
                    <div className={`hidden md:block absolute right-[-5px] top-[2rem] w-[9px] h-[9px] rounded-full border-2 border-brand-light ${item.highlight ? 'bg-brand-yellow scale-125' : 'bg-brand-gray'}`}></div>
                 </div>

                 {/* Content Column */}
                 <div className={`md:w-[74%] md:pl-12 ${item.highlight ? '' : ''}`}>
                    <div className={`h-full p-8 md:p-10 rounded-2xl transition-all duration-300 ${item.highlight ? 'bg-white shadow-xl shadow-brand-black/5 scale-[1.02]' : 'bg-transparent border border-transparent hover:border-brand-black/5'}`}>
                        <span className={`inline-block text-[10px] font-bold px-3 py-1 mb-5 rounded-full tracking-wide ${item.highlight ? 'bg-brand-yellow text-brand-black' : 'bg-brand-black text-white'}`}>
                           {item.category}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-5 font-feature-settings">{item.title}</h3>
                        <p className="text-brand-black/70 leading-[1.8] text-sm md:text-base text-justify font-feature-settings">
                           {item.desc}
                        </p>
                    </div>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </Section>
  );
};