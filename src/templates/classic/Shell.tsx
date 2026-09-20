import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { AppHeader } from '../../components/layout/AppHeader';
import { MainNav } from '../../components/layout/MainNav';
import { MobileDrawer } from '../../components/layout/MobileDrawer';
import { AppFooter } from '../../components/layout/AppFooter';
import { SubFooter } from '../../components/layout/SubFooter';
import { TemplateShellProps } from '../types';

export const ClassicShell: React.FC<TemplateShellProps> = ({
  children,
  sidebar,
  heroBanner,
}) => {
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="flex flex-col min-h-screen transition-colors"
      style={{
        backgroundColor: theme.bgPage,
        fontFamily: theme.fontFamilyBody,
        color: theme.textPrimary,
      }}
    >
      <AppHeader onToggleMobileMenu={() => setMobileMenuOpen(true)} />
      <MainNav />
      <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

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

      <AppFooter />
      <SubFooter />
    </div>
  );
};