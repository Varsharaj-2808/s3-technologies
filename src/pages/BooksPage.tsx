import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from '../context/RouterContext';
import { Layout } from '../components/layout/Layout';
import { ContentCard } from '../templates/shared/ContentCard';
import { BOOKS_DATA } from '../data/booksData';

export const BooksPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Layout>
      <ContentCard>
        <h3
          className="text-xl sm:text-2xl font-bold mb-2"
          style={{ fontFamily: theme.fontFamilyHeading, color: theme.primaryColor }}
        >
          JAGUA BOOKS &amp; BOOKS SERIES
        </h3>
        <div
          className="w-12 h-0.5 mb-6"
          style={{ backgroundColor: theme.topBannerBg }}
        />

        <div className="space-y-6">
          {BOOKS_DATA.map((book) => (
            <div
              key={book.id}
              className="flex flex-col sm:flex-row gap-6 p-4 border border-gray-200 bg-white"
            >
              <div className="w-full sm:w-48 shrink-0 bg-gray-50 border border-gray-200 flex items-center justify-center p-2">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="max-h-52 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/images/book1.jpg';
                  }}
                />
              </div>

              <div className="flex-1 space-y-1.5 text-xs text-gray-700">
                <h4
                  className="font-bold text-base text-gray-900 mb-2"
                  style={{ fontFamily: theme.fontFamilyHeading }}
                >
                  Book Title: {book.title}
                </h4>
                <p><strong>Editor:</strong> {book.editor}</p>
                <p><strong>ISBN:</strong> {book.isbn}</p>
                <p><strong>Likely Publication Date:</strong> {book.publicationDate}</p>
                <p><strong>DOI:</strong> {book.doi}</p>
                <div className="pt-3">
                  <Link
                    to={`/books/${book.slug}`}
                    className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white transition-opacity inline-block"
                    style={{ backgroundColor: theme.buttonBg }}
                  >
                    View more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentCard>
    </Layout>
  );
};
