import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from '../../context/RouterContext';
import { SectionTitle } from '../shared/SectionTitle';
import { JournalCard } from '../../components/journal/JournalCard';
import { ArticleListItem } from '../../components/journal/ArticleListItem';
import { Badge } from '../../components/ui/Badge';
import { LatestArticlesSidebar } from '../../components/sidebars/LatestArticlesSidebar';
import { TrackSubmissionCard } from '../../components/sidebars/TrackSubmissionCard';
import { JOURNALS_DATA } from '../../data/journalsData';
import { ARTICLES_DATA, getArticlesByJournalId } from '../../data/articlesData';
import { BOOKS_DATA } from '../../data/booksData';
import { EDITORIAL_MEMBERS } from '../../data/editorialData';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  Globe,
  ShieldCheck,
  Users,
} from 'lucide-react';

const SERIF = "'Georgia', 'Times New Roman', serif";

/* Compact academic hero / introduction */
const HeroIntro: React.FC = () => {
  const { theme } = useTheme();
  return (
    <section className="bg-white border border-gray-300 p-6 sm:p-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">
        commanding open access research
      </p>
      <h2
        className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight"
        style={{ fontFamily: SERIF }}
      >
        Scholarly journals, proceedings and books
      </h2>
      <div className="w-12 h-px bg-gray-300 mt-4 mb-5" />
      <p className="text-sm text-gray-700 leading-relaxed text-justify">
        S3 Technologies is an autonomous open access academic publisher of arts, science,
        engineering and healthcare journals, proceeding and books. Our logic is to map modern
        wildernesses in developing and creating innovation ranges in research, industry and
        administration, and to connect with centres of brilliance around the world to supply
        definitive scope and references in focused and specialist fields.
      </p>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed text-justify">
        We impose rigorous peer review and follow ethical research practices, ensuring high quality
        work reaches a genuinely open access readership.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/journals"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: theme.primaryColor }}
        >
          <BookOpen className="w-4 h-4" />
          Browse our journals
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/submit-articles"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider border border-gray-400 text-gray-800 hover:border-gray-700 hover:bg-gray-50 transition-colors"
        >
          <FileText className="w-4 h-4" />
          Submit a manuscript
        </Link>
      </div>
    </section>
  );
};

