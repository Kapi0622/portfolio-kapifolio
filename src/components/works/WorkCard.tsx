"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import type { Work } from '../../lib/works';

type Props = { work: Work };

export default function WorkCard({ work }: Props) {
  const { isDark } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  // mouse-following tilt (max 6deg)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 180, damping: 18 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardBg = isDark
    ? 'bg-bg-secondary border-code-border hover:border-primary/60'
    : 'bg-light-bg-secondary border-light-code-border hover:border-light-primary/60';
  const title = isDark ? 'text-text-main' : 'text-light-text-main';
  const muted = isDark ? 'text-text-sub' : 'text-light-text-sub';
  const badge = isDark
    ? 'bg-bg-tertiary border-code-border text-text-sub'
    : 'bg-light-bg-tertiary border-light-code-border text-light-text-sub';
  const typeBadge = (type: string) =>
    type === '個人開発'
      ? (isDark ? 'bg-secondary/15 text-secondary border-secondary/40' : 'bg-light-secondary/15 text-light-secondary border-light-secondary/40')
      : (isDark ? 'bg-primary/15 text-primary border-primary/40' : 'bg-light-primary/15 text-light-primary border-light-primary/40');

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Link
        href={`/works/${work.slug}`}
        className={`group block h-full rounded-xl border overflow-hidden transition-colors duration-300 ${cardBg}`}
      >
        <div className={`relative w-full aspect-video overflow-hidden ${isDark ? 'bg-bg-tertiary' : 'bg-light-bg-tertiary'}`}>
          <Image
            src={work.mainImage}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className={`text-lg sm:text-xl font-bold ${title}`}>{work.title}</h3>
          </div>
          <div className={`text-xs ${muted} mb-3`}>
            {work.genre}
            {work.period && <> ・ {work.period}</>}
          </div>
          <p className={`text-sm ${muted} mb-4 line-clamp-2`}>{work.summary}</p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {work.stack.slice(0, 4).map((t) => (
              <span key={t} className={`px-2 py-0.5 text-[11px] rounded border ${badge}`}>{t}</span>
            ))}
            {work.stack.length > 4 && (
              <span className={`px-2 py-0.5 text-[11px] rounded border ${badge}`}>+{work.stack.length - 4}</span>
            )}
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span className={`px-2 py-0.5 rounded border ${typeBadge(work.developmentType)}`}>{work.developmentType}</span>
            {work.contests && work.contests.length > 0 && (
              <span className={`px-2 py-0.5 rounded border ${badge}`}>{work.contests[0]}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
