import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface ContentCardProps {
  children: React.ReactNode;
  as?: 'article' | 'section' | 'div';
  className?: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({ children, as = 'article', className = '' }) => {
  const { theme } = useTheme();
  const Tag = as;
  return <Tag className={`content ${theme.contentContainerClass} ${className}`}>{children}</Tag>;
};