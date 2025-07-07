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
        description: '私が初めてゲームに触れたのは、父母がpcでやっていたブラウザ版「ピグライフ」というアメーバピグ内で提供されていた農園シミュレーションゲームでした。\n これをきっかけに保育園時代は、DSのゲームやスマホゲームにものめりこんでいました。'
      }
    ]
  },
  {
    year: '小学校時代',
    events: [
      {
        event: '好きな科目は「社会」',
        description: '社会は歴史や地理など全体的に好きでした。積極的に発言していたことも覚えています。このが高校の文理選択を苦しめることになるのはまだ先のお話'
      },
      {
        event: 'シミュレーション活動',
        description: ''
      },
      {
        event: 'パソコンに触れる',
        description: ''
      },
      {
        event: '夢は「ゲームクリエイター」へ',
        description: ''
      }
    ]
  },
];

// プロフィール（経歴）セクションのコンポーネント
const Profile = () => {
  // JSXを返す（プロフィールセクションのUI構造）
  return (
    // プロフィールセクション
    <section id="profile" className="py-40">
      {/* セクションのタイトル */}
      <h2 className="text-6xl font-bold text-center mb-12">Profile</h2>

      <p className="mt-2 mb-8 text-lg text-center text-text-sub"
      >私が現在の夢を志すまでの道のり</p>

      {/* タイムライン全体のコンテナ */}
      <div className="max-w-5xl mx-auto relative">
        {/* 全体を通る縦線 - 年表示ボックスの中央を通る */}
        <div className="absolute left-1/2 top-0 w-0.5 h-full bg-primary transform -translate-x-1/2" style={{left: '56px'}}></div>
        
        {/* timelineData配列の各項目をループで表示 */}
        {timelineData.map((item, index) => (
          // 各タイムライン項目
          <div key={index} className="flex items-start mb-12 last:mb-0 relative">
            {/* 左側：年表部分 */}
            <div className="w-28 flex-shrink-5 text-center relative z-10">
              <div className="inline-block px-4 py-2 bg-primary text-white font-bold text-sm rounded-lg">
                {item.year}
              </div>
            </div>

            {/* 右側：内容部分 */}
            <div className="flex-1 pl-8">
              {/* イベント内容のカード */}
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* 複数イベントの表示 */}
                {item.events.map((event, eventIndex) => (
                  <div key={eventIndex} className={eventIndex > 0 ? 'mt-6 pt-6 border-t border-gray-200' : ''}>
                    {/* イベントタイトル */}
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{event.event}</h3>
                    {/* イベント詳細説明 */}
                    <p className="text-sm text-text-sub leading-relaxed whitespace-pre-line">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// このコンポーネントを他のファイルで使用できるようにエクスポート
export default Profile;