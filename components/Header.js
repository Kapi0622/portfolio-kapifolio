"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../src/contexts/ThemeContext';
import { useScrollSpy } from '../src/hooks/useScrollSpy';

const navLinks = [
  { name: 'WORKS', jp: '成果物', href: '/#works', id: 'works' },
  { name: 'SKILLS', jp: 'スキル', href: '/#skills', id: 'skills' },
  { name: 'QUESTS', jp: 'イベント', href: '/#events', id: 'events' },
  { name: 'PROFILE', jp: '略歴', href: '/#profile', id: 'profile' },
  { name: 'COMMS', jp: '連絡', href: '/#contact', id: 'contact' },
];

const SPY_IDS = navLinks.map((l) => l.id);

const ThemeToggle = ({ isDark, onToggle }) => (
  <button
    onClick={onToggle}
    aria-label={isDark ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
    className={`relative h-8 px-2 rounded-md border font-mono text-[10px] tracking-widest transition-colors ${
      isDark
        ? 'border-code-border text-primary hover:bg-bg-tertiary'
        : 'border-light-code-border text-light-primary hover:bg-light-bg-tertiary'
    }`}
  >
    <span className="mr-1.5">{isDark ? '◐' : '◑'}</span>
    {isDark ? 'NIGHT' : 'DAY'}
  </button>
);

const PartyButton = ({ active, onToggle, isDark }) => (
  <motion.button
    onClick={onToggle}
    aria-label={active ? 'パーティモードを停止' : 'パーティモードを開始'}
    className={`w-8 h-8 rounded-md flex items-center justify-center border text-sm ${
      active
        ? isDark ? 'bg-accent/20 border-accent text-accent' : 'bg-light-accent/20 border-light-accent text-light-accent'
        : isDark
          ? 'border-code-border hover:bg-bg-tertiary'
          : 'border-light-code-border hover:bg-light-bg-tertiary'
    }`}
    whileTap={{ scale: 0.92 }}
  >
    <motion.span
      animate={{ rotate: active ? [0, 14, -14, 14, 0] : 0 }}
      transition={{ duration: 0.6, repeat: active ? Infinity : 0, repeatDelay: 0.2 }}
    >
      🎉
    </motion.span>
  </motion.button>
);

const Header = ({ isPartyActive, setIsPartyActive }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useScrollSpy(SPY_IDS);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const bg = isScrolled || isOpen
    ? isDark
      ? 'bg-bg-primary/85 backdrop-blur-md border-b border-code-border'
      : 'bg-light-bg-primary/85 backdrop-blur-md border-b border-light-code-border'
    : 'bg-transparent';

  return (
    <>
      <motion.header
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${bg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="flex items-center justify-between h-14">
            {/* ロゴ */}
            <Link
              href="/"
              className={`font-display font-bold tracking-[0.1em] text-lg sm:text-xl flex items-center gap-2 ${
                isDark ? 'text-text-main' : 'text-light-text-main'
              }`}
            >
              <span className={`text-xs font-mono opacity-60 ${isDark ? 'text-primary' : 'text-light-primary'}`}>▸</span>
              KAPIFOLIO
            </Link>

            {/* デスクトップナビ */}
            <nav className="hidden md:flex items-center gap-5">
              {navLinks.map((link) => {
                const active = activeId === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`group relative font-mono text-[11px] tracking-[0.2em] transition-colors ${
                      active
                        ? isDark ? 'text-primary' : 'text-light-primary'
                        : isDark ? 'text-text-sub hover:text-primary' : 'text-light-text-sub hover:text-light-primary'
                    }`}
                  >
                    <span className="mr-1 opacity-70">{String(navLinks.indexOf(link) + 1).padStart(2, '0')}</span>
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1.5 h-px transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      } ${isDark ? 'bg-primary' : 'bg-light-primary'}`}
                    />
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
              <PartyButton
                active={isPartyActive}
                onToggle={() => setIsPartyActive(!isPartyActive)}
                isDark={isDark}
              />
              <button
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
                className={`md:hidden w-8 h-8 rounded-md border flex items-center justify-center ${
                  isDark
                    ? 'bg-bg-primary border-code-border text-text-main hover:bg-bg-tertiary'
                    : 'bg-light-bg-primary border-light-code-border text-light-text-main hover:bg-light-bg-tertiary'
                }`}
              >
                {isOpen ? <FiX size={16} /> : <FiMenu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* モバイルメニュー（motion.headerの外に出してtransformの影響を回避） */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
              className={`fixed top-0 right-0 h-full w-72 z-50 md:hidden border-l p-6 pt-20 font-mono ${
                isDark
                  ? 'bg-bg-primary border-code-border'
                  : 'bg-light-bg-primary border-light-code-border'
              }`}
            >
              <div className={`text-[10px] tracking-[0.3em] mb-4 ${isDark ? 'text-text-muted' : 'text-light-text-muted'}`}>
                MENU_COMMANDS
              </div>
              <div className="flex flex-col">
                {navLinks.map((link, i) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 py-3 border-b text-sm ${
                      isDark
                        ? 'text-text-sub hover:text-primary border-code-border'
                        : 'text-light-text-sub hover:text-light-primary border-light-code-border'
                    }`}
                  >
                    <span className="opacity-50 text-[10px] w-6">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <div className="tracking-widest">{link.name}</div>
                      <div className={`text-[10px] ${isDark ? 'text-text-muted' : 'text-light-text-muted'}`}>
                        {link.jp}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
