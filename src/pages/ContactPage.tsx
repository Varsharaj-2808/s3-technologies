import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Layout } from '../components/layout/Layout';
import { ContentCard } from '../templates/shared/ContentCard';
import { Modal } from '../components/ui/Modal';
import { CheckCircle2 } from 'lucide-react';

const CAPTCHA_CHARS = '23456789abcdefghkmnpqrstuvwxyz';

function generateCaptchaCode(length = 6): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += CAPTCHA_CHARS.charAt(Math.floor(Math.random() * CAPTCHA_CHARS.length));
  }
  return result;
}

export const ContactPage: React.FC = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: '',
    captcha: '',
  });

  const [captchaCode, setCaptchaCode] = useState(() => generateCaptchaCode(6));
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptchaCode(6));
    setFormData((prev) => ({ ...prev, captcha: '' }));
    setErrorMsg(null);
  };

  useEffect(() => {
    refreshCaptcha();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.mobile.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    if (formData.captcha.trim().toLowerCase() !== captchaCode.toLowerCase()) {
      setErrorMsg('Captcha verification failed. Please enter the code shown in the image.');
      refreshCaptcha();
      return;
    }

    setErrorMsg(null);
    setIsSubmitted(true);
  };

  const handleCloseModal = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      mobile: '',
      email: '',
      subject: '',
      message: '',
      captcha: '',
    });
    refreshCaptcha();
  };

  return (
    <Layout>
      <div className="w-full max-w-5xl mx-auto py-4">
        {/* Page Title */}
        <h1
          className="text-2xl sm:text-3xl font-bold text-center mb-8 tracking-tight"
          style={{ fontFamily: theme.fontFamilyHeading, color: theme.primaryColor }}
        >
          Get In Touch
        </h1>

        <ContentCard as="div">
          {/* Management Office Section */}
          <h3
            className="text-xl font-bold mb-3"
            style={{ fontFamily: theme.fontFamilyHeading, color: theme.primaryColor }}
          >
            Management Office
          </h3>
          <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed mb-6 text-justify">
            The Management Office oversees institutional collaborations, publishing operations, indexing communications, and journal governance policies.
          </p>

          <h4 className="font-bold text-sm text-gray-900 mb-1">
            Publisher & Director:
          </h4>
          <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed mb-6">
            Dr. M. Kalyanasundaram, MSc., PhD<br />
            Email: <a href="mailto:dr.kmadhu@jpub.org" className="font-semibold underline" style={{ color: theme.primaryColor }}>dr.kmadhu@jpub.org</a><br /><br />
            Responsible for overall publishing strategy, journal portfolio management, indexing coordination, institutional partnerships, and policy oversight.
          </p>

          <h4 className="font-bold text-sm text-gray-900 mb-1">
            Registered Address:
          </h4>
          <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed mb-6">
            No. 322/A/1, Ganga Vihar Colony, Transport Nagar, Prayagraj, 211001, Uttar Pradesh, India.
          </p>

          <h4 className="font-bold text-sm text-gray-900 mb-1">
            Journal-Specific Editorial Contacts:
          </h4>
          <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed mb-6 text-justify">
            For submission inquiries, peer review status, or editorial board applications, please contact the respective journal office directly.
          </p>

          <h4 className="font-bold text-sm text-gray-900 mb-1">
            Response Time:
          </h4>
          <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed mb-8">
            We aim to respond to all inquiries within 1–3 business days
          </p>

          {/* Contact Form Section immediately following Response Time */}
          {errorMsg && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Your Name + Your Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full h-11 px-4 text-xs sm:text-[13px] text-gray-800 bg-[#ebf3f3] border border-[#d1dcdc] rounded-xs placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:bg-white transition-colors"
              />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Your Mobile"
                required
                className="w-full h-11 px-4 text-xs sm:text-[13px] text-gray-800 bg-[#ebf3f3] border border-[#d1dcdc] rounded-xs placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:bg-white transition-colors"
              />
            </div>

            {/* Row 2: Your Email + Your Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full h-11 px-4 text-xs sm:text-[13px] text-gray-800 bg-[#ebf3f3] border border-[#d1dcdc] rounded-xs placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:bg-white transition-colors"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Your Subject"
                required
                className="w-full h-11 px-4 text-xs sm:text-[13px] text-gray-800 bg-[#ebf3f3] border border-[#d1dcdc] rounded-xs placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:bg-white transition-colors"
              />
            </div>

            {/* Row 3: Your Message (Full Width) */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                required
                className="w-full p-4 text-xs sm:text-[13px] text-gray-800 bg-[#ebf3f3] border border-[#d1dcdc] rounded-xs placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:bg-white transition-colors resize-y min-h-[140px]"
              />
            </div>

            {/* Captcha Section */}
            <div className="pt-2">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
                <div className="text-xs sm:text-[13px] font-medium text-gray-700 sm:pt-2 whitespace-nowrap sm:w-36 text-right sm:text-right">
                  Captcha Validation:
                </div>

                <div className="flex flex-col gap-2">
                  {/* Styled Captcha Visual matching reference */}
                  <div className="inline-flex items-center justify-center bg-gray-100 border border-gray-300 px-4 py-2 rounded-xs select-none shadow-2xs w-fit">
                    <svg
                      width="130"
                      height="36"
                      viewBox="0 0 130 36"
                      className="overflow-hidden"
                    >
                      <rect width="130" height="36" fill="#f8fafc" />
                      {/* Noise Dots */}
                      <circle cx="15" cy="8" r="1" fill="#94a3b8" />
                      <circle cx="35" cy="28" r="1.5" fill="#64748b" />
                      <circle cx="55" cy="10" r="1" fill="#94a3b8" />
                      <circle cx="75" cy="26" r="1.5" fill="#475569" />
                      <circle cx="95" cy="12" r="1" fill="#64748b" />
                      <circle cx="115" cy="24" r="1.5" fill="#94a3b8" />
                      <circle cx="25" cy="18" r="1" fill="#cbd5e1" />
                      <circle cx="85" cy="16" r="1.2" fill="#94a3b8" />
                      <circle cx="45" cy="22" r="1" fill="#64748b" />
                      <circle cx="105" cy="8" r="1" fill="#cbd5e1" />
                      {/* Distorted Captcha Characters */}
                      {captchaCode.split('').map((char, index) => {
                        const x = 14 + index * 18;
                        const y = 24 + ((index % 2 === 0) ? -2 : 3);
                        const rotate = ((index % 3) - 1) * 7;
                        return (
                          <text
                            key={index}
                            x={x}
                            y={y}
                            fill="#1e293b"
                            fontFamily="monospace, serif"
                            fontWeight="900"
                            fontSize="20"
                            letterSpacing="2"
                            transform={`rotate(${rotate}, ${x}, ${y})`}
                          >
                            {char}
                          </text>
                        );
                      })}
                    </svg>
                  </div>

                  <div className="text-xs text-gray-700 font-normal">
                    Enter the above code here :
                  </div>

                  <input
                    type="text"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    maxLength={8}
                    required
                    className="w-48 h-8 px-3 text-xs bg-white border border-gray-300 rounded-xs focus:outline-none focus:ring-1 focus:ring-purple-600"
                  />

                  <div className="text-xs text-gray-600">
                    Can't read the image?{' '}
                    <button
                      type="button"
                      onClick={refreshCaptcha}
                      className="text-blue-600 hover:text-blue-800 underline font-medium cursor-pointer"
                    >
                      click here
                    </button>{' '}
                    to refresh.
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2 sm:pl-42">
              <button
                type="submit"
                className="px-8 py-2.5 rounded-full text-white text-xs font-bold tracking-wider uppercase transition-opacity shadow-xs hover:opacity-90 cursor-pointer"
                style={{ backgroundColor: theme.primaryColor }}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </ContentCard>
      </div>

      {/* Submission Success Modal */}
      <Modal
        isOpen={isSubmitted}
        onClose={handleCloseModal}
        title="Message Sent Successfully"
      >
        <div className="p-6 text-center">
          <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Thank you, {formData.name || 'Valued Visitor'}!
          </h3>
          <p className="text-xs sm:text-[13px] text-gray-600 mb-6 leading-relaxed">
            Your message regarding <strong className="text-gray-800">"{formData.subject || 'General Inquiry'}"</strong> has been successfully submitted to S3 Technologies's Management Desk.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded p-4 text-xs text-gray-600 text-left mb-6 space-y-1">
            <p><strong>Mobile:</strong> {formData.mobile}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Response Time:</strong> 1–3 business days</p>
          </div>
          <button
            type="button"
            onClick={handleCloseModal}
            className="w-full py-2.5 rounded-full text-white text-xs font-bold uppercase transition-opacity shadow-sm hover:opacity-90"
            style={{ backgroundColor: theme.primaryColor }}
          >
            Close
          </button>
        </div>
      </Modal>
    </Layout>
  );
};
