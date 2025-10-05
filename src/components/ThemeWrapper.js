"use client";

import { useTheme } from '../contexts/ThemeContext';

const ThemeWrapper = ({ children }) => {
  const { isDark, isClient } = useTheme();

  // クライアントサイドでない場合はダークモードをデフォルトで表示
  const currentTheme = isClient ? isDark : true;

  return (
    <div 
      className={`min-h-screen transition-all duration-300 ${
        currentTheme 
          ? 'bg-bg-primary text-text-main' 
          : 'bg-light-bg-primary text-light-text-main'
      }`}
      style={{
        backgroundImage: currentTheme 
          ? `
            linear-gradient(rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.95)),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 98px,
              rgba(16, 185, 129, 0.03) 100px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 98px,
              rgba(16, 185, 129, 0.03) 100px
            )
          `
          : `
            linear-gradient(rgba(248, 250, 252, 0.95), rgba(248, 250, 252, 0.95)),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 98px,
              rgba(14, 165, 233, 0.03) 100px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 98px,
              rgba(14, 165, 233, 0.03) 100px
            )
          `,
        backgroundSize: '100px 100px, 100px 100px, 100px 100px',
      }}
    >
      {children}
    </div>
  );
};

export default ThemeWrapper;