import React from 'react';

export const SubFooter: React.FC = () => {
  return (
    <div className="bg-[#101010] text-[#8c8c8c] text-xs py-5 px-4 text-center border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="leading-relaxed">
          Copyright 2026 S3 Publication, India. This work is licensed under a{' '}
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
  );
};
