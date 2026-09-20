import React from 'react';
import { useTheme, THEMES } from '../../context/ThemeContext';
import { ThemeId } from '../../types';
import { Palette, Check } from 'lucide-react';

export const ThemeSwitcher: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { theme, themeId, setThemeId } = useTheme();

  return (
    <div className="flex items-center gap-1 bg-black/5 dark:bg-white/10 p-1 rounded-md border border-gray-300/40 text-xs font-medium">
      <div className="flex items-center gap-1 px-2 py-0.5 text-gray-700 select-none">
        <Palette className="w-3.5 h-3.5" style={{ color: theme.primaryColor }} />
        {!compact && <span className="hidden sm:inline font-semibold">Theme:</span>}
      </div>

      {(Object.keys(THEMES) as ThemeId[]).map((id) => {
        const t = THEMES[id];
        const isActive = themeId === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setThemeId(id)}
            className={`px-2 py-1 rounded transition-all flex items-center gap-1 cursor-pointer select-none ${
              isActive
                ? 'bg-white shadow-sm font-bold text-gray-900 ring-1 ring-black/5'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
            title={`${t.name} (${t.subtitle})`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: t.primaryColor }}
            />
            <span className="hidden md:inline">{t.name.split(' ')[0]}</span>
            {isActive && <Check className="w-3 h-3 text-gray-700 inline" />}
          </button>
        );
      })}
    </div>
  );
};
