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
        // ===== Dark Mode: AAA HUD (signature) =====
        'primary': '#22D3EE',        // HUD cyan
        'secondary': '#E879F9',      // magenta accent
        'accent': '#FCD34D',          // rarity / warning yellow

        'text-main': '#E5EEF7',
        'text-sub': '#94A3B8',
        'text-muted': '#475569',

        'bg-primary': '#05070D',     // deep briefing navy
        'bg-secondary': '#0B111E',
        'bg-tertiary': '#121A2A',

        'code-bg': '#0A0F1A',
        'code-border': '#1E293B',
        'terminal-green': '#22D3EE',

        // ===== Light Mode: Daylight Briefing =====
        'light-primary': '#0369A1',    // sky-700
        'light-secondary': '#BE185D',  // pink-700
        'light-accent': '#B45309',     // amber-700

        'light-text-main': '#0F172A',
        'light-text-sub': '#334155',
        'light-text-muted': '#64748B',

        'light-bg-primary': '#F4EEE2',
        'light-bg-secondary': '#EFE6D4',
        'light-bg-tertiary': '#E3D5B8',

        'light-code-bg': '#FBF6EB',
        'light-code-border': '#D4A574',
        'light-terminal-green': '#0369A1',

        // rarity
        'rarity-common': '#94A3B8',
        'rarity-rare': '#22D3EE',
        'rarity-epic': '#E879F9',
        'rarity-legendary': '#FCD34D',

        'background': '#05070D',
      },
      fontFamily: {
        'body': ['"Inter"', '"Noto Sans JP"', 'sans-serif'],
        'mono': ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
        'display': ['"Oxanium"', '"Inter"', '"Noto Sans JP"', 'sans-serif'],
      },
      boxShadow: {
        'hud-glow': '0 0 20px rgba(34, 211, 238, 0.3), 0 0 40px rgba(34, 211, 238, 0.12)',
        'hud-magenta': '0 0 20px rgba(232, 121, 249, 0.3), 0 0 40px rgba(232, 121, 249, 0.12)',
      },
    },
  },
  plugins: [],
}
