import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useRouter, Link } from '../../context/RouterContext';
import { NAV_ITEMS } from './MainNav';
import { X, BookOpen, Mail } from 'lucide-react';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const { currentPath } = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Body */}
      <div
        className="relative ml-auto w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto"
        style={{ fontFamily: theme.fontFamilyBody }}
      >
        <div
          className="p-4 flex items-center justify-between text-white"
          style={{ backgroundColor: theme.primaryColor }}
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            <span className="font-bold tracking-tight text-base" style={{ fontFamily: theme.fontFamilyHeading }}>
              JAGUA PUBLICATION
            </span>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/20 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Theme select on mobile */}
        <div className="p-3 bg-gray-50 border-b border-gray-200">
          <div className="text-xs font-semibold text-gray-500 mb-1.5">Visual Theme:</div>
          <ThemeSwitcher compact={false} />
        </div>

        {/* Navigation list */}
        <div className="flex-1 py-2 divide-y divide-gray-100">
          {NAV_ITEMS.map((item) => {
            const active = item.href === '/' ? currentPath === '/' : currentPath.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={onClose}
                className={`block px-5 py-3 text-sm font-semibold tracking-wide transition-colors ${
                  active
                    ? 'text-white font-bold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                style={{
                  backgroundColor: active ? theme.primaryColor : undefined,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Footer Support Info */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 text-xs text-gray-600">
          <p className="font-semibold text-gray-800 mb-1">Editorial Office:</p>
          <p>Prayagraj, Uttar Pradesh, India</p>
          <a
            href="mailto:jpub.editor@jpub.org"
            className="flex items-center gap-1 mt-2 text-purple-700 font-medium"
          >
            <Mail className="w-3.5 h-3.5" />
            jpub.editor@jpub.org
          </a>
        </div>
      </div>
    </div>
  );
};
