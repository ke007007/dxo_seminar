import React from 'react';
import { Section } from './Section';
import { Quote } from 'lucide-react';

export const Instructor: React.FC = () => {
  const members = [
    {
      name: "たなまゆ（田中 真由）",
      image: "https://watanabeshoten-llc.com/tmp/k/member1.png",
      role: "手放す経営ラボラトリー研究員",
      description: "大企業メーカーの人事、児童福祉企業での社内統括として、16年ほど一貫して人と組織に関する仕事に携わる。多くの人に出会う中で、「その人が持つ可能性を存分に発揮できるかどうか」は本人のスキルや能力だけではなく、環境やちょっとしたきっかけが大きいと感じる。その中で、武井浩三の著書「自然経営」をきっかけに、人を変えようとしないDXOに出会う。\n実際にDXOの導入現場で組織の仕組みを変えることで、人の本来の可能性が引き出される様を目の当たりにして感動し、手放す経営ラボラトリーにジョイン。現在は、企業でのDXO導入の伴走と共に、世の中にDXOを伝える活動を行っている。"
    },
    {
      name: "やすよ（政平 安世）",
      image: "https://watanabeshoten-llc.com/tmp/k/member2.png",
      role: "手放す経営ラボラトリー研究員 / 株式会社TKY代表取締役",
      description: "経営者の孤独と現場の痛みを、誰よりも知る伴走者。\n祖父、父、親戚の多くが経営者という家系に育ち、幼少期から経営の責任と孤独を肌で感じて過ごす。自身も25年にわたり経営の最前線に立ち続け、中小企業の役員としても、全員の同意に縛られる重圧や、人を変えようと奔走する苦悩を深く経験してきた。退任後、その葛藤を統合する中で辿り着いたのが「組織の問題は人ではなく、構造（OS）にある」というDXOの確信。\n現在は、経営者の隣に立つ伴走者として、人がいきいきと働ける自律分散型組織への移行をファシリテートしている。経営のDNAと現場の実践経験を糧に、あなたの「次の一歩」を心から応援している。"
    },
    {
      name: "ますえ（澤田 万寿江）",
      image: "https://watanabeshoten-llc.com/tmp/k/member3.png",
      role: "手放す経営ラボラトリー研究員",
      description: "IT、教育NPO、メーカーと様々な業種・職種を経験する中で「個人が幸せに働ける組織づくり」に関心を持つようになり、DXOに出会う。自分自身も幸せな働きかた・暮らしかたを模索しつつ、自律分散組織を探究中。"
    },
    {
      name: "けいた（高橋 啓太）",
      image: "https://watanabeshoten-llc.com/tmp/k/member4.png",
      role: "手放す経営ラボラトリー 研究員 / 株式会社ジャムセッションズ 共同代表",
      description: "ティール組織を実践しているIT企業での事業づくりや組織づくりを経て2024年2月に独立。業種、業態、規模を問わず、様々な組織づくりの実戦経験を活かし、自律分散型組織への移行支援やコミュニティづくりを行っている。"
    }
  ];

  return (
    <Section bg="white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
            
            {/* Desktop Image Column (Hidden on Mobile) */}
            <div className="hidden lg:block lg:col-span-5 relative order-2 lg:order-1">
                
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
                
                {/* Mobile Image (Visible only on Mobile, placed before Profile) */}
                <div className="block lg:hidden mb-12">
                     <div className="aspect-[3/4] bg-brand-light relative overflow-hidden shadow-xl transform rotate-1 max-w-[300px] mx-auto" style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
                        <img 
                        src="https://watanabeshoten-llc.com/tmp/k/nui.png" 
                        alt="乾 真人" 
                        className="w-full h-full object-cover"
                        />
                    </div>
                     <div className="mt-4 flex justify-between items-center border-b-2 border-brand-black/10 pb-2 border-dashed max-w-[300px] mx-auto">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-black font-hand">Facilitator</span>
                        <span className="text-[10px] font-mono text-brand-gray">DXO Team</span>
                    </div>
                </div>

                <div className="space-y-12">
                    
                    {/* Profile */}
                    <div className="bg-brand-light p-8 md:p-10 relative hand-drawn-box border border-brand-black/5">
                        <div className="absolute -top-3 left-10 bg-brand-yellow/30 px-3 py-1 text-[10px] font-bold font-hand transform -rotate-2">PROFILE</div>
                        <p className="text-brand-black/80 text-sm leading-loose font-medium text-justify font-feature-settings">
                            誰もが感情を表現できるテーマパークを作る夢を抱き、広告代理店で遊園地などの企画開発に従事。独立してオリジナル化粧品事業で資金調達を試みるも、詐欺などで人間不信に陥る。一時引きこもり、ネット販売で生計を立てる日々を送る。<br/><br/>
                            そんな中、書籍「ティール組織」で、誰もが自分の感情を解放して働ける組織があることに感銘を受け、自律分散的な組織のあり方を探求。現在は株式会社手放す経営ラボラトリーの取締役として、誰もが感情表現できる組織を作るプログラムDXO（ディクソー）を開発し、年間100以上のテーマパークのような組織作りを伴走している。
                        </p>
                    </div>

                    {/* Message */}
                    <div className="relative pl-6 md:pl-0">
                        <div className="hidden md:block absolute -left-12 top-0 text-brand-yellow/20">
                            <Quote size={60} fill="currentColor" className="transform rotate-180" />
                        </div>
                        
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
                            プログラム開発者からのメッセージ
                        </h3>
                        
                        <div className="bg-white border-l-4 border-brand-yellow pl-6 py-2">
                            <p className="text-brand-black/80 leading-[2.2] text-base font-medium font-feature-settings italic">
                                自律分散組織はメンバーの意識レベルなどは関係なく、組織構造を整えることで必ず実現できます。その構造をどんな会社でも活用できる「技術」に落とし込んだものがDXOです。「技術」は自転車に乗ることのように、頭で理解するよりも実際に体験する方が早く感覚がつかめますので、まずは気軽にご参加いただけると嬉しいです。
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/* DXO Team Section */}
        <div className="pt-16 md:pt-24 border-t border-brand-black/5 mt-12 md:mt-16">
            <div className="text-center mb-16">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gray mb-3 block font-hand">Support Member</span>
                <h3 className="text-2xl md:text-3xl font-black text-brand-black font-feature-settings mb-6">DXO運営チーム</h3>
                <p className="text-sm md:text-base text-brand-black/70 font-medium leading-loose max-w-2xl mx-auto font-feature-settings">
                    年間100本以上の「RINGOプロセス」を回し、現場の変容に立ち会ってきた専門チームが、参加者同士の響き合いをサポートします。
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {members.map((member, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-6 items-start group">
                         {/* Image */}
                         <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 mx-auto sm:mx-0">
                            <div className="w-full h-full bg-brand-light rounded-full overflow-hidden shadow-md border border-brand-black/5 relative group-hover:scale-105 transition-transform duration-300">
                                 <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        
                        {/* Text */}
                        <div className="text-left w-full">
                            <h4 className="text-base font-bold text-brand-black mb-1 font-feature-settings text-center sm:text-left">
                                {member.name}
                            </h4>
                            {member.role && (
                                <p className="text-[10px] text-brand-gray font-bold mb-3 uppercase tracking-wide text-center sm:text-left leading-tight">
                                    {member.role}
                                </p>
                            )}
                            {/* Empty p for spacing if no role, to align roughly if needed, though flex handles it */}
                            {!member.role && <div className="mb-3"></div>}

                            <p className="text-xs leading-loose text-brand-black/70 text-justify font-medium whitespace-pre-line">
                                {member.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </Section>
  );
};