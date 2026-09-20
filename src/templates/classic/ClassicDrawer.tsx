import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useRouter, Link } from '../../context/RouterContext';
import { ThemeSwitcher } from '../../components/ui/ThemeSwitcher';
import { NAV_ITEMS } from '../../components/layout/MainNav';
import { X, Mail } from 'lucide-react';

const SERIF = "'Georgia', 'Times New Roman', serif";

interface ClassicDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClassicDrawer: React.FC<ClassicDrawerProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const { currentPath } = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div
        className="relative ml-auto w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto"
        style={{ fontFamily: theme.fontFamilyBody }}
      >
        <div className="p-4 flex items-center justify-between text-gray-800 border-b-2 border-gray-200">
          <div className="flex items-center gap-2">
            <img src="/images/jpubv5.png" alt="S3 Technologies Logo" className="h-8 w-auto object-contain" />
            <span className="font-bold text-lg leading-tight" style={{ fontFamily: SERIF }}>
              S3 Technologies
            </span>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 transition-colors text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-3 bg-gray-50 border-b border-gray-200">
          <div className="text-xs font-semibold text-gray-500 mb-1.5">Visual Theme:</div>
          <ThemeSwitcher compact={false} />
        </div>

        <div className="flex-1 py-2 divide-y divide-gray-100">
          {NAV_ITEMS.map((item) => {
            const active = item.href === '/' ? currentPath === '/' : currentPath.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={onClose}
                className={`block px-5 py-3 text-sm font-semibold tracking-wide transition-colors text-gray-800 hover:bg-gray-50 ${
                  active ? 'bg-gray-100 text-gray-900' : ''
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-200 text-xs text-gray-600">
          <p className="font-semibold text-gray-800 mb-1">Editorial Office:</p>
          <p>Prayagraj, Uttar Pradesh, India</p>
          <a href="mailto:jpub.editor@jpub.org" className="flex items-center gap-1 mt-2 text-gray-800 font-medium hover:underline">
            <Mail className="w-3.5 h-3.5" />
            jpub.editor@jpub.org
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClassicDrawer;