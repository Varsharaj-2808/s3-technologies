import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';
import { Layout } from '../components/layout/Layout';
import { ContentCard } from '../templates/shared/ContentCard';
import { SectionTitle } from '../templates/shared/SectionTitle';
import { getJournalById, JOURNALS_DATA } from '../data/journalsData';
import { getArticlesByJournalId, ARTICLES_DATA } from '../data/articlesData';
import { JournalMasthead } from '../components/journal/JournalMasthead';
import { JournalNavMenu } from '../components/journal/JournalNavMenu';
import { ArticleListItem } from '../components/journal/ArticleListItem';
import { Pagination } from '../components/ui/Pagination';

export const JournalDetailPage: React.FC = () => {
  const { params } = useRouter();
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  const journalId = params.journalId ? parseInt(params.journalId, 10) : 43;
  const journal = getJournalById(journalId) || JOURNALS_DATA[0];

  const journalArticles = getArticlesByJournalId(journal.id);
  const displayArticles = journalArticles.length > 0 ? journalArticles : ARTICLES_DATA.slice(0, 3);

  const totalPages = Math.max(1, Math.ceil(displayArticles.length / articlesPerPage));
  const paginatedArticles = displayArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  return (
    <Layout
      activeJournalId={journal.id}
      heroBanner={<JournalMasthead journal={journal} />}
      sidebar={<JournalNavMenu journalId={journal.id} />}
    >
      <ContentCard>
        {/* Cover Poster and Intro */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 pb-6 border-b border-gray-200">
          <div className="w-32 sm:w-40 shrink-0 bg-white border border-gray-200 p-1 shadow-xs">
            <img
              src={journal.coverImage}
              alt={journal.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = '/images/jpubv5.png';
              }}
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: theme.fontFamilyHeading }}
            >
              {journal.title}
            </h2>
            <div className="space-y-1 text-xs text-gray-600 mb-4">
              <p><strong>ISSN (Online):</strong> {journal.issn}</p>
              <p><strong>Publishing Frequency:</strong> {journal.frequency}</p>
              <p><strong>Open Access License:</strong> Creative Commons CC BY 4.0</p>
              <p><strong>Article Processing Charge (APC):</strong> ${journal.apcUsd} USD</p>
            </div>
          </div>
        </div>

        {/* About Journal */}
        <SectionTitle size="md">About Journal</SectionTitle>
        <p className="text-gray-700 text-xs sm:text-[13px] leading-relaxed mb-6 text-justify">
          {journal.description}
        </p>

        {/* Announcements */}
        <SectionTitle size="md">Announcements</SectionTitle>
        <p className="text-gray-700 text-xs sm:text-[13px] leading-relaxed mb-8 text-justify">
          Call for Papers: Authors from academic, clinical, and industrial institutions are cordially invited to submit original research papers, reviews, and case reports. All submissions are peer-reviewed according to rigorous scientific standards.
        </p>

        {/* Articles in this Journal */}
        <SectionTitle size="md">Articles in this Journal</SectionTitle>

        <div className="divide-y divide-gray-200">
          {paginatedArticles.map((article) => (
            <ArticleListItem key={article.id} article={article} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(p) => setCurrentPage(p)}
            />
          </div>
        )}
      </ContentCard>
    </Layout>
  );
};
