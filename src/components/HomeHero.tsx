"use client";

import { useTheme } from '../contexts/ThemeContext';

export default function HomeHero() {
  const { isDark } = useTheme();
  return (
    <section id="top" className="text-center py-20">
      <h1 className={`text-5xl md:text-7xl font-bold font-mono ${
        isDark ? 'text-primary' : 'text-light-primary'
      }`}>
        <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>$</span> Kapifolio
      </h1>
      <div className={`mt-6 font-mono space-y-2 ${
        isDark ? 'text-text-sub' : 'text-light-text-sub'
      }`}>
        <p className="text-2xl">
          <span className={isDark ? 'text-accent' : 'text-light-accent'}>{'>'}</span> Kapi - Game & Web Developer
        </p>
        <p className="text-lg">
          <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>{'//'}</span> Building digital experiences with code
        </p>
      </div>
    </section>
  );
}
