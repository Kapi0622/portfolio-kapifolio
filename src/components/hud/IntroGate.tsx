"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'kapifolio_intro_seen';

const BOOT_LOG = [
  '> INIT: KAPI.FOLIO v2.0',
  '> LOADING SYSTEMS ... OK',
  '> LINK_ESTABLISHED',
];

export default function IntroGate() {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [bootStep, setBootStep] = useState(0);

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (!seen) {
      setVisible(true);
      document.body.style.overflow = 'hidden';
    }
    setChecked(true);
  }, []);

  useEffect(() => {
    if (!visible) return;
    let cancelled = false;
    const advance = (i: number) => {
      if (cancelled || i >= BOOT_LOG.length) return;
      setBootStep(i + 1);
      setTimeout(() => advance(i + 1), 420);
    };
    const t = setTimeout(() => advance(0), 300);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const close = () => {
      sessionStorage.setItem(STORAGE_KEY, '1');
      setVisible(false);
      document.body.style.overflow = '';
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return; // let Esc do nothing
      close();
    };
    const onClick = () => close();
    window.addEventListener('keydown', onKey);
    window.addEventListener('click', onClick);
    window.addEventListener('touchstart', onClick, { passive: true });
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('click', onClick);
      window.removeEventListener('touchstart', onClick);
    };
  }, [visible]);

  if (!checked) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-[#05070D] text-[#E5EEF7] flex items-center justify-center hud-grid-bg"
          role="dialog"
          aria-label="起動画面"
        >
          {/* Scan line on top */}
          <div className="absolute inset-0 hud-scanlines" aria-hidden />

          {/* Corner brackets */}
          <div className="pointer-events-none absolute inset-0 text-[#22D3EE] opacity-70" aria-hidden>
            <span className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2" />
            <span className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2" />
            <span className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2" />
            <span className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2" />
          </div>

          <div className="relative text-center px-6">
            {/* Boot log */}
            <div className="mb-10 font-mono text-[#22D3EE] text-xs sm:text-sm space-y-1 text-left inline-block">
              {BOOT_LOG.slice(0, bootStep).map((line, i) => (
                <div key={i} className="opacity-80">{line}</div>
              ))}
              {bootStep < BOOT_LOG.length && <div className="opacity-60 animate-pulse">▍</div>}
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-widest hud-glow-text text-[#22D3EE]"
            >
              KAPI.EXE
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-3 text-xs sm:text-sm font-mono tracking-[0.3em] text-[#94A3B8]"
            >
              PLAYER_01 / GAME × WEB DEVELOPER
            </motion.div>

            {/* Press start */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-16 font-mono text-sm sm:text-base tracking-[0.35em] text-[#E5EEF7]"
            >
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="inline-block"
              >
                ▶ PRESS ANY KEY TO START
              </motion.span>
            </motion.div>
            <div className="mt-3 text-[10px] font-mono text-[#475569]">TAP / CLICK / KEY</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
