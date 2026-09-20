import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { HomePage } from './pages/HomePage';
import { JournalsPage } from './pages/JournalsPage';
import { JournalDetailPage } from './pages/JournalDetailPage';
import { JournalSubpage } from './pages/JournalSubpage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { BooksPage } from './pages/BooksPage';
import { BookDetailPage } from './pages/BookDetailPage';
import { SubmitArticlesPage } from './pages/SubmitArticlesPage';
import { BookSubmissionPage } from './pages/BookSubmissionPage';
import { JoinAsEditorPage } from './pages/JoinAsEditorPage';
import { ContactPage } from './pages/ContactPage';
import { ReviewerReportPage } from './pages/ReviewerReportPage';
import { SupportFormPage } from './pages/SupportFormPage';

const AppRoutes: React.FC = () => {
  const { currentPath, params } = useRouter();

  // Route matching
  if (currentPath === '/') {
    return <HomePage />;
  }

  if (currentPath === '/journals') {
    return <JournalsPage />;
  }

  // Journal detail or subpages
  if (currentPath.startsWith('/journals/')) {
    if (params.subpage || params.volumeId || params.issueId) {
      return <JournalSubpage />;
    }
    return <JournalDetailPage />;
  }

  // Article reading page
  if (currentPath.startsWith('/articles/')) {
    return <ArticleDetailPage />;
  }

  // Books
  if (currentPath === '/books') {
    return <BooksPage />;
  }
  if (currentPath.startsWith('/books/')) {
    return <BookDetailPage />;
  }

  // Submission & author operations
  if (currentPath === '/submit-articles') {
    return <SubmitArticlesPage />;
  }
  if (currentPath === '/book-submission') {
    return <BookSubmissionPage />;
  }
  if (currentPath === '/join-as-editor') {
    return <JoinAsEditorPage />;
  }
  if (currentPath === '/contact') {
    return <ContactPage />;
  }
  if (currentPath === '/reviewer-report-form') {
    return <ReviewerReportPage />;
  }
  if (currentPath === '/review-request' || currentPath === '/manuscript-processing') {
    return <SupportFormPage />;
  }

  // Default fallback
  return <HomePage />;
};

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppRoutes />
      </RouterProvider>
    </ThemeProvider>
  );
}
