"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import HeroBackdrop from './effects/HeroBackdrop';

const TECH_BADGES = ['Unity', 'C#', 'Next.js', 'TypeScript', 'MVP / State Pattern'];

export default function HomeHero() {
  const { isDark } = useTheme();

  const textMain = isDark ? 'text-text-main' : 'text-light-text-main';
  const textSub = isDark ? 'text-text-sub' : 'text-light-text-sub';
  const accent = isDark ? 'text-primary' : 'text-light-primary';
  const secondary = isDark ? 'text-secondary' : 'text-light-secondary';
  const badge = isDark
    ? 'bg-bg-tertiary border-code-border text-text-sub'
    : 'bg-light-bg-tertiary border-light-code-border text-light-text-sub';
  const primaryBtn = isDark
    ? 'bg-primary text-bg-primary hover:bg-primary/80'
    : 'bg-light-primary text-white hover:bg-light-primary/85';
  const ghostBtn = isDark
    ? 'border border-code-border text-text-main hover:bg-bg-tertiary'
    : 'border border-light-code-border text-light-text-main hover:bg-light-bg-tertiary';

  return (
    <section id="top" className="relative overflow-hidden">
      {/* 背景: グラデーション + 浮遊シェイプ / 星空 */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_60%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.15),transparent_60%)]'
            : 'bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.22),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.18),transparent_55%)]'
        }`}
      />
      <HeroBackdrop />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-28 sm:pt-28 sm:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wider uppercase ${textSub} mb-6`}
        >
          <span className={`h-2 w-2 rounded-full ${isDark ? 'bg-primary' : 'bg-light-primary'} animate-pulse`} />
          Game <span className={accent}>×</span> Web Developer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`font-display font-bold tracking-tight text-5xl sm:text-7xl md:text-8xl ${textMain}`}
        >
          Kapi<span className={accent}>.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-6 text-lg sm:text-2xl font-medium max-w-2xl ${textMain}`}
        >
          ゲームと Web で、日常に<span className={secondary}>彩り</span>と<span className={accent}>活力</span>を生み出すエンジニア。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-3 text-sm sm:text-base max-w-xl ${textSub}`}
        >
          Unity / C# を中心にゲームを作り、React / Next.js で Web も作る。MVP や State Pattern など、保守性の高いアーキテクチャを意識した設計を好みます。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {TECH_BADGES.map((t) => (
            <span key={t} className={`px-3 py-1 text-xs sm:text-sm rounded-full border ${badge}`}>
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link
            href="#works"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-colors ${primaryBtn}`}
          >
            作品を見る
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="#contact"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-colors ${ghostBtn}`}
          >
            お問い合わせ
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
