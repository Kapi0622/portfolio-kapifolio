// サイト紹介セクションのコンポーネント
const AboutSite = () => {
  // JSXを返す（このサイトについての説明セクション）
  return (
    // セクション要素（HTMLの意味的な区切り）- 背景透明で背景画像を表示
    <section id="about-site" className="py-40 bg-gradient-to-br from-sky-50 to-blue-100 shadow-md p-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* セクションのタイトル */}
        <h2 className="text-6xl font-bold text-center mb-8 drop-shadow-lg">About this site</h2>
        {/* コンテンツを囲む半透明の白いカード */}
        <div className="w-full py-4 bg-transparent">
          {/* サイトの説明文 */}
          <p className="text-lg leading-relaxed text-text-main text-center">
            {/* ★★★ ここにサイトの詳細を記載してください ★★★ */}
            このサイトは、Kapiのポートフォリオサイトです。<br />
            今までに制作した成果物や携わっているサービスを主に紹介します。<br />
            このサイトで自分について少しでも知っていただけたら幸いです。
          </p>
        </div>
      </div>
    </section>
  );
};

// このコンポーネントを他のファイルで使用できるようにエクスポート
export default AboutSite;

// 仮置き
{/* <section id="about-me" className="py-16 bg-white rounded-lg shadow-md p-8"></section> */}