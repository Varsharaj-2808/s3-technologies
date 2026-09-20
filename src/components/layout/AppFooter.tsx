import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from '../../context/RouterContext';

export const AppFooter: React.FC = () => {
  const { theme, themeId } = useTheme();

  return (
    <footer
      className="text-white transition-colors mt-auto"
      style={{
        backgroundColor: themeId === 'modern' ? '#0f172a' : themeId === 'heritage' ? '#2d0a0a' : '#1f1f1f',
        fontFamily: theme.fontFamilyBody,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Col 1: ADDRESS */}
          <div>
            <h3
              className="text-base font-bold tracking-wider uppercase mb-3 text-white"
              style={{ fontFamily: theme.fontFamilyHeading }}
            >
              ADDRESS
            </h3>
            <div className="w-10 h-0.5 bg-white/40 mb-4" />
            <address className="not-italic text-gray-300 text-xs sm:text-[13px] leading-relaxed">
              <strong className="text-white block mb-1">S3 Technologies</strong>
              No. 322/A/1, Ganga Vihar Colony, Transport Nagar, Prayagraj, 211001, Uttar Pradesh, India.
            </address>
          </div>

          {/* Col 2: Useful links */}
          <div>
            <h3
              className="text-base font-bold tracking-wider uppercase mb-3 text-white"
              style={{ fontFamily: theme.fontFamilyHeading }}
            >
              Useful links
            </h3>
            <div className="w-10 h-0.5 bg-white/40 mb-4" />
            <ul className="space-y-2 text-xs sm:text-[13px] text-gray-300">
              <li>
                <Link to="/submit-articles" className="hover:text-white transition-colors">
                  Article Submission
                </Link>
              </li>
              <li>
                <Link to="/join-as-editor" className="hover:text-white transition-colors">
                  Join As Editor
                </Link>
              </li>
              <li>
                <Link to="/review-request" className="hover:text-white transition-colors">
                  Review Request
                </Link>
              </li>
              <li>
                <Link to="/reviewer-report-form" className="hover:text-white transition-colors">
                  Reviewer Report Form
                </Link>
              </li>
              <li>
                <Link to="/manuscript-processing" className="hover:text-white transition-colors">
                  Manuscript Processing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: SOCIAL MEDIA LINKS */}
          <div>
            <h3
              className="text-base font-bold tracking-wider uppercase mb-3 text-white"
              style={{ fontFamily: theme.fontFamilyHeading }}
            >
              SOCIAL MEDIA LINKS
            </h3>
            <div className="w-10 h-0.5 bg-white/40 mb-4" />
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100078312530162"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xs bg-[#3b5998] hover:opacity-90 flex items-center justify-center text-white transition-opacity font-bold text-base"
                aria-label="Facebook"
              >
                f
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
