import React from 'react';
import { Section } from './Section';
import { Apple } from 'lucide-react';

export const Overview: React.FC = () => {
  return (
    <Section bg="light" id="overview">
      <div className="max-w-4xl mx-auto space-y-24">
        
        {/* 開催概要 Block - No longer tilted */}
        <div>
            <div className="bg-white shadow-xl shadow-brand-black/5 overflow-hidden border border-brand-black/5 rounded-2xl relative z-10">
            <div className="p-10 md:p-12 border-b-2 border-dashed border-brand-black/10 bg-brand-black text-white relative">
                <span className="text-[12px] font-bold tracking-[0.2em] text-white/50 uppercase mb-4 block text-center font-hand">Outline</span>
                <h2 className="text-2xl md:text-3xl font-black text-center font-feature-settings">開催概要</h2>
                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-brand-yellow/30 rotate-2 opacity-80 backdrop-blur-sm"></div>
            </div>

            <div className="divide-y divide-brand-black/5">
                {[
                    { label: "開催形式", value: "オンライン（Zoom）" },
                    { 
                    label: "開催時期", 
                    value: (
                        <div className="flex flex-col space-y-3 py-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                            <span className="font-bold min-w-[120px]">Aチーム日程：4月5日（日）</span>
                            <span>13:00-18:00</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                            <span className="font-bold min-w-[120px]">Bチーム日程：4月18日（土）</span>
                            <span>10:00-16:00 <span className="text-xs font-normal text-brand-gray ml-1">※昼休憩含む</span></span>
                            </div>
                        </div>
                    ) 
                    },
                    { label: "時間", value: "5時間 ※昼休憩含む場合は6時間" },
                    { label: "動画", value: "1時間×2本" },
                    { label: "定員", value: "6名/チーム" },
                    { label: "対象者", value: "経営者・自律分散組織を体感したい方" },
                ].map((row, i) => (
                    <div key={i} className="flex flex-col md:flex-row px-8 md:px-16 py-6 md:py-8 hover:bg-brand-light transition-colors duration-200 group">
                    <div className="w-full md:w-1/3 text-xs font-bold text-brand-gray tracking-[0.15em] uppercase mb-2 md:mb-0 pt-1 group-hover:text-brand-black transition-colors">{row.label}</div>
                    <div className="w-full md:w-2/3 text-base font-bold text-brand-black font-feature-settings leading-relaxed">{row.value}</div>
                    </div>
                ))}
                
                <div className="flex flex-col md:flex-row px-8 md:px-16 py-10 bg-brand-yellow/5 items-center relative">
                    <div className="w-full md:w-1/3 text-xs font-bold text-brand-black tracking-[0.15em] uppercase mb-2 md:mb-0">価格</div>
                    <div className="w-full md:w-2/3 flex items-baseline relative z-10">
                    <span className="text-4xl font-black tracking-tight text-brand-black relative">
                        38,500
                        {/* Hand drawn highlight positioned inside */}
                        <svg className="absolute bottom-1 -left-2 w-[120%] h-8 -z-10 pointer-events-none" viewBox="0 0 200 60" preserveAspectRatio="none">
                            <path d="M0,50 Q100,60 200,50" fill="none" stroke="#FFD500" strokeWidth="20" opacity="0.4" strokeLinecap="round" />
                        </svg>
                    </span>
                    <span className="text-sm font-bold ml-3 text-brand-black/70">円（税込）</span>
                    </div>
                </div>
            </div>
            </div>
            {/* Annotation moved outside */}
            <div className="mt-4 px-4 text-xs text-brand-gray text-center font-medium opacity-80">
               ※ワークショップは定員6名（お申込み先着順）で、最低必要人数4名が集まったら開催決定となります
            </div>
        </div>

        {/* 参加にあたってのお願い Block */}
        <div>
             <div className="text-center mb-10 relative">
                <span className="bg-brand-black text-white text-[10px] font-bold px-4 py-1 rounded-full tracking-widest uppercase shadow-md relative z-10">Requirements</span>
                <h3 className="text-xl md:text-2xl font-black mt-6 text-brand-black font-feature-settings">
                   参加にあたってのお願い
                </h3>
             </div>
             
             <div className="grid gap-4">
                {[
                    "RINGO100本植樹プロジェクトにご参加いただいた方は、内容が重複しますのでご参加いただけません。",
                    "過去に開催されたDXOワークショップ体験会の内容が凝縮されたものになっていますのでご了承ください。",
                    <span key="req1">体験会は参加型ワークショップのため、体験ではなくDXOの内容を知りたい方は<a href="https://tebanasu-lab-5649989.hs-sites-na2.com/dxoinstaller-0-0-0-0-0" target="_blank" rel="noopener noreferrer" className="text-brand-teal underline hover:text-brand-tealDark mx-1">こちらの動画</a>をご利用ください</span>,
                    "全時間に参加できる（5時間を通じ体感できるプログラムのため、途中参加・途中退室はできません）",
                    "パソコン（安定したWi-Fi環境）で参加できる\n（オンラインホワイトボードを利用して進行しますのでスマホやタブレット端末での参加は不可となります）",
                    "参加者とのコミュニケーションがとれる方\n（知識を得るための講義や研修ではありません、体験の場なので顔を出して対話が必要となります）（教える、教えられるの関係ではなく一緒に体験の場を作るという意識でご参加下さい）"
                ].map((content, idx) => (
                    <div key={idx} className="flex items-start gap-5 p-6 md:p-8 bg-white hand-drawn-box border border-brand-black/5 hover:border-brand-black/30 transition-all duration-300 shadow-sm hover:shadow-md group">
                        <div className="mt-1 flex-shrink-0 text-brand-black group-hover:scale-110 transition-transform duration-300">
                            {/* Apple Checkbox Icon */}
                            <div className="w-8 h-8 flex items-center justify-center text-brand-yellow">
                                <Apple size={22} fill="#FFD500" className="drop-shadow-sm" />
                            </div>
                        </div>
                        <p className="text-sm md:text-base font-medium leading-loose text-brand-black/80 whitespace-pre-wrap">{content}</p>
                    </div>
                ))}
             </div>
        </div>

        {/* 体験会の様子 Block */}
        <div>
             <div className="text-center mb-10">
                <span className="bg-brand-black text-white text-[10px] font-bold px-4 py-1 rounded-full tracking-widest uppercase shadow-md">Atmosphere</span>
                <h3 className="text-xl md:text-2xl font-black mt-6 text-brand-black font-feature-settings">
                   体験会の様子
                </h3>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4">
                {/* Image 1 with Tape */}
                <div className="aspect-video bg-gray-100 shadow-lg relative group transform -rotate-2 hover:rotate-0 transition-all duration-500">
                   {/* Tape */}
                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-white/40 rotate-1 shadow-sm z-10 backdrop-blur-sm border border-white/20"></div>
                   <div className="p-2 bg-white h-full w-full">
                        <img 
                            src="https://watanabeshoten-llc.com/tmp/k/ws4.jpg" 
                            alt="Workshop Scene 1" 
                            className="w-full h-full object-cover transition-all duration-700" 
                        />
                   </div>
                </div>
                {/* Image 2 with Tape */}
                <div className="aspect-video bg-gray-100 shadow-lg relative group transform rotate-2 hover:rotate-0 transition-all duration-500">
                   {/* Tape */}
                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-white/40 -rotate-1 shadow-sm z-10 backdrop-blur-sm border border-white/20"></div>
                   <div className="p-2 bg-white h-full w-full">
                        <img 
                            src="https://watanabeshoten-llc.com/tmp/k/ws3.png" 
                            alt="Workshop Scene 2" 
                            className="w-full h-full object-cover transition-all duration-700" 
                        />
                   </div>
                </div>
             </div>
        </div>

      </div>
    </Section>
  );
};