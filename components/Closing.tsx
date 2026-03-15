import React from 'react';
import { Section } from './Section';
import { Button } from './Button';

export const Closing: React.FC = () => {
  return (
    <Section bg="dark" className="text-center">
        <div className="max-w-4xl mx-auto py-16 md:py-32">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-16 leading-tight tracking-tight font-feature-settings text-white relative inline-block">
                自律分散の世界を、<br/>
                ちょっと覗いてみませんか？
                {/* Hand drawn eyes looking */}
                <div className="absolute -top-12 -right-8 md:-right-12 hidden md:flex gap-2 opacity-60 transform rotate-12">
                    <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-100"></div>
                    <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
                </div>
            </h2>
            
            <div className="bg-white/5 p-8 md:p-16 mb-16 text-left border border-white/10 backdrop-blur-sm shadow-2xl rounded-3xl">
                <p className="text-base md:text-lg text-gray-300 leading-[2] mb-10 font-medium font-feature-settings">
                    このワークショップは、<br className="md:hidden"/>あなたの人生を賭けた「大決断」を迫る場ではありません。<br/><br/>
                    まずは5時間、これまで当たり前だと思っていた「管理」の手を少しだけ緩めてみて、<br className="hidden md:block"/>
                    組織の中にどんな変化が起きるのかを試してみる「体験の入り口」です。
                </p>
                
                <div className="py-8 space-y-6 font-bold text-white text-lg md:text-xl border-t border-b border-white/10 my-10 bg-white/5 -mx-8 md:-mx-16 px-8 md:px-16">
                    <p className="font-feature-settings">「社長が決めないほうが、<br className="md:hidden"/>思った以上の結果を出せるかもしれない」</p>
                    <p className="font-feature-settings">「情報を開示してもハレーションを起こさず、<br className="md:hidden"/>なんとかする方法をみんなで考え始めるかもしれない」</p>
                </div>

                <p className="text-base md:text-lg text-gray-300 leading-[2] mb-8 font-medium font-feature-settings">
                    そんな、これまでの経営常識では信じられないような「新しい可能性」を、肌で感じてみてください。<br/><br/>
                    たった1日の体験が、あなたの肩に乗った重圧を「みんなの意志」へと昇華させ、<br className="hidden md:block"/>
                    組織が自律した生命体のように動き出す一歩になります。
                </p>

                <p className="text-base md:text-lg text-gray-300 leading-[2] font-medium font-feature-settings">
                    あなたが現場にいなくても、メンバーが喜びを持って躍動し、共に成長していく。<br/>
                    そんな「執着から解放された経営」への扉は、すでに目の前に開かれています。
                </p>
                
                <p className="text-brand-yellow font-bold mt-12 text-center text-xl tracking-widest font-hand">
                    まずは気軽に、その手触りを感じに来てください。
                </p>
            </div>

            <div className="flex flex-col items-center relative">
                
                <Button variant="secondary" className="w-full md:w-auto px-16 py-6 text-xl shadow-[0_0_30px_rgba(255,213,0,0.3)] hover:shadow-[0_0_50px_rgba(255,213,0,0.5)] transition-all duration-500 whitespace-normal rounded-full transform hover:scale-105" onClick={() => window.location.href = 'https://share-na2.hsforms.com/1UjhNY43cTzuJ0VCfFJN2sg3d3k5'}>
                    <span className="font-black tracking-wider">自律分散の世界を体験する</span>
                    <span className="block text-xs font-normal mt-1 opacity-80 md:hidden">（お申し込みはこちら）</span>
                </Button>
                <span className="hidden md:block text-[12px] font-bold text-gray-400 mt-6 tracking-[0.3em] uppercase opacity-50 font-hand">Application Form</span>
            </div>
        </div>
    </Section>
  );
};