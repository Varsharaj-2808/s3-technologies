import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useRouter, Link } from '../../context/RouterContext';
import { JOURNALS_DATA } from '../../data/journalsData';
import { BookOpen, ChevronRight } from 'lucide-react';

interface JournalsSidebarProps {
  activeJournalId?: number;
}

export const JournalsSidebar: React.FC<JournalsSidebarProps> = ({ activeJournalId }) => {
  const { theme, themeId } = useTheme();
  const { currentPath } = useRouter();

  const radiusClass = themeId === 'modern' ? 'rounded-lg' : 'rounded-none';

  return (
    <aside className="mb-6">
      <div
        className={`p-6 text-white shadow-sm overflow-hidden ${radiusClass}`}
        style={{
          backgroundColor: theme.sidebarBg,
          fontFamily: theme.fontFamilyBody,
        }}
      >
        <h3
          className="text-center font-bold text-base tracking-wider uppercase text-white mb-2"
          style={{ fontFamily: theme.fontFamilyHeading }}
        >
          OUR JOURNALS
        </h3>
        <div className="w-12 h-0.5 bg-white/60 mx-auto mb-4" />

        <ul className="space-y-0 text-xs sm:text-[13px] leading-snug divide-y divide-white/20">
          {JOURNALS_DATA.map((journal) => {
            const isSelected = activeJournalId === journal.id || currentPath.startsWith(`/journals/${journal.id}`);
            return (
              <li key={journal.id} className="py-2.5">
                <Link
                  to={`/journals/${journal.id}`}
                  className={`block transition-all hover:text-gray-900 hover:bg-white/25 px-1 py-0.5 rounded-xs ${
                    isSelected ? 'font-bold text-white bg-white/20 px-1.5' : 'text-gray-100 hover:pl-2'
                  }`}
                >
                  {journal.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
