import React from 'react';
import { Section } from './Section';

export const PainPoints: React.FC = () => {
  return (
    <Section bg="light" id="painpoints">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
        <div className="md:col-span-5">
          <div className="sticky top-32">
            <span className="text-lg font-bold tracking-[0.2em] text-brand-gray uppercase mb-6 block font-hand transform -rotate-2">The Struggle</span>
            <div className="relative">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.2] mb-10 font-feature-settings text-brand-black relative z-10">
                「あらゆる方法を試したけれど、<br className="md:hidden"/>
                何かが違う」
                </h2>
            </div>
            
            {/* Sticky Note Style */}
            <div className="bg-white p-6 shadow-lg transform rotate-1 border border-gray-100 hand-drawn-box relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-brand-yellow/20 rotate-1"></div>
                <p className="text-brand-gray leading-loose font-medium text-lg font-feature-settings">
                そう感じているあなたへ。<br/><br/>
                特に先代から組織を引き継いだ<br className="hidden md:block"/>
                2代目・3代目経営者の皆様は、<br className="hidden md:block"/>
                人一倍の責任感で組織に<br className="hidden md:block"/>
                向き合ってこられたはずです。
                </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-16">
          {[
            {
              title: "あらゆる「正解」を試してきた",
              desc: "有名な経営塾に通い、最新の評価制度を導入し、1on1や心理的安全性も学んだ。先代が築いた基盤を守りつつ、さらに進化させようと必死に「打ち手」を繰り出してきた。"
            },
            {
              title: "業績は悪くない、でも「重い」",
              desc: "数字は安定している。社員も真面目に働いてくれている。しかし、組織のどこかに「詰まり」を感じ、自分が指示を出さないと物事が停滞してしまう。結局、自分が一番働いているのではないか？という疑問が消えない。"
            },
            {
              title: "「いい会社」という仮面の下の閉塞感",
              desc: "外から見れば問題のない組織。けれど、社員が本当に幸せそうか、自ら意志を持って躍動しているか、と問われると胸を張れない。このままの延長線上に、自分の理想とする未来があるのか見えない。"
            }
          ].map((item, index) => (
            <div key={index} className="group border-t-2 border-brand-black/5 pt-8 hover:border-brand-black/20 transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-6 md:items-start">
                <span className="text-3xl font-bold text-brand-black/20 font-hand mt-1 transform -rotate-6 inline-block">#{index + 1}</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-6 text-brand-black font-feature-settings group-hover:text-brand-tealDark transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-brand-black/70 leading-[2] text-sm md:text-base text-justify font-medium font-feature-settings">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 pt-20 border-t border-brand-black/5 text-center max-w-4xl mx-auto relative">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 font-feature-settings leading-snug relative z-10">
          悪いのは、あなたの能力でも、<br className="md:hidden"/>社員の意識でもありません。
        </h3>
        
        <p className="text-base md:text-lg leading-loose font-medium text-brand-gray mb-12 max-w-2xl mx-auto">
          今の世界観の中で頑張れば頑張るほど、<br className="md:hidden"/>従来の「管理型OS（構造）」が限界を露呈し、<br className="md:hidden"/>あなたの時間と精神を奪っているだけなのです。
        </p>

        {/* Hand drawn arrow pointing down */}
        <div className="flex justify-center mb-8">
            <svg width="40" height="60" viewBox="0 0 40 60" className="text-brand-black opacity-50 animate-bounce">
                <path d="M20,0 Q25,30 20,50 M10,40 Q20,50 20,50 Q20,50 30,40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
        </div>

        <div className="inline-block px-8 py-5 md:px-12 md:py-6 bg-white shadow-xl transform hover:-translate-y-1 transition-transform duration-300 relative group hand-drawn-box border-2 border-brand-black">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-yellow/10 hand-drawn-box -z-10 transform translate-x-2 translate-y-2"></div>
            <p className="font-bold text-brand-black text-sm md:text-base tracking-wide font-feature-settings">
                この「行き詰まり」は、<br className="md:hidden"/>組織を生命体へとアップデートするための、<br className="md:hidden"/>重要なサインかもしれません。
            </p>
            {/* Hand drawn sparkle */}
            <svg className="absolute -top-6 -right-6 w-12 h-12 text-brand-yellow animate-wiggle" viewBox="0 0 50 50">
                <path d="M25,2 L29,18 L46,18 L32,28 L37,44 L25,34 L13,44 L18,28 L4,18 L21,18 Z" fill="#FFD500" stroke="none" />
            </svg>
        </div>
      </div>
    </Section>
  );
};