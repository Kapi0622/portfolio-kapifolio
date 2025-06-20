/** @type {import('tailwindcss').Config} */
module.exports = {  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {      colors: {
        'primary': '#0ea5e9', // アクセントカラー (sky-500)
        'secondary': '#7dd3fc', // サブのアクセント (sky-300)
        'text-main': '#0f172a', // メインテキスト (slate-900)
        'text-sub': '#64748b', // サブテキスト (slate-500)
        'background': '#f0f9ff', // 背景色 (sky-50)
      },
      fontFamily: {
        'body': ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}