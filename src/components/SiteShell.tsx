"use client";

import { useState, ReactNode } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PartyEffect from '../../components/PartyEffect';
import HudChrome from './hud/HudChrome';
import IntroGate from './hud/IntroGate';
import SmoothScroll from './hud/SmoothScroll';
import { useTheme } from '../contexts/ThemeContext';

type Props = { children: ReactNode };

export default function SiteShell({ children }: Props) {
  const [isPartyActive, setIsPartyActive] = useState(false);
  const { isDark, isClient } = useTheme();
  const bg = !isClient || isDark
    ? 'bg-bg-primary text-text-main'
    : 'bg-light-bg-primary text-light-text-main';
  return (
    <div className={`min-h-screen transition-colors duration-300 ${bg}`}>
      <SmoothScroll />
      <IntroGate />
      <div className="relative hud-scanlines">
        <HudChrome />
        <Header isPartyActive={isPartyActive} setIsPartyActive={setIsPartyActive} />
        {children}
        <Footer />
      </div>
      <PartyEffect isActive={isPartyActive} />
    </div>
  );
}
