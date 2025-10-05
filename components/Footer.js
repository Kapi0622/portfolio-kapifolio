"use client";

import { useTheme } from '../src/contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  
  return (
    <footer className={`border-t text-center p-6 font-mono transition-colors duration-300 ${
      isDark 
        ? 'bg-bg-primary border-code-border text-text-main' 
        : 'bg-light-bg-primary border-light-code-border text-light-text-main'
    }`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>$</span>
          <span className={isDark ? 'text-text-sub' : 'text-light-text-sub'}>echo</span>
          <span className={isDark ? 'text-accent' : 'text-light-accent'}>"© {new Date().getFullYear()} Kapifolio"</span>
        </div>
        <p className={`text-sm ${isDark ? 'text-text-muted' : 'text-light-text-muted'}`}>
          <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>//</span> Built with React, Next.js & ❤️
        </p>
        <p className={`text-xs mt-1 ${isDark ? 'text-text-muted' : 'text-light-text-muted'}`}>
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

// このコンポーネントを他のファイルで使用できるようにエクスポート
export default Footer;