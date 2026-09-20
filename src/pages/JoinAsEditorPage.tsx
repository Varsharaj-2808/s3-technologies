import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Layout } from '../components/layout/Layout';
import { ContentCard } from '../templates/shared/ContentCard';
import { JournalsSidebar } from '../components/sidebars/JournalsSidebar';
import { JOURNALS_DATA } from '../data/journalsData';
import { CaptchaField } from '../components/ui/CaptchaField';
import { Modal } from '../components/ui/Modal';

export const JoinAsEditorPage: React.FC = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    title: 'Dr',
    name: '',
    email: '',
    phone: '',
    country: '',
    journalId: '43',
    affiliation: '',
    specialization: '',
    captcha: '',
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.country || !formData.affiliation || !formData.specialization) {
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

  const countries = [
    'India', 'United States', 'United Kingdom', 'Canada', 'Australia',
    'Nigeria', 'Pakistan', 'China', 'Germany', 'France', 'Japan',
    'South Africa', 'Saudi Arabia', 'United Arab Emirates', 'Malaysia',
    'Indonesia', 'Brazil', 'Egypt', 'Other'
  ];

  return (
    <Layout
      sidebar={<JournalsSidebar />}
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
              Join As Editor
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

            {/* Your Name */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Your Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email ID */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Email ID <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="Email ID"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
              />
            </div>

            {/* Contact No */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Contact No
              </label>
              <input
                type="text"
                placeholder="Contact No"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          </div>

          {/* Current Affiliation */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Current Affiliation <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Current Affiliation (University, Institute or Hospital)"
              value={formData.affiliation}
              onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
              className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
            />
          </div>

          {/* Field of Specialization */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Field of Specialization <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Field of Specialization"
              value={formData.specialization}
              onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
              className="w-full p-2.5 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-purple-800 transition-colors"
            />
          </div>

          {/* Upload CV (allowed only 'doc,docx,pdf') */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Upload CV (allowed only 'doc,docx,pdf') <span className="text-red-600">*</span>
            </label>
            <input
              type="file"
              required
              accept=".doc,.docx,.pdf"
              onChange={(e) => setCvFile(e.target.files?.[0] || null)}
              className="w-full p-2 bg-[#ebf3f3] border border-[#ddd] text-xs text-gray-800 focus:bg-white focus:outline-none"
            />
            {cvFile && (
              <p className="text-[11px] text-green-700 mt-1">
                Selected: {cvFile.name} ({(cvFile.size / 1024).toFixed(1)} KB)
              </p>
            )}
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
              Submit
            </button>
          </div>
        </form>
      </ContentCard>

      {confirmed && (
        <Modal isOpen={true} onClose={() => setConfirmed(false)} title="Editorial Application Submitted">
          <div className="space-y-4 text-xs text-gray-700">
            <div className="p-3 bg-green-50 border border-green-200 text-green-800 rounded">
              <p className="font-bold text-sm mb-1">Application Received</p>
              <p>
                Thank you, {formData.title} {formData.name}. Your editorial board application has been forwarded
                to the journal Editor-in-Chief.
              </p>
            </div>
            <p className="text-gray-600">
              The editorial office reviews academic qualifications, publication citations, and affiliations. You will
              receive a response at <strong>{formData.email}</strong> within 5–7 working days.
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
