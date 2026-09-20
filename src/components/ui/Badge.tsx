import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const { theme, themeId } = useTheme();

  const getStyle = () => {
    switch (variant) {
      case 'primary':
        if (themeId === 'heritage') {
          return { border: `1px solid ${theme.primaryColor}`, color: theme.primaryColor, background: 'transparent' };
        }
        return { backgroundColor: theme.primaryColor, color: '#ffffff' };
      case 'secondary':
        if (themeId === 'heritage') {
          return { border: `1px solid ${theme.secondaryColor}`, color: theme.secondaryColor, background: 'transparent' };
        }
        return { backgroundColor: theme.secondaryColor, color: '#ffffff' };
      case 'accent':
        return { backgroundColor: theme.accentColor, color: '#ffffff' };
      case 'outline':
        return { border: `1px solid ${theme.borderColor}`, color: theme.textSecondary };
      case 'success':
        return { backgroundColor: '#10b981', color: '#ffffff' };
      case 'neutral':
      default:
        return { backgroundColor: '#f1f5f9', color: '#475569' };
    }
  };

  const radiusClass = themeId === 'modern' ? 'rounded-full' : themeId === 'classic' ? 'rounded' : 'rounded-none';

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs font-semibold whitespace-nowrap tracking-wide ${radiusClass} ${className}`}
      style={getStyle()}
    >
      {children}
    </span>
  );
};
