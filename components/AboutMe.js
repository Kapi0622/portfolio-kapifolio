// Font Awesome 6のアイコンライブラリから必要なSNSアイコンをインポート
import { FaXTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';

// 自己紹介セクションのコンポーネント
const AboutMe = () => {
  // ★★★ ご自身のSNSリンクに書き換えてください ★★★
  // SNSリンクのデータをオブジェクトで管理
  const snsLinks = {
    x: 'https://x.com/kapi_0622',        // X（旧Twitter）のアカウントURL
    github: 'https://github.com/Kapi0622',    // GitHubのアカウントURL
    instagram: 'https://www.instagram.com/sogo.0622/', // InstagramのアカウントURL
  };

  // JSXを返す（自己紹介セクションのUI構造）
  return (
    // 自己紹介セクション（背景透明で背景画像を表示）
    <section id="about-me" className="w-full py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションのタイトル */}
        <h2 className="text-6xl font-bold text-center mb-16 drop-shadow-lg">About me</h2>
        
        {/* 左右レイアウトコンテナ */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* 左側：テキスト情報 */}
          <div className="space-y-6">
            {/* ★★★ ここに自己紹介を記載してください ★★★ */}
            {/* 自己紹介文 */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold drop-shadow-md">はじめまして、Kapiです！</h3>
              <p className=" text-lg leading-relaxed drop-shadow-sm">
                大学2年生の駆け出しエンジニアです。<br />
                「技術とアイデアで、日常に楽しみをプラス＋」を理念として開発に取り組んでいます。<br />
                ゲーム開発・Web開発を中心に、ユーザー体験を重視した制作を行っています。<br />
                将来は、ゲーム業界に携わるエンジニアを目指しています。<br />
                よろしくお願いいたします！
              </p>
            </div>
            
            {/* スキル・興味分野 */}
            <div className="space-y-3">
              <h4 className="text-xl font-semibold drop-shadow-md">興味のある分野</h4>
              <div className="flex flex-wrap gap-2">                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">ゲーム開発</span>
                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">Unity</span>
                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">C#</span>
                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">C++</span>
                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">Web開発</span>
                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">html・css</span>
                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">React</span>
                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">Next.js</span>
                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">Ruby</span>
                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">AWS</span>
                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">Docker</span>
                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">iOS開発（macない…）</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xl font-semibold drop-shadow-md">趣味</h4>
              <div className="flex flex-wrap gap-2">                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">ゲーム</span>
                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">ゲーム開発</span>
                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">Web開発</span>
                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">アニメ鑑賞</span>
                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">読書</span>
                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">ダンス</span>
                <span className="bg-sky-100 bg-opacity-90 text-sky-800 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-sky-200">ルービックキューブ</span>
              </div>
            </div>
            
            {/* SNSリンクを横並びで配置 */}
            <div className="space-y-3">
              <h4 className="text-xl font-semibold drop-shadow-md">SNS</h4>
              <div className="flex space-x-6">
                {/* X（旧Twitter）リンク */}
                <a 
                  href={snsLinks.x} 
                  target="_blank"           // 新しいタブで開く
                  rel="noopener noreferrer" // セキュリティ対策
                  className="text-black hover:text-primary transition-colors transform hover:scale-110 duration-300 drop-shadow-md" // ホバー時の色変更とスケール
                >
                  <FaXTwitter size={32} />
                </a>
                
                {/* GitHubリンク */}
                <a 
                  href={snsLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-black hover:text-primary transition-colors transform hover:scale-110 duration-300 drop-shadow-md"
                >
                  <FaGithub size={32} />
                </a>
                
                {/* Instagramリンク */}
                <a 
                  href={snsLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-black hover:text-primary transition-colors transform hover:scale-110 duration-300 drop-shadow-md"
                >
                  <FaInstagram size={32} />
                </a>
              </div>
            </div>
          </div>
          
          {/* 右側：プロフィール画像 */}
          <div className="flex justify-center">
            <div className="relative">
              {/* プロフィール画像 */}
              <img 
                src="/images/profile.jpg"     // プロフィール画像のパス
                alt="プロフィール画像"         // 代替テキスト
                className="w-80 h-80 object-cover rounded shadow-2xl border-4 border-white border-opacity-30 backdrop-blur-sm" // 丸い画像スタイル
              />              {/* 装飾的なリング */}
              <div className="absolute inset-0 rounded border-2 border-sky-400 animate-pulse"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

// このコンポーネントを他のファイルで使用できるようにエクスポート
export default AboutMe;