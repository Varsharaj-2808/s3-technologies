import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';
import { Layout } from '../components/layout/Layout';
import { ContentCard } from '../templates/shared/ContentCard';
import { SectionTitle } from '../templates/shared/SectionTitle';
import { getBookBySlug } from '../data/booksData';

export const BookDetailPage: React.FC = () => {
  const { params } = useRouter();
  const { theme } = useTheme();

  const slug = params.bookSlug || 'update-marburg-virus';
  const book = getBookBySlug(slug);

  if (!book) {
    return (
      <Layout>
        <ContentCard>
          <div className="p-8 text-center text-gray-500 text-xs bg-gray-50 border border-gray-200">
            <p className="font-semibold text-sm mb-2">Book not found</p>
            <p className="mb-4">
              The book you are looking for does not exist or is not available.
            </p>
            <Link to="/books" className="font-bold text-blue-600 underline">
              Browse all books
            </Link>
          </div>
        </ContentCard>
      </Layout>
    );
  }

  return (
    <Layout
      heroBanner={
        <section
          className="py-10 text-center mb-2 transition-colors"
          style={{ backgroundColor: theme.innerBannerBg }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <h1
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide"
              style={{ fontFamily: theme.fontFamilyHeading }}
            >
              {book.title}
            </h1>
          </div>
        </section>
      }
    >
      <ContentCard>
        <div className="flex flex-col sm:flex-row gap-6 mb-8 pb-6 border-b border-gray-200">
          <div className="w-full sm:w-48 shrink-0 bg-gray-50 border border-gray-200 flex items-center justify-center p-2">
            <img
              src={book.coverImage}
              alt={book.title}
              className="max-h-60 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = '/images/book1.jpg';
              }}
            />
          </div>

          <div className="flex-1 space-y-2 text-xs sm:text-[13px] text-gray-700">
            <h3
              className="text-xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: theme.fontFamilyHeading }}
            >
              {book.title}
            </h3>
            <p><strong>Editor:</strong> {book.editor}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>Likely Publication Date:</strong> {book.publicationDate}</p>
            <p><strong>DOI:</strong> {book.doi}</p>
            <p><strong>Publisher:</strong> S3 Publication</p>

            <div className="pt-4">
              <Link
                to="/book-submission"
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white transition-opacity inline-block"
                style={{ backgroundColor: theme.buttonBg }}
              >
                Submit Chapter / Book Proposal
              </Link>
            </div>
          </div>
        </div>

        {/* Synopsis & Scope */}
        <div>
          <SectionTitle size="md">About this Publication</SectionTitle>
          <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed text-justify mb-6">
            {book.description}
          </p>

          <div className="p-4 bg-gray-50 border border-gray-200 text-xs text-gray-700 space-y-2">
            <h4 className="font-bold text-sm text-gray-900">
              Call for Chapter Submissions
            </h4>
            <p className="leading-relaxed">
              We welcome chapter proposals for upcoming editions and monographs in this subject series.
              Scholars, clinical experts, and researchers are encouraged to submit draft chapters.
            </p>
            <p className="font-semibold text-gray-800">
              Editorial inquiries: {book.contactEmail}
            </p>
          </div>
        </div>
      </ContentCard>
    </Layout>
  );
};
