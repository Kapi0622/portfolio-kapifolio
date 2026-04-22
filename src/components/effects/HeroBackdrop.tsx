"use client";

import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const SHAPES = [
  { size: 110, top: '12%', left: '6%', delay: 0, shape: 'circle', color: 'light-primary' },
  { size: 70, top: '68%', left: '12%', delay: 0.6, shape: 'triangle', color: 'light-secondary' },
  { size: 90, top: '20%', left: '82%', delay: 1.2, shape: 'square', color: 'light-accent' },
  { size: 140, top: '72%', left: '78%', delay: 0.3, shape: 'circle', color: 'light-secondary' },
  { size: 55, top: '40%', left: '88%', delay: 0.9, shape: 'triangle', color: 'light-primary' },
];

function Shape({ s }: { s: typeof SHAPES[number] }) {
  const colorCls =
    s.color === 'light-primary'
      ? 'bg-light-primary/20 border-light-primary/40'
      : s.color === 'light-secondary'
      ? 'bg-light-secondary/20 border-light-secondary/40'
      : 'bg-light-accent/20 border-light-accent/40';

  const base = `absolute border ${colorCls}`;
  const style: React.CSSProperties = {
    width: s.size,
    height: s.size,
    top: s.top,
    left: s.left,
  };

  const motionProps = {
    animate: { y: [0, -16, 0], rotate: [0, 8, 0] },
    transition: { duration: 8 + s.delay, repeat: Infinity, ease: 'easeInOut' as const, delay: s.delay },
  };

  if (s.shape === 'circle') {
    return <motion.div className={`${base} rounded-full`} style={style} {...motionProps} />;
  }
  if (s.shape === 'square') {
    return <motion.div className={`${base} rounded-xl rotate-12`} style={style} {...motionProps} />;
  }
  // triangle (via CSS clip-path)
  return (
    <motion.div
      className={`${base}`}
      style={{ ...style, clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', borderRadius: 0 }}
      {...motionProps}
    />
  );
}

function StarField() {
  // Grid-like pseudo-random stars, deterministic positions to avoid hydration mismatch.
  const stars = Array.from({ length: 40 }, (_, i) => {
    const seed = i * 9301 + 49297;
    const x = (seed % 100) + ((i * 7) % 3) - 1;
    const y = ((seed / 7) | 0) % 100;
    const size = (i % 3) + 1;
    const delay = (i % 10) * 0.2;
    return { x: Math.max(0, Math.min(99, x)), y, size, delay };
  });

  return (
    <>
      {stars.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-text-main"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            opacity: 0.4,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2 + s.delay, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
        />
      ))}
    </>
  );
}

export default function HeroBackdrop() {
  const { isDark, isClient } = useTheme();

  if (!isClient) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {isDark ? <StarField /> : SHAPES.map((s, i) => <Shape key={i} s={s} />)}
    </div>
  );
}
