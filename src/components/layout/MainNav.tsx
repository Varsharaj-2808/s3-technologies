import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useRouter, Link } from '../../context/RouterContext';

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'JOURNALS', href: '/journals' },
  { label: 'ARTICLE SUBMISSION', href: '/submit-articles' },
  { label: 'BOOKS', href: '/books' },
  { label: 'BOOK SUBMISSION', href: '/book-submission' },
  { label: 'JOIN AS EDITOR', href: '/join-as-editor' },
  { label: 'CONTACT', href: '/contact' },
];

export const MainNav: React.FC = () => {
  const { theme } = useTheme();
  const { currentPath } = useRouter();

  const isNavActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  return (
    <nav
      className="hidden lg:block shadow-sm transition-colors sticky top-0 z-30"
      style={{
        backgroundColor: theme.navBg,
        color: theme.navText,
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-stretch">
          {NAV_ITEMS.map((item) => {
            const active = isNavActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`px-5 py-3.5 text-xs sm:text-[13px] font-bold tracking-wide uppercase transition-colors inline-flex items-center justify-center whitespace-nowrap ${
                  active
                    ? 'text-white'
                    : 'text-white/95 hover:text-white'
                }`}
                style={{
                  fontFamily: theme.fontFamilyHeading,
                  backgroundColor: active ? theme.navHoverBg : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.backgroundColor = theme.navHoverBg;
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
