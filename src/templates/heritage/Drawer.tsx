import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useRouter, Link } from '../../context/RouterContext';
import { NAV_ITEMS } from '../../components/layout/MainNav';
import { ThemeSwitcher } from '../../components/ui/ThemeSwitcher';
import { X, Mail } from 'lucide-react';

interface HeritageDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HeritageDrawer: React.FC<HeritageDrawerProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const { currentPath } = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div
        className="relative ml-auto w-4/5 max-w-sm bg-[#fcfaf6] h-full shadow-2xl flex flex-col z-10 overflow-y-auto"
        style={{ fontFamily: theme.fontFamilyBody }}
      >
        <div className="p-4 flex items-center justify-between border-b border-stone-300/70">
          <span
            className="font-black tracking-widest text-base text-[#7f1d1d]"
            style={{ fontFamily: theme.fontFamilyHeading }}
          >
            S3 TECHNOLOGIES
          </span>
          <button onClick={onClose} className="p-1.5 hover:bg-stone-200/70 rounded text-stone-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-3 border-b border-stone-300/70">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500 mb-1.5">
            Visual Theme
          </div>
          <ThemeSwitcher compact={false} />
        </div>

        <div className="flex-1 py-2">
          {NAV_ITEMS.map((item) => {
            const active = item.href === '/' ? currentPath === '/' : currentPath.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={onClose}
                className={`block px-5 py-3 text-sm tracking-wide transition-colors ${
                  active
                    ? 'font-bold text-[#7f1d1d] bg-stone-200/40'
                    : 'text-stone-700 hover:bg-stone-200/40'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-stone-300/70 text-xs text-stone-500">
          <p className="font-semibold uppercase tracking-widest text-stone-700 mb-1">Editorial Office</p>
          <p>Prayagraj, Uttar Pradesh, India</p>
          <a href="mailto:jpub.editor@jpub.org" className="flex items-center gap-1 mt-2 text-[#7f1d1d] font-medium">
            <Mail className="w-3.5 h-3.5" />
            jpub.editor@jpub.org
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeritageDrawer;