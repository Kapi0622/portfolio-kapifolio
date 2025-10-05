// テーマ対応のためのユーティリティ関数

/**
 * テーマに応じたクラス名を返すヘルパー関数
 * @param {string} darkClasses - ダークモード用のクラス名
 * @param {string} lightClasses - ライトモード用のクラス名
 * @param {boolean} isDark - 現在ダークモードかどうか
 * @returns {string} 適用すべきクラス名
 */
export const getThemeClasses = (darkClasses, lightClasses, isDark) => {
  return isDark ? darkClasses : lightClasses;
};

/**
 * 背景色のテーマクラスを取得
 */
export const getBackgroundClasses = (isDark) => {
  return isDark 
    ? 'bg-bg-primary dark:bg-bg-primary' 
    : 'bg-light-bg-primary';
};

/**
 * テキスト色のテーマクラスを取得
 */
export const getTextClasses = (isDark) => {
  return isDark 
    ? 'text-text-main dark:text-text-main' 
    : 'text-light-text-main';
};

/**
 * プライマリカラーのテーマクラスを取得
 */
export const getPrimaryClasses = (isDark) => {
  return isDark 
    ? 'text-primary dark:text-primary' 
    : 'text-light-primary';
};

/**
 * カード背景のテーマクラスを取得
 */
export const getCardClasses = (isDark) => {
  return isDark 
    ? 'bg-code-bg border-code-border dark:bg-code-bg dark:border-code-border' 
    : 'bg-light-code-bg border-light-code-border';
};

/**
 * ボタンのテーマクラスを取得
 */
export const getButtonClasses = (isDark) => {
  return isDark 
    ? 'bg-primary hover:bg-primary/80 text-black' 
    : 'bg-light-primary hover:bg-light-primary/80 text-white';
};

/**
 * 全体的なテーマクラスを一括で取得
 */
export const getThemeStyles = (isDark) => {
  return {
    background: getBackgroundClasses(isDark),
    text: getTextClasses(isDark),
    primary: getPrimaryClasses(isDark),
    card: getCardClasses(isDark),
    button: getButtonClasses(isDark),
    
    // 特定用途のクラス
    terminalGreen: isDark ? 'text-terminal-green' : 'text-light-terminal-green',
    accent: isDark ? 'text-accent' : 'text-light-accent',
    textSub: isDark ? 'text-text-sub' : 'text-light-text-sub',
    textMuted: isDark ? 'text-text-muted' : 'text-light-text-muted',
    bgSecondary: isDark ? 'bg-bg-secondary' : 'bg-light-bg-secondary',
    bgTertiary: isDark ? 'bg-bg-tertiary' : 'bg-light-bg-tertiary',
  };
};