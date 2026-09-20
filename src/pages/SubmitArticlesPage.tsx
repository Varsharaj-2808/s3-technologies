import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Layout } from '../components/layout/Layout';
import { ContentCard } from '../templates/shared/ContentCard';
import { TrackSubmissionCard } from '../components/sidebars/TrackSubmissionCard';
import { JOURNALS_DATA } from '../data/journalsData';
import { CaptchaField } from '../components/ui/CaptchaField';
import { Modal } from '../components/ui/Modal';

export const SubmitArticlesPage: React.FC = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    authorName: '',
    email: '',
    country: '',
    journalId: '43',
    title: '',
    agreed: false,
    captcha: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.authorName || !formData.email || !formData.country || !formData.title) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (!formData.agreed) {
      setErrorMsg('Please accept the copyright agreement to proceed.');
      return;
    }
    if (!formData.captcha || formData.captcha.length !== 4) {
      setErrorMsg('Please enter the 4-digit verification code.');
      return;
    }

    const randomId = `JPUB-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedId(randomId);
    setErrorMsg(null);
  };

  const countries = [
    'India', 'United States', 'United Kingdom', 'Canada', 'Australia',
    'Nigeria', 'Pakistan', 'China', 'Germany', 'France', 'Japan',
    'South Africa', 'Saudi Arabia', 'United Arab Emirates', 'Malaysia',
    'Indonesia', 'Brazil', 'Egypt', 'Other'
  ];

  return (
    <Layout
      sidebar={<TrackSubmissionCard />}
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
              Submit Articles
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
          {/* Corresponding Author */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Corresponding Author <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Corresponding Author"
              value={formData.authorName}
              onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
              className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
            />
          </div>

          {/* Corresponding author Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Corresponding author Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="Corresponding author Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Country <span className="text-red-600">*</span>
            </label>
            <select
              required
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
            >
              <option value="">Select Country</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
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

          {/* Manuscript Title */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Manuscript Title <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Manuscript Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
            />
          </div>

          {/* Upload Files (allowed only 'doc,pdf') */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Upload Files (allowed only 'doc,pdf') <span className="text-red-600">*</span>
            </label>
            <input
              type="file"
              required
              accept=".doc,.docx,.pdf"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
              className="w-full p-2 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none"
            />
            {selectedFile && (
              <p className="text-[11px] text-green-700 mt-1">
                Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)
              </p>
            )}
          </div>

          {/* Copyright Agreement Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-2 text-xs text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={formData.agreed}
                onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                className="mt-0.5 rounded-none"
              />
              <span>
                I, and/ on behalf of my co-authors read, understand and agreed to the copyright provided under the Creative Commons License, 4.0.{' '}
                <a
                  href="https://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  Copyright Agreement
                </a>
              </span>
            </label>
          </div>

          {/* Captcha */}
          <div className="pt-3">
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
              Submit Articles
            </button>
          </div>
        </form>
      </ContentCard>

      {/* Confirmation Modal */}
      {submittedId && (
        <Modal isOpen={true} onClose={() => setSubmittedId(null)} title="Manuscript Submission Received">
          <div className="space-y-4 text-xs text-gray-700">
            <div className="p-3 bg-green-50 border border-green-200 text-green-800 rounded">
              <p className="font-bold text-sm mb-1">Thank you for your submission!</p>
              <p>Your manuscript has been registered in the S3 Technologies editorial system.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Submission Tracking ID:</p>
              <p className="font-mono text-base font-bold text-purple-900 mt-1">{submittedId}</p>
            </div>
            <p className="text-gray-600">
              A confirmation email has been dispatched to <strong>{formData.email}</strong>. Use your Tracking ID
              in the &ldquo;Track Your Submission&rdquo; form to monitor editorial screening.
            </p>
            <div className="pt-3 text-right">
              <button
                onClick={() => setSubmittedId(null)}
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
