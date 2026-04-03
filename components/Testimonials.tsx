import React from 'react';
import { Section } from './Section';

const mainTestimonials = [
  {
    initial: 'K',
    industry: '設計業',
    company: 'メトロ設計株式会社',
    name: 'K.A. 様',
    body: '意思を表明、意見を述べる場では孤独に感じることが多いですが、応援や要望、意見を受け止めることで全員で一つのものをブラッシュアップしていく過程があり一体感を感じられると思いました。',
  },
  {
    initial: 'K',
    industry: 'サービス業',
    company: '日本スクールコーチ協会',
    name: 'K.T. 様',
    body: '対話したからと言っていい結論が出るとは限らない、であるならば…と言う視点に立ったメソッドで大変おもしろかったです。\nみんなで時間をかけて対話をした結果、角が取れた結論になることを回避できる方法だなと感じました！\nものすごくおもしろかったです！',
  },
  {
    initial: 'K',
    industry: '製造業',
    company: '日本シーム株式会社',
    name: 'K.Y. 様',
    body: 'RINGOプロセスを体験することによって、意思決定のプロセスが何なのか理解できて感動した。体験を通して、メンバーからの出てくる意見の質の違いがはっきり分かった。\n海外では必ず"I"や"We"など、代名詞を必ず使って会話するので、とても大事な部分だと思った。',
  },
  {
    initial: 'T',
    industry: 'IT・通信業',
    company: '株式会社SMSデータテック',
    name: 'T.M. 様',
    body: '企業経営をするなかで、進化型 OS の考え方に近い意思決定方法を用いるシーンはあったが、今回、いくつかの意思決定方法を比べ、そして進化型 OS のプロセスを知ったことによって、活用シーンは増えるだろうと感じた。',
  },
  {
    initial: 'ま',
    industry: '流通業',
    company: 'オークスハート株式会社',
    name: 'まあちゃん 様',
    body: '立案をし、皆で意見を出し合うスタンスがより良い物を作り出す体験ができ、今後の会議にも取り入れて行けたらと感じます。',
  },
  {
    initial: 'ち',
    industry: '飲食業',
    company: '（株）サンポーギフ',
    name: 'ちるる 様',
    body: '従来の意志決定とはまた違って今後柔軟な考え方をするためにも必要なプロセスだと体感出来て良かったです。',
  },
];

const scrollTestimonials = [
  {
    industry: '宿泊施設',
    body: '百聞は一見にしかず、は本当にそのとおりで、頭で理解するのと、体感するのでは、全然違うなと思いました。\nたしかにテキストを何回か読んでからワークショップに参加しましたが、作った方の言葉で説明を受けながら体感で理解するのは全然違うと思いました。\nいろんな人が、一度体感してほしいと思いました。',
  },
  {
    industry: 'コミュニティ',
    body: '私のこれまでの人生では、物事が決まらない会議や、現実から離れた理念を当たり前のように観てきました。\nこの日、参加者が置いてけぼりにされず、個々の「大切にしたいこと」が見えて、そこを起点に組織の意思決定を行うという理想が「本当にできた」のを初めて体験して驚いています。',
  },
  {
    industry: 'IT・通信業',
    body: '楽しかったです。\n意思の表明に対して意見を述べる意思決定のプロセスでは意思決定のやり取りがオープンになるため、意思表示しやすく、意思決定後のモヤモヤも少なくて良いと実感した。\nまたこのプロセスを言語化できたことでより理解が深まった。',
  },
  {
    industry: 'IT・通信業',
    body: '普段のプロジェクト運営では「最速で正解にたどり着くこと」を優先しがちですが、RINGOプロセスを通じて、"意志を共有するプロセスそのもの"が職場の働きやすさに繋がり結果として成果創出の一部になると感じました。',
  },
  {
    industry: '税理士事務所',
    body: '凄く良かったです。\n今の自分を変えないといけないと思っていたがそうではなく、ちょっとした考え方、言い方で変わるのだと認識しました。',
  },
  {
    industry: '福祉',
    body: 'とてもおもしろかったし、意思決定のプロセス（いつもの会議とかは面倒くさいな〜とか思ってしまうので）がこんなに楽しいとは思わなかった。',
  },
  {
    industry: 'コンサルティング・研修',
    body: '課題に集中しやすいことに驚きました。\nまた、参加者がこれほどフラットな関係性で物事を決めていけるとは…。',
  },
  {
    industry: 'コンサルティング・研修',
    body: '自律分散的な組織運営は理想だが難しいと思ってましたが、このプロセスなら実現できるのかもと思いました。',
  },
  {
    industry: '卸売業・商社',
    body: '意思決定をぶれずにする事や受け入れや受け止め方が違うだけでやりやすさも違う事に気付けた。',
  },
  {
    industry: '医療・病院',
    body: '話し合いの場だけでは、実は解決策は生まれにくい。大切なのは、納得感を生み出すことだと実感した。',
  },
  {
    industry: 'まちづくり・観光',
    body: '組織を運営する経営者（代表者、その他役員）は、体験するべきものだと思いました。',
  },
  {
    industry: '食品',
    body: '自分ひとりで全て背負わなくて良くなるのではないか、という軽さ、安堵を感じました。',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <Section bg="light">
      <div className="max-w-6xl mx-auto">

        {/* ヘッダー */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gray mb-3 block font-hand">Voice</span>
          <h2 className="text-3xl md:text-4xl font-black font-feature-settings">参加者の声</h2>
        </div>

        {/* メインカード（固定・6件） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 mb-16">
          {mainTestimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-brand-black/5 rounded-2xl p-8 relative hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-black/5 transition-all duration-300"
            >
              {/* 装飾クォート */}
              <span className="absolute top-5 right-7 text-5xl leading-none text-brand-yellow/30 font-serif font-black select-none">&ldquo;</span>

              {/* メタ情報 */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center text-base font-bold text-brand-black flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.08em] text-brand-gray block mb-0.5">{t.industry}</span>
                  <span className="text-[13px] font-medium text-brand-black block mb-0.5">{t.company}</span>
                  <span className="text-sm font-bold text-brand-black">{t.name}</span>
                </div>
              </div>

              {/* 本文 */}
              <p className="text-sm md:text-[14px] leading-loose text-brand-black/75 text-justify whitespace-pre-line font-feature-settings">
                {t.body}
              </p>
            </div>
          ))}
        </div>

        {/* 縦スクロール小見出し */}
        <div className="text-center mb-7">
          <span className="text-[13px] font-medium text-brand-gray inline-flex items-center gap-3">
            <span className="block w-10 h-px bg-brand-black/10"></span>
            その他の参加者の声
            <span className="block w-10 h-px bg-brand-black/10"></span>
          </span>
        </div>

        {/* 縦スクロールエリア */}
        <div className="relative">
          {/* フェードアウト（下端） */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-brand-light pointer-events-none z-10 rounded-b-xl" />

          <div
            className="max-h-[520px] overflow-y-auto pr-1.5"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(29,29,31,0.15) transparent' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scrollTestimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white border border-brand-black/5 rounded-xl p-6 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-black/5 transition-all duration-300"
                >
                  <span className="inline-block text-[10px] font-bold tracking-[0.06em] text-brand-black bg-brand-yellow/20 px-2.5 py-0.5 rounded-full mb-3.5">
                    {t.industry}
                  </span>
                  <p className="text-[13px] leading-[1.9] text-brand-black/70 whitespace-pre-line font-feature-settings">
                    {t.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};
