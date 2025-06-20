// ★★★ ここにご自身の経歴を記載してください ★★★
// プロフィール（経歴）のデータ配列
const timelineData = [
  { 
    year: '2015',                                         // 年度
    event: '〇〇大学入学',                                // 出来事のタイトル
    description: '情報科学部でプログラミングの基礎を学ぶ。'   // 詳細説明
  },
  { 
    year: '2019', 
    event: '〇〇株式会社入社', 
    description: 'Web制作会社でフロントエンドエンジニアとしてキャリアをスタート。' 
  },
  { 
    year: '現在', 
    event: 'フリーランスとして活動', 
    description: 'Webサイト制作やアプリ開発を中心に活動中。' 
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
      
      {/* タイムライン全体のコンテナ */}
      <div className="relative max-w-2xl mx-auto">
        {/* 中央の縦線（タイムラインの軸） */}
        <div className="absolute left-1/2 w-0.5 h-full bg-primary -translate-x-1/2"></div>
        
        {/* timelineData配列の各項目をループで表示 */}
        {timelineData.map((item, index) => (
          // 各タイムライン項目
          <div key={index} className="relative mb-8 flex justify-between items-center w-full">
            
            {/* 左右交互配置のための条件分岐 */}
            {/* 偶数番目（0,2,4...）は左側、奇数番目（1,3,5...）は右側に配置 */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'order-1' : 'order-3'}`}>
              {/* イベント内容のカード */}
              <div className={`p-4 rounded-lg shadow-md bg-white ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                {/* イベントタイトル */}
                <h3 className="font-bold text-lg">{item.event}</h3>
                {/* イベント詳細説明 */}
                <p className="text-sm text-text-sub">{item.description}</p>
              </div>
            </div>
            
            {/* 中央の年度表示部分 */}
            <div className="z-10 order-2">
              <div className="w-24 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                {item.year}
              </div>
            </div>
            
            {/* 反対側のスペーサー（レイアウト調整用） */}
            <div className="w-5/12 order-1"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

// このコンポーネントを他のファイルで使用できるようにエクスポート
export default Profile;