import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from '../../context/RouterContext';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';
import { BookOpen, Menu, Sparkles, Mail } from 'lucide-react';

interface AppHeaderProps {
  onToggleMobileMenu: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ onToggleMobileMenu }) => {
  const { theme } = useTheme();

  return (
    <header className="transition-colors w-full">
      {/* Top Utility Bar */}
      <div className="bg-gray-100 border-b border-gray-200 text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-gray-600">
            <span className="hidden sm:inline font-medium">Open Access Scholarly Publisher</span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-gray-500" />
              <a href="mailto:jpub.editor@jpub.org" className="hover:underline text-gray-700">
                jpub.editor@jpub.org
              </a>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      {/* Main Brand Banner (top_banner_wrap) */}
      <div
        className="py-4 sm:py-5 px-4 transition-colors"
        style={{ backgroundColor: theme.topBannerBg }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/" className="shrink-0 group">
              <img
                src="/images/jpubv5.png"
                alt="S3 Technologies Logo"
                className="h-14 sm:h-20 w-auto object-contain drop-shadow-xs"
              />
            </Link>
            <div className="text-white">
              <Link to="/">
                <h1
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight"
                  style={{ fontFamily: theme.fontFamilyHeading }}
                >
                  S3 Technologies
                </h1>
              </Link>
              <h6 className="text-[11px] sm:text-sm text-white/95 font-medium mt-0.5 tracking-wide">
                Today&apos;s Research, Tomorrow Trail, Post-Tomorrow Apply !!!
              </h6>
            </div>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={onToggleMobileMenu}
              className="p-2 bg-white/20 hover:bg-white/30 text-white rounded text-xs"
              aria-label="Toggle Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
