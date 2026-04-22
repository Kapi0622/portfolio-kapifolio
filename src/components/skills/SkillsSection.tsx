"use client";

import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import type { SkillGroup, SkillLevel, SkillsData } from '../../lib/skills';

type Props = { skills: SkillsData };

const LEVEL_LABEL: Record<SkillLevel, string> = {
  proficient: '実務レベル',
  learning: '学習中',
  familiar: '基礎理解',
};

function levelClasses(level: SkillLevel, isDark: boolean) {
  if (isDark) {
    switch (level) {
      case 'proficient': return 'bg-primary/15 text-primary border-primary/40';
      case 'learning': return 'bg-secondary/15 text-secondary border-secondary/40';
      case 'familiar': return 'bg-bg-tertiary text-text-sub border-code-border';
    }
  }
  switch (level) {
    case 'proficient': return 'bg-light-primary/15 text-light-primary border-light-primary/40';
    case 'learning': return 'bg-light-secondary/15 text-light-secondary border-light-secondary/40';
    case 'familiar': return 'bg-light-bg-tertiary text-light-text-sub border-light-code-border';
  }
}

function GroupCard({ group, isDark }: { group: SkillGroup; isDark: boolean }) {
  const cardBg = isDark
    ? 'bg-bg-secondary border-code-border'
    : 'bg-light-bg-secondary border-light-code-border';
  const heading = isDark ? 'text-text-main' : 'text-light-text-main';
  const muted = isDark ? 'text-text-sub' : 'text-light-text-sub';
  const itemBg = isDark ? 'bg-bg-primary' : 'bg-light-bg-primary';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl border p-6 ${cardBg}`}
    >
      <h3 className={`text-lg font-bold mb-4 ${heading}`}>{group.name}</h3>
      <ul className="space-y-2">
        {group.items.map((item) => (
          <li key={item.name} className={`rounded-lg px-3 py-2 ${itemBg}`}>
            <div className="flex items-center justify-between gap-2">
              <span className={`font-medium ${heading}`}>{item.name}</span>
              <span className={`shrink-0 text-[11px] px-2 py-0.5 rounded-full border ${levelClasses(item.level, isDark)}`}>
                {LEVEL_LABEL[item.level]}
              </span>
            </div>
            {item.note && (
              <p className={`text-xs mt-1 ${muted}`}>{item.note}</p>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function SkillsSection({ skills }: Props) {
  const { isDark } = useTheme();
  const sectionBg = isDark
    ? 'bg-bg-primary text-text-main'
    : 'bg-light-bg-primary text-light-text-main';
  const heading = isDark ? 'text-primary' : 'text-light-primary';
  const muted = isDark ? 'text-text-sub' : 'text-light-text-sub';

  return (
    <section id="skills" className={`py-24 sm:py-28 md:py-32 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 ${heading}`}
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mb-10 sm:mb-12 text-base sm:text-lg ${muted}`}
        >
          ゲーム・Web 両面で手を動かせる、そして設計で支える。
        </motion.p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {skills.groups.map((group) => (
            <GroupCard key={group.name} group={group} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
}
