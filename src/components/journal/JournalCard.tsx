import React from 'react';
import { Journal } from '../../types';
import { useTheme } from '../../context/ThemeContext';
import { Link } from '../../context/RouterContext';

interface JournalCardProps {
  journal: Journal;
}

export const JournalCard: React.FC<JournalCardProps> = ({ journal }) => {
  const { theme } = useTheme();

  return (
    <div
      className="relative bg-white border border-gray-400 hover:border-purple-800 mb-3 transition-colors group"
      style={{
        borderColor: '#999',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = theme.primaryColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#999';
      }}
    >
      <Link
        to={`/journals/${journal.id}`}
        className="flex items-center min-h-[70px] p-1.5"
      >
        <div className="w-[65px] h-[65px] shrink-0 flex items-center justify-center bg-white border border-gray-100 p-0.5">
          <img
            src={journal.coverImage}
            alt={journal.title}
            className="max-h-[60px] max-w-[55px] object-contain"
            onError={(e) => {
              // fallback if needed
              e.currentTarget.src = '/images/jpubv5.png';
            }}
          />
        </div>
        <div className="flex-1 pl-4 pr-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
          <h3
            className="font-bold text-[13px] sm:text-sm text-gray-900 group-hover:text-purple-800 transition-colors leading-snug"
            style={{ fontFamily: theme.fontFamilyHeading }}
          >
            {journal.title}
          </h3>
          <div className="text-left sm:text-right whitespace-nowrap text-xs text-gray-700">
            <strong>ISSN: </strong>
            <span>{journal.issn}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
