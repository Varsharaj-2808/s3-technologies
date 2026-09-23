import React from 'react';
import { useTheme } from '../../context/ThemeContext';

type HeadingLevel = 'h2' | 'h3' | 'h4';

interface SectionTitleProps {
  children: React.ReactNode;
  as?: HeadingLevel;
  size?: 'lg' | 'md';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, as = 'h3', size = 'lg' }) => {
  const { theme } = useTheme();
  const Tag = as;
  const textSize = size === 'lg' ? 'text-xl sm:text-2xl' : 'text-xl';

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
};
