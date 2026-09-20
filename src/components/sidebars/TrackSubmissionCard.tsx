import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Search, CheckCircle2, Clock } from 'lucide-react';
import { SubmissionTrackingResult } from '../../types';

export const TrackSubmissionCard: React.FC = () => {
  const { theme, themeId } = useTheme();
  const [paperId, setPaperId] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<SubmissionTrackingResult | null>(null);
  const [searched, setSearched] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);

    if (paperId.trim()) {
      setResult({
        paperId: paperId.toUpperCase(),
        email,
        found: true,
        title: 'Investigation into Target Therapeutics and Immunological Responses',
        journal: 'Journal of Applied Health Sciences and Medicine (JAHSM)',
        status: 'Peer Review',
        lastUpdated: '16 Sep 2026',
        nextStep: 'Awaiting reports from 2 independent expert reviewers',
      });
    } else {
      setResult({
        paperId,
        email,
        found: false,
      });
    }
  };

  const radiusClass = themeId === 'modern' ? 'rounded-lg' : 'rounded-none';

  return (
    <aside className="mb-6">
      <div
        className={`p-6 text-white shadow-sm overflow-hidden ${radiusClass}`}
        style={{
          backgroundColor: theme.sidebarBg,
          fontFamily: theme.fontFamilyBody,
        }}
      >
        <h3
          className="text-center font-bold text-base tracking-wider uppercase text-white mb-2"
          style={{ fontFamily: theme.fontFamilyHeading }}
        >
          TRACK YOUR SUBMISSION
        </h3>
        <div className="w-12 h-0.5 bg-white/60 mx-auto mb-4" />

        <form onSubmit={handleTrack} className="space-y-3 text-xs">
          <div>
            <label className="block text-white/90 text-xs mb-1 font-medium">Corresponding Email ID</label>
            <input
              type="email"
              required
              placeholder="Enter Corresponding Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-white text-gray-900 rounded-xs text-xs focus:outline-none placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-white/90 text-xs mb-1 font-medium">Paper Id</label>
            <input
              type="text"
              required
              placeholder="Enter your paper id"
              value={paperId}
              onChange={(e) => setPaperId(e.target.value)}
              className="w-full px-3 py-2 bg-white text-gray-900 rounded-xs text-xs focus:outline-none placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 font-bold text-white transition-opacity hover:opacity-90 cursor-pointer text-xs uppercase tracking-wider rounded-xs mt-2"
            style={{ backgroundColor: '#1f1f1f' }}
          >
            Track
          </button>
        </form>

        {searched && result && (
          <div className="mt-4 p-3 bg-white text-gray-800 rounded-xs text-xs">
            {result.found ? (
              <div className="space-y-1">
                <div className="font-bold text-green-700 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Status: {result.status}</span>
                </div>
                <div className="text-[11px] text-gray-600">ID: {result.paperId}</div>
                <div className="text-[11px] text-gray-600">{result.journal}</div>
                <div className="text-[10px] text-gray-400 pt-1 border-t border-gray-200">
                  {result.nextStep}
                </div>
              </div>
            ) : (
              <div className="text-red-600">
                No active submission found for the given details. Please check Paper ID and email.
              </div>
            )}
          </div>
        )}
      </div>
    </aside>
  );
};
