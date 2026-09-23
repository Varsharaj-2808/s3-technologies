import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';
import { Layout } from '../components/layout/Layout';
import { PageHeroBanner } from '../components/layout/PageHeroBanner';
import { ContentCard } from '../templates/shared/ContentCard';
import { JOURNALS_DATA } from '../data/journalsData';
import { CaptchaField } from '../components/ui/CaptchaField';
import { Modal } from '../components/ui/Modal';

export const SupportFormPage: React.FC = () => {
  const { currentPath } = useRouter();
  const { theme } = useTheme();

  const isReviewRequest = currentPath.includes('review-request');
  const pageTitle = isReviewRequest ? 'Review Request' : 'Manuscript Processing';

  const [formData, setFormData] = useState({
    manuscriptId: '',
    name: '',
    email: '',
    journalId: '43',
    decision: 'Accept Invitation to Review',
    comments: '',
    captcha: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.manuscriptId || !formData.name || !formData.email) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    if (!formData.captcha || formData.captcha.length !== 4) {
      setErrorMsg('Please enter the 4-digit verification code.');
      return;
    }
    setErrorMsg(null);
    setSubmitted(true);
  };

  return (
    <Layout
      heroBanner={<PageHeroBanner title={pageTitle} />}
    >
      <ContentCard as="div">
        {errorMsg && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Manuscript ID <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. JPUB-2026-880"
                value={formData.manuscriptId}
                onChange={(e) => setFormData({ ...formData, manuscriptId: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-[color:var(--accent-dark)] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Dr. / Prof. Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-[color:var(--accent-dark)] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="your.email@institution.edu"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-[color:var(--accent-dark)] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Select Journal <span className="text-red-600">*</span>
              </label>
              <select
                required
                value={formData.journalId}
                onChange={(e) => setFormData({ ...formData, journalId: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-[color:var(--accent-dark)] transition-colors"
              >
                {JOURNALS_DATA.map((j) => (
                  <option key={j.id} value={j.id}>
                    {j.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {isReviewRequest && (
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Review Decision <span className="text-red-600">*</span>
              </label>
              <select
                value={formData.decision}
                onChange={(e) => setFormData({ ...formData, decision: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-[color:var(--accent-dark)] transition-colors"
              >
                <option value="Accept Invitation to Review">Accept Invitation to Review</option>
                <option value="Decline with Apologies">Decline with Apologies (Unavailable)</option>
                <option value="Request Extension of Review Timeline">Request Extension of Review Timeline</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Comments / Production Notes
            </label>
            <textarea
              rows={4}
              placeholder="Additional comments or clarifications for the editorial office..."
              value={formData.comments}
              onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-[color:var(--accent-dark)] transition-colors"
            />
          </div>

          {/* Captcha */}
          <div className="pt-2">
            <CaptchaField
              value={formData.captcha}
              onChange={(val) => setFormData({ ...formData, captcha: val })}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-transparent"
              style={{
                backgroundColor: theme.buttonBg,
                border: `2px solid ${theme.buttonBg}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = theme.buttonBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.buttonBg;
                e.currentTarget.style.color = '#fff';
              }}
            >
              Submit Response
            </button>
          </div>
        </form>
      </ContentCard>

      {submitted && (
        <Modal isOpen={true} onClose={() => setSubmitted(false)} title="Submission Received">
          <div className="space-y-4 text-xs text-gray-700">
            <div className="p-3 bg-green-50 border border-green-200 text-green-800 rounded">
              <p className="font-bold text-sm mb-1">Response Recorded</p>
              <p>Your notification regarding manuscript {formData.manuscriptId} has been logged.</p>
            </div>
            <p className="text-gray-600">
              The managing editor will review your details and confirm via email at <strong>{formData.email}</strong>.
            </p>
            <div className="pt-3 text-right">
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 rounded text-xs font-bold text-white"
                style={{ backgroundColor: theme.primaryColor }}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </Layout>
  );
};
