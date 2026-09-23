import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useRouter, Link } from '../../context/RouterContext';
import { MODERN_SECTIONS, useSectionNav } from './home/scrollUtils';
import { Menu, Mail } from 'lucide-react';
import { ThemeSwitcher } from '../../components/ui/ThemeSwitcher';

interface ModernHeaderProps {
  onToggleMobileMenu: () => void;
}

export const ModernHeader: React.FC<ModernHeaderProps> = ({ onToggleMobileMenu }) => {
  const { theme } = useTheme();
  const { currentPath } = useRouter();
  const goToSection = useSectionNav();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (currentPath !== '/') {
      setActiveSection('');
      return;
    }

    const ids = MODERN_SECTIONS.map((s) => s.sectionId);
    const compute = () => {
      const probe = window.innerHeight / 3;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= probe) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    compute();
    window.addEventListener('scroll', compute, { passive: true });
    window.addEventListener('resize', compute);
    return () => {
      window.removeEventListener('scroll', compute);
      window.removeEventListener('resize', compute);
    };
  }, [currentPath]);

  return (
    <header className="w-full transition-colors">
      {/* Slim utility strip */}
<div className="bg-[color:var(--top-banner-bg)] text-slate-300 text-xs border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-end gap-4 sm:justify-between">
            <p className="hidden md:block text-slate-400">
              
            </p>
            <div className="flex items-center gap-3">
              <a
                href=""
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                
              </a>
              <ThemeSwitcher />
            </div>
          </div>
        </div>

      {/* Sticky integrated header + navigation */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/jpubv5.png"
              alt="S3 Publication Logo"
              className="h-11 w-auto object-contain"
            />
            <span className="hidden sm:block">
              <span
                className="block text-lg font-extrabold tracking-tight text-slate-900 leading-tight"
                style={{ fontFamily: theme.fontFamilyHeading }}
              >
                
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-slate-500">
                
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {MODERN_SECTIONS.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => goToSection(item.sectionId)}
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wide rounded-lg transition-colors ${
                  activeSection === item.sectionId
                    ? 'text-[color:var(--brand-text)] bg-[color:var(--brand-tint-bg)]'
                    : 'text-slate-600 hover:text-[color:var(--brand-text)] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
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