"use client";

import { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

function CornerBracket({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const base = 'absolute w-6 h-6 border-[1.5px] opacity-70';
  const pos = {
    tl: 'top-3 left-3 border-r-0 border-b-0',
    tr: 'top-3 right-3 border-l-0 border-b-0',
    bl: 'bottom-3 left-3 border-r-0 border-t-0',
    br: 'bottom-3 right-3 border-l-0 border-t-0',
  }[position];
  return <span className={`${base} ${pos}`} aria-hidden />;
}

export default function HudChrome() {
  const { isDark, isClient } = useTheme();
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    if (!isClient) return;
    const update = () => {
      const d = new Date();
      const h = d.getHours().toString().padStart(2, '0');
      const m = d.getMinutes().toString().padStart(2, '0');
      const s = d.getSeconds().toString().padStart(2, '0');
      setTime(`${h}:${m}:${s}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [isClient]);

  const color = isDark ? 'text-primary' : 'text-light-primary';
  const muted = isDark ? 'text-text-muted' : 'text-light-text-muted';

  return (
    <>
      {/* scanlines overlay: body level class used instead */}

      {/* 4-corner brackets (fixed) */}
      <div className={`pointer-events-none fixed inset-0 z-40 ${color}`} aria-hidden>
        <CornerBracket position="tl" />
        <CornerBracket position="tr" />
        <CornerBracket position="bl" />
        <CornerBracket position="br" />
      </div>

      {/* Top-left status marker (hidden on narrow) */}
      <div
        className={`pointer-events-none hidden sm:flex fixed top-3 left-12 z-40 font-mono text-[10px] tracking-wider ${muted} items-center gap-1.5`}
        aria-hidden
      >
        <span className={`h-1.5 w-1.5 rounded-full ${isDark ? 'bg-primary' : 'bg-light-primary'} animate-pulse`} />
        <span>SYS_ONLINE</span>
        <span className="opacity-60">/</span>
        <span>KAPI.FOLIO v2.0</span>
      </div>

      {/* Top-right clock (hidden on narrow) */}
      <div
        className={`pointer-events-none hidden sm:block fixed top-3 right-12 z-40 font-mono text-[10px] tracking-wider ${muted}`}
        aria-hidden
      >
        <span className="opacity-70 mr-2">TIME_LOCAL</span>
        <span className={color}>{time || '00:00:00'}</span>
      </div>

      {/* Bottom-right coordinates (fake, hidden on narrow) */}
      <div
        className={`pointer-events-none hidden sm:block fixed bottom-3 right-12 z-40 font-mono text-[10px] tracking-wider ${muted}`}
        aria-hidden
      >
        LAT 36.58N / LNG 136.63E
      </div>

      {/* Bottom-left mode (hidden on narrow) */}
      <div
        className={`pointer-events-none hidden sm:block fixed bottom-3 left-12 z-40 font-mono text-[10px] tracking-wider ${muted}`}
        aria-hidden
      >
        MODE <span className={color}>{isDark ? 'NIGHT_OPS' : 'DAY_BRIEF'}</span>
      </div>
    </>
  );
}
