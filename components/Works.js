"use client";

import { motion } from 'framer-motion';
import { useTheme } from '../src/contexts/ThemeContext';
import WorkCard from '../src/components/works/WorkCard';
import SectionBanner from '../src/components/hud/SectionBanner';

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
  const items = works ?? [];

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
          title="ARSENAL — UNLOCKED PROJECTS"
          subtitle="これまでに携わった成果物。カードをクリックで詳細ページへ。"
          count={items.length}
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          variants={containerVariants}
        >
          {items.map((work) => (
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
