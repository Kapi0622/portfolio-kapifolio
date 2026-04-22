"use client";

import { useState, ReactNode } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PartyEffect from '../../components/PartyEffect';
import ThemeWrapper from './ThemeWrapper';

type Props = { children: ReactNode };

export default function SiteShell({ children }: Props) {
  const [isPartyActive, setIsPartyActive] = useState(false);
  return (
    <ThemeWrapper>
      <Header isPartyActive={isPartyActive} setIsPartyActive={setIsPartyActive} />
      {children}
      <Footer />
      <PartyEffect isActive={isPartyActive} />
    </ThemeWrapper>
  );
}
