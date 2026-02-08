import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-white overflow-hidden pt-24 md:pt-0">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-7 animate-fade-in order-2 lg:order-1">
             <div className="flex items-center space-x-4 mb-8">
                <span className="h-[2px] w-12 bg-brand-black rounded-full transform -rotate-1"></span>
                <span className="text-[12px] md:text-xs font-bold tracking-[0.2em] uppercase text-brand-gray font-hand">Premium Workshop</span>
             </div>
             
             {/* Main Title: Product Name */}
             <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-black text-brand-black leading-[1.05] mb-6 tracking-tight font-feature-settings relative">
               自律分散組織<br className="block md:hidden"/>
               1day体験会
             </h1>

             {/* Sub Title: Emotional Benefit */}
             <p className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-black/90 leading-tight mb-8 font-feature-settings lg:whitespace-nowrap relative z-10">
               <span className="relative inline-block mb-1 md:mb-0 mr-1">
                 <span className="relative z-10">「経営の手放し方」</span>
                 {/* Light yellow underline */}
                 <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-yellow/40 -z-10 -rotate-1 rounded-sm"></span>
               </span>
               を身体に刻む、<br className="md:hidden"/>
               社長のための6時間。
             </p>

             {/* Description: Logical Explanation */}
             <div className="mb-12 relative py-2">
               <p className="text-sm md:text-base text-brand-black/70 font-medium leading-loose text-justify font-feature-settings">
                 自律分散組織（DAO/ティール組織）は、理想論ではありません。<br className="hidden md:block"/>
                 それは、組織のOS（意志決定の仕組み）をアップデートすることで、<br className="hidden md:block"/>
                 どの組織にも実装可能な「技術」です。
               </p>
               <p className="text-sm md:text-base text-brand-black/70 font-medium leading-loose text-justify mt-4 font-feature-settings">
                 3万人が手にした自律分散型組織デザインプログラムDXOを開発した、<br className="hidden lg:block"/>
                 手放す経営ラボラトリーが提供する「自律分散の真髄」を、ワークショップで体感してください。
               </p>
             </div>

             <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
               {/* Updated CTA Button to Secondary (Yellow) for better visibility */}
               <div className="relative group">
                  <Button variant="secondary" onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-10 relative z-10">
                    自律分散の世界を体験する
                  </Button>
               </div>
             </div>
          </div>

          <div className="lg:col-span-5 relative order-1 lg:order-2 mb-8 lg:mb-0">
             {/* Organic Blob Shape Background */}
             <div className="absolute top-0 right-0 w-full h-full bg-brand-yellow/20 -z-10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] transform rotate-6 scale-110 animate-float"></div>
             
             {/* Organic Image Frame */}
             <div className="relative aspect-[4/5] bg-brand-light overflow-hidden shadow-2xl shadow-brand-black/5 transform -rotate-2 hover:rotate-0 transition-transform duration-700 ease-out" style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
                <img 
                  src="https://watanabeshoten-llc.com/tmp/k/firstview_2.jpeg" 
                  alt="Discussion" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent opacity-80"></div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};