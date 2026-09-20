import { ThemeId } from '../types';
import { useTheme } from '../context/ThemeContext';
import { Template, TemplateShellProps } from './types';
import { classicTemplate } from './classic';
import { modernTemplate } from './modern';
import { heritageTemplate } from './heritage';

export const TEMPLATES: Record<ThemeId, Template> = {
  classic: classicTemplate,
  modern: modernTemplate,
  heritage: heritageTemplate,
};

export const useTemplate = (): Template => {
  const { themeId } = useTheme();
  return TEMPLATES[themeId];
};

export type { Template, TemplateShellProps } from './types';

export default TEMPLATES;