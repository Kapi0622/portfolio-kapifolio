/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ===== Dark Mode: Gameplay HUD (落ち着き + 技術的集中感) =====
        'primary': '#22D3EE',        // cyan-400 / HUDグロー
        'secondary': '#8B5CF6',      // violet-500
        'accent': '#F472B6',         // pink-400 / 抑えたハイライト

        'text-main': '#E2E8F0',      // slate-200
        'text-sub': '#94A3B8',       // slate-400
        'text-muted': '#64748B',     // slate-500

        'bg-primary': '#0B0F1A',     // deep navy (HUD背景)
        'bg-secondary': '#111827',   // gray-900
        'bg-tertiary': '#1F2937',    // gray-800 (カード背景)

        'code-bg': '#0F172A',
        'code-border': '#334155',    // slate-700
        'terminal-green': '#22D3EE', // 旧名は primary と同値に集約

        // ===== Light Mode: Game Title Screen (ポップ + エネルギッシュ) =====
        'light-primary': '#F97316',     // orange-500
        'light-secondary': '#EC4899',   // pink-500
        'light-accent': '#7C3AED',      // violet-600

        'light-text-main': '#1C1917',   // stone-900
        'light-text-sub': '#44403C',    // stone-700
        'light-text-muted': '#78716C',  // stone-500

        'light-bg-primary': '#FFF7ED',  // orange-50 (クリーム地)
        'light-bg-secondary': '#FFEDD5',// orange-100
        'light-bg-tertiary': '#FED7AA', // orange-200 (カード背景)

        'light-code-bg': '#FFFBF5',
        'light-code-border': '#FDBA74', // orange-300
        'light-terminal-green': '#F97316',

        // 互換維持
        'background': '#0B0F1A',
      },
      fontFamily: {
        'body': ['"Inter"', '"Noto Sans JP"', 'sans-serif'],
        'mono': ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
        'display': ['"M PLUS Rounded 1c"', '"Inter"', '"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
