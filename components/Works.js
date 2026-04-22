"use client";

import { motion } from 'framer-motion';
import { useTheme } from '../src/contexts/ThemeContext';
import WorkCard from '../src/components/works/WorkCard';

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
  const items = works ?? [];
  const { isDark } = useTheme();

  return (
    <motion.section
      id="works"
      className={`py-24 sm:py-28 md:py-32 lg:py-40 transition-colors duration-300 ${
        isDark ? 'bg-bg-primary text-text-main' : 'bg-light-bg-primary text-light-text-main'
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 ${
            isDark ? 'text-primary' : 'text-light-primary'
          }`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Works
        </motion.h2>
        <motion.p
          className={`mb-10 sm:mb-12 text-base sm:text-lg ${
            isDark ? 'text-text-sub' : 'text-light-text-sub'
          }`}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          これまでに携わった成果物。クリックで詳細ページへ。
        </motion.p>

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
