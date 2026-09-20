import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface RouteMatch {
  path: string;
  name: string;
  params: Record<string, string>;
  searchParams: Record<string, string>;
}

interface RouterContextType {
  currentPath: string;
  params: Record<string, string>;
  searchParams: Record<string, string>;
  navigate: (url: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  params: {},
  searchParams: {},
  navigate: () => {},
});

export function parseLocation(): { path: string; searchParams: Record<string, string> } {
  const fullPath = window.location.pathname || '/';
  const searchStr = window.location.search;
  const searchParams: Record<string, string> = {};
  
  if (searchStr) {
    const sp = new URLSearchParams(searchStr);
    sp.forEach((value, key) => {
      searchParams[key] = value;
    });
  }

  // Handle backward-compatible legacy PHP URLs
  if (fullPath.includes('journal-details.php') && searchParams['journal-id']) {
    return { path: `/journals/${searchParams['journal-id']}`, searchParams };
  }
  if (fullPath.includes('article-details.php') && searchParams['article-id']) {
    return { path: `/articles/${searchParams['article-id']}`, searchParams };
  }
  if (fullPath.includes('aims-and-scope.php') && searchParams['journal-id']) {
    return { path: `/journals/${searchParams['journal-id']}/aims-scope`, searchParams };
  }
  if (fullPath.includes('editorial-board.php') && searchParams['journal-id']) {
    return { path: `/journals/${searchParams['journal-id']}/editorial-board`, searchParams };
  }
  if (fullPath.includes('submission.php') && searchParams['journal-id']) {
    return { path: `/journals/${searchParams['journal-id']}/submission`, searchParams };
  }
  if (fullPath.includes('journal-volumes.php') && searchParams['journal-id']) {
    return { path: `/journals/${searchParams['journal-id']}/archives`, searchParams };
  }
  if (fullPath.includes('submit-articles.php')) {
    return { path: '/submit-articles', searchParams };
  }
  if (fullPath.includes('books.php')) {
    return { path: '/books', searchParams };
  }
  if (fullPath.includes('book-submission.php')) {
    return { path: '/book-submission', searchParams };
  }
  if (fullPath.includes('join-as-editor.php')) {
    return { path: '/join-as-editor', searchParams };
  }
  if (fullPath.includes('contact.php')) {
    return { path: '/contact', searchParams };
  }
  if (fullPath.includes('review-request.php')) {
    return { path: '/review-request', searchParams };
  }
  if (fullPath.includes('reviewer-report-form.php')) {
    return { path: '/reviewer-report-form', searchParams };
  }
  if (fullPath.includes('manuscript-processing.php')) {
    return { path: '/manuscript-processing', searchParams };
  }
  if (fullPath.includes('book-update-marburg-virus.php')) {
    return { path: '/books/update-marburg-virus', searchParams };
  }

  return { path: fullPath, searchParams };
}

export function extractParams(currentPath: string): Record<string, string> {
  const params: Record<string, string> = {};

  // Pattern: /journals/:journalId/:subpage/volume/:volumeId/issue/:issueId
  const issueMatch = currentPath.match(/^\/journals\/(\d+)\/volume\/(\d+)\/issue\/(\d+)/);
  if (issueMatch) {
    params.journalId = issueMatch[1];
    params.volumeId = issueMatch[2];
    params.issueId = issueMatch[3];
    return params;
  }

  // Pattern: /journals/:journalId/volume/:volumeId
  const volMatch = currentPath.match(/^\/journals\/(\d+)\/volume\/(\d+)/);
  if (volMatch) {
    params.journalId = volMatch[1];
    params.volumeId = volMatch[2];
    return params;
  }

  // Pattern: /journals/:journalId/:subpage
  const subpageMatch = currentPath.match(/^\/journals\/(\d+)\/([a-zA-Z0-9_-]+)/);
  if (subpageMatch) {
    params.journalId = subpageMatch[1];
    params.subpage = subpageMatch[2];
    return params;
  }

  // Pattern: /journals/:journalId
  const journalMatch = currentPath.match(/^\/journals\/(\d+)/);
  if (journalMatch) {
    params.journalId = journalMatch[1];
    return params;
  }

  // Pattern: /articles/:articleId
  const articleMatch = currentPath.match(/^\/articles\/(\d+)/);
  if (articleMatch) {
    params.articleId = articleMatch[1];
    return params;
  }

  // Pattern: /books/:bookSlug
  const bookMatch = currentPath.match(/^\/books\/([a-zA-Z0-9_-]+)/);
  if (bookMatch) {
    params.bookSlug = bookMatch[1];
    return params;
  }

  return params;
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => parseLocation().path);
  const [searchParams, setSearchParams] = useState<Record<string, string>>(() => parseLocation().searchParams);

  useEffect(() => {
    const handlePopState = () => {
      const loc = parseLocation();
      setCurrentPath(loc.path);
      setSearchParams(loc.searchParams);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((url: string) => {
    let targetPath = url;
    let newSearchParams: Record<string, string> = {};

    if (url.includes('?')) {
      const [p, qs] = url.split('?');
      targetPath = p;
      const sp = new URLSearchParams(qs);
      sp.forEach((val, k) => {
        newSearchParams[k] = val;
      });
    }

    // Convert legacy PHP urls
    if (targetPath.includes('journal-details.php') && newSearchParams['journal-id']) {
      targetPath = `/journals/${newSearchParams['journal-id']}`;
    } else if (targetPath.includes('article-details.php') && newSearchParams['article-id']) {
      targetPath = `/articles/${newSearchParams['article-id']}`;
    }

    if (!targetPath.startsWith('/')) {
      targetPath = '/' + targetPath;
    }

    window.history.pushState({}, '', url);
    setCurrentPath(targetPath);
    setSearchParams(newSearchParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const params = extractParams(currentPath);

  return (
    <RouterContext.Provider value={{ currentPath, params, searchParams, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);

export const Link: React.FC<{
  to: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  title?: string;
  onClick?: () => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}> = ({ to, className, style, children, title, onClick, onMouseEnter, onMouseLeave }) => {
  const { navigate } = useRouter();

  return (
    <a
      href={to}
      title={title}
      className={className}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={(e) => {
        if (!to.startsWith('http') && !to.startsWith('mailto:') && !to.startsWith('tel:')) {
          e.preventDefault();
          if (onClick) onClick();
          navigate(to);
        }
      }}
    >
      {children}
    </a>
  );
};
