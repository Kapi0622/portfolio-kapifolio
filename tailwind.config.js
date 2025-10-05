/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // クラスベースのダークモード切り替えを有効化
  theme: {
    extend: {      
      colors: {
        // ダークモード用カラー（現在のカラー）
        'primary': '#10b981', // エメラルドグリーン - GitHub風
        'secondary': '#3b82f6', // ブルー - VS Code風
        'accent': '#f59e0b', // アンバー - 警告色風
        
        // テキストカラー - ダークテーマ対応
        'text-main': '#f8fafc', // ライトグレー（ダーク背景用）
        'text-sub': '#94a3b8', // ミディアムグレー
        'text-muted': '#64748b', // ダークグレー
        
        // 背景色 - ダークエンジニア風
        'bg-primary': '#0f172a', // ダークネイビー - メイン背景
        'bg-secondary': '#1e293b', // ダークスレート - セカンド背景
        'bg-tertiary': '#334155', // ライトスレート - カード背景
        
        // コード風カラー
        'code-bg': '#1e1e1e', // VS Code背景風
        'code-border': '#333333', // コードブロックボーダー
        'terminal-green': '#00d562', // ターミナルグリーン
        
        // ライトモード用カラー（light- プレフィックス付き）
        'light-primary': '#0ea5e9', // スカイブルー - エンジニア感を保つ
        'light-secondary': '#1e40af', // ダークブルー
        'light-accent': '#dc2626', // レッド - ライトモードでの警告色
        
        // ライトモード用テキストカラー
        'light-text-main': '#1f2937', // ダークグレー（ライト背景用）
        'light-text-sub': '#4b5563', // ミディアムグレー
        'light-text-muted': '#6b7280', // ライトグレー
        
        // ライトモード用背景色
        'light-bg-primary': '#f8fafc', // ライトグレー - メイン背景
        'light-bg-secondary': '#f1f5f9', // オフホワイト - セカンド背景
        'light-bg-tertiary': '#e2e8f0', // ライトスレート - カード背景
        
        // ライトモード用コードカラー
        'light-code-bg': '#f4f4f5', // ライトグレー背景
        'light-code-border': '#d1d5db', // ライトボーダー
        'light-terminal-green': '#059669', // ダークグリーン（視認性向上）
        
        // 従来カラー（互換性維持）
        'background': '#0f172a', // ダーク背景に変更
      },
      fontFamily: {
        'body': ['"Inter"', 'sans-serif'],
        'mono': ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}