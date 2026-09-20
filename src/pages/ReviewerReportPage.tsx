import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Layout } from '../components/layout/Layout';
import { ContentCard } from '../templates/shared/ContentCard';
import { JOURNALS_DATA } from '../data/journalsData';
import { CaptchaField } from '../components/ui/CaptchaField';
import { Modal } from '../components/ui/Modal';

export const ReviewerReportPage: React.FC = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    title: 'Dr',
    name: '',
    email: '',
    journalId: '43',
    manuscriptId: '',
    recommendation: 'Minor Revision',
    report: '',
    captcha: '',
  });

  const [reportFile, setReportFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.manuscriptId || !formData.report) {
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
      heroBanner={
        <section
          className="py-10 text-center mb-2 transition-colors"
          style={{ backgroundColor: theme.innerBannerBg }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <h1
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide"
              style={{ fontFamily: theme.fontFamilyHeading }}
            >
              Reviewer Report Form
            </h1>
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Select Title */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Select Title <span className="text-red-600">*</span>
              </label>
              <select
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
              >
                <option value="Prof">Prof</option>
                <option value="Dr">Dr</option>
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
              </select>
            </div>

            {/* Name */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
              />
            </div>

            {/* Select Journal */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Select Journal <span className="text-red-600">*</span>
              </label>
              <select
                required
                value={formData.journalId}
                onChange={(e) => setFormData({ ...formData, journalId: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
              >
                <option value="">Select Journal</option>
                {JOURNALS_DATA.map((j) => (
                  <option key={j.id} value={j.id}>
                    {j.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Manuscript ID */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Manuscript ID <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. JAHSM-2026-902"
                value={formData.manuscriptId}
                onChange={(e) => setFormData({ ...formData, manuscriptId: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
              />
            </div>

            {/* Recommendation */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Recommendation <span className="text-red-600">*</span>
              </label>
              <select
                value={formData.recommendation}
                onChange={(e) => setFormData({ ...formData, recommendation: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
              >
                <option value="Accept without Revision">Accept without Revision</option>
                <option value="Minor Revision">Minor Revision</option>
                <option value="Major Revision">Major Revision</option>
                <option value="Reject">Reject</option>
              </select>
            </div>
          </div>

          {/* Reviewer Report */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Reviewer Report &amp; Critique <span className="text-red-600">*</span>
            </label>
            <textarea
              required
              rows={6}
              placeholder="Provide constructive feedback, queries, and critical comments for the authors and editor..."
              value={formData.report}
              onChange={(e) => setFormData({ ...formData, report: e.target.value })}
              className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
            />
          </div>

          {/* Upload Report / Annotated Manuscript */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Upload Report / Annotated Manuscript (allowed only &apos;doc,docx,pdf&apos;)
            </label>
            <input
              type="file"
              accept=".doc,.docx,.pdf"
              onChange={(e) => setReportFile(e.target.files?.[0] || null)}
              className="w-full p-2 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none"
            />
            {reportFile && (
              <p className="text-[11px] text-green-700 mt-1">
                Selected: {reportFile.name} ({(reportFile.size / 1024).toFixed(1)} KB)
              </p>
            )}
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
              Submit Report
            </button>
          </div>
        </form>
      </ContentCard>

      {submitted && (
        <Modal isOpen={true} onClose={() => setSubmitted(false)} title="Peer Review Report Submitted">
          <div className="space-y-4 text-xs text-gray-700">
            <div className="p-3 bg-green-50 border border-green-200 text-green-800 rounded">
              <p className="font-bold text-sm mb-1">Thank you for your review!</p>
              <p>Your evaluation for manuscript {formData.manuscriptId} has been submitted to the handling editor.</p>
            </div>
            <p className="text-gray-600">
              A copy of your review report has been confirmed for <strong>{formData.email}</strong>.
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
