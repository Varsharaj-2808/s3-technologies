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
      className="py-10 text-center mb-2 transition-colors border-b border-slate-200/70"
      style={{
        backgroundColor: theme.id === 'modern' ? '#EEF3F8' : theme.innerBannerBg,
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1
          className="text-2xl sm:text-3xl font-extrabold text-[#17233A] tracking-tight"
          style={{ fontFamily: theme.fontFamilyHeading }}
        >
          {journal.title}
        </h1>
        {subpageTitle && (
          <div className="text-blue-600 text-sm font-bold mt-1 uppercase tracking-wider">
            {subpageTitle}
          </div>
        )}
        <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
          ISSN (online): {journal.issn}
        </p>

        <div className="mt-3 w-12 h-1 bg-blue-600 rounded-full mx-auto" />

        <div className="mt-5 flex items-center justify-end gap-3">
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
