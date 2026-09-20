import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useRouter, Link } from '../../context/RouterContext';
import { ThemeSwitcher } from '../../components/ui/ThemeSwitcher';
import { NAV_ITEMS } from '../../components/layout/MainNav';
import { Menu, Mail } from 'lucide-react';

interface ModernHeaderProps {
  onToggleMobileMenu: () => void;
}

export const ModernHeader: React.FC<ModernHeaderProps> = ({ onToggleMobileMenu }) => {
  const { theme } = useTheme();
  const { currentPath } = useRouter();

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  return (
    <header className="w-full transition-colors">
      {/* Slim utility strip */}
      <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
          <p className="hidden md:block text-slate-400">
            Open Access Scholarly Publisher
          </p>
          <a
            href="mailto:jpub.editor@jpub.org"
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            jpub.editor@jpub.org
          </a>
          <ThemeSwitcher />
        </div>
      </div>

      {/* Sticky integrated header + navigation */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/jpubv5.png"
              alt="S3 Technologies Logo"
              className="h-11 w-auto object-contain"
            />
            <span className="hidden sm:block">
              <span
                className="block text-lg font-extrabold tracking-tight text-slate-900 leading-tight"
                style={{ fontFamily: theme.fontFamilyHeading }}
              >
                S3 Technologies
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-slate-500">
                Open Access Publisher
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wide rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={onToggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default ModernHeader;