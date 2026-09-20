import { useCallback } from 'react';
import { useRouter } from '../../../context/RouterContext';

export interface ModernSection {
  label: string;
  sectionId: string;
}

export const MODERN_SECTIONS: ModernSection[] = [
  { label: 'Home', sectionId: 'home' },
  { label: 'About', sectionId: 'about' },
  { label: 'Journals', sectionId: 'journals' },
  { label: 'Articles', sectionId: 'articles' },
  { label: 'Books', sectionId: 'books' },
  { label: 'Submission', sectionId: 'submission' },
  { label: 'Join as Editor', sectionId: 'join' },
  { label: 'Contact', sectionId: 'contact' },
];

const PENDING_SECTION_KEY = 'modern_pending_section';

export const scrollToSection = (sectionId: string): void => {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const takePendingSection = (): string | null => {
  try {
    const id = window.sessionStorage.getItem(PENDING_SECTION_KEY);
    if (id) {
      window.sessionStorage.removeItem(PENDING_SECTION_KEY);
    }
    return id;
  } catch {
    return null;
  }
};

export const useSectionNav = () => {
  const { currentPath, navigate } = useRouter();

  return useCallback(
    (sectionId: string) => {
      if (currentPath === '/') {
        scrollToSection(sectionId);
      } else {
        try {
          window.sessionStorage.setItem(PENDING_SECTION_KEY, sectionId);
        } catch {}
        navigate('/');
      }
    },
    [currentPath, navigate]
  );
};