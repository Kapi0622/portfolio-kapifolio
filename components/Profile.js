"use client";

import { useTheme } from '../src/contexts/ThemeContext';

// ★★★ ここにご自身の経歴を記載してください ★★★
// プロフィール（経歴）のデータ配列
const timelineData = [
  {
    year: '2005',
    events: [
      {
        event: '爆誕',
        description: '自然豊かで、お米の美味しい県に生まれる。'
      }
    ]
  },
  {
    year: '保育園時代',
    events: [
      {
        event: '当時の夢は大工だった',
        description: '祖父が大工だった影響で、当時は大工になるといっていました。'
      },

      {
        event: 'はじめてのゲーム',
        description: '私が初めてゲームに触れたのは、父母がpcでやっていたブラウザ版『ピグライフ』というアメーバピグ内で提供されていた農園シミュレーションゲームでした。\n これをきっかけに保育園時代は、DSやスマホゲームにものめりこんでいました。'
      }
    ]
  },
  {
    year: '小学校時代',
    events: [
      {
        event: '好きな科目は「社会」',
        description: '社会は歴史や地理など全体的に好きでした。授業でも、積極的に発言していたことも覚えています。\nこの社会好きが高校の文理選択を苦しめることになるのはまだ先のお話。'
      },
      {
        event: '習い事を始める',
        description: '1年生の頃に「ドラム」のレッスン、2年生の頃に「ダンス」のレッスンを受け始めました。\n前者は3年程度、後者は8年程度とそこそこ長期的に取り組んだと思います。\nダンスの影響なのか、元からなのかは定かではありませんが、日常的に動きがくねくねしているとよく言われました。\n自覚はあまりなかったです…'
      },
      {
        event: 'パソコンに触れる(5年生)',
        description: 'サンドボックスゲーム『マインクラフト』をきっかけに、父親のデスクトップPCを借りてプレイしていました。\n当時はまだプログラミング活動をしていませんでしたが、パソコンに興味を持つ大きなきっかけとなりました。'
      },
      {
        event: '夢は「ゲームクリエイター」へ',
        description: '保育園時代から多くのゲームに触れてきたこともあり、将来は自分のゲームを作ってみたいと思うようになりました。\n当時は夢の実現のためにプログラミングをしようとまだ思っておらず、ふわっとした感じで「ゲームを作りたい」＝「ゲームクリエーターになる」くらいに考えていました。'
      }
    ]
  },
  {
    year: '中高一貫時代',
    events: [
      {
        event: 'カリキュラムに惹かれ中高一貫校へ',
        description: '一番惹かれたのは、海外研修旅行です。\n海外旅行へのあこがれを強く持っていたので、進学の大きな決め手となりました。\n入学当時はまだコロナで中止になるとは思ってもいませんでした…涙'
      },
      {
        event: '雑学・ややマイナーな特技にハマる',
        description: '昔からジャンルはあまり問わずいろんなものに興味を抱く性格だったので、疑問に思ったらすぐに調べる癖がついてました。\n雑学・サイエンス系のYoutubeも良く見ていましたね。\nまた、ピカソやバンコクの正式名称を暗記したり、ルービックキューブを40秒くらいで揃えられるようにしたりと、あえてみんながあまりやらなそうなことを率先してやっていました。\n良い言い方をすれば、ナンバーワンよりオンリーワンを目指してました。\n※逆張りではありません。'
      },
      {
        event: 'プログラミングに初挑戦(高1)',
        description: '父親からデスクトップPCを譲り受けたことで、本格的にパソコンでの活動が可能になりました。\n初めてのコーディングはUnity内でのC#でした。\n当時は初めてということもあり、意味はほとんど理解しておらず、動画とエディタを反復横跳びしながら書いていました。\n思うように動作しないことも多く、何度も挫折しました。\nですが、この挑戦のおかげで、理系選択の決定の決め手にもなりましたし、ゲームに携わるエンジニアになるという将来の目標も明確になりました。'
      }
    ]
  },
  {
    year: '大学時代',
    events: [
      {
        event: '大学受験の挫折をバネに進学先で自己研鑽に励む',
        description: '高校時代、学問に対してあまり真剣に取り組んでこなかったこともあり、受験結果は芳しくありませんでした。\nしかし、学びたいことや将来の目標は明確だったので、挫折経験をバネに大学ではより一層自己研鑽に励んでいます。\nものづくりが好きなこともあり、自分の好奇心に任せて積極的に取り組んでいます。'
      },
      {
        event: 'ものづくりのポリシー',
        description: 'ものづくりへの強い情熱を原動力に、常に新しい技術やアイデアの探求を続けています。\n私にとって就職はゴールではなく、人々に楽しさや驚きを届けるプロダクトを社会に生み出し続けるための新たなスタート地点です。\nそのため大学では、自身の知的好奇心を何よりも大切にし、心から楽しみながら制作活動に励んでいます。'
      },
    ]
  },
];

