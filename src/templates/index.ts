import { ThemeId } from '../types';
import { Template, TemplateShellProps } from './types';
import { modernTemplate } from './modern';

export const TEMPLATES: Record<ThemeId, Template> = {
  modern: modernTemplate,
};

export const useTemplate = (): Template => {
  return modernTemplate;
};

export type { Template, TemplateShellProps } from './types';

export default TEMPLATES;
