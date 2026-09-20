import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from '../../context/RouterContext';

export const HeritageFooter: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer
      className="bg-[#2d0a0a] text-stone-300 transition-colors mt-auto border-t-4 border-[#b45309]"
      style={{ fontFamily: theme.fontFamilyBody }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-3"
              style={{ fontFamily: theme.fontFamilyHeading }}
            >
              Address
            </h3>
            <div className="w-10 h-px bg-[#b45309] mb-4" />
            <address className="not-italic text-xs leading-relaxed text-stone-400">
              <strong className="text-white block mb-1">S3 Technologies</strong>
              No. 322/A/1, Ganga Vihar Colony, Transport Nagar, Prayagraj, 211001, Uttar Pradesh, India.
            </address>
          </div>

          <div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-3"
              style={{ fontFamily: theme.fontFamilyHeading }}
            >
              Useful Links
            </h3>
            <div className="w-10 h-px bg-[#b45309] mb-4" />
            <ul className="space-y-2 text-xs text-stone-400">
              <li><Link to="/submit-articles" className="hover:text-white transition-colors">Article Submission</Link></li>
              <li><Link to="/join-as-editor" className="hover:text-white transition-colors">Join As Editor</Link></li>
              <li><Link to="/review-request" className="hover:text-white transition-colors">Review Request</Link></li>
              <li><Link to="/reviewer-report-form" className="hover:text-white transition-colors">Reviewer Report Form</Link></li>
              <li><Link to="/manuscript-processing" className="hover:text-white transition-colors">Manuscript Processing</Link></li>
            </ul>
          </div>

          <div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-3"
              style={{ fontFamily: theme.fontFamilyHeading }}
            >
              Publications
            </h3>
            <div className="w-10 h-px bg-[#b45309] mb-4" />
            <ul className="space-y-2 text-xs text-stone-400">
              <li><Link to="/journals" className="hover:text-white transition-colors">Journals</Link></li>
              <li><Link to="/books" className="hover:text-white transition-colors">Books &amp; Book Series</Link></li>
              <li><Link to="/book-submission" className="hover:text-white transition-colors">Book Submission</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Centered colophon */}
      <div className="border-t border-stone-700/60">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <div className="flex items-center justify-center gap-3 text-[#b45309] mb-3">
            <span className="h-px w-12 bg-stone-700/60" />
            <span className="text-[10px]">&#10038;</span>
            <span className="h-px w-12 bg-stone-700/60" />
          </div>
          <p className="text-xs leading-relaxed text-stone-500">
            Copyright 2026 S3 Technologies, India. This work is licensed under a{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              Creative Commons Attribution 4.0 International (CC BY 4.0)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HeritageFooter;