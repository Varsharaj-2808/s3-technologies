import React from 'react';
import { useTemplate, TemplateShellProps } from '../../templates';

export type LayoutProps = TemplateShellProps;

export const Layout: React.FC<LayoutProps> = (props) => {
  const template = useTemplate();
  const Shell = template.Shell;
  return <Shell {...props} />;
};