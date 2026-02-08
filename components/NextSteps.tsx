import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { MessageCircle, GraduationCap } from 'lucide-react';

export const NextSteps: React.FC = () => {
  return (
    <Section bg="white">
      <div className="border-t border-brand-black/10 pt-24 max-w-6xl mx-auto">
         <h2 className="text-2xl md:text-3xl font-black mb-16 text-center tracking-tight font-feature-settings">参加後の未来</h2>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Consultation Card */}
            <div className="relative group bg-white rounded-3xl p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-black/5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-brand-black/20 transition-all duration-500 overflow-hidden flex flex-col">
               {/* Decorative Icon Background */}
               <div className="absolute -right-6 -top-6 text-brand-yellow/10 transform rotate-12 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700">
                  <MessageCircle size={180} strokeWidth={1.5} />
               </div>
               
               <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                     <span className="text-[10px] font-bold tracking-[0.2em] text-brand-black uppercase bg-brand-yellow px-3 py-1 rounded-full">Consultation</span>
                     <span className="h-[1px] w-8 bg-brand-black/10"></span>
                  </div>
                  
                  <h3 className="text-2xl font-black mb-4 font-feature-settings flex items-center gap-3">
                     自律分散個別相談会
                  </h3>
                  
                  <p className="text-sm md:text-base text-brand-black/70 mb-10 leading-[1.8] flex-grow text-justify font-medium">
                     ワークショップ体験後、希望者には乾 真人による「30分個別無料相談」を実施。現状分析、自律分散への移行のヒント、自社のOS入れ替えの可能性を共に探ります。
                  </p>
                  
                  <Button variant="outline" className="text-sm w-full py-5 border-brand-black/10 hover:bg-brand-black hover:text-white hover:border-brand-black">相談会について</Button>
               </div>
            </div>

            {/* Advanced Card */}
            <div className="relative group bg-white rounded-3xl p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-black/5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-brand-black/20 transition-all duration-500 overflow-hidden flex flex-col">
               {/* Decorative Icon Background */}
               <div className="absolute -right-6 -top-6 text-brand-gray/5 transform -rotate-12 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700">
                  <GraduationCap size={200} strokeWidth={1.5} />
               </div>

               <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                     <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase bg-brand-black px-3 py-1 rounded-full">Advanced</span>
                     <span className="h-[1px] w-8 bg-brand-black/10"></span>
                  </div>

                  <h3 className="text-2xl font-black mb-4 font-feature-settings">
                     さらに深く学びたい方へ
                  </h3>
                  
                  <p className="text-sm md:text-base text-brand-black/70 mb-10 leading-[1.8] flex-grow text-justify font-medium">
                     次のステップとして、自社への導入スケジュールやファシリテーションを具体的に学ぶ「自律分散組織デザイン講座」への道も用意されています。
                     <span className="block mt-2 text-xs text-brand-gray">※DXOを活用して、社長自身が自社に導入できるまでの具体的な流れを学習します。</span>
                  </p>
                  
                  <Button variant="outline" className="text-sm w-full py-5 border-brand-black/10 hover:bg-brand-black hover:text-white hover:border-brand-black">講座詳細へ</Button>
               </div>
            </div>

         </div>
      </div>
    </Section>
  );
};