// プロフィール（経歴）セクションのコンポーネント
const Profile = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="profile" className={`py-40 transition-colors duration-300 ${
      isDark 
        ? 'bg-bg-primary text-text-main' 
        : 'bg-light-bg-primary text-light-text-main'
    }`}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 font-mono ${
          isDark ? 'text-primary' : 'text-light-primary'
        }`}>
          <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>git</span> <span className={isDark ? 'text-accent' : 'text-light-accent'}>mylog</span> --oneline --graph
        </h2>

        <p className={`mt-2 mb-12 text-xl text-center font-mono ${
          isDark ? 'text-text-sub' : 'text-light-text-sub'
        }`}>
          <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>//</span> 私の成長ログ
        </p>

      {/* タイムライン全体のコンテナ */}
        <div className="max-w-5xl mx-auto relative">
          <div className={`border rounded-lg overflow-hidden transition-colors duration-300 ${
            isDark 
              ? 'bg-code-bg border-code-border' 
              : 'bg-light-code-bg border-light-code-border'
          }`}>
            <div className={`px-4 py-2 flex items-center space-x-2 border-b transition-colors duration-300 ${
              isDark 
                ? 'bg-bg-tertiary border-code-border' 
                : 'bg-light-bg-tertiary border-light-code-border'
            }`}>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className={`w-3 h-3 rounded-full ${
                isDark ? 'bg-primary' : 'bg-light-primary'
              }`}></div>
              <span className={`text-sm font-mono ml-2 ${
                isDark ? 'text-text-muted' : 'text-light-text-muted'
              }`}>git-history.log</span>
            </div>
            
            <div className="p-6 font-mono text-sm space-y-4">
              {timelineData.map((item, index) => (
                <div key={index} className={`border-l-2 pl-6 ml-4 relative transition-colors duration-300 ${
                  isDark ? 'border-primary' : 'border-light-primary'
                }`}>
                  <div className={`absolute -left-2 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                    isDark 
                      ? 'bg-primary border-bg-primary' 
                      : 'bg-light-primary border-light-bg-primary'
                  }`}></div>
                  
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className={isDark ? 'text-accent' : 'text-light-accent'}>commit</span>
                      <span className={`font-bold ${
                        isDark ? 'text-terminal-green' : 'text-light-terminal-green'
                      }`}>{item.year}</span>
                      <span className={isDark ? 'text-text-muted' : 'text-light-text-muted'}>({item.events.length} changes)</span>
                    </div>
                    
                    <div className={`border rounded p-4 space-y-3 transition-colors duration-300 ${
                      isDark 
                        ? 'bg-bg-secondary border-code-border' 
                        : 'bg-light-bg-secondary border-light-code-border'
                    }`}>
                      {item.events.map((event, eventIndex) => (
                        <div key={eventIndex} className={`border-l pl-3 ${
                          isDark ? 'border-secondary' : 'border-light-secondary'
                        }`}>
                          <div className="flex items-start space-x-2 mb-2">
                            <span className={`text-sm mt-1 ${
                              isDark ? 'text-primary' : 'text-light-primary'
                            }`}>+</span>
                            <h3 className={`font-bold text-lg ${
                              isDark ? 'text-primary' : 'text-light-primary'
                            }`}>{event.event}</h3>
                          </div>
                          <p className={`text-sm leading-relaxed whitespace-pre-line pl-4 ${
                            isDark ? 'text-text-sub' : 'text-light-text-sub'
                          }`}>
                            {event.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className={`mt-2 text-xs ${
                      isDark ? 'text-text-muted' : 'text-light-text-muted'
                    }`}>
                      <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>Author:</span> Kapi &lt;kapi@dev.local&gt;
                    </div>
                  </div>
                </div>
              ))}
              
              <div className={`text-center pt-4 border-t transition-colors duration-300 ${
                isDark ? 'border-code-border' : 'border-light-code-border'
              }`}>
                <p className={`text-base ${
                  isDark ? 'text-terminal-green' : 'text-light-terminal-green'
                }`}>
                  <span className={isDark ? 'text-accent' : 'text-light-accent'}>$</span> git status
                </p>
                <p className={`text-sm mt-1 ${
                  isDark ? 'text-text-sub' : 'text-light-text-sub'
                }`}>
                  On branch main - エンジニアとして成長中...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// このコンポーネントを他のファイルで使用できるようにエクスポート
export default Profile;