import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeId, ThemeConfig } from '../types';

const MODERN_SHARED = {
  fontFamilyHeading: "'Plus Jakarta Sans', sans-serif",
  fontFamilyBody: "'Plus Jakarta Sans', sans-serif",
  cardRadius: 'rounded-lg',
  contentContainerClass: 'bg-white p-6 sm:p-10 border border-slate-200 rounded-2xl shadow-sm ring-1 ring-slate-100',
} as const;

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
    ...MODERN_SHARED,
    heroBg: '#EEF3F8',
    heroText: '#17233A',
    brandText: '#2563eb',
    brandHover: '#3b82f6',
    brandHoverDark: '#1e40af',
    brandTintBg: '#eff6ff',
    brandTintRing: '#dbeafe',
    ctaShadow: '0 10px 15px -3px rgba(30,58,138,0.4), 0 4px 6px -4px rgba(30,58,138,0.4)',
    heroGradientEnd: '#1e3a8a',
    heroAccentText: '#bfdbfe',
    heroAccentIcon: '#93c5fd',
    heroChipBg: 'rgba(59,130,246,0.10)',
    heroChipBorder: 'rgba(96,165,250,0.30)',
    heroIconBg: 'rgba(59,130,246,0.20)',
    accentDark: '#6b21a8',
    focusRing: '#9333ea',
    linkHoverLegacy: '#7e22ce',
    codeAccent: '#581c87',
    onSecondary: '#ffffff',
  },
  green: {
    id: 'green',
    name: 'Green Academic',
    subtitle: 'Earth & Scholarship',
    primaryColor: '#1B4332',
    secondaryColor: '#74A57F',
    accentColor: '#74A57F',
    bgPage: '#F1EFE9',
    bgCard: '#ffffff',
    textPrimary: '#16281F',
    textSecondary: '#3E5C4A',
    borderColor: '#C9CFC4',
    headerBg: '#1B4332',
    topBannerBg: '#1B4332',
    innerBannerBg: '#E5EDE6',
    sidebarBg: '#16382B',
    navBg: '#16382B',
    navText: '#f8fafc',
    navHoverBg: '#234E36',
    buttonBg: '#1B4332',
    badgeBg: '#1B4332',
    ...MODERN_SHARED,
    heroBg: '#E5EDE6',
    heroText: '#1B4332',
    brandText: '#1B4332',
    brandHover: '#2D6A4F',
    brandHoverDark: '#14352A',
    brandTintBg: '#ECF5EE',
    brandTintRing: '#D4E8DA',
    ctaShadow: '0 10px 15px -3px rgba(20,47,34,0.45), 0 4px 6px -4px rgba(20,47,34,0.45)',
    heroGradientEnd: '#1B4332',
    heroAccentText: '#A7D3B4',
    heroAccentIcon: '#8FC3A0',
    heroChipBg: 'rgba(116,165,127,0.16)',
    heroChipBorder: 'rgba(116,165,127,0.40)',
    heroIconBg: 'rgba(116,165,127,0.22)',
    accentDark: '#1B4332',
    focusRing: '#1B4332',
    linkHoverLegacy: '#14352A',
    codeAccent: '#1B4332',
    onSecondary: '#1B4332',
  },
  plum: {
    id: 'plum',
    name: 'Plum / Rose Academic',
    subtitle: 'Warm Dignity',
    primaryColor: '#A00058',
    secondaryColor: '#5C5C52',
    accentColor: '#5C5C52',
    bgPage: '#F3D9E4',
    bgCard: '#ffffff',
    textPrimary: '#2B0017',
    textSecondary: '#5C5C52',
    borderColor: '#DCC5D1',
    headerBg: '#A00058',
    topBannerBg: '#A00058',
    innerBannerBg: '#EBC9D9',
    sidebarBg: '#6B003B',
    navBg: '#6B003B',
    navText: '#f8fafc',
    navHoverBg: '#87004A',
    buttonBg: '#A00058',
    badgeBg: '#A00058',
    ...MODERN_SHARED,
    heroBg: '#EBC9D9',
    heroText: '#A00058',
    brandText: '#A00058',
    brandHover: '#C7006B',
    brandHoverDark: '#7A0044',
    brandTintBg: '#FBEEF4',
    brandTintRing: '#F6D9E6',
    ctaShadow: '0 10px 15px -3px rgba(107,0,59,0.45), 0 4px 6px -4px rgba(107,0,59,0.45)',
    heroGradientEnd: '#A00058',
    heroAccentText: '#F9A8D4',
    heroAccentIcon: '#E38BB4',
    heroChipBg: 'rgba(160,0,88,0.12)',
    heroChipBorder: 'rgba(160,0,88,0.35)',
    heroIconBg: 'rgba(160,0,88,0.18)',
    accentDark: '#A00058',
    focusRing: '#A00058',
    linkHoverLegacy: '#7A0044',
    codeAccent: '#A00058',
    onSecondary: '#ffffff',
  },
};

const VALID_THEME_IDS: ThemeId[] = ['modern', 'green', 'plum'];

const readStoredThemeId = (): ThemeId => {
  try {
    const stored = localStorage.getItem('jpub_theme');
    if (stored && VALID_THEME_IDS.includes(stored as ThemeId)) {
      return stored as ThemeId;
    }
  } catch {}
  return 'modern';
};

export const themeCssVars = (theme: ThemeConfig): React.CSSProperties =>
  ({
    '--primary-color': theme.primaryColor,
    '--secondary-color': theme.secondaryColor,
    '--accent-color': theme.accentColor,
    '--bg-page': theme.bgPage,
    '--bg-card': theme.bgCard,
    '--text-primary': theme.textPrimary,
    '--text-secondary': theme.textSecondary,
    '--border-color': theme.borderColor,
    '--header-bg': theme.headerBg,
    '--top-banner-bg': theme.topBannerBg,
    '--inner-banner-bg': theme.innerBannerBg,
    '--sidebar-bg': theme.sidebarBg,
    '--nav-bg': theme.navBg,
    '--nav-text': theme.navText,
    '--nav-hover-bg': theme.navHoverBg,
    '--button-bg': theme.buttonBg,
    '--badge-bg': theme.badgeBg,
    '--hero-bg': theme.heroBg,
    '--hero-text': theme.heroText,
    '--brand-text': theme.brandText,
    '--brand-hover': theme.brandHover,
    '--brand-hover-dark': theme.brandHoverDark,
    '--brand-tint-bg': theme.brandTintBg,
    '--brand-tint-ring': theme.brandTintRing,
    '--cta-shadow': theme.ctaShadow,
    '--hero-gradient-end': theme.heroGradientEnd,
    '--hero-accent-text': theme.heroAccentText,
    '--hero-accent-icon': theme.heroAccentIcon,
    '--hero-chip-bg': theme.heroChipBg,
    '--hero-chip-border': theme.heroChipBorder,
    '--hero-icon-bg': theme.heroIconBg,
    '--accent-dark': theme.accentDark,
    '--focus-ring': theme.focusRing,
    '--link-hover-legacy': theme.linkHoverLegacy,
    '--code-accent': theme.codeAccent,
    '--on-secondary': theme.onSecondary,
    backgroundColor: theme.bgPage,
    color: theme.textPrimary,
    fontFamily: theme.fontFamilyBody,
  }) as React.CSSProperties;

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
  const [themeId, setThemeIdState] = useState<ThemeId>(readStoredThemeId);

  const setThemeId = (id: ThemeId) => {
    if (!VALID_THEME_IDS.includes(id)) return;
    setThemeIdState(id);
  };

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
        style={themeCssVars(theme)}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
