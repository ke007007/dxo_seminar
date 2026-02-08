import React from 'react';
import { Section } from './Section';

export const Instructor: React.FC = () => {
  return (
    <Section bg="white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 relative order-2 lg:order-1">
                
                {/* Organic Photo Frame */}
                <div className="aspect-[3/4] bg-brand-light relative overflow-hidden shadow-xl transform rotate-1" style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
                    <img 
                    src="https://watanabeshoten-llc.com/tmp/k/nui.png" 
                    alt="乾 真人" 
                    className="w-full h-full object-cover transition-all duration-1000 ease-in-out hover:scale-105"
                    />
                </div>

                <div className="mt-6 flex justify-between items-center border-b-2 border-brand-black/10 pb-4 border-dashed">
                    <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-brand-black font-hand">Facilitator</span>
                    <span className="text-[12px] font-mono text-brand-gray">DXO Team</span>
                </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="text-lg font-bold tracking-[0.2em] text-brand-gray uppercase mb-4 block font-hand">Instructor</span>
                <h2 className="text-4xl md:text-5xl font-black mb-3 font-feature-settings">乾 真人</h2>
                <p className="text-xs md:text-sm font-bold text-brand-gray mb-12 tracking-widest uppercase">Masato Inui / 手放す経営ラボラトリー</p>
                
                <div className="space-y-10">
                    <div>
                        <h3 className="text-lg font-bold mb-6 flex items-center">
                            {/* Hand drawn marker */}
                            <span className="w-8 h-[6px] bg-brand-yellow mr-4 rounded-full opacity-80" style={{borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'}}></span>
                            講師・運営
                        </h3>
                        <p className="text-brand-black/80 leading-[2] text-lg font-medium font-feature-settings">
                        年間100本以上の「RINGOプロセス」を回し、現場の変容に立ち会ってきた専門チームが、参加者同士の響き合いをサポートします。
                        </p>
                    </div>
                    
                    <div className="bg-brand-light p-8 md:p-10 relative hand-drawn-box border border-brand-black/5">
                        <div className="absolute -top-3 left-10 bg-brand-yellow/30 px-3 py-1 text-[10px] font-bold font-hand transform -rotate-2">PROFILE</div>
                        <p className="text-brand-black/70 text-sm leading-loose font-medium text-justify font-feature-settings">
                            手放す経営ラボラトリー DXO運営チーム。<br/>
                            進化型組織構築プログラム「DXO」の開発・普及に携わる。
                            組織のOSを書き換えるためのファシリテーションを専門とし、数多くの経営者の「手放す」プロセスに伴走している。
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};