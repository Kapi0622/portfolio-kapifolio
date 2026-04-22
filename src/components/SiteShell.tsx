"use client";

import { useState, ReactNode } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PartyEffect from '../../components/PartyEffect';
import ThemeWrapper from './ThemeWrapper';
import HudChrome from './hud/HudChrome';
import IntroGate from './hud/IntroGate';
import SmoothScroll from './hud/SmoothScroll';

type Props = { children: ReactNode };

export default function SiteShell({ children }: Props) {
  const [isPartyActive, setIsPartyActive] = useState(false);
  return (
    <ThemeWrapper>
      <SmoothScroll />
      <IntroGate />
      <div className="relative hud-scanlines">
        <HudChrome />
        <Header isPartyActive={isPartyActive} setIsPartyActive={setIsPartyActive} />
        {children}
        <Footer />
      </div>
      <PartyEffect isActive={isPartyActive} />
    </ThemeWrapper>
  );
}
