"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import SectionBanner from '../hud/SectionBanner';
import type { SkillsData, SkillItem } from '../../lib/skills';

type Props = { skills: SkillsData };

function levelLabel(level: SkillItem['level']) {
  return level === 'proficient' ? 'LV.3' : level === 'learning' ? 'LV.2' : 'LV.1';
}

function StatBar({ percent, isDark }: { percent: number; isDark: boolean }) {
  const barBg = isDark ? 'bg-bg-primary' : 'bg-light-bg-primary';
  const fill = isDark ? 'bg-primary' : 'bg-light-primary';
  return (
    <div className={`relative h-2 rounded-sm overflow-hidden border ${isDark ? 'border-code-border' : 'border-light-code-border'} ${barBg}`}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className={`absolute inset-y-0 left-0 ${fill}`}
      />
      {/* Tick marks */}
      <div className="absolute inset-0 flex">
        {[1, 2, 3, 4].map((i) => (
          <span key={i} className={`flex-1 border-r ${isDark ? 'border-code-border/60' : 'border-light-code-border/60'} last:border-r-0`} />
        ))}
      </div>
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
              {active.items.map((item) => {
                const pct = item.levelPercent ?? (item.level === 'proficient' ? 70 : item.level === 'learning' ? 40 : 25);
                return (
                  <li key={item.name}>
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`font-display font-semibold ${isDark ? 'text-text-main' : 'text-light-text-main'}`}>{item.name}</span>
                        <span className={`text-[10px] font-mono tracking-widest border px-1.5 rounded-sm ${
                          isDark ? 'border-code-border text-text-muted' : 'border-light-code-border text-light-text-muted'
                        }`}>
                          {levelLabel(item.level)}
                        </span>
                      </div>
                      <span className={`font-mono text-xs ${accent}`}>{pct}%</span>
                    </div>
                    <StatBar percent={pct} isDark={isDark} />
                    {item.note && (
                      <p className={`mt-1.5 text-xs ${muted}`}>{item.note}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
