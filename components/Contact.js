"use client";

import { useTheme } from '../src/contexts/ThemeContext';


const Contact = () => {
  const { isDark } = useTheme();
  
  // Formspreeサービスのエンドポイント（フォーム送信先URL）
  const formspreeEndpoint = 'https://formspree.io/f/xyzjjreg';
  
  return (
    // お問い合わせセクション
    <section id="contact" className="w-full py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        {/* セクションのタイトル */}
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2 drop-shadow-lg ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>
          <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>$ </span>
          <span className="font-mono">./contact</span>
          <span className={isDark ? 'text-accent' : 'text-light-accent'}> --interactive</span>
        </h2>
      <p className={`mt-2 mb-12 text-xl text-center font-mono ${
        isDark ? 'text-text-sub' : 'text-light-text-sub'
      }`}>
        {"// お気軽にご連絡ください"}
      </p>        {/* ターミナルウィンドウ風の背景 */}
        <div className={`border rounded-lg overflow-hidden shadow-2xl backdrop-blur-sm transition-colors duration-300 ${
          isDark 
            ? 'bg-code-bg border-code-border' 
            : 'bg-light-code-bg border-light-code-border'
        }`}>
          {/* ターミナルヘッダー */}
          <div className={`px-4 py-3 flex items-center space-x-2 border-b transition-colors duration-300 ${
            isDark 
              ? 'bg-bg-tertiary border-code-border' 
              : 'bg-light-bg-tertiary border-light-code-border'
          }`}>
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-primary' : 'bg-light-primary'}`}></div>
            <span className={`text-sm font-mono ml-2 ${
              isDark ? 'text-text-muted' : 'text-light-text-muted'
            }`}>contact-form.sh</span>
          </div>
          
          {/* ターミナル内容 */}
          <div className="p-6 font-mono">
            {/* 開始メッセージ */}
            <div className={`text-lg mb-6 ${isDark ? 'text-terminal-green' : 'text-light-terminal-green'}`}>
              <p><span className={isDark ? 'text-accent' : 'text-light-accent'}>kapi@portfolio:~$</span> ./contact --interactive</p>
              <p className={`mt-1 ${isDark ? 'text-text-sub' : 'text-light-text-sub'}`}>Initializing secure contact form...</p>
              <p className={`mt-1 ${isDark ? 'text-primary' : 'text-light-primary'}`}>Ready to receive your message!</p>
            </div>
            
            {/* お問い合わせフォーム */}
            <form 
              action={formspreeEndpoint}  // 送信先URL
              method="POST"               // HTTP POSTメソッドで送信
              className="space-y-6" 
            >
              {/* お名前入力フィールド */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className={isDark ? 'text-accent' : 'text-light-accent'}>$</span>
                  <label htmlFor="name" className={`text-lg ${
                    isDark ? 'text-terminal-green' : 'text-light-terminal-green'
                  }`}>name = input("あなたのお名前を入力してください: ")</label>
                </div>
                <div className="flex items-center space-x-2 pl-4">
                  <span className={`text-sm ${isDark ? 'text-text-muted' : 'text-light-text-muted'}`}>&gt;</span>
                  <input 
                    type="text"           
                    id="name"             
                    name="name"           
                    required              
                    className={`flex-1 border rounded px-3 py-2 font-mono text-sm focus:outline-none focus:ring-1 transition-all placeholder-text-muted ${
                      isDark 
                        ? 'bg-bg-secondary border-code-border text-white focus:border-primary focus:ring-primary' 
                        : 'bg-light-bg-secondary border-light-code-border text-light-text-main focus:border-light-primary focus:ring-light-primary'
                    }`}
                    placeholder="Taro Yamada"
                  />
                </div>
              </div>
              
              {/* メールアドレス入力フィールド */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className={isDark ? 'text-accent' : 'text-light-accent'}>$</span>
                  <label htmlFor="email" className={`text-lg ${
                    isDark ? 'text-terminal-green' : 'text-light-terminal-green'
                  }`}>email = input("メールアドレスを入力してください: ")</label>
                </div>
                <div className="flex items-center space-x-2 pl-4">
                  <span className={`text-sm ${isDark ? 'text-text-muted' : 'text-light-text-muted'}`}>&gt;</span>
                  <input 
                    type="email"          
                    id="email" 
                    name="email" 
                    required 
                    className={`flex-1 border rounded px-3 py-2 font-mono text-sm focus:outline-none focus:ring-1 transition-all placeholder-text-muted ${
                      isDark 
                        ? 'bg-bg-secondary border-code-border text-white focus:border-primary focus:ring-primary' 
                        : 'bg-light-bg-secondary border-light-code-border text-light-text-main focus:border-light-primary focus:ring-light-primary'
                    }`}
                    placeholder="taro@example.com"
                  />
                </div>
              </div>
              
              {/* コメント入力フィールド（複数行テキスト） */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className={isDark ? 'text-accent' : 'text-light-accent'}>$</span>
                  <label htmlFor="comment" className={`text-lg ${
                    isDark ? 'text-terminal-green' : 'text-light-terminal-green'
                  }`}>message = input("メッセージを入力してください: ")</label>
                </div>
                <div className="pl-4">
                  <textarea 
                    id="comment" 
                    name="comment" 
                    rows="5"              
                    required 
                    className={`w-full border rounded px-3 py-2 font-mono text-sm focus:outline-none focus:ring-1 transition-all resize-none placeholder-text-muted ${
                      isDark 
                        ? 'bg-bg-secondary border-code-border text-white focus:border-primary focus:ring-primary' 
                        : 'bg-light-bg-secondary border-light-code-border text-light-text-main focus:border-light-primary focus:ring-light-primary'
                    }`}
                    placeholder="お気軽にお問い合わせください。技術的な質問やプロジェクトのご相談など、何でもお待ちしております。"
                  ></textarea>
                </div>
              </div>
              
              {/* 送信ボタン */}
              <div className={`pt-4 border-t transition-colors duration-300 ${
                isDark ? 'border-code-border' : 'border-light-code-border'
              }`}>
                <div className="flex items-center space-x-4">
                  <button 
                    type="submit"         
                    className={`font-mono font-bold py-2 px-6 rounded transition-all duration-300 text-lg flex items-center space-x-2 group ${
                      isDark 
                        ? 'bg-primary hover:bg-primary/80 text-black' 
                        : 'bg-light-primary hover:bg-light-primary/80 text-white'
                    }`}
                  >
                    <span className={isDark ? 'text-accent' : 'text-white'}>$</span>
                    <span>./send-message</span>
                    <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">--now</span>
                  </button>
                  <span className={`text-xs font-mono ${
                    isDark ? 'text-text-muted' : 'text-light-text-muted'
                  }`}>Press Enter to execute</span>
                </div>
                
                {/* 実行後のメッセージエリア */}
                <div className="mt-4 text-xs">
                  <p><span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>Info:</span> すべてのメッセージは安全に暗号化されて送信されます</p>
                  <p><span className={isDark ? 'text-accent' : 'text-light-accent'}>Note:</span> 通常24時間以内に返信いたします</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// このコンポーネントを他のファイルで使用できるようにエクスポート
export default Contact;