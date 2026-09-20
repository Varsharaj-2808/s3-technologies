import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { HeritageHeader } from './Header';
import { HeritageNav } from './Nav';
import { HeritageDrawer } from './Drawer';
import { HeritageFooter } from './Footer';
import { TemplateShellProps } from '../types';

export const HeritageShell: React.FC<TemplateShellProps> = ({
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
      <HeritageHeader />
      <HeritageNav onToggleMobileMenu={() => setMobileMenuOpen(true)} />
      <HeritageDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Framed hero band */}
      {heroBanner && (
        <div className="border-b border-stone-300/70">
          {heroBanner}
        </div>
      )}

      {/* Centered editorial container */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {sidebar ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Content Area */}
            <div className="lg:col-span-8 min-w-0">
              {children}
            </div>

            {/* Sidebar Area */}
            <div className="lg:col-span-4 space-y-6 min-w-0">
              {sidebar}
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">{children}</div>
        )}
      </main>

      <HeritageFooter />
    </div>
  );
};