import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeSwitcher } from '../../components/ui/ThemeSwitcher';
import { MODERN_SECTIONS, useSectionNav } from './home/scrollUtils';
import { X, Mail } from 'lucide-react';

interface ModernDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModernDrawer: React.FC<ModernDrawerProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const goToSection = useSectionNav();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div
        className="relative ml-auto w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto rounded-l-2xl"
        style={{ fontFamily: theme.fontFamilyBody }}
      >
        <div className="p-4 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-2">
            <img src="/images/jpubv5.png" alt="S3 Technologies Logo" className="h-8 w-auto object-contain" />
            <span className="font-extrabold tracking-tight text-base text-slate-900" style={{ fontFamily: theme.fontFamilyHeading }}>
              S3 Technologies
            </span>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-3 border-b border-slate-200">
          <div className="text-xs font-semibold text-slate-500 mb-1.5">Visual Theme:</div>
          <ThemeSwitcher compact={false} />
        </div>

        <div className="flex-1 py-2 divide-y divide-slate-100">
          {MODERN_SECTIONS.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => {
                onClose();
                goToSection(item.sectionId);
              }}
              className="block w-full text-left px-5 py-3 text-sm font-semibold tracking-wide transition-colors text-slate-700 hover:bg-slate-50"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">
          <p className="font-semibold text-slate-700 mb-1">Editorial Office:</p>
          <p>Prayagraj, Uttar Pradesh, India</p>
          <a href="mailto:jpub.editor@jpub.org" className="flex items-center gap-1 mt-2 text-blue-600 font-medium">
            <Mail className="w-3.5 h-3.5" />
            jpub.editor@jpub.org
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModernDrawer;