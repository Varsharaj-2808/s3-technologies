import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useRouter, Link } from '../../context/RouterContext';
import {
  Home,
  Target,
  Users,
  Send,
  FileCheck,
  Archive,
  BookOpen,
  FileSearch,
  UserCheck,
  ShieldCheck,
  Unlock,
  CreditCard,
  Database,
  AlertTriangle,
} from 'lucide-react';

interface JournalNavMenuProps {
  journalId: number;
}

export const JournalNavMenu: React.FC<JournalNavMenuProps> = ({ journalId }) => {
  const { theme, themeId } = useTheme();
  const { currentPath } = useRouter();

  const menuItems = [
    { label: 'Journal Home', path: `/journals/${journalId}` },
    { label: 'Aims and Scope', path: `/journals/${journalId}/aims-scope` },
    { label: 'Editorial Board', path: `/journals/${journalId}/editorial-board` },
    { label: 'Submit Article', path: '/submit-articles' },
    { label: 'Archives', path: `/journals/${journalId}/archives` },
    { label: 'Join as Editor', path: '/join-as-editor' },
    { label: 'Author Guidelines', path: `/journals/${journalId}/author-guidelines` },
    { label: 'Reviewer Guidelines', path: `/journals/${journalId}/reviewer-guidelines` },
    { label: 'Editor Guidelines', path: `/journals/${journalId}/editor-guidelines` },
    { label: 'Ethical Principles and Publication Policy', path: `/journals/${journalId}/ethical-policy` },
    { label: 'Open Access Policy', path: `/journals/${journalId}/open-access` },
    { label: 'Article Processing Charges', path: `/journals/${journalId}/apc` },
    { label: 'Abstracting and Indexing', path: `/journals/${journalId}/indexing` },
    { label: 'Contact Us', path: '/contact' },
  ];

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
          JOURNAL MENU
        </h3>
        <div className="w-12 h-0.5 bg-white/60 mx-auto mb-4" />

        <ul className="space-y-0 text-xs sm:text-[13px] leading-snug divide-y divide-white/20">
          {menuItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <li key={item.label} className="py-2">
                <Link
                  to={item.path}
                  className={`block transition-all hover:text-gray-900 hover:bg-white/25 px-1 py-0.5 rounded-xs ${
                    isActive ? 'font-bold text-white bg-white/20 px-1.5' : 'text-gray-100 hover:pl-2'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
