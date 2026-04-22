"use client";

import { useTheme } from '../../contexts/ThemeContext';

type Props = {
  stage: string;   // e.g. "STAGE_01"
  title: string;   // e.g. "ARSENAL — UNLOCKED PROJECTS"
  subtitle?: string; // small meta
  count?: number;  // [7]
};

export default function SectionBanner({ stage, title, subtitle, count }: Props) {
  const { isDark } = useTheme();
  const accent = isDark ? 'text-primary' : 'text-light-primary';
  const muted = isDark ? 'text-text-muted' : 'text-light-text-muted';
  const main = isDark ? 'text-text-main' : 'text-light-text-main';
  const border = isDark ? 'border-code-border' : 'border-light-code-border';

  return (
    <div className="mb-10 sm:mb-12">
      <div className={`flex items-center gap-3 text-[11px] font-mono tracking-[0.2em] uppercase ${accent}`}>
        <span className={`inline-block w-8 h-px ${isDark ? 'bg-primary' : 'bg-light-primary'}`} />
        <span>{stage}</span>
        <span className={`${muted} opacity-60`}>{'//'}</span>
        <span className={muted}>LOADED</span>
      </div>
      <div className="mt-2 flex items-baseline gap-3 flex-wrap">
        <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${main}`}>
          {title}
        </h2>
        {typeof count === 'number' && (
          <span className={`font-mono text-lg ${accent}`}>
            [{count.toString().padStart(2, '0')}]
          </span>
        )}
      </div>
      {subtitle && (
        <p className={`mt-2 text-sm ${muted}`}>{subtitle}</p>
      )}
      <div className={`mt-4 h-px w-full ${border} border-t`} />
    </div>
  );
}
