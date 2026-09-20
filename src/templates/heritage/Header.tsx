import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from '../../context/RouterContext';
import { ThemeSwitcher } from '../../components/ui/ThemeSwitcher';
import { Mail } from 'lucide-react';

export const HeritageHeader: React.FC = () => {
  const { theme } = useTheme();

  return (
    <header className="w-full transition-colors">
      {/* Thin utility strip */}
      <div className="border-b border-stone-300/70">
        <div
          className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between gap-4 text-[11px] tracking-[0.18em] uppercase text-stone-500"
          style={{ fontFamily: theme.fontFamilyBody }}
        >
          <span className="hidden md:inline">Open Access Scholarly Publisher</span>
          <a
            href="mailto:jpub.editor@jpub.org"
            className="flex items-center gap-1.5 hover:text-[#7f1d1d] transition-colors"
          >
            <Mail className="w-3 h-3" />
            jpub.editor@jpub.org
          </a>
          <ThemeSwitcher />
        </div>
      </div>

      {/* Centered serif masthead */}
      <div className="border-b border-stone-300/70">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10 text-center">
          <Link to="/" className="inline-block">
            <img
              src="/images/jpubv5.png"
              alt="S3 Technologies Logo"
              className="h-14 sm:h-20 w-auto object-contain mx-auto"
            />
            <h1
              className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-wide text-[#7f1d1d] leading-tight"
              style={{ fontFamily: theme.fontFamilyHeading }}
            >
              S3 Technologies
            </h1>
            <p
              className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-stone-500"
              style={{ fontFamily: theme.fontFamilyBody }}
            >
              Today&apos;s Research, Tomorrow Trail, Post-Tomorrow Apply !!!
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeritageHeader;