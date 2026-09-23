import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';
import { Layout } from '../components/layout/Layout';
import { ContentCard } from '../templates/shared/ContentCard';
import { SectionTitle } from '../templates/shared/SectionTitle';
import { getJournalById, JOURNALS_DATA } from '../data/journalsData';
import { getEditorialBoardByJournalId } from '../data/editorialData';
import { POLICIES_DATA } from '../data/policiesData';
import { getArticlesByJournalId } from '../data/articlesData';
import { JournalMasthead } from '../components/journal/JournalMasthead';
import { JournalNavMenu } from '../components/journal/JournalNavMenu';
import { EditorialMemberCard } from '../components/journal/EditorialMemberCard';
import { ArticleListItem } from '../components/journal/ArticleListItem';
import { Folder } from 'lucide-react';

export const JournalSubpage: React.FC = () => {
  const { params } = useRouter();
  const { theme } = useTheme();

  const journalId = params.journalId ? parseInt(params.journalId, 10) : 43;
  const journal = getJournalById(journalId) || JOURNALS_DATA[0];
  const subpage = params.subpage || 'aims-scope';

  // 1. EDITORIAL BOARD VIEW
  if (subpage === 'editorial-board') {
    const boardMembers = getEditorialBoardByJournalId(journal.id);
    return (
      <Layout
        activeJournalId={journal.id}
        heroBanner={<JournalMasthead journal={journal} subpageTitle="Editorial Board" />}
        sidebar={<JournalNavMenu journalId={journal.id} />}
      >
        <ContentCard>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <SectionTitle>Editorial Board</SectionTitle>
              <p className="text-xs text-gray-600">
                Academic governance and disciplinary editorial board members for {journal.title}.
              </p>
            </div>

            <Link
              to="/join-as-editor"
              className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white transition-opacity self-start sm:self-auto"
              style={{ backgroundColor: theme.buttonBg }}
            >
              Join as Editor
            </Link>
          </div>

          <div className="space-y-4 mt-6">
            {boardMembers.length > 0 ? (
              boardMembers.map((member) => (
                <EditorialMemberCard key={member.id} member={member} />
              ))
            ) : (
              <div className="p-8 text-center text-gray-500 text-xs bg-gray-50 border border-gray-200">
                Editorial board appointments for this journal are in progress. Qualified scholars are invited to apply.
              </div>
            )}
          </div>
        </ContentCard>
      </Layout>
    );
  }

  // 2. ARCHIVES & VOLUME BROWSING
  if (subpage === 'archives' || params.volumeId) {
    const selectedVolume = params.volumeId ? parseInt(params.volumeId, 10) : null;
    const selectedIssue = params.issueId ? parseInt(params.issueId, 10) : null;

    const volumes = [
      { volume: 6, year: 2026, issues: [9, 8, 7, 6, 5, 4, 3, 2, 1] },
      { volume: 5, year: 2025, issues: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
      { volume: 4, year: 2024, issues: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
      { volume: 3, year: 2023, issues: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
      { volume: 2, year: 2022, issues: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
      { volume: 1, year: 2021, issues: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
    ];

    const allJournalArticles = getArticlesByJournalId(journal.id);
    const issueArticles =
      selectedVolume && selectedIssue
        ? allJournalArticles.filter((a) => a.volume === selectedVolume && a.issue === selectedIssue)
        : [];

    return (
      <Layout
        activeJournalId={journal.id}
        heroBanner={<JournalMasthead journal={journal} subpageTitle="Archives" />}
        sidebar={<JournalNavMenu journalId={journal.id} />}
      >
        <ContentCard>
          {/* Breadcrumb */}
          <div className="mb-4 text-xs text-gray-500 flex items-center gap-2">
            <Link to={`/journals/${journal.id}/archives`} className="hover:underline font-bold text-gray-900">
              Archives
            </Link>
            {selectedVolume && (
              <>
                <span>&gt;</span>
                <Link to={`/journals/${journal.id}/volume/${selectedVolume}`} className="hover:underline font-semibold">
                  Volume {selectedVolume}
                </Link>
              </>
            )}
            {selectedIssue && (
              <>
                <span>&gt;</span>
                <span className="font-bold text-gray-900">Issue {selectedIssue}</span>
              </>
            )}
          </div>

          {selectedVolume && selectedIssue ? (
            <div>
              <SectionTitle size="md">Volume {selectedVolume}, Issue {selectedIssue}</SectionTitle>
              {issueArticles.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {issueArticles.map((art) => (
                    <ArticleListItem key={art.id} article={art} />
                  ))}
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  <p className="text-xs text-gray-500 mb-4">
                    Sample articles archived in this volume cycle:
                  </p>
                  {allJournalArticles.slice(0, 3).map((art) => (
                    <ArticleListItem key={art.id} article={art} />
                  ))}
                </div>
              )}
            </div>
          ) : selectedVolume ? (
            <div>
              <SectionTitle size="md">Issues in Volume {selectedVolume}</SectionTitle>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {volumes
                  .find((v) => v.volume === selectedVolume)
                  ?.issues.map((iss) => (
                    <Link
                      key={iss}
                      to={`/journals/${journal.id}/volume/${selectedVolume}/issue/${iss}`}
                      className="p-3 border border-gray-300 text-center hover:bg-gray-100 transition-colors text-xs font-bold text-gray-800"
                    >
                      Issue {iss}
                    </Link>
                  ))}
              </div>
            </div>
          ) : (
            <div>
              <SectionTitle size="md">Journal Archives &amp; Volumes</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {volumes.map((v) => (
                  <Link
                    key={v.volume}
                    to={`/journals/${journal.id}/volume/${v.volume}`}
                    className="p-4 border border-gray-300 hover:border-[color:var(--accent-dark)] transition-all flex items-start gap-3 group bg-white"
                  >
                    <Folder className="w-6 h-6 text-[color:var(--accent-dark)] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-[color:var(--accent-dark)]">
                        Volume {v.volume} ({v.year})
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{v.issues.length} Issues Published</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </ContentCard>
      </Layout>
    );
  }

  // 3. STANDARD POLICY OR GUIDELINE VIEW
  const policy = POLICIES_DATA[subpage] || POLICIES_DATA['aims-scope'];

  return (
    <Layout
      activeJournalId={journal.id}
      heroBanner={<JournalMasthead journal={journal} subpageTitle={policy.title} />}
      sidebar={<JournalNavMenu journalId={journal.id} />}
    >
      <ContentCard>
        <SectionTitle>{policy.title}</SectionTitle>
        <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mb-6 text-justify">
          {policy.summary}
        </p>

        <div className="space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
          {policy.sections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <h4
                className="text-sm sm:text-base font-bold text-gray-900"
                style={{ fontFamily: theme.fontFamilyHeading }}
              >
                {section.heading}
              </h4>
              <p className="text-gray-600 leading-relaxed text-justify">{section.content}</p>

              {section.list && (
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-600 text-xs sm:text-[13px]">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {subpage === 'author-guidelines' && (
          <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs text-gray-600">
              Ready to submit your prepared manuscript?
            </span>
            <Link
              to="/submit-articles"
              className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white transition-opacity"
              style={{ backgroundColor: theme.buttonBg }}
            >
              Submit Articles
            </Link>
          </div>
        )}
      </ContentCard>
    </Layout>
  );
};