/* Featured Journal section */
const FeaturedJournal: React.FC = () => {
  const { theme } = useTheme();
  const featured = JOURNALS_DATA[0];
  const latest = getArticlesByJournalId(featured.id)[0];

  const quickLinks = [
    { label: 'Journal Home', href: `/journals/${featured.id}`, icon: BookOpen },
    { label: 'Submit Paper', href: `/journals/${featured.id}/submission`, icon: FileText },
    { label: 'Editorial Board', href: `/journals/${featured.id}/editorial-board`, icon: Users },
    { label: 'Archives', href: `/journals/${featured.id}/archives`, icon: ShieldCheck },
  ];

  return (
    <section>
      <SectionTitle>Featured Journal</SectionTitle>
      <div className="bg-white border border-gray-300">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="sm:col-span-4 border-b sm:border-b-0 sm:border-r border-gray-200 bg-gray-50 p-6 flex items-center justify-center">
            <img
              src={featured.coverImage}
              alt={featured.title}
              className="max-h-[180px] w-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = '/images/jpubv5.png';
              }}
            />
          </div>
          <div className="sm:col-span-8 p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="primary">{featured.frequency}</Badge>
              <Badge variant="outline">ISSN {featured.issn}</Badge>
              <Badge variant="success">Open Access</Badge>
            </div>
            <h3
              className="text-xl sm:text-2xl font-bold text-gray-900"
              style={{ fontFamily: SERIF }}
            >
              {featured.title}
            </h3>
            <p className="mt-3 text-[13px] text-gray-700 leading-relaxed text-justify">
              {featured.shortDescription}
            </p>
            <p className="mt-2 text-[13px] text-gray-600 leading-relaxed text-justify">
              {featured.aimsAndScopeSummary}
            </p>
            <div className="mt-5 grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
              {quickLinks.map((l) => {
                const Icon = l.icon;
                return (
                  <Link
                    key={l.href}
                    to={l.href}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider border border-gray-300 text-gray-800 hover:text-white transition-colors"
                    style={{ borderColor: '#d1d5db' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = theme.primaryColor;
                      e.currentTarget.style.borderColor = theme.primaryColor;
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = '#d1d5db';
                      e.currentTarget.style.color = '#1f2937';
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {latest && (
          <div className="border-t border-gray-200 p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 mb-2">
              Latest in this journal
            </p>
            <h4
              className="text-base font-bold text-gray-900 leading-snug"
              style={{ fontFamily: SERIF }}
            >
              <Link
                to={`/articles/${latest.id}`}
                className="hover:text-gray-600 transition-colors"
              >
                {latest.title}
              </Link>
            </h4>
            <p className="mt-1 text-xs text-gray-500">
              By <span className="font-semibold text-gray-700">{latest.authors.join(', ')}</span> &middot;{' '}
              {latest.publicationDate}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

/* Our Journals section */
const OurJournals: React.FC = () => {
  return (
    <section>
      <SectionTitle>Our Journals</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
        {JOURNALS_DATA.map((journal) => (
          <JournalCard key={journal.id} journal={journal} />
        ))}
      </div>
      <div className="mt-3">
        <Link
          to="/journals"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-800 hover:text-gray-600 transition-colors"
        >
          View all journals
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

/* Latest Articles / Publications section */
const LatestPublications: React.FC = () => {
  const recent = ARTICLES_DATA.slice(0, 4);
  return (
    <section>
      <SectionTitle>Latest Publications</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
        {recent.map((article) => (
          <div key={article.id} className="bg-white border border-gray-200 p-5">
            <ArticleListItem article={article} />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <SectionTitle>Recent Books &amp; Proceedings</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {BOOKS_DATA.map((b) => (
            <Link
              key={b.id}
              to={`/books/${b.slug}`}
              className="group flex gap-4 bg-white border border-gray-200 p-4 hover:border-gray-400 transition-colors"
            >
              <div className="w-20 h-28 shrink-0 bg-gray-100 border border-gray-200">
                <img
                  src={b.coverImage}
                  alt={b.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/jpubv5.png';
                  }}
                />
              </div>
              <div className="min-w-0">
                <h4
                  className="text-sm font-bold text-gray-900 leading-snug group-hover:text-gray-600 transition-colors"
                  style={{ fontFamily: SERIF }}
                >
                  {b.title}
                </h4>
                <p className="mt-1 text-xs text-gray-600">
                  Editor: <span className="font-semibold text-gray-800">{b.editor}</span>
                </p>
                <p className="mt-1 text-xs text-gray-500">ISBN {b.isbn}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-gray-700">
                  View publication
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Editorial information section */
const EditorialInfo: React.FC = () => {
  const { theme } = useTheme();
  const editorsInChief = EDITORIAL_MEMBERS.filter((m) => m.role === 'editor-in-chief');

  return (
    <section>
      <SectionTitle>Editorial Information</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-white border border-gray-300 p-6 sm:p-8">
        <div>
          <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2" style={{ fontFamily: SERIF }}>
            <ShieldCheck className="w-4 h-4 text-gray-400" />
            Peer Review &amp; Ethics
          </h4>
          <div className="w-10 h-px bg-gray-300 my-3" />
          <p className="text-[13px] text-gray-700 leading-relaxed text-justify">
            The publication of an editorial in a peer-reviewed journal is a basic building square
            within the advancement of a coherent and regarded organize of information. It could be a
            coordinate reflection of the quality of the work of the creators and the teach that back
            them. Peer-reviewed articles support and exemplify the logical method.
          </p>
          <p className="mt-3 text-[13px] text-gray-700 leading-relaxed text-justify">
            It is subsequently vital to concur upon guidelines of anticipated moral conduct for all
            parties included within the act of distributing: the creator, the journal editor, the
            peer analyst, the distributer and the society of society-owned or supported journals.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2" style={{ fontFamily: SERIF }}>
            <Globe className="w-4 h-4 text-gray-400" />
            Open Access &amp; Contributors
          </h4>
          <div className="w-10 h-px bg-gray-300 my-3" />
          <p className="text-[13px] text-gray-700 leading-relaxed text-justify">
            All published research is available under a Creative Commons Attribution 4.0 International
            (CC BY 4.0) license, removing paywalls from knowledge across our journals, proceedings and books.
          </p>

          <h4 className="mt-6 text-sm font-bold text-gray-900 flex items-center gap-2" style={{ fontFamily: SERIF }}>
            <Users className="w-4 h-4 text-gray-400" />
            Editors-in-Chief
          </h4>
          <div className="w-10 h-px bg-gray-300 my-3" />
          <ul className="space-y-3">
            {editorsInChief.map((ed) => (
              <li key={ed.id}>
                <p className="text-[13px] font-semibold text-gray-900">
                  {ed.title} {ed.name}
                </p>
                <p className="text-xs text-gray-500 leading-snug mt-0.5">{ed.affiliation}</p>
              </li>
            ))}
          </ul>
          <Link
            to="/join-as-editor"
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-800 hover:text-gray-600 transition-colors"
          >
            Apply as an editor
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* Manuscript submission CTA */
const SubmissionCta: React.FC = () => {
  const { theme } = useTheme();
  const points = [
    'Fast-track peer review on an open access platform',
    'Accepted work published under CC BY 4.0',
    'Editorial support from submission to publication',
  ];
  return (
    <section>
      <div className="bg-[#f6f6f6] border-2 border-gray-300 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900" style={{ fontFamily: SERIF }}>
              Manuscript Submission
            </h3>
            <div className="w-12 h-px bg-gray-400 mt-3 mb-4" />
            <p className="text-[13px] text-gray-700 leading-relaxed">
              Ready to share your research? Submit your original article, review or case report to our
              editorial office and receive guidance at every step of the publication process.
            </p>
            <ul className="mt-4 space-y-2">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                  <span className="text-[13px] text-gray-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Link
              to="/submit-articles"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: theme.primaryColor }}
            >
              <FileText className="w-4 h-4" />
              Submit an article
            </Link>
            <Link
              to="/book-submission"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider border border-gray-400 text-gray-800 hover:border-gray-700 hover:bg-white transition-colors"
            >
              Book submission
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Right rail - quick navigation for authors */
const QuickLinks: React.FC = () => {
  const links = [
    { label: 'Article Submission', href: '/submit-articles' },
    { label: 'Book Submission', href: '/book-submission' },
    { label: 'Join as Editor', href: '/join-as-editor' },
    { label: 'Review Request', href: '/review-request' },
    { label: 'Manuscript Processing', href: '/manuscript-processing' },
    { label: 'Contact Us', href: '/contact' },
  ];
  return (
    <aside>
      <div className="bg-white border border-gray-300">
        <div className="px-5 py-3.5 bg-gray-50 border-b border-gray-200">
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gray-800" style={{ fontFamily: SERIF }}>
            For Authors
          </h3>
        </div>
        <ul className="divide-y divide-gray-100">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                className="flex items-center justify-between px-5 py-3 text-[13px] text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                {l.label}
                <ArrowRight className="w-3.5 h-3.5 text-gray-300" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export const ClassicHome: React.FC = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-10 min-w-0">
          <HeroIntro />
          <FeaturedJournal />
          <OurJournals />
          <LatestPublications />
          <EditorialInfo />
          <SubmissionCta />
        </div>
        <div className="lg:col-span-1 space-y-6 min-w-0">
          <QuickLinks />
          <LatestArticlesSidebar />
          <TrackSubmissionCard />
        </div>
      </div>
    </div>
  );
};

export default ClassicHome;