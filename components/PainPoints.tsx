import React from 'react';
import { Section } from './Section';

export const PainPoints: React.FC = () => {
  return (
    <Section bg="light" id="painpoints">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
        <div className="md:col-span-5">
          <div>
            <span className="text-lg font-bold tracking-[0.2em] text-brand-gray uppercase mb-6 block font-hand transform -rotate-2">The Struggle</span>
            <div className="relative">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.2] mb-10 font-feature-settings text-brand-black relative z-10">
                「このままの組織で、<br className="md:hidden"/>
                大丈夫だろうか？」
                </h2>
            </div>
            
            {/* Sticky Note Style */}
            <div className="bg-white p-6 shadow-lg transform rotate-1 border border-gray-100 hand-drawn-box relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-brand-yellow/20 rotate-1"></div>
                <p className="text-brand-gray leading-loose font-medium text-lg font-feature-settings">
                変化の大きい現代。<br/>
                今後、これまでの組織運営では、うまく行かないのではないか？<br/><br/>
                デジタル・AI化も進み、若手社員の考え方もひと昔前とは違ってきている現代。<br/>
                そんな中で「今のやり方でこの先10年、やっていけるのか？」<br/>
                そう感じている、経営者・リーダー、組織の皆さんへ。
                </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-16">
          {[
            {
              title: "あらゆる「正解」を試してきた",
              desc: "経営やマネジメント手法を学び、ビジネス書を読み、これまで世間で「正解」と言われてきたものを片っ端から試してきて、でもしっくりきていない。"
            },
            {
              title: "業績は悪くない、でも「重い」",
              desc: "数字は安定している。社員もみんな真面目に働いている。でも、組織のどこかに「詰まり」を感じる。もっと一人ひとりの可能性を活かして、動けるのでは？"
            },
            {
              title: "「いい会社」という仮面の下の閉塞感",
              desc: "外から見れば、問題のない組織かもしれない。\nけれど、社員は本当に幸せなのだろうか？ 自ら意志を持って働いているのだろうか？"
            }
          ].map((item, index) => (
            <div key={index} className="group border-t-2 border-brand-black/5 pt-8 hover:border-brand-black/20 transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-6 md:items-start">
                <span className="text-3xl font-bold text-brand-black/20 font-hand mt-1 transform -rotate-6 inline-block">#{index + 1}</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-6 text-brand-black font-feature-settings group-hover:text-brand-tealDark transition-colors duration-300">
                    <span className="relative inline-block">
                        <span className="relative z-10">{item.title}</span>
                        {/* Marker Effect - Fixed: Removed negative z-index, adjusted opacity/height */}
                        <span className="absolute bottom-1 left-0 w-full h-4 bg-brand-yellow/60 -rotate-1 rounded-sm pointer-events-none"></span>
                    </span>
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
          悪いのは、経営者やリーダーの能力でも、<br className="md:hidden"/>社員の意識でもありません。
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