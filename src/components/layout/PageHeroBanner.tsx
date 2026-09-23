import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface PageHeroBannerProps {
  title: string;
  subtitle?: string;
}

export const PageHeroBanner: React.FC<PageHeroBannerProps> = ({ title, subtitle }) => {
  const { theme } = useTheme();

  return (
    <section
      className="py-10 text-center mb-2 transition-colors border-b border-slate-200/70"
      style={{ backgroundColor: '#EEF3F8' }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h1
          className="text-2xl sm:text-3xl font-extrabold text-[#17233A] tracking-tight"
          style={{ fontFamily: theme.fontFamilyHeading }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
            {subtitle}
          </p>
        )}
        <div className="mt-3 w-12 h-1 bg-blue-600 rounded-full" />
      </div>
    </section>
  );
};
