import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';
import { Layout } from '../components/layout/Layout';
import { ContentCard } from '../templates/shared/ContentCard';
import { SectionTitle } from '../templates/shared/SectionTitle';
import { getArticleById, ARTICLES_DATA } from '../data/articlesData';
import { getJournalById } from '../data/journalsData';
import { JournalNavMenu } from '../components/journal/JournalNavMenu';

export const ArticleDetailPage: React.FC = () => {
  const { params } = useRouter();
  const { theme } = useTheme();

  const articleId = params.articleId ? parseInt(params.articleId, 10) : 394;
  const article = getArticleById(articleId) || ARTICLES_DATA[0];
  const journal = getJournalById(article.journalId);

  return (
    <Layout
      activeJournalId={article.journalId}
      sidebar={journal ? <JournalNavMenu journalId={journal.id} /> : undefined}
    >
      <ContentCard>
        {/* Article Type */}
        <p className="text-green-700 font-semibold text-sm mb-1">
          {article.articleType}
        </p>

        {/* Title */}
        <h3
          className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-4"
          style={{ fontFamily: theme.fontFamilyHeading }}
        >
          {article.title}
        </h3>

        {/* Authors & Publication Date Metadata */}
        <div className="date mb-6 text-xs sm:text-[13px] text-gray-700">
          <ul className="space-y-2">
            <li>
              By{' '}
              <span
                className="font-semibold"
                style={{ color: theme.primaryColor }}
              >
                {article.authors.join(', ')}
              </span>{' '}
              -{' '}
              <span style={{ color: theme.primaryColor }}>
                {article.publicationDate}
              </span>
            </li>
            <li>
              {journal?.title || 'S3 Publication'}, Volume: {article.volume}, Issue: {article.issue}, Pages: {article.pages}
            </li>
            <li>
              <a
                href={article.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-semibold"
                style={{ color: theme.primaryColor }}
              >
                {article.doi}
              </a>
            </li>
            <li className="text-gray-500">
              Received: {article.receivedDate}; Accepted: {article.acceptedDate}; Published: {article.publicationDate}
            </li>
          </ul>
        </div>

        {/* Abstract */}
        <SectionTitle size="md">Abstract</SectionTitle>
        <p className="text-gray-700 text-xs sm:text-[13px] leading-relaxed mb-6 text-justify">
          {article.abstract}
        </p>

        {/* Keywords */}
        {article.keywords && article.keywords.length > 0 && (
          <div className="mb-6">
            <SectionTitle size="md">Keywords</SectionTitle>
            <p className="text-gray-700 text-xs sm:text-[13px] leading-relaxed">
              {article.keywords.join(', ')}
            </p>
          </div>
        )}

        {/* Download PDF Button */}
        <div className="mb-8">
          <a
            href={article.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white transition-opacity inline-block"
            style={{ backgroundColor: theme.buttonBg }}
          >
            Download PDF
          </a>
        </div>

        {/* References */}
        {article.references && article.references.length > 0 && (
          <div>
            <SectionTitle size="md">References</SectionTitle>
            <ol className="list-decimal list-inside space-y-2 text-xs text-gray-700 leading-relaxed text-justify">
              {article.references.map((ref, idx) => (
                <li key={idx}>{ref}</li>
              ))}
            </ol>
          </div>
        )}
      </ContentCard>
    </Layout>
  );
};
