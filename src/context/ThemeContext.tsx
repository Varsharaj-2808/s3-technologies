import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeId, ThemeConfig } from '../types';

export const THEMES: Record<ThemeId, ThemeConfig> = {
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
};

interface ThemeContextType {
  theme: ThemeConfig;
  themeId: ThemeId;
  setThemeId: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: THEMES.modern,
  themeId: 'modern',
  setThemeId: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeId] = useState<ThemeId>('modern');

  useEffect(() => {
    try {
      localStorage.setItem('jpub_theme', 'modern');
    } catch {}
    document.documentElement.setAttribute('data-theme', 'modern');
  }, [themeId]);

  const theme = THEMES.modern;

  return (
    <ThemeContext.Provider value={{ theme, themeId, setThemeId }}>
      <div 
        className="theme-wrapper min-h-screen transition-colors duration-200 theme-modern"
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
