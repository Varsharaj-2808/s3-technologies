import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeId, ThemeConfig } from '../types';

export const THEMES: Record<ThemeId, ThemeConfig> = {
  classic: {
    id: 'classic',
    name: 'Classic Academic',
    subtitle: 'Reference Matching',
    primaryColor: '#602b78',
    secondaryColor: '#119bd6',
    accentColor: '#57a2f2',
    bgPage: '#ffffff',
    bgCard: '#ffffff',
    textPrimary: '#333333',
    textSecondary: '#666666',
    borderColor: '#e5e7eb',
    headerBg: '#119bd6',
    topBannerBg: '#119bd6',
    innerBannerBg: '#8ee8d6',
    sidebarBg: '#602b78',
    navBg: '#57a2f2',
    navText: '#ffffff',
    navHoverBg: '#1f1f1f',
    buttonBg: '#602b78',
    badgeBg: '#602b78',
    fontFamilyHeading: "'Ubuntu', sans-serif",
    fontFamilyBody: "'Lato', sans-serif",
    cardRadius: 'rounded-none',
    contentContainerClass: 'bg-white p-6 sm:p-8 border border-gray-200 shadow-2xs',
  },
  modern: {
    id: 'modern',
    name: 'Modern Open-Science',
    subtitle: 'Clean Precision',
    primaryColor: '#0f172a',
    secondaryColor: '#2563eb',
    accentColor: '#059669',
    bgPage: '#f8fafc',
    bgCard: '#ffffff',
    textPrimary: '#0f172a',
    textSecondary: '#475569',
    borderColor: '#cbd5e1',
    headerBg: '#0f172a',
    topBannerBg: '#0f172a',
    innerBannerBg: '#e2e8f0',
    sidebarBg: '#1e293b',
    navBg: '#1e293b',
    navText: '#f8fafc',
    navHoverBg: '#334155',
    buttonBg: '#2563eb',
    badgeBg: '#2563eb',
    fontFamilyHeading: "'Plus Jakarta Sans', sans-serif",
    fontFamilyBody: "'Plus Jakarta Sans', sans-serif",
    cardRadius: 'rounded-lg',
    contentContainerClass: 'bg-white p-6 sm:p-10 border border-slate-200 rounded-2xl shadow-sm ring-1 ring-slate-100',
  },
  heritage: {
    id: 'heritage',
    name: 'Editorial Heritage',
    subtitle: 'Scholarly Press',
    primaryColor: '#7f1d1d',
    secondaryColor: '#b45309',
    accentColor: '#1e3a8a',
    bgPage: '#fcfaf6',
    bgCard: '#ffffff',
    textPrimary: '#1c1917',
    textSecondary: '#57534e',
    borderColor: '#e7e2d9',
    headerBg: '#7f1d1d',
    topBannerBg: '#7f1d1d',
    innerBannerBg: '#fef3c7',
    sidebarBg: '#7f1d1d',
    navBg: '#7f1d1d',
    navText: '#fffbeb',
    navHoverBg: '#991b1b',
    buttonBg: '#991b1b',
    badgeBg: '#b45309',
    fontFamilyHeading: "'Cinzel', 'Merriweather', serif",
    fontFamilyBody: "'Merriweather', serif",
    cardRadius: 'rounded-none',
    contentContainerClass: 'bg-[#fffdf8] p-6 sm:p-10 border border-stone-300 shadow-sm',
  },
};

interface ThemeContextType {
  theme: ThemeConfig;
  themeId: ThemeId;
  setThemeId: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: THEMES.classic,
  themeId: 'classic',
  setThemeId: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeId] = useState<ThemeId>(() => {
    try {
      const saved = localStorage.getItem('jpub_theme') as ThemeId;
      return saved && THEMES[saved] ? saved : 'classic';
    } catch {
      return 'classic';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('jpub_theme', themeId);
    } catch {}
    document.documentElement.setAttribute('data-theme', themeId);
  }, [themeId]);

  const theme = THEMES[themeId];

  return (
    <ThemeContext.Provider value={{ theme, themeId, setThemeId }}>
      <div 
        className={`theme-wrapper min-h-screen transition-colors duration-200 theme-${themeId}`}
        style={{
          backgroundColor: theme.bgPage,
          color: theme.textPrimary,
          fontFamily: theme.fontFamilyBody,
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
