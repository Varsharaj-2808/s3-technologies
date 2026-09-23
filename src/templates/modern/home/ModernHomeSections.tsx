import React, { useEffect } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { Link } from '../../../context/RouterContext';
import { Badge } from '../../../components/ui/Badge';
import { ArticleListItem } from '../../../components/journal/ArticleListItem';
import { JOURNALS_DATA } from '../../../data/journalsData';
import { ARTICLES_DATA } from '../../../data/articlesData';
import { BOOKS_DATA } from '../../../data/booksData';
import { scrollToSection, takePendingSection } from './scrollUtils';
import collaborationIllustration from '../../../assets/research-collaboration.png';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  Globe,
  GraduationCap,
  Layers,
  Mail,
  Send,
  Users,
} from 'lucide-react';

const SectionHeading: React.FC<{
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}> = ({ eyebrow, title, description, align = 'left', light = false }) => {
  const { theme } = useTheme();
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">{eyebrow}</p>
      <h2
        className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}
        style={{ fontFamily: theme.fontFamilyHeading }}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-sm sm:text-base leading-relaxed ${light ? 'text-slate-300' : 'text-slate-500'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

const AcademicCollaborationHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[540px] sm:max-w-[580px] lg:max-w-[620px] mx-auto select-none">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-950/60 ring-1 ring-white/10 aspect-[4/3] bg-gradient-to-b from-slate-800/90 to-slate-900/90 flex items-center justify-center">
        <img
          src={collaborationIllustration}
          alt="Indian academic researchers and scholars collaborating on scientific publishing"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover block"
        />
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white scroll-mt-24"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '26px 26px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-center">
          {/* Hero text and CTA on one side (Desktop left: ~55-58%) */}
          <div className="lg:col-span-7 xl:col-span-6">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-200 bg-blue-500/10 border border-blue-400/30 rounded-full px-3 py-1.5 mb-6">
              <Layers className="w-3.5 h-3.5" />
              Open Access &middot; Peer Reviewed
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]"
              style={{ fontFamily: theme.fontFamilyHeading }}
            >
              Advancing research through open access publishing
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              S3 Publication is an autonomous open access academic publisher of arts, science,
              engineering and healthcare journals, proceedings and books.
            </p>
            <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToSection('journals')}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm font-bold shadow-lg shadow-blue-900/40 transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                Explore journals
              </button>
              <button
                onClick={() => scrollToSection('submission')}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 ring-1 ring-white/25 text-white px-6 py-3 text-sm font-bold transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                Submit research
              </button>
            </div>
          </div>

          {/* People collaboration visual on the right (approx 42-50% width, vertically centered, responsive on mobile) */}
          <div className="lg:col-span-5 xl:col-span-6 flex justify-center items-center py-4 lg:py-0">
            <AcademicCollaborationHeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => {
  const mission = [
    'To promote the research community by publishing the articles enabling the advancements to the readers.',
    'To enhance the thirst of abundance of knowledge for motivating academician, scientist, professionals etc.',
    'Strengthening the collaboration between authors and readers for providing disseminating the scientific knowledge.',
    'To inculcate the technological applications for the societal needs and to bring out the research articles in open access platform.',
  ];

  return (
    <section id="about" className="bg-white border-y border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <SectionHeading
          eyebrow="About"
          title="Who we are"
          description="An autonomous open access academic publisher devoted to arts, science, engineering and healthcare."
        />
        <div className="grid gap-8 lg:grid-cols-12 mt-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 ring-1 ring-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Publishing ethics</h3>
              <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed text-justify mb-4">
                The publication of an editorial in a peer-reviewed journal is a basic building square
                within the advancement of a coherent and regarded organize of information. It could be a
                coordinate reflection of the quality of the work of the creators and the teach that back
                them. Peer-reviewed articles support and exemplify the logical method.
              </p>
              <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed text-justify">
                It is subsequently vital to concur upon guidelines of anticipated moral conduct for all
                parties included within the act of distributing: the creator, the journal editor, the
                peer analyst, the distributer and the society of society-owned or supported journals.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 ring-1 ring-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">For authors</h3>
              <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed text-justify">
                Our logic is to map modern wildernesses in developing and creating innovation ranges in
                research, industry and administration, and to connect with centres of brilliance around
                the world to supply definitive scope and references in focused and specialist fields.
              </p>
              <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed text-justify mt-3">
                S3 Publication gives an assurance to the scientific research community to impose peer
                review and to follow the moral ethics and integrity to ensure high quality research work
                in the field of scholarly publication.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4">Our mission</h3>
              <ul className="space-y-4">
                {mission.map((m, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-[13px] leading-relaxed text-slate-300">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const JournalsSection: React.FC = () => {
  return (
    <section id="journals" className="bg-slate-50 border-y border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <SectionHeading
          align="center"
          eyebrow="Our Journals"
          title="Peer-reviewed journals"
          description="A growing portfolio of journals spanning advances in computation, energy, health sciences and beyond."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {JOURNALS_DATA.map((j) => (
            <Link
              key={j.id}
              to={`/journals/${j.id}`}
              className="group flex flex-col bg-white rounded-2xl ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="h-48 sm:h-52 w-full overflow-hidden bg-slate-900 relative">
                <img
                  src={j.coverImage}
                  alt={j.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {j.title}
                </h3>
                <p className="mt-2 text-[13px] text-slate-500 leading-relaxed line-clamp-3 flex-1">
                  {j.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline">ISSN {j.issn}</Badge>
                  <Badge variant="success">Open Access</Badge>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-blue-600">
                  View journal
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/journals"
            className="inline-flex items-center gap-2 rounded-xl bg-white ring-1 ring-slate-300 hover:ring-blue-500 text-slate-700 hover:text-blue-600 px-6 py-3 text-sm font-bold transition-colors"
          >
            All journals
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ArticlesSection: React.FC = () => {
  const latestArticles = ARTICLES_DATA.slice(0, 4);
  return (
    <section id="articles" className="bg-white border-y border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <SectionHeading
          align="center"
          eyebrow="Latest Research"
          title="Latest articles"
          description="Recent peer-reviewed research published across our journals."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {latestArticles.map((a) => (
            <div
              key={a.id}
              className="bg-white rounded-2xl ring-1 ring-slate-200 shadow-sm p-5 sm:p-6 hover:shadow-lg transition-shadow"
            >
              <ArticleListItem article={a} />
            </div>
          ))}
        </div>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl bg-blue-50 ring-1 ring-blue-100 p-5 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-blue-600 shrink-0" />
            <p className="text-sm text-slate-700 leading-snug">
              Browse the full archive of every journal, volume and issue.
            </p>
            <Link
              to="/journals"
              className="ml-auto shrink-0 text-sm font-bold text-blue-600 hover:text-blue-500 inline-flex items-center gap-1"
            >
              Journals <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-xl bg-emerald-50 ring-1 ring-emerald-100 p-5 flex items-center gap-3">
            <Mail className="w-6 h-6 text-emerald-600 shrink-0" />
            <p className="text-sm text-slate-700 leading-snug">
              Propose your next manuscript for a fast-track review.
            </p>
            <button
              onClick={() => scrollToSection('submission')}
              className="ml-auto shrink-0 text-sm font-bold text-emerald-600 hover:text-emerald-500 inline-flex items-center gap-1"
            >
              Submission <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const BooksSection: React.FC = () => {
  return (
    <section id="books" className="bg-slate-50 border-y border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <SectionHeading
          align="center"
          eyebrow="Publications"
          title="Books & proceedings"
          description="Scholarly monographs, editions and chapter collections from our editorial program."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {BOOKS_DATA.map((b) => (
            <Link
              key={b.id}
              to={`/books/${b.slug}`}
              className="group flex flex-col sm:flex-row bg-white rounded-2xl ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="sm:w-44 shrink-0 bg-slate-100">
                <img
                  src={b.coverImage}
                  alt={b.title}
                  className="w-full h-44 sm:h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/jpubv5.png';
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {b.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Editor: <span className="font-semibold text-slate-700">{b.editor}</span>
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  ISBN: <span className="font-medium">{b.isbn}</span>
                </p>
                <p className="mt-3 text-[13px] text-slate-500 leading-relaxed line-clamp-3 flex-1">
                  {b.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-blue-600">
                  View publication
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/books"
            className="inline-flex items-center gap-2 rounded-xl bg-white ring-1 ring-slate-300 hover:ring-blue-500 text-slate-700 hover:text-blue-600 px-6 py-3 text-sm font-bold transition-colors"
          >
            All publications
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const SubmissionSection: React.FC = () => {
  const articlePoints = [
    'Fast-track peer review on an open access platform',
    'Accepted articles published under CC BY 4.0',
    'Transparent article processing and journal guidance',
  ];
  const bookPoints = [
    'Call for chapters and monograph proposals',
    'Book-e and chapter publications accepted',
    'Editorial support from proposal to publication',
  ];

  return (
    <section
      id="submission"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <SectionHeading
          align="center"
          light
          eyebrow="For Authors"
          title="Publish with us"
          description="Two clear pathways to bring your research to a global open access audience."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/5 ring-1 ring-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-5">
              <FileText className="w-6 h-6 text-blue-300" />
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3">Submit an article</h3>
            <ul className="space-y-3 mb-6">
              {articlePoints.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/submit-articles"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm font-bold transition-colors"
            >
              Submit manuscript <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white/5 ring-1 ring-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-5">
              <BookOpen className="w-6 h-6 text-emerald-300" />
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3">Publish a book / chapter</h3>
            <ul className="space-y-3 mb-6">
              {bookPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/book-submission"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 text-sm font-bold transition-colors"
            >
              Book submission <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const JoinSection: React.FC = () => {
  const disciplines = ['Arts & Humanities', 'Science', 'Engineering', 'Healthcare'];
  return (
    <section id="join" className="bg-white border-y border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="rounded-3xl bg-blue-50 ring-1 ring-blue-100 p-6 sm:p-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Opportunities</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Join as an Editor
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Become part of our editorial board and help steer peer-reviewed journals with global
              reach. Share expertise, curate special issues and contribute to ethically rigorous,
              fully open access publishing that removes paywalls from knowledge.
            </p>
            <ul className="mt-5 space-y-2.5">
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Editorial direction with a worldwide author audience</span>
              </li>
              <li className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Shape special issues and journal policy</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Open access publishing with integrity and transparency</span>
              </li>
            </ul>
            <Link
              to="/join-as-editor"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm font-bold transition-colors"
            >
              Apply now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              We are inviting editors across
            </p>
            <div className="grid grid-cols-2 gap-3">
              {disciplines.map((d) => (
                <div
                  key={d}
                  className="rounded-xl bg-slate-50 ring-1 ring-slate-200 px-4 py-3 text-sm font-bold text-slate-700 text-center"
                >
                  {d}
                </div>
              ))}
            </div>
            <p className="mt-5 text-[13px] text-slate-500 leading-relaxed">
              Nominations and self-applications are welcome from researchers and academics across all
              career stages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-slate-50 border-y border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Get in touch"
          description="Questions on submissions, peer review, journals or publications - we are happy to help."
        />
        <div className="grid gap-8 lg:grid-cols-2 mt-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 ring-1 ring-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Editorial office</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <a
                    href="mailto:jpub.editor@jpub.org"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    jpub.editor@jpub.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-800">Office</p>
                  <p className="text-slate-600">Prayagraj, Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Send className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-800">Quick channels</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Link to="/review-request" className="text-blue-600 hover:text-blue-500 font-medium">
                      Review request
                    </Link>
                    <span className="text-slate-300">|</span>
                    <Link to="/reviewer-report-form" className="text-blue-600 hover:text-blue-500 font-medium">
                      Reviewer report
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 ring-1 ring-slate-200 shadow-sm flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Send a message</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Use our contact form for queries on manuscript status, journal coordination, book
              proposals or general enquiries. You will receive a reply from our editorial team.
            </p>
            <Link
              to="/contact"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm font-bold transition-colors"
            >
              Open contact form <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ModernHomeSections: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const pending = takePendingSection();
    if (pending) {
      window.setTimeout(() => scrollToSection(pending), 120);
    }
  }, []);

  return (
    <div
      className="w-full transition-colors"
      style={{ backgroundColor: theme.bgPage, fontFamily: theme.fontFamilyBody, color: theme.textPrimary }}
    >
      <HeroSection />
      <AboutSection />
      <JournalsSection />
      <ArticlesSection />
      <BooksSection />
      <SubmissionSection />
      <JoinSection />
      <ContactSection />
    </div>
  );
};

export default ModernHomeSections;