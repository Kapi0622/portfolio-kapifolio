"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import SectionBanner from '../hud/SectionBanner';
import type { SkillsData, SkillItem } from '../../lib/skills';

type Props = { skills: SkillsData };

function levelLabel(level: SkillItem['level']) {
  return `LV.${level}`;
}

function PipBar({ level, isDark }: { level: SkillItem['level']; isDark: boolean }) {
  const filled = isDark ? 'bg-primary' : 'bg-light-primary';
  const empty = isDark ? 'bg-bg-tertiary border border-code-border' : 'bg-light-bg-tertiary border border-light-code-border';
  return (
    <div className="flex gap-1.5">
      {([1, 2, 3, 4, 5] as const).map((i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, delay: i * 0.07 }}
          className={`w-3 h-3 rounded-sm ${i <= level ? filled : empty}`}
        />
      ))}
    </div>
  );
}

export default function SkillsSection({ skills }: Props) {
  const { isDark } = useTheme();
  const [activeIdx, setActiveIdx] = useState(0);

  const sectionBg = isDark ? 'bg-bg-secondary text-text-main' : 'bg-light-bg-secondary text-light-text-main';
  const cardBg = isDark ? 'bg-bg-primary border-code-border' : 'bg-light-bg-primary border-light-code-border';
  const accent = isDark ? 'text-primary' : 'text-light-primary';
  const muted = isDark ? 'text-text-sub' : 'text-light-text-sub';
  const subtle = isDark ? 'text-text-muted' : 'text-light-text-muted';
  const active = skills.groups[activeIdx];

  return (
    <section id="skills" className={`py-24 sm:py-28 md:py-32 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionBanner
          stage="STAGE_02"
          title="STATUS PANEL — SKILLS"
          subtitle="ステータスはおよその自己評価。カテゴリをクリックで切替。"
        />

        {/* レベル凡例 */}
        <div className={`mb-6 rounded-lg border px-5 py-4 font-mono ${isDark ? 'border-code-border bg-bg-primary' : 'border-light-code-border bg-light-bg-primary'}`}>
          <div className={`text-[10px] tracking-[0.3em] mb-3 ${subtle}`}>LEVEL_LEGEND</div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
            {[
              { label: 'LV.1', en: 'AWARE',     ja: '概念・用途を理解している' },
              { label: 'LV.2', en: 'GUIDED',    ja: '参考を見ながら使える' },
              { label: 'LV.3', en: 'CAPABLE',   ja: 'おおむね自力で使える（たまに調べる）' },
              { label: 'LV.4', en: 'CONFIDENT', ja: '自分の判断で適用・選定できる' },
              { label: 'LV.5', en: 'MASTERED',  ja: '深く理解し、自分のものにしている' },
            ].map(({ label, en, ja }) => (
              <div key={label} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className={`text-xs border px-1.5 rounded-sm ${isDark ? 'border-code-border text-text-muted' : 'border-light-code-border text-light-text-muted'}`}>{label}</span>
                  <span className={`text-[10px] tracking-widest font-bold ${accent}`}>{en}</span>
                </div>
                <span className={`text-[11px] leading-tight ${muted}`}>{ja}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* カテゴリサイドバー */}
          <nav className="lg:col-span-1 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {skills.groups.map((g, i) => {
              const isActive = i === activeIdx;
              return (
                <button
                  key={g.name}
                  onClick={() => setActiveIdx(i)}
                  className={`relative text-left px-4 py-3 rounded-md border transition-colors shrink-0 font-mono ${
                    isActive
                      ? isDark
                        ? 'bg-primary/10 border-primary text-primary'
                        : 'bg-light-primary/10 border-light-primary text-light-primary'
                      : isDark
                        ? 'border-code-border text-text-sub hover:bg-bg-tertiary'
                        : 'border-light-code-border text-light-text-sub hover:bg-light-bg-tertiary'
                  }`}
                >
                  <div className={`text-[10px] tracking-[0.3em] ${isActive ? accent : subtle}`}>
                    CLASS_{String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="text-sm font-bold mt-0.5">{g.code ?? g.name}</div>
                </button>
              );
            })}
          </nav>

          {/* アクティブカテゴリ詳細 */}
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`lg:col-span-3 rounded-xl border p-6 sm:p-8 ${cardBg} hud-corner-frame ${accent}`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl sm:text-2xl font-bold">{active.name}</h3>
              <span className={`text-[11px] font-mono tracking-widest ${muted}`}>
                {active.items.length} SKILLS
              </span>
            </div>
            <ul className="space-y-5">
              {active.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className={`font-display font-semibold ${isDark ? 'text-text-main' : 'text-light-text-main'}`}>{item.name}</span>
                      <span className={`text-[10px] font-mono tracking-widest border px-1.5 rounded-sm ${
                        isDark ? 'border-code-border text-text-muted' : 'border-light-code-border text-light-text-muted'
                      }`}>
                        {levelLabel(item.level)}
                      </span>
                    </div>
                    <PipBar level={item.level} isDark={isDark} />
                  </div>
                  {item.note && (
                    <p className={`mt-1 text-xs ${muted}`}>{item.note}</p>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
