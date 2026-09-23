import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Layout } from '../components/layout/Layout';
import { ContentCard } from '../templates/shared/ContentCard';
import { JournalsSidebar } from '../components/sidebars/JournalsSidebar';
import { CaptchaField } from '../components/ui/CaptchaField';
import { Modal } from '../components/ui/Modal';

export const BookSubmissionPage: React.FC = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    proposalType: 'Edited Monograph',
    bookTitle: '',
    proposerName: '',
    affiliation: '',
    email: '',
    phone: '',
    estimatedChapters: '10',
    targetAudience: '',
    synopsis: '',
    captcha: '',
  });

  const [confirmed, setConfirmed] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.bookTitle || !formData.proposerName || !formData.email || !formData.affiliation) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    if (!formData.captcha || formData.captcha.length !== 4) {
      setErrorMsg('Please enter the 4-digit verification code.');
      return;
    }
    setErrorMsg(null);
    setConfirmed(true);
  };

  return (
    <Layout
      sidebar={<JournalsSidebar />}
      heroBanner={
        <section
          className="py-10 text-center mb-2 transition-colors border-b border-slate-200/70"
          style={{ backgroundColor: '#EEF3F8' }}
        >
          <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
            <h1
              className="text-2xl sm:text-3xl font-extrabold text-[#17233A] tracking-tight"
              style={{ fontFamily: theme.fontFamilyHeading }}
            >
              Book Submission
            </h1>
            <div className="mt-3 w-12 h-1 bg-blue-600 rounded-full" />
          </div>
        </section>
      }
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
                Proposal Type <span className="text-red-600">*</span>
              </label>
              <select
                value={formData.proposalType}
                onChange={(e) => setFormData({ ...formData, proposalType: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
              >
                <option value="Edited Monograph">Edited Monograph (With Call for Chapters)</option>
                <option value="Authored Book">Authored Academic Book</option>
                <option value="Conference Proceedings">Conference Proceedings Volume</option>
                <option value="Chapter Contribution">Single Chapter Proposal</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Proposed Book Title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Full proposed book title"
                value={formData.bookTitle}
                onChange={(e) => setFormData({ ...formData, bookTitle: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Lead Editor / Author <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Prof. / Dr. Full Name"
                value={formData.proposerName}
                onChange={(e) => setFormData({ ...formData, proposerName: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Institutional Affiliation <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="University / Institute"
                value={formData.affiliation}
                onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="academic@institution.edu"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="+Country Code Mobile"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Brief Scope &amp; Synopsis <span className="text-red-600">*</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Outline the thematic scope, target readership, and table of contents..."
              value={formData.synopsis}
              onChange={(e) => setFormData({ ...formData, synopsis: e.target.value })}
              className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
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
              Submit Proposal
            </button>
          </div>
        </form>
      </ContentCard>

      {confirmed && (
        <Modal isOpen={true} onClose={() => setConfirmed(false)} title="Book Proposal Received">
          <div className="space-y-4 text-xs text-gray-700">
            <div className="p-3 bg-green-50 border border-green-200 text-green-800 rounded">
              <p className="font-bold text-sm mb-1">Proposal Registered Successfully</p>
              <p>Thank you, {formData.proposerName}. Your monograph proposal has been delivered to the Book Editorial Board.</p>
            </div>
            <p className="text-gray-600">
              Our acquisitions editors evaluate prospective market demand, scope, and indexability. A formal decision
              and contract proposal will be dispatched to <strong>{formData.email}</strong> within 10–14 days.
            </p>
            <div className="pt-3 text-right">
              <button
                onClick={() => setConfirmed(false)}
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
