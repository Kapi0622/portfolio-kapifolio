"use client";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutSite from '../../components/AboutSite';
import AboutMe from '../../components/AboutMe';
import Works from '../../components/Works';
import Profile from '../../components/Profile';
import Contact from '../../components/Contact';
import ThemeWrapper from '../components/ThemeWrapper';
import { useTheme } from '../contexts/ThemeContext';

export default function Home() {
  const { isDark } = useTheme();
  
  return (
    <ThemeWrapper>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <section id="top" className="text-center py-20">
          <h1 className={`text-5xl md:text-7xl font-bold font-mono ${
            isDark ? 'text-primary' : 'text-light-primary'
          }`}>
            <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>$</span> whoami
          </h1>
          <div className={`mt-6 font-mono space-y-2 ${
            isDark ? 'text-text-sub' : 'text-light-text-sub'
          }`}>
            <p className="text-2xl">
              <span className={isDark ? 'text-accent' : 'text-light-accent'}>{'>'}</span> Kapi - Game & Web Developer
            </p>
            <p className="text-lg">
              <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>//</span> Building digital experiences with code
            </p>
          </div>
        </section>
      </main>
      
      {/* 背景付きセクションを個別に配置 */}
      <AboutSite />
      <AboutMe />
      <Works />
      <Profile />
      <Contact />
      
      <Footer />
    </ThemeWrapper>
  );
}