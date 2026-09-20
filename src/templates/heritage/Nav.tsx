import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useRouter, Link } from '../../context/RouterContext';
import { NAV_ITEMS } from '../../components/layout/MainNav';
import { Menu } from 'lucide-react';

interface HeritageNavProps {
  onToggleMobileMenu: () => void;
}

export const HeritageNav: React.FC<HeritageNavProps> = ({ onToggleMobileMenu }) => {
  const { theme } = useTheme();
  const { currentPath } = useRouter();

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  return (
    <nav
      className="sticky top-0 z-30 bg-[#fcfaf6]/95 backdrop-blur-sm border-b border-stone-300/70 transition-colors"
      style={{ fontFamily: theme.fontFamilyBody }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between lg:justify-center">
          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={onToggleMobileMenu}
              className="p-2.5 text-stone-700 hover:bg-stone-200/70 rounded transition-colors"
              aria-label="Toggle Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Centered small-caps nav */}
          <div className="hidden lg:flex items-stretch divide-x divide-stone-300/70">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                    active ? 'text-[#7f1d1d]' : 'text-stone-700 hover:text-[#7f1d1d]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Balance spacer for mobile nav centering */}
          <div className="lg:hidden w-9" />
        </div>
      </div>
    </nav>
  );
};

export default HeritageNav;