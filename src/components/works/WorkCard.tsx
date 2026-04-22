"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import type { Work, Rarity } from '../../lib/works';

type Props = { work: Work };

const RARITY_META: Record<Rarity, { label: string; text: string; border: string; glow: string; bar: string }> = {
  COMMON: {
    label: 'COMMON',
    text: 'text-rarity-common',
    border: 'border-rarity-common/50',
    glow: 'shadow-[0_0_0_0_transparent]',
    bar: 'bg-rarity-common',
  },
  RARE: {
    label: 'RARE',
    text: 'text-rarity-rare',
    border: 'border-rarity-rare/60',
    glow: 'shadow-[0_0_16px_rgba(34,211,238,0.35)]',
    bar: 'bg-rarity-rare',
  },
  EPIC: {
    label: 'EPIC',
    text: 'text-rarity-epic',
    border: 'border-rarity-epic/60',
    glow: 'shadow-[0_0_20px_rgba(232,121,249,0.35)]',
    bar: 'bg-rarity-epic',
  },
  LEGENDARY: {
    label: 'LEGENDARY',
    text: 'text-rarity-legendary',
    border: 'border-rarity-legendary/70',
    glow: 'shadow-[0_0_24px_rgba(252,211,77,0.45)]',
    bar: 'bg-rarity-legendary',
  },
};

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
  const handleLeave = () => { x.set(0); y.set(0); };

  const rarity: Rarity = work.rarity ?? 'COMMON';
  const rmeta = RARITY_META[rarity];

  const cardBg = isDark ? 'bg-bg-secondary' : 'bg-light-bg-secondary';
  const footerBg = isDark ? 'bg-bg-primary border-code-border' : 'bg-light-bg-primary border-light-code-border';
  const badge = isDark
    ? 'bg-bg-tertiary/80 border-code-border text-text-sub'
    : 'bg-light-bg-tertiary/80 border-light-code-border text-light-text-sub';

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`h-full rounded-xl border-2 ${rmeta.border} ${rmeta.glow} ${cardBg} overflow-hidden relative`}
    >
      {/* rarity ribbon */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${rmeta.bar} z-10`} />

      <Link href={`/works/${work.slug}`} className="block h-full">
        {/* 画像 (1:1) + コーナーブラケット + オーバーレイ */}
        <div className={`relative w-full aspect-square overflow-hidden ${isDark ? 'bg-bg-tertiary' : 'bg-light-bg-tertiary'}`}>
          <Image
            src={work.mainImage}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Gradient at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

          {/* corner brackets */}
          <div className={`pointer-events-none absolute inset-2 ${rmeta.text}`} aria-hidden>
            <span className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2" />
            <span className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2" />
          </div>

          {/* rarity chip top-right */}
          <div className="absolute top-3 right-3 z-10">
            <span className={`px-2 py-0.5 text-[10px] font-mono tracking-widest border backdrop-blur-sm ${rmeta.text} ${rmeta.border} bg-black/40 rounded-sm`}>
              ◆ {rmeta.label}
            </span>
          </div>

          {/* title / genre left-bottom */}
          <div className="absolute inset-x-0 bottom-0 p-4 z-10">
            <div className="text-[10px] font-mono text-white/70 tracking-widest mb-1 uppercase">
              {work.genre}
              {work.period && <> · {work.period}</>}
            </div>
            <h3 className="text-white text-lg sm:text-xl font-bold font-display leading-tight line-clamp-2">
              {work.title}
            </h3>
          </div>
        </div>

        {/* フッター */}
        <div className={`px-4 py-3 border-t ${footerBg} flex items-center gap-2 flex-wrap`}>
          <span className={`text-[10px] font-mono tracking-widest ${isDark ? 'text-text-muted' : 'text-light-text-muted'}`}>
            EQUIP
          </span>
          {work.stack.slice(0, 3).map((t) => (
            <span key={t} className={`px-2 py-0.5 text-[10px] rounded border ${badge}`}>{t}</span>
          ))}
          {work.stack.length > 3 && (
            <span className={`px-2 py-0.5 text-[10px] rounded border ${badge}`}>+{work.stack.length - 3}</span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
