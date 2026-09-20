import React from 'react';
import { useTheme } from '../../context/ThemeContext';

type HeadingLevel = 'h2' | 'h3' | 'h4';

interface SectionTitleProps {
  children: React.ReactNode;
  as?: HeadingLevel;
  size?: 'lg' | 'md';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, as = 'h3', size = 'lg' }) => {
  const { theme, themeId } = useTheme();
  const Tag = as;
  const textSize = size === 'lg' ? 'text-xl sm:text-2xl' : 'text-xl';

  if (themeId === 'modern') {
    return (
      <div className="mb-5">
        <Tag
          className={`${textSize} font-bold tracking-tight text-slate-900`}
          style={{ fontFamily: theme.fontFamilyHeading }}
        >
          {children}
        </Tag>
        <span
          className="mt-1.5 block h-1 w-10 rounded-full"
          style={{ backgroundColor: theme.secondaryColor }}
        />
      </div>
    );
  }

  if (themeId === 'heritage') {
    return (
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <span
            className="h-px w-10 shrink-0"
            style={{ backgroundColor: theme.secondaryColor }}
          />
          <Tag
            className={`${textSize} font-bold text-[#1c1917] tracking-wide`}
            style={{ fontFamily: theme.fontFamilyHeading }}
          >
            {children}
          </Tag>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span
            className="h-[3px] w-6 shrink-0"
            style={{ backgroundColor: theme.primaryColor }}
          />
          <span className="h-px flex-1" style={{ backgroundColor: theme.borderColor }} />
        </div>
      </div>
    );
  }

  // classic — academic serif heading + thin hairline rule
  return (
    <>
      <Tag
        className={`${textSize} font-bold text-gray-900 mb-2`}
        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
      >
        {children}
      </Tag>
      <div className="w-12 h-px mb-4" style={{ backgroundColor: '#9ca3af' }} />
    </>
  );
};