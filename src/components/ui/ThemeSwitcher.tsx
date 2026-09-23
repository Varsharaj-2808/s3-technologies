import React from 'react';
import { THEMES, useTheme } from '../../context/ThemeContext';
import { ThemeId } from '../../types';

const ORDER: ThemeId[] = ['modern', 'green', 'plum'];

export const ThemeSwitcher: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { themeId, setThemeId } = useTheme();

  if (compact) {
    return (
      <div className="flex flex-col gap-2" role="radiogroup" aria-label="Visual Theme">
        {ORDER.map((id) => {
          const t = THEMES[id];
          const active = themeId === id;
          return (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setThemeId(id)}
              className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-left text-sm font-medium transition-colors ${
                active
                  ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-current">
                {active && <span className="h-2 w-2 rounded-full bg-current" />}
              </span>
              <span className="flex shrink-0 gap-1">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: t.primaryColor }} />
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: t.secondaryColor }} />
              </span>
              <span className="truncate">{t.name}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className="inline-flex items-center rounded-full border border-white/20 bg-white/5 p-1"
      role="radiogroup"
      aria-label="Visual Theme"
    >
      {ORDER.map((id) => {
        const t = THEMES[id];
        const active = themeId === id;
        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={t.name}
            title={t.name}
            onClick={() => setThemeId(id)}
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
              active ? 'bg-white text-slate-900 shadow-sm' : 'text-white/75 hover:text-white'
            }`}
          >
            <span className="flex gap-1">
              <span className="h-2.5 w-2.5 rounded-full ring-1 ring-black/10" style={{ backgroundColor: t.primaryColor }} />
              <span className="h-2.5 w-2.5 rounded-full ring-1 ring-black/10" style={{ backgroundColor: t.secondaryColor }} />
            </span>
            {active && <span className="hidden sm:inline">{t.name}</span>}
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;
