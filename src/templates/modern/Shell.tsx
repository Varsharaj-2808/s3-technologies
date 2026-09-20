import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useRouter } from '../../context/RouterContext';
import { ModernHeader } from './Header';
import { ModernDrawer } from './Drawer';
import { ModernFooter } from './Footer';
import { ModernHomeSections } from './home/ModernHomeSections';
import { TemplateShellProps } from '../types';

export const ModernShell: React.FC<TemplateShellProps> = ({
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
      <ModernHeader onToggleMobileMenu={() => setMobileMenuOpen(true)} />
      <ModernDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {isHome ? (
        /* Modern single scrolling home page */
        <ModernHomeSections />
      ) : (
        <>
          {/* Full-width hero band */}
          {heroBanner && <div className="w-full">{heroBanner}</div>}

          {/* Full-width modern container */}
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            {sidebar ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Sidebar Area (Left on Desktop) */}
                <div className="lg:col-span-4 lg:order-1 space-y-6 min-w-0">
                  {sidebar}
                </div>

                {/* Main Content Area (Right on Desktop) */}
                <div className="lg:col-span-8 lg:order-2 min-w-0">
                  {children}
                </div>
              </div>
            ) : (
              <div className="max-w-6xl mx-auto">{children}</div>
            )}
          </main>
        </>
      )}

      <ModernFooter />
    </div>
  );
};