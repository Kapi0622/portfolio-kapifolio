"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// テーマの型定義
export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light'
};

// テーマコンテキストの作成
const ThemeContext = createContext();

// カスタムフック：テーマコンテキストを使用するためのフック
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// テーマプロバイダーコンポーネント
export const ThemeProvider = ({ children }) => {
  // テーマの状態管理（デフォルトはダークモード）
  const [theme, setTheme] = useState(THEMES.DARK);
  const [isClient, setIsClient] = useState(false);

  // クライアントサイドでのみ実行される初期化処理
  useEffect(() => {
    setIsClient(true);
    
    // ローカルストレージからテーマ設定を読み込み
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  // テーマが変更されたときにローカルストレージに保存
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('portfolio-theme', theme);
      
      // HTML要素にテーマクラスを適用
      document.documentElement.setAttribute('data-theme', theme);
      
      // ダークモード時の追加クラス
      if (theme === THEMES.DARK) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme, isClient]);

  // テーマ切り替え関数
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  };

  // ダークモードかどうかの判定
  const isDark = theme === THEMES.DARK;

  // コンテキストの値
  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark,
    isClient
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;