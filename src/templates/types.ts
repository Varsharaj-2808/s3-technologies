import React from 'react';
import { ThemeId } from '../types';

export interface TemplateShellProps {
  children: React.ReactNode;
  activeJournalId?: number;
  sidebar?: React.ReactNode;
  heroBanner?: React.ReactNode;
}

export interface Template {
  id: ThemeId;
  name: string;
  subtitle: string;
  Shell: React.ComponentType<TemplateShellProps>;
}