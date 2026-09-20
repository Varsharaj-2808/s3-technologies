import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from '../../context/RouterContext';
import { JOURNALS_DATA } from '../../data/journalsData';

const SERIF = "'Georgia', 'Times New Roman', serif";

export const ClassicFooter: React.FC = () => {
  const { theme } = useTheme();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Journals', href: '/journals' },
    { label: 'Books', href: '/books' },
    { label: 'Contact', href: '/contact' },
  ];

  const authorLinks = [
    { label: 'Article Submission', href: '/submit-articles' },
    { label: 'Book Submission', href: '/book-submission' },
    { label: 'Join as Editor', href: '/join-as-editor' },
    { label: 'Review Request', href: '/review-request' },
    { label: 'Reviewer Report', href: '/reviewer-report-form' },
    { label: 'Manuscript Processing', href: '/manuscript-processing' },
  ];

  const headingStyle = { fontFamily: SERIF };

  return (
    <footer
      className="bg-[#1f2937] text-gray-300 transition-colors mt-auto"
      style={{ fontFamily: theme.fontFamilyBody }}
    >
      <div className="h-1" style={{ backgroundColor: theme.primaryColor }} />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          {/* About publisher */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.18em] mb-4" style={headingStyle}>
              About
            </h3>
            <p className="text-xs leading-relaxed text-gray-400 mb-3">
              Autonomous open access academic publisher of peer-reviewed arts, science, engineering
              and healthcare journals, proceedings and books.
            </p>
            <address className="not-italic text-xs leading-relaxed text-gray-400">
              <strong className="text-gray-200 block">S3 Technologies</strong>
              No. 322/A/1, Ganga Vihar Colony, Transport Nagar,
              Prayagraj, 211001, Uttar Pradesh, India.
            </address>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.18em] mb-4" style={headingStyle}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-[13px]">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For authors */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.18em] mb-4" style={headingStyle}>
              For Authors
            </h3>
            <ul className="space-y-2 text-[13px]">
              {authorLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our journals */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.18em] mb-4" style={headingStyle}>
              Our Journals
            </h3>
            <ul className="space-y-2 text-[13px]">
              {JOURNALS_DATA.map((j) => (
                <li key={j.id}>
                  <Link
                    to={`/journals/${j.id}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {j.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-[#111827] text-gray-500 text-xs py-5 px-4 text-center border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="leading-relaxed">
            Copyright 2026 S3 Technologies, India. This work is licensed under a{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              Creative Commons Attribution 4.0 International (CC BY 4.0)
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ClassicFooter;