import React from 'react';
import { Journal } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface JournalMastheadProps {
  journal: Journal;
  subpageTitle?: string;
}

export const JournalMasthead: React.FC<JournalMastheadProps> = ({ journal, subpageTitle }) => {
  const { theme } = useTheme();

  return (
    <section
      className="py-10 text-center mb-2 transition-colors"
      style={{
        backgroundColor: theme.innerBannerBg,
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1
          className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide"
          style={{ fontFamily: theme.fontFamilyHeading }}
        >
          {journal.title}
        </h1>
        {subpageTitle && (
          <div className="text-white/90 text-sm font-semibold mt-1 uppercase tracking-wider">
            {subpageTitle}
          </div>
        )}
        <p className="text-xs sm:text-sm text-white/95 font-medium mt-1">
          ISSN (online): {journal.issn}
        </p>

        <div className="mt-4 flex items-center justify-end gap-3">
          <a
            href={journal.editorialHouseRegister || `https://editorialhouse.org/${journal.slug}/user/register`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-transparent"
            style={{
              backgroundColor: theme.buttonBg,
              border: `2px solid ${theme.buttonBg}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = theme.buttonBg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.buttonBg;
              e.currentTarget.style.color = '#fff';
            }}
          >
            Register
          </a>
          <a
            href={journal.editorialHouseLogin || `https://editorialhouse.org/${journal.slug}/login`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-transparent"
            style={{
              backgroundColor: theme.buttonBg,
              border: `2px solid ${theme.buttonBg}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = theme.buttonBg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.buttonBg;
              e.currentTarget.style.color = '#fff';
            }}
          >
            Login
          </a>
        </div>
      </div>
    </section>
  );
};
