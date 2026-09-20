import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useRouter } from '../../context/RouterContext';
import { ClassicHeader } from './ClassicHeader';
import { ClassicDrawer } from './ClassicDrawer';
import { ClassicFooter } from './ClassicFooter';
import { ClassicHome } from './ClassicHome';
import { TemplateShellProps } from '../types';

export const ClassicShell: React.FC<TemplateShellProps> = ({
  children,
  sidebar,
  heroBanner,
}) => {
  const { theme } = useTheme();
  const { currentPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = currentPath === '/';

  return (
    <div
      className="flex flex-col min-h-screen transition-colors"
      style={{
        backgroundColor: theme.bgPage,
        fontFamily: theme.fontFamilyBody,
        color: theme.textPrimary,
      }}
    >
      <ClassicHeader onToggleMobileMenu={() => setMobileMenuOpen(true)} />
      <ClassicDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {isHome ? (
        /* Redesigned academic homepage */
        <main className="flex-1 max-w-6xl w-full mx-auto px-4">
          <ClassicHome />
        </main>
      ) : (
        <>
          {/* Optional Full-width Hero Banner (.block-inner) */}
          {heroBanner}

          <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
            {sidebar ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Main Content Area (Left on Desktop, col-md-8) */}
                <div className="lg:col-span-8 min-w-0">
                  {children}
                </div>

                {/* Sidebar Area (Right on Desktop, col-md-4) */}
                <div className="lg:col-span-4 space-y-6 min-w-0">
                  {sidebar}
                </div>
              </div>
            ) : (
              <div>{children}</div>
            )}
          </main>
        </>
      )}

      <ClassicFooter />
    </div>
  );
};