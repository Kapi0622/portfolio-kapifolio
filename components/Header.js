"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../src/contexts/ThemeContext';
import { useScrollSpy } from '../src/hooks/useScrollSpy';

const navLinks = [
  { name: '成果物', href: '/#works', id: 'works' },
  { name: 'スキル', href: '/#skills', id: 'skills' },
  { name: '参加イベント', href: '/#events', id: 'events' },
  { name: '略歴', href: '/#profile', id: 'profile' },
  { name: 'お問い合わせ', href: '/#contact', id: 'contact' },
];

const SPY_IDS = navLinks.map((l) => l.id);

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
      className={`relative w-14 h-7 rounded-full border transition-colors duration-300 flex items-center ${
        isDark
          ? 'bg-bg-tertiary border-code-border'
          : 'bg-light-bg-tertiary border-light-code-border'
      }`}
    >
      <motion.span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full shadow-md flex items-center justify-center text-xs ${
          isDark ? 'bg-primary text-bg-primary' : 'bg-light-primary text-white'
        }`}
        animate={{ x: isDark ? 0 : 26 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {isDark ? '🌙' : '☀️'}
      </motion.span>
    </button>
  );
};

const PartyButton = ({ active, onToggle, isDark }) => (
  <motion.button
    onClick={onToggle}
    aria-label={active ? 'パーティモードを停止' : 'パーティモードを開始'}
    className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300 ${
      active
        ? isDark
          ? 'bg-accent border-accent'
          : 'bg-light-secondary border-light-secondary'
        : isDark
          ? 'border-code-border hover:bg-bg-tertiary'
          : 'border-light-code-border hover:bg-light-bg-tertiary'
    }`}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.92 }}
  >
    <motion.span
      animate={{ rotate: active ? [0, 14, -14, 14, 0] : 0 }}
      transition={{ duration: 0.6, repeat: active ? Infinity : 0, repeatDelay: 0.2 }}
      className="text-lg"
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
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? isDark
            ? 'bg-bg-primary/90 backdrop-blur-md border-b border-code-border'
            : 'bg-light-bg-primary/90 backdrop-blur-md border-b border-light-code-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link
            href="/"
            className={`font-display text-2xl font-bold tracking-tight ${
              isDark ? 'text-text-main' : 'text-light-text-main'
            }`}
          >
            Kapi<span className={isDark ? 'text-primary' : 'text-light-primary'}>.</span>folio
          </Link>

          {/* デスクトップナビ */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const active = activeId === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition-colors relative group ${
                    active
                      ? isDark ? 'text-primary' : 'text-light-primary'
                      : isDark ? 'text-text-sub hover:text-primary' : 'text-light-text-sub hover:text-light-primary'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    } ${isDark ? 'bg-primary' : 'bg-light-primary'}`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <PartyButton
              active={isPartyActive}
              onToggle={() => setIsPartyActive(!isPartyActive)}
              isDark={isDark}
            />

            {/* モバイルメニューボタン */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
              className={`md:hidden w-10 h-10 rounded-full border flex items-center justify-center ${
                isDark
                  ? 'border-code-border text-text-main'
                  : 'border-light-code-border text-light-text-main'
              }`}
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-30 md:hidden"
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
              className={`fixed top-0 right-0 h-full w-64 z-40 md:hidden border-l p-6 pt-20 ${
                isDark
                  ? 'bg-bg-primary border-code-border'
                  : 'bg-light-bg-primary border-light-code-border'
              }`}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base py-2 ${
                      isDark
                        ? 'text-text-sub hover:text-primary'
                        : 'text-light-text-sub hover:text-light-primary'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
