import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useRouter, Link } from '../../context/RouterContext';
import { ThemeSwitcher } from '../../components/ui/ThemeSwitcher';
import { NAV_ITEMS } from '../../components/layout/MainNav';
import { Mail, Menu } from 'lucide-react';

const SERIF = "'Georgia', 'Times New Roman', serif";

interface ClassicHeaderProps {
  onToggleMobileMenu: () => void;
}

export const ClassicHeader: React.FC<ClassicHeaderProps> = ({ onToggleMobileMenu }) => {
  const { theme } = useTheme();
  const { currentPath } = useRouter();

  const isNavActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  return (
    <header className="w-full bg-white transition-colors">
      {/* Thin academic utility bar */}
      <div className="bg-[#fafafa] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-1.5 flex items-center justify-between gap-4">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-gray-500">
            Open Access Scholarly Publisher &middot; Arts &middot; Science &middot; Engineering &middot; Healthcare
          </p>
          <div className="flex items-center gap-3 text-gray-500">
            <a
              href="mailto:jpub.editor@jpub.org"
              className="hidden sm:flex items-center gap-1 text-[11px] hover:text-gray-800 transition-colors"
            >
              <Mail className="w-3 h-3" />
              jpub.editor@jpub.org
            </a>
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      {/* Academic masthead */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-5 sm:py-6 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/" className="shrink-0">
              <img
                src="/images/jpubv5.png"
                alt="S3 Technologies Logo"
                className="h-14 sm:h-[72px] w-auto object-contain"
              />
            </Link>
            <div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-gray-500 mb-1">
                An autonomous open access publisher
              </p>
              <Link to="/">
                <h1
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-none tracking-tight"
                  style={{ fontFamily: SERIF }}
                >
                  S3 Technologies
                </h1>
              </Link>
              <p className="mt-1.5 text-[11px] sm:text-xs text-gray-500 italic">
                Today&apos;s Research, Tomorrow Trail, Post-Tomorrow Apply !!!
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            {/* Mobile hamburger button */}
            <button
              onClick={onToggleMobileMenu}
              className="lg:hidden p-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label="Toggle Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Clean horizontal navigation */}
      <nav
        className="hidden lg:block sticky top-0 z-30 bg-gray-800 text-white"
        style={{ fontFamily: theme.fontFamilyBody }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex items-stretch">
            {NAV_ITEMS.map((item) => {
              const active = isNavActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`inline-flex items-center px-4 xl:px-5 py-3.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                      active ? 'text-white bg-gray-700/60' : 'text-gray-300 hover:text-white hover:bg-gray-700/60'
                    }`}
                    style={{
                      borderColor: active ? theme.primaryColor : 'transparent',
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default ClassicHeader;