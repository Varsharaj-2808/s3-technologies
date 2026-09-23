import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from '../../context/RouterContext';
import { useSectionNav } from './home/scrollUtils';

export const ModernFooter: React.FC = () => {
  const { theme } = useTheme();
  const goToSection = useSectionNav();

  const exploreLinks: { label: string; sectionId: string }[] = [
    { label: 'Journals', sectionId: 'journals' },
    { label: 'Articles', sectionId: 'articles' },
    { label: 'Books', sectionId: 'books' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  return (
    <footer
      className="bg-slate-900 text-slate-300 transition-colors mt-auto"
      style={{ fontFamily: theme.fontFamilyBody }}
    >
      {/* Brand band */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/images/jpubv5.png"
                  alt="S3 Publication Logo"
                  className="h-10 w-auto object-contain"
                />
                <span
                  className="text-base font-extrabold tracking-tight text-white"
                  style={{ fontFamily: theme.fontFamilyHeading }}
                >
                 
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-400 max-w-md">
                Autonomous open access academic publisher of peer-reviewed arts, science,
                engineering, and healthcare journals, proceedings, and books.
              </p>
            </div>

            <div>
              <h3
                className="text-xs font-bold uppercase tracking-wider text-white mb-3"
                style={{ fontFamily: theme.fontFamilyHeading }}
              >
                Explore
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                {exploreLinks.map((link) => (
                  <li key={link.sectionId}>
                    <button
                      onClick={() => goToSection(link.sectionId)}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="text-xs font-bold uppercase tracking-wider text-white mb-3"
                style={{ fontFamily: theme.fontFamilyHeading }}
              >
                For Authors
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <button
                    onClick={() => goToSection('submission')}
                    className="hover:text-white transition-colors"
                  >
                    Submit Article
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => goToSection('submission')}
                    className="hover:text-white transition-colors"
                  >
                    Book Submission
                  </button>
                </li>
                <li><Link to="/review-request" className="hover:text-white transition-colors">Review Request</Link></li>
                <li><Link to="/reviewer-report-form" className="hover:text-white transition-colors">Reviewer Report</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs text-slate-500 text-center">
          <p>
            Copyright 2026 S3 Publication, India. Licensed under{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors underline"
            >
              CC BY 4.0
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;