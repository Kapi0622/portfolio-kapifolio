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

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 180, damping: 18 });

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

  const cardBorder = isDark
    ? 'border-code-border hover:border-primary/60'
    : 'border-light-code-border hover:border-light-primary/60';
  const footerBg = isDark
    ? 'bg-bg-secondary border-code-border'
    : 'bg-light-bg-secondary border-light-code-border';
  const badge = isDark
    ? 'bg-bg-tertiary/80 border-code-border text-text-sub backdrop-blur-sm'
    : 'bg-light-bg-tertiary/80 border-light-code-border text-light-text-sub backdrop-blur-sm';
  const typeBadge = (type: string) =>
    type === '個人開発'
      ? (isDark ? 'bg-secondary/80 text-white border-secondary' : 'bg-light-secondary/90 text-white border-light-secondary')
      : (isDark ? 'bg-primary/80 text-bg-primary border-primary' : 'bg-light-primary/90 text-white border-light-primary');

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
        className={`group block h-full rounded-2xl border overflow-hidden transition-colors duration-300 ${cardBorder}`}
      >
        {/* カバー画像 (1:1) + オーバーレイ */}
        <div className={`relative w-full aspect-square overflow-hidden ${isDark ? 'bg-bg-tertiary' : 'bg-light-bg-tertiary'}`}>
          <Image
            src={work.mainImage}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* 下部グラデーション */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

          {/* 右上: 開発タイプバッジ */}
          <div className="absolute top-3 right-3">
            <span className={`px-2 py-0.5 text-[11px] rounded-full border font-medium ${typeBadge(work.developmentType)}`}>
              {work.developmentType}
            </span>
          </div>

          {/* 左下: タイトル + ジャンル */}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="text-[11px] text-white/70 mb-1">
              {work.genre}
              {work.period && <> ・ {work.period}</>}
            </div>
            <h3 className="text-white text-lg sm:text-xl font-bold leading-tight line-clamp-2">
              {work.title}
            </h3>
          </div>
        </div>

        {/* フッター: 技術スタックのみ */}
        <div className={`flex flex-wrap items-center gap-1.5 px-4 py-3 border-t ${footerBg}`}>
          {work.stack.slice(0, 3).map((t) => (
            <span key={t} className={`px-2 py-0.5 text-[11px] rounded border ${badge}`}>{t}</span>
          ))}
          {work.stack.length > 3 && (
            <span className={`px-2 py-0.5 text-[11px] rounded border ${badge}`}>+{work.stack.length - 3}</span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
