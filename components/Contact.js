// お問い合わせセクションのコンポーネント
const Contact = () => {
  // ★★★ ステップ5で取得する自分のエンドポイントURLに書き換えてください ★★★
  // Formspreeサービスのエンドポイント（フォーム送信先URL）
  const formspreeEndpoint = 'https://formspree.io/f/xyzjjreg';
  
  // JSXを返す（お問い合わせフォームのUI構造）
  return (
    // お問い合わせセクション（背景透明で背景画像を表示）
    <section id="contact" className="w-full py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        {/* セクションのタイトル */}
        <h2 className="text-6xl font-bold text-center mb-12  drop-shadow-lg">Contact me</h2>
        
        {/* コンテンツを囲む半透明の白い背景のカード */}
        <div className="bg-white bg-opacity-85 p-8 rounded-xl shadow-xl backdrop-blur-sm">
          {/* お問い合わせフォーム */}
          <form 
            action={formspreeEndpoint}  // 送信先URL
            method="POST"               // HTTP POSTメソッドで送信
            className="max-w-xl mx-auto" // 最大幅を設定して中央寄せ
          >
            {/* お名前入力フィールド */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-text-main mb-2 font-medium">お名前</label>
              <input 
                type="text"           // テキスト入力
                id="name"             // ラベルとの関連付け用ID
                name="name"           // フォーム送信時のフィールド名
                required              // 必須入力
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white bg-opacity-90" // スタイリング
              />
            </div>
            
            {/* メールアドレス入力フィールド */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-text-main mb-2 font-medium">メールアドレス</label>
              <input 
                type="email"          // メールアドレス形式の入力
                id="email" 
                name="email" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white bg-opacity-90" 
              />
            </div>
            
            {/* コメント入力フィールド（複数行テキスト） */}
            <div className="mb-6">
              <label htmlFor="comment" className="block text-text-main mb-2 font-medium">コメント</label>
              <textarea 
                id="comment" 
                name="comment" 
                rows="5"              // 表示行数
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none bg-white bg-opacity-90"
              ></textarea>
            </div>
            
            {/* 送信ボタン */}
            <div className="text-center">
              <button 
                type="submit"         // フォーム送信ボタン
                className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// このコンポーネントを他のファイルで使用できるようにエクスポート
export default Contact;