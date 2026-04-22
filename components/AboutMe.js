"use client";

// Font Awesome 6のアイコンライブラリから必要なSNSアイコンをインポート
import { FaXTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';
import { useTheme } from '../src/contexts/ThemeContext';
import Image from 'next/image';

// 自己紹介セクションのコンポーネント
const AboutMe = () => {
  const { isDark } = useTheme();
  // SNSリンクのデータをオブジェクトで管理
  const snsLinks = {
    x: 'https://x.com/kapi_0622',        // X（旧Twitter）のアカウントURL
    github: 'https://github.com/Kapi0622',    // GitHubのアカウントURL
    instagram: 'https://www.instagram.com/sogo.0622/', // InstagramのアカウントURL
  };

  // JSXを返す（自己紹介セクションのUI構造）
  return (
    <section id="about-me" className={`w-full py-20 transition-colors duration-300 ${
      isDark ? 'bg-bg-primary text-text-main' : 'bg-light-bg-primary text-light-text-main'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2 font-mono transition-colors duration-300 ${
          isDark ? 'text-primary' : 'text-light-primary'
        }`}>
          <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>function</span> AboutMe<span className={isDark ? 'text-accent' : 'text-light-accent'}>()</span> <span className={isDark ? 'text-text-sub' : 'text-light-text-sub'}>{`{`}</span>
        </h2>
        <p className={`mt-2 mb-12 text-xl text-center font-mono ${
          isDark ? 'text-text-sub' : 'text-light-text-sub'
        }`}>
          {"// 駆け出しエンジニアの自己紹介"}
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className={`space-y-4 rounded-lg p-6 border transition-colors duration-300 ${
              isDark 
                ? 'bg-code-bg border-code-border' 
                : 'bg-light-code-bg border-light-code-border'
            }`}>
              <div className={`flex items-center space-x-2 mb-4 border-b pb-2 transition-colors duration-300 ${
                isDark ? 'border-code-border' : 'border-light-code-border'
              }`}>
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-primary' : 'bg-light-primary'}`}></div>
                <span className={`text-sm font-mono ml-2 transition-colors duration-300 ${
                  isDark ? 'text-text-muted' : 'text-light-text-muted'
                }`}>kapi.bio</span>
              </div>
              <h3 className={`text-2xl font-bold font-mono transition-colors duration-300 ${
                isDark ? 'text-primary' : 'text-light-primary'
              }`}>
                <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>const</span> developer = <span className={isDark ? 'text-accent' : 'text-light-accent'}>"Kapi"</span>;
              </h3>
              <p className={`text-lg leading-relaxed font-mono transition-colors duration-300 ${
                isDark ? 'text-text-sub' : 'text-light-text-sub'
              }`}>
                <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>{"// 大学2年生のエンジニア"}</span><br />
                <span className={isDark ? 'text-accent' : 'text-light-accent'}>motto:</span> <span className={isDark ? 'text-text-main' : 'text-light-text-main'}>"技術とアイデアで、日常に『彩り』と『活力』を生み出す"</span><br />
                <span className={isDark ? 'text-accent' : 'text-light-accent'}>focus:</span> <span className={isDark ? 'text-text-main' : 'text-light-text-main'}>["ゲーム開発", "Web開発"]</span><br />
                <span className={isDark ? 'text-accent' : 'text-light-accent'}>goal:</span> <span className={isDark ? 'text-text-main' : 'text-light-text-main'}>"日常がもっと楽しく、遊びにあふれた世界を創る"</span><br />
                <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>{"// よろしくお願いします！"}</span>
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className={`text-xl font-semibold font-mono transition-colors duration-300 ${
                isDark ? 'text-primary' : 'text-light-primary'
              }`}>
                <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>const</span> skills = <span className={isDark ? 'text-accent' : 'text-light-accent'}>[</span>
              </h4>
              <div className="flex flex-wrap gap-2 ml-4">
                <span className={`px-3 py-1 rounded text-sm font-mono border transition-colors duration-300 hover:scale-105 transform ${
                  isDark 
                    ? 'bg-bg-tertiary text-primary border-code-border hover:border-primary' 
                    : 'bg-light-bg-tertiary text-light-primary border-light-code-border hover:border-light-primary'
                }`}>"ゲーム開発"</span>
                <span className={`px-3 py-1 rounded text-sm font-mono border transition-colors duration-300 hover:scale-105 transform ${
                  isDark 
                    ? 'bg-bg-tertiary text-primary border-code-border hover:border-primary' 
                    : 'bg-light-bg-tertiary text-light-primary border-light-code-border hover:border-light-primary'
                }`}>"Unity"</span>
                <span className={`px-3 py-1 rounded text-sm font-mono border transition-colors duration-300 hover:scale-105 transform ${
                  isDark 
                    ? 'bg-bg-tertiary text-primary border-code-border hover:border-primary' 
                    : 'bg-light-bg-tertiary text-light-primary border-light-code-border hover:border-light-primary'
                }`}>"C#"</span>
                <span className={`px-3 py-1 rounded text-sm font-mono border transition-colors duration-300 hover:scale-105 transform ${
                  isDark 
                    ? 'bg-bg-tertiary text-primary border-code-border hover:border-primary' 
                    : 'bg-light-bg-tertiary text-light-primary border-light-code-border hover:border-light-primary'
                }`}>"Web開発"</span>
                <span className={`px-3 py-1 rounded text-sm font-mono border transition-colors duration-300 hover:scale-105 transform ${
                  isDark 
                    ? 'bg-bg-tertiary text-primary border-code-border hover:border-primary' 
                    : 'bg-light-bg-tertiary text-light-primary border-light-code-border hover:border-light-primary'
                }`}>"HTML/CSS"</span>
                <span className={`px-3 py-1 rounded text-sm font-mono border transition-colors duration-300 hover:scale-105 transform ${
                  isDark 
                    ? 'bg-bg-tertiary text-primary border-code-border hover:border-primary' 
                    : 'bg-light-bg-tertiary text-light-primary border-light-code-border hover:border-light-primary'
                }`}>"React"</span>
                <span className={`px-3 py-1 rounded text-sm font-mono border transition-colors duration-300 hover:scale-105 transform ${
                  isDark 
                    ? 'bg-bg-tertiary text-primary border-code-border hover:border-primary' 
                    : 'bg-light-bg-tertiary text-light-primary border-light-code-border hover:border-light-primary'
                }`}>"Next.js"</span>
                <span className={`px-3 py-1 rounded text-sm font-mono border transition-colors duration-300 hover:scale-105 transform ${
                  isDark 
                    ? 'bg-bg-tertiary text-primary border-code-border hover:border-primary' 
                    : 'bg-light-bg-tertiary text-light-primary border-light-code-border hover:border-light-primary'
                }`}>"Ruby"</span>                
                <span className={`px-3 py-1 rounded text-sm font-mono border transition-colors duration-300 hover:scale-105 transform ${
                  isDark 
                    ? 'bg-bg-tertiary text-primary border-code-border hover:border-primary' 
                    : 'bg-light-bg-tertiary text-light-primary border-light-code-border hover:border-light-primary'
                }`}>"Docker"</span>
              </div>
              <p className={`font-mono ml-4 transition-colors duration-300 ${
                isDark ? 'text-accent' : 'text-light-accent'
              }`}>];</p>
            </div>
            <div className="space-y-3">
              <h4 className={`text-xl font-semibold font-mono transition-colors duration-300 ${
                isDark ? 'text-primary' : 'text-light-primary'
              }`}>
                <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>const</span> hobbies = <span className={isDark ? 'text-accent' : 'text-light-accent'}>[</span>
              </h4>
              <div className="flex flex-wrap gap-2 ml-4">
                <span className={`px-3 py-1 rounded text-sm font-mono border transition-colors duration-300 hover:scale-105 transform ${
                  isDark 
                    ? 'bg-bg-tertiary text-secondary border-code-border hover:border-secondary' 
                    : 'bg-light-bg-tertiary text-light-secondary border-light-code-border hover:border-light-secondary'
                }`}>"ゲーム"</span>
                <span className={`px-3 py-1 rounded text-sm font-mono border transition-colors duration-300 hover:scale-105 transform ${
                  isDark 
                    ? 'bg-bg-tertiary text-secondary border-code-border hover:border-secondary' 
                    : 'bg-light-bg-tertiary text-light-secondary border-light-code-border hover:border-light-secondary'
                }`}>"開発"</span>
                <span className={`px-3 py-1 rounded text-sm font-mono border transition-colors duration-300 hover:scale-105 transform ${
                  isDark 
                    ? 'bg-bg-tertiary text-secondary border-code-border hover:border-secondary' 
                    : 'bg-light-bg-tertiary text-light-secondary border-light-code-border hover:border-light-secondary'
                }`}>"アニメ"</span>
                <span className={`px-3 py-1 rounded text-sm font-mono border transition-colors duration-300 hover:scale-105 transform ${
                  isDark 
                    ? 'bg-bg-tertiary text-secondary border-code-border hover:border-secondary' 
                    : 'bg-light-bg-tertiary text-light-secondary border-light-code-border hover:border-light-secondary'
                }`}>"読書"</span>
                <span className={`px-3 py-1 rounded text-sm font-mono border transition-colors duration-300 hover:scale-105 transform ${
                  isDark 
                    ? 'bg-bg-tertiary text-secondary border-code-border hover:border-secondary' 
                    : 'bg-light-bg-tertiary text-light-secondary border-light-code-border hover:border-light-secondary'
                }`}>"ダンス"</span>
                <span className={`px-3 py-1 rounded text-sm font-mono border transition-colors duration-300 hover:scale-105 transform ${
                  isDark 
                    ? 'bg-bg-tertiary text-secondary border-code-border hover:border-secondary' 
                    : 'bg-light-bg-tertiary text-light-secondary border-light-code-border hover:border-light-secondary'
                }`}>"ルービックキューブ"</span>
              </div>
              <p className={`font-mono ml-4 transition-colors duration-300 ${
                isDark ? 'text-accent' : 'text-light-accent'
              }`}>];</p>
            </div>
            
            <div className="space-y-3">
              <h4 className={`text-xl font-semibold font-mono transition-colors duration-300 ${
                isDark ? 'text-primary' : 'text-light-primary'
              }`}>
                <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>const</span> socialLinks = <span className={isDark ? 'text-accent' : 'text-light-accent'}>{`{`}</span>
              </h4>
              <div className="flex space-x-6 ml-4">
                <a 
                  href={snsLinks.x} 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className={`transition-all transform hover:scale-110 duration-300 flex items-center space-x-2 font-mono text-sm ${
                    isDark 
                      ? 'text-text-sub hover:text-primary' 
                      : 'text-light-text-sub hover:text-light-primary'
                  }`}
                >
                  <FaXTwitter size={28} />
                  <span>twitter</span>
                </a>
                
                <a 
                  href={snsLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`transition-all transform hover:scale-110 duration-300 flex items-center space-x-2 font-mono text-sm ${
                    isDark 
                      ? 'text-text-sub hover:text-primary' 
                      : 'text-light-text-sub hover:text-light-primary'
                  }`}
                >
                  <FaGithub size={28} />
                  <span>github</span>
                </a>
                
                <a 
                  href={snsLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`transition-all transform hover:scale-110 duration-300 flex items-center space-x-2 font-mono text-sm ${
                    isDark 
                      ? 'text-text-sub hover:text-primary' 
                      : 'text-light-text-sub hover:text-light-primary'
                  }`}
                >
                  <FaInstagram size={28} />
                  <span>instagram</span>
                </a>
              </div>
              <p className={`font-mono ml-4 transition-colors duration-300 ${
                isDark ? 'text-accent' : 'text-light-accent'
              }`}>{`};`}</p>
            </div>
            
            <div className={`font-mono text-sm border-t pt-4 transition-colors duration-300 ${
              isDark 
                ? 'text-text-sub border-code-border' 
                : 'text-light-text-sub border-light-code-border'
            }`}>
              <p className={isDark ? 'text-accent' : 'text-light-accent'}>{"// エンジニアとして成長中..."}</p>
              <p className={`font-mono transition-colors duration-300 ${
                isDark ? 'text-text-sub' : 'text-light-text-sub'
              }`}>
                <span className={isDark ? 'text-accent' : 'text-light-accent'}>return</span> <span className={isDark ? 'text-text-main' : 'text-light-text-main'}>developer</span>;
              </p>
              <p className={`font-mono transition-colors duration-300 ${
                isDark ? 'text-text-sub' : 'text-light-text-sub'
              }`}>{`}`}</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-160 h-160">
              <Image 
                src="/images/profile.jpg"
                alt="プロフィール画像"
                width={640}
                height={640}
                className={`object-cover rounded-lg shadow-2xl border-4 backdrop-blur-sm transition-colors duration-300 ${
                  isDark 
                    ? 'border-code-border hover:border-primary' 
                    : 'border-light-code-border hover:border-light-primary'
                }`}
              />
              <div className={`absolute inset-0 rounded-lg border-2 opacity-30 animate-pulse transition-colors duration-300 ${
                isDark ? 'border-primary' : 'border-light-primary'
              }`}></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

// このコンポーネントを他のファイルで使用できるようにエクスポート
export default AboutMe;