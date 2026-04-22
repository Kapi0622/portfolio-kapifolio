"use client";

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const HeroModel = dynamic(() => import('./effects/HeroModel'), { ssr: false });

const STATS = [
  { label: 'LVL', value: '20' },
  { label: 'PROG', value: '3Y' },
  { label: 'PROJECTS', value: '07' },
  { label: 'BUILDS', value: '∞' },
];

const BOOT_LINES = [
  '> booting kapi.sys',
  '> loading identity ... ok',
  '> mission_ready',
];

export default function HomeHero() {
  const { isDark } = useTheme();

  const main = isDark ? 'text-text-main' : 'text-light-text-main';
  const muted = isDark ? 'text-text-sub' : 'text-light-text-sub';
  const subtle = isDark ? 'text-text-muted' : 'text-light-text-muted';
  const accent = isDark ? 'text-primary' : 'text-light-primary';
  const accentBg = isDark ? 'bg-primary text-bg-primary' : 'bg-light-primary text-white';
  const border = isDark ? 'border-code-border' : 'border-light-code-border';

  return (
    <section id="top" className="relative overflow-hidden min-h-[90vh] flex items-center hud-grid-bg">
      {/* radial glow */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.2),transparent_60%),radial-gradient(circle_at_20%_80%,rgba(232,121,249,0.15),transparent_55%)]'
            : 'bg-[radial-gradient(circle_at_70%_30%,rgba(3,105,161,0.22),transparent_60%),rgba(244,238,226,0.3)]'
        }`}
      />

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-12 py-20 sm:py-24 grid lg:grid-cols-12 gap-8 items-center">
        {/* 左: タイトル */}
        <div className="lg:col-span-7">
          {/* boot lines */}
          <div className={`font-mono text-[11px] tracking-widest ${accent} mb-6 space-y-1`}>
            {BOOT_LINES.map((l, i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.15, duration: 0.3 }}
              >
                {l}
              </motion.div>
            ))}
          </div>

          {/* Big title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className={`font-display font-extrabold tracking-tight text-6xl sm:text-8xl md:text-9xl leading-[0.9] ${main}`}
          >
            KAPI<span className={accent}>.</span>EXE
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className={`mt-4 font-mono text-[11px] sm:text-sm tracking-[0.3em] ${muted}`}
          >
            PLAYER_01 / GAME <span className={accent}>×</span> WEB DEVELOPER
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className={`mt-8 text-lg sm:text-xl md:text-2xl font-medium max-w-2xl ${main}`}
          >
            ゲームと Web で、日常に<span className={isDark ? 'text-secondary' : 'text-light-secondary'}>彩り</span>と<span className={accent}>活力</span>を生み出すエンジニア。
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.5 }}
            className={`mt-3 text-sm max-w-xl ${muted}`}
          >
            Unity / C# を中心にゲームを作り、React / Next.js で Web も作る。MVP や State Pattern など、保守性の高いアーキテクチャを意識した設計を好みます。
          </motion.p>

          {/* Stats ticker */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className={`mt-10 flex flex-wrap gap-3 font-mono`}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className={`flex items-center gap-2 border px-3 py-1.5 rounded-md ${border}`}
              >
                <span className={`text-[10px] tracking-widest ${subtle}`}>{s.label}</span>
                <span className={`text-sm font-bold ${accent}`}>{s.value}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              href="#works"
              className={`group relative inline-flex items-center gap-2 px-6 py-3 rounded-md font-display font-bold text-sm tracking-widest transition-colors ${accentBg}`}
            >
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ▶
              </motion.span>
              START
              <span className="opacity-70 text-[10px] ml-2 font-mono">[ 作品を見る ]</span>
            </Link>
            <Link
              href="#contact"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-md border font-display text-sm tracking-widest transition-colors ${border} ${main} hover:${isDark ? 'bg-bg-tertiary' : 'bg-light-bg-tertiary'}`}
            >
              COMMS
              <span className="opacity-70 text-[10px] font-mono">[ 連絡 ]</span>
            </Link>
          </motion.div>
        </div>

        {/* 右: 3D モデル */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="lg:col-span-5 relative hidden lg:block"
        >
          <div className={`relative w-full max-w-md mx-auto border ${border} rounded-xl p-4 hud-corner-frame ${accent}`}>
            <div className={`text-[10px] font-mono tracking-widest ${subtle} mb-2 flex justify-between`}>
              <span>AVATAR.MESH</span>
              <span>WIREFRAME</span>
            </div>
            <HeroModel />
            <div className={`mt-2 font-mono text-[10px] tracking-widest ${subtle} flex justify-between`}>
              <span>RENDERED: WEBGL</span>
              <span className={`${accent}`}>● LIVE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
