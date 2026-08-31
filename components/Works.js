"use client";

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../src/contexts/ThemeContext';
import WorkCard from '../src/components/works/WorkCard';
import SectionBanner from '../src/components/hud/SectionBanner';
import { WORK_CATEGORY_LABELS, WORK_CATEGORY_ORDER } from '../src/lib/workCategories';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/**
 * @param {{ works?: import('../src/lib/works').Work[] }} props
 */
const Works = ({ works }) => {
  const { isDark } = useTheme();
  const items = useMemo(() => works ?? [], [works]);

  const catOf = (w) => w.category ?? 'other';

  // 実際に作品が存在するカテゴリだけボタンを出す（先頭は「全て」）
  const filters = useMemo(() => {
    const list = [{ key: 'all', label: '全て', count: items.length }];
    for (const key of WORK_CATEGORY_ORDER) {
      const count = items.filter((w) => catOf(w) === key).length;
      if (count > 0) list.push({ key, label: WORK_CATEGORY_LABELS[key], count });
    }
    return list;
  }, [items]);

  const hasGame = items.some((w) => catOf(w) === 'game');
  const [activeKey, setActiveKey] = useState(hasGame ? 'game' : 'all');

  const filtered = useMemo(
    () => (activeKey === 'all' ? items : items.filter((w) => catOf(w) === activeKey)),
    [items, activeKey]
  );

  return (
    <motion.section
      id="works"
      className={`py-24 sm:py-28 md:py-32 transition-colors duration-300 ${
        isDark ? 'bg-bg-primary text-text-main' : 'bg-light-bg-primary text-light-text-main'
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.05 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionBanner
          stage="STAGE_01"
          title="作品一覧"
          subtitle="これまでに携わった成果物。カードをクリックで詳細ページへ。"
          count={filtered.length}
        />

        {/* ジャンル切り替え */}
        <div className="mb-8 sm:mb-10 flex flex-wrap gap-2">
          {filters.map((f) => {
            const isActive = f.key === activeKey;
            return (
              <button
                key={f.key}
                onClick={() => setActiveKey(f.key)}
                className={`font-mono text-sm px-4 py-2 rounded-md border transition-colors ${
                  isActive
                    ? isDark
                      ? 'bg-primary/10 border-primary text-primary'
                      : 'bg-light-primary/10 border-light-primary text-light-primary'
                    : isDark
                      ? 'border-code-border text-text-sub hover:bg-bg-tertiary'
                      : 'border-light-code-border text-light-text-sub hover:bg-light-bg-tertiary'
                }`}
              >
                {f.label}
                <span className="ml-1.5 text-[11px] opacity-60">{f.count}</span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeKey}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filtered.map((work) => (
            <motion.div key={work.slug} variants={cardVariants}>
              <WorkCard work={work} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Works;
