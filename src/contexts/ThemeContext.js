"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
};

const STORAGE_KEY = 'portfolio-theme';

const ThemeContext = createContext(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.DARK);
  const [isClient, setIsClient] = useState(false);
  const [userSelected, setUserSelected] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && Object.values(THEMES).includes(saved)) {
      setTheme(saved);
      setUserSelected(true);
      return;
    }

    if (typeof window !== 'undefined' && window.matchMedia) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? THEMES.DARK : THEMES.LIGHT);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const mql = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!mql) return;
    const handler = (e) => {
      if (userSelected) return;
      setTheme(e.matches ? THEMES.DARK : THEMES.LIGHT);
    };
    mql.addEventListener?.('change', handler);
    return () => mql.removeEventListener?.('change', handler);
  }, [isClient, userSelected]);

  useEffect(() => {
    if (!isClient) return;
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === THEMES.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, isClient]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
      if (isClient) localStorage.setItem(STORAGE_KEY, next);
      setUserSelected(true);
      return next;
    });
  };

  const isDark = theme === THEMES.DARK;

  const value = { theme, setTheme, toggleTheme, isDark, isClient };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
