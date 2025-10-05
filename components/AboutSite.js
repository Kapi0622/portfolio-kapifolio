"use client";

import { useTheme } from '../src/contexts/ThemeContext';

const AboutSite = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="about-site" className={`py-40 transition-colors duration-300 ${
      isDark 
        ? 'bg-bg-secondary text-text-main' 
        : 'bg-light-bg-secondary text-light-text-main'
    }`}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2 font-mono ${
          isDark ? 'text-primary' : 'text-light-primary'
        }`}>
          <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>{"/*"}</span> About this site <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>{"*/"}</span>
        </h2>
        <p className={`mt-2 mb-12 text-xl text-center font-mono ${
          isDark ? 'text-text-sub' : 'text-light-text-sub'
        }`}>
          {"// このポートフォリオサイトについて"}
        </p>
        
        <div className={`w-full py-6 border rounded-lg transition-colors duration-300 ${
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
            <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-primary' : 'bg-light-primary'}`}></div>
            <span className={`text-sm font-mono ml-2 ${isDark ? 'text-text-muted' : 'text-light-text-muted'}`}>portfolio.md</span>
          </div>
          
          <div className="p-6 font-mono text-lg">
            <p className={`mb-2 ${isDark ? 'text-terminal-green' : 'text-light-terminal-green'}`}>{"/**"}</p>
            <p className={`mb-2 ${isDark ? 'text-terminal-green' : 'text-light-terminal-green'}`}> * Portfolio Site Overview</p>
            <p className={`mb-4 ${isDark ? 'text-terminal-green' : 'text-light-terminal-green'}`}> */</p>
            
            <p className={`mb-2 ${isDark ? 'text-text-main' : 'text-light-text-main'}`}>
              <span className={isDark ? 'text-accent' : 'text-light-accent'}>const</span> <span className={isDark ? 'text-primary' : 'text-light-primary'}>portfolio</span> = {`{`}
            </p>
            <p className={`mb-2 ml-4 ${isDark ? 'text-text-main' : 'text-light-text-main'}`}>
              <span className={isDark ? 'text-accent' : 'text-light-accent'}>name:</span> <span className={isDark ? 'text-text-main' : 'text-light-text-main'}>"Kapifolio"</span>,
            </p>
            <p className={`mb-2 ml-4 ${isDark ? 'text-text-main' : 'text-light-text-main'}`}>
              <span className={isDark ? 'text-accent' : 'text-light-accent'}>purpose:</span> <span className={isDark ? 'text-text-main' : 'text-light-text-main'}>"エンジニアスキルと制作実績のアピール"</span>,
            </p>
            <p className={`mb-2 ml-4 ${isDark ? 'text-text-main' : 'text-light-text-main'}`}>
              <span className={isDark ? 'text-accent' : 'text-light-accent'}>content:</span> [<span className={isDark ? 'text-text-main' : 'text-light-text-main'}>"成果物", "経歴", "技術スタック"</span>],
            </p>
            <p className={`mb-4 ${isDark ? 'text-text-main' : 'text-light-text-main'}`}>{`};`}</p>
            
            <p className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>
              <span className={isDark ? 'text-accent' : 'text-light-accent'}>console</span>.<span className={isDark ? 'text-primary' : 'text-light-primary'}>log</span>(<span className={isDark ? 'text-text-main' : 'text-light-text-main'}>"このサイトで自分について知っていただけたら幸いです！"</span>);
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// このコンポーネントを他のファイルで使用できるようにエクスポート
export default AboutSite;

// 仮置き
{/* <section id="about-me" className="py-16 bg-white rounded-lg shadow-md p-8"></section> */}